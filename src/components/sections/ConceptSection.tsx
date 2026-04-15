import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { SALON } from '../../data/salonData';

export default function ConceptSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="CONCEPT" title="コンセプト" align="left" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="fade-up order-2 lg:order-1">
            <p className="text-text-main font-sans text-sm leading-loose mb-6">
              「ル・シェリア」には、お客様との絆を大切にし、ご縁をつなぐサロンという想いが込められています。
              お客様一人ひとりとの出会いを大切にし、信頼と絆を育みながら、健康と美しさ、癒しの時間を提供します。
            </p>
            <p className="text-text-main font-sans text-sm leading-loose mb-6">
              日々の忙しさの中で、自分自身を大切にするひととき。
              洗練された空間と心を込めた施術を通して、心と身体を整え、本来の美しさを引き出します。
            </p>
            <p className="text-text-main font-sans text-sm leading-loose mb-10">
              脱毛・フェイシャル・ボディ・ヘッド・マシンケア・ブライダルなど、幅広いメニューで、お一人おひとりのお悩みに寄り添います。
            </p>
            <span className="text-gold text-xs tracking-widest font-serif">{SALON.nameEn}</span>
          </div>

          <div className="fade-up order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm img-shadow">
              <img
                src="/images/concept-image.png"
                alt="Le Cherien コンセプト"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
