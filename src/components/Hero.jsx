import React from "react";
import { motion } from "framer-motion";

const Hero5 = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
    <video autoPlay loop muted playsInline src="/video.mp4" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <motion.div
      className="text-[8vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 uppercase z-10"
      animate={{ y: [0, -20, 20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      Rise Beyond Limits
    </motion.div>
  </section>
);
export default Hero5;
