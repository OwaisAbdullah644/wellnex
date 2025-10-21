import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        } flex justify-between items-center`}
      >
        {/* 🌿 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 💠 Desktop Navigation */}
        <div className="hidden md:flex justify-center flex-1">
          {!isScrolled ? (
            // 🕊️ Default Navbar (Before Scroll)
            <div className="flex space-x-8 items-center bg-white/70 backdrop-blur-lg border border-gray-300/40 shadow-[0_0_25px_rgba(0,0,0,0.15)] px-10 py-4 rounded-full transition-all duration-500">
              {[
                { name: "Home", path: "/" },
                { name: "SoulWhispers", path: "/soulwhispers" },
                { name: "GymKey", path: "/gymkey" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-all duration-300 ${
                    activePage === link.name.toLowerCase()
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.name}
                  {activePage === link.name.toLowerCase() && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            // 🌈 Navbar after Scrolling
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg z-10"></div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-full px-8 py-3 flex items-center space-x-6 shadow-lg">
                <Link
                  to="/"
                  className={`text-white hover:text-gray-300 font-medium ${
                    activePage === "home" ? "text-gray-300 font-bold" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/soulwhispers"
                  className={`text-white hover:text-gray-300 font-medium ${
                    activePage === "soulwhispers" ? "text-gray-300 font-bold" : ""
                  }`}
                >
                  SoulWhispers
                </Link>
                <Link
                  to="/gymkey"
                  className={`text-white hover:text-gray-300 font-medium ${
                    activePage === "gymkey" ? "text-gray-300 font-bold" : ""
                  }`}
                >
                  GymKey
                </Link>
                <Link
                  to="/contact"
                  className={`text-white hover:text-gray-300 font-medium ${
                    activePage === "contact" ? "text-gray-300 font-bold" : ""
                  }`}
                >
                  Contact
                </Link>
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg z-10"></div>
            </div>
          )}
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 z-10">
            <div className="px-4 py-4 space-y-4">
              {["Home", "SoulWhispers", "GymKey", "Contact"].map((name) => (
                <Link
                  key={name}
                  to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-800 hover:text-black transition ${
                    activePage === name.toLowerCase()
                      ? "text-black font-bold"
                      : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
