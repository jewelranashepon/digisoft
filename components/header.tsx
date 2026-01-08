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
                    <div
                      className="fixed inset-0 bg-black/10 backdrop-blur-sm"
                      style={{ top: "81px" }}
                      onClick={() => setShowServices(false)}
                    />

                    <div
                      className="fixed left-0 w-full mt-0 bg-white border-t border-gray-100 shadow-2xl rounded-2xl"
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
                      <div className="max-w-7xl mx-auto py-12">
                        <div className="grid grid-cols-5 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-sm font-semibold text-blue-600 tracking-wider mb-4">
                                Web Development
                              </h3>

                              <ul className="space-y-3">
                                <li>
                                  <a
                                    href="/services/wordpress-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>WordPress Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/web-app"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Web App</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/laravel-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Laravel Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/custom-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Custom Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/small-business-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Small Business Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/shopify-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Shopify Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/affiliate-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Affiliate Website</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="/services/ecommerce-website"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Ecommerce Website</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-sm font-semibold text-blue-600 tracking-wider mb-4">
                                Web Design
                              </h3>

                              <ul className="space-y-3">
                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>NDIS Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Cleaning Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Doctor Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Dentist Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Law Firm Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Accounting Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Tourism Web Design</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Restaurant Web Design</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-sm font-semibold text-blue-600 tracking-wider mb-4">
                                Digital Marketing
                              </h3>

                              <ul className="space-y-3">
                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Local SEO for Small Business</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Search Engine Optimisation</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>eCommerce SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Search Engine Marketing</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Content Marketing</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Social Media Marketing</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Email Marketing</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-sm font-semibold text-blue-600 tracking-wider mb-4">
                                Local SEO
                              </h3>

                              <ul className="space-y-3">
                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>NDIS SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Law Firm SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Accounting SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Doctor SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Dentist SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Cleaning SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Tourism SEO</span>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm text-orange-600"
                                  >
                                    <span className="text-orange-600">»</span>
                                    <span>Restaurant SEO</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">
                              Popular Packages
                            </h3>
                            <ul className="space-y-3">
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-200"
                                >
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                    Web Development
                                  </span>
                                  <ArrowUpRight
                                    size={16}
                                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-200"
                                >
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                    SEO Packages
                                  </span>
                                  <ArrowUpRight
                                    size={16}
                                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                                  />
                                </a>
                              </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <p className="text-xs text-gray-500 mb-3">
                                Need a custom solution?
                              </p>
                              <a
                                href="#"
                                className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
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
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3a6f] to-[#0f172a] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent">
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
