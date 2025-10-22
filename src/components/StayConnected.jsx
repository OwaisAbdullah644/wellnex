import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const StayConnected = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-28 bg-black text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FDC700]/40 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FDC700]/40 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center justify-center mb-8 border border-[#FDC700]/60 text-[#FDC700] p-4 rounded-full"
        >
          <Mail className="w-8 h-8" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-[#FDC700]"
        >
          Stay Connected
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the Wellnex ecosystem and be the first to experience the future of
          wellness, fitness, and AI-powered care.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="relative max-w-lg mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full bg-black border border-zinc-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDC700]/70"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-black border-2 border-[#FDC700] text-[#FDC700] rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#FDC700] hover:text-black transition-all duration-300"
            >
              Join Waitlist
            </motion.button>
          </div>
          <Link
            to="/contact"
            className="block mt-6 text-gray-400 hover:text-[#FDC700] hover:underline font-medium transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StayConnected;