"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo-softineers.png" className="w-8 h-8" />
            <span className="font-semibold text-xl text-gray-800">
              Softineers
            </span>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>

            {/* SERVICES - MEGA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
                Services <span className="text-xs">▼</span>
              </button>

              {/* FULL WIDTH MEGA MENU */}
              {showServices && (
                <div className="fixed left-0 w-full mt-4 bg-white border-t border-gray-200 shadow-xl z-50">
                  <div className="container mx-auto px-8 py-10 grid grid-cols-4 gap-10">
                    {/* COLUMN 1 */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Software Development
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>ERP Software Development</li>
                        <li>HRM Software Development</li>
                        <li>LMS Software Development</li>
                        <li>OTA Software Development</li>
                        <li>Hotel Management Software</li>
                        <li>Restaurant Management Software</li>
                        <li>Custom Ecommerce Development</li>
                      </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Software Development
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>Web App Development</li>
                        <li>Mobile App Development</li>
                        <li>Odoo Development</li>
                        <li>React App Development</li>
                        <li>Node.js App Development</li>
                        <li>Laravel App Development</li>
                        <li>Magento Ecommerce Development</li>
                      </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Web Development
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>Custom Website Development</li>
                        <li>WordPress Website Development</li>
                        <li>Construction Website Design</li>
                        <li>Restaurant Website Design</li>
                        <li>Plumbing Website Design</li>
                        <li>Law Firm Website Design</li>
                        <li>Accountant Website Design</li>
                      </ul>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Our Packages
                      </h3>
                      <ul className="space-y-3 text-blue-600 font-medium">
                        <li className="hover:underline cursor-pointer">
                          Web Development Packages
                        </li>
                        <li className="hover:underline cursor-pointer">
                          SEO Packages
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Case Studies
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blog
            </a>
          </nav>

          {/* RIGHT CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* LEFT TEXT WITH DIVIDER */}
            <div className="flex items-center gap-2 pr-6 border-r border-gray-300">
              <div className="text-right">
                <p className="text-gray-600 text-sm">Let&apos;s discuss!</p>
                <a className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                  Get In Touch <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#" className="text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-800">
              Case Studies
            </a>
            <a href="#" className="text-gray-800">
              Blog
            </a>

            <button className="w-full px-4 py-3 rounded-full bg-blue-600 text-white">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
