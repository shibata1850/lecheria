import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SALON } from '../data/salonData';

const SECTIONS = [
  {
    title: '個人情報の収集について',
    content: `当サロンでは、お客様からご予約・お問い合わせをいただく際に、お名前・メールアドレス・電話番号などの個人情報をお預かりする場合があります。
収集した個人情報は、ご予約の確認・ご連絡・サービスのご提供に必要な目的のみに使用いたします。`,
  },
  {
    title: '個人情報の利用目的',
    content: `収集した個人情報は以下の目的のために利用いたします。

・ご予約の確認および管理
・施術に関するご連絡
・お問い合わせへの回答`,
  },
  {
    title: '個人情報の第三者提供について',
    content: `当サロンは、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。

・お客様ご本人の同意がある場合
・法令に基づく場合`,
  },
  {
    title: '個人情報の管理について',
    content: `当サロンは、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、適切な安全対策を実施いたします。`,
  },
  {
    title: 'プライバシーポリシーの変更について',
    content: `当サロンは、法令の変更やサービス内容の見直しなどにより、本プライバシーポリシーを予告なく変更する場合があります。`,
  },
  {
    title: 'お問い合わせ先',
    content: `個人情報に関するお問い合わせは、以下の連絡先までご連絡ください。

サロン名：${SALON.name}（${SALON.nameEn}）
所在地：${SALON.addressLine1}
TEL：${SALON.tel}
Email：${SALON.contactEmail}`,
  },
];

export default function PrivacyPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">PRIVACY POLICY</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">プライバシーポリシー</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="fade-up mb-12">
            <p className="text-text-main font-sans text-sm leading-loose">
              {SALON.name}（以下「当サロン」）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定め、適切な管理・保護に努めます。
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section, index) => (
              <div key={index} className="fade-up border-b border-border pb-10">
                <h2 className="font-serif text-lg text-charcoal font-light mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-text-main font-sans text-sm leading-loose whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 fade-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-mid-gray text-xs font-sans tracking-wider hover:text-charcoal transition-colors duration-200"
            >
              <span className="w-6 h-px bg-current inline-block" />
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
