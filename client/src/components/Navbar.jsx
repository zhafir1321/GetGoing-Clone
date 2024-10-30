import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo-getgoing.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? " rounded-full backdrop-blur-lg text-white mt-5"
          : "bg-white/90 text-gray-700 backdrop-blur-sm mt-0"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <a href='#'>
              <img src={logo} alt='Get Going' className='' />
            </a>
          </div>
          <div className='relative ml-2'>
            <input
              type='text'
              placeholder='Cari negara, kota atau guide'
              className='rounded-full pl-4 pr-16 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-[0_0_10px_3px_rgba(0,0,0,0.5)]'
            />
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center'>
              <i className='fas fa-arrow-right'></i>
            </button>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#'
              className={`transition-colors duration-300 text-gray-700 hover:text-blue-600`}
            >
              Beranda
            </a>
            <a
              href='#'
              className={`transition-colors duration-300 text-gray-700 hover:text-blue-600`}
            >
              Servis Kami
            </a>
            <a
              href='#'
              className={`transition-colors duration-300 text-gray-700 hover:text-blue-600`}
            >
              Blog
            </a>
            <a
              href='#'
              className={`transition-colors duration-300 text-gray-700 hover:text-blue-600`}
            >
              Pricing
            </a>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors'>
              Login
            </button>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b'>
            <a
              href='#'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600'
            >
              Solutions
            </a>
            <a
              href='#'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600'
            >
              Features
            </a>
            <a
              href='#'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600'
            >
              Resources
            </a>
            <a
              href='#'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600'
            >
              Pricing
            </a>
            <button className='w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
