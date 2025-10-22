import React from "react";
import { motion } from "framer-motion";
const GOLD = "#FDC700";

export default function About_GoldenSpineHolo() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Golden Spine */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FDC700] to-transparent"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Holographic rotating frame */}
      <motion.div
        className="absolute inset-[3%] rounded-[40px] border border-[#FDC700]/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow: `0 0 40px ${GOLD}40, inset 0 0 20px ${GOLD}20`,
        }}
      />

      {/* Ambient glowing halo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#FDC70015,transparent_70%),radial-gradient(circle_at_70%_70%,#FDC70010,transparent_80%)]" />

      {/* Left: Title */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#FDC70010] to-transparent relative z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FDC700] to-[#ffc801] bg-clip-text text-transparent tracking-tight"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Wellnex Core
        </motion.h1>
      </div>

      {/* Right: Features */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 space-y-8 relative z-10">
        {[
          "AI-Driven Workouts",
          "Precision Mind-Body Mapping",
          "Golden Era Recovery",
          "Next-Gen Wellness Tracking",
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            whileHover={{
              scale: 1.02,
              x: 8,
              textShadow: `0 0 10px ${GOLD}`,
              color: GOLD,
            }}
            className="border-l-4 border-[#FDC700] pl-6"
          >
            <h3 className="text-2xl font-bold mb-2">{t}</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Experience a fusion of strength, data, and emotional flow.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating glow particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FDC700]/60 rounded-full blur-sm"
          initial={{
            x: Math.random() * 1400 - 200,
            y: Math.random() * 800 - 200,
            opacity: 0.4,
          }}
          animate={{
            y: ["0%", "-40%"],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
}
