import type { RefObject } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/sections/ContactSection';

export default function AboutLriagePage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="relative bg-charcoal text-white py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-white/40 text-xs tracking-widest font-serif mb-4">ABOUT</p>
          <div className="h-px w-8 bg-gold mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-white">L'Riage.</h1>
        </div>
      </section>

      <section ref={ref as RefObject<HTMLElement>} className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-32">
            <div className="fade-up order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="L'Riage. ブランドイメージ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="fade-up order-1 md:order-2 space-y-6">
              <p className="text-silver text-xs tracking-widest font-serif">BRAND CONCEPT</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-relaxed">
                人と人を結ぶ、<br />美しさのブランド
              </h2>
              <div className="w-8 h-px bg-gold" />
              <p className="text-text-main font-sans text-sm leading-loose">
                L'Riage.（リアージュ）は、人と人、美しさと人生を結びつけることをコンセプトに生まれたブランドです。
              </p>
              <p className="text-text-main font-sans text-sm leading-loose">
                美容やウェルネスを中心とした事業を通して、上質な体験と心地よい時間を提供し、人々の日常に豊かさを届けることを目指しています。
              </p>
              <p className="text-text-main font-sans text-sm leading-loose">
                L'Riage.は、人と人との絆を大切にしながら、人生をより美しく彩る価値を創造していきます。
              </p>
              <span className="block font-serif text-silver text-xs tracking-widest pt-4">L'Riage.</span>
            </div>
          </div>

          <div className="fade-up">
            <SectionHeader label="MESSAGE" title="代表メッセージ" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="fade-up space-y-5">
              <div className="flex items-start gap-5 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border border-border shadow-sm">
                  <img
                    src="/images/salon-line-33.jpg"
                    alt="代表"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2">
                  <p className="text-charcoal font-serif text-sm tracking-widest mb-1">Le Cherien</p>
                  <p className="text-mid-gray text-xs font-sans tracking-wide">代表</p>
                </div>
              </div>
              <p className="text-text-main font-sans text-sm leading-loose">
                このたびはル・シェリアのホームページをご覧いただき、誠にありがとうございます。
              </p>
              <p className="text-text-main font-sans text-sm leading-loose">
                ル・シェリアは、株式会社L'Riage.の想いである「人と人とのつながり」や「人生に寄り添う美しさ」を大切にしながら誕生したエステティックサロンです。
              </p>
              <p className="text-text-main font-sans text-sm leading-loose">
                お客様一人ひとりとの出会いを大切にし、信頼と絆を育みながら、美しさと癒しの時間をお届けしたい。その想いを胸に、心からくつろげる空間づくりと丁寧な施術を大切にしています。
              </p>
              <p className="text-text-main font-sans text-sm leading-loose">
                初めていらっしゃる方も、どうか安心してお越しください。スタッフ一同、心よりお待ちしております。
              </p>
              <div className="w-8 h-px bg-silver" />
            </div>

            <div className="fade-up" style={{ transitionDelay: '80ms' }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/salon-line-32.jpg"
                  alt="ル・シェリア スタッフ"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactSection />
    </>
  );
}
