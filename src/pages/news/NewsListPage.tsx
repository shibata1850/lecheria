import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { NewsArticle } from '../../lib/supabase';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { ChevronDown } from 'lucide-react';

const PAGE_SIZE = 9;

export default function NewsListPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);
  const ref = useScrollAnimation();

  useEffect(() => {
    fetchArticles(0);
  }, []);

  const fetchArticles = async (pageIndex: number) => {
    setLoading(true);
    const from = pageIndex * PAGE_SIZE;
    const to = from + PAGE_SIZE;

    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .range(from, to);

    if (!error && data) {
      const items = data.slice(0, PAGE_SIZE);
      setArticles((prev) => (pageIndex === 0 ? items : [...prev, ...items]));
      setHasMore(data.length > PAGE_SIZE);
      setPage(pageIndex);
    }
    setLoading(false);
  };

  const formatDate = (str: string | null) =>
    str ? new Date(str).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '';

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">NEWS</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">お知らせ</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="fade-up">
            <SectionHeader label="LATEST NEWS" title="最新のお知らせ" />
          </div>

          {loading && articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-mid-gray text-sm font-sans">読み込み中...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="border border-border bg-soft-gray p-12 text-center fade-up">
              <p className="font-serif text-xl text-charcoal font-light">お知らせはまだありません</p>
            </div>
          ) : (
            <div className="fade-up divide-y divide-border">
              {articles.map((article) => (
                <Link key={article.id} to={`/news/${article.slug}`}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 py-7 group">
                  <time className="text-xs font-sans text-mid-gray tracking-wider shrink-0 pt-0.5">
                    {formatDate(article.published_at)}
                  </time>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-medium text-charcoal text-sm leading-relaxed group-hover:text-gold transition-colors duration-200 mb-2">
                      {article.title}
                    </p>
                    <p className="text-xs font-sans text-mid-gray leading-relaxed line-clamp-2">
                      {article.body.replace(/[#*_`[\]]/g, '').slice(0, 120)}
                      {article.body.length > 120 && '...'}
                    </p>
                  </div>
                  {article.image_urls.length > 0 && (
                    <img src={article.image_urls[0]} alt="" className="w-20 h-20 object-cover border border-border shrink-0" loading="lazy" />
                  )}
                </Link>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-12 text-center fade-up">
              <button onClick={() => fetchArticles(page + 1)} disabled={loading}
                className="btn-outline flex items-center gap-2 mx-auto">
                <ChevronDown className="w-4 h-4" />
                {loading ? '読み込み中...' : 'もっと見る'}
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
