import { CalculatorState } from '../../lib/calculator';
import { Palette, CreditCard, FileText } from 'lucide-react';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';

interface GraphicsSectionProps {
  state: CalculatorState;
  onChange: (updates: Partial<CalculatorState>) => void;
}

export function GraphicsSection({ state, onChange }: GraphicsSectionProps) {
  const additionalOptions = [
    { id: 'brochure', label: 'Tri-fold Brochure Design', price: '$150' },
    { id: 'pullup', label: 'Pull-up Banner Design', price: '$200' },
    { id: 'booklet', label: 'Company Booklet/Magazine Design', price: '$250' },
    { id: 'letterhead', label: 'Letterhead Design', price: '$60' },
    { id: 'signage', label: 'Shop Signage Design', price: '$300' },
  ];

  const toggleAdditionalGraphic = (graphicId: string) => {
    const updated = state.additionalGraphics.includes(graphicId)
      ? state.additionalGraphics.filter((g) => g !== graphicId)
      : [...state.additionalGraphics, graphicId];
    onChange({ additionalGraphics: updated });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-bold text-gray-900 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md">
            <Palette className="w-5 h-5" />
          </div>
          Logo Design
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'yes', label: 'Yes, I need Logo Design', price: '$400' },
            { id: 'no', label: "No, I don't need Logo Design", price: '' },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => onChange({ logoDesign: option.id === 'yes' })}
              className={`px-5 py-4 rounded-xl border-2 font-semibold transition-all ${
                (option.id === 'yes' ? state.logoDesign : !state.logoDesign)
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              <div>{option.label}</div>
              {option.price && <div className="text-sm mt-1 opacity-75">{option.price}</div>}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-bold text-gray-900 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md">
            <CreditCard className="w-5 h-5" />
          </div>
          Business Card Design
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'yes', label: 'Yes, I need Business Card Design', price: '$80' },
            { id: 'no', label: "No, I don't need Business Card Design", price: '' },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => onChange({ businessCardDesign: option.id === 'yes' })}
              className={`px-5 py-4 rounded-xl border-2 font-semibold transition-all ${
                (option.id === 'yes' ? state.businessCardDesign : !state.businessCardDesign)
                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div>{option.label}</div>
              {option.price && <div className="text-sm mt-1 opacity-75">{option.price}</div>}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-bold text-gray-900 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md">
            <FileText className="w-5 h-5" />
          </div>
          Flyer Design
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'yes', label: 'Yes, I need Flyer Design', price: '$100' },
            { id: 'no', label: "No, I don't need Flyer Design", price: '' },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => onChange({ flyerDesign: option.id === 'yes' })}
              className={`px-5 py-4 rounded-xl border-2 font-semibold transition-all ${
                (option.id === 'yes' ? state.flyerDesign : !state.flyerDesign)
                  ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:shadow-sm'
              }`}
            >
              <div>{option.label}</div>
              {option.price && <div className="text-sm mt-1 opacity-75">{option.price}</div>}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200">
        <Label className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 text-white flex items-center justify-center text-lg font-bold shadow-sm">
            +
          </span>
          Additional Graphic Design Services
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {additionalOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => toggleAdditionalGraphic(option.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                state.additionalGraphics.includes(option.id)
                  ? 'border-gray-500 bg-white shadow-md transform scale-105'
                  : 'border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm'
              }`}
            >
              <Checkbox
                id={option.id}
                checked={state.additionalGraphics.includes(option.id)}
                onCheckedChange={() => toggleAdditionalGraphic(option.id)}
              />
              <div className="flex-1">
                <Label htmlFor={option.id} className="font-semibold cursor-pointer text-gray-900 block">
                  {option.label}
                </Label>
                <span className="text-sm text-gray-600 font-medium">{option.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
