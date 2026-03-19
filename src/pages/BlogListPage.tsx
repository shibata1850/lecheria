import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('すべて');
  const ref = useScrollAnimation();

  const filtered = activeCategory === 'すべて'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">BLOG</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">ブログ</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="fade-up">
            <SectionHeader label="ARTICLES" title="記事一覧" />
          </div>

          <div className="fade-up flex flex-wrap gap-2 justify-center mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-sans tracking-wider border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white text-text-main border-border hover:border-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="fade-up text-center py-20">
              <p className="text-mid-gray text-sm font-sans">該当する記事がありません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((post, index) => (
                <div
                  key={post.slug}
                  className="fade-up card-hover bg-soft-gray"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Link to={`/blog/${post.slug}`} className="block group">
                    <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-charcoal text-white text-xs px-2 py-0.5 font-sans">{post.category}</span>
                        <span className="text-silver text-xs font-serif tracking-wider">{post.date}</span>
                      </div>
                      <h2 className="text-charcoal text-sm font-medium font-sans mb-2 leading-relaxed group-hover:underline underline-offset-4">
                        {post.title}
                      </h2>
                      <p className="text-mid-gray text-xs font-sans leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
