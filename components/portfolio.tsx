"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Social Media Growth",
      category: "Social Media Campaign",
      description:
        "Increased social media engagement by 450% and generated 2M+ impressions in 3 months.",
      image: "/images/elevate-flyer.jpeg",
      metrics: ["450% Engagement", "2M+ Impressions", "15K New Followers"],
      tags: ["Social Media", "Content Strategy", "Influencer Marketing"],
    },
    {
      title: "WhatsApp Marketing",
      category: "Lead Generation",
      description:
        "Created WhatsApp marketing campaigns that converted leads into customers with high ROI.",
      image: "/images/whatsapp-flyer.jpeg",
      metrics: ["320% ROI", "1.5K+ Leads", "28% Conversion Rate"],
      tags: ["WhatsApp Marketing", "Lead Generation", "Conversion Strategy"],
    },
    {
      title: "Creative Agency Services",
      category: "Full Digital Strategy",
      description:
        "Comprehensive branding and digital strategy for startups looking to stand out from competitors.",
      image: "/images/hire-agency-flyer.jpeg",
      metrics: [
        "Brand Recognition",
        "Competitor Analysis",
        "Market Positioning",
      ],
      tags: ["Branding", "Strategy", "Creative Direction"],
    },
    {
      title: "Service Packages",
      category: "Content & Branding",
      description:
        "Customized service packages for businesses at different growth stages and budget levels.",
      image: "/images/packages-flyer.png",
      metrics: [
        "Tailored Solutions",
        "Scalable Packages",
        "Measurable Results",
      ],
      tags: ["Service Packages", "Content Creation", "Social Management"],
    },
    {
      title: "Brand Growth",
      category: "Brand Strategy",
      description:
        "Strategic brand development and positioning to help businesses connect with their target audience.",
      image: "/images/branding-flyer.jpeg",
      metrics: ["Brand Awareness", "Audience Connection", "Visual Identity"],
      tags: ["Brand Strategy", "Visual Identity", "Marketing"],
    },
    {
      title: "Digital Presence",
      category: "Digital Marketing",
      description:
        "Complete digital presence management across multiple platforms to maximize brand visibility.",
      image: "/images/elevate-flyer.jpeg",
      metrics: [
        "Cross-Platform Presence",
        "Consistent Messaging",
        "Brand Recognition",
      ],
      tags: ["Digital Marketing", "Brand Consistency", "Multi-Platform"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Featured <span className="text-neon glow">Work</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped brands across industries achieve
            remarkable growth through strategic digital marketing campaigns.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="cursor-hover-trigger"
            >
              <Card className="bg-white hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-neon/10 text-neon">
                      {project.category}
                    </Badge>
                    <TrendingUp className="h-4 w-4 text-neon" />
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-2 bg-gray-50 rounded"
                      >
                        <div className="text-xs font-semibold text-navy">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
