import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import FlagshipApps from '../components/FlagshipApps';
import WhyWellnex from '../components/WhyWellnex';
import WhatsComingNext from '../components/WhatsComingNext';
import Testimonials from '../components/Testimonials';
import StayConnected from '../components/StayConnected';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();  

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 z-50 bg-black"
      style={{ scaleX: scrollYProgress }}  
      initial={{ scaleX: 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-teal to-sage"  
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

const Home = ({ activePage }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-navy">
      <ProgressBar /> 
      <Navbar activePage="home" />
      <Hero />
      <About />
      <FlagshipApps />
      <WhyWellnex />
      <WhatsComingNext />
      <Testimonials />
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Home;