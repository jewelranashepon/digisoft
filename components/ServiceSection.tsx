"use client";

import { MapPin } from "lucide-react";

type ServiceSection = {
  title: string;
  cities: string[];
};

type ServiceLocationsProps = {
  sections?: ServiceSection[];
};

const defaultSections: ServiceSection[] = [
  {
    title: "SEO Services",
    cities: [
      "Hobart",
      "Perth",
      "Sydney",
      "Brisbane",
      "Adelaide",
      "Melbourne",
      "Canberra",
      "Queensland",
      "Gold Coast",
      "Darwin",
      "Newcastle",
      "Wagga Wagga",
    ],
  },
  {
    title: "Web Design & Development",
    cities: [
      "Hobart",
      "Perth",
      "Sydney",
      "Brisbane",
      "Adelaide",
      "Melbourne",
      "Canberra",
      "Queensland",
      "Gold Coast",
      "Darwin",
      "Newcastle",
      "Wagga Wagga",
    ],
  },
];

export default function ServiceLocations({
  sections = defaultSections,
}: ServiceLocationsProps) {
  return (
    <section className="w-full py-10 mb-10 rounded-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Minimalist Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="text-4xl font-bold tracking-tight">
            Our Service <span className="text-blue-500">Locations</span>
          </h3>
          <div className="h-1 w-12 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-[#0b3a6f] to-[#0f172a] p-8 transition-all hover:bg-slate-900/30"
            >
              {/* Section Heading */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-4 bg-blue-500 rounded-full" />
                <h4 className="text-lg font-bold uppercase tracking-[0.15em] text-slate-200">
                  {section.title}
                </h4>
              </div>

              {/* City Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                {section.cities.map((city) => (
                  <a
                    key={city}
                    href={`#${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group/link flex items-center gap-2 text-base font-medium text-white/80 transition-all hover:text-white"
                  >
                    <MapPin
                      size={12}
                      className="text-cyan-500 transition-colors group-hover/link:text-blue-500"
                    />
                    <span className="relative">
                      {city}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-500 transition-all group-hover/link:w-full" />
                    </span>
                  </a>
                ))}
              </div>

              {/* Stylized Watermark Background */}
              <span className="absolute -bottom-4 -right-2 text-7xl font-black text-white/[0.02] pointer-events-none uppercase italic select-none">
                {idx === 0 ? "SEO" : "WEB"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
