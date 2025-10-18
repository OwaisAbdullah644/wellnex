import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../components/Hero'; 
import Testimonial from '../components/Testimonials'; 
import Features from '../components/Features';
const SoulWhispers = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-navy">
      <Navbar activePage="soulwhispers" />
      
      <Hero 
        title="SoulWhispers" 
        subtitle="Your Pocket-Sized Wellness Companion" 
        description="Reconnect with your inner calm through guided meditations and AI-powered mood tracking." 
        cta1="Download on App Store" 
        cta2="Download on Google Play"
        gradient="from-purple-500 to-pink-500"
      />
      
      <Features 
        title="Key Features" 
        items={[
          { icon: 'Brain', name: 'Mood Journaling with AI Insights', desc: 'Track your emotions and get personalized recommendations to build resilience.' },
          { icon: 'Play', name: 'Guided Meditations', desc: 'Access a library of sessions for inner calm, from quick breaths to deep reflections.' },
          { icon: 'Calendar', name: 'Seamless Booking & Check-in', desc: 'Schedule consultations with providers effortlessly.' },
          { icon: 'User', name: 'Telehealth and Diagnostics', desc: 'Connect with personalized wellness experts anytime.' }
        ]}
      />
      
      <Testimonial 
        quote="“SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.”"
        author="Ayesha R., Karachi"
      />
      
      {/* <FooterCTA text="Download Now" link="/" /> */}
      
      <Footer />
    </div>
  );
};

export default SoulWhispers;