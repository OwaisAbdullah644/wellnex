import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FloatingAssistant = () => {
  const { scrollYProgress } = useScroll();
  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState("👋 Hey there!");

  // 💬 Scroll-based messages
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.2) setMessage("💭 Breathe in... Breathe out...");
      else if (v < 0.5) setMessage("💪 Keep moving, stay focused!");
      else if (v < 0.8) setMessage("✨ You’re doing great!");
      else setMessage("🚀 Almost there!");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 🪄 Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="mb-2 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-lg text-gray-800 text-sm shadow-md border border-gray-200"
      >
        {message}
      </motion.div>

      {/* 🌐 Lottie Orb */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 rounded-full shadow-[0_0_40px_rgba(45,212,191,0.5)] bg-gradient-to-tr from-teal-400/40 to-cyan-300/40 backdrop-blur-xl border border-teal-300/30 flex items-center justify-center"
      >
        <DotLottieReact
          src="https://lottie.host/605bd79e-0bb9-459a-802c-046f08bac07c/JYgSXP3vEh.lottie"
          loop
          autoplay
          style={{ width: "80%", height: "80%" }}
        />
        {/* 💫 Glow Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-teal-400/20 blur-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingAssistant;
