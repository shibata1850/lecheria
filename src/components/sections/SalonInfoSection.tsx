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

          <div className="fade-up flex items-center justify-center">
            <img
              src="/S__18882590.png"
              alt="Le Cherien ロゴ"
              className="w-64 md:w-80 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
