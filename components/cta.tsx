"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center text-center">
        {/* Headline with gradient accent */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight md:leading-[1.1]">
          Book a Free Discovery Call with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Codexa Digital
          </span>
        </h2>

        {/* Support Text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Our team’s goal is to understand your business and see if we’re the
          right fit. If not, we’ll be honest and share tips to help you move
          forward.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-blue-500 text-white font-bold text-lg transition-all duration-300 hover:bg-blue-400 active:scale-[0.98]">
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold text-lg transition-all duration-300 hover:bg-gray-50 active:scale-[0.98]">
            <Phone className="w-5 h-5 text-blue-500" />
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}
