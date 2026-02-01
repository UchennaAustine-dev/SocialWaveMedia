"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-neon/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[120px] sm:text-[200px] font-heading font-black text-white leading-none tracking-tighter mb-4">
            4<span className="text-neon glow italic">0</span>4
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
              YOU'VE DRIFTED <span className="text-neon">OFF THE WAVE</span>
            </h2>
            
            <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium">
              The page you're looking for has been swept away by the tide. 
              Let's get you back to the safety of the shore.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/">
                <Button className="bg-neon text-navy font-black h-16 px-10 rounded-2xl hover:shadow-[0_0_40px_rgba(45,252,191,0.4)] transition-all flex items-center gap-3 text-lg group">
                  <Home size={20} className="group-hover:-translate-y-1 transition-transform" /> 
                  RETURN HOME
                </Button>
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="text-white/70 hover:text-white font-bold tracking-widest text-sm flex items-center gap-2 group transition-colors"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                GO BACK
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Accents */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-20 w-40 h-40 border border-white/5 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border border-neon/5 rounded-full hidden lg:block"
        />
      </div>

      {/* Social Wave Tagline */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em]">
          SOCIAL WAVE MEDIA • ESTD. 2020
        </p>
      </div>
    </div>
  );
}
