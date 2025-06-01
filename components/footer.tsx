"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@socialwavem",
      icon: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0zM9 3v6l6-3-6-3z",
      label: "TikTok",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/s.w.m.agency",
      icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.65-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z",
      label: "Instagram",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/social-wave-media-921252298",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
  ];

  const services = [
    { name: "Social Media Management", href: "#" },
    { name: "Paid Advertising", href: "#" },
    { name: "Content Creation", href: "#" },
    { name: "Analytics & Insights", href: "#" },
    { name: "Influencer Marketing", href: "#" },
    { name: "Digital Strategy", href: "#" },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Stay Ahead of the{" "}
              <span className="text-neon glow">Digital Wave</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest digital marketing
              insights, trends, and exclusive tips to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-navy cursor-hover-trigger"
              />
              <Button className="bg-neon text-navy hover:bg-neon/90 font-semibold whitespace-nowrap cursor-hover-trigger">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">#STAYWAVY</p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Social Wave Media"
                width={180}
                height={50}
                className="h-10 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Riding the digital wave to transform brands and create meaningful
              connections with audiences worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-neon" />
                <span className="text-sm">Socialwavemedia24@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-neon" />
                <span className="text-sm">+234 812 654 6300</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-neon" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-neon transition-colors hover-underline cursor-hover-trigger text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-neon transition-colors hover-underline cursor-hover-trigger text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Connect with us on social media for daily inspiration and updates.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 rounded-lg hover:bg-neon hover:text-navy transition-colors cursor-hover-trigger"
                  aria-label={social.label}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Brand Sticker */}
            <div className="mt-6">
              <Image
                src="/images/logo.jpg"
                alt="Social Wave Media Sticker"
                width={120}
                height={120}
                className="w-20 h-20 opacity-80 hover:opacity-100 transition-opacity cursor-hover-trigger"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Social Wave Media. All rights
              reserved. #STAYWAVY
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-neon text-sm transition-colors hover-underline cursor-hover-trigger"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-neon text-sm transition-colors hover-underline cursor-hover-trigger"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-neon text-sm transition-colors hover-underline cursor-hover-trigger"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
