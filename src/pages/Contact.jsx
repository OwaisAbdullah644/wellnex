import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm'; 
import ContactDetails from '../components/ContactDetails'; 

const Contact = () => {
  return (
<div className="min-h-screen bg-black text-white overflow-x-hidden">
  {/* <Navbar activePage="contact" /> */}
  
  <Hero 
    title="Get in Touch" 
    subtitle=""
    description="We'd love to hear from you. Reach out for partnerships, support, or just a chat."
    gradient="from-yellow-400 to-orange-500"
  />
  
  <ContactForm />
  <ContactDetails />
</div>

  );
};

export default Contact;