"use client";
import { useState } from "react";
import {
  Globe,
  Zap,
  Smartphone,
  Search,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 0,
    name: "Website Development",
    icon: Globe,
    description:
      "Custom, responsive websites built with modern technologies. We create stunning web experiences that engage visitors and convert them into customers. Our websites are optimized for performance, SEO, and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Mobile First",
    ],
  },
  {
    id: 1,
    name: "Web App Development",
    icon: Zap,
    description:
      "Interactive web applications that deliver real-time functionality. We build scalable, secure applications using React, Node.js, and modern frameworks to handle complex business logic with ease.",
    features: [
      "Real-time Updates",
      "Cloud Integration",
      "Scalable Architecture",
      "Security First",
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile apps for iOS and Android. We create intuitive, high-performance applications that provide seamless user experiences across all devices.",
    features: [
      "iOS & Android",
      "Offline Support",
      "Push Notifications",
      "App Store Ready",
    ],
  },
  {
    id: 3,
    name: "SEO Optimization",
    icon: Search,
    description:
      "Strategic SEO services to improve your online visibility and organic traffic. We optimize your website's technical aspects, content, and backlinks for better search engine rankings.",
    features: [
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Analytics",
    ],
  },
  {
    id: 4,
    name: "IT Support",
    icon: LifeBuoy,
    description:
      "Comprehensive IT support and maintenance services. We monitor, maintain, and troubleshoot your systems to ensure maximum uptime and optimal performance for your business.",
    features: [
      "24/7 Monitoring",
      "Quick Response",
      "Preventive Care",
      "Security Updates",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(1);
  const activeService = services[active];
  const IconComponent = activeService.icon;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <p className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Our Services
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              What Services{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Do We Provide?
            </span>
          </h2>
        </div>

        {/* Service Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 lg:gap-2">
          {services.map((service, index) => {
            const TabIcon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group relative px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  active === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <TabIcon size={18} />
                  <span className="hidden sm:inline">{service.name}</span>
                  <span className="sm:hidden">
                    {service.name.split(" ")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Service Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left side - Icon and Info */}
          <div className="order-2 lg:order-1">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl opacity-10 blur-2xl"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-200/50">
                <IconComponent className="text-blue-600" size={64} />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {activeService.name}
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {activeService.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {activeService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                  <span className="text-sm font-semibold text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <span>Get Started</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Right side - Visual Card */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  </div>

                  <div className="relative text-center text-white">
                    <div className="mb-4 flex justify-center">
                      <IconComponent
                        size={80}
                        className="opacity-30"
                        strokeWidth={0.5}
                      />
                    </div>
                    <p className="text-2xl font-bold opacity-75">
                      {activeService.name}
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 font-semibold">
                        Premium Quality Solutions
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 font-semibold">
                        Expert Team Support
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 font-semibold">
                        Proven Track Record
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "12+", label: "Years Experience" },
            { number: "150+", label: "Team Members" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50"
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600 font-semibold text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
