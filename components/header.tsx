"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/images/codexa.png"
              alt="Codexa"
              className="w-36 h-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Home
            </a>

            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              About
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
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 flex items-center gap-1.5">
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showServices && (
                <>
                  <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm"
                    style={{ top: "81px" }}
                    onClick={() => setShowServices(false)}
                  />

                  <div
                    className="fixed left-0 w-full mt-0 bg-white border-t border-gray-100 shadow-2xl"
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
                    <div className="container mx-auto py-12">
                      <div className="grid grid-cols-4 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                              Enterprise Solutions
                            </h3>
                            <ul className="space-y-3">
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>ERP Software Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>HRM Software Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>LMS Software Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>OTA Software Development</span>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-gray-100">
                            <ul className="space-y-3">
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Hotel Management Software</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Restaurant Management Software</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Custom Ecommerce Development</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                              App Development
                            </h3>
                            <ul className="space-y-3">
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Web App Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Mobile App Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Odoo Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>React App Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Node.js App Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Laravel App Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Magento Ecommerce Development</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                              Web Design
                            </h3>
                            <ul className="space-y-3">
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Custom Website Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>WordPress Website Development</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Construction Website Design</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Restaurant Website Design</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Plumbing Website Design</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Law Firm Website Design</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <span className="mt-0.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                  <span>Accountant Website Design</span>
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
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Case Studies
            </a>

            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Blog
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 pr-6 border-r border-gray-200">
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-0.5">Ready to start?</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  Get In Touch
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md">
              Contact Us
            </button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-4 space-y-1 animate-in slide-in-from-top duration-200">
            <a
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Blog
            </a>

            <div className="pt-4 space-y-2">
              <a
                href="#"
                className="block text-center py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <button className="w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
