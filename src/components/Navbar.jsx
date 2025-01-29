import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/LOGO_IEEE_BVCOE.png"; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Communities", path: "/communities" },
    { name: "Events", path: "/events" },
    { name: "Achievements", path: "/achievements" },
    { name: "Team", path: "/team" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "contact", isScroll: true },
  ];

  return (
    <nav className="font-poppins bg-white py-4 px-4 md:px-10 shadow-md shadow-white h-16 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-8 w-auto mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.isScroll && location.pathname === "/" ? (
              <ScrollLink
                key={item.name}
                to={item.path}
                smooth={true}
                duration={500}
                className="text-black hover:text-blue cursor-pointer relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </ScrollLink>
            ) : (
              <Link
                key={item.name}
                to={item.isScroll ? "/#contact" : item.path}
                className={`text-black hover:text-blue relative group ${
                  location.pathname === item.path ? "text-blue" : ""
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full border-t border-gray-200 shadow-lg">
          <div className="p-4 space-y-4">
            {navItems.map((item) =>
              item.isScroll && location.pathname === "/" ? (
                <ScrollLink
                  key={item.name}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  className="block text-black hover:text-blue cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  key={item.name}
                  to={item.isScroll ? "/#contact" : item.path}
                  className="block text-black hover:text-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
