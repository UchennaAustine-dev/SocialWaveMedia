// "use client";

// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";
// import Image from "next/image";

// export default function Hero() {
//   const textRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!textRef.current) return;

//       const { clientX, clientY } = e;
//       const { left, top, width, height } =
//         textRef.current.getBoundingClientRect();

//       const x = (clientX - left) / width - 0.5;
//       const y = (clientY - top) / height - 0.5;

//       textRef.current.style.textShadow = `
//         ${x * 20}px ${y * 20}px 15px rgba(45, 252, 191, 0.3)
//       `;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="absolute top-4 right-4 sm:top-10 sm:right-10 md:top-20 md:right-20 hidden md:block"
//         >
//           <Image
//             src="/images/logo-sticker.png"
//             alt="Social Wave Media Sticker"
//             width={150}
//             height={150}
//             className="w-24 h-24 md:w-32 md:h-32 rotate-12"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.span
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="hashtag mb-4 inline-block"
//           >
//             #STAYWAVY
//           </motion.span>

//           <motion.h1
//             ref={textRef}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient glow mb-6 leading-tight"
//           >
//             Ride the Digital <span className="text-neon">Wave</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
//           >
//             Transform your brand with cutting-edge digital marketing strategies
//             that drive real results. From social media mastery to
//             conversion-focused campaigns.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
//           >
//             <Button
//               size="lg"
//               className="bg-neon text-navy hover:bg-neon/90 font-semibold text-lg px-8 py-6 group"
//             >
//               Get Started Today
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               className="border-white  hover:bg-white text-navy font-semibold text-lg px-8 py-6 group"
//             >
//               <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//               Watch Our Story
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               className="w-1 h-3 bg-neon rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        textRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      textRef.current.style.textShadow = `
        ${x * 10}px ${y * 10}px 10px rgba(45, 252, 191, 0.2)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy/95">
        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(45, 252, 191, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(45, 252, 191, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Professional Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block py-1 px-3 bg-neon/10 border border-neon/20 rounded-full text-neon text-sm font-medium tracking-wide">
                PREMIUM DIGITAL MARKETING AGENCY
              </span>
            </motion.div>

            {/* Clear, Professional Headline */}
            <motion.h1
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Elevate Your <span className="text-neon">Digital Presence</span>
            </motion.h1>

            {/* Professional Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              We craft sophisticated digital strategies that transform brands
              and drive measurable business growth through data-driven marketing
              solutions.
            </motion.p>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              <div className="border-l-2 border-neon/30 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  50+
                </div>
                <div className="text-sm text-gray-400">Satisfied Clients</div>
              </div>
              <div className="border-l-2 border-neon/30 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  120+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="border-l-2 border-neon/30 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  240%
                </div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </motion.div>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-neon text-navy hover:bg-neon/90 font-semibold text-base px-8 py-6 shadow-lg shadow-neon/20"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Studies
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="text-sm text-gray-400">Trusted by:</div>
              <div className="flex space-x-6">
                <div className="text-white/70 font-medium text-sm">
                  ENTERPRISE
                </div>
                <div className="text-white/70 font-medium text-sm">
                  STARTUPS
                </div>
                <div className="text-white/70 font-medium text-sm">
                  E-COMMERCE
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[600px] w-full">
              {/* Premium Image with Overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/branding-flyer.jpeg"
                  alt="Social Wave Media - Digital Marketing Excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 to-transparent" />
              </div>

              {/* Professional Overlay Elements */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon rounded-full">
                    <Image
                      src="/images/logo-sticker.png"
                      alt="Social Wave Media Logo"
                      width={40}
                      height={40}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Social Wave Media
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Transforming brands through strategic digital marketing
                      since 2020
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">
            Discover More
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
