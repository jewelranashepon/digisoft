"use client";

import {
  ArrowRight,
  CheckCircle,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function SEOServicesSection() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Services Content Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-white">
        {/* Subtle Decorative Accent */}
        <div className="absolute top-0 right-0 -translate-y-16 translate-x-16 blur-3xl opacity-20 pointer-events-none">
          <div className="h-96 w-96 rounded-full bg-teal-400" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* LEFT CONTENT (3 COLS) */}
            <div className="lg:col-span-3 space-y-10">
              {/* Badge + Heading */}
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 border border-teal-100 w-fit">
                  <Sparkles size={16} />
                  Comprehensive SEO Solutions
                </span>

                <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  What Services Does Your Adelaide <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    SEO Agency Provide?
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  As a full-service digital marketing and SEO company serving
                  Adelaide, Supple delivers a wide range of
                  <span className="font-semibold text-slate-900">
                    {" "}
                    SEO services
                  </span>
                  , including
                  <span className="font-semibold text-slate-900">
                    {" "}
                    Local SEO
                  </span>{" "}
                  and
                  <span className="font-semibold text-slate-900">
                    {" "}
                    off-page optimisation
                  </span>
                  .
                </p>

                {/* Services List */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Online Reputation Management",
                    "Google Penalty Recovery",
                    "Mobile Indexing & Core Vitals",
                    "eCommerce & Franchise SEO",
                    "Social Media Marketing",
                    "Web Development & UX",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle className="text-teal-500" size={18} />
                      {service}
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="pt-6 border-l-4 border-teal-500 pl-6 italic text-slate-500">
                  “We don’t just drive traffic — we drive revenue through
                  tailored SEO strategies based on your goals and competitors.”
                </blockquote>
              </div>
            </div>

            {/* RIGHT IMAGE (2 COLS) */}
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-teal-50 to-cyan-50 rounded-[2rem] -z-10 rotate-2" />

              <img
                src="/professional-team-working-on-seo.jpg"
                alt="Professional SEO Team"
                className="w-full h-[420px] rounded-3xl object-cover shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 md:px-16 lg:py-24 shadow-2xl">
          {/* Decorative Orbs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"></div>

          <div className="relative grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl leading-tight">
                Ready to Boost Your Business with{" "}
                <span className="text-teal-400">AI-Powered SEO?</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Our team of AI SEO experts delivers smart, efficient, and
                results-driven strategies to grow your online presence and drive
                measurable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-400 hover:-translate-y-1">
                  GET YOUR FREE PROPOSAL
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800">
                  VIEW OUR CASE STUDIES
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
                <img
                  src="/business-professionals-team-collaboration-meeting.jpg"
                  alt="AI SEO Strategy Session"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Avg. Organic Growth
                    </p>
                    <p className="text-2xl font-bold text-slate-900">+142%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
