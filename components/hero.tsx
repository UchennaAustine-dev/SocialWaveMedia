"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Elements */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,252,191,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Animated Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[120px]"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="hashtag">#STAYWAVY • PREMIUM DIGITAL AGENCY</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-huge text-white mb-2">
              RIDE THE <span className="text-neon glow">DIGITAL</span>
            </h1>
            <h1 className="text-huge text-white">
              WAVE <span className="text-border">TO SUCCESS</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
          >
            We don't just follow trends; we set them. Transform your brand with 
            cutting-edge digital marketing strategies that turn waves of traffic 
            into oceans of revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-neon text-navy hover:bg-neon/90 font-bold text-lg px-10 py-7 rounded-full shadow-[0_0_20px_rgba(45,252,191,0.3)] transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass text-white border-white/20 hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-white" />
              Watch Showreel
            </Button>
          </motion.div>

          {/* Trust Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 items-center py-6 border-t border-white/10 w-full max-w-4xl"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-navy bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image src={`/reviews/cus${i}.jpeg`} alt="Client" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-neon">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Trusted by 500+ clients</p>
              </div>
            </div>
            
            <div className="hidden sm:flex gap-8 text-gray-500 font-bold text-sm tracking-widest">
              <span>STRATEGY</span>
              <span>•</span>
              <span>CREATIVE</span>
              <span>•</span>
              <span>GROWTH</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Element: Floating Image/Video Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -right-20 bottom-10 w-[500px] h-[300px] hidden xl:block pointer-events-none"
      >
        <div className="glass-card p-2 rotate-3">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/images/branding-flyer.jpeg"
              alt="Work Preview"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent" />
      </motion.div>
    </section>
  );
}
