import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

export default function MessageSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="MESSAGE" title="代表メッセージ" />
        </div>

        <div className="max-w-2xl mx-auto fade-up">
          <p className="text-text-main font-sans text-sm leading-loose mb-5">
            このたびはル・シェリアのホームページをご覧いただき、誠にありがとうございます。
          </p>
          <p className="text-text-main font-sans text-sm leading-loose mb-5">
            ル・シェリアは、株式会社L'Riage.の想いである「人と人とのつながり」や「人生に寄り添う美しさ」を大切にしながら誕生したエステティックサロンです。サロン名には、「大切な人」と「絆・つながり」の想いを重ねています。
          </p>
          <p className="text-text-main font-sans text-sm leading-loose mb-5">
            お客様一人ひとりとの出会いを大切にし、信頼と絆を育みながら、美しさと癒しの時間をお届けしたい。その想いを胸に、心からくつろげる空間づくりと丁寧な施術を大切にしています。
          </p>
          <p className="text-text-main font-sans text-sm leading-loose mb-5">
            ル・シェリアが、皆さまにとって安心して通える特別な場所となれるよう、心を込めてお迎えいたします。
          </p>

          <div className="w-8 h-px bg-silver mx-auto my-8" />

          <p className="text-charcoal font-serif text-sm tracking-widest text-center">Le Cherien</p>
        </div>
      </div>
    </section>
  );
}
