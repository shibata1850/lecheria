export interface MenuCategory {
  id: string;
  slug: string;
  nameEn: string;
  nameJa: string;
  description: string;
  image: string;
  priceFrom: string;
  items: MenuItem[];
  recommended: string[];
  features: string[];
}

export interface MenuItem {
  name: string;
  duration?: string;
  price: string;
  description?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'hair-removal',
    slug: '/menu/hair-removal',
    nameEn: 'Hair Removal',
    nameJa: '脱毛',
    description: 'お肌への負担に配慮しながら、気になるムダ毛を丁寧にケア。レディース・メンズどちらにも対応し、部位別のご相談も承っております。',
    image: 'https://images.pexels.com/photos/3865542/pexels-photo-3865542.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: '¥3,300',
    recommended: ['ムダ毛が気になる方', 'セルフケアの手間を省きたい方', '敏感肌でお悩みの方', 'メンズの方も歓迎'],
    features: ['丁寧なカウンセリング', '部位別の柔軟なプラン', 'レディース・メンズ対応', '肌状態に合わせた施術'],
    items: [
      { name: '顔脱毛', price: '¥4,400〜' },
      { name: 'VIO脱毛', price: '¥5,500〜' },
      { name: '全身脱毛', price: '¥9,800〜' },
      { name: 'メンズヒゲ脱毛', price: '¥3,300〜' },
    ],
  },
  {
    id: 'body',
    slug: '/menu/body',
    nameEn: 'Body Treatment',
    nameJa: 'ボディ',
    description: '巡りを整え、疲れやむくみ、ボディラインのお悩みにアプローチ。心身ともにほぐれる、リラックス重視のボディケアをご提供します。',
    image: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: '¥7,700',
    recommended: ['身体の疲れが抜けない方', 'むくみが気になる方', 'ボディラインを整えたい方', 'リラックスしたい方'],
    features: ['ハンドを中心とした丁寧な施術', 'むくみ・疲労ケア対応', '全身トリートメント', '施術後のカウンセリング'],
    items: [
      { name: 'ボディトリートメント', duration: '60分', price: '¥7,700〜' },
      { name: 'ボディトリートメント', duration: '90分', price: '¥11,000〜' },
      { name: 'リラックスボディ', duration: '120分', price: '¥13,200〜' },
    ],
  },
  {
    id: 'facial',
    slug: '/menu/facial',
    nameEn: 'Facial',
    nameJa: 'フェイシャル',
    description: '肌状態に合わせた施術で、透明感とうるおいのある肌へ導きます。乾燥・くすみ・毛穴・ハリ不足など、さまざまなお悩みに丁寧にアプローチします。',
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: '¥6,600',
    recommended: ['乾燥・くすみが気になる方', '毛穴を引き締めたい方', 'ハリ・弾力が欲しい方', '肌トラブルを改善したい方'],
    features: ['カウンセリングでお悩みを把握', '肌状態に合わせた施術選択', 'ハンドとコスメのダブルアプローチ', '施術後のホームケアアドバイス'],
    items: [
      { name: 'ベーシックフェイシャル', price: '¥6,600〜' },
      { name: '保湿フェイシャル', price: '¥7,700〜' },
      { name: 'エイジングケアフェイシャル', price: '¥8,800〜' },
    ],
  },
  {
    id: 'head',
    slug: '/menu/head',
    nameEn: 'Head Treatment',
    nameJa: 'ヘッド',
    description: '緊張をほどき、頭皮から深いリラクゼーションへ。頭皮の血行促進や首・肩のこわばりにもアプローチし、心身の緊張をやわらげます。',
    image: 'https://images.pexels.com/photos/3998375/pexels-photo-3998375.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: '¥5,500',
    recommended: ['頭皮の疲れや張りが気になる方', '首・肩のこりでお悩みの方', '眼精疲労が続いている方', '深くリラックスしたい方'],
    features: ['頭皮・首・肩を一体的にケア', '血行促進アプローチ', 'リラクゼーション重視の施術', 'ハンドによる丁寧な技術'],
    items: [
      { name: 'ヘッドスパ', duration: '30分', price: '¥5,500〜' },
      { name: 'ヘッド＆ネックケア', duration: '60分', price: '¥8,800〜' },
    ],
  },
  {
    id: 'machine',
    slug: '/menu/machine',
    nameEn: 'Machine Care',
    nameJa: 'マシンケア',
    description: '先進美容機器で、手技だけでは届きにくいお悩みにアプローチ。目的に合わせた機器選択で、効率よく理想の肌・ボディへ導きます。',
    image: 'https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: '¥5,500',
    recommended: ['効率よくケアしたい方', 'ハンドと機器を組み合わせたい方', '気になる部位を集中ケアしたい方', '美肌を目指したい方'],
    features: ['目的別の機器選択', 'ハンドケアとの組み合わせも可', 'フェイス・ボディ両対応', 'カウンセリングで最適プランをご提案'],
    items: [
      { name: '機器ケア 1部位', price: '¥5,500〜' },
      { name: 'フェイス機器ケア', price: '¥6,600〜' },
      { name: 'ボディ機器ケア', price: '¥8,800〜' },
    ],
  },
  {
    id: 'bridal',
    slug: '/menu/bridal',
    nameEn: 'Bridal',
    nameJa: 'ブライダル',
    description: '大切な日に向けて、肌・ボディ・印象をトータルに整えます。当日の輝きのために、丁寧なカウンセリングと計画的なケアでサポートします。',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'お問い合わせください',
    recommended: ['結婚式を控えている方', '前撮りを予定している方', '大切なイベントに向けて整えたい方', '肌・ボディ・印象をトータルケアしたい方'],
    features: ['ご要望に合わせたオーダーメイドプラン', '複数回コースで徐々に整える', 'フェイシャル・ボディ・脱毛を組み合わせ可能', '当日の肌コンディションを最大化'],
    items: [
      { name: 'ブライダルプラン', description: '内容・回数はカウンセリングにてご提案', price: 'お問い合わせください' },
    ],
  },
];

export const CAMPAIGN_ITEMS = [
  {
    id: 1,
    label: 'OPEN記念',
    nameEn: 'Hair Removal',
    nameJa: 'OPEN記念 脱毛メニュー',
    price: '¥3,300〜',
    description: '気になる部位から始めやすい、相談しやすい脱毛メニュー。まずはカウンセリングだけでも歓迎です。',
    image: 'https://images.pexels.com/photos/3865542/pexels-photo-3865542.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu/hair-removal',
  },
  {
    id: 2,
    label: 'FACIAL',
    nameEn: 'Facial Care',
    nameJa: 'フェイシャルケア',
    price: '¥6,600〜',
    description: '肌悩みに合わせて整える、通いやすいフェイシャルケア。お肌の状態を丁寧に確認しながら施術します。',
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu/facial',
  },
  {
    id: 3,
    label: 'BODY',
    nameEn: 'Body Treatment',
    nameJa: 'ボディトリートメント',
    price: '¥7,700〜',
    description: '疲れや巡りに寄り添う、リラックス重視のボディケア。施術後は心も身体も軽やかに。',
    image: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu/body',
  },
];
