import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Shield, Cloud } from 'lucide-react';

const WhyWellnex = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  const pillars = [
    { icon: Users, title: 'Integrated Wellness', desc: 'Physical, mental, and emotional health in one ecosystem' },
    { icon: Brain, title: 'AI-Driven Personalization', desc: 'Smart recommendations tailored to your goals' },
    { icon: Shield, title: 'Scalable for Providers', desc: 'From boutique studios to national gym chains' },
    { icon: Cloud, title: 'Built for the Future', desc: 'Cloud-native, mobile-first, and privacy-conscious' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-16 text-navy">
          Why Wellnex?
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerChildren}>
          {pillars.map((pillar, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center p-6">
              <pillar.icon className="w-12 h-12 mx-auto mb-4 text-teal" />
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWellnex;