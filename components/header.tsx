"use client";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Palette,
  Code2,
  TrendingUp,
  ChevronRight,
  Megaphone,
} from "lucide-react";
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
                    {/* Mega Menu */}
                    <div
                      className="fixed left-0 w-full bg-white border-b border-gray-100 z-50 shadow-xl rounded-b-3xl"
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
                      <div className="max-w-7xl mx-auto px-8 py-10">
                        <div className="grid grid-cols-4 gap-6">
                          {[
                            {
                              title: "Web Development",
                              description:
                                "Custom built high-performance websites.",
                              color: "blue",
                              icon: <Code2 className="w-5 h-5" />,
                              links: [
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
                              ],
                            },
                            {
                              title: "Web Design",
                              description: "Industry specific UI/UX solutions.",
                              color: "emerald",
                              icon: <Palette className="w-5 h-5" />,
                              links: [
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
                              ],
                            },
                            {
                              title: "Digital Marketing",
                              description:
                                "Scale your reach and conversion rates.",
                              color: "orange",
                              icon: <Megaphone className="w-5 h-5" />,
                              links: [
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
                              ],
                            },
                            {
                              title: "Local SEO",
                              description: "Dominating local search results.",
                              color: "cyan",
                              icon: <MapPin className="w-5 h-5" />,
                              links: [
                                ["NDIS SEO", "/services/ndis-seo"],
                                ["Law Firm SEO", "/services/law-firm-seo"],
                                ["Accounting SEO", "/services/accounting-seo"],
                                ["Doctor SEO", "/services/doctor-seo"],
                                ["Dentist SEO", "/services/dentist-seo"],
                                ["Cleaning SEO", "/services/cleaning-seo"],
                                ["Tourism SEO", "/services/tourism-seo"],
                                ["Restaurant SEO", "/services/restaurant-seo"],
                              ],
                            },
                          ].map((section) => (
                            <div
                              key={section.title}
                              className="group/card bg-gray-50/50 border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1"
                            >
                              {/* Card Header */}
                              <div className="flex items-start gap-4 mb-6">
                                <div
                                  className={`p-2.5 rounded-xl bg-white shadow-sm text-${section.color}-600 group-hover/card:scale-110 transition-transform duration-300`}
                                >
                                  {section.icon}
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-gray-900 tracking-tight">
                                    {section.title}
                                  </h3>
                                  <p className="text-[11px] text-gray-700 leading-tight mt-1">
                                    {section.description}
                                  </p>
                                </div>
                              </div>

                              {/* Links List */}
                              <ul className="space-y-1">
                                {section.links.map(([label, link]) => (
                                  <li key={link}>
                                    <Link
                                      href={link}
                                      className="flex items-center text-sm text-gray-800 hover:text-gray-900 hover:font-medium transition-all duration-200 py-1.5 rounded-md"
                                    >
                                      <ChevronRight
                                        className={`w-3 h-3 mr-1.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-${section.color}-500`}
                                      />
                                      {label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
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
