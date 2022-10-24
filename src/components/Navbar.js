import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="w-full h-20 px-6 flex justify-between items-center fixed top-0 left-0 bg-white z-50 border-b-2 border-gray-400">
      <div className="">
        <Link
          to="/"
          className="font-bold text-3xl md:text-3xl text-gray-900 font-serif focus:outline-none"
        >
          Q.
          <span className="font-bold text-gray-800 font-whisper italic">
            Blog
          </span>
        </Link>
      </div>
      <nav
        ref={navRef}
        className="flex bg-slate-100 md:bg-white md:flex-row justify-center items-center md:justify-start md:items-center z-40 md:z-0 md:static fixed top-0 left-0 w-full md:w-auto h-full md:h-auto flex-col gap-8"
      >
        <Link
          to="/"
          onClick={showNavBar}
          className={`text-md text-gray-700 font-roboto uppercase relative transition-all duration-300 before:content-[""] before:w-0 before:bg-gray-700 before:absolute before:bottom-0 before:left-0 before:h-pseudo font-bold after:content-[""] after:absolute after:w-0 after:-z-10 after:h-6 after:transition-all after:duration-300 after:bg-gray-700 after:-left-1 after:bottom-0 hover:first-letter:text-white hover:after:w-6 flex items-center gap-1 group ${
            location.pathname === "/" ? "before:w-full " : ""
          }`}
        >
          <i class="ri-home-7-line group-hover:text-white transition duration-300"></i>
          <span>Home</span>
        </Link>

        <Link
          to="/blog"
          onClick={showNavBar}
          className={`text-md text-gray-700 font-roboto uppercase relative transition duration-300 before:content-[""] before:w-0 before:bg-gray-700 before:absolute before:bottom-0 before:left-0 before:h-pseudo font-bold after:content-[""] after:absolute after:w-0 after:-z-10 after:h-6 after:transition-all after:duration-300 after:bg-gray-700 after:-left-1 after:bottom-0 hover:first-letter:text-white  hover:after:w-6 flex items-center gap-1 group ${
            location.pathname === "/blog" ? "before:w-full " : ""
          }`}
        >
          <i class="ri-quill-pen-line group-hover:text-white transition duration-300"></i>
          <span>Blog</span>
        </Link>

        <Link
          to="/books"
          onClick={showNavBar}
          className={`text-md text-gray-700 font-roboto uppercase relative transition duration-300 before:content-[""] before:w-0 before:bg-gray-700 before:absolute before:bottom-0 before:left-0  before:h-pseudo font-bold after:content-[""] after:absolute after:w-0 after:-z-10 after:h-6 after:transition-all after:duration-300 after:bg-gray-700 after:-left-1 after:bottom-0 hover:first-letter:text-white  hover:after:w-6 flex items-center gap-1 group ${
            location.pathname === "/books" ? "before:w-full" : ""
          }`}
        >
          <i class="ri-book-3-line group-hover:text-white transition duration-300"></i>
          <span>Books</span>
        </Link>

        <Link
          to="/about"
          onClick={showNavBar}
          className={`text-md text-gray-700 font-roboto uppercase relative transition duration-300 before:content-[""] before:w-0 before:bg-gray-700 before:absolute before:bottom-0 before:left-0  before:h-pseudo font-bold after:content-[""] after:absolute after:w-0 after:-z-10 after:h-6 after:transition-all after:duration-300 after:bg-gray-700 after:-left-1 after:bottom-0 hover:first-letter:text-white  hover:after:w-6 flex items-center gap-1 group ${
            location.pathname === "/about" ? "before:w-full" : ""
          }`}
        >
          <i class="ri-team-line group-hover:text-white transition duration-300"></i>
          <span>About</span>
        </Link>

        <Link
          to="/contact-us"
          onClick={showNavBar}
          className={`text-md text-gray-700 font-roboto uppercase relative transition duration-300 before:content-[""] before:w-0 before:bg-gray-700 before:absolute before:bottom-0 before:left-0 before:h-pseudo font-bold after:content-[""] after:absolute after:w-0 after:-z-10 after:h-6 after:transition-all after:duration-300 after:bg-gray-700 after:-left-1 after:bottom-0 hover:first-letter:text-white  hover:after:w-6 flex items-center gap-1 group ${
            location.pathname === "/contact-us" ? "before:w-full" : ""
          }`}
        >
          <i class="ri-map-pin-user-line group-hover:text-white transition duration-300"></i>
          <span>Contact Us</span>
        </Link>

        <button
          className="text-4xl text-gray-900 cursor-pointer md:hidden absolute right-8 top-6"
          onClick={showNavBar}
        >
          <i className="ri-close-fill"></i>
        </button>
      </nav>
      <button
        className="text-3xl text-gray-900 cursor-pointer md:invisible visible"
        onClick={showNavBar}
      >
        <i className="ri-menu-3-fill"></i>
      </button>
    </header>
  );
};

export default Navbar;
