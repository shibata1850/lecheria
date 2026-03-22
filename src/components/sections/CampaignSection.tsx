import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { CAMPAIGN_ITEMS } from '../../data/menuData';

export default function CampaignSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="PICK UP" title="おすすめメニュー" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CAMPAIGN_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="fade-up card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link to={item.link} className="block group">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={item.image}
                    alt={item.nameJa}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-all duration-300" />
                  <span className="absolute top-4 left-4 bg-gold text-white text-xs tracking-widest px-3 py-1 font-sans">
                    {item.label}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-gold-light font-serif text-xl font-light">{item.price}</span>
                    <span className="text-white/60 text-xs font-sans ml-1">〜（税込）</span>
                  </div>
                </div>
                <div className="pt-5 pb-2">
                  <p className="section-label mb-2">{item.nameEn}</p>
                  <h3 className="font-serif text-lg text-charcoal font-light mb-2">{item.nameJa}</h3>
                  <p className="text-mid-gray text-xs font-sans leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-mid-gray text-xs font-sans text-center mt-10 fade-up">
          ※価格は税込表示です。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
