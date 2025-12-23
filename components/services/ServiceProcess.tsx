"use client";

import { useState } from "react";
import {
  Target,
  Search,
  Link2,
  FileSearch,
  PenTool,
  LineChart,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export function ServiceProcess() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Target,
      title: "Local SEO Strategy",
      description:
        "We analyse your website, competitors, and local market to build a custom SEO strategy designed for long-term growth.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Search,
      title: "Keyword & Competitor Research",
      description:
        "We identify high-intent local keywords and reverse-engineer competitor strategies to capture qualified traffic.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Link2,
      title: "Link Acquisition Strategy",
      description:
        "Our white-hat backlink strategies build authority, trust, and rankings without risking penalties.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: FileSearch,
      title: "Website Local SEO Audit",
      description:
        "We audit site structure, speed, UX, on-page SEO, and technical signals affecting local visibility.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: PenTool,
      title: "Local Content Strategy",
      description:
        "We create location-focused, conversion-driven content that ranks and builds trust with local customers.",
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: LineChart,
      title: "Tracking & Performance Analysis",
      description:
        "We track rankings, traffic, conversions, and ROI to continuously optimise your local SEO campaign.",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            Our Proven{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Local SEO Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A strategic, data-driven approach that delivers measurable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 ${
                  isActive
                    ? "shadow-xl -translate-y-2"
                    : "shadow-sm"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex size-14 items-center justify-center rounded-xl ${service.bg} transition-transform duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  <Icon
                    className={`size-7 ${service.color}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full rounded-b-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-blue-600"
                      : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
