import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MENU_CATEGORIES } from '../data/menuData';
import ContactSection from '../components/sections/ContactSection';

export default function MenuPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="relative bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">MENU</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">メニュー一覧</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {MENU_CATEGORIES.map((cat, index) => (
              <div
                key={cat.id}
                className="fade-up card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link to={cat.slug} className="block group">
                  <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={cat.image}
                      alt={cat.nameJa}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-6 pb-4 border-b border-border">
                    <p className="section-label mb-2">{cat.nameEn}</p>
                    <h2 className="font-serif text-2xl text-charcoal font-light mb-3">{cat.nameJa}</h2>
                    <p className="text-mid-gray text-sm font-sans leading-relaxed mb-4">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal font-serif">
                        {cat.priceFrom}<span className="text-mid-gray text-xs font-sans">〜（税込）</span>
                      </span>
                      <span className="text-charcoal text-xs tracking-wider font-sans group-hover:underline underline-offset-4 transition-all duration-200">
                        詳しく見る →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-mid-gray text-xs font-sans text-center mt-10 fade-up">
            ※価格は税込表示です。記載の価格は目安となります。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
