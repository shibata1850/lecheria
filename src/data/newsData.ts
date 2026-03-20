export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  slug: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: '2026.03.01',
    title: '公式ホームページを公開しました',
    description: 'ル・シェリアの公式ホームページをオープンいたしました。',
    slug: 'website-open',
  },
  {
    id: '2',
    date: '2026.03.01',
    title: 'ご予約受付を開始いたしました',
    description: 'Hotpepper Beauty・LINE・フォームよりご予約を承っております。',
    slug: 'reservation-start',
  },
  {
    id: '3',
    date: '2026.03.01',
    title: 'オープン記念メニューを掲載しております',
    description: '開業を記念した特別メニューをご用意しています。詳しくはメニューページをご覧ください。',
    slug: 'opening-campaign',
  },
  {
    id: '4',
    date: '2026.03.01',
    title: 'LINEからのご相談受付を開始しました',
    description: '公式LINEアカウントを開設しました。お気軽にご相談ください。',
    slug: 'line-open',
  },
];
