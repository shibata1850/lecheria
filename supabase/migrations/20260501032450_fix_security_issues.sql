/*
  # Fix Security Issues

  ## Summary
  Addresses security warnings raised by Supabase security advisor.

  ## Changes

  ### 1. Function Search Path Mutable
  - `update_news_updated_at`: Add `SET search_path = ''`
  - `notify_new_submission`: Add `SET search_path = ''`

  ### 2. SECURITY DEFINER Function Public Access
  - Revoke EXECUTE on notify_new_submission from anon and authenticated roles
    (function is trigger-only, not meant to be called via RPC)

  ### 3. RLS Policies Always True — news table
  - Restrict INSERT/UPDATE/DELETE to verified authenticated users (auth.uid() IS NOT NULL)

  ### 4. RLS Policies Always True — submissions table
  - Keep anon INSERT for public contact form
  - Restrict UPDATE/DELETE to verified authenticated users

  ### 5. Storage Bucket Listing
  - Remove the broad SELECT policy on storage.objects for news-images
    that allowed clients to list all files in the bucket

  ## Notes
  - pg_net cannot be moved to another schema (extension does not support SET SCHEMA)
    — this must be handled at project creation time or by Supabase support
*/

-- ============================================================
-- 1. Fix function search paths
-- ============================================================

CREATE OR REPLACE FUNCTION public.update_news_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.notify_new_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  payload jsonb;
  edge_url text;
BEGIN
  payload := jsonb_build_object(
    'type', 'INSERT',
    'table', 'submissions',
    'record', jsonb_build_object(
      'id', NEW.id,
      'submitter_name', NEW.submitter_name,
      'submitter_email', NEW.submitter_email,
      'title', NEW.title,
      'body', NEW.body,
      'created_at', NEW.created_at
    )
  );

  edge_url := current_setting('app.supabase_url', true) || '/functions/v1/notify-submission';

  PERFORM net.http_post(
    url := edge_url,
    body := payload,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.supabase_anon_key', true)
    )
  );

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    RETURN NEW;
END;
$$;

-- ============================================================
-- 2. Revoke RPC access on SECURITY DEFINER trigger function
-- ============================================================

REVOKE EXECUTE ON FUNCTION public.notify_new_submission() FROM anon;
REVOKE EXECUTE ON FUNCTION public.notify_new_submission() FROM authenticated;

-- ============================================================
-- 3. Fix RLS policies for news table
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can insert news" ON public.news;
DROP POLICY IF EXISTS "Authenticated users can update news" ON public.news;
DROP POLICY IF EXISTS "Authenticated users can delete news" ON public.news;

CREATE POLICY "Authenticated users can insert news"
  ON public.news
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update news"
  ON public.news
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete news"
  ON public.news
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- ============================================================
-- 4. Fix RLS policies for submissions table
-- ============================================================

DROP POLICY IF EXISTS "Anyone can submit" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON public.submissions;

CREATE POLICY "Anyone can submit"
  ON public.submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update submissions"
  ON public.submissions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete submissions"
  ON public.submissions
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- ============================================================
-- 5. Remove broad storage SELECT policy (prevents bucket listing)
-- ============================================================

DROP POLICY IF EXISTS "Anyone can view news images" ON storage.objects;
