import type { MenuItem } from '../../data/menuData';

interface PriceTableProps {
  items: MenuItem[];
  memberOnly?: boolean;
}

export default function PriceTable({ items, memberOnly }: PriceTableProps) {
  const mainItems = items.filter((item) => !item.isOption);
  const optionItems = items.filter((item) => item.isOption);

  const hasTrialPrice = items.some((item) => item.trialPrice);
  const hasMemberPrice = items.some((item) => item.memberPrice);

  return (
    <div>
      <div className="border border-border overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-soft-gray border-b border-border">
              <th className="text-left text-xs text-mid-gray font-sans font-normal tracking-wider px-5 py-3">施術名</th>
              <th className="text-center text-xs text-mid-gray font-sans font-normal tracking-wider px-3 py-3 w-20">時間</th>
              {!memberOnly && (
                <th className="text-right text-xs text-mid-gray font-sans font-normal tracking-wider px-3 py-3 w-24">定価</th>
              )}
              {hasMemberPrice && (
                <th className="text-right text-xs text-mid-gray font-sans font-normal tracking-wider px-3 py-3 w-24">
                  会員価格
                </th>
              )}
              {hasTrialPrice && !memberOnly && (
                <th className="text-right text-xs text-charcoal font-sans font-medium tracking-wider px-3 py-3 w-28 bg-amber-50">
                  お試し価格
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {mainItems.map((item, i) => (
              <tr key={i} className={i < mainItems.length - 1 ? 'border-b border-border' : ''}>
                <td className="text-charcoal text-sm font-sans px-5 py-4">{item.name}</td>
                <td className="text-center text-mid-gray text-xs font-sans px-3 py-4">{item.duration || '-'}</td>
                {!memberOnly && (
                  <td className="text-right text-mid-gray text-sm font-serif px-3 py-4">{item.price || '-'}</td>
                )}
                {hasMemberPrice && (
                  <td className="text-right text-charcoal text-sm font-serif px-3 py-4">{item.memberPrice || '-'}</td>
                )}
                {hasTrialPrice && !memberOnly && (
                  <td className="text-right text-charcoal text-sm font-serif font-medium px-3 py-4 bg-amber-50/50">
                    {item.trialPrice ? (
                      <span className="text-amber-700">{item.trialPrice}</span>
                    ) : '-'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {optionItems.length > 0 && (
        <div className="mt-6">
          <p className="text-mid-gray text-xs font-sans tracking-wider mb-3">Option</p>
          <div className="border border-border overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <tbody>
                {optionItems.map((item, i) => (
                  <tr key={i} className={i < optionItems.length - 1 ? 'border-b border-border' : ''}>
                    <td className="text-charcoal text-sm font-sans px-5 py-3">{item.name}</td>
                    <td className="text-center text-mid-gray text-xs font-sans px-3 py-3 w-20">{item.duration || '-'}</td>
                    {!memberOnly && (
                      <td className="text-right text-mid-gray text-sm font-serif px-3 py-3 w-24">{item.price || '-'}</td>
                    )}
                    {hasMemberPrice && (
                      <td className="text-right text-charcoal text-sm font-serif px-3 py-3 w-24">{item.memberPrice || '-'}</td>
                    )}
                    {hasTrialPrice && !memberOnly && (
                      <td className="text-right text-sm font-serif px-3 py-3 w-28 bg-amber-50/50">
                        {item.trialPrice ? (
                          <span className="text-amber-700">{item.trialPrice}</span>
                        ) : '-'}
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
        <p className="text-mid-gray text-xs font-sans">※価格は税込表示です。</p>
        {hasMemberPrice && <p className="text-mid-gray text-xs font-sans">※会員価格は年会費¥10,000の会員様が対象です。</p>}
        {memberOnly && <p className="text-mid-gray text-xs font-sans">※ブライダルメニューは会員様限定のメニューです。</p>}
      </div>
    </div>
  );
}
