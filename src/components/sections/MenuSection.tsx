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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MENU_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className="fade-up card-hover bg-white"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Link to={cat.slug} className="flex group">
                <div className="w-32 md:w-44 shrink-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.nameJa}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: '1/1' }}
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <p className="section-label mb-2">{cat.nameEn}</p>
                    <h3 className="font-serif text-xl text-charcoal font-light mb-3">{cat.nameJa}</h3>
                    <p className="text-mid-gray text-xs font-sans leading-relaxed mb-4">{cat.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal font-serif text-sm">{cat.priceFrom}〜</span>
                    <span className="text-charcoal text-xs tracking-wider font-sans group-hover:underline underline-offset-4 transition-all duration-200">
                      詳しく見る →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
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
