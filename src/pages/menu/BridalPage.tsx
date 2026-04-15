import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import PriceTable from '../../components/ui/PriceTable';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'bridal')!;

const FAQS = [
  {
    q: 'いつ頃から始めるのが理想ですか？',
    a: '式の3〜6ヶ月前からのケアをおすすめしています。カウンセリングにてご希望の状態に合わせたスケジュールをご提案いたします。',
  },
  {
    q: '脱毛・フェイシャル・ボディを組み合わせることはできますか？',
    a: 'はい、お悩みやご希望に合わせてメニューを組み合わせたオーダーメイドプランをご提案いたします。まずはご相談ください。',
  },
  {
    q: '料金はどのくらいかかりますか？',
    a: 'ご希望のメニュー・回数・スケジュールによって異なります。カウンセリング後にお見積もりをご提示いたします。お気軽にお問い合わせください。',
  },
];

export default function BridalPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.nameJa}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/40 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
            <nav className="text-white/60 text-xs font-sans tracking-wider mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">TOP</Link>
              <span>/</span>
              <Link to="/menu" className="hover:text-white transition-colors">MENU</Link>
              <span>/</span>
              <span className="text-white">{cat.nameJa}</span>
            </nav>
            <p className="text-white/60 text-xs tracking-widest font-serif mb-2">{cat.nameEn}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-white">{cat.nameJa}</h1>
          </div>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="fade-up mb-16">
            <SectionHeader label="OVERVIEW" title="施術について" align="left" />
            <p className="text-text-main font-sans text-sm leading-loose">{cat.description}</p>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="PRICE" title="料金表" align="left" />
            <PriceTable items={cat.items} memberOnly />
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="RECOMMENDED" title="こんな方におすすめ" align="left" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.recommended.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-main text-sm font-sans">
                  <span className="w-4 h-px bg-silver inline-block shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="FEATURES" title="施術の特徴" align="left" />
            <ul className="space-y-3">
              {cat.features.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="font-serif text-gold text-sm tracking-widest shrink-0">0{i + 1}</span>
                  <span className="text-text-main text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="FLOW" title="施術の流れ" align="left" />
            <ol className="space-y-6">
              {['ご予約', 'カウンセリング・肌チェック', '施術', 'アフターケアアドバイス'].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-gold text-white text-xs font-serif flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-text-main text-sm font-sans pt-1.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="CASE STUDY" title="施工事例" align="left" />
            <p className="text-mid-gray text-xs font-sans mb-6">お客様の施術前後の変化をご紹介します。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div key={n} className="border border-border rounded-sm overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="relative">
                      <div className="aspect-[3/4] bg-stone-100 flex flex-col items-center justify-center gap-2">
                        <span className="text-xs text-mid-gray font-sans tracking-widest uppercase">Coming Soon</span>
                      </div>
                      <div className="absolute top-2 left-2 bg-charcoal/70 text-white text-[10px] font-sans px-2 py-0.5 tracking-wider">BEFORE</div>
                    </div>
                    <div className="relative">
                      <div className="aspect-[3/4] bg-stone-100 flex flex-col items-center justify-center gap-2">
                        <span className="text-xs text-mid-gray font-sans tracking-widest uppercase">Coming Soon</span>
                      </div>
                      <div className="absolute top-2 left-2 bg-gold/80 text-white text-[10px] font-sans px-2 py-0.5 tracking-wider">AFTER</div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-soft-gray border-t border-border">
                    <p className="text-xs text-mid-gray font-sans">施術内容・コメントは準備中です</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up">
            <SectionHeader label="FAQ" title="よくあるご質問" align="left" />
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <p className="text-charcoal text-sm font-sans font-medium mb-2">Q. {faq.q}</p>
                  <p className="text-mid-gray text-sm font-sans leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 fade-up flex flex-wrap gap-4">
            <a
              href="https://beauty.hotpepper.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ご予約はこちら
            </a>
            <Link to="/menu" className="btn-outline">
              メニュー一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
