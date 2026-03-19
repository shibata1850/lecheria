import { SALON } from '../../data/salonData';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal pb-safe">
      <div className="flex">
        <a
          href={SALON.hotpepperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3.5 text-white border-r border-white/20 hover:bg-white/10 transition-colors duration-200"
        >
          <span className="text-xs tracking-wider font-sans">予約</span>
        </a>
        <a
          href={SALON.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3.5 bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
        >
          <span className="text-xs tracking-wider font-sans">LINE</span>
        </a>
        <a
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center py-3.5 text-white border-l border-white/20 hover:bg-white/10 transition-colors duration-200"
        >
          <span className="text-xs tracking-wider font-sans">お問い合わせ</span>
        </a>
      </div>
    </div>
  );
}
