"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Target,
  PenTool,
  BarChart3,
  Megaphone,
  Smartphone,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Complete social media strategy, content creation, and community management across all platforms.",
      features: [
        "Content Strategy",
        "Daily Posting",
        "Community Engagement",
        "Analytics & Reporting",
      ],
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description:
        "ROI-focused ad campaigns on Facebook, Instagram, Google, and LinkedIn that convert.",
      features: [
        "Campaign Strategy",
        "Ad Creative",
        "Audience Targeting",
        "Performance Optimization",
      ],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "High-quality visual and written content that tells your brand story and engages your audience.",
      features: [
        "Graphic Design",
        "Video Production",
        "Copywriting",
        "Brand Photography",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Data-driven insights and comprehensive reporting to measure and improve your marketing performance.",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Competitor Research",
        "Growth Strategies",
      ],
    },
    {
      icon: Megaphone,
      title: "Influencer Marketing",
      description:
        "Connect with the right influencers to amplify your brand message and reach new audiences.",
      features: [
        "Influencer Sourcing",
        "Campaign Management",
        "Content Collaboration",
        "Performance Tracking",
      ],
    },
    {
      icon: Smartphone,
      title: "Digital Strategy",
      description:
        "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: [
        "Market Research",
        "Competitor Analysis",
        "Strategy Development",
        "Implementation Planning",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 opacity-20"
        style={{ rotate }}
      >
        <Image
          src="/images/logo-sticker.png"
          alt="Decoration"
          width={300}
          height={300}
          className="w-64 h-64"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Our <span className="text-neon">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive digital
            marketing solutions that drive growth and deliver measurable
            results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-hover-trigger">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-neon/10 rounded-lg group-hover:bg-neon/20 transition-colors">
                      <service.icon className="h-8 w-8 text-neon" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-neon transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-neon rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-neon text-neon hover:bg-neon hover:text-navy transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
