import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactSection from '../components/sections/ContactSection';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const ref = useScrollAnimation();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal font-light mb-4">記事が見つかりません</p>
          <Link to="/blog" className="btn-primary">ブログ一覧へ</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/50 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10 w-full">
            <nav className="text-white/60 text-xs font-sans tracking-wider mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">TOP</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">BLOG</Link>
              <span>/</span>
              <span className="text-white">{post.title}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-charcoal text-white text-xs px-2 py-0.5 font-sans">{post.category}</span>
              <span className="text-white/60 text-xs font-serif tracking-wider">{post.date}</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-light text-white leading-relaxed">{post.title}</h1>
          </div>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <article className="fade-up">
            <p className="text-text-main font-sans text-sm leading-loose whitespace-pre-line mb-12">
              {post.content}
            </p>

            <div className="border-t border-border pt-8">
              <p className="text-mid-gray text-xs font-sans tracking-wider mb-3">タグ</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border text-mid-gray text-xs font-sans px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 fade-up">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-mid-gray text-xs font-sans tracking-wider hover:text-charcoal transition-colors duration-200"
            >
              <span className="w-6 h-px bg-current inline-block" />
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
