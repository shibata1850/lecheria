import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { GALLERY_IMAGES } from '../../data/salonData';

export default function GallerySection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-soft-gray py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-up">
          <SectionHeader label="GALLERY" title="ギャラリー" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.id}
              className="fade-up overflow-hidden aspect-square shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.18)] transition-shadow duration-300"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
