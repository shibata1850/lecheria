import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { SALON } from '../../data/salonData';

const INFO_ROWS = [
  { label: 'サロン名', value: SALON.name },
  { label: '住所', value: `${SALON.addressLine2} ${SALON.addressLine1}` },
  { label: 'TEL', value: SALON.tel },
  { label: '営業時間', value: `${SALON.hours}${SALON.hoursNote}` },
  { label: '定休日', value: SALON.holiday },
  { label: '駐車場', value: SALON.parking },
  { label: 'アクセス', value: SALON.access },
];

export default function SalonInfoSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="SALON" title="サロン情報" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="fade-up">
            <table className="w-full">
              <tbody>
                {INFO_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-4 pr-4 text-mid-gray text-xs font-sans tracking-wider w-28 shrink-0 align-top">{row.label}</td>
                    <td className="py-4 text-text-main text-sm font-sans">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/salon" className="btn-outline">
                詳しくはこちら
              </Link>
              <a
                href={SALON.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Google Mapを見る
              </a>
            </div>
          </div>

          <div className="fade-up">
            <div className="w-full h-64 md:h-80 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
