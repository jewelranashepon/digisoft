"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogHero from "@/components/blog/BlogHero";

/* =============================
   TYPES
============================= */
type Category = "web-dev" | "web-design" | "marketing" | "seo";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: Category;
}

/* =============================
   SERVICES DATA (FULL LIST)
============================= */
const services: ServiceItem[] = [
  /* ---------- WEB DEVELOPMENT ---------- */
  {
    id: "wordpress-website",
    title: "WordPress Website",
    description: "Custom WordPress websites optimized for speed and security.",
    image: "/images/web-1.avif",
    href: "/services/wordpress-website",
    category: "web-dev",
  },
  {
    id: "web-app",
    title: "Web App Development",
    description: "Scalable web applications tailored to your business needs.",
    image: "/images/web-2.avif",
    href: "/services/web-app",
    category: "web-dev",
  },
  {
    id: "laravel-website",
    title: "Laravel Website",
    description: "Robust Laravel-powered websites and web systems.",
    image: "/images/web-1.avif",
    href: "/services/laravel-website",
    category: "web-dev",
  },
  {
    id: "custom-website",
    title: "Custom Website",
    description: "Fully custom websites designed for performance and growth.",
    image: "/images/web-2.avif",
    href: "/services/custom-website",
    category: "web-dev",
  },
  {
    id: "small-business-website",
    title: "Small Business Website",
    description: "Affordable websites designed for small businesses.",
    image: "/images/web-1.avif",
    href: "/services/small-business-website",
    category: "web-dev",
  },
  {
    id: "shopify-website",
    title: "Shopify Website",
    description: "High-converting Shopify eCommerce websites.",
    image: "/images/web-2.avif",
    href: "/services/shopify-website",
    category: "web-dev",
  },
  {
    id: "affiliate-website",
    title: "Affiliate Website",
    description: "SEO-optimized affiliate websites for passive income.",
    image: "/images/web-1.avif",
    href: "/services/affiliate-website",
    category: "web-dev",
  },
  {
    id: "ecommerce-website",
    title: "eCommerce Website",
    description: "Powerful online stores built to maximize sales.",
    image: "/images/web-2.avif",
    href: "/services/ecommerce-website",
    category: "web-dev",
  },

  /* ---------- WEB DESIGN ---------- */
  {
    id: "ndis-web-design",
    title: "NDIS Web Design",
    description: "NDIS-compliant web design for providers.",
    image: "/images/web-1.avif",
    href: "/services/ndis-web-design",
    category: "web-design",
  },
  {
    id: "cleaning-web-design",
    title: "Cleaning Web Design",
    description: "Professional websites for cleaning companies.",
    image: "/images/web-2.avif",
    href: "/services/cleaning-web-design",
    category: "web-design",
  },
  {
    id: "doctor-web-design",
    title: "Doctor Web Design",
    description: "Medical websites built for trust and bookings.",
    image: "/images/web-1.avif",
    href: "/services/doctor-web-design",
    category: "web-design",
  },
  {
    id: "dentist-web-design",
    title: "Dentist Web Design",
    description: "Modern dental clinic website designs.",
    image: "/images/web-2.avif",
    href: "/services/dentist-web-design",
    category: "web-design",
  },
  {
    id: "law-firm-web-design",
    title: "Law Firm Web Design",
    description: "Professional web design for law firms.",
    image: "/images/web-1.avif",
    href: "/services/law-firm-web-design",
    category: "web-design",
  },
  {
    id: "accounting-web-design",
    title: "Accounting Web Design",
    description: "Clean and credible websites for accountants.",
    image: "/images/web-2.avif",
    href: "/services/accounting-web-design",
    category: "web-design",
  },
  {
    id: "tourism-web-design",
    title: "Tourism Web Design",
    description: "Attractive websites for tourism businesses.",
    image: "/images/web-1.avif",
    href: "/services/tourism-web-design",
    category: "web-design",
  },
  {
    id: "restaurant-web-design",
    title: "Restaurant Web Design",
    description: "Restaurant websites with menus & online booking.",
    image: "/images/web-2.avif",
    href: "/services/restaurant-web-design",
    category: "web-design",
  },

  /* ---------- DIGITAL MARKETING ---------- */
  {
    id: "local-seo-small-business",
    title: "Local SEO for Small Business",
    description: "Increase local visibility and leads.",
    image: "/images/services/local-seo.jpg",
    href: "/services/local-seo-small-business",
    category: "marketing",
  },
  {
    id: "seo-optimisation",
    title: "Search Engine Optimisation",
    description: "Rank higher on Google with proven SEO strategies.",
    image: "/images/services/seo.jpg",
    href: "/services/seo",
    category: "marketing",
  },
  {
    id: "ecommerce-seo",
    title: "eCommerce SEO",
    description: "SEO strategies for online stores.",
    image: "/images/services/ecommerce-seo.jpg",
    href: "/services/ecommerce-seo",
    category: "marketing",
  },
  {
    id: "search-engine-marketing",
    title: "Search Engine Marketing",
    description: "Paid ads that drive traffic and conversions.",
    image: "/images/services/sem.jpg",
    href: "/services/search-engine-marketing",
    category: "marketing",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Content strategies that convert visitors into customers.",
    image: "/images/services/content-marketing.jpg",
    href: "/services/content-marketing",
    category: "marketing",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Grow your brand across social platforms.",
    image: "/images/services/social-media.jpg",
    href: "/services/social-media-marketing",
    category: "marketing",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Targeted email campaigns that convert.",
    image: "/images/services/email-marketing.jpg",
    href: "/services/email-marketing",
    category: "marketing",
  },

  /* ---------- LOCAL SEO ---------- */
  {
    id: "ndis-seo",
    title: "NDIS SEO",
    description: "SEO strategies for NDIS providers.",
    image: "/images/services/ndis-seo.jpg",
    href: "/services/ndis-seo",
    category: "seo",
  },
  {
    id: "law-firm-seo",
    title: "Law Firm SEO",
    description: "SEO solutions for legal businesses.",
    image: "/images/services/law-seo.jpg",
    href: "/services/law-firm-seo",
    category: "seo",
  },
  {
    id: "accounting-seo",
    title: "Accounting SEO",
    description: "SEO services for accountants.",
    image: "/images/services/accounting-seo.jpg",
    href: "/services/accounting-seo",
    category: "seo",
  },
  {
    id: "doctor-seo",
    title: "Doctor SEO",
    description: "Medical SEO to attract more patients.",
    image: "/images/services/doctor-seo.jpg",
    href: "/services/doctor-seo",
    category: "seo",
  },
  {
    id: "dentist-seo",
    title: "Dentist SEO",
    description: "Dental SEO strategies for local rankings.",
    image: "/images/services/dentist-seo.jpg",
    href: "/services/dentist-seo",
    category: "seo",
  },
  {
    id: "cleaning-seo",
    title: "Cleaning SEO",
    description: "SEO services for cleaning companies.",
    image: "/images/services/cleaning-seo.jpg",
    href: "/services/cleaning-seo",
    category: "seo",
  },
  {
    id: "tourism-seo",
    title: "Tourism SEO",
    description: "SEO solutions for tourism businesses.",
    image: "/images/services/tourism-seo.jpg",
    href: "/services/tourism-seo",
    category: "seo",
  },
  {
    id: "restaurant-seo",
    title: "Restaurant SEO",
    description: "Local SEO for restaurants.",
    image: "/images/services/restaurant-seo.jpg",
    href: "/services/restaurant-seo",
    category: "seo",
  },
];

/* =============================
   TABS
============================= */
const tabs = [
  { id: "web-dev", label: "Web Development" },
  { id: "web-design", label: "Web Design" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "seo", label: "Local SEO" },
] as const;

/* =============================
   COMPONENT
============================= */
export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>("web-dev");

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <BlogHero />

      <section className="container mx-auto px-4 py-20">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-gray-500">
            Everything you need to grow your business online.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="relative flex bg-gradient-to-r from-blue-50 via-white to-blue-50 p-1 rounded-full shadow-md">
            <div
              className="absolute top-1 bottom-1 bg-blue-600 rounded-full shadow-lg transition-all duration-500"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${
                  tabs.findIndex((t) => t.id === activeTab) *
                  (100 / tabs.length)
                }%`,
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 px-6 lg:px-10 py-3 font-semibold text-sm lg:text-base transition-colors duration-300 rounded-full ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
