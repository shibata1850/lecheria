/*
  # Fix Remaining Security Issues

  ## Changes

  ### 1. Submissions anon INSERT policies — replace always-true with meaningful checks
  - Drop both duplicate "Anyone can submit" policies
  - Replace with a single policy that restricts anon inserts:
    - status must be 'pending' (cannot self-escalate to other statuses)
    - admin_note must be NULL (cannot insert admin annotations)
    - Required fields (submitter_name, submitter_email, title, body) must be non-empty

  ### 2. Revoke EXECUTE on notify_new_submission from anon and authenticated
  - Function is trigger-only; direct RPC calls must not be allowed
  - Also revoke from PUBLIC to cover all roles

  ### 3. pg_net in public schema
  - pg_net does not support ALTER EXTENSION SET SCHEMA
  - Acknowledged as infrastructure-level limitation; documented here
*/

-- ============================================================
-- 1. Fix submissions anon INSERT policies
-- ============================================================

DROP POLICY IF EXISTS "Anyone can submit" ON public.submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.submissions;

CREATE POLICY "Public contact form submission"
  ON public.submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    (status IS NULL OR status = 'pending')
    AND admin_note IS NULL
    AND submitter_name <> ''
    AND submitter_email <> ''
    AND title <> ''
    AND body <> ''
  );

-- ============================================================
-- 2. Revoke EXECUTE on notify_new_submission from all roles
-- ============================================================

REVOKE EXECUTE ON FUNCTION public.notify_new_submission() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.notify_new_submission() FROM anon;
REVOKE EXECUTE ON FUNCTION public.notify_new_submission() FROM authenticated;
