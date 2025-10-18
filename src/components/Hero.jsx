import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  return (
    <section className="relative bg-blue-50 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://via.placeholder.com/1920x1080?text=Wellness+Background" alt="Wellness Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text, Search, Stats */}
          <div className="text-center md:text-left">
            <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Find & Search Your
            </motion.h1>
            <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 underline underline-offset-4 decoration-blue-500">
              Favourite Wellness Path
            </motion.h1>
            <motion.p {...fadeInUp} className="text-lg text-gray-600 mb-8 max-w-lg">
              A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting-edge HealthTech and fitness innovation.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div {...fadeInUp} className="relative mb-8 max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search wellness goals or apps..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600">
                <Search className="w-4 h-4" />
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div {...fadeInUp} className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0" variants={staggerChildren}>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-600">Wellness Support</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600">Provider Partners</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">1M+</h3>
                <p className="text-gray-600">Sessions Booked</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side: Image */}
          <motion.div {...fadeInUp} className="relative">
            <img 
              src="hero.jpg" 
              alt="Wellness Professional"
              className="rounded-full mx-auto md:mx-0 shadow-2xl w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;