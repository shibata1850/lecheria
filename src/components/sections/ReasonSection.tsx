import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const REASONS = [
  {
    num: '01',
    title: '上質な空間',
    description: '完全個室のプライベート空間で、周囲を気にせずゆったりとお過ごしいただけます。遠赤外線ドームも完備し、心身を温めながら施術効果を高めます。',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6b?w=800&q=80',
    imageAlt: '完全個室の施術ルーム',
  },
  {
    num: '02',
    title: 'カウンセリング重視',
    description: 'お悩みや理想に寄り添う丁寧なカウンセリングで、一人ひとりに合わせた的確なアドバイスをご提供。結果を重視したご提案を行います。',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    imageAlt: 'カウンセリング風景',
  },
  {
    num: '03',
    title: '熟練ハンド技術×美容機器',
    description: 'キャリアある経験豊富なスタッフが、ハンド技術と先進美容機器を組み合わせて最適な施術をご提供します。',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    imageAlt: '美容機器による施術',
  },
];

export default function ReasonSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="REASON" title="選ばれる理由" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REASONS.map((reason, index) => (
            <div
              key={reason.num}
              className="fade-up bg-white shadow-sm card-hover"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <span className="font-serif text-xl font-light text-gold tracking-widest block mb-3">{reason.num}</span>
                <h3 className="font-serif text-lg text-charcoal font-light mb-3">{reason.title}</h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="text-mid-gray font-sans text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
