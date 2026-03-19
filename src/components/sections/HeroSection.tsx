import { useEffect, useRef } from 'react';
import { SALON } from '../../data/salonData';

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="ル・シェリア サロン内観"
          className="w-full h-full object-cover object-center"
          loading="eager"
          style={{
            filter: 'grayscale(20%) brightness(0.62) contrast(1.15) saturate(0.55)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/35 to-charcoal/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center">
          <div
            ref={textRef}
            className="fade-up w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-12 md:pt-0 md:pb-0 md:pl-16 lg:pl-24"
          >
            <span className="block text-silver/70 text-xs tracking-widest2 font-sans mb-3">
              {SALON.taglineSmall}
            </span>

            <span className="block text-silver/50 text-xs tracking-widest font-sans mb-8 md:mb-10">
              ESTHETIC SALON &nbsp;/&nbsp; KITAKAMI, IWATE
            </span>

            <h1
              className="font-serif font-light text-white leading-[1.9] mb-8 md:mb-10 whitespace-pre-line"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)' }}
            >
              {SALON.tagline}
            </h1>

            <div className="w-8 h-px bg-silver/40 mb-8" />

            <p className="text-white/65 text-sm font-sans leading-loose mb-10 max-w-xs md:max-w-sm tracking-wide">
              {SALON.subtagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 md:mb-16">
              <a
                href={SALON.hotpepperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs tracking-widest2"
              >
                RESERVE
              </a>
              <a
                href="/contact"
                className="inline-block border border-white/40 text-white/80 text-xs tracking-widest px-8 py-3 font-sans transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10"
              >
                CONTACT
              </a>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {['HAIR REMOVAL', 'FACIAL', 'BODY CARE', 'HEAD', 'BRIDAL', 'MENS'].map((tag) => (
                <span
                  key={tag}
                  className="text-silver/55 text-xs tracking-widest font-sans border border-silver/20 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center pb-10 md:pb-14">
          <span className="text-white/35 text-xs tracking-widest2 font-sans mb-3">SCROLL</span>
          <div className="flex flex-col items-center gap-1">
            <span
              className="w-px bg-white/25 block animate-pulse"
              style={{ height: '40px' }}
            />
            <span className="border-b border-r border-white/25 w-2 h-2 rotate-45 block -mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
