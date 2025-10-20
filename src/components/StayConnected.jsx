import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const StayConnected = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f8fafc]">
      {/* 💫 Animated glowing background waves */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.4),transparent_60%)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(191,219,254,0.3),transparent_80%)]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] rounded-full bg-sky-400/40 blur-[2px]"
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
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* 📬 Main Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          className="inline-flex items-center justify-center mb-8 bg-gradient-to-br from-sky-400 to-blue-600 p-4 rounded-full shadow-lg shadow-blue-200/40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <Mail className="text-white w-8 h-8" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-400 bg-clip-text text-transparent"
        >
          Stay Connected
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the Wellnex ecosystem and be the first to experience a redefined approach
          to wellness, technology, and care.
        </motion.p>

        {/* 🧊 Email Form Card */}
        <motion.div
          variants={fadeInUp}
          className="relative max-w-lg mx-auto bg-white/70 backdrop-blur-xl border border-slate-100 rounded-3xl p-8 shadow-xl hover:shadow-blue-100/50 transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-2xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400"
            />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Join Our Waitlist
            </Link>
          </div>
          <Link
            to="/contact"
            className="block mt-6 text-sky-600 hover:underline font-medium transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* ✨ Glowing bottom divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
    </section>
  );
};

export default StayConnected;
