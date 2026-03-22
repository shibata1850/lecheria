export interface MenuCategory {
  id: string;
  slug: string;
  nameEn: string;
  nameJa: string;
  description: string;
  image: string;
  priceFrom: string;
  trialPriceFrom?: string;
  memberOnly?: boolean;
  items: MenuItem[];
  recommended: string[];
  features: string[];
}

export interface MenuItem {
  name: string;
  duration?: string;
  price: string;
  memberPrice?: string;
  trialPrice?: string;
  description?: string;
  isOption?: boolean;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'body',
    slug: '/menu/body',
    nameEn: 'Body Treatment',
    nameJa: 'ボディ（リラクゼーション／痩身／整体）',
    description: '東洋医学をベースとしたデトックスマッサージから、セルライトケア、痩身整体まで。心身ともにほぐれる、本格的なボディケアをご提供します。',
    image: '/images/ボディ.png',
    priceFrom: '¥2,980',
    trialPriceFrom: '¥2,980',
    recommended: ['身体の疲れが抜けない方', 'むくみが気になる方', 'ボディラインを整えたい方', 'リラックスしたい方'],
    features: ['東洋医学ベースのデトックスケア', '痩身・整体メニューも充実', '遠赤外線ドーム完備', '施術後のカウンセリング'],
    items: [
      { name: '東洋医学デトックスマッサージ キレックス', duration: '45分', price: '¥15,000', memberPrice: '¥12,000', trialPrice: '¥3,980' },
      { name: 'セルライトマシーン', duration: '30分', price: '¥15,000', memberPrice: '¥9,500', trialPrice: '¥2,980' },
      { name: 'ラジオ波', duration: '30分', price: '¥15,000', memberPrice: '¥8,900', trialPrice: '¥2,980' },
      { name: 'EMSマシーン', duration: '30〜90分', price: '¥15,000', memberPrice: '¥10,000', trialPrice: '¥4,500' },
      { name: '全身カッピング', duration: '30〜90分', price: '¥7,500〜¥15,000', memberPrice: '¥10,000', trialPrice: '¥4,500' },
      { name: '超音波（肩首・背中・腰・足）', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: '痩身・整体 AngelフェザーBSS美脚整体', duration: '75分', price: '¥25,000', memberPrice: '¥17,500', trialPrice: '¥9,000' },
      { name: '歪み改善 全身矯正ストレッチ', duration: '30分', price: '¥8,000', memberPrice: '¥4,500', trialPrice: '¥3,980' },
      { name: '美腸管マッサレッチセラピー', duration: '45分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: 'むくみ取りマッサージ', duration: '30分', price: '¥8,000', memberPrice: '¥6,500', trialPrice: '¥4,500' },
      { name: 'バリ式トリートメント', duration: '90分', price: '¥25,000', memberPrice: '¥15,000', trialPrice: '¥5,980' },
      { name: '光豊胸バストUPトリートメント', duration: '90分', price: '¥35,000', memberPrice: '¥18,000', trialPrice: '¥7,500' },
      { name: '光美尻ヒップUPトリートメント', duration: '90分', price: '¥35,000', memberPrice: '¥18,000', trialPrice: '¥7,500' },
      { name: '遠赤外線ドーム', duration: '15〜30分', price: '¥2,500', memberPrice: '¥300〜¥500', isOption: true },
      { name: 'ソルト＆フットマッサージ', duration: '10分', price: '¥1,500', memberPrice: '¥800', isOption: true },
    ],
  },
  {
    id: 'facial',
    slug: '/menu/facial',
    nameEn: 'Facial',
    nameJa: 'フェイシャル',
    description: '東洋医学オールハンドフェイシャルから、IPL光フォト、プラズマ閃光トリートメントまで。肌状態に合わせた豊富なメニューで、透明感とハリのある肌へ導きます。',
    image: '/images/フェイシャル.png',
    priceFrom: '¥2,980',
    trialPriceFrom: '¥2,980',
    recommended: ['乾燥・くすみが気になる方', '毛穴を引き締めたい方', 'ハリ・弾力が欲しい方', '肌トラブルを改善したい方'],
    features: ['カウンセリングでお悩みを把握', '肌状態に合わせた施術選択', 'ハンドとマシンのダブルアプローチ', '施術後のホームケアアドバイス'],
    items: [
      { name: '東洋医学オールハンドフェイシャル', duration: '30分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥2,980' },
      { name: 'フェイススリム・造美顔', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: 'イオン導入（プラセンタ・ビタミン付き）', duration: '15分', price: '¥6,000', memberPrice: '¥3,000', trialPrice: '¥2,980' },
      { name: '超音波（顔・首）', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: 'ラジオ波（顔・首・デコルテ）', duration: '30分', price: '¥15,000', memberPrice: '¥8,900', trialPrice: '¥2,980' },
      { name: 'IPL光フォト', duration: '30分', price: '¥25,000', memberPrice: '¥15,000', trialPrice: '¥4,980' },
      { name: 'プラズマ閃光トリートメント（プラセンタ・α-ビタミンC・美容液付）', duration: '20分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: 'ソフトピーリング', duration: '15分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: '低周波フェイシャル', duration: '30分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥4,500' },
      { name: 'リンクルアイケア 頭皮TM付き', duration: '30分', price: '¥15,000', memberPrice: '¥8,500', trialPrice: '¥3,980' },
      { name: '3Dリッチマスク導入（美筋EMS付き）', duration: '30分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥4,500' },
      { name: 'Doctor line マスクドヴィヴァン導入', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥3,980' },
      { name: 'ハリセラム（幹細胞）パック フェイス＆ヘッドトリートメント付き', duration: '45分', price: '¥20,000', memberPrice: '¥10,000', trialPrice: '¥5,980' },
      { name: 'luxury炭酸×水素パック', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: '開き毛穴・たるみ・にきび 炭酸パック', duration: '20分', price: '¥5,000', memberPrice: '¥2,500' },
      { name: '美白・しみ・乾燥 ソレデューホワイトマスク', duration: '20分', price: '¥4,000', memberPrice: '¥2,000' },
      { name: '乾燥・たるみ・ほうれい線 Doctor lineマスクドヴィヴァン', duration: '20分', price: '¥5,000', memberPrice: '¥2,500' },
      { name: '乾燥・しわ・たるみ 3Dリッチマスク', duration: '20分', price: '¥5,000', memberPrice: '¥2,500' },
      { name: 'しみ・くすみ・乾燥 琥珀パック', duration: '20分', price: '¥6,000', memberPrice: '¥3,500' },
      { name: '脂性肌・角質・黒ずみ毛穴 金箔パック', duration: '20分', price: '¥6,000', memberPrice: '¥3,500' },
      { name: 'ホットアイマスク', duration: '施術中', price: '¥1,000', memberPrice: '¥500', isOption: true },
      { name: '毛穴吸引・フェイシャルミスト', duration: '15分', price: '¥6,000', memberPrice: '¥3,000', trialPrice: '¥2,980', isOption: true },
    ],
  },
  {
    id: 'head',
    slug: '/menu/head',
    nameEn: 'Head Treatment',
    nameJa: 'ヘッド',
    description: '頭皮チェック・炭酸ケアからTLT極上ドライヘッドスパまで。頭皮の血行促進や首・肩のこわばりにもアプローチし、心身の緊張をやわらげます。',
    image: '/images/ヘッド.png',
    priceFrom: '¥3,500',
    trialPriceFrom: '¥3,500',
    recommended: ['頭皮の疲れや張りが気になる方', '首・肩のこりでお悩みの方', '眼精疲労が続いている方', '深くリラックスしたい方'],
    features: ['頭皮チェック・炭酸ケア付き', '血行促進アプローチ', 'リラクゼーション重視の施術', 'ハンドによる丁寧な技術'],
    items: [
      { name: '頭皮チェック・炭酸ケア付き TLT癒しドライヘッドスパ', duration: '60分', price: '¥20,000', memberPrice: '¥10,000', trialPrice: '45分 ¥5,000' },
      { name: 'TLT極上ドライヘッドスパ', duration: '30分／60分', price: '¥15,000／¥20,000', memberPrice: '¥7,500／¥10,000', trialPrice: '30分 ¥4,500' },
      { name: 'スロータスヘッドマッサージ', duration: '30分／60分', price: '¥15,000／¥20,000', memberPrice: '¥7,500／¥10,000', trialPrice: '30分 ¥3,500' },
      { name: '整体Mヘッドケア', duration: '45分／60分', price: '¥16,000／¥20,000', memberPrice: '¥8,000／¥10,000', trialPrice: '45分 ¥5,500／60分 ¥6,500' },
    ],
  },
  {
    id: 'hair-removal',
    slug: '/menu/hair-removal',
    nameEn: 'Hair Removal',
    nameJa: '脱毛',
    description: 'お肌への負担に配慮しながら、気になるムダ毛を丁寧にケア。レディース・メンズどちらにも対応し、部位別のご相談も承っております。',
    image: '/images/脱毛.jpg',
    priceFrom: '¥3,300〜',
    trialPriceFrom: '¥3,300〜',
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
    id: 'machine',
    slug: '/menu/machine',
    nameEn: 'Machine Care',
    nameJa: 'マシンケア',
    description: '先進美容機器で、手技だけでは届きにくいお悩みにアプローチ。目的に合わせた機器選択で、効率よく理想の肌・ボディへ導きます。',
    image: '/images/マシンケア.png',
    priceFrom: '¥5,500〜',
    trialPriceFrom: '¥5,500〜',
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
    description: '大切な日に向けて、肌・ボディ・印象をトータルに整えます。当日の輝きのために、丁寧なカウンセリングと計画的なケアでサポートします。※ブライダルメニューは会員様限定となります。',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    priceFrom: '¥18,000〜',
    memberOnly: true,
    recommended: ['結婚式を控えている方', '前撮りを予定している方', '大切なイベントに向けて整えたい方', '肌・ボディ・印象をトータルケアしたい方'],
    features: ['ご要望に合わせたオーダーメイドプラン', '複数回コースで徐々に整える', 'フェイシャル・ボディ・脱毛を組み合わせ可能', '当日の肌コンディションを最大化'],
    items: [
      { name: '挙式直前1dayコース', duration: '180分', price: '', memberPrice: '¥18,000' },
      { name: '挙式直前3dayコース', duration: '440分', price: '', memberPrice: '¥35,500' },
      { name: '6回〜 シンデレラプラン', duration: '990分', price: '', memberPrice: '¥63,000', trialPrice: '¥9,800' },
      { name: '12回〜 デラックスプラン', duration: '1980分', price: '', memberPrice: '¥198,000', trialPrice: '¥9,800' },
      { name: '挙式直前新郎コース', duration: '180分', price: '', memberPrice: '¥20,000' },
      { name: 'マタニティ新婦コース', duration: '140分', price: '', memberPrice: '¥18,000' },
      { name: 'ウエストくびれEMS', duration: '30分', price: '', memberPrice: '¥5,000', isOption: true },
      { name: '二の腕引き締めEMS', duration: '30分', price: '', memberPrice: '¥4,000', isOption: true },
      { name: '二の腕引き締めマッサージ', duration: '15分', price: '', memberPrice: '¥4,000', isOption: true },
      { name: '背中トリートメント', duration: '20分', price: '', memberPrice: '¥6,000', isOption: true },
      { name: '首・デコルテトリートメント', duration: '20分', price: '', memberPrice: '¥6,000', isOption: true },
      { name: '美脚トリートメント', duration: '20分', price: '', memberPrice: '¥6,000', isOption: true },
      { name: 'オールハンドボディケア', duration: '60分', price: '', memberPrice: '¥10,000', isOption: true },
      { name: '超音波フェイシャル', duration: '20分', price: '', memberPrice: '¥2,000', isOption: true },
      { name: '肌別パック', duration: '20分', price: '', memberPrice: '¥1,000〜', isOption: true },
      { name: '両脇美白（炭酸パック）', duration: '20分', price: '', memberPrice: '¥5,000', isOption: true },
      { name: '背中ケア（イオン+炭酸）', duration: '30分', price: '', memberPrice: '¥8,000', isOption: true },
    ],
  },
];

export const CAMPAIGN_ITEMS = [
  {
    id: 1,
    label: 'お試し',
    nameEn: 'Body Treatment',
    nameJa: 'ボディトリートメント',
    price: '¥2,980〜',
    description: '東洋医学デトックスマッサージからセルライトケアまで。お試し価格でお気軽に体験いただけます。',
    image: '/images/ボディ.png',
    link: '/menu/body',
  },
  {
    id: 2,
    label: 'お試し',
    nameEn: 'Facial Care',
    nameJa: 'フェイシャルケア',
    price: '¥2,980〜',
    description: 'オールハンドフェイシャルからIPL光フォトまで。お肌の状態を丁寧に確認しながら施術します。',
    image: '/images/フェイシャル.png',
    link: '/menu/facial',
  },
  {
    id: 3,
    label: 'お試し',
    nameEn: 'Head Treatment',
    nameJa: 'ヘッドトリートメント',
    price: '¥3,500〜',
    description: 'TLT極上ドライヘッドスパをお試し価格で。頭皮から深いリラクゼーションを体験してください。',
    image: '/images/ヘッド.png',
    link: '/menu/head',
  },
];
