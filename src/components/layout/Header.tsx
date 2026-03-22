import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SALON } from '../../data/salonData';

const NAV_ITEMS = [
  { label: 'TOP', href: '/' },
  { label: 'MENU', href: '/menu' },
  { label: 'Q&A', href: '/qa' },
  { label: 'SALON', href: '/salon' },
  { label: 'VOICE', href: '/voice' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span
              className={`font-serif tracking-widest text-base md:text-lg font-light transition-colors duration-300 ${
                scrolled || menuOpen ? 'text-charcoal' : 'text-white'
              }`}
            >
              {SALON.nameEn}
            </span>
            <span
              className={`font-sans text-xs mt-0.5 transition-colors duration-300 ${
                scrolled || menuOpen ? 'text-mid-gray' : 'text-white/60'
              }`}
            >
              {SALON.brandTagline}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={SALON.hotpepperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-block border text-xs tracking-widest px-5 py-2.5 transition-all duration-300 ${
                scrolled || menuOpen
                  ? 'border-gold text-gold hover:bg-gold hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-charcoal'
              }`}
            >
              RESERVE
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-colors duration-300 ${
                scrolled || menuOpen ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="メニューを開く"
            >
              {menuOpen ? (
                <>
                  <span className="w-5 h-px bg-current rotate-45 translate-y-[3px] block transition-transform duration-300" />
                  <span className="w-5 h-px bg-current -rotate-45 -translate-y-[3px] block transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span className="w-5 h-px bg-current block" />
                  <span className="w-5 h-px bg-current block" />
                  <span className="w-5 h-px bg-current block" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-10 w-full">
          <ul className="space-y-6 md:space-y-8">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${
                  menuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}
              >
                <Link
                  to={item.href}
                  className="font-serif text-2xl md:text-4xl font-light text-white tracking-widest hover:text-gold-light transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-white/20">
            <a
              href={SALON.hotpepperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold text-xs tracking-widest px-8 py-3 hover:bg-gold hover:text-white transition-all duration-300"
            >
              RESERVE
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
