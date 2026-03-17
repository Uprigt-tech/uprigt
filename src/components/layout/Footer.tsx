import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { navLinks } from '@/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-navy-400 border-t border-white/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg md:text-xl">U</span>
              </div>
              <span className="font-display font-semibold text-lg md:text-xl text-white">
                Uprigt
              </span>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Your white-label development partner. We build high-converting websites for agencies in 48 hours.
            </p>
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-3 md:mb-6 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-3 md:mb-6 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  White-label Dev
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-3 md:mb-6 text-sm md:text-base">Contact</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <Mail size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs md:text-sm">Email</p>
                  <a href="mailto:hello@uprigt.com" className="text-white text-xs md:text-sm hover:text-purple-400 transition-colors truncate block">
                    hello@uprigt.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Phone size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                  <a href="tel:+919876543210" className="text-white text-xs md:text-sm hover:text-purple-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Location</p>
                  <p className="text-white text-xs md:text-sm">Mumbai, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-gray-500 text-xs md:text-sm">
            {currentYear} Uprigt. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link to="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
