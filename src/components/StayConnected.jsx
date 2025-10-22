import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const GOLD = "#FDC700";

const StayConnected_GoldenPulse = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-32 bg-black text-white">
      {/* background aurora */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#FDC70015,transparent_70%),radial-gradient(circle_at_70%_70%,#FDC70010,transparent_80%)]" />

      {/* floating spark particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FDC700]/40 rounded-full blur-[1.5px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["0%", "-40%"], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 6 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        {/* icon */}
        <motion.div
          className="inline-flex items-center justify-center mb-8 bg-[#FDC700]/10 text-[#FDC700] p-5 rounded-full border border-[#FDC700]/40 shadow-[0_0_30px_rgba(253,199,0,0.2)]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Mail className="w-8 h-8" />
        </motion.div>

        {/* heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold text-[#FDC700] mb-6"
        >
          Stay Connected
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the Wellnex ecosystem and be the first to experience the future of wellness and AI-driven fitness.
        </motion.p>

        {/* email form */}
        <motion.div
          variants={fadeInUp}
          className="relative max-w-lg mx-auto bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_20px_rgba(253,199,0,0.15)]"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full bg-black border border-zinc-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDC700]"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: GOLD,
                color: "#000",
                boxShadow: "0 0 25px rgba(253,199,0,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-black border-2 border-[#FDC700] text-[#FDC700] rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300"
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

      {/* bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FDC700]/60 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default StayConnected_GoldenPulse;
