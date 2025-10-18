import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsComingNext = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-6 text-navy">
          What’s Coming Next
        </motion.h2>
        <motion.p {...fadeInUp} className="text-lg text-gray-700 mb-8 leading-relaxed">
          We’re building a unified Wellnex Platform that brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard. Whether you're a user, trainer, or clinic—Wellnex will be your digital wellness command center.
        </motion.p>
        <motion.ul {...fadeInUp} className="text-left max-w-md mx-auto mb-12 space-y-3 text-gray-600">
          <li className="flex items-start"><Calendar className="w-5 h-5 mr-3 mt-1 text-teal flex-shrink-0" />Wearable integration</li>
          <li className="flex items-start"><Calendar className="w-5 h-5 mr-3 mt-1 text-teal flex-shrink-0" />Nutrition and meal planning</li>
          <li className="flex items-start"><Calendar className="w-5 h-5 mr-3 mt-1 text-teal flex-shrink-0" />Corporate wellness dashboards</li>
        </motion.ul>
        <Link to="/contact" className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-sage transition">
          Get Early Access
        </Link>
      </div>
    </section>
  );
};

export default WhatsComingNext;