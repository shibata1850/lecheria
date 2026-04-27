import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SubmissionStatus = 'pending' | 'approved' | 'rejected';
export type NewsStatus = 'draft' | 'published' | 'archived';

export interface Submission {
  id: string;
  submitter_name: string;
  submitter_email: string;
  title: string;
  body: string;
  image_urls: string[];
  status: SubmissionStatus;
  admin_note: string | null;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  body: string;
  image_urls: string[];
  status: NewsStatus;
  published_at: string | null;
  source_submission_id: string | null;
  created_at: string;
  updated_at: string;
}
