import React from "react";
import { Target, Eye, Heart, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function StrategicIdentity() {
  const pillars = [
    {
      id: "mission",
      title: "Our Mission",
      label: "The Purpose",
      icon: Target,
      description:
        "To empower global enterprises through scalable, intuitive technology that simplifies complexity and accelerates human potential.",
      color: "blue",
      gridClass: "lg:col-span-2",
    },
    {
      id: "vision",
      title: "Our Vision",
      label: "The Future",
      icon: Eye,
      description:
        "To be the architectural backbone of the next digital revolution.",
      color: "purple",
      gridClass: "lg:col-span-1",
    },
  ];

  const values = [
    "Radical Transparency",
    "Customer-Obsessed Design",
    "Sustainable Innovation",
    "Integrity-First Logic",
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#F8FAFC] selection:bg-indigo-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Bento-Inspired Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mission Card - Large */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-xl bg-slate-800 border border-slate-200/60 p-8 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={180} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-8 shadow-xl">
                <Target size={30} />
              </div>
              {/* <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3">
                The Purpose
              </span> */}
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h4>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                To empower global enterprises through scalable, intuitive
                technology that{" "}
                <span className="text-orange-600 font-medium">
                  simplifies complexity
                </span>{" "}
                and accelerates human potential.
              </p>
            </div>
          </div>

          {/* Vision Card - Tall */}
          <div className="relative group overflow-hidden rounded-xl bg-slate-800 p-8 md:p-10 shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              {/* <span className="text-indigo-400 font-bold text-xs tracking-widest uppercase mb-3">
                The Future
              </span> */}
              <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
              <p className="text-white/80 leading-relaxed">
                To be the architectural backbone of the next digital revolution,
                where technology and human creativity coexist in perfect
                harmony.
              </p>
              <div className="mt-auto pt-8">
                <div className="h-[1px] w-full bg-slate-800 mb-6" />
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
                    />
                  ))}
                  <div className="pl-4 text-xs text-slate-300 self-center">
                    Trusted by 10k+ users
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Card - Full Width Bottom */}
          <div className="lg:col-span-3 mt-2 relative overflow-hidden rounded-xl bg-slate-800 p-8 md:p-12 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
              <Heart size={300} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xs text-center md:text-left">
                <div className="inline-flex p-3 bg-white/20 rounded-2xl mb-4">
                  <Heart className="fill-white" size={24} />
                </div>
                <h4 className="text-3xl font-bold mb-2">Our Values</h4>
                <p className="text-white/80 mb-6">
                  The non-negotiable principles that define our daily conduct.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                {values.map((value, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/20 transition-all cursor-default"
                  >
                    <CheckCircle2 size={20} className="text-indigo-200" />
                    <span className="font-semibold tracking-wide whitespace-nowrap">
                      {value}
                    </span>
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
