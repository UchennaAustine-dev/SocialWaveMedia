"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Olawale Benson",
    position: "Founder",
    company: "Zest Tech",
    image: "/reviews/cus1.jpeg",
    rating: 5,
    text: "Social Wave Media didn't just manage our socials; they built a movement. Our engagement sky-rocketed by 400% in the first quarter, and the quality of leads we're getting now is unparalleled.",
    results: "400% Engagement",
    industry: "FinTech",
  },
  {
    name: "Amara Okoro",
    position: "Creative Director",
    company: "Luxe Living",
    image: "/reviews/cus2.jpeg",
    rating: 5,
    text: "The aesthetic vision this team brings is elite. They took our legacy brand and made it relevant for the Gen-Z market without losing our core essence. Simply the best in the game.",
    results: "Brand Rebirth",
    industry: "Lifestyle",
  },
  {
    name: "Chidi Eze",
    position: "Marketing Head",
    company: "Apex Global",
    image: "/reviews/cus3.jpeg",
    rating: 5,
    text: "Paid ads used to be a black hole for our budget until Social Wave took over. We're now seeing a consistent 6x ROAS across all platforms. Their data-driven approach is a game-changer.",
    results: "6x ROAS",
    industry: "E-commerce",
  },
  {
    name: "Titi Adeyemi",
    position: "CEO",
    company: "Glow & Flow",
    image: "/reviews/cus4.jpeg",
    rating: 5,
    text: "Working with them feels like having a secret weapon. Their content production is movie-quality, and their strategy is light-years ahead of the competition. #STAYWAVY indeed!",
    results: "Market Leader",
    industry: "Beauty",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-neon via-transparent to-neon" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-neon via-transparent to-neon" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hashtag mb-6"
          >
            Voice of the Wave
          </motion.h2>
          <h1 className="text-massive text-white">
            WE LET OUR <span className="text-neon glow">RESULTS</span> DO THE TALKING
          </h1>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute w-full"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative group">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-[40px] border-2 border-white/10 glass-card p-3">
                    <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neon rounded-full flex items-center justify-center shadow-2xl rotate-12 hidden lg:flex">
                    <Quote className="w-10 h-10 text-navy" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="flex text-neon mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-current mr-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-white italic leading-tight mb-8">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div className="flex items-end justify-between border-t border-white/10 pt-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-400 font-medium">
                        {testimonials[activeIndex].position} • <span className="text-neon">{testimonials[activeIndex].company}</span>
                      </p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-3xl font-black text-neon glow">{testimonials[activeIndex].results}</div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Impact Metric</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-20 lg:bottom-auto lg:-left-10 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border-white/10 glass text-white hover:bg-neon hover:text-navy transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border-white/10 glass text-white hover:bg-neon hover:text-navy transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-32">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === index ? "w-12 bg-neon" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
