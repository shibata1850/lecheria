import { Link } from 'react-router-dom';
import { SALON } from '../../data/salonData';

const NAV_COL1 = [
  { label: 'TOP', href: '/' },
  { label: 'MENU', href: '/menu' },
  { label: 'Q&A', href: '/qa' },
  { label: 'SALON', href: '/salon' },
];

const NAV_COL2 = [
  { label: 'VOICE', href: '/voice' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'PRIVACY', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <span className="font-serif tracking-widest text-xl font-light text-white">{SALON.nameEn}</span>
            </Link>
            <div className="text-white/40 text-xs font-sans mb-6 tracking-wide">{SALON.brandTagline}</div>
            <p className="text-white/50 text-xs font-sans leading-[2] mb-6">
              健康と美を整えるトータルビューティーサロン
            </p>
            <div className="space-y-2 text-white/45 text-xs font-sans">
              <p>{SALON.addressLine2}</p>
              <p>{SALON.addressLine1}</p>
              <p>TEL: {SALON.tel}</p>
              <p>営業時間: {SALON.hours}{SALON.hoursNote}</p>
              <p>定休日: {SALON.holiday}</p>
            </div>
          </div>

          <div className="md:col-span-1">
            <p className="section-label text-white/35 mb-6">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {NAV_COL1.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="text-white/60 text-xs font-serif tracking-widest hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {NAV_COL2.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="text-white/60 text-xs font-serif tracking-widest hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <p className="section-label text-white/35 mb-6">FOLLOW US</p>
            <div className="space-y-4">
              <a
                href={SALON.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-xs font-sans tracking-widest hover:text-white transition-colors duration-200"
              >
                <span className="w-8 h-px bg-white/25" />
                INSTAGRAM
              </a>
              <a
                href={SALON.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-xs font-sans tracking-widest hover:text-white transition-colors duration-200"
              >
                <span className="w-8 h-px bg-white/25" />
                LINE
              </a>
              <a
                href={SALON.hotpepperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-xs font-sans tracking-widest hover:text-white transition-colors duration-200"
              >
                <span className="w-8 h-px bg-white/25" />
                HOTPEPPER BEAUTY
              </a>
            </div>

            <div className="mt-8">
              <a
                href={SALON.hotpepperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/35 text-white/80 text-xs tracking-widest px-6 py-2.5 hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                RESERVE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs font-sans">
            © 2026 Le Cherien / {SALON.brandName} All Rights Reserved.
          </p>
          <Link
            to="/privacy"
            className="text-white/35 text-xs font-sans hover:text-white/60 transition-colors duration-200"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
