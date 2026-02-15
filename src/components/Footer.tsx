import { Instagram, Twitter, Linkedin, Mail, Phone, Clock } from 'lucide-react';
import { footerLinks } from '@/lib/constants';

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#apply') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-navy-dark border-t border-cyan/10">
      <div className="w-full section-padding py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src="/irl_capital_logo.png"
                alt="IRL Capital"
                className="h-14 w-auto mb-4"
              />
              <p className="text-text-muted text-sm mb-4">
                Real Funding. Real Results.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan hover:bg-cyan/20 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan hover:bg-cyan/20 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan hover:bg-cyan/20 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-outfit font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-muted hover:text-cyan transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-outfit font-semibold mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-text-muted text-sm">
                  <Mail size={16} className="text-cyan" />
                  info@irlcapital.com
                </li>
                <li className="flex items-center gap-2 text-text-muted text-sm">
                  <Phone size={16} className="text-cyan" />
                  (555) 123-4567
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-white font-outfit font-semibold mb-4">
                Business Hours
              </h4>
              <div className="flex items-start gap-2 text-text-muted text-sm">
                <Clock size={16} className="text-cyan mt-0.5" />
                <div>
                  <p>Monday - Friday</p>
                  <p>10:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-cyan/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-muted-dark text-sm">
              © 2026 IRL Capital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-text-muted-dark hover:text-cyan text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-muted-dark hover:text-cyan text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
