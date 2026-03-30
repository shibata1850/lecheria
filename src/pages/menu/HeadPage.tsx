import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';

const cat = MENU_CATEGORIES.find((c) => c.id === 'head')!;

const FAQS = [
  {
    q: 'ヘッドスパは頭皮トラブルがある場合でも受けられますか？',
    a: '施術前のカウンセリングにてお肌・頭皮の状態をご確認いたします。状態によっては施術をお断りする場合もございますが、まずはお気軽にご相談ください。',
  },
  {
    q: '施術当日は特別な準備が必要ですか？',
    a: '特別なご準備は不要です。リラックスしてお越しください。施術着はサロンにてご用意しております。',
  },
  {
    q: '首・肩のこりにも効果はありますか？',
    a: 'ヘッドケアと合わせて首・肩周りへのアプローチも行います。お悩みの程度によって施術内容をご提案いたします。',
  },
];

export default function HeadPage() {
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
          <div className="fade-up mb-6">
            <div className="bg-amber-50 border border-amber-200 rounded-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-xs text-amber-700 font-sans tracking-wider font-medium">ご体験料金</span>
              <span className="font-serif text-lg text-amber-800 font-medium">45分 ¥4,500<span className="text-xs font-sans font-normal ml-1">(税抜き)</span></span>
            </div>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="OVERVIEW" title="施術について" align="left" />
            <p className="text-charcoal font-serif text-lg mb-2">Head Spa専門店の</p>
            <p className="font-serif text-xl text-charcoal tracking-widest mb-6">SPECIAL DRY HEAD SPA</p>
            <p className="text-text-main font-sans text-sm leading-loose">{cat.description}</p>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="MENU" title="メニュー・料金" align="left" />
            <div className="space-y-6">
              {cat.items.map((item, i) => (
                <div key={i} className="border border-border rounded-sm overflow-hidden">
                  <div className="bg-soft-gray px-6 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-serif text-base text-charcoal font-medium underline underline-offset-4 decoration-gold/60 mb-1">{item.name}</h3>
                      {item.nameDetail && (
                        <p className="text-xs text-mid-gray font-sans leading-relaxed">{item.nameDetail}</p>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm text-charcoal font-sans">通常価格 <span className="font-medium">{item.price}</span><span className="text-[10px] text-mid-gray ml-0.5">(税抜)</span></p>
                    </div>
                  </div>
                  {item.description && (
                    <div className="bg-rose-50/60 border-t border-rose-100 px-6 py-3">
                      <p className="text-xs text-rose-700 font-sans font-medium">特別価格</p>
                      <p className="text-sm text-rose-800 font-sans mt-1 leading-relaxed">{item.description}</p>
                      <p className="text-xs text-mid-gray font-sans mt-1">+税になります</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-mid-gray text-xs font-sans">※価格は税抜き表示です。</p>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="RECOMMENDED" title="こんな方に" align="left" />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['目の疲れ・首凝り・慢性頭痛', '睡眠の質が悪く疲れがとれない', '顔のたるみ・頭皮の悩み', '薄毛・ハリ艶のない毛・頭皮の乾燥'].map((item, i) => (
                <li key={i} className="bg-soft-gray rounded-sm px-4 py-3 text-xs text-charcoal font-sans text-center leading-relaxed">
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
