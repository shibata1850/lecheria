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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.3!2d141.1134!3d39.2988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7b7c9f1b0e0001%3A0x0!2z5bKB5omA55yM5YyX5LiK5biC44GV44GP44KJ5YCp44KK3LQgM-S4geeVqjE3LTMz!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
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
