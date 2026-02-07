export interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

export const serviceCategories = [
  "Web Development",
  "Web Design",
  "Digital Marketing",
  "Local SEO",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export const services: Service[] = [
  {
    id: "wordpress-website",
    name: "WordPress Website",
    price: 2500,
    category: "Web Development",
    description: "Custom WordPress website with modern design",
  },
  {
    id: "web-app-development",
    name: "Web App Development",
    price: 8000,
    category: "Web Development",
    description: "Full-stack custom web application",
  },
  {
    id: "laravel-website",
    name: "Laravel Website",
    price: 5000,
    category: "Web Development",
    description: "Laravel-based web application",
  },
  {
    id: "custom-website",
    name: "Custom Website",
    price: 4000,
    category: "Web Development",
    description: "Fully custom website built from scratch",
  },
  {
    id: "small-business-website",
    name: "Small Business Website",
    price: 1500,
    category: "Web Development",
    description: "Perfect starter website for small businesses",
  },
  {
    id: "shopify-website",
    name: "Shopify Website",
    price: 3000,
    category: "Web Development",
    description: "E-commerce store on Shopify platform",
  },
  {
    id: "affiliate-website",
    name: "Affiliate Website",
    price: 2000,
    category: "Web Development",
    description: "Affiliate marketing optimized website",
  },
  {
    id: "ecommerce-website",
    name: "Ecommerce Website",
    price: 6000,
    category: "Web Development",
    description: "Full-featured online store",
  },
  {
    id: "ndis-web-design",
    name: "NDIS Web Design",
    price: 2800,
    category: "Web Design",
    description: "Specialized design for NDIS providers",
  },
  {
    id: "cleaning-web-design",
    name: "Cleaning Web Design",
    price: 1800,
    category: "Web Design",
    description: "Modern design for cleaning services",
  },
  {
    id: "doctor-web-design",
    name: "Doctor Web Design",
    price: 3500,
    category: "Web Design",
    description: "Professional medical practice website design",
  },
  {
    id: "dentist-web-design",
    name: "Dentist Web Design",
    price: 3200,
    category: "Web Design",
    description: "Dental practice website design",
  },
  {
    id: "law-firm-web-design",
    name: "Law Firm Web Design",
    price: 4500,
    category: "Web Design",
    description: "Professional law firm website design",
  },
  {
    id: "accounting-web-design",
    name: "Accounting Web Design",
    price: 3000,
    category: "Web Design",
    description: "Accounting firm website design",
  },
  {
    id: "tourism-web-design",
    name: "Tourism Web Design",
    price: 3800,
    category: "Web Design",
    description: "Tourism and travel website design",
  },
  {
    id: "restaurant-web-design",
    name: "Restaurant Web Design",
    price: 2200,
    category: "Web Design",
    description: "Restaurant and menu showcase website",
  },
  {
    id: "local-seo-small-business",
    name: "Local SEO for Small Business",
    price: 800,
    category: "Digital Marketing",
    description: "Monthly local SEO service for small businesses",
  },
  {
    id: "search-engine-optimisation",
    name: "Search Engine Optimisation",
    price: 1200,
    category: "Digital Marketing",
    description: "Comprehensive SEO service",
  },
  {
    id: "ecommerce-seo",
    name: "eCommerce SEO",
    price: 1500,
    category: "Digital Marketing",
    description: "Specialized SEO for online stores",
  },
  {
    id: "search-engine-marketing",
    name: "Search Engine Marketing",
    price: 2000,
    category: "Digital Marketing",
    description: "PPC and paid search campaigns",
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    price: 1000,
    category: "Digital Marketing",
    description: "Content creation and strategy",
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    price: 900,
    category: "Digital Marketing",
    description: "Social media management and advertising",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    price: 600,
    category: "Digital Marketing",
    description: "Email campaign management",
  },
  {
    id: "ndis-seo",
    name: "NDIS SEO",
    price: 1100,
    category: "Local SEO",
    description: "Specialized SEO for NDIS providers",
  },
  {
    id: "law-firm-seo",
    name: "Law Firm SEO",
    price: 1800,
    category: "Local SEO",
    description: "Legal industry focused SEO",
  },
  {
    id: "accounting-seo",
    name: "Accounting SEO",
    price: 1200,
    category: "Local SEO",
    description: "Accounting firm SEO services",
  },
  {
    id: "doctor-seo",
    name: "Doctor SEO",
    price: 1400,
    category: "Local SEO",
    description: "Medical practice SEO",
  },
  {
    id: "dentist-seo",
    name: "Dentist SEO",
    price: 1300,
    category: "Local SEO",
    description: "Dental practice SEO",
  },
  {
    id: "cleaning-seo",
    name: "Cleaning SEO",
    price: 900,
    category: "Local SEO",
    description: "Cleaning service SEO",
  },
  {
    id: "tourism-seo",
    name: "Tourism SEO",
    price: 1500,
    category: "Local SEO",
    description: "Tourism industry SEO",
  },
  {
    id: "restaurant-seo",
    name: "Restaurant SEO",
    price: 1000,
    category: "Local SEO",
    description: "Restaurant local SEO",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesByCategory = (category: ServiceCategory): Service[] => {
  return services.filter((service) => service.category === category);
};

export const calculateTotalPrice = (serviceIds: string[]): number => {
  return serviceIds.reduce((total, id) => {
    const service = getServiceById(id);
    return total + (service?.price || 0);
  }, 0);
};
