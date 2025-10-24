import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { comingNextFeatures } from "./WhatsComingNextData"; 

gsap.registerPlugin(ScrollTrigger);

const WhatsComingNext = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  const isInView = useInView(sectionRef, { threshold: 0.2, once: false });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bg = bgRef.current;
    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('yoga.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/70 z-0" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-[#FDC700] uppercase tracking-wide leading-tight"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What's Next in Wellness
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg lg:text-xl mt-4 leading-relaxed"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Elevate your journey with Wellnex — where mindfulness meets modern technology.
        </motion.p>
      </motion.div>

      <motion.div
        className="feature-grid max-w-3xl mx-auto grid grid-cols-1 gap-8 z-10 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {comingNextFeatures.map((feature, i) => (
          <motion.div
            key={i}
            className="feature-card bg-black/80 rounded-xl p-6 text-center border border-[#FDC700]/20 overflow-hidden shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
              <img
                src={feature.media}
                alt={feature.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold text-[#FDC700] uppercase tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="cta-section text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-10 py-3 bg-[#FDC700] text-black rounded-lg font-medium text-lg uppercase tracking-wide shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Join the Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WhatsComingNext;
