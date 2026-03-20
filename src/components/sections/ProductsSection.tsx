import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const BRANDS = [
  {
    name: 'UTP',
    url: 'https://utp.co.jp/',
    description: '日本が誇る美容機器メーカー。先進技術を用いた高品質な施術機器をサロンに提供しています。',
  },
  {
    name: 'EXSEEDS JAPAN',
    url: 'https://www.major-srotas.jp/',
    description: 'プロフェッショナル向けの高機能美容機器・コスメブランド。施術の質と効果を高めるアイテムを展開。',
  },
  {
    name: 'JOY PLAN',
    url: 'https://www.joy-plan.com/',
    description: '肌本来の力を引き出すスキンケアライン。天然成分を活かした安心・安全な処方で人気のブランド。',
  },
  {
    name: "Grant E One's",
    url: 'https://lalagrant.jp/',
    description: '上質な美容成分にこだわったサロン専売コスメ。保湿・美白・エイジングケアを網羅したラインナップ。',
  },
  {
    name: 'Dr.PUR BEAUTE',
    url: 'https://www.dr-pur.com/',
    description: '医師監修のドクターズコスメブランド。科学的なアプローチで敏感肌や肌トラブルにも対応したスキンケア。',
  },
];

export default function ProductsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="PRODUCTS" title="取扱ブランド" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {BRANDS.map((brand, index) => (
            <div
              key={brand.name}
              className="fade-up card-hover bg-white p-7 border border-border flex flex-col"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif text-charcoal text-lg font-light">{brand.name}</span>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver text-xs hover:text-charcoal transition-colors duration-200 shrink-0 ml-3 mt-1"
                  aria-label={`${brand.name} 公式サイトへ`}
                >
                  →
                </a>
              </div>
              <p className="text-mid-gray text-xs font-sans leading-relaxed flex-1">{brand.description}</p>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-xs text-silver font-sans tracking-wider hover:text-charcoal transition-colors duration-200"
              >
                公式サイトを見る
              </a>
            </div>
          ))}
        </div>

        <p className="text-mid-gray text-xs font-sans mt-4 fade-up">
          ※各ブランドの詳細は外部リンク先をご確認ください。
        </p>

        <div className="mt-20 fade-up">
          <SectionHeader label="FUTURE" title="今後の展開予定" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="fade-up bg-white border border-border p-8">
            <span className="inline-block text-silver text-xs border border-silver px-2 py-0.5 mb-3">準備中</span>
            <h3 className="font-serif text-charcoal text-lg font-light mb-3">レンタルルーム</h3>
            <p className="text-mid-gray text-sm font-sans leading-relaxed">
              サロン内のプライベートルームをレンタルでご提供予定です。詳細はお問い合わせください。
            </p>
          </div>

          <div className="fade-up bg-white border border-border p-8" style={{ transitionDelay: '80ms' }}>
            <span className="inline-block text-silver text-xs border border-silver px-2 py-0.5 mb-3">準備中</span>
            <h3 className="font-serif text-charcoal text-lg font-light mb-3">kidsルーム</h3>
            <p className="text-mid-gray text-sm font-sans leading-relaxed">
              お子さまをお預けいただける託児スペース、または学習塾スペースとしての展開を予定しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
