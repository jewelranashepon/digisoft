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
    label: "Strategic Planning",
    description:
      "At Codexa Digital, we make clear plans to help your business grow. We use smart digital marketing strategies and industry knowledge to get you noticed online.",
  },
  {
    icon: Palette,
    label: "User-Centric Design",
    description:
      "We create websites that are clean and easy to use. They work on any device, so visitors can find what they need without confusion.",
  },
  {
    icon: Code,
    label: "Interface Development",
    description:
      "Our web development and technical SEO services make your site fast, reliable, and smooth. Users have a better experience, and your website performs better.",
  },
  {
    icon: Search,
    label: "Search Visibility",
    description:
      "As a top SEO & AI Search agency, we help your business show up on Google. We use SEO, AI SEO, and GEO techniques to reach the right audience.",
  },
  {
    icon: Server,
    label: "System Architecture",
    description:
      "We build strong, safe, and scalable systems that help your business grow. Your website works smoothly and fits with your SEO services.",
  },
  {
    icon: Megaphone,
    label: "Growth Acceleration",
    description:
      "We use social media marketing and local SEO in Australia to get more visitors. We help you engage customers, build trust, and grow sales.",
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-0 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-slate-900 max-w-5xl mx-auto leading-tight">
            Our Marketing Process for Your <br />
            <span className="text-blue-600">Online Presence</span>
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
