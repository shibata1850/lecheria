import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'machine')!;

type BeforeAfterPair = { before: string | null; after: string | null };
type MachineDetail = {
  name: string;
  duration: string;
  price: string;
  taxPrice: string;
  detail: string;
  image: string;
  topImage?: string;
  beforeAfter?: BeforeAfterPair[];
  effect: string[];
  effectDesc: { label: string; text: string }[];
};

const MACHINE_DETAILS: MachineDetail[] = [
  {
    name: 'ラジオ波',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '深部から温め、引き締め・たるみケア・温活をサポート',
    image: '/images/radio-wave.png',
    topImage: '/images/ChatGPT_Image_2026年5月1日_16_23_58.png',
    beforeAfter: [
      { before: '/images/bl005.jpg', after: null },
      { before: null, after: '/images/bl04.png' },
    ],
    effect: ['引き締め', 'たるみケア', '温活'],
    effectDesc: [
      { label: '深部加温', text: '真皮層・皮下組織まで熱を届け、コラーゲン産生を促進します。' },
      { label: '引き締め・たるみ改善', text: '筋膜や結合組織にアプローチし、フェイスライン・ボディラインを引き締めます。' },
      { label: '温活・代謝促進', text: '血流やリンパの流れを高め、むくみ・冷え性の改善をサポートします。' },
    ],
  },
  {
    name: 'セルライトケア',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '気になる部位の凹凸や引き締めをサポート',
    image: '/images/cellulite.png',
    effect: ['セルライト', 'むくみ', 'ボディライン'],
    effectDesc: [
      { label: 'セルライト分解', text: '凸凹した脂肪細胞の塊（セルライト）を振動・圧力で細かく分解します。' },
      { label: 'むくみ解消', text: 'リンパ流れを促進し、老廃物や余分な水分の排出をサポートします。' },
      { label: 'ボディライン整え', text: '太もも・お腹・二の腕など気になる部位のラインを集中的に整えます。' },
    ],
  },
  {
    name: 'EMS',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '筋肉へのアプローチで引き締め・くびれ形成',
    image: '/images/EMS.png',
    effect: ['引き締め', 'くびれ', '筋肉ケア'],
    effectDesc: [
      { label: '筋肉電気刺激', text: '微弱な電気信号で筋肉を収縮させ、運動と同様の効果を短時間で得られます。' },
      { label: 'くびれ・ボディ形成', text: 'ウエストや腹筋など深層の筋肉にアプローチし、理想のボディラインを形成します。' },
      { label: '基礎代謝向上', text: '筋肉量の維持・向上を促し、リバウンドしにくいボディへ導きます。' },
    ],
  },
  {
    name: '全身カッピング',
    duration: '30分',
    price: '¥3,980',
    taxPrice: '¥4,378',
    detail: '巡りを整え、こわばりや冷えが気になる方におすすめ',
    image: '/images/cupping.png',
    effect: ['デトックス', 'リンパ促進', '血流改善'],
    effectDesc: [
      { label: '老廃物デトックス', text: '陰圧（吸引）作用で皮膚・筋膜層の老廃物を浮かせ、体外へ排出しやすくします。' },
      { label: 'リンパ促進', text: 'リンパ管に直接アプローチし、むくみや疲労物質の流れを促します。' },
      { label: '血行改善・ほぐし', text: '滞った血流を改善し、こり・張り・疲労感を和らげます。' },
    ],
  },
  {
    name: '超音波',
    duration: '30分',
    price: '¥2,980',
    taxPrice: '¥3,278',
    detail: '肌の奥まで美容成分を浸透させる導入ケア',
    image: '/images/ultrasound.png',
    effect: ['美容成分導入', '毛穴ケア', '肌質改善'],
    effectDesc: [
      { label: '美容成分の浸透', text: '超音波振動で角質層のバリアを一時的に開き、美容液・プラセンタ・ビタミンCなどを深部まで導入します。' },
      { label: '毛穴・角質ケア', text: '微細振動が毛穴の汚れや古い角質を浮かせ、肌のキメを整えます。' },
      { label: '肌質・透明感改善', text: 'ターンオーバーを促し、乾燥・くすみ・キメ乱れを改善します。' },
    ],
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
            <div className="space-y-12">
              {MACHINE_DETAILS.map((item, i) => (
                <div key={i} className="border border-border rounded-sm overflow-hidden">
                  {item.topImage && (
                    <div className="w-full overflow-hidden" style={{ maxHeight: '280px' }}>
                      <img
                        src={item.topImage}
                        alt={`${item.name} 施術イメージ`}
                        className="w-full object-cover"
                        style={{ maxHeight: '280px' }}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row">
                    {!item.topImage && (
                      <div className="sm:w-40 md:w-48 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 sm:h-full object-contain bg-stone-50 p-3"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex-1 px-5 py-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-serif text-lg text-charcoal font-medium">{item.name}</h3>
                          <p className="text-xs text-mid-gray font-sans mt-0.5">{item.detail}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-base font-medium text-charcoal font-sans">{item.price}</p>
                          <p className="text-[10px] text-mid-gray font-sans">(税込{item.taxPrice})</p>
                          <p className="text-xs text-mid-gray font-sans mt-0.5">{item.duration}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.effect.map((e, j) => (
                          <span key={j} className="text-[10px] bg-soft-gray text-charcoal px-2 py-0.5 rounded-full font-sans tracking-wider">{e}</span>
                        ))}
                      </div>
                      <div className="space-y-2.5 border-t border-border pt-4">
                        {item.effectDesc.map((desc, j) => (
                          <div key={j} className="flex gap-3">
                            <span className="shrink-0 font-serif text-gold text-xs tracking-wider pt-0.5">0{j + 1}</span>
                            <div>
                              <p className="text-xs font-sans font-semibold text-charcoal mb-0.5">{desc.label}</p>
                              <p className="text-xs font-sans text-mid-gray leading-relaxed">{desc.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border bg-stone-50 px-5 py-4">
                    <p className="text-[10px] text-mid-gray font-sans tracking-widest uppercase mb-3">施術例 — Before / After</p>
                    {item.beforeAfter ? (
                      <div className="grid grid-cols-2 gap-3">
                        {item.beforeAfter.map((pair, pi) => (
                          <div key={pi} className="relative">
                            {pair.before ? (
                              <img
                                src={pair.before}
                                alt="Before"
                                className="w-full aspect-square object-cover rounded-sm"
                                loading="lazy"
                              />
                            ) : pair.after ? (
                              <img
                                src={pair.after}
                                alt="After"
                                className="w-full aspect-square object-cover rounded-sm"
                                loading="lazy"
                              />
                            ) : (
                              <div className="aspect-square bg-stone-100 rounded-sm flex items-center justify-center">
                                <span className="text-[10px] text-stone-400 font-sans tracking-widest uppercase">Coming Soon</span>
                              </div>
                            )}
                            <div className={`absolute top-1.5 left-1.5 text-white text-[9px] font-sans px-1.5 py-0.5 tracking-wider rounded-sm ${pair.before ? 'bg-charcoal/70' : 'bg-gold/80'}`}>
                              {pair.before ? 'BEFORE' : 'AFTER'}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <div className="aspect-video bg-stone-100 rounded-sm flex items-center justify-center">
                            <span className="text-[10px] text-stone-400 font-sans tracking-widest uppercase">Coming Soon</span>
                          </div>
                          <div className="absolute top-1.5 left-1.5 bg-charcoal/70 text-white text-[9px] font-sans px-1.5 py-0.5 tracking-wider rounded-sm">BEFORE</div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video bg-stone-100 rounded-sm flex items-center justify-center">
                            <span className="text-[10px] text-stone-400 font-sans tracking-widest uppercase">Coming Soon</span>
                          </div>
                          <div className="absolute top-1.5 left-1.5 bg-gold/80 text-white text-[9px] font-sans px-1.5 py-0.5 tracking-wider rounded-sm">AFTER</div>
                        </div>
                      </div>
                    )}
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
