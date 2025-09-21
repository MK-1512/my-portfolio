// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const socialLinks = {
  gmail: "mailto:mktech1512@gmail.com",
  linkedin: "https://www.linkedin.com/in/mk2003/",
  github: "https://github.com/MK-1512",
};

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 min-h-[calc(100vh-8rem)] px-5 lg:px-28">
        {/* Text Column */}
        <motion.div
          className="w-full lg:w-1/2 lg:mt-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Same left padding rule as Navbar logo so they align */}
          <div className="pl-1 lg:pl-0">
            <motion.div
              className="text-4xl lg:text-4xl xl:text-5xl flex flex-col gap-2 lg:gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2, ease: "easeInOut" },
                },
              }}
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="font-extrabold"
              >
                Hello, I am Mukesh Kumar
                <motion.span
                  className="ml-1 text-black inline-block"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.2,
                    times: [0, 0.5, 0.5, 1],
                  }}
                >
                  |
                </motion.span>
              </motion.h2>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center flex-wrap"
              >
                <span className="font-extrabold">Fullstack</span>{" "}
                <span
                  className="text-white font-extrabold mr-2"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  Developer
                </span>
                <motion.span
                  className="font-bold text-green-600 text-3xl lg:text-4xl"
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  &lt;/&gt;
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-[#71717A] text-base lg:text-lg mt-5 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Aspiring Full-Stack Developer passionate about building scalable web
              applications and creating engaging user experiences. I enjoy solving
              complex problems through code and am constantly learning new skills
              to stay current with industry trends. Eager to apply my knowledge
              and contribute to meaningful projects in a collaborative professional
              environment.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-x-6 mt-10 lg:mt-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.a
                href={socialLinks.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 lg:p-4 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <BiLogoGmail className="w-6 h-6 lg:w-8 lg:h-8" />
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 lg:p-4 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <IoLogoLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
              </motion.a>

              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 lg:p-4 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <BsGithub className="w-6 h-6 lg:w-8 lg:h-8" />
              </motion.a>
            </motion.div>

            {/* Scroll Down */}
            <motion.div
              className="flex justify-center mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.button
                className="flex flex-col items-center text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="text-sm font-medium mb-2">Scroll Down</span>
                <motion.div
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Column (hidden on small screens) */}
        <motion.div
          className="w-full lg:w-1/2 hidden lg:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            className="h-full w-full object-contain"
            src="/assets/hero-vector.png"
            alt="Modern Developer Illustration"
            animate={{
              rotate: [0, 2, -1, 3, -2, 1, 0],
              x: [0, 5, -3, 8, -5, 3, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3, repeatDelay: 4 }}
            style={{ transformOrigin: "bottom center" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
