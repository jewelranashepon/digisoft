"use client";

import {
  FileSearch,
  Layout,
  Link,
  MapPin,
  PenTool,
  LineChart,
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
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.steps.map((step, index) => {
            const Icon = icons[step.icon];

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${step.bg}`}
                >
                  <Icon className={step.color} size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
