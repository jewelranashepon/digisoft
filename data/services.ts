export type Category = "web-dev" | "web-design" | "marketing" | "seo";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: Category;
  features: string[];
}

/* =============================
   SERVICES DATA
============================= */
export const services: ServiceItem[] = [
  /* =============================
     WEB DEVELOPMENT
  ============================= */
  {
    id: "wordpress-website",
    title: "WordPress Website",
    description: "Custom WordPress websites optimized for speed and security.",
    longDescription:
      "We design and develop high-performance WordPress websites that are secure, SEO-friendly, and easy to manage. Perfect for businesses that want flexibility and growth.",
    image: "/images/web-1.avif",
    category: "web-dev",
    features: [
      "Custom WordPress themes",
      "SEO & speed optimization",
      "Secure & scalable setup",
      "Easy content management",
    ],
  },
  {
    id: "web-app",
    title: "Web App Development",
    description: "Scalable web applications tailored to your business needs.",
    longDescription:
      "We build modern web applications using the latest technologies to ensure performance, scalability, and long-term reliability.",
    image: "/images/web-2.avif",
    category: "web-dev",
    features: [
      "Custom dashboards",
      "API integrations",
      "Cloud-ready architecture",
      "High security standards",
    ],
  },
  {
    id: "laravel-website",
    title: "Laravel Website",
    description: "Robust Laravel-powered websites and systems.",
    longDescription:
      "Laravel websites built for speed, security, and complex business logic. Ideal for advanced applications and enterprise projects.",
    image: "/images/web-1.avif",
    category: "web-dev",
    features: [
      "MVC architecture",
      "Secure authentication",
      "Scalable backend",
      "Custom admin panels",
    ],
  },
  {
    id: "custom-website",
    title: "Custom Website",
    description: "Fully custom websites designed for performance and growth.",
    longDescription:
      "We build custom websites from scratch to match your exact business requirements with pixel-perfect UI and optimized performance.",
    image: "/images/web-2.avif",
    category: "web-dev",
    features: [
      "Tailored design",
      "High performance",
      "SEO optimized",
      "Future-proof codebase",
    ],
  },
  {
    id: "small-business-website",
    title: "Small Business Website",
    description: "Affordable websites for small businesses.",
    longDescription:
      "Professional websites designed to help small businesses establish credibility and attract customers online.",
    image: "/images/web-1.avif",
    category: "web-dev",
    features: [
      "Affordable pricing",
      "Mobile responsive",
      "Fast loading",
      "Easy maintenance",
    ],
  },
  {
    id: "shopify-website",
    title: "Shopify Website",
    description: "High-converting Shopify eCommerce websites.",
    longDescription:
      "We build conversion-focused Shopify stores that are easy to manage and optimized for sales.",
    image: "/images/web-2.avif",
    category: "web-dev",
    features: [
      "Custom Shopify themes",
      "Payment gateway setup",
      "Conversion optimization",
      "Product SEO",
    ],
  },
  {
    id: "affiliate-website",
    title: "Affiliate Website",
    description: "SEO-optimized affiliate websites for passive income.",
    longDescription:
      "We create affiliate websites designed to rank on Google and generate long-term passive income.",
    image: "/images/web-1.avif",
    category: "web-dev",
    features: [
      "Niche research",
      "SEO structure",
      "Fast loading pages",
      "Monetization strategy",
    ],
  },
  {
    id: "ecommerce-website",
    title: "eCommerce Website",
    description: "Powerful online stores built to maximize sales.",
    longDescription:
      "Custom eCommerce solutions designed to increase conversions, improve UX, and scale with your business.",
    image: "/images/web-2.avif",
    category: "web-dev",
    features: [
      "Secure checkout",
      "Inventory management",
      "Mobile optimization",
      "High conversion UX",
    ],
  },

  /* =============================
     WEB DESIGN
  ============================= */
  {
    id: "ndis-web-design",
    title: "NDIS Web Design",
    description: "NDIS-compliant web design for providers.",
    longDescription:
      "Professional and compliant web design solutions for NDIS providers to build trust and generate leads.",
    image: "/images/web-1.avif",
    category: "web-design",
    features: [
      "NDIS compliance",
      "Trust-focused design",
      "Lead generation",
      "Fast loading",
    ],
  },
  {
    id: "cleaning-web-design",
    title: "Cleaning Web Design",
    description: "Professional websites for cleaning companies.",
    longDescription:
      "Modern and conversion-focused websites for cleaning businesses to attract more local clients.",
    image: "/images/web-2.avif",
    category: "web-design",
    features: [
      "Local SEO structure",
      "Service pages",
      "Quote forms",
      "Mobile friendly",
    ],
  },
  {
    id: "doctor-web-design",
    title: "Doctor Web Design",
    description: "Medical websites built for trust and bookings.",
    longDescription:
      "Healthcare-focused website designs that improve patient trust and appointment bookings.",
    image: "/images/web-1.avif",
    category: "web-design",
    features: [
      "Appointment booking",
      "Patient-friendly UX",
      "HIPAA-aware design",
      "Fast performance",
    ],
  },
  {
    id: "dentist-web-design",
    title: "Dentist Web Design",
    description: "Modern dental clinic website designs.",
    longDescription:
      "Professional dental websites designed to convert visitors into patients.",
    image: "/images/web-2.avif",
    category: "web-design",
    features: [
      "Online bookings",
      "Service showcases",
      "Trust-focused UI",
      "Local SEO",
    ],
  },
  {
    id: "law-firm-web-design",
    title: "Law Firm Web Design",
    description: "Professional web design for law firms.",
    longDescription:
      "Elegant and authoritative law firm websites that build credibility and generate leads.",
    image: "/images/web-1.avif",
    category: "web-design",
    features: [
      "Professional branding",
      "Lead forms",
      "Practice area pages",
      "Fast & secure",
    ],
  },
  {
    id: "accounting-web-design",
    title: "Accounting Web Design",
    description: "Clean and credible websites for accountants.",
    longDescription:
      "Accounting websites designed to communicate trust, expertise, and professionalism.",
    image: "/images/web-2.avif",
    category: "web-design",
    features: [
      "Professional UI",
      "Service clarity",
      "Mobile optimized",
      "SEO ready",
    ],
  },
  {
    id: "tourism-web-design",
    title: "Tourism Web Design",
    description: "Attractive websites for tourism businesses.",
    longDescription:
      "Visually appealing websites designed to attract tourists and increase bookings.",
    image: "/images/web-1.avif",
    category: "web-design",
    features: [
      "Booking integration",
      "Visual storytelling",
      "Mobile UX",
      "Fast performance",
    ],
  },
  {
    id: "restaurant-web-design",
    title: "Restaurant Web Design",
    description: "Restaurant websites with menus & online booking.",
    longDescription:
      "Restaurant websites designed to showcase menus, accept bookings, and attract diners.",
    image: "/images/web-2.avif",
    category: "web-design",
    features: [
      "Online menus",
      "Table booking",
      "Mobile friendly",
      "Local SEO",
    ],
  },

  /* =============================
     DIGITAL MARKETING
  ============================= */
  {
    id: "local-seo-small-business",
    title: "Local SEO for Small Business",
    description: "Increase local visibility and leads.",
    longDescription:
      "Local SEO strategies that help small businesses dominate Google Maps and local search results.",
    image: "/images/services/local-seo.jpg",
    category: "marketing",
    features: [
      "Google Maps ranking",
      "Local citations",
      "Review optimization",
      "Monthly reports",
    ],
  },
  {
    id: "seo-optimisation",
    title: "Search Engine Optimisation",
    description: "Rank higher on Google with proven SEO strategies.",
    longDescription:
      "Comprehensive SEO services designed to increase rankings, traffic, and conversions.",
    image: "/images/services/seo.jpg",
    category: "marketing",
    features: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Link building",
    ],
  },
  {
    id: "ecommerce-seo",
    title: "eCommerce SEO",
    description: "SEO strategies for online stores.",
    longDescription:
      "SEO solutions designed specifically for eCommerce websites to drive sales.",
    image: "/images/services/ecommerce-seo.jpg",
    category: "marketing",
    features: [
      "Product SEO",
      "Category optimization",
      "Conversion tracking",
      "Sales growth",
    ],
  },
  {
    id: "search-engine-marketing",
    title: "Search Engine Marketing",
    description: "Paid ads that drive traffic and conversions.",
    longDescription:
      "Data-driven paid advertising campaigns to maximize ROI and leads.",
    image: "/images/services/sem.jpg",
    category: "marketing",
    features: [
      "Google Ads",
      "Conversion tracking",
      "Budget optimization",
      "High ROI campaigns",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Content strategies that convert visitors into customers.",
    longDescription:
      "Strategic content marketing designed to build authority and drive organic growth.",
    image: "/images/services/content-marketing.jpg",
    category: "marketing",
    features: [
      "Blog content",
      "SEO articles",
      "Content planning",
      "Brand authority",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Grow your brand across social platforms.",
    longDescription:
      "Engaging social media campaigns designed to increase reach and engagement.",
    image: "/images/services/social-media.jpg",
    category: "marketing",
    features: [
      "Content creation",
      "Paid social ads",
      "Audience targeting",
      "Brand growth",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Targeted email campaigns that convert.",
    longDescription:
      "High-converting email marketing strategies for customer retention and sales.",
    image: "/images/services/email-marketing.jpg",
    category: "marketing",
    features: [
      "Campaign automation",
      "List segmentation",
      "High open rates",
      "Conversion tracking",
    ],
  },

  /* =============================
     LOCAL SEO
  ============================= */
  {
    id: "ndis-seo",
    title: "NDIS SEO",
    description: "SEO strategies for NDIS providers.",
    longDescription:
      "SEO services designed specifically for NDIS providers to generate qualified leads.",
    image: "/images/services/ndis-seo.jpg",
    category: "seo",
    features: [
      "NDIS keywords",
      "Local SEO",
      "Lead generation",
      "Authority building",
    ],
  },
  {
    id: "law-firm-seo",
    title: "Law Firm SEO",
    description: "SEO solutions for legal businesses.",
    longDescription:
      "SEO strategies to help law firms rank higher and attract quality cases.",
    image: "/images/services/law-seo.jpg",
    category: "seo",
    features: [
      "Legal keywords",
      "Local rankings",
      "Lead optimization",
      "Content SEO",
    ],
  },
  {
    id: "accounting-seo",
    title: "Accounting SEO",
    description: "SEO services for accountants.",
    longDescription:
      "SEO solutions that help accounting firms attract more local clients.",
    image: "/images/services/accounting-seo.jpg",
    category: "seo",
    features: [
      "Local SEO",
      "Service keywords",
      "Google Maps ranking",
      "Monthly reporting",
    ],
  },
  {
    id: "doctor-seo",
    title: "Doctor SEO",
    description: "Medical SEO to attract more patients.",
    longDescription:
      "Healthcare-focused SEO strategies to increase patient bookings.",
    image: "/images/services/doctor-seo.jpg",
    category: "seo",
    features: [
      "Local SEO",
      "Appointment keywords",
      "Reputation management",
      "Traffic growth",
    ],
  },
  {
    id: "dentist-seo",
    title: "Dentist SEO",
    description: "Dental SEO strategies for local rankings.",
    longDescription:
      "Dental SEO services designed to dominate local search results.",
    image: "/images/services/dentist-seo.jpg",
    category: "seo",
    features: [
      "Local dental keywords",
      "Google Maps",
      "Content SEO",
      "Lead growth",
    ],
  },
  {
    id: "cleaning-seo",
    title: "Cleaning SEO",
    description: "SEO services for cleaning companies.",
    longDescription:
      "SEO strategies to help cleaning companies get more local clients.",
    image: "/images/services/cleaning-seo.jpg",
    category: "seo",
    features: [
      "Local SEO",
      "Service area pages",
      "Lead generation",
      "High rankings",
    ],
  },
  {
    id: "tourism-seo",
    title: "Tourism SEO",
    description: "SEO solutions for tourism businesses.",
    longDescription:
      "SEO strategies designed to attract travelers and boost bookings.",
    image: "/images/services/tourism-seo.jpg",
    category: "seo",
    features: [
      "Travel keywords",
      "Content marketing",
      "Booking growth",
      "International SEO",
    ],
  },
  {
    id: "restaurant-seo",
    title: "Restaurant SEO",
    description: "Local SEO for restaurants.",
    longDescription:
      "Restaurant SEO strategies designed to increase foot traffic and bookings.",
    image: "/images/services/restaurant-seo.jpg",
    category: "seo",
    features: [
      "Google Maps ranking",
      "Menu SEO",
      "Local keywords",
      "Customer growth",
    ],
  },
];
