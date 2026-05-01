import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/sections/ContactSection';
import { Star } from 'lucide-react';

const TABS = ['脱毛', 'フェイシャル', 'ボディ', 'マシンケア', 'ブライダル'];

interface VoiceCard {
  name: string;
  age: string;
  area: string;
  service: string;
  rating: number;
  review: string;
  items?: { q: string; a: string }[];
  source?: 'questionnaire' | 'google';
}

const VOICE_DATA: Record<string, VoiceCard[]> = {
  脱毛: [
    {
      name: 'S',
      age: '20代',
      area: '北上市',
      service: '髭脱毛',
      rating: 5,
      review: 'ヒゲ剃りの手間などをなくしたかったから通い始めました。雰囲気がとてもよく、脱毛箇所がすっきりし見栄えがよくなりました。ヒゲ剃りの手間など、すっきりさせたい方はぜひ。',
      items: [
        { q: '脱毛するきっかけは？', a: 'ヒゲ剃りの手間などをなくしたかったから。' },
        { q: 'Le Cherienをお選びいただいた理由は？', a: '雰囲気がとてもよかったから。' },
        { q: '脱毛施術の感想', a: '脱毛箇所がすっきりし、見栄えがよくなった。' },
        { q: '脱毛をお考えのお客様に一言', a: 'ヒゲ剃りの手間など、すっきりさせたい方はぜひ' },
      ],
      source: 'questionnaire',
    },
  ],
  フェイシャル: [
    {
      name: 'M',
      age: '30代',
      area: '北上市',
      service: 'フェイシャル',
      rating: 5,
      review: '施術後、肌のハリと透明感が全然違います。カウンセリングがとても丁寧で、自分の肌悩みをしっかり聞いてもらえました。また来たいと思える素敵なサロンです。',
      source: 'questionnaire',
    },
    {
      name: 'M',
      age: '20代',
      area: '花巻市',
      service: 'フェイシャル',
      rating: 5,
      review: '完全個室でリラックスして受けられました。施術中もずっと気持ちよく、気づいたら終わっていました。肌がもちもちになって嬉しいです。',
      source: 'questionnaire',
    },
  ],
  ボディ: [
    {
      name: '準備中',
      age: '',
      area: '',
      service: 'ボディ',
      rating: 5,
      review: 'ボディメニューのお客様の声を準備中です。',
      source: 'questionnaire',
    },
  ],
  マシンケア: [
    {
      name: '準備中',
      age: '',
      area: '',
      service: 'マシンケア',
      rating: 5,
      review: 'マシンケアメニューのお客様の声を準備中です。',
      source: 'questionnaire',
    },
  ],
  ブライダル: [
    {
      name: 'Google口コミ',
      age: '',
      area: '',
      service: 'ブライダル',
      rating: 5,
      review: '（Google口コミを後日掲載予定）結婚式前に数回通いました。肌の調子が整い、当日は自信を持って式を迎えることができました。スタッフの方がとても親切で、不安なことも全て相談に乗っていただけました。',
      source: 'google',
    },
    {
      name: 'Google口コミ',
      age: '',
      area: '',
      service: 'ブライダル',
      rating: 5,
      review: '（Google口コミを後日掲載予定）挙式直前に予約したにもかかわらず、丁寧に対応していただきました。完全個室なので周りを気にせずリラックスできます。肌のくすみが改善され、写真映えも良くなりました。',
      source: 'google',
    },
    {
      name: 'Google口コミ',
      age: '',
      area: '',
      service: 'ブライダル',
      rating: 5,
      review: '（Google口コミを後日掲載予定）フェイシャル・ボディ・ヘッドまで全てお任せしました。トータルで整えていただけるので、式前の忙しい時期でも一箇所で完結できてとても助かりました。',
      source: 'google',
    },
    {
      name: 'Google口コミ',
      age: '',
      area: '',
      service: 'ブライダル',
      rating: 5,
      review: '（Google口コミを後日掲載予定）遠赤外線ドームが気持ちよく、身体の内側から温まる感覚でした。カウンセリングで式までのスケジュールを一緒に考えてもらい、安心してケアを続けることができました。',
      source: 'google',
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? 'text-gold fill-gold' : 'text-silver'}`}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function VoiceCardComponent({ voice }: { voice: VoiceCard }) {
  const isPreparing = voice.name === '準備中';

  if (isPreparing) {
    return (
      <div className="border border-border bg-soft-gray p-12 text-center col-span-full">
        <p className="font-serif text-xl text-charcoal font-light mb-3">お客様の声を準備中です</p>
        <p className="text-mid-gray text-sm font-sans">現在、お客様の声を収集・整理しております。もうしばらくお待ちください。</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border p-7 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <StarRating rating={voice.rating} />
          <p className="font-serif text-base font-light text-charcoal mt-2">{voice.name}</p>
          {voice.age && (
            <p className="text-xs font-sans text-mid-gray mt-0.5">
              {voice.age}{voice.area ? ` ・ ${voice.area}` : ''}
            </p>
          )}
        </div>
        <span className="shrink-0 text-[10px] font-sans tracking-widest uppercase border border-gold/50 text-gold px-2.5 py-1">
          {voice.service}
        </span>
      </div>

      {voice.items ? (
        <div className="space-y-3 border-t border-border pt-4">
          {voice.items.map((item, i) => (
            <div key={i}>
              <p className="text-xs font-sans font-medium text-charcoal mb-1">{item.q}</p>
              <p className="text-sm font-sans text-text-main leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm font-sans text-text-main leading-loose border-t border-border pt-4">
          {voice.review}
        </p>
      )}

      {voice.source === 'google' && (
        <p className="text-[10px] font-sans text-silver mt-auto">Google口コミ</p>
      )}
    </div>
  );
}

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

          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6">
            {voices.map((voice, idx) => (
              <VoiceCardComponent key={idx} voice={voice} />
            ))}
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
