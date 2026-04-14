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
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const categories = [
    {
      title: "Web Development",
      icon: <Rocket className="w-4 h-4 text-indigo-400" />,
      items: [
        { label: "WordPress Website", link: "/services/wordpress-website" },
        { label: "Web App", link: "/services/web-app" },
        { label: "Laravel Website", link: "/services/laravel-website" },
        { label: "Custom Website", link: "/services/custom-website" },
        {
          label: "Small Business Website",
          link: "/services/small-business-website",
        },
        { label: "Shopify Website", link: "/services/shopify-website" },
        { label: "Affiliate Website", link: "/services/affiliate-website" },
        { label: "Ecommerce Website", link: "/services/ecommerce-website" },
      ],
    },
    {
      title: "Web Design",
      icon: <MousePointer2 className="w-4 h-4 text-blue-400" />,
      items: [
        { label: "NDIS Web Design", link: "/services/ndis-web-design" },
        { label: "Cleaning Web Design", link: "/services/cleaning-web-design" },
        { label: "Doctor Web Design", link: "/services/doctor-web-design" },
        { label: "Dentist Web Design", link: "/services/dentist-web-design" },
        { label: "Law Firm Web Design", link: "/services/law-firm-web-design" },
        {
          label: "Accounting Web Design",
          link: "/services/accounting-web-design",
        },
        { label: "Tourism Web Design", link: "/services/tourism-web-design" },
        {
          label: "Restaurant Web Design",
          link: "/services/restaurant-web-design",
        },
      ],
    },
    {
      title: "Marketing",
      icon: <Globe2 className="w-4 h-4 text-emerald-400" />,
      items: [
        {
          label: "Local SEO for Small Business",
          link: "/services/local-seo-small-business",
        },
        {
          label: "Search Engine Optimisation",
          link: "/services/seo-optimisation",
        },
        { label: "eCommerce SEO", link: "/services/ecommerce-seo" },
        {
          label: "Search Engine Marketing",
          link: "/services/search-engine-marketing",
        },
        { label: "Content Marketing", link: "/services/content-marketing" },
        {
          label: "Social Media Marketing",
          link: "/services/social-media-marketing",
        },
        { label: "Email Marketing", link: "/services/email-marketing" },
      ],
    },
    {
      title: "Local SEO",
      icon: <ShieldCheck className="w-4 h-4 text-orange-400" />,
      items: [
        { label: "NDIS SEO", link: "/services/ndis-seo" },
        { label: "Law Firm SEO", link: "/services/law-firm-seo" },
        { label: "Accounting SEO", link: "/services/accounting-seo" },
        { label: "Doctor SEO", link: "/services/doctor-seo" },
        { label: "Dentist SEO", link: "/services/dentist-seo" },
        { label: "Cleaning SEO", link: "/services/cleaning-seo" },
        { label: "Tourism SEO", link: "/services/tourism-seo" },
        { label: "Restaurant SEO", link: "/services/restaurant-seo" },
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

          {/* Dynamic Service Grid (All Services with Links) */}
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
                    <li key={item.label}>
                      <Link
                        href={item.link}
                        className="text-sm text-white/80 hover:text-indigo-400 transition-colors flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 mr-2 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060c1a]/80 p-[1px] shadow-2xl backdrop-blur-sm">
          <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-indigo-600/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-500/5 blur-[60px]" />

          <div className="relative rounded-[calc(1.5rem-1px)] bg-[#060c1a]/95 px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-4 w-full lg:w-auto">
              {[
                {
                  icon: Mail,
                  text: "info@codexadigital.com.au",
                  label: "Email",
                  href: "mailto:info@codexadigital.com.au",
                },
                {
                  icon: Phone,
                  text: "0414 082 729",
                  label: "Phone",
                  href: "tel:0414082729",
                },
                {
                  icon: MapPin,
                  text: "Edwardstown, SA",
                  label: "Office",
                },
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

                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-slate-200 text-sm font-medium tracking-tight hover:text-indigo-400 transition-colors cursor-pointer leading-none"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-slate-200 text-sm font-medium tracking-tight leading-none">
                        {contact.text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contact-us">
              <button className="group relative flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 items-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              © 2026 Codexa Digital
            </p>
            <div className="hidden md:flex gap-6 text-xs font-medium">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
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
