import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

export default function BrandSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="ABOUT" title="L'Riage. について" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="fade-up space-y-5">
            <p className="text-text-main font-sans text-sm leading-loose">
              L'Riage.（リアージュ）は、人と人、美しさと人生を結びつけることをコンセプトに生まれたブランドです。
            </p>
            <p className="text-text-main font-sans text-sm leading-loose">
              美容やウェルネスを中心とした事業を通して、上質な体験と心地よい時間を提供し、人々の日常に豊かさを届けることを目指しています。
            </p>
            <p className="text-text-main font-sans text-sm leading-loose">
              L'Riage.は、人と人との絆を大切にしながら、人生をより美しく彩る価値を創造していきます。
            </p>
            <div className="pt-4">
              <span className="font-serif text-silver text-xs tracking-widest">L'Riage.</span>
            </div>
          </div>

          <div className="fade-up">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/index-3.jpeg"
                alt="L'Riage. 取扱商品"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
