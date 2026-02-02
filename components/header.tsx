"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Home, Info, Briefcase, Layers, FileText, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="mt-2 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/30 shadow-xl px-5">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Codexa"
                className="w-68 h-auto object-contain"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Home
              </a>

              <a
                href="/about-us"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                About Us
              </a>

              <div
                className="relative"
                onMouseEnter={() => {
                  const w = window as any;
                  clearTimeout(w.__servicesTimeout);
                  setShowServices(true);
                }}
                onMouseLeave={() => {
                  const w = window as any;
                  w.__servicesTimeout = setTimeout(() => {
                    setShowServices(false);
                  }, 150);
                }}
              >
                <a
                  href="/services"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      showServices ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {showServices && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                      style={{ top: "81px" }}
                      onClick={() => setShowServices(false)}
                    />

                    {/* Mega Menu */}
                    <div
                      className="fixed left-0 w-full bg-white shadow-2xl rounded-3xl border-t border-gray-100 z-50"
                      style={{ top: "81px" }}
                      onMouseEnter={() => {
                        const w = window as any;
                        clearTimeout(w.__servicesTimeout);
                        setShowServices(true);
                      }}
                      onMouseLeave={() => {
                        const w = window as any;
                        w.__servicesTimeout = setTimeout(() => {
                          setShowServices(false);
                        }, 150);
                      }}
                    >
                      <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-5 gap-10">
                          {/* Web Development */}
                          <div>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                              Web Development
                            </h3>
                            <ul className="space-y-3">
                              {[
                                [
                                  "WordPress Website",
                                  "/services/wordpress-website",
                                ],
                                ["Web App Development", "/services/web-app"],
                                [
                                  "Laravel Website",
                                  "/services/laravel-website",
                                ],
                                ["Custom Website", "/services/custom-website"],
                                [
                                  "Small Business Website",
                                  "/services/small-business-website",
                                ],
                                [
                                  "Shopify Website",
                                  "/services/shopify-website",
                                ],
                                [
                                  "Affiliate Website",
                                  "/services/affiliate-website",
                                ],
                                [
                                  "Ecommerce Website",
                                  "/services/ecommerce-website",
                                ],
                              ].map(([label, link]) => (
                                <li key={link}>
                                  <a
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Web Design */}
                          <div>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                              Web Design
                            </h3>
                            <ul className="space-y-3">
                              {[
                                [
                                  "NDIS Web Design",
                                  "/services/ndis-web-design",
                                ],
                                [
                                  "Cleaning Web Design",
                                  "/services/cleaning-web-design",
                                ],
                                [
                                  "Doctor Web Design",
                                  "/services/doctor-web-design",
                                ],
                                [
                                  "Dentist Web Design",
                                  "/services/dentist-web-design",
                                ],
                                [
                                  "Law Firm Web Design",
                                  "/services/law-firm-web-design",
                                ],
                                [
                                  "Accounting Web Design",
                                  "/services/accounting-web-design",
                                ],
                                [
                                  "Tourism Web Design",
                                  "/services/tourism-web-design",
                                ],
                                [
                                  "Restaurant Web Design",
                                  "/services/restaurant-web-design",
                                ],
                              ].map(([label, link]) => (
                                <li key={link}>
                                  <a
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Digital Marketing */}
                          <div>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                              Digital Marketing
                            </h3>
                            <ul className="space-y-3">
                              {[
                                [
                                  "Local SEO for Small Business",
                                  "/services/local-seo-small-business",
                                ],
                                ["Search Engine Optimisation", "/services/seo-optimisation"],
                                ["eCommerce SEO", "/services/ecommerce-seo"],
                                ["Search Engine Marketing", "/services/search-engine-marketing"],
                                [
                                  "Content Marketing",
                                  "/services/content-marketing",
                                ],
                                [
                                  "Social Media Marketing",
                                  "/services/social-media-marketing",
                                ],
                                [
                                  "Email Marketing",
                                  "/services/email-marketing",
                                ],
                              ].map(([label, link]) => (
                                <li key={link}>
                                  <a
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Local SEO */}
                          <div>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                              Local SEO
                            </h3>
                            <ul className="space-y-3">
                              {[
                                ["NDIS SEO", "/services/ndis-seo"],
                                ["Law Firm SEO", "/services/law-firm-seo"],
                                ["Accounting SEO", "/services/accounting-seo"],
                                ["Doctor SEO", "/services/doctor-seo"],
                                ["Dentist SEO", "/services/dentist-seo"],
                                ["Cleaning SEO", "/services/cleaning-seo"],
                                ["Tourism SEO", "/services/tourism-seo"],
                                ["Restaurant SEO", "/services/restaurant-seo"],
                              ].map(([label, link]) => (
                                <li key={link}>
                                  <a
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Highlighted CTA */}
                          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-gray-50 p-6 border border-blue-100">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">
                              Popular Packages
                            </h3>

                            <div className="space-y-3">
                              <a
                                href="/packages/web-development"
                                className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition"
                              >
                                <span className="text-sm font-medium text-gray-700">
                                  Web Development Packages
                                </span>
                                <ArrowUpRight
                                  size={16}
                                  className="text-blue-600"
                                />
                              </a>

                              <a
                                href="/packages/seo"
                                className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition"
                              >
                                <span className="text-sm font-medium text-gray-700">
                                  SEO Packages
                                </span>
                                <ArrowUpRight
                                  size={16}
                                  className="text-blue-600"
                                />
                              </a>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <p className="text-xs text-gray-500 mb-3">
                                Need a custom solution?
                              </p>
                              <a
                                href="/contact"
                                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                              >
                                Talk to an expert
                                <ArrowUpRight size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
              </div>

              <a
                href="/portfolio"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Portfolio
              </a>

              <a
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Blog
              </a>
              <a
                href="/contact-us"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Contact Us
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              {/* Secondary – White Button */}
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Get In Touch
                <ArrowUpRight size={14} />
              </a>

              {/* Primary – Brand Button */}
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent">
                Contact Us
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-white hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {isOpen && (
            <nav className="lg:hidden border-t border-gray-100 py-4 space-y-1 animate-in slide-in-from-top duration-200">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition-colors"
              >
                <Home size={18} />
                Home
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition-colors"
              >
                <Info size={18} />
                About
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition-colors"
              >
                <Briefcase size={18} />
                Services
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition-colors"
              >
                <Layers size={18} />
                Case Studies
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition-colors"
              >
                <FileText size={18} />
                Blog
              </a>

              {/* CTA Section */}
              <div className="pt-5 space-y-3">
                {/* Secondary CTA – White Button */}
                <a
                  href="#"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Get In Touch
                  <ArrowUpRight size={16} />
                </a>

                {/* Primary CTA – Brand Button */}
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent">
                  <Phone size={16} />
                  Contact Us
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
