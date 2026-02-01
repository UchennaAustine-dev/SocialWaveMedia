"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/s.w.m.agency", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/social-wave-media-921252298", icon: Linkedin },
    { name: "TikTok", href: "https://www.tiktok.com/@socialwavem", icon: Twitter },
  ];

  return (
    <footer className="bg-navy pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Social Wave Media"
                width={180}
                height={60}
                className="h-12 w-auto brightness-110 mb-8"
              />
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white leading-tight mb-6">
                STAY AHEAD OF THE <span className="text-neon glow italic">DIGITAL WAVE</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md mb-8">
                Transformation through strategic excellence. We build digital 
                ecosystems that turn brands into industry leaders.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -5, color: "#2dfcbf" }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 opacity-50">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-neon transition-colors font-medium text-sm group flex items-center gap-2">
                      <span className="w-0 group-hover:w-4 h-px bg-neon transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 opacity-50">Contacts</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-neon" />
                  </div>
                  <div className="text-gray-400 font-medium text-sm break-all">Socialwavemedia24@gmail.com</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-neon" />
                  </div>
                  <div className="text-gray-400 font-medium text-sm">+234 812 654 6300</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-neon" />
                  </div>
                  <div className="text-gray-400 font-medium text-sm">Lagos, Nigeria</div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 mb-24 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-neon/20" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Weekly Digital Insights</h3>
              <p className="text-gray-400 text-lg">Join 2,000+ brand owners riding the digital wave.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-3">
              <Input 
                placeholder="Direct Email..." 
                className="bg-white/5 border-white/10 rounded-2xl h-16 px-6 text-white text-lg focus-visible:ring-neon"
              />
              <Button className="bg-neon text-navy font-black rounded-2xl h-16 px-10 hover:shadow-[0_0_20px_rgba(45,252,191,0.4)] transition-all">
                JOIN
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Social Wave Media. Crafted with precision.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((legal) => (
              <a key={legal} href="#" className="text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
                {legal}
              </a>
            ))}
          </div>
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-neon font-black tracking-tighter text-2xl drop-shadow-[0_0_10px_rgba(45,252,191,0.3)]"
          >
            #STAYWAVY
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
