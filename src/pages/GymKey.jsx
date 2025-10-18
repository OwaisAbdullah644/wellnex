import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../components/Hero'; 
import Testimonial from '../components/Testimonials';
import Features from '../components/Features';
const GymKey = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-navy">
      <Navbar activePage="gymkey" />
      
      <Hero 
        title="GymKey" 
        subtitle="Smart Access to Fitness, Anytime" 
        description="Your digital passport to fitness freedom—track workouts and access gyms seamlessly." 
        cta1="Explore Demo" 
        cta2="Download App"
        gradient="from-green-500 to-emerald-600"
      />
      
      <Features 
        title="Key Features" 
        items={[
          { icon: 'Dumbbell', name: 'Workout Tracking', desc: 'Log sessions and analyze performance with AI-powered insights.' },
          { icon: 'Users', name: 'Seamless Check-in', desc: 'Access partner gyms with a tap—no keys needed.' },
          { icon: 'Calendar', name: 'Realtime Schedules', desc: 'Book classes and manage memberships on the go.' },
          { icon: 'BarChart3', name: 'Owner Tools', desc: 'Streamline gym management and member engagement.' }
        ]}
      />
      
      <Testimonial 
        quote="“GymKey has transformed how I manage my gym. My members love the convenience.”"
        author="Imran M., Gym Owner, Lahore"
      />
      
      {/* <FooterCTA text="Explore Now" link="/" /> */}
      
      <Footer />
    </div>
  );
};

export default GymKey;