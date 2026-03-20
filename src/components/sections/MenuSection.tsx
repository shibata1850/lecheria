import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { MENU_CATEGORIES } from '../../data/menuData';

export default function MenuSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="MENU" title="メニュー" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {MENU_CATEGORIES.map((cat, index) => (
            <Link
              key={cat.id}
              to={cat.slug}
              className="fade-up group block bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={cat.nameJa}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="section-label text-[10px] mb-1">{cat.nameEn}</p>
                <h3 className="font-serif text-base md:text-lg text-charcoal font-light mb-2">{cat.nameJa}</h3>
                <div className="w-5 h-px bg-gold mb-2" />
                <p className="text-mid-gray text-xs font-sans leading-relaxed line-clamp-2 mb-3">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal font-serif text-sm">{cat.priceFrom}〜</span>
                  <span className="text-gold text-xs tracking-wider font-sans group-hover:underline underline-offset-4 transition-all duration-200">
                    詳しく見る →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center fade-up">
          <Link to="/menu" className="btn-outline">
            メニュー一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
