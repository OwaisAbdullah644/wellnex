import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        style={{ willChange: "transform, background, filter, box-shadow" }}
        animate={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(20,20,20,0.7), rgba(0,0,0,0.4))"
            : "rgba(0,0,0,0)",
          border: isScrolled
            ? "1px solid rgba(255,215,0,0.25)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 25px rgba(255,215,0,0.15)"
            : "0 4px 30px rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          scale: isScrolled ? 0.97 : 1,
          width: isScrolled ? "80%" : "90%",
        }}
        transition={{
          background: { duration: 0.25, ease: "easeInOut" },
          border: { duration: 0.2, ease: "easeOut" },
          boxShadow: { duration: 0.25, ease: "easeInOut" },
          backdropFilter: { duration: 0.3, ease: "easeOut" },
          scale: { duration: 0.2, ease: "easeOut" },
          width: { duration: 0.25, ease: "easeInOut" },
        }}
        className="mx-auto flex items-center justify-center md:justify-between px-6 py-4 rounded-full mt-2 transition-all duration-300"
      >
        {/* 📱 Mobile Button */}
        <div className="md:hidden absolute left-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-yellow-400 transition"
          >
            <svg
              className="w-7 h-7"
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

        {/* 🌟 Logo */}
        <motion.div
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center space-x-2"
        >
          <img
            src="logo.png"
            alt="Logo"
            className="w-30 h-12 object-cover"
          />
        </motion.div>

        {/* 🌍 Navigation Links (Always Gradient) */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "SoulWhisper", "GymKey", "About" ,"Contact", "Register"].map((name) => {
            const isActive = activePage === name.toLowerCase();
            return (
              <Link
                key={name}
                to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                className={`relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition duration-300 ${
                  isActive ? "font-extrabold" : "opacity-80"
                }`}
              >
                {name}
                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* 🚀 CTA */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="md:flex hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-500/30"
          >
            Join Now
          </Link>
        </motion.div>
      </motion.div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-yellow-500/20 z-10"
          >
            <div className="px-4 py-4 space-y-4">
              {["Home", "SoulWhisper", "GymKey",  "About", "Contact", "Register"].map((name) => (
                <Link
                  key={name}
                  to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition ${
                    activePage === name.toLowerCase()
                      ? "font-extrabold"
                      : "opacity-80"
                  }`}
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 rounded-full font-medium shadow-md hover:shadow-yellow-500/30"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
