/*
  # Storage Policies for news-images bucket

  - Anonymous users can upload images (INSERT)
  - Anyone can view/download images (SELECT)
  - Only authenticated users can delete images (DELETE)
*/

CREATE POLICY "Anyone can upload news images"
  ON storage.objects FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'news-images');

CREATE POLICY "Anyone can view news images"
  ON storage.objects FOR SELECT
  TO anon
  USING (bucket_id = 'news-images');

CREATE POLICY "Authenticated users can delete news images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'news-images');

CREATE POLICY "Authenticated users can update news images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'news-images')
  WITH CHECK (bucket_id = 'news-images');
