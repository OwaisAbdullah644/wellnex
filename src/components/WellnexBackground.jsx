// src/components/WellnexBackground.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const GOLD = "#FDC700";



const WellnexBackground = ({ particleCount = 8 }) => {
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  return (
    <>
      {/* 🌈 Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(253,199,0,0.08),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(253,199,0,0.12),transparent_75%)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Floating gold particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] rounded-full bg-[#FDC700]/50 blur-[2px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, -50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
};

export default WellnexBackground;
