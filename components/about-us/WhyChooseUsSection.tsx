import React from "react";
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Headset,
  BarChart3,
  Medal,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description:
        "Optimized workflows that cut delivery time by 40% without sacrificing precision.",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-orange-600",
      borderColor: "group-hover:border-orange-200",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "SOC2 compliant infrastructure ensuring your intellectual property stays yours.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
      borderColor: "group-hover:border-blue-200",
    },
    {
      icon: Sparkles,
      title: "Innovative Solutions",
      description:
        "Leveraging proprietary AI models to solve legacy problems in modern ways.",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
      borderColor: "group-hover:border-purple-200",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description:
        "Direct access to senior engineers, not just a ticketing queue. We're here 24/7.",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      borderColor: "group-hover:border-emerald-200",
    },
    {
      icon: BarChart3,
      title: "Measurable Growth",
      description:
        "Real-time analytics dashboards to track every KPI and ROI metric that matters.",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
      borderColor: "group-hover:border-indigo-200",
    },
    {
      icon: Medal,
      title: "Award Winning",
      description:
        "Voted 'Best in Category' 3 years running by industry leading publications.",
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
