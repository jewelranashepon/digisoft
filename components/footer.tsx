import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe2,
  Rocket,
  ShieldCheck,
  MousePointer2,
  Globe,
  Navigation,
} from "lucide-react";

const Footer = () => {
  const categories = [
    {
      title: "Web Development",
      icon: <Rocket className="w-4 h-4 text-indigo-400" />,
      items: [
        "WordPress Website",
        "Web App",
        "Laravel Website",
        "Custom Website",
        "Small Business Website",
        "Shopify Website",
        "Affiliate Website",
        "Ecommerce Website",
      ],
    },
    {
      title: "Web Design",
      icon: <MousePointer2 className="w-4 h-4 text-blue-400" />,
      items: [
        "NDIS Web Design",
        "Cleaning Web Design",
        "Doctor Web Design",
        "Dentist Web Design",
        "Law Firm Web Design",
        "Accounting Web Design",
        "Tourism Web Design",
        "Restaurant Web Design",
      ],
    },
    {
      title: "Marketing",
      icon: <Globe2 className="w-4 h-4 text-emerald-400" />,
      items: [
        "Local SEO for Small Business",
        "Search Engine Optimisation",
        "eCommerce SEO",
        "Search Engine Marketing",
        "Content Marketing",
        "Social Media Marketing",
        "Email Marketing",
      ],
    },
    {
      title: "Local SEO",
      icon: <ShieldCheck className="w-4 h-4 text-orange-400" />,
      items: [
        "NDIS SEO",
        "Law Firm SEO",
        "Accounting SEO",
        "Doctor SEO",
        "Dentist SEO",
        "Cleaning SEO",
        "Tourism SEO",
        "Restaurant SEO",
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0f172a] text-slate-400 font-sans overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="group transition-all duration-300">
              <Image
                src="/images/main-logo-3.png"
                alt="Codexa Digital"
                width={170}
                height={55}
                className="brightness-150 transition-all group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              />
            </div>
            <p className="text-lg leading-relaxed text-slate-300 border-l-2 border-indigo-500 pl-6 italic">
              "Turning digital concepts into market-leading realities through
              code, design, and strategic marketing."
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all duration-500 hover:-translate-y-2 shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Service Grid (All 31 Services) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 shadow-sm">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {cat.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-white/80 hover:text-indigo-400 transition-colors flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 mr-2 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Global Service Locations – Corporate Light Aesthetic */}
        <div className="w-full bg-[#020617] py-10 mb-10 rounded-3xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Minimalist Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Our Service <span className="text-blue-500">Locations</span>
              </h3>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-4" />
            </div>

            {/* Location Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "SEO Services",
                  cities: [
                    "Hobart",
                    "Perth",
                    "Sydney",
                    "Brisbane",
                    "Adelaide",
                    "Melbourne",
                    "Canberra",
                    "Queensland",
                    "Gold Coast",
                    "Darwin",
                    "Newcastle",
                    "Wagga Wagga",
                  ],
                },
                {
                  title: "Web Design & Development",
                  cities: [
                    "Hobart",
                    "Perth",
                    "Sydney",
                    "Brisbane",
                    "Adelaide",
                    "Melbourne",
                    "Canberra",
                    "Queensland",
                    "Gold Coast",
                    "Darwin",
                    "Newcastle",
                    "Wagga Wagga",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/50 p-8 transition-all hover:bg-slate-900/30"
                >
                  {/* Section Heading */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-1 w-4 bg-blue-500 rounded-full" />
                    <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-200">
                      {section.title}
                    </h4>
                  </div>

                  {/* City Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                    {section.cities.map((city) => (
                      <a
                        key={city}
                        href={`#${city.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group/link flex items-center gap-2 text-sm font-medium text-white/80 transition-all hover:text-white"
                      >
                        <MapPin
                          size={12}
                          className="text-cyan-500 transition-colors group-hover/link:text-blue-500"
                        />
                        <span className="relative">
                          {city}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-500 transition-all group-hover/link:w-full" />
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Stylized Watermark Background */}
                  <span className="absolute -bottom-4 -right-2 text-7xl font-black text-white/[0.02] pointer-events-none uppercase italic select-none">
                    {idx === 0 ? "SEO" : "WEB"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Contact Bar – Compact Luxury */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060c1a]/80 p-[1px] shadow-2xl backdrop-blur-sm">
          {/* Subtler Ambient Glows */}
          <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-indigo-600/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-500/5 blur-[60px]" />

          <div className="relative rounded-[calc(1.5rem-1px)] bg-[#060c1a]/95 px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Contact Info - Optimized Horizontal Layout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-4 w-full lg:w-auto">
              {[
                {
                  icon: Mail,
                  text: "info@codexadigital.com.au",
                  label: "Email",
                },
                { icon: Phone, text: "0414 082 729", label: "Phone" },
                { icon: MapPin, text: "Edwardstown, SA", label: "Office" },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
                    <contact.icon
                      size={16}
                      className="text-slate-400 group-hover:text-indigo-400 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold leading-none mb-1">
                      {contact.label}
                    </span>
                    <span className="text-slate-200 text-sm font-medium tracking-tight hover:text-indigo-400 transition-colors cursor-pointer leading-none">
                      {contact.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA - Compacted with sleek gradient */}
            <button className="group relative flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:scale-95">
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 items-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              © 2026 Codexa Digital
            </p>
            <div className="hidden md:flex gap-6 text-xs font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-400 font-bold uppercase tracking-tighter">
              System Status: All Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
