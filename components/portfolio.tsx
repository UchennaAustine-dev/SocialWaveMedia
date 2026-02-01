"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Social Growth Engine",
      category: "Viral Strategy",
      description: "Scaled a startup's engagement by 450% through aggressive trend manipulation and high-precision targeting.",
      image: "/images/elevate-flyer.jpeg",
      metrics: ["450% Growth", "2M+ Reach", "Elite ROI"],
      tags: ["Content Strategy", "Viral Loops", "Market Authority"],
    },
    {
      title: "Direct Conversion Flow",
      category: "Lead Acquisition",
      description: "Proprietary WhatsApp funnel system converting high-intent leads into loyal long-term partners.",
      image: "/images/whatsapp-flyer.jpeg",
      metrics: ["320% ROI", "High Conv.", "Automated"],
      tags: ["Funnel Optimization", "WhatsApp Pro", "Scaling"],
    },
    {
      title: "Premium Identity Refinement",
      category: "Luxury Branding",
      description: "Complete visual and strategic overhaul for a luxury concierge service aiming for global dominance.",
      image: "/images/branding-flyer.jpeg",
      metrics: ["Unity", "Prestige", "Market Gap"],
      tags: ["Visual Identity", "Elite Positioning", "Strategy"],
    },
    {
      title: "Scaleable Digital Ecosystem",
      category: "Full Stack Marketing",
      description: "A comprehensive digital infrastructure designed for brands ready to transition to the enterprise tier.",
      image: "/images/hire-agency-flyer.jpeg",
      metrics: ["Enterprise ready", "Full Stack", "Data Driven"],
      tags: ["360 Campaign", "Tech Integrated", "Big Box"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-neon/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-neon text-xs font-bold uppercase tracking-widest mb-8">
            Case Studies
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight mb-8">
            REDEFINING <span className="text-neon glow italic">POSSIBILITIES</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our portfolio is a collection of digital victories. Each project 
            is a testament to our commitment to absolute market dominance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-hover-trigger"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col sm:flex-row transition-all group-hover:border-neon/30">
                <div className="relative w-full sm:w-2/5 aspect-[4/5] sm:aspect-auto overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 sm:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent sm:hidden block" />
                </div>

                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] font-bold text-neon uppercase tracking-[0.2em]">{project.category}</div>
                      <TrendingUp className="w-4 h-4 text-neon opacity-50" />
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-neon transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-[9px] font-black text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      {project.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-[10px] font-bold text-white uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">
                          {metric}
                        </div>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-navy transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <button className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto group">
            View All Ventures 
            <span className="w-8 h-px bg-neon/50 group-hover:w-12 transition-all" />
            <ArrowUpRight className="w-4 h-4 text-neon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
