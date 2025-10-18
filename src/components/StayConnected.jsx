import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StayConnected = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };

  return (
    <section className="py-20 bg-gradient-to-br from-teal to-sage text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-6">
          Stay Connected
        </motion.h2>
        <motion.p {...fadeInUp} className="text-xl mb-12 opacity-90">
          Be the first to experience the full Wellnex platform.
        </motion.p>
        <motion.div {...fadeInUp} className="bg-white/20 rounded-2xl p-8 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <Link to="/contact" className="bg-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition whitespace-nowrap">
              Join Our Waitlist
            </Link>
          </div>
          <Link to="/contact" className="block mt-6 text-teal hover:underline">Contact Us</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StayConnected;