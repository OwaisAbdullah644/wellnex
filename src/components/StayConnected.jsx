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
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-black text-white">
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
        className="relative z-10 text-center px-4 sm:px-6 md:px-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center justify-center mb-6 sm:mb-8 border border-[#FDC700]/60 text-[#FDC700] p-3 sm:p-4 rounded-full"
        >
          <Mail className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-[#FDC700]"
        >
          Stay Connected
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed"
        >
          Join the Wellnex ecosystem and be the first to experience the future of
          wellness, fitness, and AI-powered care.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[85vw] sm:max-w-md md:max-w-lg mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-xl box-sizing-border"
        >
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black border border-zinc-700 text-gray-100 placeholder:text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FDC700]/70 box-sizing-border"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-black border-2 border-[#FDC700] text-[#FDC700] rounded-full font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-[#FDC700] hover:text-black transition-all duration-300 box-sizing-border"
            >
              Join Waitlist
            </motion.button>
          </div>
          <Link
            to="/contact"
            className="block mt-4 sm:mt-6 text-gray-400 hover:text-[#FDC700] hover:underline font-medium transition text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StayConnected;