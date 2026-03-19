import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { SALON } from '../../data/salonData';

const CONTACT_METHODS = [
  {
    id: 'hotpepper',
    name: 'Hotpepper Beauty',
    nameJa: 'ホットペッパービューティー',
    description: '24時間いつでもご予約いただけます。クーポンもご利用ください。',
    href: SALON.hotpepperUrl,
    btnLabel: '予約する',
    note: '※ Hotpepper経由のご予約',
    accent: 'border-white/20',
  },
  {
    id: 'line',
    name: 'LINE',
    nameJa: '公式LINE',
    description: 'ご相談・ご質問もLINEで気軽にどうぞ。お気軽にお声がけください。',
    href: SALON.lineUrl,
    btnLabel: 'LINEで相談する',
    note: '※ 友だち追加後にメッセージを',
    accent: 'border-green-500/40',
    isLine: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    nameJa: 'インスタグラム',
    description: 'サロンの日常やお役立ち情報を発信しています。DMからのご相談も可能です。',
    href: SALON.instagramUrl,
    btnLabel: 'フォローする',
    note: '※ DMからもご連絡いただけます',
    accent: 'border-white/20',
  },
  {
    id: 'form',
    name: 'CONTACT FORM',
    nameJa: 'お問い合わせフォーム',
    description: 'メニュー・料金・施術に関するご不明点など、お気軽にお問い合わせください。',
    href: '/contact',
    btnLabel: 'フォームへ',
    note: '※ 2営業日以内にご返信いたします',
    accent: 'border-white/20',
  },
];

export default function ContactSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-charcoal text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="CONTACT" title="ご予約・お問い合わせ" light />
        </div>

        <p className="text-white/60 text-sm font-sans text-center mb-12 fade-up max-w-lg mx-auto leading-relaxed">
          ご予約・ご相談はお気軽に。初めての方でも丁寧にご対応いたします。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CONTACT_METHODS.map((method, index) => (
            <div
              key={method.id}
              className={`fade-up border ${method.accent} bg-white/5 p-6 flex flex-col gap-4`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                <p className="text-white/40 text-xs font-serif tracking-widest mb-1">{method.name}</p>
                <h3 className="text-white font-sans text-sm font-medium">{method.nameJa}</h3>
              </div>
              <p className="text-white/60 text-xs font-sans leading-relaxed flex-1">{method.description}</p>
              <div>
                <p className="text-white/30 text-xs font-sans mb-3">{method.note}</p>
                {method.href.startsWith('/') ? (
                  <a
                    href={method.href}
                    className={`inline-block text-xs tracking-widest px-6 py-2.5 transition-all duration-300 ${
                      method.isLine
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'border border-white/40 text-white hover:bg-white hover:text-charcoal'
                    }`}
                  >
                    {method.btnLabel}
                  </a>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-xs tracking-widest px-6 py-2.5 transition-all duration-300 ${
                      method.isLine
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'border border-white/40 text-white hover:bg-white hover:text-charcoal'
                    }`}
                  >
                    {method.btnLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
