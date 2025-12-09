"use client";

import { ArrowRight, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFF]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-700 font-semibold tracking-widest text-xs mb-4">
            TURN YOUR BUSINESS PROFITABLE
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Softineers - A Cutting-Edge <br />
            <span className="text-black">Software Development Company</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Creating impact on businesses through our expertise of Software
            Development, Web Development, Mobile App Development, AI
            Development, SEO, IT Support, Cyber Security and many more!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              Learn More <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition">
              Let’s Talk →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[420px]">
            <img
              src="https://img.freepik.com/premium-photo/team-professionals-works-brightly-lit-open-space-office_1339901-10757.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOAT CARD - EXPERIENCE */}
          <div className="absolute -bottom-10 left-6 bg-white shadow-lg rounded-2xl px-6 py-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Zap size={22} className="text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-black">5+ Years</p>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid grid-cols-2 gap-6 mt-20">
            {/* Project Count */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 flex items-center justify-center">
              <p className="text-xl font-semibold text-gray-800">
                1000+{" "}
                <span className="font-normal text-gray-500">Projects Done</span>
              </p>
            </div>

            {/* Rating Card */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 text-center">
              <img
                src="/goodfirms-badge.png"
                className="w-20 mx-auto mb-2"
                alt="GoodFirms Badge"
              />
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
