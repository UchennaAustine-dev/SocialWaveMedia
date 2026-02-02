"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
        }`}>
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="flex-shrink-0">
              <a href="#home" className="block p-2 glass rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(45,252,191,0.1)] hover:shadow-[0_0_25px_rgba(45,252,191,0.2)] transition-all">
                <Image
                  src="/images/logo.jpg"
                  alt="Social Wave Media"
                  width={140}
                  height={50}
                  className="h-8 w-auto brightness-110 rounded-lg"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${
                    activeSection === item.href.substring(1) ? "text-neon" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/5 rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button className="bg-neon text-navy hover:bg-neon/90 font-black text-xs uppercase tracking-widest px-6 h-10 rounded-full shadow-lg shadow-neon/20 transition-all hover:scale-105">
                Work With Us <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-neon glass h-10 w-10 p-0 border border-white/10"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden glass-dark rounded-3xl p-6 border border-white/10 shadow-3xl origin-top"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`block px-4 py-4 text-sm font-bold uppercase tracking-widest rounded-xl transition-all ${
                      activeSection === item.href.substring(1) ? "bg-neon text-navy" : "text-white hover:bg-white/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-neon text-navy font-black py-7 rounded-2xl">
                    GET STARTED
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
