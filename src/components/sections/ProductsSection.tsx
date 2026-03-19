import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const BRANDS = [
  { name: 'UTP', url: 'https://utp.co.jp/' },
  { name: 'EXSEEDS JAPAN', url: 'https://www.major-srotas.jp/' },
  { name: 'JOY PLAN', url: 'https://www.joy-plan.com/' },
  { name: "Grant E One's", url: 'https://lalagrant.jp/' },
  { name: 'Dr.PUR BEAUTE', url: 'https://www.dr-pur.com/' },
];

export default function ProductsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="PRODUCTS" title="取扱ブランド" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {BRANDS.map((brand, index) => (
            <div
              key={brand.name}
              className="fade-up card-hover bg-white p-6 border border-border"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between"
              >
                <span className="font-serif text-charcoal text-lg font-light">{brand.name}</span>
                <span className="text-silver text-xs">→</span>
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
