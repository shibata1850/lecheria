interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const titleColor = light ? 'text-white' : 'text-charcoal';
  const labelColor = light ? 'text-white/60' : 'text-mid-gray';
  const subtitleColor = light ? 'text-white/70' : 'text-mid-gray';
  const dividerColor = light ? 'bg-gold-light' : 'bg-gold';

  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass}`}>
      <span className={`section-label ${labelColor}`}>{label}</span>
      <div className={`h-px w-8 ${dividerColor}`} />
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`text-sm font-sans leading-relaxed max-w-xl ${subtitleColor} ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
