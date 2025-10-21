import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const particles = [...Array(8)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-2 h-2 bg-black rounded-full blur-[2px]"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-gray-100 text-gray-800 overflow-hidden px-8 md:px-16">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,213,219,0.25)_0%,rgba(255,255,255,0)_80%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {particles}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative z-10"
      >
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={
            isHovered
              ? { 
                  scale: [1, 1.03, 1],
                  boxShadow: "0 0 40px rgba(107,114,128,0.3)"
                }
              : { 
                  scale: 1, 
                  boxShadow: "0 0 20px rgba(107,114,128,0.1)" 
                }
          }
          transition={{ 
            duration: 0.6,
            repeat: isHovered ? Infinity : 0 
          }}
          className="relative w-[400px] h-[400px] rounded-full bg-white backdrop-blur-2xl border border-gray-200 shadow-[0_0_40px_rgba(156,163,175,0.2)] overflow-hidden cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="rabbit"
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
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
                animate={{
                  opacity: 1,
                  rotate: [0, 180, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.4 },
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
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 text-center md:text-left"
      >
        <motion.h1
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl font-semibold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 bg-clip-text text-transparent mb-4 leading-tight"
        >
          Mindful Wellness.
        </motion.h1>
        
        <motion.p
          animate={{ opacity: [1, 0.95, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-gray-600 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Redefine calm — where technology meets tranquility in a minimal, human-first space.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#374151",
            boxShadow: "0 0 15px rgba(156,163,175,0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-gray-400/30 transition-all duration-200"
        >
          Begin Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;