import React from 'react';
import { motion } from 'framer-motion';
import AppCard from '../components/AppCard';

const FlagshipApps = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  const apps = [
    {
      title: 'SoulWhispers',
      subtitle: 'Your Pocket-Sized Wellness Companion',
      description: 'SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. Through guided meditations, reflective journaling, and AI-powered mood tracking, SoulWhispers nurtures mental clarity and emotional resilience in a fast-paced world.',
      features: ['Telehealth and diagnostics', 'Mood journaling with AI insights', 'Personalized providers', 'Seamless booking & check-in for consultation sessions'],
      ctaText: 'Download SoulWhispers',
      ctaLink: '/soulwhispers',
      icon: 'Play',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GymKey',
      subtitle: 'Smart Access to Fitness, Anytime',
      description: 'GymKey is your digital passport to fitness freedom. Whether you\'re a gym owner or a fitness enthusiast, GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.',
      features: ['Seamless check-in at partner gyms', 'Workout tracking and performance analytics', 'Membership management for gym owners', 'Realtime class schedules and bookings'],
      ctaText: 'Explore GymKey',
      ctaLink: '/gymkey',
      icon: 'Dumbbell',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-16 text-navy">
          Our Flagship Apps
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 gap-12" variants={staggerChildren}>
          {apps.map((app, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <AppCard {...app} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipApps;