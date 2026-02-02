"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, Utensils, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Clients() {
  const clients = [
    {
      name: "TASTEMATIC NGR",
      industry: "Digital Dining",
      description: "Pioneers in high-end culinary experiences and digital food ecosystems.",
      icon: Utensils,
      color: "from-orange-500/20 to-red-500/20",
      services: ["Social Management", "Content Creation", "Brand Strategy"],
    },
    {
      name: "Filthy Luxe",
      industry: "Luxury Fashion",
      description: "Defining modern luxury through curated fashion and cinematic lifestyle.",
      icon: Sparkles,
      color: "from-purple-500/20 to-pink-500/20",
      services: ["Influencer Marketing", "Visual Content", "Positioning"],
    },
    {
      name: "Pure Aura Spa",
      industry: "Wellness",
      description: "A sanctuary of premium beauty and holistic wellness optimization.",
      icon: Heart,
      color: "from-green-500/20 to-teal-500/20",
      services: ["Digital Marketing", "Engagement", "Presence"],
    },
    {
      name: "Nugatto FSD",
      industry: "Enterprise",
      description: "Innovative logistics and distribution for the modern food industry.",
      icon: Building2,
      color: "from-blue-500/20 to-indigo-500/20",
      services: ["Strategy", "Lead Generation", "Expansion"],
    },
    {
      name: "Ademola Foundation",
      industry: "Philanthropy",
      description: "Driving social impact through powerful storytelling and community building.",
      icon: Heart,
      color: "from-red-500/20 to-pink-500/20",
      services: ["Campaigns", "Community Outreach", "Impact"],
    },
  ];

  return (
    <section id="clients" className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-neon/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-neon text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Partnerships
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight mb-8">
            DOMINATING WITH <span className="text-neon glow italic">LEADERS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We partner with ambitious brands to navigate the digital currents and 
            achieve unprecedented scaling and market authority.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-hover-trigger"
            >
              <div className="h-full glass-card p-8 sm:p-10 relative overflow-hidden transition-all group-hover:border-neon/30">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${client.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-navy transition-all duration-500">
                    <client.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-neon transition-colors">
                      {client.name}
                    </h3>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{client.industry}</div>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 font-medium leading-relaxed">
                  {client.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, sIndex) => (
                      <Badge
                        key={sIndex}
                        className="bg-white/5 text-gray-300 border-white/10 text-[10px] uppercase font-bold tracking-widest px-3 py-1 group-hover:border-neon/20 transition-all"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRight className="text-neon w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: clients.length * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-hover-trigger"
          >
            <div className="h-full glass border-neon/20 bg-neon/5 p-8 sm:p-10 rounded-[32px] flex flex-col justify-center items-center text-center relative overflow-hidden group-hover:bg-neon/10 transition-all">
              <div className="relative z-10 px-4">
                <h3 className="text-2xl font-heading font-black text-white mb-4">YOUR LOGO HERE</h3>
                <p className="text-gray-400 mb-8 text-sm font-medium">Be the next brand to ride the wave to digital supremacy.</p>
                <Button className="bg-neon text-navy font-black h-12 px-8 rounded-xl hover:scale-105 transition-all">
                  JOIN US
                </Button>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,252,191,0.1)_0%,transparent_70%)]" />
            </div>
          </motion.div>
        </div>

        {/* Global Stats or Proof Section could go here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-1 bg-gradient-to-r from-neon/40 via-white/10 to-neon/40 rounded-[40px] shadow-3xl overflow-hidden"
        >
          <div className="bg-navy rounded-[38px] py-16 px-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-5 bg-cover bg-center" />
             <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">
                  READY TO JOIN OUR <span className="text-neon glow italic">SUCCESS STORIES?</span>
                </h3>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                  Dominance isn't accidental. It's strategic. Let's create your 
                  digital dominance today.
                </p>
                <Button className="bg-neon text-navy font-black h-14 sm:h-16 px-8 sm:px-12 text-sm sm:text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(45,252,191,0.4)] transition-all flex items-center gap-3 mx-auto max-w-full whitespace-normal text-center">
                  START YOUR SURF #STAYWAVY <ArrowRight size={20} className="shrink-0" />
                </Button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
