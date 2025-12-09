"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">Softineers</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">We want to make an impact that grows business.</p>

            {/* Awards */}
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-xs">🏆</div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-xs">⭐</div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-xs">🎯</div>
            </div>
          </div>

          {/* Software Development */}
          <div>
            <h4 className="font-semibold mb-4">Software Development</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Web App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Odoo Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  React.JS Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Node.JS Development
                </a>
              </li>
            </ul>
          </div>

          {/* Web Development */}
          <div>
            <h4 className="font-semibold mb-4">Web Development</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  WordPress Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Laravel Website Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Custom Website Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Custom eCommerce Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Responsive Web Design
                </a>
              </li>
            </ul>
          </div>

          {/* Management Software */}
          <div>
            <h4 className="font-semibold mb-4">Management Software</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  ERP Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  HRM Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  LMS Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  OTA Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Hotel Management Software
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  E-Mail Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Call Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  We're hiring!
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Softineers. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground flex items-center justify-center transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
