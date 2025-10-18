import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm'; 
import ContactDetails from '../components/ContactDetails'; 

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-navy">
      <Navbar activePage="contact" />
      
      <Hero 
        title="Get in Touch" 
        subtitle="" 
        description="We'd love to hear from you. Reach out for partnerships, support, or just a chat."
        cta1="" 
        cta2=""
        gradient="teal"
      />
      
      <ContactForm />
      
      <ContactDetails />
      
      <Footer />
    </div>
  );
};

export default Contact;