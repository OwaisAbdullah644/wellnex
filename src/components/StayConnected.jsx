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
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <motion.div className="inline-flex items-center justify-center mb-8 bg-gray-900 text-white p-4 rounded-full shadow-lg">
          <Mail className="w-8 h-8" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent"
        >
          Stay Connected
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the Wellnex ecosystem and be the first to experience a redefined approach
          to wellness, technology, and care.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative max-w-lg mx-auto bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-gray-300/40 transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-2xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
            />
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md"
            >
              Join Our Waitlist
            </Link>
          </div>
          <Link
            to="/contact"
            className="block mt-6 text-gray-600 hover:text-gray-800 hover:underline font-medium transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200" />
    </section>
  );
};

export default StayConnected;
