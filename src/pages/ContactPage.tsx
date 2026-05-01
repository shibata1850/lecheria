import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import { SALON } from '../data/salonData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const CONTACT_METHODS = [
  {
    id: 'hotpepper',
    name: 'Hotpepper Beauty',
    description: '24時間いつでもご予約いただけます。',
    href: SALON.hotpepperUrl,
    btnLabel: '予約する',
    external: true,
    isLine: false,
  },
  {
    id: 'line',
    name: '公式LINE',
    description: 'ご相談・ご質問もLINEで気軽にどうぞ。',
    href: SALON.lineUrl,
    btnLabel: 'LINEで相談する',
    external: true,
    isLine: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'DMからのご相談も可能です。',
    href: SALON.instagramUrl,
    btnLabel: 'フォローする',
    external: true,
    isLine: false,
  },
  {
    id: 'form',
    name: 'お問い合わせフォーム',
    description: '下記フォームよりご連絡ください。',
    href: '#form',
    btnLabel: 'フォームへ',
    external: false,
    isLine: false,
  },
];

const SUBJECT_LABELS: Record<string, string> = {
  reserve: 'ご予約について',
  menu: 'メニューについて',
  other: 'その他',
};

const MENU_LABELS: Record<string, string> = {
  'hair-removal': '脱毛',
  facial: 'フェイシャル',
  body: 'ボディ',
  machine: 'マシンケア',
  undecided: '未定',
};

interface FormData {
  name: string;
  furigana: string;
  email: string;
  tel: string;
  subject: string;
  menu: string;
  message: string;
  privacy: boolean;
}

const INITIAL: FormData = {
  name: '',
  furigana: '',
  email: '',
  tel: '',
  subject: '',
  menu: '',
  message: '',
  privacy: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            furigana: form.furigana,
            from_email: form.email,
            tel: form.tel || '未入力',
            subject_label: SUBJECT_LABELS[form.subject] || '未選択',
            menu_label: MENU_LABELS[form.menu] || '未選択',
            message: form.message || 'なし',
          },
        }),
      });
      if (!res.ok) {
        throw new Error('EmailJS API error');
      }

      setSubmitted(true);
    } catch (err) {
      setError('送信に失敗しました。しばらく経ってから再度お試しください。');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">CONTACT</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            ご予約・お問い合わせ
          </h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="fade-up mb-16">
            <SectionHeader label="CONTACT METHODS" title="ご連絡方法" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CONTACT_METHODS.map((m) => (
                <div
                  key={m.id}
                  className={`border p-5 text-center flex flex-col gap-3 ${
                    m.isLine ? 'border-green-200 bg-green-50' : 'border-border'
                  }`}
                >
                  <p
                    className={`text-xs font-sans font-medium ${
                      m.isLine ? 'text-green-700' : 'text-charcoal'
                    }`}
                  >
                    {m.name}
                  </p>
                  <p className="text-mid-gray text-xs font-sans leading-relaxed flex-1">
                    {m.description}
                  </p>
                  {m.external ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                        m.isLine
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                      }`}
                    >
                      {m.btnLabel}
                    </a>
                  ) : (
                    <a
                      href={m.href}
                      className="text-xs tracking-widest px-4 py-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200"
                    >
                      {m.btnLabel}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div id="form" className="fade-up">
            <SectionHeader label="INQUIRY FORM" title="お問い合わせフォーム" />

            {submitted ? (
              /* ── 送信完了ページ ── */
              <div className="border border-border bg-soft-gray px-8 py-16 text-center">
                <div className="w-12 h-px bg-silver mx-auto mb-8" />
                <p className="font-serif text-2xl text-charcoal font-light mb-4 tracking-wide">
                  送信が完了しました
                </p>
                <p className="text-mid-gray text-sm font-sans leading-loose mb-2">
                  お問い合わせいただきありがとうございます。
                </p>
                <p className="text-mid-gray text-sm font-sans leading-loose mb-10">
                  内容を確認の上、2営業日以内にご返信いたします。<br />
                  しばらくお待ちください。
                </p>
                <div className="h-px w-8 bg-silver mx-auto mb-10" />
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(INITIAL);
                  }}
                  className="btn-outline"
                >
                  新しいお問い合わせ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      お名前 <span className="text-mid-gray">（必須）</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200"
                      placeholder="山田 花子"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      ふりがな <span className="text-mid-gray">（必須）</span>
                    </label>
                    <input
                      type="text"
                      name="furigana"
                      value={form.furigana}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200"
                      placeholder="やまだ はなこ"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      メールアドレス <span className="text-mid-gray">（必須）</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      電話番号 <span className="text-mid-gray">（任意）</span>
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      value={form.tel}
                      onChange={handleChange}
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200"
                      placeholder="000-000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      お問い合わせ種別
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200 appearance-none"
                    >
                      <option value="">選択してください</option>
                      <option value="reserve">ご予約について</option>
                      <option value="menu">メニューについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                      ご希望メニュー
                    </label>
                    <select
                      name="menu"
                      value={form.menu}
                      onChange={handleChange}
                      className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200 appearance-none"
                    >
                      <option value="">選択してください</option>
                      <option value="hair-removal">脱毛</option>
                      <option value="facial">フェイシャル</option>
                      <option value="body">ボディ</option>
                      <option value="machine">マシンケア</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal text-xs font-sans tracking-wider mb-2">
                    メッセージ
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-text-main focus:outline-none focus:border-charcoal transition-colors duration-200 resize-none"
                    placeholder="ご質問・ご相談内容をご記入ください"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      required
                      className="mt-1 border border-border w-4 h-4 accent-charcoal"
                    />
                    <span className="text-mid-gray text-xs font-sans leading-relaxed">
                      <a
                        href="/privacy"
                        className="text-charcoal underline underline-offset-2 hover:text-mid-gray transition-colors"
                      >
                        プライバシーポリシー
                      </a>
                      に同意します（必須）
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-sans">
                    {error}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={!form.privacy || sending}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {sending ? '送信中...' : '送信する'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16 fade-up border-t border-border pt-12 text-center">
            <p className="text-mid-gray text-sm font-sans mb-6 leading-relaxed">
              お急ぎの方はLINEよりお気軽にご連絡ください
            </p>
            <a
              href={SALON.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white text-xs tracking-widest px-8 py-3 hover:bg-green-700 transition-all duration-300"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
