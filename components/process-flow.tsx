"use client";

import {
  Lightbulb,
  Palette,
  Code,
  Search,
  Server,
  Megaphone,
  ArrowDown,
} from "lucide-react";

const processes = [
  {
    icon: Lightbulb,
    label: "Brainstorming Ideas",
    description: "Generate innovative solutions and creative concepts",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Palette,
    label: "Product Design",
    description: "Craft intuitive and beautiful user experiences",
    color: "from-cyan-600 to-blue-700",
  },
  {
    icon: Code,
    label: "Front-End Development",
    description: "Build responsive and interactive interfaces",
    color: "from-teal-600 to-cyan-700",
  },
  {
    icon: Search,
    label: "SEO Optimization",
    description: "Maximize visibility and organic reach",
    color: "from-emerald-600 to-teal-700",
  },
  {
    icon: Server,
    label: "Back-End Development",
    description: "Develop scalable and robust infrastructure",
    color: "from-blue-600 to-emerald-700",
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    description: "Drive engagement and amplify your message",
    color: "from-slate-600 to-blue-700",
  },
];

export default function ProcessFlow() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase inline-block mb-4">
            Our Process
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            From Vision to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We follow a systematic approach to deliver excellence at every stage
            of your project journey.
          </p>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-4">
          {processes.map((process, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>

              <div className="relative bg-white border border-slate-200 group-hover:border-blue-300 rounded-xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${process.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <process.icon className="text-white" size={24} />
                  </div>

                  <div className="flex-1">
                    <span className="text-sm font-semibold text-blue-600">
                      Step {index + 1}
                    </span>

                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {process.label}
                    </h3>

                    <p className="text-sm text-slate-600">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="space-y-0">
            {processes.map((process, index) => (
              <div key={index}>
                <div
                  className={`flex items-center gap-8 py-12 px-8 rounded-2xl transition-all duration-500 group 
                    ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-slate-50 to-white hover:from-blue-50 hover:to-cyan-50"
                        : "bg-gradient-to-r from-white to-slate-50 hover:from-cyan-50 hover:to-blue-50"
                    }
                    border border-slate-200 hover:border-blue-300 hover:shadow-xl`}
                >
                  {/* ICON */}
                  <div
                    className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <process.icon
                      className="text-white"
                      size={40}
                      strokeWidth={1.5}
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-slate-900 font-bold text-slate-900 text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {process.label}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                      {process.description}
                    </p>
                  </div>

                  {/* STEP CIRCLE */}
                  <div className="flex-shrink-0 hidden xl:block">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors duration-300">
                      <span className="text-2xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {index < processes.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-300 to-cyan-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <span>Start Your Journey</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
