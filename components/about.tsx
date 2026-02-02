"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Users, label: "CLients", value: "50+" },
    { icon: Target, label: "Projects", value: "120+" },
    { icon: Zap, label: "Avg. ROI", value: "240%" },
    { icon: Calendar, label: "Years", value: "4+" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 sm:py-32 bg-navy relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-neon text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              Our Story
            </div>
            
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] mb-8">
              WE DON'T FOLLOW <span className="text-neon glow italic">TRENDS</span>. WE CREATE THEM.
            </motion.h2>

            <motion.p className="text-lg sm:text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              Based in the heart of digital innovation, Social Wave Media is a luxury 
              digital agency dedicated to brands that refuse to be ordinary. We combine 
              artistic vision with data precision to dominate the digital landscape.
            </motion.p>

            <motion.p className="text-gray-500 mb-12 leading-relaxed">
              Founded in 2020, we've navigated the ever-changing currents of social 
              media to deliver unprecedented growth for our partners. Our mission is 
              simple: transform your digital footprint into a massive wave of success.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card p-5 sm:p-6 group hover:border-neon/30 transition-all cursor-hover-trigger overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-neon" />
                    </div>
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-neon mb-3 sm:mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="text-2xl sm:text-3xl font-heading font-black text-white mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              style={{ y }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 glass-card p-4 shadow-3xl"
            >
              <div className="relative w-full h-full rounded-[30px] overflow-hidden transition-all duration-700">
                <Image
                  src="/images/branding-flyer.jpeg"
                  alt="Social Wave Media Innovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Floating Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon/10 rounded-full blur-[60px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[60px]" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 hidden sm:block"
            >
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-neon/30 flex items-center justify-center p-4">
                <div className="text-[8px] font-black text-neon text-center uppercase tracking-tighter">
                  ESTD. 2020 • DIGITAL EXCELLENCE •
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
