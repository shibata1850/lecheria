import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function BrandSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-charcoal text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 fade-up text-center">
        <p className="text-white/40 text-xs tracking-widest font-serif mb-4">ABOUT</p>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-4">L'Riage.</h2>
        <div className="w-8 h-px bg-gold mx-auto mb-6" />
        <p className="text-white/60 text-sm font-sans leading-relaxed max-w-md mx-auto mb-10">
          ル・シェリアが属するブランド「L'Riage.」について、私たちの想いとコンセプトをご紹介します。
        </p>
        <Link
          to="/about"
          className="inline-block border border-white/40 text-white text-xs tracking-widest px-10 py-3.5 font-sans transition-all duration-300 hover:bg-white hover:text-charcoal"
        >
          ABOUT L'Riage. →
        </Link>
      </div>
    </section>
  );
}
