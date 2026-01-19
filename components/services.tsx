"use client";
import { useState } from "react";
import {
  Globe,
  Zap,
  Smartphone,
  Search,
  LifeBuoy,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: 0,
    name: "Website Development",
    icon: Globe,
    image: "/images/home/website-development.webp",
    description:
      "We build custom websites that help your business work better and grow online. Our websites are designed to be fast, secure, and easy for users to navigate across all devices. Every project focuses on performance, reliability, and long-term scalability to support your business goals.",
    features: [
      "Custom-built for your business needs",
      "Secure, stable, and reliable structure",
      "Fast loading and smooth performance",
      "Easy integration with existing tools and systems",
    ],
  },

  {
    id: 1,
    name: "Digital Marketing",
    icon: TrendingUp,
    image: "/images/home/digital-marketing.webp",
    description:
      "We help businesses grow online using data-driven digital marketing strategies designed to attract the right audience. Our approach focuses on increasing visibility, engaging potential customers, and turning traffic into real leads and sales. Every campaign is carefully planned, tracked, and optimised to deliver measurable and long-term growth.",
    features: [
      "SEO and search visibility growth",
      "Social media marketing and audience engagement",
      "Paid advertising for faster and targeted results",
      "Lead generation, sales, and brand growth",
    ],
  },

  {
    id: 2,
    name: "SEO Optimisation",
    icon: Smartphone,
    image: "/images/home/seo-optimisation.webp",
    description:
      "Our SEO services help your website rank higher on Google and other search engines, making it easier for potential customers to find your business. We use advanced strategies, including AI-powered SEO and Generative Engine Optimisation (GEO), to target the right keywords and improve your website’s visibility. The result is increased traffic, higher engagement, and more qualified leads for your business.",
    features: [
      "Optimise website pages for search engines",
      "Reach local customers in Australia and beyond",
      "Leverage AI SEO & Generative Engine Optimisation (GEO)",
      "Attract more visitors with strategic keywords",
    ],
  },

  {
    id: 3,
    name: "IT Support",
    icon: Search,
    image: "/images/home/it-support.webp",
    description:
      "Our IT Support services ensure your computers, networks, and systems remain secure, reliable, and fully operational. We provide proactive monitoring, troubleshooting, and maintenance to prevent downtime and keep your business running smoothly. From hardware and software issues to system upgrades, our team supports your IT needs as your business grows and evolves.",
    features: [
      "24/7 assistance whenever you need it",
      "Keep systems updated, secure, and running smoothly",
      "Support for hardware, software, and network issues",
      "Scale your IT infrastructure as your business grows",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(1);
  const activeService = services[active];
  const IconComponent = activeService.icon;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
            What Services{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Do We Provide?
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {services.map((service, index) => {
            const TabIcon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all ${
                  active === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-blue-400"
                }`}
              >
                <div className="flex items-center gap-2">
                  <TabIcon size={18} />
                  <span className="hidden sm:inline">{service.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* CONTENT GRID (5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* LEFT CONTENT → col-span-3 */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              {activeService.name}
            </h3>

            <p className="text-slate-800 text-lg mb-6">
              {activeService.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {activeService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-lg"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                  <span className="text-sm font-semibold text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT VISUAL → col-span-2 */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 flex items-center justify-center">
                {/* <IconComponent size={80} className="text-white/30" /> */}
                <img src={activeService.image} className="w-full h-full" />
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-50 to-white space-y-4">
                {[
                  "Premium Quality Solutions",
                  "Expert Team Support",
                  "Proven Track Record",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                    <p className="font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
