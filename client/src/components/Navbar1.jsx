import logo from "../assets/logo-getgoing.png";
import logo1 from "../assets/logoOnly-getgoing.png";
import { Menu, X } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='antialiased'>
      <nav
        className={`fixed z-50 border-gray-200 px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "rounded-full backdrop-blur-lg backdrop-brightness-75 w-11/12 mt-5"
            : "bg-white/90 text-gray-700 backdrop-blur-lg mt-0 w-full"
        }`}
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <a href='#' className='flex mr-4'>
              {scrolled ? (
                <img
                  src={logo1}
                  className='mr-3 h-10 m-10'
                  alt='FlowBite Logo'
                />
              ) : (
                <img
                  src={logo}
                  className='mr-3 h-20 w-52'
                  alt='FlowBite Logo'
                />
              )}
            </a>
            <form action='#' method='GET' className='hidden lg:block lg:pl-2'>
              <label htmlFor='topbar-search' className='sr-only'>
                Search
              </label>
              <div className='relative mt-1 lg:w-96'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'></div>
                <input
                  type='text'
                  placeholder='Cari negara, kota atau guide'
                  className='rounded-full pl-4 pr-16 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-[0_0_10px_3px_rgba(0,0,0,0.5)]'
                />
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                  <i className='fas fa-arrow-right'></i>
                </button>
              </div>
            </form>
          </div>
          <div
            className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:bg-transparent lg:text-red-500 lg:font-bold lg:p-0 dark:text-white'
                  aria-current='page'
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-red-500 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 dark:hover:text-white dark:border-gray-700'
                >
                  Servis Kami
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-red-500 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 dark:hover:text-white dark:border-gray-700'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='lg:tracking-tight lg:font-bold block py-2 pr-4 pl-3 text-black-500 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 dark:hover:text-white dark:border-gray-700'
                >
                  L O G I N
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
