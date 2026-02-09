export interface CalculatorState {
  niche: string;
  pageType: string[];
  disabilityFeatures: string[];
  domainRegistration: string;
  webHosting: string;
  designComplexity: string;
  websiteType: string;
  ecommerceFeatures: string[];
  copywriting: string;
  mediaTypes: string[];
  additionalFeatures: string[];
  businessEmails: number;
  logoDesign: boolean;
  businessCardDesign: boolean;
  flyerDesign: boolean;
  additionalGraphics: string[];
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  businessName: string;
  projectTimeframe: string;
}

const PRICING = {
  pages: {
    homepage: 0,
    about: 0,
    contact: 0,
    services: 0,
    gallery: 200,
    blog: 250,
    callback: 150,
    booking: 300,
    payment: 250,
    form5: 200,
    form20: 400,
    form50: 800,
  },
  disabilityFeatures: {
    referrers: 200,
    employment: 250,
    feedback: 200,
    video: 400,
    animation: 300,
  },
  domain: {
    year1: 15,
    year3: 45,
  },
  hosting: {
    year1: 80,
    year3: 240,
  },
  designComplexity: {
    REGULAR: 800,
    PREMIUM: 1500,
    CUSTOM: 2500,
  },
  websiteType: {
    Basic: 500,
    eCommerce: 1200,
    Portal: 1500,
    LMS: 1800,
  },
  ecommerceFeatures: {
    afterpay: 300,
    socialSync: 250,
    pos: 400,
    notification: 200,
    app: 500,
  },
  copywriting: 600,
  mediaTypes: {
    stock_photos: 150,
    stock_videos: 300,
    both: 400,
  },
  additionalFeatures: {
    chat: 250,
    analytics: 100,
    facebook: 100,
    gmb: 150,
    ssl: 80,
    social: 150,
    newsletter: 200,
    automation: 400,
  },
  businessEmail: 10,
  graphics: {
    logo: 400,
    businessCard: 80,
    flyer: 100,
    brochure: 150,
    pullup: 200,
    booklet: 250,
    letterhead: 60,
    signage: 300,
  },
};

export function calculateCost(state: CalculatorState): {
  subtotal: number;
  discount: number;
  total: number;
  breakdown: { category: string; amount: number }[];
} {
  let subtotal = 0;
  const breakdown: { category: string; amount: number }[] = [];

  let pagesCost = 0;
  if (state.pageType.includes("gallery")) pagesCost += PRICING.pages.gallery;
  if (state.pageType.includes("blog")) pagesCost += PRICING.pages.blog;
  if (state.pageType.includes("callback")) pagesCost += PRICING.pages.callback;
  if (state.pageType.includes("booking")) pagesCost += PRICING.pages.booking;
  if (state.pageType.includes("payment")) pagesCost += PRICING.pages.payment;
  if (state.pageType.includes("form5")) pagesCost += PRICING.pages.form5;
  if (state.pageType.includes("form20")) pagesCost += PRICING.pages.form20;
  if (state.pageType.includes("form50")) pagesCost += PRICING.pages.form50;

  if (pagesCost > 0) {
    subtotal += pagesCost;
    breakdown.push({ category: "Additional Website Pages", amount: pagesCost });
  }

  let disabilityCost = 0;
  state.disabilityFeatures.forEach((feature) => {
    if (feature in PRICING.disabilityFeatures) {
      disabilityCost += PRICING.disabilityFeatures[feature as keyof typeof PRICING.disabilityFeatures];
    }
  });
  if (disabilityCost > 0) {
    subtotal += disabilityCost;
    breakdown.push({ category: "Disability Features", amount: disabilityCost });
  }

  if (state.domainRegistration === "year1") {
    subtotal += PRICING.domain.year1;
    breakdown.push({ category: "Domain (1 year)", amount: PRICING.domain.year1 });
  } else if (state.domainRegistration === "year3") {
    subtotal += PRICING.domain.year3;
    breakdown.push({ category: "Domain (3 years)", amount: PRICING.domain.year3 });
  }

  if (state.webHosting === "year1") {
    subtotal += PRICING.hosting.year1;
    breakdown.push({ category: "Web Hosting (1 year)", amount: PRICING.hosting.year1 });
  } else if (state.webHosting === "year3") {
    subtotal += PRICING.hosting.year3;
    breakdown.push({ category: "Web Hosting (3 years)", amount: PRICING.hosting.year3 });
  }

  if (state.designComplexity in PRICING.designComplexity) {
    const cost = PRICING.designComplexity[state.designComplexity as keyof typeof PRICING.designComplexity];
    subtotal += cost;
    breakdown.push({ category: `Design - ${state.designComplexity}`, amount: cost });
  }

  if (state.websiteType in PRICING.websiteType) {
    const cost = PRICING.websiteType[state.websiteType as keyof typeof PRICING.websiteType];
    subtotal += cost;
    breakdown.push({ category: `Website Type - ${state.websiteType}`, amount: cost });
  }

  let ecommerceCost = 0;
  state.ecommerceFeatures.forEach((feature) => {
    if (feature in PRICING.ecommerceFeatures) {
      ecommerceCost += PRICING.ecommerceFeatures[feature as keyof typeof PRICING.ecommerceFeatures];
    }
  });
  if (ecommerceCost > 0) {
    subtotal += ecommerceCost;
    breakdown.push({ category: "eCommerce Features", amount: ecommerceCost });
  }

  if (state.copywriting === "yes") {
    subtotal += PRICING.copywriting;
    breakdown.push({ category: "Content Copywriting", amount: PRICING.copywriting });
  }

  if (state.mediaTypes.includes("stock_photos")) {
    subtotal += PRICING.mediaTypes.stock_photos;
    breakdown.push({ category: "Stock Photos", amount: PRICING.mediaTypes.stock_photos });
  } else if (state.mediaTypes.includes("stock_videos")) {
    subtotal += PRICING.mediaTypes.stock_videos;
    breakdown.push({ category: "Stock Videos", amount: PRICING.mediaTypes.stock_videos });
  } else if (state.mediaTypes.includes("both")) {
    subtotal += PRICING.mediaTypes.both;
    breakdown.push({ category: "Stock Media (Photos & Videos)", amount: PRICING.mediaTypes.both });
  }

  let featuresCost = 0;
  state.additionalFeatures.forEach((feature) => {
    if (feature in PRICING.additionalFeatures) {
      featuresCost += PRICING.additionalFeatures[feature as keyof typeof PRICING.additionalFeatures];
    }
  });
  if (featuresCost > 0) {
    subtotal += featuresCost;
    breakdown.push({ category: "Additional Features", amount: featuresCost });
  }

  if (state.businessEmails > 0) {
    const emailSetup = state.businessEmails * 50;
    subtotal += emailSetup;
    breakdown.push({
      category: `Business Email Setup (${state.businessEmails} accounts)`,
      amount: emailSetup,
    });
  }

  let graphicsCost = 0;
  if (state.logoDesign) graphicsCost += PRICING.graphics.logo;
  if (state.businessCardDesign) graphicsCost += PRICING.graphics.businessCard;
  if (state.flyerDesign) graphicsCost += PRICING.graphics.flyer;

  state.additionalGraphics.forEach((graphic) => {
    if (graphic in PRICING.graphics) {
      graphicsCost += PRICING.graphics[graphic as keyof typeof PRICING.graphics];
    }
  });

  if (graphicsCost > 0) {
    subtotal += graphicsCost;
    breakdown.push({ category: "Graphic Design", amount: graphicsCost });
  }

  const discount = Math.round(subtotal * 0.2);
  const total = subtotal - discount;

  return {
    subtotal,
    discount,
    total,
    breakdown,
  };
}

export const initialState: CalculatorState = {
  niche: "other",
  pageType: ["homepage", "about", "contact", "services"],
  disabilityFeatures: [],
  domainRegistration: "none",
  webHosting: "none",
  designComplexity: "REGULAR",
  websiteType: "Basic",
  ecommerceFeatures: [],
  copywriting: "no",
  mediaTypes: [],
  additionalFeatures: [],
  businessEmails: 0,
  logoDesign: false,
  businessCardDesign: false,
  flyerDesign: false,
  additionalGraphics: [],
  fullName: "",
  email: "",
  phone: "",
  suburb: "",
  businessName: "",
  projectTimeframe: "flexible",
};
