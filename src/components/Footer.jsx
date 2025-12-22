'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { footerData } from '@/data/data';

const iconMap = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-100 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt={footerData.companyName}
                className="h-10 w-auto"
              />
             
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {footerData.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {footerData.socialLinks.map((social) => {
                const Icon = iconMap[social.platform] || Twitter;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-primary" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${footerData.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{footerData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerData.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{footerData.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{footerData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{footerData.workingHours}</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates about NSATWK2026
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary text-black font-semibold rounded-lg text-sm hover:bg-primary-light transition-colors duration-200"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}