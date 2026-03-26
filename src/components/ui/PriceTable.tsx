import type { MenuItem } from '../../data/menuData';

interface PriceTableProps {
  items: MenuItem[];
  memberOnly?: boolean;
  showAllPrices?: boolean;
  taxNote?: string;
  memberNote?: string;
}

export default function PriceTable({ items, memberOnly, showAllPrices, taxNote, memberNote }: PriceTableProps) {
  const mainItems = items.filter((item) => !item.isOption);
  const optionItems = items.filter((item) => item.isOption);

  const hasRegularPrice = mainItems.some((i) => i.price);
  const hasMemberPrice = mainItems.some((i) => i.memberPrice);
  const hasTrialPrice = mainItems.some((i) => i.trialPrice);

  const showRegular = showAllPrices && hasRegularPrice;
  const showMember = showAllPrices && hasMemberPrice;
  const showTrial = hasTrialPrice;

  const renderRow = (item: MenuItem, i: number, isLast: boolean) => (
    <tr key={i} className={!isLast ? 'border-b border-border' : ''}>
      <td className="text-charcoal text-sm font-sans px-4 py-4">
        <span className="font-medium">{item.name}</span>
        {item.nameDetail && (
          <span className="block text-xs text-mid-gray mt-0.5">{item.nameDetail}</span>
        )}
        {item.duration && (
          <span className="block text-xs text-mid-gray mt-0.5">{item.duration}</span>
        )}
        {item.optionNote && (
          <span className="block text-xs text-amber-700 mt-1">※{item.optionNote}</span>
        )}
      </td>
      {showRegular && (
        <td className="text-right text-charcoal text-sm font-sans font-medium px-4 py-4 whitespace-nowrap">
          {item.price || <span className="text-mid-gray text-xs">-</span>}
        </td>
      )}
      {showMember && (
        <td className="text-right text-charcoal text-sm font-sans font-medium px-4 py-4 bg-stone-50/70 whitespace-nowrap">
          {item.memberPrice || <span className="text-mid-gray text-xs">-</span>}
        </td>
      )}
      {showTrial && (
        <td className="text-right text-sm font-sans font-medium px-4 py-4 bg-amber-50/60 whitespace-nowrap">
          {item.trialPrice
            ? <span className="text-amber-700">{item.trialPrice}</span>
            : <span className="text-mid-gray text-xs">-</span>}
        </td>
      )}
      {!showAllPrices && !hasTrialPrice && (
        <td className="text-right text-charcoal text-sm font-sans font-medium px-4 py-4 whitespace-nowrap">
          {memberOnly && item.memberPrice ? item.memberPrice : item.price || '-'}
        </td>
      )}
    </tr>
  );

  return (
    <div>
      <div className="border border-border overflow-x-auto rounded-sm">
        <table className="w-full min-w-[320px]">
          <thead>
            <tr className="bg-soft-gray border-b border-border">
              <th className="text-left text-xs text-mid-gray font-sans font-normal tracking-wider px-4 py-3">施術名</th>
              {showRegular && (
                <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-4 py-3 whitespace-nowrap">定価</th>
              )}
              {showMember && (
                <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-4 py-3 bg-stone-50/70 whitespace-nowrap">会員価格</th>
              )}
              {showTrial && (
                <th className="text-right text-xs text-amber-700 font-sans font-medium tracking-wider px-4 py-3 bg-amber-50/60 whitespace-nowrap">お試し価格</th>
              )}
              {!showAllPrices && !hasTrialPrice && (
                <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-4 py-3 whitespace-nowrap">
                  {memberOnly ? '会員価格' : '料金'}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {mainItems.map((item, i) => renderRow(item, i, i === mainItems.length - 1))}
          </tbody>
        </table>
      </div>

      {optionItems.length > 0 && (
        <div className="mt-6">
          <p className="text-mid-gray text-xs font-sans tracking-wider mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-mid-gray inline-block" />
            Option
          </p>
          <div className="border border-border overflow-x-auto rounded-sm">
            <table className="w-full min-w-[320px]">
              <thead>
                <tr className="bg-soft-gray border-b border-border">
                  <th className="text-left text-xs text-mid-gray font-sans font-normal tracking-wider px-4 py-3">オプション名</th>
                  {showRegular && (
                    <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-4 py-3 whitespace-nowrap">定価</th>
                  )}
                  {showMember && (
                    <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-4 py-3 bg-stone-50/70 whitespace-nowrap">会員価格</th>
                  )}
                  {optionItems.some((i) => i.trialPrice) && (
                    <th className="text-right text-xs text-amber-700 font-sans font-medium tracking-wider px-4 py-3 bg-amber-50/60 whitespace-nowrap">お試し価格</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {optionItems.map((item, i) => (
                  <tr key={i} className={i < optionItems.length - 1 ? 'border-b border-border' : ''}>
                    <td className="text-charcoal text-sm font-sans px-4 py-3">
                      <span className="font-medium">{item.name}</span>
                      {item.nameDetail && (
                        <span className="block text-xs text-mid-gray mt-0.5">{item.nameDetail}</span>
                      )}
                      {item.duration && (
                        <span className="block text-xs text-mid-gray mt-0.5">{item.duration}</span>
                      )}
                      {item.optionNote && (
                        <span className="block text-xs text-amber-700 mt-1">※{item.optionNote}</span>
                      )}
                    </td>
                    {showRegular && (
                      <td className="text-right text-charcoal text-sm font-sans font-medium px-4 py-3 whitespace-nowrap">
                        {item.price || <span className="text-mid-gray text-xs">-</span>}
                      </td>
                    )}
                    {showMember && (
                      <td className="text-right text-charcoal text-sm font-sans font-medium px-4 py-3 bg-stone-50/70 whitespace-nowrap">
                        {item.memberPrice || <span className="text-mid-gray text-xs">-</span>}
                      </td>
                    )}
                    {optionItems.some((oi) => oi.trialPrice) && (
                      <td className="text-right text-sm font-sans font-medium px-4 py-3 bg-amber-50/60 whitespace-nowrap">
                        {item.trialPrice
                          ? <span className="text-amber-700">{item.trialPrice}</span>
                          : <span className="text-mid-gray text-xs">-</span>}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-3 space-y-1">
        <p className="text-mid-gray text-xs font-sans">{taxNote || '※価格は税抜き表示です。'}</p>
        {memberNote && <p className="text-mid-gray text-xs font-sans">{memberNote}</p>}
        {memberOnly && <p className="text-mid-gray text-xs font-sans">※ブライダルメニューは会員様限定のメニューです。</p>}
      </div>
    </div>
  );
}
