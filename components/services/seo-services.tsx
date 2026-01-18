"use client";

import {
  FileSearch,
  Layout,
  Link,
  MapPin,
  PenTool,
  LineChart,
  HelpCircle,
} from "lucide-react";

const icons: Record<string, any> = {
  filesearch: FileSearch,
  layout: Layout,
  link: Link,
  "map-pin": MapPin,
  "pen-tool": PenTool,
  "line-chart": LineChart,
};

interface Step {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

interface Props {
  data: {
    heading: string;
    headingHighlight: string;
    description: string;
    steps: Step[];
  };
}

export default function SeoServices({ data }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {data.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              {data.headingHighlight}
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-800 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.steps.map((step, index) => {
            const Icon = icons[step.icon] || HelpCircle;

            return (
              <div
                key={index}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-sm transition-all hover:shadow-xl"
              >
                {/* BIG BACKGROUND ICON */}
                <div className="pointer-events-none absolute right-[-30px] top-1/2 -translate-y-1/2 opacity-[0.06]">
                  <Icon size={200} className="text-indigo-600" />
                </div>

                {/* ================= TOP SECTION ================= */}
                <div className="relative z-10 flex items-center gap-4 p-6 border-b border-slate-200">
                  {/* ICON */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                    <Icon size={26} className="text-indigo-600" />
                  </div>

                  {/* HEADER */}
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* ================= BOTTOM SECTION ================= */}
                <div className="relative z-10 flex flex-1 flex-col p-6">
                  <p className="text-base text-slate-900 leading-relaxed">
                    {step.description}
                  </p>

                  {/* CTA — ALWAYS AT BOTTOM */}
                  <div className="mt-2"></div>
                  <button className="mt-auto w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
