import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { BLOG_POSTS } from '../../data/blogData';

export default function BlogSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="BLOG" title="ブログ" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={post.slug}
              className="fade-up card-hover bg-white"
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
                  <h3 className="text-charcoal text-sm font-medium font-sans mb-2 leading-relaxed group-hover:underline underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-mid-gray text-xs font-sans leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-up">
          <Link to="/blog" className="btn-outline">
            ブログ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
