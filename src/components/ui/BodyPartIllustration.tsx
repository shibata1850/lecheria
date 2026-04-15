type BodyView = 'front' | 'back';

interface PartMarker {
  id: string;
  label: string;
  cx: number;
  cy: number;
  view: BodyView;
  category: 'face' | 'petit' | 'large' | 'vio' | 'mens';
}

const CATEGORY_COLORS: Record<string, { fill: string; stroke: string; text: string }> = {
  face:  { fill: '#fef3c7', stroke: '#d97706', text: '#92400e' },
  petit: { fill: '#e0f2fe', stroke: '#0284c7', text: '#0c4a6e' },
  large: { fill: '#f0fdf4', stroke: '#16a34a', text: '#14532d' },
  vio:   { fill: '#fce7f3', stroke: '#db2777', text: '#831843' },
  mens:  { fill: '#fef9c3', stroke: '#ca8a04', text: '#713f12' },
};

const CATEGORY_LABELS: Record<string, string> = {
  face:  '顔・単独',
  petit: 'プチパーツ',
  large: 'ラージパーツ',
  vio:   'VIO',
  mens:  'メンズ髭',
};

const FRONT_MARKERS: PartMarker[] = [
  { id: 'face-ladies', label: '顔（レ）', cx: 100, cy: 42, view: 'front', category: 'face' },
  { id: 'hige', label: '髭（メ）', cx: 100, cy: 58, view: 'front', category: 'mens' },
  { id: 'mayu', label: '眉デザイン', cx: 100, cy: 32, view: 'front', category: 'face' },
  { id: 'waki-front', label: '脇', cx: 62, cy: 112, view: 'front', category: 'petit' },
  { id: 'heso-shita', label: 'ヘソ下', cx: 100, cy: 165, view: 'front', category: 'petit' },
  { id: 'vio', label: 'VIO', cx: 100, cy: 195, view: 'front', category: 'vio' },
  { id: 'hiji-ue', label: 'ヒジ上', cx: 52, cy: 140, view: 'front', category: 'large' },
  { id: 'hiji-shita', label: 'ヒジ下', cx: 46, cy: 168, view: 'front', category: 'large' },
  { id: 'te-ko', label: '手の甲', cx: 40, cy: 200, view: 'front', category: 'petit' },
  { id: 'yubi', label: '指', cx: 40, cy: 214, view: 'front', category: 'petit' },
  { id: 'onaka', label: 'お腹', cx: 100, cy: 150, view: 'front', category: 'large' },
  { id: 'mune', label: '胸', cx: 100, cy: 125, view: 'front', category: 'large' },
  { id: 'hiza-ue', label: 'ヒザ上', cx: 88, cy: 255, view: 'front', category: 'large' },
  { id: 'hiza-shita', label: 'ヒザ下', cx: 88, cy: 290, view: 'front', category: 'large' },
  { id: 'asi-ko', label: '足の甲', cx: 88, cy: 335, view: 'front', category: 'petit' },
];

const BACK_MARKERS: PartMarker[] = [
  { id: 'unaji', label: 'うなじ', cx: 100, cy: 72, view: 'back', category: 'petit' },
  { id: 'senaka-ue', label: '背中上', cx: 100, cy: 115, view: 'back', category: 'large' },
  { id: 'senaka-shita', label: '背中下', cx: 100, cy: 148, view: 'back', category: 'large' },
  { id: 'koshi', label: '腰', cx: 100, cy: 170, view: 'back', category: 'large' },
  { id: 'waki-back', label: '脇', cx: 62, cy: 108, view: 'back', category: 'petit' },
  { id: 'hiji-ue-b', label: 'ヒジ上', cx: 52, cy: 138, view: 'back', category: 'large' },
  { id: 'hiji-shita-b', label: 'ヒジ下', cx: 46, cy: 165, view: 'back', category: 'large' },
  { id: 'hiza-ue-b', label: 'ヒザ上', cx: 88, cy: 255, view: 'back', category: 'large' },
  { id: 'hiza-shita-b', label: 'ヒザ下', cx: 88, cy: 292, view: 'back', category: 'large' },
];

function BodySilhouetteFront() {
  return (
    <g>
      <ellipse cx="100" cy="35" rx="18" ry="22" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M75 70 Q68 72 64 80 L58 105 Q72 110 100 112 Q128 110 142 105 L136 80 Q132 72 125 70 L118 62 Q108 58 100 58 Q92 58 82 62 Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="88" y="110" width="24" height="80" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M88 112 Q78 120 76 130 L68 195 Q72 200 78 198 L88 160 L88 112Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M112 112 Q122 120 124 130 L132 195 Q128 200 122 198 L112 160 L112 112Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <ellipse cx="75" cy="200" rx="10" ry="6" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <ellipse cx="125" cy="200" rx="10" ry="6" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <path d="M88 190 Q78 200 80 220 L82 245 L94 245 L96 215 L100 210 L104 215 L106 245 L118 245 L120 220 Q122 200 112 190Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="84" y="243" width="12" height="60" rx="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="104" y="243" width="12" height="60" rx="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <ellipse cx="90" cy="307" rx="10" ry="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <ellipse cx="110" cy="307" rx="10" ry="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <rect x="82" y="310" width="14" height="30" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="104" y="310" width="14" height="30" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
    </g>
  );
}

function BodySilhouetteBack() {
  return (
    <g>
      <ellipse cx="100" cy="35" rx="18" ry="22" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M75 70 Q68 72 64 80 L58 105 Q72 110 100 112 Q128 110 142 105 L136 80 Q132 72 125 70 L118 62 Q108 58 100 58 Q92 58 82 62 Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="88" y="110" width="24" height="80" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M88 112 Q78 120 76 130 L68 195 Q72 200 78 198 L88 160 L88 112Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <path d="M112 112 Q122 120 124 130 L132 195 Q128 200 122 198 L112 160 L112 112Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <ellipse cx="75" cy="200" rx="10" ry="6" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <ellipse cx="125" cy="200" rx="10" ry="6" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <path d="M88 190 Q78 200 80 220 L82 245 L94 245 L96 215 L100 210 L104 215 L106 245 L118 245 L120 220 Q122 200 112 190Z" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="84" y="243" width="12" height="60" rx="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="104" y="243" width="12" height="60" rx="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <ellipse cx="90" cy="307" rx="10" ry="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <ellipse cx="110" cy="307" rx="10" ry="5" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1" />
      <rect x="82" y="310" width="14" height="30" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
      <rect x="104" y="310" width="14" height="30" rx="4" fill="#f5f0eb" stroke="#c9b99a" strokeWidth="1.2" />
    </g>
  );
}

function PartLabel({ marker }: { marker: PartMarker }) {
  const colors = CATEGORY_COLORS[marker.category];
  const isRight = marker.cx > 100;
  const labelX = isRight ? marker.cx + 14 : marker.cx - 14;
  const anchor = isRight ? 'start' : 'end';
  return (
    <g>
      <circle cx={marker.cx} cy={marker.cy} r="4" fill={colors.stroke} opacity="0.85" />
      <circle cx={marker.cx} cy={marker.cy} r="7" fill={colors.stroke} opacity="0.2" />
      <line
        x1={marker.cx + (isRight ? 5 : -5)}
        y1={marker.cy}
        x2={labelX + (isRight ? -2 : 2)}
        y2={marker.cy}
        stroke={colors.stroke}
        strokeWidth="0.8"
        opacity="0.6"
      />
      <text
        x={labelX}
        y={marker.cy + 4}
        textAnchor={anchor}
        fontSize="8"
        fill={colors.text}
        fontFamily="sans-serif"
        fontWeight="600"
      >
        {marker.label}
      </text>
    </g>
  );
}

export default function BodyPartIllustration() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-start">
        <div className="flex-1 min-w-0">
          <p className="text-center text-xs text-mid-gray font-sans tracking-widest mb-2">前面</p>
          <svg viewBox="0 80 200 300" className="w-full max-w-[200px] mx-auto block" aria-label="脱毛部位 前面">
            <BodySilhouetteFront />
            {FRONT_MARKERS.map((m) => (
              <PartLabel key={m.id} marker={m} />
            ))}
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-center text-xs text-mid-gray font-sans tracking-widest mb-2">後面</p>
          <svg viewBox="0 80 200 300" className="w-full max-w-[200px] mx-auto block" aria-label="脱毛部位 後面">
            <BodySilhouetteBack />
            {BACK_MARKERS.map((m) => (
              <PartLabel key={m.id} marker={m} />
            ))}
          </svg>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
          const colors = CATEGORY_COLORS[key];
          return (
            <span
              key={key}
              className="inline-flex items-center gap-1.5 text-xs font-sans px-3 py-1 rounded-full border"
              style={{ backgroundColor: colors.fill, borderColor: colors.stroke, color: colors.text }}
            >
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: colors.stroke }} />
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
