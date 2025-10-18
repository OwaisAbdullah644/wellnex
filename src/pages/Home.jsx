import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import FlagshipApps from '../components/FlagshipApps';
import WhyWellnex from '../components/WhyWellnex';
import WhatsComingNext from '../components/WhatsComingNext';
import Testimonials from '../components/Testimonials';
import StayConnected from '../components/StayConnected';

const Home = ({activePage}) => {
  return (
    <div className="min-h-screen bg-gray-50 text-navy">
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