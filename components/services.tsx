"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Megaphone, 
  Target, 
  PenTool, 
  BarChart3, 
  Globe 
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Strategy & Intelligence",
    description: "Data-driven roadmaps to navigate the digital landscape.",
    icon: Target,
    image: "/new_images/IMG_0371.JPG.jpeg",
    size: "col-span-1 lg:col-span-2 row-span-1",
    color: "bg-blue-500/10",
  },
  {
    title: "Paid Performance",
    description: "ROI-focused campaigns that scale your business rapidly.",
    icon: BarChart3,
    image: "/new_images/IMG_0314.JPG.jpeg",
    size: "col-span-1 row-span-1 lg:row-span-2",
    color: "bg-purple-500/10",
  },
  {
    title: "Creative Production",
    description: "Visual storytelling that stops the scroll and captures attention.",
    icon: PenTool,
    image: "/new_images/IMG_0315.JPG.jpeg",
    size: "col-span-1 row-span-1",
    color: "bg-neon/10",
  },
  {
    title: "Influencer Relations",
    description: "Authentic partnerships that build trust and expand reach.",
    icon: Megaphone,
    image: "/new_images/IMG_0417.JPG.jpeg",
    size: "col-span-1 lg:col-span-2 row-span-1",
    color: "bg-orange-500/10",
  },
  {
    title: "Social Ecosystems",
    description: "Holistic community management for sustainable brand growth.",
    icon: Globe,
    image: "/new_images/IMG_0730.JPG.jpeg",
    size: "col-span-1 row-span-1",
    color: "bg-green-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="hashtag mb-4">Precision Services</h2>
            <h1 className="text-massive text-white mb-6">
              CRAFTING <span className="text-neon glow italic">LEGENDS</span> IN THE DIGITAL SPACE
            </h1>
            <p className="text-lg text-gray-400">
              We provide a full spectrum of digital marketing solutions tailored to ambitious 
              brands ready to dominate their industries.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <button className="flex items-center gap-2 text-neon font-bold uppercase tracking-widest hover:gap-4 transition-all">
              All Solutions <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[300px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl glass-card ${service.size}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${service.color} text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-neon" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
