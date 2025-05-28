"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "Social Wave Media transformed our digital presence completely. Their strategic approach and creative campaigns helped us achieve 300% growth in just 6 months. The team's expertise in social media management and paid advertising is absolutely phenomenal.",
      results: "300% Growth",
      industry: "Technology",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "EcoFashion",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "Working with Social Wave has been a game-changer for our sustainable fashion brand. Their paid advertising expertise delivered a 5.2x ROAS, and their team feels like an extension of our own marketing department. Incredible results and partnership.",
      results: "5.2x ROAS",
      industry: "Fashion",
    },
    {
      name: "Emma Rodriguez",
      position: "Founder",
      company: "Wellness Co.",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "The influencer marketing campaign they created for us was incredible. 50+ authentic partnerships that drove real engagement and sales. Their attention to detail and understanding of our wellness brand values is unmatched in the industry.",
      results: "50+ Partnerships",
      industry: "Wellness",
    },
    {
      name: "David Thompson",
      position: "CMO",
      company: "FinTech Solutions",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "Social Wave Media doesn't just deliver campaigns, they deliver results. 500+ qualified leads per month and a €2M pipeline speaks for itself. Their data-driven approach and strategic thinking have revolutionized our lead generation.",
      results: "€2M Pipeline",
      industry: "FinTech",
    },
    {
      name: "Lisa Park",
      position: "Brand Manager",
      company: "Luxury Hotels",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "Their content creation and brand strategy elevated our entire digital presence. The visual storytelling they crafted perfectly captured our luxury brand essence and resonated with our high-end clientele beautifully.",
      results: "Brand Excellence",
      industry: "Hospitality",
    },
    {
      name: "James Wilson",
      position: "Product Manager",
      company: "FoodieApp",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "From app launch strategy to execution, Social Wave Media exceeded all expectations. 100K downloads in the first month was beyond our wildest dreams! Their understanding of the food tech space is remarkable.",
      results: "100K Downloads",
      industry: "Food Tech",
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-neon to-neon/70 rounded-full mb-6"
          >
            <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-navy" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy mb-4 sm:mb-6">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/70">
              Success Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say
            about working with Social Wave Media and the transformative results
            we've achieved together.
          </p>
        </motion.div>

        {/* Featured Testimonial - Large Screen */}
        <div className="hidden lg:block mb-16">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-navy/5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-navy" />

              <CardContent className="p-12 relative">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Quote Section */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 text-yellow-400 fill-current mr-1"
                          />
                        )
                      )}
                      <span className="ml-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                        {testimonials[activeIndex].industry}
                      </span>
                    </div>

                    <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mb-8 italic">
                      "{testimonials[activeIndex].text}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-navy mb-1">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-gray-600 mb-1">
                          {testimonials[activeIndex].position}
                        </p>
                        <p className="text-neon font-semibold">
                          {testimonials[activeIndex].company}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="text-3xl font-bold text-neon mb-1">
                          {testimonials[activeIndex].results}
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">
                          Key Result
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          src={
                            testimonials[activeIndex].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-neon to-neon/70 rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="h-6 w-6 text-navy" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mobile/Tablet Testimonials */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-navy" />

                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-lg mx-auto">
                        <Image
                          src={
                            testimonials[activeIndex].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-neon to-neon/70 rounded-full flex items-center justify-center">
                        <Quote className="h-4 w-4 text-navy" />
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-navy mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-1">
                      {testimonials[activeIndex].position}
                    </p>
                    <p className="text-neon font-semibold text-sm sm:text-base">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>

                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current mr-1"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {testimonials[activeIndex].industry}
                    </span>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-bold text-neon">
                        {testimonials[activeIndex].results}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Key Result
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-8 sm:mt-12 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-navy/20 hover:border-neon hover:bg-neon hover:text-navy transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-neon scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-navy/20 hover:border-neon hover:bg-neon hover:text-navy transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-navy to-navy/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-transparent" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to join our success stories?
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's create your next success story together. Start your
                digital transformation today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon text-navy px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl hover:bg-neon/90 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-hover-trigger"
              >
                Start Your Success Story #STAYWAVY
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
