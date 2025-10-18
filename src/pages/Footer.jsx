import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-navy text-white py-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-4">Wellnex Systems</h3>
      <p className="text-sage mb-4">Empowering Wellness Through Technology</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-sm">
        <Mail className="w-4 h-4 mr-1" /> info@wellnexsystems.com
        <span className="mx-2">|</span>
        <MapPin className="w-4 h-4 mr-1" /> www.wellnexsystems.com
      </div>
      <p>&copy; 2025 Wellnex Systems. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;