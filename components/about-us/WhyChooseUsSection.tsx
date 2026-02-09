import React from "react";
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Headset,
  BarChart3,
  Medal,
} from "lucide-react"; // replace with suitable icons if needed

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Rocket,
      title: "Results-Focused Strategies",
      description:
        "We don’t guess or use generic plans. Every strategy is made around your business goals. Our focus is on real growth, not just numbers that look good.",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-orange-600",
      borderColor: "group-hover:border-orange-200",
    },
    {
      icon: ShieldCheck,
      title: "Custom Solutions for Every Business",
      description:
        "Every business is different, and so are our plans. We create campaigns that match your industry, audience, and budget. This helps get better results and long-term success.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
      borderColor: "group-hover:border-blue-200",
    },
    {
      icon: Sparkles,
      title: "Experienced Digital Specialists",
      description:
        "Our team has skilled experts in all areas of digital marketing. From SEO to ads, every task is done by a professional. You get high-quality work backed by real experience.",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
      borderColor: "group-hover:border-purple-200",
    },
    {
      icon: Headset,
      title: "Clear & Honest Communication",
      description:
        "We keep everything simple and easy to understand. You will always know what we are doing and why. No confusing words, just clear updates and advice.",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      borderColor: "group-hover:border-emerald-200",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Optimisation",
      description:
        "We watch performance and study customer behaviour closely. Campaigns are always improved to get better results. All decisions are based on real data, not guesses.",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
      borderColor: "group-hover:border-indigo-200",
    },
    {
      icon: Medal,
      title: "Long-Term Growth Mindset",
      description:
        "We focus on lasting success, not quick wins. Our strategies grow with your business over time. Your long-term digital growth is always our priority.",
      color: "from-rose-500/10 to-red-500/10",
      iconColor: "text-rose-600",
      borderColor: "group-hover:border-rose-200",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#0F172A] overflow-hidden">
      {/* Dark professional background */}
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 ${reason.borderColor} hover:-translate-y-2`}
            >
              {/* Animated Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 ${reason.iconColor} group-hover:scale-110 transition-transform duration-500`}
                >
                  <reason.icon size={26} strokeWidth={1.5} />
                </div>

                <h4 className="text-xl font-semibold text-white mb-3">
                  {reason.title}
                </h4>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
