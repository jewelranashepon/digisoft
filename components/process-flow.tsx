"use client";

import {
  Lightbulb,
  Palette,
  Code,
  Search,
  Server,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const processes = [
  {
    icon: Lightbulb,
    label: "Brainstorming Ideas",
    description: "Generate innovative solutions and creative concepts",
  },
  {
    icon: Palette,
    label: "Product Design",
    description: "Craft intuitive and beautiful user experiences",
  },
  {
    icon: Code,
    label: "Front-End Development",
    description: "Build responsive and interactive interfaces",
  },
  {
    icon: Search,
    label: "SEO Optimization",
    description: "Maximize visibility and organic reach",
  },
  {
    icon: Server,
    label: "Back-End Development",
    description: "Develop scalable and robust infrastructure",
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    description: "Drive engagement and amplify your message",
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-0 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-slate-900">
            From Vision to <span className="text-blue-600">Impact</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processes.map((process, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-gradient-to-br from-[#0b3a6f] to-[#0f172a] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Step */}
              <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center justify-center">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                <process.icon className="text-white" size={26} />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-semibold text-white mb-3">
                {process.label}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                {process.description}
              </p>

              <div className="inline-flex items-center gap-2 text-blue-300 font-medium">
                Learn More
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
