import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-4 left-0 w-full z-50 text-[#FDC700]">
      <div
        className={`max-w-md mx-auto px-3 transition-all duration-500 bg-black/90 backdrop-blur-md rounded-full ${
          isScrolled ? "py-1" : "py-1"
        } flex justify-between items-center shadow-lg`}
      >
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#FDC700] hover:text-yellow-300 transition mr-3"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 text-center">
          <span className="text-xs font-bold uppercase">Wellnex</span>
        </div>

        <div className="flex items-center">
          <span className="text-[#FDC700] mr-3 text-xs">♪</span>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute bottom-full mb-1 left-0 w-full flex justify-center z-10">
          <div className="bg-black/90 backdrop-blur-lg rounded-t-lg shadow-lg max-w-md w-full">
            <div className="px-3 py-2 space-y-1">
              {["Home", "SoulWhispers", "GymKey", "Contact"].map((name, index) => (
                <React.Fragment key={name}>
                  {index > 0 && <hr className="border-gray-700" />}
                  <Link
                    to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-[#FDC700] hover:text-yellow-300 transition text-xs uppercase font-bold px-2 py-1 ${
                      activePage === name.toLowerCase() ? "text-yellow-300" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;