import React, { useState } from "react";
import logo from "../assets/LOGO_IEEE_BVCOE.png"; // replace with your logo path
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-poppins bg-white py-4 px-4 md:px-10 shadow-md shadow-white h-16 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
        </a>

        {/* Menu items for larger screens */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black hover:text-blue">
            Home
          </a>
          <a href="/communities" className="text-black hover:text-blue">
            Communities
          </a>
          <a href="/events" className="text-black hover:text-blue">
            Events
          </a>
          <a href="/achievements" className="text-black hover:text-blue">
            Achievements
          </a>
          <a href="/team" className="text-black hover:text-blue">
            Team
          </a>
          <a href="/about" className="text-black hover:text-blue">
            About
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-black hover:text-blue cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden mt-8 border rounded-lg bg-white p-4 space-y-4">
          <a href="/" className="block text-black hover:text-blue">
            Home
          </a>
          <a href="/communities" className="block text-black hover:text-blue">
            Communities
          </a>
          <a href="/events" className="block text-black hover:text-blue">
            Events
          </a>
          <a href="/achievements" className="block text-black hover:text-blue">
            Achievements
          </a>
          <a href="/team" className="block text-black hover:text-blue">
            Team
          </a>
          <a href="/about" className="block text-black hover:text-blue">
            About
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-black hover:text-blue cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
