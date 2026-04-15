import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'machine')!;

const MACHINE_DETAILS = [
  {
    name: 'ラジオ波',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '深部から温め、引き締め・たるみケアに',
    image: '/images/ラジオ派.png',
    effect: ['引き締め', 'たるみケア', '温活'],
  },
  {
    name: 'セルライトケア',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: 'セルライトに集中アプローチ',
    image: '/images/セルライト.png',
    effect: ['セルライト', 'むくみ', 'ボディライン'],
  },
  {
    name: 'EMS',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '筋肉へのアプローチで引き締め・くびれ形成',
    image: '/images/EMS.png',
    effect: ['引き締め', 'くびれ', '筋肉ケア'],
  },
  {
    name: '全身カッピング',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: 'リンパと血流を促進するデトックスケア',
    image: '/images/カッピング.png',
    effect: ['デトックス', 'リンパ促進', '血流改善'],
  },
  {
    name: '超音波',
    duration: '30分',
    price: '¥2,980',
    taxPrice: '¥3,278',
    detail: '肌の奥まで美容成分を浸透させる導入ケア',
    image: '/images/menu-facial-1.jpeg',
    effect: ['美容成分導入', '毛穴ケア', '肌質改善'],
  },
];

const FAQS = [
  {
    q: 'どの機器が自分に合っているかわかりません。',
    a: 'カウンセリングにてご要望やお悩みをお伺いし、最適な機器と施術内容をご提案いたします。お気軽にご相談ください。',
  },
  {
    q: 'ハンドケアと組み合わせることはできますか？',
    a: 'はい、ハンドケアと機器ケアを組み合わせたメニューもご用意しています。ご希望に合わせてプランをご提案いたします。',
  },
  {
    q: '施術中に痛みはありますか？',
    a: '機器の種類によって感覚は異なりますが、基本的にリラックスして受けていただける施術内容です。不安な方はカウンセリングでご確認ください。',
  },
];

export default function MachinePage() {
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
            <SectionHeader label="MENU" title="メニュー・料金" align="left" />
            <div className="space-y-5">
              {MACHINE_DETAILS.map((item, i) => (
                <div key={i} className="border border-border rounded-sm overflow-hidden flex flex-col sm:flex-row">
                  <div className="sm:w-32 md:w-40 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 sm:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 px-5 py-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-serif text-base text-charcoal font-medium">{item.name}</h3>
                          <p className="text-xs text-mid-gray font-sans mt-0.5">{item.detail}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-base font-medium text-charcoal font-sans">{item.price}</p>
                          <p className="text-[10px] text-mid-gray font-sans">(税込{item.taxPrice})</p>
                          <p className="text-xs text-mid-gray font-sans mt-0.5">{item.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.effect.map((e, j) => (
                        <span key={j} className="text-[10px] bg-soft-gray text-charcoal px-2 py-0.5 rounded-full font-sans tracking-wider">{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-mid-gray text-xs font-sans">※価格は税抜き表示です。</p>
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
              {['ご予約', 'カウンセリング・目的確認', '機器施術', 'アフターケアアドバイス'].map((step, i) => (
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
