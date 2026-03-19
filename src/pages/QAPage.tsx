import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/sections/ContactSection';
import { FAQ_ITEMS } from '../data/faqData';
import { SALON } from '../data/salonData';

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-serif text-silver text-sm tracking-widest shrink-0 pt-0.5">Q.</span>
          <span className="text-charcoal text-sm font-sans leading-relaxed group-hover:text-mid-gray transition-colors duration-200">
            {question}
          </span>
        </div>
        <span className="text-mid-gray text-xl font-light shrink-0 mt-0.5">
          {open ? '−' : '+'}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ transitionTimingFunction: 'ease' }}
      >
        <div className="pb-5 flex gap-4">
          <span className="font-serif text-silver text-sm tracking-widest shrink-0 pt-0.5">A.</span>
          <p className="text-mid-gray text-sm font-sans leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function QAPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">Q&A</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">よくあるご質問</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="fade-up">
            <SectionHeader label="FAQ" title="Q&A" />
          </div>

          <div className="fade-up divide-y-0">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="mt-16 fade-up text-center">
            <p className="text-mid-gray text-sm font-sans mb-8 leading-relaxed">
              ご不明な点は、公式LINEまたはお問い合わせフォームよりお気軽にご相談ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SALON.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white text-xs tracking-widest px-8 py-3 hover:bg-green-700 transition-all duration-300"
              >
                LINEで相談する
              </a>
              <a href="/contact" className="btn-outline">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
