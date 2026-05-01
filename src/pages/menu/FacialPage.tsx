import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'facial')!;

const FACIAL_MENUS = [
  {
    no: 1,
    name: 'le cherien Contour Lift',
    detail: '顔・頭部・目まわりの深いこわばりに着目し、表情筋・側頭部・首肩周辺の緊張バランスを整える造顔コンセプトのフェイシャルメソッド。小顔・首肩凝り・眼精疲労に。',
    duration: '30分',
    price: 15000,
    memberPrice: 7500,
    trialPrice: 3980,
  },
  {
    no: 2,
    name: '東洋美整 Lift Facial',
    detail: '東洋美容理論ベースのオールハンドフェイシャルメソッド。引締め・むくみ・たるみ・リラクゼーションに。',
    duration: '30分',
    price: 15000,
    memberPrice: 7500,
    trialPrice: 3980,
  },
  {
    no: 3,
    name: 'IPL Ageless Skin Facial',
    detail: 'IPLの光が真皮層へ働きかけ、1度でハリ・艶・透明感のある若々しい肌へ導く光ケア。シミ・たるみ・毛穴・くすみに。',
    duration: '30分',
    price: 25000,
    memberPrice: 15000,
    trialPrice: 4980,
  },
  {
    no: 4,
    name: 'RF Skin Lift Therapy',
    detail: '高周波で肌を深層から引き締め、リフトアップへ導く上質な美容ケア。デコルテ・首・顔からほぐし、細かいシワや弛みにアプローチ。',
    duration: '30分',
    price: 20000,
    memberPrice: 10000,
    trialPrice: 3980,
  },
  {
    no: 5,
    name: 'Plasma Light Therapy',
    detail: 'プラセンタ原液・α-VC誘導体・幹細胞導入付き。プラズマ閃光で細胞に刺激を与え、再生を促すことで毛穴の引締め・たるみケアに。',
    duration: '20分',
    price: 15000,
    memberPrice: 7500,
    trialPrice: 3980,
  },
  {
    no: 6,
    name: 'Placenta Vitamin Ion Therapy',
    detail: 'プラセンタ＋ビタミンC原液をイオン導入することで、透明感・ハリ・肌荒れケアに。',
    duration: '15分',
    price: 6000,
    memberPrice: 3000,
    trialPrice: 2980,
  },
  {
    no: 7,
    name: 'Ultrasonic Facial Treatment',
    detail: '超音波の微細振動により、毛穴の汚れ・むくみ・リフトアップ・眼精疲労・首凝りの改善に。',
    duration: '30分',
    price: 10000,
    memberPrice: 5000,
    trialPrice: 2980,
  },
  {
    no: 8,
    name: 'Wrinkle & Eye Care Scalp Treatment',
    detail: 'LEDボール＋マイクロカレントケア＋目元から頭皮のマッサージ＋アイパック集中ケア付き。目元の弛み・眼精疲労・頭皮の凝りに。',
    duration: '30分',
    price: 15000,
    memberPrice: 8500,
    trialPrice: 3980,
  },
  {
    no: 9,
    name: 'HARI SERUM Lift Therapy',
    detail: 'イノスピキュール美容液を導入し、ハリとコルセットのような引き締まった肌へ。デコルテから頭皮のマッサージケア付き。',
    duration: '30分',
    price: 10000,
    memberPrice: 7500,
    trialPrice: 3980,
  },
  {
    no: 10,
    name: 'Doctor line placentaマスク導入',
    detail: 'Electroporation×美筋EMSケア付き。乾燥肌・ハリ・艶UPに。',
    duration: '30分',
    price: 10000,
    memberPrice: 5000,
    trialPrice: 2980,
  },
  {
    no: 11,
    name: 'luxury炭酸×水素パック',
    detail: '弛み毛穴・美白・シワに。',
    duration: '20分',
    price: 6000,
    memberPrice: 3500,
    trialPrice: 2980,
  },
  {
    no: 12,
    name: 'placenta炭酸パック',
    detail: '開き毛穴・ニキビ・シミに。',
    duration: '20分',
    price: 6000,
    memberPrice: 3500,
    trialPrice: 2980,
  },
  {
    no: 13,
    name: '金箔or琥珀パック',
    detail: '黒ずみ毛穴・角質・脂性肌に。',
    duration: '20分',
    price: 6000,
    memberPrice: 3500,
    trialPrice: 2980,
  },
];

const FAQS = [
  {
    q: 'どのフェイシャルメニューを選べばいいかわかりません。',
    a: 'カウンセリングにてお肌の状態やお悩みをお伺いし、最適なメニューをご提案します。初めての方もご安心ください。',
  },
  {
    q: '施術後すぐにメイクできますか？',
    a: '施術内容によって異なります。施術後にご説明いたしますが、できる限り肌を休ませる時間をおすすめしています。',
  },
  {
    q: 'ニキビや肌荒れがある状態でも受けられますか？',
    a: 'はい、状態に合わせた施術を行います。カウンセリング時にご状態をお伝えください。炎症が強い場合はご相談の上判断いたします。',
  },
];

function fmt(n: number) {
  return n.toLocaleString();
}

export default function FacialPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={cat.image} alt={cat.nameJa} className="w-full h-full object-cover" loading="eager" />
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

          {/* Overview */}
          <div className="fade-up mb-16">
            <SectionHeader label="OVERVIEW" title="施術について" align="left" />
            <p className="text-text-main font-sans text-sm leading-loose">{cat.description}</p>
          </div>

          {/* Price Table */}
          <div className="fade-up mb-16">
            <SectionHeader label="PRICE" title="料金表" align="left" />

            {/* Notes */}
            <div className="bg-soft-gray border border-border px-5 py-4 mb-6 space-y-1">
              <p className="text-xs font-sans text-mid-gray">※会員価格のご利用には年会費10,000円が必要です。</p>
              <p className="text-xs font-sans text-mid-gray">※価格は税抜き表記です。</p>
            </div>

            {/* Table header */}
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-0 mb-1">
              <div />
              <div className="text-[10px] font-sans tracking-widest text-mid-gray uppercase text-right pr-4 w-20">定価</div>
              <div className="text-[10px] font-sans tracking-widest text-mid-gray uppercase text-right pr-4 w-24">会員価格</div>
              <div className="text-[10px] font-sans tracking-widest text-rose-500 uppercase text-right w-24">お試し</div>
            </div>

            <div className="border border-border divide-y divide-border">
              {FACIAL_MENUS.map((item) => (
                <div key={item.no} className="px-4 py-4 sm:grid sm:grid-cols-[1fr_auto_auto_auto] sm:gap-0 sm:items-center flex flex-col gap-2">
                  {/* Name + detail */}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-silver text-xs shrink-0">{String(item.no).padStart(2, '0')}</span>
                      <p className="text-charcoal text-sm font-sans font-medium leading-snug">{item.name}</p>
                    </div>
                    <p className="text-mid-gray text-xs font-sans mt-1 leading-relaxed pl-6">{item.detail}</p>
                    <p className="text-silver text-xs font-sans mt-0.5 pl-6">{item.duration}</p>
                  </div>

                  {/* Prices - desktop */}
                  <div className="hidden sm:block text-right pr-4 w-20">
                    <p className="text-charcoal text-sm font-sans">¥{fmt(item.price)}</p>
                    <p className="text-[10px] text-silver font-sans">税込¥{fmt(Math.floor(item.price * 1.1))}</p>
                  </div>
                  <div className="hidden sm:block text-right pr-4 w-24">
                    <p className="text-charcoal text-sm font-sans">¥{fmt(item.memberPrice)}</p>
                    <p className="text-[10px] text-silver font-sans">税込¥{fmt(Math.floor(item.memberPrice * 1.1))}</p>
                  </div>
                  <div className="hidden sm:block text-right w-24">
                    <p className="text-rose-600 text-sm font-sans font-medium">¥{fmt(item.trialPrice)}</p>
                    <p className="text-[10px] text-silver font-sans">税込¥{fmt(Math.floor(item.trialPrice * 1.1))}</p>
                  </div>

                  {/* Prices - mobile */}
                  <div className="sm:hidden flex items-center gap-4 pl-6 flex-wrap">
                    <div>
                      <p className="text-[10px] text-mid-gray font-sans">定価</p>
                      <p className="text-charcoal text-sm font-sans">¥{fmt(item.price)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-mid-gray font-sans">会員</p>
                      <p className="text-charcoal text-sm font-sans">¥{fmt(item.memberPrice)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-rose-500 font-sans">お試し</p>
                      <p className="text-rose-600 text-sm font-sans font-medium">¥{fmt(item.trialPrice)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
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

          {/* Features */}
          <div className="fade-up mb-16">
            <SectionHeader label="FEATURES" title="施術の特徴" align="left" />
            <ul className="space-y-3">
              {cat.features.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="font-serif text-silver text-sm tracking-widest shrink-0">0{i + 1}</span>
                  <span className="text-text-main text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Flow */}
          <div className="fade-up mb-16">
            <SectionHeader label="FLOW" title="施術の流れ" align="left" />
            <ol className="space-y-6">
              {['ご予約', 'カウンセリング・肌チェック', '施術', 'ホームケアアドバイス'].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-silver/20 border border-silver/50 text-charcoal text-xs font-serif flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-text-main text-sm font-sans pt-1.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Case Study */}
          <div className="fade-up mb-16">
            <SectionHeader label="CASE STUDY" title="施術事例" align="left" />
            <div className="border border-border bg-soft-gray p-8 text-center">
              <p className="text-mid-gray text-sm font-sans">施術事例は準備中です。しばらくお待ちください。</p>
            </div>
          </div>

          {/* FAQ */}
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
            <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener noreferrer" className="btn-primary">
              ご予約はこちら
            </a>
            <Link to="/menu" className="btn-outline">メニュー一覧に戻る</Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
