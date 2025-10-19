import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Users, Brain, Heart, Sparkles } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120
    });
  }, []);

  const getIconComponent = (Icon, color) => {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <Icon 
          className={`w-12 h-12 mx-auto mb-4 transition-all duration-300 ease-in-out group-hover:fill-current group-hover:text-${color}-500`}
          strokeWidth={2}
          fill="none"
        />
      </motion.div>
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-25 to-teal-50 overflow-hidden">
      {/* Floating orbs for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-32 h-32 bg-teal/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-sage/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header with AOS fade-up stagger */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-navy mb-4" data-aos="fade-up" data-aos-delay="0">
            Where Wellness
          </h2>
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal via-sage to-teal inline-block" data-aos="fade-up" data-aos-delay="200">
            Meets What's Next
          </h2>
        </div>

        {/* Narrative with AOS slide and stagger for text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <p className="text-xl text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100">
              At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
              Born from the fusion of "Wellness" and "Next," our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
            </p>
            <p className="text-2xl font-bold text-teal bg-gradient-to-r from-teal/20 to-sage/20 px-6 py-4 rounded-2xl inline-block" data-aos="zoom-in" data-aos-delay="300">
              We're not just building apps. We're building a movement.
            </p>
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <motion.img 
              src="hero.jpg" 
              alt="Human-centered wellness"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Pillars with AOS stagger and hover */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, title: 'Connected Communities', desc: 'Foster meaningful interactions', color: 'teal' },
            { icon: Brain, title: 'Intelligent AI', desc: 'Personalized insights', color: 'sage' },
            { icon: Heart, title: 'Holistic Balance', desc: 'Mind, body, spirit', color: 'red' },
            { icon: Sparkles, title: 'Future-Ready', desc: 'Scalable tech', color: 'purple' }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-teal/30 cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={i * 150}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {getIconComponent(pillar.icon, pillar.color)}
              <h4 className="text-xl font-semibold text-navy mb-2 group-hover:text-teal transition-colors">{pillar.title}</h4>
              <p className="text-gray-600 text-sm group-hover:text-navy transition-colors">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;