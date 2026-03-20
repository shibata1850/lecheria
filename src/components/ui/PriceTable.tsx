import type { MenuItem } from '../../data/menuData';

interface PriceTableProps {
  items: MenuItem[];
  memberOnly?: boolean;
}

export default function PriceTable({ items, memberOnly }: PriceTableProps) {
  const mainItems = items.filter((item) => !item.isOption);
  const optionItems = items.filter((item) => item.isOption);

  const renderPriceCell = (item: MenuItem) => {
    if (item.trialPrice) {
      return <span className="text-amber-700">{item.trialPrice}</span>;
    }
    if (memberOnly && item.memberPrice) {
      return <span>{item.memberPrice}</span>;
    }
    return <span className="text-mid-gray">{item.price || '-'}</span>;
  };

  return (
    <div>
      <div className="border border-border overflow-x-auto">
        <table className="w-full min-w-[320px]">
          <thead>
            <tr className="bg-soft-gray border-b border-border">
              <th className="text-left text-xs text-mid-gray font-sans font-normal tracking-wider px-5 py-3">施術名</th>
              <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-5 py-3 w-36 bg-amber-50">
                {memberOnly ? '会員価格' : 'お試し価格'}
              </th>
            </tr>
          </thead>
          <tbody>
            {mainItems.map((item, i) => (
              <tr key={i} className={i < mainItems.length - 1 ? 'border-b border-border' : ''}>
                <td className="text-charcoal text-sm font-sans px-5 py-4">{item.name}</td>
                <td className="text-right text-charcoal text-sm font-serif font-medium px-5 py-4 w-36 bg-amber-50/50">
                  {renderPriceCell(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {optionItems.length > 0 && (
        <div className="mt-6">
          <p className="text-mid-gray text-xs font-sans tracking-wider mb-3">Option</p>
          <div className="border border-border overflow-x-auto">
            <table className="w-full min-w-[320px]">
              <tbody>
                {optionItems.map((item, i) => (
                  <tr key={i} className={i < optionItems.length - 1 ? 'border-b border-border' : ''}>
                    <td className="text-charcoal text-sm font-sans px-5 py-3">{item.name}</td>
                    <td className="text-right text-charcoal text-sm font-serif font-medium px-5 py-3 w-36 bg-amber-50/50">
                      {renderPriceCell(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-3 space-y-1">
        <p className="text-mid-gray text-xs font-sans">※価格は税込表示です。</p>
        {memberOnly && <p className="text-mid-gray text-xs font-sans">※ブライダルメニューは会員様限定のメニューです。</p>}
      </div>
    </div>
  );
}
