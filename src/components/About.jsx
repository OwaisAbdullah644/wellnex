import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-navy">
          Where Wellness Meets What’s Next
        </motion.h2>
        <motion.p {...fadeInUp} className="text-lg text-gray-700 leading-relaxed">
          At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology. Born from the fusion of “Wellness” and “Next,” our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
        </motion.p>
        <motion.p {...fadeInUp} className="text-xl font-semibold mt-6 text-teal">
          We’re not just building apps. We’re building a movement.
        </motion.p>
      </div>
    </section>
  );
};

export default About;