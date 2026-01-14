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
import type { ServiceDetail } from "@/data/service-details";

interface Props {
  data: ServiceDetail["processSection"];
}

const iconMap = {
  target: Target,
  search: Search,
  link2: Link2,
  filesearch: FileSearch,
  pentool: PenTool,
  linechart: LineChart,
};

export function ServiceProcessDynamic({ data }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            {data.heading}{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              {data.headingHighlight}
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Card Section Design */}
        {/* Card Section Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Target;

            return (
              <div key={index} className="group relative h-full">
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-3xl blur-2xl -z-10 bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Main card - equal height with flex */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />

                  {/* Content wrapper with padding */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Icon container */}
                    <div className="mb-6 relative inline-flex">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/60 transition-all duration-500 group-hover:scale-110">
                        <Icon
                          className="w-8 h-8 text-white"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description - flex-grow pushes footer down */}
                    <p className="text-base leading-relaxed text-slate-800 mb-6 flex-grow">
                      {step.description}
                    </p>

                    {/* Footer section - always at bottom */}
                    <div className="mt-auto">
                      {/* Subtle divider */}
                      <div className="mb-5 h-px bg-gradient-to-r from-slate-200 via-blue-200 to-transparent" />

                      {/* CTA link */}
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="group-hover:text-blue-700">
                          Explore
                        </span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/0 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
