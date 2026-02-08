// ===============================
// packages.ts
// ===============================

export interface Package {
  id: string;
  name: string;
  description: string;
  serviceIds: string[];
  isPopular?: boolean;
  features: string[];
}

// -------------------------------
// All packages
// -------------------------------
export const packages: Package[] = [
  // =========================
  // Web Development Packages
  // =========================
  {
    id: "starter-website",
    name: "Starter Website",
    description: "Perfect for small businesses or personal projects online.",
    serviceIds: ["small-business-website", "mobile-responsive", "basic-analytics"],
    features: ["Small Business Website", "Mobile Responsive Design", "Basic Analytics Setup"],
  },
  {
    id: "business-website",
    name: "Business Website",
    description: "Advanced business website with SEO and marketing setup.",
    serviceIds: ["wordpress-website", "local-seo-small-business", "email-marketing"],
    features: [
      "WordPress Website",
      "Local SEO for 3 Months",
      "Email Marketing Setup",
      "Mobile Responsive Design",
      "Basic Analytics",
    ],
  },
  {
    id: "ecommerce-store",
    name: "Ecommerce Store",
    description: "Online store with full payment and inventory integration.",
    serviceIds: ["shopify-website", "payment-gateway", "inventory-setup"],
    features: ["Shopify Website", "Payment Gateway Integration", "Inventory Setup", "Mobile Responsive Design", "Analytics Setup"],
  },
  {
    id: "affiliate-website",
    name: "Affiliate Website",
    description: "Monetization-focused website with affiliate setup.",
    serviceIds: ["affiliate-website", "seo-optimization", "analytics-setup"],
    features: ["Affiliate Website", "SEO Optimization", "Analytics Tracking", "Mobile Responsive"],
  },
  {
    id: "custom-website",
    name: "Custom Website",
    description: "Fully tailored website with custom functionality.",
    serviceIds: ["custom-website", "cms-setup", "custom-functionality"],
    features: ["Custom Website", "Content Management System (CMS)", "Custom Functionality", "Mobile Friendly", "SEO Ready"],
  },
  {
    id: "web-app-development",
    name: "Web App Development",
    description: "Interactive web applications with database integration.",
    serviceIds: ["web-app-development", "api-integration", "database-setup"],
    features: ["Custom Web Application", "API Integration", "Database Setup", "Mobile Responsive", "Analytics Integration"],
  },
  {
    id: "laravel-development",
    name: "Laravel Development",
    description: "Custom Laravel applications with admin panels and backend.",
    serviceIds: ["laravel-website", "admin-panel", "custom-backend"],
    features: ["Laravel Website", "Custom Backend Development", "Admin Panel Setup", "Mobile Responsive", "SEO Ready"],
  },

  // =========================
  // Web Design Packages
  // =========================
  {
    id: "ndis-web-design",
    name: "NDIS Web Design",
    description: "Accessible and compliant web design for NDIS providers.",
    serviceIds: ["ndis-web-design", "ui-ux-optimization"],
    features: ["NDIS Compliant Design", "UI/UX Optimization", "Mobile Friendly"],
  },
  {
    id: "cleaning-web-design",
    name: "Cleaning Web Design",
    description: "Professional website design for cleaning services.",
    serviceIds: ["cleaning-web-design", "responsive-design"],
    features: ["Custom Design", "Responsive Layout", "SEO Ready"],
  },
  {
    id: "doctor-web-design",
    name: "Doctor Web Design",
    description: "Medical professional websites with appointment UI.",
    serviceIds: ["doctor-web-design", "appointment-ui", "hipaa-ready"],
    features: ["Doctor Web Design", "Appointment Booking UI", "HIPAA Ready"],
  },
  {
    id: "dentist-web-design",
    name: "Dentist Web Design",
    description: "Dental clinic websites with professional look and feel.",
    serviceIds: ["dentist-web-design", "mobile-friendly"],
    features: ["Dentist Web Design", "Mobile Responsive", "SEO Ready"],
  },
  {
    id: "law-firm-web-design",
    name: "Law Firm Web Design",
    description: "Elegant and professional web design for law firms.",
    serviceIds: ["law-firm-web-design", "ux-optimization"],
    features: ["Law Firm Web Design", "UX Optimization", "Mobile Friendly"],
  },
  {
    id: "accounting-web-design",
    name: "Accounting Web Design",
    description: "Web design tailored for accountants and finance firms.",
    serviceIds: ["accounting-web-design", "seo-ready"],
    features: ["Accounting Web Design", "SEO Optimized", "Mobile Friendly"],
  },
  {
    id: "tourism-web-design",
    name: "Tourism Web Design",
    description: "Attractive designs for tourism and travel agencies.",
    serviceIds: ["tourism-web-design", "booking-integration"],
    features: ["Tourism Web Design", "Booking Integration", "Mobile Friendly"],
  },
  {
    id: "restaurant-web-design",
    name: "Restaurant Web Design",
    description: "Web design with menu and reservation UI for restaurants.",
    serviceIds: ["restaurant-web-design", "menu-reservation-ui"],
    features: ["Restaurant Web Design", "Menu & Reservation UI", "Mobile Responsive"],
  },

  // =========================
  // Digital Marketing Packages
  // =========================
  {
    id: "seo-starter",
    name: "SEO Starter",
    description: "Beginner SEO for small businesses.",
    serviceIds: ["local-seo-small-business", "google-my-business"],
    features: ["Local SEO", "Google My Business Setup", "Basic Analytics"],
  },
  {
    id: "seo-advanced",
    name: "SEO Advanced",
    description: "Complete SEO optimization including on-page and off-page.",
    serviceIds: ["search-engine-optimisation", "on-page-seo", "off-page-seo"],
    features: ["SEO Strategy", "On-page SEO", "Off-page SEO", "Analytics Integration"],
  },
  {
    id: "ecommerce-marketing",
    name: "Ecommerce Marketing",
    description: "Full marketing for online stores.",
    serviceIds: ["ecommerce-seo", "email-marketing", "social-media-marketing"],
    features: ["Ecommerce SEO", "Email Marketing Automation", "Social Media Marketing"],
  },
  {
    id: "sem-campaign",
    name: "SEM Campaign",
    description: "Paid ads campaigns across Google and Bing.",
    serviceIds: ["search-engine-marketing", "ppc-management", "ads-optimization"],
    features: ["Search Engine Marketing", "PPC Ads Management", "Conversion Tracking"],
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    description: "Branding and engagement through content creation.",
    serviceIds: ["blog-strategy", "content-creation", "copywriting"],
    features: ["Blog Strategy", "Content Creation", "Copywriting", "Analytics Tracking"],
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    description: "Grow social media presence and engagement.",
    serviceIds: ["social-media-marketing", "social-ads", "analytics"],
    features: ["Social Media Marketing", "Social Ads", "Analytics & Reporting"],
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    description: "Lead nurturing and campaign automation.",
    serviceIds: ["email-marketing-automation", "campaign-setup"],
    features: ["Email Marketing Automation", "Campaign Setup", "Analytics Integration"],
  },

  // =========================
  // Local SEO Packages
  // =========================
  {
    id: "ndis-seo",
    name: "NDIS SEO",
    description: "SEO for NDIS providers.",
    serviceIds: ["ndis-seo", "local-citations", "local-listings"],
    features: ["NDIS SEO", "Citation Building", "Local Listings Optimization"],
  },
  {
    id: "law-firm-seo",
    name: "Law Firm SEO",
    description: "SEO for legal professionals.",
    serviceIds: ["law-firm-seo", "on-page-seo", "local-listings"],
    features: ["Law Firm SEO", "On-page SEO", "Local Listings"],
  },
  {
    id: "accounting-seo",
    name: "Accounting SEO",
    description: "SEO tailored for accountants and finance firms.",
    serviceIds: ["accounting-seo", "google-my-business"],
    features: ["Accounting SEO", "Google My Business", "Local SEO"],
  },
  {
    id: "doctor-seo",
    name: "Doctor SEO",
    description: "Local SEO for doctors and medical practices.",
    serviceIds: ["doctor-seo", "reviews-management", "local-keywords"],
    features: ["Doctor SEO", "Reviews & Ratings", "Local Keywords Optimization"],
  },
  {
    id: "dentist-seo",
    name: "Dentist SEO",
    description: "Local SEO for dental clinics.",
    serviceIds: ["dentist-seo", "local-listings", "map-pack"],
    features: ["Dentist SEO", "Google Maps Optimization", "Local Listings"],
  },
  {
    id: "cleaning-seo",
    name: "Cleaning SEO",
    description: "Local SEO for cleaning companies.",
    serviceIds: ["cleaning-seo", "map-pack", "local-reviews"],
    features: ["Cleaning SEO", "Map Pack Optimization", "Local Reviews Management"],
  },
  {
    id: "tourism-seo",
    name: "Tourism SEO",
    description: "Local SEO for travel and tourism businesses.",
    serviceIds: ["tourism-seo", "local-listings", "reviews-management"],
    features: ["Tourism SEO", "Local Listings", "Reviews Management"],
  },
  {
    id: "restaurant-seo",
    name: "Restaurant SEO",
    description: "SEO for restaurants and food services.",
    serviceIds: ["restaurant-seo", "maps-optimization", "reviews-management"],
    features: ["Restaurant SEO", "Google Maps Optimization", "Local Reviews Management"],
  },

  // =========================
  // Popular / Premium Choice
  // =========================
  {
    id: "growth-package",
    name: "Growth Package",
    description: "Most popular choice for growing businesses.",
    serviceIds: [
      "wordpress-website",
      "search-engine-optimisation",
      "social-media-marketing",
      "content-marketing",
    ],
    isPopular: true,
    features: ["Custom WordPress Website", "Full SEO Service for 6 months", "Social Media Marketing", "Content Marketing", "Advanced Analytics", "Priority Support"],
  },
  {
    id: "premium-package",
    name: "Premium Package",
    description: "All-in-one solution for established businesses.",
    serviceIds: [
      "custom-website",
      "search-engine-optimisation",
      "search-engine-marketing",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
    ],
    features: ["Fully Custom Website", "Complete SEO Service", "PPC Campaign Management", "Full Social Media Management", "Content Strategy & Creation", "Email Marketing Automation", "Dedicated Account Manager", "24/7 Priority Support"],
  },
];

// ===============================
// Tabs: Grouped by Service
// ===============================
export const packageTabs = [
  {
    id: "web-development",
    name: "Web Development",
    packages: packages.filter((p) =>
      p.serviceIds.some((s) => ["website", "web-app", "laravel"].some((k) => s.includes(k)))
    ),
  },
  {
    id: "web-design",
    name: "Web Design",
    packages: packages.filter((p) => p.serviceIds.some((s) => s.includes("design"))),
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    packages: packages.filter((p) =>
      ["seo", "marketing", "content", "social", "email"].some((k) => p.serviceIds.some((s) => s.includes(k)))
    ),
  },
  {
    id: "local-seo",
    name: "Local SEO",
    packages: packages.filter((p) =>
      p.serviceIds.some((s) => s.includes("seo") && !["search-engine-optimisation"].includes(s))
    ),
  },
  {
    id: "popular",
    name: "Popular Packages",
    packages: packages.filter((p) => p.isPopular),
  },
];
