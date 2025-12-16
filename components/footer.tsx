import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const services = {
    webDevelopment: [
      'WordPress Website',
      'Web App',
      'Laravel Website',
      'Custom Website',
      'Small Business Website',
      'Shopify Website',
      'Affiliate Website',
      'Ecommerce Website',
    ],
    webDesign: [
      'NDIS Web Design',
      'Cleaning Web Design',
      'Doctor Web Design',
      'Dentist Web Design',
      'Law Firm Web Design',
      'Accounting Web Design',
      'Tourism Web Design',
      'Restaurant Web Design',
    ],
    digitalMarketing: [
      'Local SEO for Small Business',
      'Search Engine Optimisation',
      'eCommerce SEO',
      'Search Engine Marketing',
      'Content Marketing',
      'Social Media Marketing',
      'Email Marketing',
    ],
    localSEO: [
      'NDIS SEO',
      'Law Firm SEO',
      'Accounting SEO',
      'Doctor SEO',
      'Dentist SEO',
      'Cleaning SEO',
      'Tourism SEO',
      'Restaurant SEO',
    ],
  };

  const quickLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-3">
            <div className="mb-6 group cursor-pointer inline-block">
              <h2 className="text-3xl font-bold transition-transform duration-300 group-hover:scale-105">
                <span className="text-blue-500">Codexa</span>
                <br />
                <span className="text-orange-500">Digital</span>
              </h2>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. From web development to SEO, we deliver excellence.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Web Development</h3>
              <ul className="space-y-3">
                {services.webDevelopment.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Web Design</h3>
              <ul className="space-y-3">
                {services.webDesign.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Digital Marketing</h3>
              <ul className="space-y-3">
                {services.digitalMarketing.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Local SEO</h3>
              <ul className="space-y-3">
                {services.localSEO.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-300">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>info@codexadigital.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
              >
                <MapPin className="w-4 h-4 group-hover:bounce transition-transform duration-300" />
                <span>Sydney, Australia</span>
              </a>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2 group">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2024 Codexa Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
