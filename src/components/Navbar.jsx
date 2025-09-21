// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-5 lg:px-28">
        {/* Logo aligned with Home text (same padding rule) */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer flex items-center pl-1 lg:pl-0"
        >
          <span className="bg-black text-white py-1 px-2 rounded-md mr-2">MK</span>
          <span>Portfolio</span>
        </div>

        {/* Desktop Nav Links */}
        <ul
          className="hidden lg:flex items-center justify-between w-1/2 max-w-md font-semibold"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative px-3 py-2 rounded-full"
              onMouseEnter={() => setHoveredLink(link)}
            >
              {hoveredLink === link && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <button
                onClick={() => scrollToSection(link)}
                className="relative z-10 transition-colors duration-200"
              >
                <span className={hoveredLink === link ? "text-white" : "text-black"}>
                  {link}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          href="#"
          className="hidden lg:flex items-center gap-x-2 px-5 py-2 border-2 border-black font-semibold text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume <TbDownload />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.15 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed top-0 left-0 h-screen w-full bg-white shadow-lg"
          >
            <button
              className="absolute top-8 right-5 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-center justify-center h-full gap-y-8 font-semibold text-2xl">
              {navLinks.map((link) => (
                <motion.li key={link} whileHover={{ scale: 1.05 }}>
                  <button onClick={() => scrollToSection(link)}>{link}</button>
                </motion.li>
              ))}

              <motion.a
                href="#"
                className="flex items-center gap-x-3 px-6 py-3 mt-4 border-2 border-black font-semibold text-black bg-white hover:bg-black hover:text-white transition-colors duration-300 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Resume <TbDownload />
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
