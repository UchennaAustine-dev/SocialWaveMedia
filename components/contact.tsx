"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "Socialwavemedia24@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 812 654 6300",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      description: "Our creative headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6">
            Let's Start Your <span className="text-neon">Digital Journey</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to ride the wave of digital success? Get in touch with our
            team and let's discuss how we can transform your brand's online
            presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-hover-trigger border-0 shadow-md">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 p-2 sm:p-3 bg-neon/10 rounded-lg">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-neon" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-navy mb-1 text-sm sm:text-base">
                            {info.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 mb-1 break-words">
                            {info.details}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <Button className="w-full bg-neon text-navy hover:bg-neon/90 font-semibold py-3 sm:py-4 text-sm sm:text-base cursor-hover-trigger">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Live Chat
              </Button>
              <Button
                variant="outline"
                className="w-full border-navy text-navy hover:bg-navy hover:text-white py-3 sm:py-4 text-sm sm:text-base cursor-hover-trigger"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center pt-4 sm:pt-6"
            >
              <p className="text-navy font-medium mb-3 text-sm sm:text-base">
                Scan to connect with us
              </p>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <Image
                  src="/images/packages-flyer.jpeg"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">#STAYWAVY</p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-2 sm:mb-3">
                    Send Us a Message
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        required
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        required
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger"
                      />
                    </motion.div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+234 812 654 6300"
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger"
                      />
                    </motion.div>
                  </div>

                  {/* Company Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How can we help you? *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project, goals, and how we can help you achieve them..."
                      rows={4}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors cursor-hover-trigger resize-none"
                      required
                    />
                  </motion.div>

                  {/* Checkboxes */}
                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="w-4 h-4 mt-0.5 text-neon border-gray-300 rounded focus:ring-neon cursor-hover-trigger flex-shrink-0"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        Subscribe to our newsletter for digital marketing tips
                        and insights
                      </label>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-4 h-4 mt-0.5 text-neon border-gray-300 rounded focus:ring-neon cursor-hover-trigger flex-shrink-0"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        I agree to the Terms of Service and Privacy Policy *
                      </label>
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      className="w-full bg-neon text-navy hover:bg-neon/90 font-semibold text-base sm:text-lg py-4 sm:py-6 cursor-hover-trigger transition-all duration-300 hover:shadow-lg"
                    >
                      Send Message #STAYWAVY
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
