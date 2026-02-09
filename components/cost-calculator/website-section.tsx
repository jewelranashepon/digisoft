import { CalculatorState } from "../../lib/calculator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

interface WebsiteSectionProps {
  state: CalculatorState;
  onChange: (updates: Partial<CalculatorState>) => void;
}

export function WebsiteSection({ state, onChange }: WebsiteSectionProps) {
  const defaultPages = ["homepage", "about", "contact", "services"];

  const pageOptions = [
    { id: "homepage", label: "Homepage" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
    { id: "services", label: "Our Services" },
    { id: "gallery", label: "Gallery / Projects" },
    { id: "blog", label: "Blog Section" },
    { id: "callback", label: "Request a Callback" },
    { id: "booking", label: "Calendar Booking" },
    { id: "payment", label: "Online Payment" },
    { id: "form5", label: "Extra 5 Pages" },
    { id: "form20", label: "Extra 20 Pages" },
    { id: "form50", label: "Extra 50 Pages" },
  ];

  const disabilityOptions = [
    { id: "referrers", label: "Referrers Form" },
    { id: "employment", label: "Employment Form" },
    { id: "feedback", label: "Feedback & Complaint Form" },
    { id: "video", label: "Professional Cover Video" },
    { id: "animation", label: "Logo Animation" },
  ];

  const ecommerceOptions = [
    { id: "afterpay", label: "AfterPay/Zip Integration" },
    { id: "socialSync", label: "Facebook/Instagram Shop Sync" },
    { id: "pos", label: "POS Integration" },
    { id: "notification", label: "Live Sales Frontend Notification" },
    { id: "app", label: "Store Management App" },
  ];

  const featureOptions = [
    { id: "chat", label: "Live Chat" },
    { id: "analytics", label: "Google Analytics Setup (G4)" },
    { id: "facebook", label: "Facebook Pixel Setup" },
    { id: "gmb", label: "GMB Listing" },
    { id: "ssl", label: "256 Bit SSL Certificate" },
    { id: "social", label: "Social Media Setup" },
    { id: "newsletter", label: "Newsletter Integration" },
    { id: "automation", label: "Lead Nurturing (Automation)" },
  ];

  const togglePageType = (pageId: string) => {
    if (defaultPages.includes(pageId)) return;
    const updated = state.pageType.includes(pageId)
      ? state.pageType.filter((p) => p !== pageId)
      : [...state.pageType, pageId];
    onChange({ pageType: updated });
  };

  const toggleArray = (
    array: string[],
    item: string,
    key: keyof CalculatorState,
  ) => {
    const updated = array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
    onChange({ [key]: updated } as Partial<CalculatorState>);
  };

  // Reusable Select styles to match your first dropdown
  const selectTriggerClass = `
    w-full
    bg-slate-100
    border-2 border-slate-300
    text-slate-900
    rounded-lg
    h-11
    hover:bg-slate-200
    focus:ring-2 focus:ring-blue-500
    focus:border-blue-500
  `;

  const selectContentClass = `
    bg-slate-100
    border-2 border-slate-300
    rounded-lg
    shadow-lg
  `;

  return (
    <div className="space-y-8">
      {/* 1. Niche Selection */}
      <div className="space-y-3">
        <Label className="text-base font-bold text-gray-900 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
            1
          </span>
          Select Your Niche
        </Label>
        <Select
          value={state.niche}
          onValueChange={(value) => onChange({ niche: value })}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Select your niche" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="ndis" className="focus:bg-slate-200">NDIS / Disability</SelectItem>
            <SelectItem value="dental" className="focus:bg-slate-200">Dental</SelectItem>
            <SelectItem value="tradie" className="focus:bg-slate-200">Tradie (Plumber, etc)</SelectItem>
            <SelectItem value="aboriginal" className="focus:bg-slate-200">Aboriginal Corporation</SelectItem>
            <SelectItem value="food" className="focus:bg-slate-200">Food Industry</SelectItem>
            <SelectItem value="consultancy" className="focus:bg-slate-200">Consultancy</SelectItem>
            <SelectItem value="medical" className="focus:bg-slate-200">Medical</SelectItem>
            <SelectItem value="store" className="focus:bg-slate-200">Online Store</SelectItem>
            <SelectItem value="other" className="focus:bg-slate-200">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 2. Page Selection */}
      <div className="space-y-4">
        <Label className="text-base font-bold text-gray-900 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
            2
          </span>
          Select Pages for Your Website
        </Label>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 text-sm text-gray-700">
          <span className="font-semibold text-green-700">Standard Package Included:</span> Homepage, About Us, Contact Us, and Services pages
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pageOptions.map((option) => {
            const isDefault = defaultPages.includes(option.id);
            const isChecked = state.pageType.includes(option.id);
            return (
              <div
                key={option.id}
                onClick={() => !isDefault && togglePageType(option.id)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  isDefault
                    ? "border-green-300 bg-green-50 cursor-not-allowed"
                    : isChecked
                      ? "border-blue-500 bg-blue-50 cursor-pointer hover:shadow-md"
                      : "border-gray-200 bg-white cursor-pointer hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={option.id}
                    checked={isChecked}
                    disabled={isDefault}
                    onCheckedChange={() => togglePageType(option.id)}
                  />
                </div>
                <Label
                  htmlFor={option.id}
                  className={`font-medium flex-1 ${isDefault ? "cursor-not-allowed text-gray-700" : "cursor-pointer text-gray-900"}`}
                >
                  {option.label}
                  {isDefault && (
                    <span className="text-xs text-green-600 ml-2 font-semibold">(Included)</span>
                  )}
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      {/* NDIS Features */}
      {state.niche === "ndis" && (
        <div className="space-y-3 p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
          <Label className="text-base font-semibold text-gray-900">Select NDIS Website Features</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {disabilityOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => toggleArray(state.disabilityFeatures, option.id, "disabilityFeatures")}
                className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                  state.disabilityFeatures.includes(option.id)
                    ? "border-blue-500 bg-white shadow-sm"
                    : "border-blue-200 bg-white hover:border-blue-400"
                }`}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={option.id}
                    checked={state.disabilityFeatures.includes(option.id)}
                    onCheckedChange={() => toggleArray(state.disabilityFeatures, option.id, "disabilityFeatures")}
                  />
                </div>
                <Label htmlFor={option.id} className="font-medium cursor-pointer text-gray-900">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Domain and Hosting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900">Domain Name Registration</Label>
          <Select
            value={state.domainRegistration}
            onValueChange={(value) => onChange({ domainRegistration: value })}
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className={selectContentClass}>
              <SelectItem value="none" className="focus:bg-slate-200">No, I have already registered</SelectItem>
              <SelectItem value="year1" className="focus:bg-slate-200">Yes, for 1 year ($15)</SelectItem>
              <SelectItem value="year3" className="focus:bg-slate-200">Yes, for 3 years ($45)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900">Web Hosting Service</Label>
          <Select
            value={state.webHosting}
            onValueChange={(value) => onChange({ webHosting: value })}
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className={selectContentClass}>
              <SelectItem value="none" className="focus:bg-slate-200">No, I have already registered</SelectItem>
              <SelectItem value="year1" className="focus:bg-slate-200">Yes, for 1 year ($80)</SelectItem>
              <SelectItem value="year3" className="focus:bg-slate-200">Yes, for 3 years ($240)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Design Complexity */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-gray-900">Design Complexity</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {["REGULAR", "PREMIUM", "CUSTOM"].map((complexity) => (
            <button
              key={complexity}
              type="button"
              onClick={() => onChange({ designComplexity: complexity })}
              className={`p-5 rounded-xl border-2 font-semibold transition-all ${
                state.designComplexity === complexity
                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-md transform scale-105"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow-sm"
              }`}
            >
              <div className="text-lg">{complexity}</div>
              <div className="text-xs mt-1 opacity-75">
                {complexity === "REGULAR" && "$800"}
                {complexity === "PREMIUM" && "$1,500"}
                {complexity === "CUSTOM" && "$2,500"}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Website Type */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-gray-900">What is the type of website?</Label>
        <Select
          value={state.websiteType}
          onValueChange={(value) => onChange({ websiteType: value })}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Select website type" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="Basic" className="focus:bg-slate-200">Basic Website ($500)</SelectItem>
            <SelectItem value="eCommerce" className="focus:bg-slate-200">eCommerce Website ($1,200)</SelectItem>
            <SelectItem value="Portal" className="focus:bg-slate-200">User Portal ($1,500)</SelectItem>
            <SelectItem value="LMS" className="focus:bg-slate-200">Study LMS ($1,800)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* eCommerce Features */}
      {state.websiteType === "eCommerce" && (
        <div className="space-y-3 p-5 bg-amber-50 rounded-xl border-2 border-amber-200">
          <Label className="text-base font-semibold text-gray-900">eCommerce Features</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ecommerceOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => toggleArray(state.ecommerceFeatures, option.id, "ecommerceFeatures")}
                className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                  state.ecommerceFeatures.includes(option.id)
                    ? "border-amber-500 bg-white shadow-sm"
                    : "border-amber-200 bg-white hover:border-amber-400"
                }`}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={option.id}
                    checked={state.ecommerceFeatures.includes(option.id)}
                    onCheckedChange={() => toggleArray(state.ecommerceFeatures, option.id, "ecommerceFeatures")}
                  />
                </div>
                <Label htmlFor={option.id} className="font-medium cursor-pointer text-gray-900">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copywriting */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-gray-900">Content Copywriting Service</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: "yes", label: "Yes, I need content writing ($600)" },
            { id: "no", label: "No, I'll write my own" },
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange({ copywriting: option.id })}
              className={`px-5 py-4 rounded-lg border-2 font-medium transition-all ${
                state.copywriting === option.id
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Types */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-gray-900">Media Types</Label>
        <Select
          value={state.mediaTypes[0] || "own"}
          onValueChange={(value) => onChange({ mediaTypes: [value] })}
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="Select media type" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="own" className="focus:bg-slate-200">I have our business photos & videos</SelectItem>
            <SelectItem value="stock_photos" className="focus:bg-slate-200">I need stock photos - Up to 15 ($150)</SelectItem>
            <SelectItem value="stock_videos" className="focus:bg-slate-200">I need stock videos - Up to 4 ($300)</SelectItem>
            <SelectItem value="both" className="focus:bg-slate-200">Both stock photos & videos ($400)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Advanced Features */}
      <div className="space-y-3 p-5 bg-gray-50 rounded-xl border-2 border-gray-200">
        <Label className="text-base font-semibold text-gray-900">Advanced Features</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {featureOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => toggleArray(state.additionalFeatures, option.id, "additionalFeatures")}
              className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                state.additionalFeatures.includes(option.id)
                  ? "border-gray-500 bg-white shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-400"
              }`}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  id={option.id}
                  checked={state.additionalFeatures.includes(option.id)}
                  onCheckedChange={() => toggleArray(state.additionalFeatures, option.id, "additionalFeatures")}
                />
              </div>
              <Label htmlFor={option.id} className="font-medium cursor-pointer text-gray-900">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Business Emails */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-gray-900">Professional Business Email Accounts</Label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="0"
            max="20"
            value={state.businessEmails}
            onChange={(e) =>
              onChange({ businessEmails: parseInt(e.target.value) || 0 })
            }
            className="w-28 px-4 py-2.5 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
          <span className="text-sm text-gray-600">
            accounts <span className="font-medium">(Office 365 - $8/month each)</span>
          </span>
        </div>
      </div>
    </div>
  );
}