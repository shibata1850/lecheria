import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { NEWS_ITEMS } from '../../data/newsData';

export default function NewsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="INFORMATION" title="お知らせ" />
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="divide-y divide-border fade-up">
            {NEWS_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/blog/${item.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 group"
                >
                  <span className="text-silver font-serif text-xs tracking-widest shrink-0">{item.date}</span>
                  <div className="hidden sm:block w-px h-4 bg-border shrink-0" />
                  <div>
                    <span className="text-charcoal text-sm font-sans group-hover:underline underline-offset-4 transition-all duration-200">
                      {item.title}
                    </span>
                    <p className="text-mid-gray text-xs font-sans mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center fade-up">
            <Link to="/blog" className="btn-outline">
              一覧を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
