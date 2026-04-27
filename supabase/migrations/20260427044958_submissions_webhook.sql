/*
  # Database Webhook for submission notifications

  Creates a trigger that calls the notify-submission Edge Function
  whenever a new row is inserted into the submissions table.
*/

-- Enable pg_net extension for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create webhook trigger function
CREATE OR REPLACE FUNCTION notify_new_submission()
RETURNS TRIGGER AS $$
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
    -- Don't fail the insert if notification fails
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_submission_inserted
  AFTER INSERT ON submissions
  FOR EACH ROW EXECUTE FUNCTION notify_new_submission();
