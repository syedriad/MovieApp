import React, { useState } from 'react';
import hamburger from "../assets/images/hamburger.png";
import logo2 from "../assets/images/logo2.png"
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 p-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo2} alt="Logo" className="h-8 mr-2" />
            <span className="text-white font-semibold text-lg">The MovieSpace</span>
          </Link>
        </div>
        
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
            <img src={hamburger} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
        
        <div className="hidden sm:block">
          <div className="flex space-x-4 mr-10 text-lg">
            <Link to="/movies/popular" className="text-gray-300 hover:text-white">Popular</Link>
            <Link to="/movies/top_rated" className="text-gray-300 hover:text-white">Top Rated</Link>
            <Link to="/movies/upcoming" className="text-gray-300 hover:text-white">Upcoming</Link>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col items-center">
            <Link to="/movies/popular" className="text-gray-300 hover:text-white py-2">Popular</Link>
            <Link to="/movies/top_rated" className="text-gray-300 hover:text-white py-2">Top Rated</Link>
            <Link to="/movies/upcoming" className="text-gray-300 hover:text-white py-2">Upcoming</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
