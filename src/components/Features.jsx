// src/components/Features.jsx - New File: Feature Grid for App Pages
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Calendar, BarChart3 } from 'lucide-react';

const Features = ({ title, items }) => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return Dumbbell;
      case 'Users': return Users;
      case 'Calendar': return Calendar;
      case 'BarChart3': return BarChart3;
      default: return Dumbbell; // Fallback
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-16 text-navy">
          {title}
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 gap-12" variants={staggerChildren}>
          {items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={i} variants={fadeInUp} className="p-6 text-center">
                <Icon className="w-12 h-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;