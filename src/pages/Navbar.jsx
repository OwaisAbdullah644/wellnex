import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);  // Trigger after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-navy hover:text-teal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex justify-center flex-1">
          {!isScrolled ? (
            <div className="flex space-x-6 items-center">
              <Link to="/" className={`text-navy hover:text-teal transition-colors ${activePage === 'home' ? 'text-teal font-bold' : ''}`}>Home</Link>
              <Link to="/soulwhispers" className={`text-navy hover:text-teal transition-colors ${activePage === 'soulwhispers' ? 'text-teal font-bold' : ''}`}>SoulWhispers</Link>
              <Link to="/gymkey" className={`text-navy hover:text-teal transition-colors ${activePage === 'gymkey' ? 'text-teal font-bold' : ''}`}>GymKey</Link>
              <Link to="/contact" className={`text-navy hover:text-teal transition-colors ${activePage === 'contact' ? 'text-teal font-bold' : ''}`}>Contact</Link>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg z-10"></div>
              <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full px-8 py-3 flex items-center space-x-6 shadow-lg">
                <Link to="/" className={`text-white hover:text-gray-200 font-medium transition-colors ${activePage === 'home' ? 'text-gray-200 font-bold' : ''}`}>Home</Link>
                <Link to="/soulwhispers" className={`text-white hover:text-gray-200 font-medium transition-colors ${activePage === 'soulwhispers' ? 'text-gray-200 font-bold' : ''}`}>SoulWhispers</Link>
              <Link to="/gymkey" className={`text-white hover:text-gray-200 font-medium transition-colors ${activePage === 'gymkey' ? 'text-gray-200 font-bold' : ''}`}>GymKey</Link>
              <Link to="/contact" className={`text-white hover:text-gray-200 font-medium transition-colors ${activePage === 'contact' ? 'text-gray-200 font-bold' : ''}`}>Contact</Link>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg z-10"></div>
          </div>
        )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 z-10">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block text-navy hover:text-teal transition-colors ${activePage === 'home' ? 'text-teal font-bold' : ''}`}>Home</Link>
              <Link to="/soulwhispers" onClick={() => setIsMobileMenuOpen(false)} className={`block text-navy hover:text-teal transition-colors ${activePage === 'soulwhispers' ? 'text-teal font-bold' : ''}`}>SoulWhispers</Link>
              <Link to="/gymkey" onClick={() => setIsMobileMenuOpen(false)} className={`block text-navy hover:text-teal transition-colors ${activePage === 'gymkey' ? 'text-teal font-bold' : ''}`}>GymKey</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block text-navy hover:text-teal transition-colors ${activePage === 'contact' ? 'text-teal font-bold' : ''}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;