import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import { SALON } from '../data/salonData';

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
    description: '下記フォームよりお気軽にご連絡ください。',
    href: '#form',
    btnLabel: 'フォームへ',
    external: false,
    isLine: false,
  },
];

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
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">ご予約・お問い合わせ</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="fade-up mb-16">
            <SectionHeader label="CONTACT METHODS" title="ご連絡方法" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CONTACT_METHODS.map((m) => (
                <div key={m.id} className={`border p-5 text-center flex flex-col gap-3 ${m.isLine ? 'border-green-200 bg-green-50' : 'border-border'}`}>
                  <p className={`text-xs font-sans font-medium ${m.isLine ? 'text-green-700' : 'text-charcoal'}`}>{m.name}</p>
                  <p className="text-mid-gray text-xs font-sans leading-relaxed flex-1">{m.description}</p>
                  {m.external ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                        m.isLine ? 'bg-green-600 text-white hover:bg-green-700' : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
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
              <div className="border border-border bg-soft-gray p-12 text-center">
                <div className="w-8 h-px bg-silver mx-auto mb-6" />
                <p className="font-serif text-xl text-charcoal font-light mb-4">
                  お問い合わせを受け付けました
                </p>
                <p className="text-mid-gray text-sm font-sans leading-relaxed mb-8">
                  ご入力いただいたメールアドレス宛に確認メールをお送りしました。<br />
                  2営業日以内にご返信いたします。しばらくお待ちください。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
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
                      <a href="/privacy" className="text-charcoal underline underline-offset-2 hover:text-mid-gray transition-colors">プライバシーポリシー</a>
                      に同意します（必須）
                    </span>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={!form.privacy}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    送信する
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
