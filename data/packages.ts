export interface Package {
  id: string;
  name: string;
  description: string;
  serviceIds: string[];
  isPopular?: boolean;
  features: string[];
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Package",
    description: "Perfect for small businesses getting started online",
    serviceIds: [
      "small-business-website",
      "local-seo-small-business",
      "email-marketing",
    ],
    features: [
      "Small Business Website",
      "Local SEO for 3 months",
      "Email Marketing Setup",
      "Mobile Responsive Design",
      "Basic Analytics",
    ],
  },
  {
    id: "growth",
    name: "Growth Package",
    description: "Most popular choice for growing businesses",
    serviceIds: [
      "wordpress-website",
      "search-engine-optimisation",
      "social-media-marketing",
      "content-marketing",
    ],
    isPopular: true,
    features: [
      "Custom WordPress Website",
      "Full SEO Service for 6 months",
      "Social Media Marketing",
      "Content Marketing",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "All-in-one solution for established businesses",
    serviceIds: [
      "custom-website",
      "search-engine-optimisation",
      "search-engine-marketing",
      "social-media-marketing",
      "content-marketing",
      "email-marketing",
    ],
    features: [
      "Fully Custom Website",
      "Complete SEO Service",
      "PPC Campaign Management",
      "Full Social Media Management",
      "Content Strategy & Creation",
      "Email Marketing Automation",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
  },
];
