"use client";

import { ArrowRight, Zap, Star, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
            <TrendingUp size={16} className="text-blue-700" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              TURN YOUR BUSINESS PROFITABLE
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Softineers - A Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Software Development
              </span>{" "}
              Company
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Creating impact on businesses through our expertise of Software
              Development, Web Development, Mobile App Development, AI
              Development, SEO, IT Support, Cyber Security and many more!
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02] flex items-center gap-2">
              Learn More
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md">
              Let’s Talk →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 h-[420px] lg:h-[480px] group">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Team collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>

          {/* FLOAT CARD - Experience */}
          <div className="absolute -bottom-6 left-6 right-6 lg:left-8 lg:right-auto bg-white shadow-xl rounded-2xl px-6 py-5 border border-slate-100 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">5+ Years</p>
                <p className="text-sm text-slate-500 font-medium">
                  Industry Experience
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-20 lg:mt-20">
            {/* Projects Done */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-2">
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  1000+
                </p>
                <p className="text-sm lg:text-base font-medium text-slate-600">
                  Projects Done
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                  <Star size={28} className="text-white" fill="currentColor" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-xs lg:text-sm font-semibold text-slate-600">
                  5.0 Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
