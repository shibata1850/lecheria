/*
  # News Submission System

  ## New Tables

  ### submissions
  Stores customer-submitted news/announcements awaiting admin review.
  - id: UUID primary key
  - submitter_name: Name of the person submitting
  - submitter_email: Contact email
  - title: Submission title (max 100 chars)
  - body: Submission body text (Markdown supported)
  - image_urls: Array of uploaded image URLs
  - status: pending | approved | rejected
  - admin_note: Admin's note (used for rejection reason)
  - created_at: Timestamp

  ### news
  Published news articles visible on the public site.
  - id: UUID primary key
  - slug: Unique URL slug
  - title: Article title
  - body: Article body (Markdown)
  - image_urls: Array of image URLs
  - status: draft | published | archived
  - published_at: When article was published
  - source_submission_id: References submissions(id) if created from a submission
  - created_at / updated_at: Timestamps

  ## Security
  - submissions: Anonymous INSERT only; authenticated users full SELECT/UPDATE/DELETE
  - news: Anonymous SELECT published only; authenticated users full access
  - Storage bucket 'news-images': anon INSERT, public SELECT, authenticated DELETE
*/

-- Enable uuid extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  submitter_name text NOT NULL,
  submitter_email text NOT NULL,
  title text NOT NULL,
  body text NOT NULL,
  image_urls text[] DEFAULT '{}',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_note text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit"
  ON submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete submissions"
  ON submissions FOR DELETE
  TO authenticated
  USING (true);

-- news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  body text NOT NULL,
  image_urls text[] DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamptz,
  source_submission_id uuid REFERENCES submissions(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  TO anon
  USING (status = 'published');

CREATE POLICY "Authenticated users can view all news"
  ON news FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);

-- Auto-update updated_at on news
CREATE OR REPLACE FUNCTION update_news_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_news_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS submissions_status_idx ON submissions(status);
CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS news_status_idx ON news(status);
CREATE INDEX IF NOT EXISTS news_published_at_idx ON news(published_at DESC);
CREATE INDEX IF NOT EXISTS news_slug_idx ON news(slug);
