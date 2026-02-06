"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Home, Info, Briefcase, Layers, FileText, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const mobileParentMenu = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Portfolio", href: "/portfolio", icon: Layers },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "Contact Us", href: "/contact-us", icon: Phone },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="mt-2 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/30 shadow-xl px-5">
          <div className="flex justify-between items-center h-14 md:h-20 lg:h-20">
            <div className="flex items-center w-auto relative h-[50px] sm:h-[50px] md:h-[50px]">
              <Image
                src="/images/main-logo-3.png"
                alt="Codexa Digital Web & Software Agency"
                className="h-[45px] w-[120px] sm:h-[50px] sm:w-[130px] md:h-[60px] md:w-[150px]"
                style={{ objectFit: "contain" }}
                priority
                width={130} // fallback for Next.js Image
                height={50} // fallback for Next.js Image
              />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                About Us
              </Link>

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
                <Link
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
                </Link>

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
                                  <Link
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </Link>
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
                                  <Link
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </Link>
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
                                [
                                  "Search Engine Optimisation",
                                  "/services/seo-optimisation",
                                ],
                                ["eCommerce SEO", "/services/ecommerce-seo"],
                                [
                                  "Search Engine Marketing",
                                  "/services/search-engine-marketing",
                                ],
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
                                  <Link
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </Link>
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
                                  <Link
                                    href={link}
                                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                  >
                                    <span className="text-orange-500 group-hover:translate-x-1 transition">
                                      →
                                    </span>
                                    {label}
                                  </Link>
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
                              <Link
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
                              </Link>

                              <Link
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
                              </Link>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <p className="text-xs text-gray-500 mb-3">
                                Need a custom solution?
                              </p>
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                              >
                                Talk to an expert
                                <ArrowUpRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/portfolio"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Portfolio
              </Link>

              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              {/* Secondary – White Button */}
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Get In Touch
                <ArrowUpRight size={14} />
              </Link>

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

          {/* Mobile Menus  */}
          {isOpen && (
            <nav className="lg:hidden border-t border-white/10 py-4 space-y-1 animate-in slide-in-from-top duration-200">
              {mobileParentMenu.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:text-blue-400 rounded-lg transition"
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}

              {/* CTA */}
              <div className="pt-5 space-y-3">
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
                >
                  Get In Touch
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone size={16} />
                  Contact Us
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
