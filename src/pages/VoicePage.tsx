import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/sections/ContactSection';

const TABS = ['脱毛', 'フェイシャル', 'ボディ', 'マシンケア'];

export default function VoicePage() {
  const [activeTab, setActiveTab] = useState('脱毛');
  const ref = useScrollAnimation();

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">VOICE</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">お客様の声</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="fade-up">
            <SectionHeader label="CUSTOMER VOICE" title="ご利用いただいたお客様より" />
          </div>

          <div className="fade-up flex flex-wrap gap-2 justify-center mb-12">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-xs font-sans tracking-wider border transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white text-text-main border-border hover:border-charcoal'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="fade-up">
            <div className="border border-border bg-soft-gray p-12 md:p-16 text-center">
              <div className="mb-6">
                <span className="font-serif text-4xl text-silver font-light tracking-widest">—</span>
              </div>
              <p className="font-serif text-xl text-charcoal font-light mb-4">
                {activeTab}のお客様の声を掲載準備中です
              </p>
              <p className="text-mid-gray text-sm font-sans leading-relaxed max-w-sm mx-auto mb-8">
                現在、{activeTab}メニューのお客様の声を収集・整理しております。
                <br />
                もうしばらくお待ちください。
              </p>
              <div className="w-8 h-px bg-silver mx-auto" />
            </div>
          </div>

          <div className="mt-16 fade-up text-center">
            <p className="text-mid-gray text-sm font-sans leading-relaxed mb-8">
              ル・シェリアでのご体験をぜひご予約ください。
              <br />
              初めての方もお気軽にどうぞ。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://beauty.hotpepper.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ご予約はこちら
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
