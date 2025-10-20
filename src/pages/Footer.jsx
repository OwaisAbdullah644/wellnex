import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, HeartPulse } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0a192f] to-[#020617] text-white py-20">
      {/* 🌈 Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.1),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.15),transparent_75%)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] rounded-full bg-cyan-400/50 blur-[2px]"
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

      {/* 💫 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Logo Pulse */}
        <motion.div
          className="inline-flex items-center justify-center mb-8 p-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HeartPulse className="w-8 h-8 text-white" />
        </motion.div>

        {/* Branding */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
          Wellnex Systems
        </h3>
        <p className="text-slate-400 mb-8 text-lg">
          Empowering Wellness Through Technology
        </p>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>info@wellnexsystems.com</span>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>www.wellnexsystems.com</span>
          </div>
        </div>

        {/* Divider Glow */}
        <motion.div
          className="mx-auto w-40 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ originX: 0.5 }}
        />

        {/* Copyright */}
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Wellnex Systems. All rights reserved.
        </p>
      </motion.div>

      {/* ⚡ Bottom animated glow bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
    </footer>
  );
};

export default Footer;
