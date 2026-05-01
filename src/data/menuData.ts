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
  nameDetail?: string;
  duration?: string;
  price: string;
  memberPrice?: string;
  trialPrice?: string;
  description?: string;
  isOption?: boolean;
  optionNote?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'body',
    slug: '/menu/body',
    nameEn: 'Body Treatment',
    nameJa: 'ボディ（リラクゼーション／痩身／整体）',
    description: 'ルシェリア独自の猫背矯正や肩甲骨剥がしを取り入れ、身体のこわばりや姿勢の崩れにアプローチします。ハンド技術と必要に応じたケアを組み合わせ、一人一人のお悩みに合わせた施術を行います。',
    image: '/images/body.png',
    priceFrom: '¥2,980',
    trialPriceFrom: '¥2,980',
    recommended: ['身体の疲れが抜けない方', 'むくみが気になる方', 'ボディラインを整えたい方', 'リラックスしたい方'],
    features: ['猫背矯正・肩甲骨剥がしで姿勢にアプローチ', '痩身・整体メニューも充実', '遠赤外線ドーム完備', '施術後のカウンセリング'],
    items: [
      { name: 'Angel Feather Body – Stretch & Squeeze整体', nameDetail: '肩甲骨剥がし×筋膜×リンパ×小顔の全身解放ケア', duration: '75分', price: '¥25,000', memberPrice: '¥17,500', trialPrice: '¥9,000' },
      { name: 'Traditional Balinese Herbal Treatment', nameDetail: 'バリ伝統ハーバルトリートメント', duration: '60分', price: '¥15,000', memberPrice: '¥10,000', trialPrice: '¥4,500' },
      { name: 'Meridian Detox Release', nameDetail: '経絡×リンパで老廃物を深部から排出', duration: '45分', price: '¥15,000', memberPrice: '¥12,000', trialPrice: '¥3,980' },
      { name: 'Gut Flow Release', nameDetail: '腸もみ×ストレッチで巡りを整える内側ケア', duration: '45分', price: '¥15,000', memberPrice: '¥12,000', trialPrice: '¥3,980' },
      { name: 'Body Alignment Stretch', nameDetail: '骨格×姿勢×全身バランスリセット', duration: '30分', price: '¥8,000', memberPrice: '¥6,500', trialPrice: '¥3,980' },
      { name: 'Relaxing Body Care', nameDetail: '服の上から全身もみほぐし', duration: '60分', price: '¥8,000', memberPrice: '¥6,000', trialPrice: '¥3,980' },
      { name: 'Dry Head', nameDetail: '眼精疲労×睡眠の質を高める', duration: '30分', price: '¥5,000', memberPrice: '¥3,000', trialPrice: '¥1,980', isOption: true, optionNote: 'Relaxing Body Careとのセット施術' },
      { name: 'Oil Foot Care', nameDetail: 'むくみ冷え性×足の疲労ケア', duration: '30分', price: '¥5,500', memberPrice: '¥3,500', trialPrice: '¥1,980', isOption: true, optionNote: 'Relaxing Body Careとのセット施術' },
      { name: 'Photo Bust Lift Treatment', nameDetail: 'LPL光美胸ケア', duration: '90分', price: '¥35,000', memberPrice: '¥18,000', trialPrice: '¥7,980' },
      { name: 'Photo Hip Lift Treatment', nameDetail: 'IPL光美尻ケア', duration: '90分', price: '¥35,000', memberPrice: '¥18,000', trialPrice: '¥7,980' },
      { name: 'Premium Detox Dome', nameDetail: '遠赤外線による温活・代謝・デトックスケア', duration: '30分', price: '¥3,500', memberPrice: '¥1,000', trialPrice: '¥500', isOption: true },
    ],
  },
  {
    id: 'facial',
    slug: '/menu/facial',
    nameEn: 'Facial',
    nameJa: 'フェイシャル',
    description: '骨格矯正付きのオールハンドフェイシャルを中心に、表情筋・首肩・頭部まで丁寧にアプローチ。小顔、むくみ、たるみ、眼精疲労、首肩凝りなど、一人一人のお悩みに合わせた上質なフェイシャルケアをご提案します。',
    image: '/images/facial.png',
    priceFrom: '¥2,980',
    trialPriceFrom: '¥2,980',
    recommended: ['乾燥・くすみが気になる方', '毛穴を引き締めたい方', 'ハリ・弾力が欲しい方', '肌トラブルを改善したい方'],
    features: ['カウンセリングでお悩みを把握', '肌状態に合わせた施術選択', 'ハンドとマシンのダブルアプローチ', '施術後のホームケアアドバイス'],
    items: [
      { name: 'le cherien Contour Lift', nameDetail: '表情筋・側頭部・首肩周辺の造顔フェイシャル／小顔・首肩凝り・眼精疲労に', duration: '30分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: '東洋美整 Lift Facial', nameDetail: '引締め・むくみ・たるみ・リラクゼーションに', duration: '30分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: 'IPL Ageless Skin Facial', nameDetail: 'シミ・たるみ・毛穴・くすみに。光で真皮層にアプローチ', duration: '30分', price: '¥25,000', memberPrice: '¥15,000', trialPrice: '¥4,980' },
      { name: 'RF Skin Lift Therapy', nameDetail: 'デコルテ・首・顔からほぐし、細かいシワや弛みにアプローチ', duration: '30分', price: '¥20,000', memberPrice: '¥10,000', trialPrice: '¥3,980' },
      { name: 'Plasma Light Therapy', nameDetail: 'プラセンタ原液・α-VC誘導体・幹細胞導入付き。毛穴引締め・たるみケアに', duration: '20分', price: '¥15,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: 'Placenta Vitamin Ion Therapy', nameDetail: 'プラセンタ＋ビタミンC原液イオン導入。透明感・ハリ・肌荒れケアに', duration: '15分', price: '¥6,000', memberPrice: '¥3,000', trialPrice: '¥2,980' },
      { name: 'Ultrasonic Facial Treatment', nameDetail: '毛穴の汚れ・むくみ・リフトアップ・眼精疲労・首凝りの改善に', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: 'Wrinkle & Eye Care Scalp Treatment', nameDetail: 'LEDボール＋マイクロカレント＋アイパック集中ケア付き。目元の弛み・眼精疲労・頭皮凝りに', duration: '30分', price: '¥15,000', memberPrice: '¥8,500', trialPrice: '¥3,980' },
      { name: 'HARI SERUM Lift Therapy', nameDetail: 'イノスピキュール美容液導入。デコルテから頭皮のマッサージケア付き', duration: '30分', price: '¥10,000', memberPrice: '¥7,500', trialPrice: '¥3,980' },
      { name: 'Doctor line placentaマスク導入', nameDetail: 'Electroporation×美筋EMSケア付き。乾燥肌・ハリ・艶UPに', duration: '30分', price: '¥10,000', memberPrice: '¥5,000', trialPrice: '¥2,980' },
      { name: 'luxury炭酸×水素パック', nameDetail: '弛み毛穴・美白・シワに', duration: '20分', price: '¥6,000', memberPrice: '¥3,500', trialPrice: '¥2,980' },
      { name: 'placenta炭酸パック', nameDetail: '開き毛穴・ニキビ・シミに', duration: '20分', price: '¥6,000', memberPrice: '¥3,500', trialPrice: '¥2,980' },
      { name: '金箔or琥珀パック', nameDetail: '黒ずみ毛穴・角質・脂性肌に', duration: '20分', price: '¥6,000', memberPrice: '¥3,500', trialPrice: '¥2,980' },
      { name: '毛穴吸引・フェイシャルミスト', duration: '15分', price: '¥6,000', memberPrice: '¥3,000', trialPrice: '¥2,980', isOption: true },
      { name: 'Premium Detox Dome', nameDetail: '遠赤外線による温活・代謝・デトックスケア', duration: '30分', price: '¥3,500', memberPrice: '¥1,000', trialPrice: '¥500', isOption: true },
    ],
  },
  {
    id: 'head',
    slug: '/menu/head',
    nameEn: 'Head Treatment',
    nameJa: 'ヘッド',
    description: '頭皮チェック・炭酸ケアからTLT極上ドライヘッドスパまで。頭皮の血行促進や首・肩のこわばりにもアプローチし、心身の緊張をやわらげます。',
    image: '/images/head.png',
    priceFrom: '¥3,500',
    trialPriceFrom: '¥3,500',
    recommended: ['頭皮の疲れや張りが気になる方', '首・肩のこりでお悩みの方', '眼精疲労が続いている方', '深くリラックスしたい方'],
    features: ['頭皮チェック・炭酸ケア付き', '血行促進アプローチ', 'リラクゼーション重視の施術', 'ハンドによる丁寧な技術'],
    items: [
      {
        name: 'Srotas 癒しのHead Spa',
        nameDetail: 'コース内容：スロータス使用、オールハンド／コース時間：30分',
        price: '¥7,500',
        memberPrice: '¥7,500',
        trialPrice: '45分 ¥4,500',
        description: '特別価格：5回 ¥32,500 / 10回 ¥60,000',
      },
      {
        name: '炭酸(placenta幹細胞)×育毛Head',
        nameDetail: 'コース内容：炭酸、ヘッド使用＋ハンド／コース時間：45分',
        price: '¥8,500',
        memberPrice: '¥8,500',
        trialPrice: '45分 ¥4,500',
        description: '特別価格：5回 ¥37,500 / 10回 ¥70,000',
      },
      {
        name: '凝り解消×極上Head Spa',
        nameDetail: 'コース内容：デコルテ、首TM付き、商材＋ヘッド機器＋ハンド／コース時間：60分',
        price: '¥9,500',
        memberPrice: '¥9,500',
        trialPrice: '45分 ¥4,500',
        description: '特別価格：5回 ¥42,500 / 10回 ¥80,000',
      },
    ],
  },
  {
    id: 'hair-removal',
    slug: '/menu/hair-removal',
    nameEn: 'Hair Removal',
    nameJa: '脱毛',
    description: 'お肌への負担に配慮しながら、気になるムダ毛を丁寧にケア。レディース・メンズどちらにも対応し、部位別のご相談も承っております。',
    image: '/images/hair-removal-menu.png',
    priceFrom: '¥1,000',
    trialPriceFrom: '¥1,000',
    recommended: ['ムダ毛が気になる方', 'セルフケアの手間を省きたい方', '敏感肌でお悩みの方', 'メンズの方も歓迎'],
    features: ['丁寧なカウンセリング', '部位別の柔軟なプラン', 'レディース・メンズ対応', '肌状態に合わせた施術'],
    items: [
      { name: '顔脱毛（レディース）', price: '¥1,980' },
      {
        name: '髭脱毛＋美顔付き（メンズ）',
        price: '¥5,500',
        nameDetail: '美顔内容：le cherien Contour Lift または 東洋美整 Lift Facial',
      },
      { name: '眉毛デザイン脱毛', price: '¥3,000' },
      { name: 'VIO脱毛', price: '¥9,800' },
      {
        name: 'プチパーツ脱毛（1箇所）',
        nameDetail: '脇・うなじ・手足の甲・指・ヘソ下',
        price: '¥1,000',
      },
      {
        name: 'ラージパーツ脱毛（1箇所）',
        nameDetail: 'ヒジ上・ヒジ下・背中上・背中下・ヒザ上・ヒザ下・お腹・胸・腰',
        price: '¥3,000',
      },
    ],
  },
  {
    id: 'machine',
    slug: '/menu/machine',
    nameEn: 'Machine Care',
    nameJa: 'マシンケア',
    description: '先進美容機器で、手技だけでは届きにくいお悩みにアプローチ。目的に合わせた機器選択で、効率よく理想の肌・ボディへ導きます。',
    image: '/images/machine-care.jpg',
    priceFrom: '¥2,980',
    trialPriceFrom: '¥2,980',
    recommended: ['効率よくケアしたい方', 'ハンドと機器を組み合わせたい方', '気になる部位を集中ケアしたい方', '美肌を目指したい方'],
    features: ['目的別の機器選択', 'ハンドケアとの組み合わせも可', 'フェイス・ボディ両対応', 'カウンセリングで最適プランをご提案'],
    items: [
      { name: 'ラジオ波', duration: '30分', price: '¥3,980', nameDetail: '身体を深部から温め、凝り・冷え・むくみにアプローチ' },
      { name: 'セルライトケア', duration: '30分', price: '¥3,980', nameDetail: '気になる部位の凹凸や引き締めをサポート' },
      { name: 'EMS', duration: '30分', price: '¥3,980', nameDetail: '筋肉へのアプローチで引き締め・くびれ形成' },
      { name: '全身カッピング', duration: '30分', price: '¥3,980', nameDetail: '巡りを整え、こわばりや冷えが気になる方に' },
      { name: '超音波', duration: '30分', price: '¥2,980', nameDetail: '肌の奥まで美容成分を浸透させる導入ケア' },
    ],
  },
  {
    id: 'bridal',
    slug: '/menu/bridal',
    nameEn: 'Bridal',
    nameJa: 'ブライダル',
    description: '大切な日に向けて、肌・ボディ・印象をトータルに整えます。完全個室の安心感ある空間で、丁寧なカウンセリングと計画的なケアでサポートします。挙式直前でもご相談ください。',
    image: '/images/bridal.png',
    priceFrom: '¥25,800',
    memberOnly: false,
    recommended: ['結婚式を控えている方', '前撮りを予定している方', '大切なイベントに向けて整えたい方', '肌・ボディ・印象をトータルケアしたい方'],
    features: ['ご要望に合わせたオーダーメイドプラン', '複数回コースで徐々に整える', 'フェイシャル・ボディ・ヘッドまで対応', '挙式直前でも相談可能な柔軟対応'],
    items: [
      { name: '挙式直前 1dayコース', duration: '180分', price: '¥25,800', memberPrice: '¥25,800', trialPrice: '¥9,800' },
      { name: '挙式直前 3dayコース', duration: '540分（3回）', price: '¥60,000', memberPrice: '¥60,000', description: '1回あたり ¥20,000' },
      { name: '6回〜 シンデレラプラン', duration: '1,080分（6回）', price: '¥108,000', memberPrice: '¥108,000', description: '1回あたり ¥18,000' },
      { name: '12回〜 デラックスプラン', duration: '2,160分（12回）', price: '¥180,000', memberPrice: '¥180,000', description: '1回あたり ¥15,000' },
      { name: '新郎 1dayコース', duration: '180分', price: '¥29,800', memberPrice: '¥29,800' },
      { name: '新郎 3dayコース', duration: '540分（3回）', price: '¥72,000', memberPrice: '¥72,000', description: '1回あたり ¥24,000' },
      { name: 'マタニティ新婦コース', duration: '90分', price: '¥18,000', memberPrice: '¥18,000', nameDetail: 'デコルテ、二の腕、フェイシャル、ヘッドマッサージ' },
    ],
  },
];

export const CAMPAIGN_ITEMS = [
  {
    id: 1,
    label: 'お試し',
    nameEn: 'Body Treatment',
    nameJa: 'ボディトリートメント',
    price: '¥2,980',
    description: '猫背矯正・肩甲骨剥がし対応のボディケアからセルライトケアまで。お試し価格でお気軽に体験いただけます。',
    image: '/images/body.png',
    link: '/menu/body',
  },
  {
    id: 2,
    label: 'お試し',
    nameEn: 'Facial Care',
    nameJa: 'フェイシャルケア',
    price: '¥2,980',
    description: '骨格矯正付きオールハンドフェイシャルからIPL光フォトまで。お肌の状態を丁寧に確認しながら施術します。',
    image: '/images/facial.png',
    link: '/menu/facial',
  },
  {
    id: 3,
    label: 'お試し',
    nameEn: 'Head Treatment',
    nameJa: 'ヘッドトリートメント',
    price: '¥3,500',
    description: 'TLT極上ドライヘッドスパをお試し価格で。頭皮から深いリラクゼーションを体験してください。',
    image: '/images/head.png',
    link: '/menu/head',
  },
];
