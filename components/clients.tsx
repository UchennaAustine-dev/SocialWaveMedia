"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Utensils, Heart, Sparkles } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "TASTEMATIC NGR",
      industry: "Food & Beverage",
      description: "Premium food delivery and culinary experiences",
      icon: Utensils,
      color: "from-orange-500 to-red-500",
      services: [
        "Social Media Management",
        "Content Creation",
        "Brand Strategy",
      ],
    },
    {
      name: "Filthy Luxe",
      industry: "Luxury Fashion",
      description: "High-end fashion and luxury lifestyle brand",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      services: ["Influencer Marketing", "Visual Content", "Brand Positioning"],
    },
    {
      name: "Pure Aura Spa",
      industry: "Wellness & Beauty",
      description: "Premium spa and wellness services",
      icon: Heart,
      color: "from-green-500 to-teal-500",
      services: ["Digital Marketing", "Customer Engagement", "Online Presence"],
    },
    {
      name: "Nugatto FSD",
      industry: "Food Service",
      description: "Innovative food service and distribution",
      icon: Building2,
      color: "from-blue-500 to-indigo-500",
      services: ["Market Expansion", "Digital Strategy", "Lead Generation"],
    },
    {
      name: "Saburi Ademola Foundation",
      industry: "Non-Profit",
      description: "Community development and social impact",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      services: ["Awareness Campaigns", "Community Outreach", "Fundraising"],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="clients" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6">
            Trusted by <span className="text-neon">Leading Brands</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've had the privilege of working with amazing brands across
            various industries, helping them achieve remarkable growth and
            digital transformation.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-hover-trigger"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden border-0 shadow-lg">
                <div className={`h-2 bg-gradient-to-r ${client.color}`} />

                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${client.color} text-white shadow-lg`}
                    >
                      <client.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-neon transition-colors">
                        {client.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 mb-3"
                      >
                        {client.industry}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {client.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-navy text-sm uppercase tracking-wider">
                      Services Provided
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, serviceIndex) => (
                        <Badge
                          key={serviceIndex}
                          variant="outline"
                          className="text-xs border-neon/30 text-neon hover:bg-neon/10 transition-colors"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-navy to-navy/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-transparent" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's create your brand's digital success story. Join the ranks
                of our satisfied clients.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon text-navy px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl hover:bg-neon/90 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-hover-trigger"
              >
                Start Your Journey #STAYWAVY
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
