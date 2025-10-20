import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-950 via-slate-900 to-blue-800 text-white overflow-hidden px-8 md:px-16">

      {/* ✨ Animated background aura */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25)_0%,rgba(0,0,0,0)_80%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* 🌐 Left animation bubble */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center relative z-10"
      >
        <div className="relative w-[400px] h-[400px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_100px_rgba(56,189,248,0.3)]">
          <DotLottieReact
            src="https://lottie.host/621877b8-483c-4a67-a546-fd91ccdb9178/uaDzo5rpJb.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>

      {/* 🧠 Right-side content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 z-10 text-center md:text-left"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight">
          Wellness, Evolved.
        </h1>

        <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Experience AI-powered wellness — built for modern humans who seek balance, clarity, and vitality.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-xl hover:shadow-cyan-400/50 transition"
        >
          Start Your Journey
        </motion.button>
      </motion.div>

      {/* 💫 Floating spark particles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
