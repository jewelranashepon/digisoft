"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-slate-50">
      <div className="w-full mx-auto">
        {/* Main Card Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0b3a6f] to-[#0f172a] shadow-2xl">
          {/* Abstract Glow Orbs */}
          <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[100px]" />

          <div className="relative max-w-7xl mx-auto z-10 px-8 py-16 md:px-16 flex flex-col items-center text-center">
            {/* Headline with specialized gradient */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight md:leading-[1.1]">
              Let’s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                extraordinary
              </span>{" "}
              together
            </h2>

            {/* Support Text */}
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              From initial strategy to final deployment, our team transforms
              your complex business ideas into scalable, high-impact digital
              solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-blue-600 text-white font-bold text-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.4)] active:scale-[0.98]">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-lg backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/40 active:scale-[0.98]">
                <Phone className="w-5 h-5 text-blue-300" />
                Book a Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
