"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Socialwavemedia24@gmail.com",
      description: "Direct access to our specialists",
      href: "mailto:Socialwavemedia24@gmail.com"
    },
    {
      icon: Phone,
      title: "Call",
      details: "+234 812 654 6300",
      description: "Mon-Fri from 9am to 6pm",
      href: "tel:+2348126546300"
    },
    {
      icon: MapPin,
      title: "HQ",
      details: "Lagos, Nigeria",
      description: "Global service delivery",
      href: "https://maps.google.com/?q=Lagos,Nigeria"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "24/7 Priority support",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-navy relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,252,191,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column - Contact Details */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-neon text-xs font-bold uppercase tracking-widest mb-8">
                Connect
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-white leading-tight mb-8">
                LET'S START THE <span className="text-neon glow italic">CONVERSATION</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-12">
                Ready to ride the wave? Our team is waiting to transform 
                your digital presence into a dominant market force.
              </p>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={info.href} 
                      target={info.href?.startsWith('http') ? "_blank" : undefined}
                      className={`glass-card p-6 group cursor-hover-trigger block transition-all hover:border-neon/30 ${!info.href && 'pointer-events-none'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-navy transition-all duration-300">
                          <info.icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">{info.title}</h3>
                          <p className="text-white font-medium text-sm break-all">{info.details}</p>
                        </div>
                        {info.href && <ArrowUpRight className="w-4 h-4 text-neon ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="py-16 sm:py-20 text-center"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-neon" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 uppercase">Message Sent!</h3>
                      <p className="text-gray-400 text-base sm:text-lg">Our experts will catch your wave within 24 hours.</p>
                      <Button 
                        variant="ghost" 
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-neon border-neon/20 hover:bg-neon/10 px-8 h-12 rounded-xl text-xs font-bold uppercase tracking-widest"
                      >
                        Send Another Brief
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">Project Brief</h3>
                      <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">Brief us on your goals, and we'll craft the strategy.</p>

                      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">First Name</label>
                            <Input 
                              required
                              placeholder="John" 
                              className="bg-white/5 border-white/10 rounded-2xl h-12 sm:h-14 px-5 text-white focus-visible:ring-neon transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
                            <Input 
                              required
                              placeholder="Doe" 
                              className="bg-white/5 border-white/10 rounded-2xl h-12 sm:h-14 px-5 text-white focus-visible:ring-neon transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                            <Input 
                              required
                              type="email"
                              placeholder="john@example.com" 
                              className="bg-white/5 border-white/10 rounded-2xl h-12 sm:h-14 px-5 text-white focus-visible:ring-neon transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Company</label>
                            <Input 
                              placeholder="Your Agency" 
                              className="bg-white/5 border-white/10 rounded-2xl h-12 sm:h-14 px-5 text-white focus-visible:ring-neon transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                          <Textarea 
                            required
                            placeholder="Describe your vision..." 
                            rows={4}
                            className="bg-white/5 border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white focus-visible:ring-neon transition-all resize-none"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pt-2">
                          <div className="flex items-start gap-3 w-full sm:w-auto sm:max-w-sm">
                            <input 
                              required
                              type="checkbox" 
                              className="mt-1 w-4 h-4 bg-white/5 border-white/10 rounded cursor-pointer checked:bg-neon"
                            />
                            <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-bold uppercase tracking-wider">
                              I agree to communications and Privacy Policy.
                            </p>
                          </div>
                          
                          <Button 
                            disabled={status === "submitting"}
                            className="w-full sm:w-auto bg-neon text-navy font-black h-14 sm:h-16 px-10 rounded-2xl hover:shadow-[0_0_30px_rgba(45,252,191,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-xs sm:text-sm uppercase tracking-widest"
                          >
                            {status === "submitting" ? (
                              <>SENDING... <Loader2 size={16} className="animate-spin" /></>
                            ) : (
                              <>SEND MESSAGE <Send size={16} /></>
                            )}
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <motion.a
                href="https://wa.me/2348126546300"
                target="_blank"
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-hover-trigger block"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <h4 className="text-white font-bold mb-1">WhatsApp Chat</h4>
                <p className="text-xs text-gray-500">Instant response during hours</p>
                <ArrowUpRight className="w-4 h-4 text-neon mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="https://calendly.com/socialwavemedia" // Use placeholder or actual if known
                target="_blank"
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-hover-trigger block"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon mb-4 group-hover:scale-110 transition-transform">
                  <Calendar size={20} />
                </div>
                <h4 className="text-white font-bold mb-1">Schedule Call</h4>
                <p className="text-xs text-gray-500">Book a strategy session</p>
                <ArrowUpRight className="w-4 h-4 text-neon mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
