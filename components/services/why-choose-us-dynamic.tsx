"use client";

import {
  CheckCircle2,
  Users,
  BarChart2,
  FileText,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ServiceDetail } from "@/data/service-details";

interface Props {
  data: ServiceDetail["whyChooseUs"];
}

const iconMap = {
  users: Users,
  "bar-chart-2": BarChart2,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "pen-tool": PenTool,
  "check-circle-2": CheckCircle2,
};

export function WhyChooseUsDynamic({ data }: Props) {
  return (
    <section className="relative py-10 lg:py-20 px-6 lg:px-8 bg-slate-100 overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-72 h-72 bg-seo-amber/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-400/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Center Aligned Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-seo-charcoal tracking-tight mb-6 leading-[1.1]">
            {data.heading} <br />
            <span className="text-blue-600">{data.headingHighlight}</span>
          </h2>
          {/* <p className="text-lg text-slate-800 max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p> */}
        </div>

        {/* Professional Colorful Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Users;
            return (
              <div key={index} className="group relative h-full">
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur`}
                ></div>

                <div className="relative h-full bg-white  shadow-md border-b-6 border-cyan-600 rounded-3xl p-8 transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                  {/* Icon Box: Modern Glass Style */}
                  <div className="relative mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center relative z-10 shadow-lg shadow-inherit`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Ghost icon background */}
                    <Icon className="absolute -top-2 -right-2 w-16 h-16 text-slate-50 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-seo-charcoal mb-4 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {benefit.description}
                  </p>

                  {/* Bottom Pattern */}
                  <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2"
                        cy="2"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                      <circle
                        cx="20"
                        cy="2"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                      <circle
                        cx="38"
                        cy="2"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                      <circle
                        cx="2"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                      <circle
                        cx="38"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        className="text-slate-400"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
