import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/sections/ContactSection';

const TABS = ['脱毛', 'フェイシャル', 'ボディ', 'マシンケア'];

const VOICE_DATA: Record<string, {
  name: string;
  age: string;
  area: string;
  photo: string;
  questionnaire: string;
  items: { q: string; a: string }[];
}[]> = {
  脱毛: [
    {
      name: 'T.K',
      age: '40代',
      area: '北上市',
      photo: '/images/jiwo.jpg',
      questionnaire: '/images/LINE_ALBUM_お客様の声_260421_2.jpg',
      items: [
        {
          q: '脱毛するきっかけは？',
          a: 'ヒゲ剃りが手間であり、肌が荒れやすかったため',
        },
        {
          q: 'Le Cherienをお選びいただいた理由は？',
          a: '以前のメビウスの時に営業年数やサイトを確認し、信頼出来そうだったため',
        },
        {
          q: '脱毛施術の感想',
          a: 'ヒゲ脱毛1年くらいでほぼ目立つヒゲは生えてこなくなり今はアゴヒゲが少し生えるくらいで満足してます。',
        },
        {
          q: '脱毛をお考えのお客様に一言',
          a: '見た目はもちろん変わりますが肌のケアが楽になりヒゲ剃りの時間の短縮は大きく感じます。',
        },
      ],
    },
  ],
  フェイシャル: [],
  ボディ: [],
  マシンケア: [],
};

export default function VoicePage() {
  const [activeTab, setActiveTab] = useState('脱毛');
  const ref = useScrollAnimation();

  const voices = VOICE_DATA[activeTab] ?? [];

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
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="fade-up">
            <SectionHeader label="CUSTOMER VOICE" title="ご利用いただいたお客様より" />
          </div>

          <div className="fade-up flex flex-wrap gap-2 justify-center mb-14">
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

          <div className="fade-up space-y-16">
            {voices.length === 0 ? (
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
            ) : (
              voices.map((voice, idx) => (
                <article key={idx} className="border border-border bg-white overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                    <div className="bg-soft-gray flex flex-col">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={voice.photo}
                          alt={`${voice.name}様`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="px-6 py-5 border-t border-border">
                        <p className="font-serif text-xl font-light text-charcoal tracking-widest mb-1">{voice.name}</p>
                        <p className="text-mid-gray text-xs font-sans tracking-wider">{voice.age} &nbsp;|&nbsp; {voice.area}</p>
                        <div className="mt-4">
                          <span className="inline-block text-[10px] font-sans tracking-widest uppercase border border-gold/50 text-gold px-3 py-1">
                            {activeTab}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col gap-7">
                      {voice.items.map((item, i) => (
                        <div key={i} className={i < voice.items.length - 1 ? 'border-b border-border pb-7' : ''}>
                          <div className="flex items-start gap-3 mb-3">
                            <span className="font-serif text-gold text-lg font-light shrink-0 leading-none mt-0.5">
                              {i + 1}.
                            </span>
                            <p className="text-charcoal text-sm font-sans font-medium tracking-wide leading-relaxed">
                              {item.q}
                            </p>
                          </div>
                          <p className="text-text-main text-sm font-sans leading-loose pl-6">
                            {item.a}
                          </p>
                        </div>
                      ))}

                      <div className="pt-2">
                        <div className="border border-border rounded-sm overflow-hidden inline-block">
                          <img
                            src={voice.questionnaire}
                            alt="アンケート用紙"
                            className="w-40 h-auto object-cover"
                          />
                        </div>
                        <p className="text-mid-gray text-xs font-sans mt-2 tracking-wide">アンケート用紙</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="mt-16 fade-up text-center">
            <p className="text-mid-gray text-sm font-sans leading-relaxed mb-8">
              ル・シェリアでのご体験をぜひご予約ください。
              <br />
              初めての方もお気軽にどうぞ。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://beauty.hotpepper.jp/kr/slnH000803682/?vos=cpahpbprosmaf131118005"
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
