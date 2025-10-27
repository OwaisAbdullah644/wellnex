import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlagshipApps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const apps = [
    {
      title: "SoulWhispers",
      subtitle: "Your Pocket-Sized Wellness Companion",
      desc: "SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. Through guided meditations, reflective journaling, and AI-powered mood tracking, SoulWhispers nurtures mental clarity and emotional resilience in a fast-paced world.",
      ctaText: "Download SoulWhispers",
    },
    {
      title: "GymKey",
      subtitle: "Smart Access to Fitness, Anytime",
      desc: "GymKey is your digital passport to fitness freedom. Whether you're a gym owner or a fitness enthusiast, GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.",
      ctaText: "Explore GymKey",
    },
  ];

  const appVariants = {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-parallax-flagship", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      const cards = gsap.utils.toArray(".app-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
      style={{ willChange: "transform" }}
    >
      <div
        className="bg-parallax-flagship absolute inset-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 z-10 relative"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-yellow-400 mb-4 sm:mb-6 leading-tight uppercase tracking-wide"
        >
          Our Flagship Apps
        </motion.h1>
        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl sm:max-w-4xl mx-auto leading-relaxed"
        >
          Discover our core apps designed to transform wellness and fitness into seamless, intelligent experiences.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto z-10 relative">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            variants={appVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i}
            className="app-card relative text-center group"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut",
              }}
              style={{
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
              }}
            />
            <div className="relative mx-auto mb-6 sm:mb-8">
              <div className="relative w-64 sm:w-72 md:w-80 h-96 sm:h-120 md:h-160 bg-black rounded-3xl shadow-2xl mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-3xl z-10" />
                <div className="absolute inset-1 sm:inset-2 bg-white/10 rounded-2xl flex flex-col justify-between p-3 sm:p-4 z-20">
                  <div className="flex items-center justify-between">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">{app.title.charAt(0)}</span>
                    </div>
                    <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gray-600 rounded-full" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xs text-white font-medium">Mock UI</div>
                  </div>
                </div>
                <div className="absolute top-1 sm:top-2 left-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-full -translate-x-1/2 z-10" />
              </div>
            </div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-3 sm:mb-4 uppercase tracking-wide"
              whileHover={{ y: -2 }}
            >
              {app.title} App
            </motion.h2>
            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed"
            >
              {app.subtitle}
            </motion.p>
            <motion.p
              className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed"
            >
              {app.desc}
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-black border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-black border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Google Play
              </motion.button>
            </div>
            <div className="relative mx-auto w-64 sm:w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }} />
              <motion.div
                className="relative bg-yellow-400 text-black rounded-b-3xl py-2 px-4 sm:px-6 flex items-center justify-between font-bold text-xs sm:text-sm uppercase tracking-wide"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-full flex items-center justify-center text-yellow-400">≡</span>
                  <span>{app.title}</span>
                </span>
                <span className="text-xs">♪</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlagshipApps;