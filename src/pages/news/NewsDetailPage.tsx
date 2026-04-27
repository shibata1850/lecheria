import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../../lib/supabase';
import type { NewsArticle } from '../../lib/supabase';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ContactSection from '../../components/sections/ContactSection';
import { ChevronLeft } from 'lucide-react';

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null | undefined>(undefined);
  const ref = useScrollAnimation();

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('news')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle()
      .then(({ data }) => setArticle(data));
  }, [slug]);

  if (article === undefined) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center">
        <p className="text-mid-gray text-sm font-sans">読み込み中...</p>
      </div>
    );
  }

  if (article === null) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-charcoal mb-4">記事が見つかりません</p>
          <Link to="/news" className="btn-outline">お知らせ一覧へ</Link>
        </div>
      </div>
    );
  }

  const formatDate = (str: string | null) =>
    str ? new Date(str).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="section-label mb-4 text-center">NEWS</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <p className="text-center text-xs font-sans text-mid-gray tracking-wider mb-4">
            {formatDate(article.published_at)}
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center leading-relaxed">
            {article.title}
          </h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {article.image_urls.length > 0 && (
            <div className="fade-up mb-10">
              <img
                src={article.image_urls[0]}
                alt={article.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {article.image_urls.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {article.image_urls.slice(1).map((url, i) => (
                    <img key={i} src={url} alt="" className="w-full h-40 object-cover" loading="lazy" />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="fade-up prose prose-sm max-w-none font-sans text-text-main leading-loose">
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-border fade-up">
            <Link
              to="/news"
              className="flex items-center gap-2 text-sm font-sans text-mid-gray hover:text-charcoal transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
