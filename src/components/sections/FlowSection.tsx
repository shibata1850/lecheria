import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const STEPS = [
  {
    num: '01',
    title: 'ご予約・ご来店',
    description: 'Hotpepper Beauty・公式LINE・フォームよりご予約ください。',
  },
  {
    num: '02',
    title: 'カウンセリング',
    description: '肌の状態やお悩みをていねいにお伺いします。',
  },
  {
    num: '03',
    title: '施術',
    description: '落ち着いた個室で丁寧な施術をお届けします。',
  },
  {
    num: '04',
    title: 'アフターカウンセリング',
    description: 'ホームケアアドバイスや次回プランをご案内します。',
  },
];

export default function FlowSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="FLOW" title="施術の流れ" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border z-0" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="fade-up flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mb-6 shrink-0">
                  <span className="font-serif text-sm tracking-widest">{step.num}</span>
                </div>
                <h3 className="font-serif text-base text-charcoal font-light mb-3">{step.title}</h3>
                <p className="text-mid-gray font-sans text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-mid-gray text-xs font-sans text-center mt-12 fade-up">
          ※カウンセリングのみのご来店も歓迎です。
        </p>
      </div>
    </section>
  );
}
