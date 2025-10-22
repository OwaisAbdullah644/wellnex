import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const WhatsComingNext = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
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

  const features = [
    {
      title: "Wearable Integration",
      desc: "Sync your devices for real-time health tracking.",
      icon: "⌚",
    },
    {
      title: "Nutrition & Meal Planning",
      desc: "AI-curated plans for optimal fueling.",
      icon: "🍎",
    },
    {
      title: "Corporate Wellness Dashboards",
      desc: "Tools for teams to thrive together.",
      icon: "👥",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden px-8 py-20"
    >
      {/* Background gym texture */}
      <div
        className="absolute inset-0"
        style={{
          // Same code as above, but change the backgroundImage URL in the section to:
backgroundImage: `url('https://images.pexels.com/photos/4325478/pexels-photo-4325478.jpeg')`, // Yoga studio
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 z-10 relative"
      >
        <h1 className="text-5xl lg:text-6xl font-black text-yellow-400 mb-4 uppercase tracking-wide">
          What's Coming Next
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          We're building a unified Wellnex Platform that brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard.
        </p>
      </motion.div>

      {/* Feature Cards with Countdown */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            className="bg-gray-800 rounded-xl p-6 text-center group hover:bg-yellow-900/20 transition-colors duration-300 border border-yellow-500/20"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-3 uppercase tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {feature.desc}
            </p>
            {/* Countdown Timer */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Days</span>
                <span>Hours</span>
                <span>Min</span>
                <span>Sec</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-yellow-400">
                <span>{timeLeft.days}</span>
                <span>{timeLeft.hours}</span>
                <span>{timeLeft.minutes}</span>
                <span>{timeLeft.seconds}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 z-10 relative"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-yellow-400 text-black rounded-full font-bold text-xl uppercase tracking-wide shadow-lg transition-all duration-300"
        >
          Get Early Access
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WhatsComingNext;