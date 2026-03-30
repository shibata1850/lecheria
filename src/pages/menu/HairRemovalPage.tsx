import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'hair-removal')!;

const FAQS = [
  {
    q: '脱毛は痛いですか？',
    a: 'お肌の状態や部位によって感じ方は異なりますが、できる限り刺激を抑えた施術を行っています。気になる方は施術前にご相談ください。',
  },
  {
    q: '何回通えば効果が出ますか？',
    a: '個人差がありますが、複数回の施術を重ねることで効果を実感いただけます。カウンセリング時にペースをご提案いたします。',
  },
  {
    q: '生理中でも受けられますか？',
    a: 'VIO・下腹部の施術はお控えいただいておりますが、他の部位であれば施術可能です。詳しくはご予約時にお知らせください。',
  },
];

const PARTS_SMALL = ['脇', 'うなじ', '手足の甲', '指', 'ヘソ下'];
const PARTS_LARGE = ['ヒジ上', 'ヒジ下', '背中上', '背中下', 'ヒザ上', 'ヒザ下', 'お腹', '胸', '腰'];

const MENS_FACIAL_MENU = [
  'フェイス造美',
  'フェイススリム',
  '東洋医学オールハンドフェイシャル',
];

export default function HairRemovalPage() {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-border rounded-sm overflow-hidden">
                <div className="bg-soft-gray px-5 py-3 border-b border-border">
                  <p className="text-xs text-mid-gray font-sans tracking-wider">顔・単独パーツ</p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { name: '顔脱毛（レディース）', price: '¥1,980' },
                    { name: '眉毛デザイン脱毛', price: '¥1,980' },
                    { name: 'VIO脱毛', price: '¥9,800' },
                  ].map((item, i) => (
                    <div key={i} className="px-5 py-3 flex items-center justify-between">
                      <span className="text-charcoal text-sm font-sans">{item.name}</span>
                      <span className="text-charcoal text-sm font-sans font-medium whitespace-nowrap ml-4">
                        {item.price}
                        <span className="text-[10px] text-mid-gray font-normal ml-0.5">
                          (税込{Math.floor(parseInt(item.price.replace(/[¥,]/g, ''), 10) * 1.1).toLocaleString()}円)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-border rounded-sm overflow-hidden">
                <div className="bg-soft-gray px-5 py-3 border-b border-border">
                  <p className="text-xs text-mid-gray font-sans tracking-wider">全身パーツ</p>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-5 py-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-charcoal text-sm font-sans font-medium">プチパーツ（1箇所）</p>
                        <p className="text-xs text-mid-gray font-sans mt-1">¥1,000〜<span className="ml-1 text-[10px]">(税込¥1,100〜)</span></p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {PARTS_SMALL.map((p, i) => (
                        <span key={i} className="text-xs bg-stone-100 text-charcoal px-2 py-0.5 rounded-full font-sans">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-charcoal text-sm font-sans font-medium">ラージパーツ（1箇所）</p>
                        <p className="text-xs text-mid-gray font-sans mt-1">¥3,000〜<span className="ml-1 text-[10px]">(税込¥3,300〜)</span></p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {PARTS_LARGE.map((p, i) => (
                        <span key={i} className="text-xs bg-stone-100 text-charcoal px-2 py-0.5 rounded-full font-sans">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gold/30 rounded-sm overflow-hidden bg-amber-50/30">
              <div className="bg-gold/10 px-5 py-3 border-b border-gold/20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block shrink-0" />
                <p className="text-sm text-charcoal font-sans font-medium">髭脱毛＋美顔付き（メンズ）</p>
                <span className="ml-auto text-sm font-medium text-charcoal">¥5,500<span className="text-[10px] text-mid-gray font-normal ml-0.5">(税込¥6,050)</span></span>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs text-mid-gray font-sans mb-3">セット内容の美顔メニュー（下記よりご選択）</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MENS_FACIAL_MENU.map((menu, i) => (
                    <div key={i} className="bg-white border border-border rounded-sm px-4 py-3 flex items-center gap-2">
                      <span className="font-serif text-gold text-xs tracking-wider shrink-0">0{i + 1}</span>
                      <span className="text-xs text-charcoal font-sans">{menu}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-mid-gray font-sans mt-3">※美顔の内容は当日のお肌状態やご希望に合わせてご提案いたします。</p>
              </div>
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
