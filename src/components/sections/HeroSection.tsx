import { useEffect, useRef } from 'react';
import { SALON } from '../../data/salonData';

export default function HeroSection() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      desktopRef.current?.classList.add('visible');
      mobileRef.current?.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="hidden md:block relative min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/TOP.png"
            alt="エステ施術"
            className="ken-burns w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-1 flex items-center">
            <div
              ref={desktopRef}
              className="fade-up w-full max-w-7xl mx-auto px-10 pt-0 pb-0 pl-16 lg:pl-24"
            >
              <img
                src="/S__18882590.png"
                alt="Le Cherien ロゴ"
                className="w-48 mb-10"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="block text-charcoal/60 text-xs tracking-widest2 font-sans mb-3">
                {SALON.taglineSmall}
              </span>
              <span className="block text-charcoal/50 text-xs tracking-widest font-sans mb-10">
                ESTHETIC SALON &nbsp;/&nbsp; KITAKAMI, IWATE
              </span>
              <h1
                className="font-serif font-light text-charcoal leading-[1.9] mb-10 whitespace-pre-line"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)' }}
              >
                {SALON.tagline}
              </h1>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-charcoal/65 text-sm font-sans leading-loose mb-10 max-w-sm tracking-wide">
                {SALON.subtagline}
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <a
                  href={SALON.hotpepperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gold text-charcoal text-xs tracking-widest px-8 py-3 font-sans transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  RESERVE
                </a>
                <a
                  href="/contact"
                  className="inline-block border border-charcoal/40 text-charcoal/70 text-xs tracking-widest px-8 py-3 font-sans transition-all duration-300 hover:border-charcoal hover:text-charcoal"
                >
                  CONTACT
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {['HAIR REMOVAL', 'FACIAL', 'BODY CARE', 'HEAD', 'BRIDAL', 'MENS'].map((tag) => (
                  <span
                    key={tag}
                    className="text-charcoal/50 text-xs tracking-widest font-sans border border-charcoal/20 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center pb-14">
            <span className="text-charcoal/40 text-xs tracking-widest2 font-sans mb-3">SCROLL</span>
            <div className="flex flex-col items-center gap-1">
              <span className="w-px bg-charcoal/25 block animate-pulse" style={{ height: '40px' }} />
              <span className="border-b border-r border-charcoal/25 w-2 h-2 rotate-45 block -mt-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden relative w-full" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/TOP.png"
            alt="エステ施術"
            className="ken-burns w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-transparent" />
        </div>

        <div
          ref={mobileRef}
          className="fade-up relative z-10 flex flex-col justify-center min-h-[100svh] px-6 pt-28 pb-16"
        >
          <img
            src="/S__18882590.png"
            alt="Le Cherien ロゴ"
            className="w-28 mb-5"
            style={{ mixBlendMode: 'multiply' }}
          />
          <span className="block text-charcoal/60 text-xs tracking-widest2 font-sans mb-2">
            {SALON.taglineSmall}
          </span>
          <span className="block text-charcoal/50 text-xs tracking-widest font-sans mb-5">
            ESTHETIC SALON / KITAKAMI, IWATE
          </span>
          <h1
            className="font-serif font-light text-charcoal leading-[1.9] mb-5 whitespace-pre-line"
            style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)' }}
          >
            {SALON.tagline}
          </h1>
          <div className="w-8 h-px bg-gold mb-5" />
          <p className="text-charcoal/70 text-sm font-sans leading-loose mb-7 tracking-wide">
            {SALON.subtagline}
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href={SALON.hotpepperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-charcoal text-xs tracking-widest px-6 py-2.5 font-sans transition-all duration-300 active:bg-gold active:text-white"
            >
              RESERVE
            </a>
            <a
              href="/contact"
              className="inline-block border border-charcoal/40 text-charcoal/70 text-xs tracking-widest px-6 py-2.5 font-sans"
            >
              CONTACT
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {['HAIR REMOVAL', 'FACIAL', 'BODY CARE', 'HEAD', 'BRIDAL', 'MENS'].map((tag) => (
              <span
                key={tag}
                className="text-charcoal/50 text-xs tracking-widest font-sans border border-charcoal/20 px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
