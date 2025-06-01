"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Calendar } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Target, label: "Projects Completed", value: "120+" },
    { icon: Zap, label: "Average ROI", value: "240%" },
    { icon: Calendar, label: "Years Experience", value: "4+" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy mb-6"
            >
              About <span className="text-neon">Social Wave</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 mb-6"
            >
              We're not just another marketing agency. We're digital wave
              riders, surfing the ever-changing currents of social media and
              digital marketing to bring your brand to new heights.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 mb-8"
            >
              Founded in 2020, Social Wave Media has helped dozens of brands
              create meaningful connections with their audiences through
              innovative strategies and data-driven campaigns.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow cursor-hover-trigger">
                    <CardContent className="p-0">
                      <stat.icon className="h-8 w-8 text-neon mx-auto mb-2" />
                      <div className="text-2xl font-bold text-navy">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            style={{ y, opacity }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/branding-flyer.jpeg"
                alt="Social Wave Media Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-neon/20" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 bg-neon text-navy p-4 rounded-full shadow-lg"
            >
              <Zap className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-4 -left-4 bg-white text-navy p-4 rounded-full shadow-lg"
            >
              <Target className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
