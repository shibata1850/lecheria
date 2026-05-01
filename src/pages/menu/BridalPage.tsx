import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../../components/ui/SectionHeader';
import ContactSection from '../../components/sections/ContactSection';
import { MENU_CATEGORIES } from '../../data/menuData';
import { Check } from 'lucide-react';

const cat = MENU_CATEGORIES.find((c) => c.id === 'bridal')!;

const BRIDE_COURSES = [
  {
    label: 'おためし',
    name: 'ブライダルおためしケア',
    duration: '—',
    price: '¥9,800',
    perSession: '—',
    highlight: false,
    trialBadge: true,
    description: '挙式前のお悩みに合わせた体験ケアをご用意しています。まずはお気軽にご相談ください。',
  },
  {
    label: '1day',
    name: '挙式直前 1dayコース',
    duration: '180分',
    price: '¥25,800',
    perSession: '—',
    highlight: true,
    description: '挙式直前でもご相談いただけます。ボディ・フェイシャル・ヘッドをトータルにケア。',
  },
  {
    label: '3day',
    name: '挙式直前 3dayコース',
    duration: '540分（3回）',
    price: '¥60,000',
    perSession: '¥20,000 / 回',
    highlight: false,
    description: '3回で段階的に整えていくコースです。',
  },
  {
    label: '6回〜',
    name: 'シンデレラプラン',
    duration: '1,080分（6回）',
    price: '¥108,000',
    perSession: '¥18,000 / 回',
    highlight: false,
    description: '式の3〜6ヶ月前からじっくりケアするプランです。',
  },
  {
    label: '12回〜',
    name: 'デラックスプラン',
    duration: '2,160分（12回）',
    price: '¥180,000',
    perSession: '¥15,000 / 回',
    highlight: false,
    description: 'もっとも充実した回数でトータルケアを続けるプランです。',
  },
];

const GROOM_COURSES = [
  {
    name: '新郎 1dayコース',
    duration: '180分',
    price: '¥29,800',
    perSession: '—',
  },
  {
    name: '新郎 3dayコース',
    duration: '540分（3回）',
    price: '¥72,000',
    perSession: '¥24,000 / 回',
  },
];

const ONE_DAY_FLOW = [
  { time: '15分', content: 'カウンセリング＋採寸触診' },
  { time: '20分', content: '遠赤外線ドーム' },
  { time: '30分', content: 'マシンケア（超音波・ラジオ波・セルライト・EMSから1つ）' },
  { time: '45分', content: 'お悩み集中ボディトリートメント' },
  { time: '10分', content: '洗顔＋お仕上げ' },
  { time: '20分', content: 'デコルテ＋ハンドフェイシャル＋ヘッド' },
  { time: '20分', content: '光フォト or ラジオ波フェイシャル' },
  { time: '20分', content: '肌別パック' },
];

const FAQS = [
  {
    q: 'いつ頃から始めるのが理想ですか？',
    a: '式の3〜6ヶ月前からのケアをおすすめしていますが、挙式直前でもご相談いただけます。カウンセリングにてご希望の状態に合わせたスケジュールをご提案いたします。',
  },
  {
    q: '脱毛・フェイシャル・ボディを組み合わせることはできますか？',
    a: 'はい、お悩みやご希望に合わせてメニューを組み合わせたオーダーメイドプランをご提案いたします。まずはご相談ください。',
  },
  {
    q: '料金はどのくらいかかりますか？',
    a: 'おためしケアは¥9,800からご体験いただけます。ご希望のメニュー・回数・スケジュールによって異なりますので、カウンセリング後にお見積もりをご提示いたします。',
  },
];

export default function BridalPage() {
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
            <p className="text-text-main font-sans text-sm leading-loose mb-4">{cat.description}</p>
            <div className="bg-soft-gray border border-border px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm font-sans text-charcoal">完全個室・プライベート空間</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm font-sans text-charcoal">挙式直前でも相談可能</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm font-sans text-charcoal">フェイシャル・ボディ・ヘッドのトータルケア</span>
              </div>
            </div>
          </div>

          {/* Trial price highlight */}
          <div className="fade-up mb-10">
            <div className="border border-gold/40 bg-gold/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-gold mb-1">まずはお試しから</p>
                <p className="font-serif text-2xl font-light text-charcoal">ブライダルおためしケア</p>
                <p className="text-mid-gray text-sm font-sans mt-1">挙式前のお悩みに合わせた体験ケアをご用意しています。まずはお気軽にご相談ください。</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-rose-600 text-3xl font-sans font-light">¥9,800</p>
                <p className="text-silver text-xs font-sans">(税込¥10,780)</p>
              </div>
            </div>
          </div>

          {/* Bride courses - comparison */}
          <div className="fade-up mb-16">
            <SectionHeader label="BRIDAL COURSE" title="新婦向けコース" align="left" />
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <table className="w-full min-w-[560px] sm:min-w-0 border-collapse text-sm font-sans">
                <thead>
                  <tr className="bg-soft-gray">
                    <th className="border border-border px-4 py-3 text-left text-xs text-mid-gray font-normal tracking-widest uppercase">コース</th>
                    <th className="border border-border px-4 py-3 text-center text-xs text-mid-gray font-normal tracking-widest uppercase">時間</th>
                    <th className="border border-border px-4 py-3 text-right text-xs text-mid-gray font-normal tracking-widest uppercase">料金</th>
                    <th className="border border-border px-4 py-3 text-right text-xs text-mid-gray font-normal tracking-widest uppercase">1回あたり</th>
                  </tr>
                </thead>
                <tbody>
                  {BRIDE_COURSES.map((c, i) => (
                    <tr key={i} className={c.highlight ? 'bg-gold/5' : 'bg-white'}>
                      <td className="border border-border px-4 py-4">
                        <div className="flex items-center gap-2">
                          {c.trialBadge && (
                            <span className="shrink-0 text-[10px] font-sans text-rose-600 border border-rose-300 bg-rose-50 px-1.5 py-0.5 rounded-sm">お試し</span>
                          )}
                          {c.highlight && (
                            <span className="shrink-0 text-[10px] font-sans text-gold border border-gold/50 px-1.5 py-0.5 rounded-sm">人気</span>
                          )}
                          <span className="text-charcoal font-medium">{c.name}</span>
                        </div>
                        <p className="text-xs text-mid-gray mt-1">{c.description}</p>
                      </td>
                      <td className="border border-border px-4 py-4 text-center text-mid-gray">{c.duration}</td>
                      <td className="border border-border px-4 py-4 text-right font-medium text-charcoal whitespace-nowrap">
                        {c.price}
                        <p className="text-[10px] text-silver font-normal">税込{c.price.replace('¥', '¥').replace(/^¥([\d,]+)$/, (_, n) => '¥' + Math.floor(parseInt(n.replace(/,/g, ''), 10) * 1.1).toLocaleString())}</p>
                      </td>
                      <td className="border border-border px-4 py-4 text-right text-mid-gray whitespace-nowrap">{c.perSession}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 1day flow */}
          <div className="fade-up mb-16">
            <SectionHeader label="1DAY FLOW" title="1dayコース 施術の流れ" align="left" />
            <div className="border border-border divide-y divide-border">
              {ONE_DAY_FLOW.map((step, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4">
                  <span className="shrink-0 font-serif text-silver text-xs tracking-wider w-10 pt-0.5">{step.time}</span>
                  <span className="text-text-main text-sm font-sans leading-relaxed">{step.content}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Groom courses */}
          <div className="fade-up mb-16">
            <SectionHeader label="GROOM COURSE" title="新郎向けコース" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GROOM_COURSES.map((c, i) => (
                <div key={i} className="border border-border p-6 bg-white">
                  <p className="font-serif text-lg font-light text-charcoal mb-3">{c.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-mid-gray text-xs font-sans">{c.duration}</p>
                    <div className="text-right">
                      <p className="text-charcoal font-sans font-medium">{c.price}</p>
                      {c.perSession !== '—' && <p className="text-xs text-mid-gray font-sans">{c.perSession}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maternity */}
          <div className="fade-up mb-16">
            <SectionHeader label="MATERNITY" title="マタニティ新婦コース" align="left" />
            <div className="border border-border p-6 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-light text-charcoal mb-2">マタニティ新婦コース</p>
                  <p className="text-mid-gray text-sm font-sans">デコルテ、二の腕、フェイシャル、ヘッドマッサージ</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-charcoal font-sans font-medium">¥18,000</p>
                  <p className="text-silver text-xs font-sans">税込¥19,800</p>
                  <p className="text-mid-gray text-xs font-sans mt-1">90分</p>
                </div>
              </div>
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
            <SectionHeader label="FLOW" title="ご利用の流れ" align="left" />
            <ol className="space-y-6">
              {['ご予約・ご相談', 'カウンセリング・スケジュール確認', '施術', 'アフターケアアドバイス'].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-silver/20 border border-silver/50 text-charcoal text-xs font-serif flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-text-main text-sm font-sans pt-1.5">{step}</span>
                </li>
              ))}
            </ol>
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
