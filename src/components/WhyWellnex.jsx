import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Bot, Users, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyWellnexPoints } from "./WhyWellnexData";

gsap.registerPlugin(ScrollTrigger);

const WhyWellnex = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const icons = { Brain, Bot, Users, Rocket };

  useEffect(() => {
    const bg = bgRef.current;
    gsap.to(bg, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 will-change-transform"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('why2.jpg')`, willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 max-w-full sm:max-w-xl md:max-w-2xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FDC700] uppercase tracking-wider">
          Why Choose Wellnex?
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4">
          Explore the core strengths driving Wellnex’s wellness revolution.
        </p>
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {whyWellnexPoints.map((point, i) => {
          const Icon = icons[point.icon] || Brain;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-black/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#FDC700]/15 shadow-md hover:shadow-[#FDC700]/20 transition-transform duration-300 will-change-transform"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#FDC700]" />
                <h3 className="text-lg sm:text-xl font-bold text-[#FDC700] ml-3 uppercase">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{point.desc}</p>
              <div className="rounded-lg overflow-hidden h-32 sm:h-36 md:h-40">
                <img
                  src={point.media}
                  alt={point.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyWellnex;