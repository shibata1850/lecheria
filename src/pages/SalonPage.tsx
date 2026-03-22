import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/ui/SectionHeader';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import { SALON } from '../data/salonData';

const INFO_ROWS = [
  { label: 'サロン名', value: SALON.name },
  { label: '住所', value: `${SALON.addressLine2} ${SALON.addressLine1}` },
  { label: 'TEL', value: SALON.tel },
  { label: '営業時間', value: `${SALON.hours}${SALON.hoursNote}` },
  { label: '定休日', value: SALON.holiday },
  { label: '駐車場', value: SALON.parking },
  { label: 'アクセス', value: SALON.access },
];

export default function SalonPage() {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="relative bg-soft-gray py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="section-label mb-4">SALON</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">サロン情報</h1>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="fade-up mb-16">
            <SectionHeader label="INFO" title="基本情報" align="left" />
            <table className="w-full">
              <tbody>
                {INFO_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-4 pr-4 text-mid-gray text-xs font-sans tracking-wider w-28 align-top">{row.label}</td>
                    <td className="py-4 text-text-main text-sm font-sans">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="ACCESS" title="アクセス・地図" align="left" />
            <div className="w-full overflow-hidden border border-border" style={{ height: '400px' }}>
              <iframe
                src="https://maps.google.com/maps?q=%E5%B2%A9%E6%89%8B%E7%9C%8C%E5%8C%97%E4%B8%8A%E5%B8%82%E3%81%95%E3%81%8F%E3%82%89%E9%80%9A%E3%82%8A3%E4%B8%81%E7%9B%AE17-33&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ル・シェリア 地図"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-mid-gray text-xs font-sans">{SALON.access}</p>
              <a
                href={SALON.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-charcoal/60 hover:text-charcoal underline underline-offset-2 transition-colors duration-200"
              >
                Google Mapで開く
              </a>
            </div>
          </div>

          <div className="fade-up mb-16">
            <SectionHeader label="PARKING" title="駐車場のご案内" align="left" />
            <div className="flex justify-center">
              <img
                src="/image.png"
                alt="駐車場マップ - 1〜4番がル・シェリア専用駐車場です"
                className="w-full max-w-lg"
                loading="lazy"
              />
            </div>
            <p className="text-mid-gray text-xs font-sans mt-3">※1〜4番がル・シェリア専用駐車場です。</p>
          </div>

          <div className="fade-up">
            <SectionHeader label="RESERVE" title="ご予約方法" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={SALON.hotpepperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border p-5 hover:border-charcoal transition-colors duration-200 text-center group"
              >
                <p className="section-label mb-2 group-hover:text-charcoal transition-colors">HOTPEPPER</p>
                <p className="text-charcoal text-sm font-sans">Hotpepper Beautyより</p>
              </a>
              <a
                href={SALON.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-200 bg-green-50 p-5 hover:bg-green-100 transition-colors duration-200 text-center"
              >
                <p className="text-xs tracking-widest text-green-700 font-serif uppercase mb-2">LINE</p>
                <p className="text-charcoal text-sm font-sans">公式LINEより</p>
              </a>
              <a
                href="/contact"
                className="border border-border p-5 hover:border-charcoal transition-colors duration-200 text-center group"
              >
                <p className="section-label mb-2 group-hover:text-charcoal transition-colors">FORM</p>
                <p className="text-charcoal text-sm font-sans">お問い合わせフォームより</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactSection />
    </>
  );
}
