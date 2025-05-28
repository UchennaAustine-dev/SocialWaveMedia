"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
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
                Socialwavemedia24@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-neon" />
                08126546300
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-neon" />
                123 Digital Avenue, Tech City
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
                    className="text-gray-300 hover:text-neon transition-colors hover-underline cursor-hover-trigger"
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
                    className="text-gray-300 hover:text-neon transition-colors hover-underline cursor-hover-trigger"
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
            <p className="text-gray-300 mb-4">
              Connect with us on social media for daily inspiration and updates.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 rounded-lg hover:bg-neon hover:text-navy transition-colors cursor-hover-trigger"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Brand Sticker */}
            <div className="mt-6">
              <Image
                src="/images/logo-sticker.png"
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
