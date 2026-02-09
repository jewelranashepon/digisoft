import { calculateCost, CalculatorState } from '../../lib/calculator';
import { DollarSign, TrendingDown, FileText, Info } from 'lucide-react';

interface PricingDisplayProps {
  state: CalculatorState;
}

export function PricingDisplay({ state }: PricingDisplayProps) {
  const { subtotal, discount, total, breakdown } = calculateCost(state);

  return (
    <div className="sticky top-4 space-y-4">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -ml-12 -mb-12"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 opacity-80" />
            <h3 className="text-sm font-semibold tracking-wider uppercase opacity-90">
              Estimated Total Cost
            </h3>
          </div>
          <div className="mb-6">
            <div className="text-6xl font-bold leading-tight tracking-tight">
              ${total.toLocaleString()}
            </div>
            <p className="text-sm opacity-75 mt-1">Including 20% discount</p>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/20">
            <div className="flex justify-between items-center text-sm">
              <span className="opacity-90">Subtotal:</span>
              <span className="font-semibold text-lg">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <span className="font-semibold flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                20% Discount:
              </span>
              <span className="font-bold text-lg text-green-300">-${discount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {breakdown.length > 0 && (
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Cost Breakdown
          </h4>
          <div className="space-y-2 max-h-80 overflow-y-auto pr-2 scrollbar-thin">
            {breakdown.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-sm rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <span className="text-gray-700 font-medium flex-1">{item.category}</span>
                <span className="font-bold text-blue-600 ml-2">${item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {breakdown.length === 0 && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm font-medium">
            Select services above to see your estimated price
          </p>
        </div>
      )}

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5 text-sm space-y-3">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong className="text-green-700">Standard Package Included:</strong> Homepage, About
              Us, Contact Us, and Services pages at no additional cost.
            </p>
            <p className="text-gray-700">
              <strong className="text-green-700">20% flat discount</strong> is applied to all
              packages. Additional monthly costs may apply for business email (from $8/month per
              account).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
