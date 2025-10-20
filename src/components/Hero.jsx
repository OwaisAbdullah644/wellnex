import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-gray-100 text-gray-800 overflow-hidden px-8 md:px-16">

      {/* 🌫️ Light ambient aura */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,213,219,0.3)_0%,rgba(255,255,255,0)_80%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* 🪶 Animation bubble */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center relative z-10"
      >
        <div
          className="relative w-[400px] h-[400px] rounded-full bg-white backdrop-blur-xl border border-gray-200 shadow-[0_0_60px_rgba(156,163,175,0.3)] overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="rabbit"
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <DotLottieReact
                  src="https://lottie.host/621877b8-483c-4a67-a546-fd91ccdb9178/uaDzo5rpJb.lottie"
                  loop
                  autoplay
                  style={{ width: "85%", height: "85%" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="tech"
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: [0, 360] }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.6 },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/605bd79e-0bb9-459a-802c-046f08bac07c/JYgSXP3vEh.lottie"
                  loop
                  autoplay
                  style={{ width: "85%", height: "85%" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 🕊️ Calm text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 z-10 text-center md:text-left"
      >
        <h1 className="text-6xl font-semibold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent mb-4 leading-tight">
          Mindful Wellness.
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Redefine calm — where technology meets tranquility in a minimal, human-first space.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-gray-400/40 transition"
        >
          Begin Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
