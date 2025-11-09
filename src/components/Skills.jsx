import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

// Data for the skill icons grid with colors
const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 size={50} />, color: "#e34c26", bgColor: "#fff5f5" },
  { id: 2, name: "CSS", icon: <FaCss3Alt size={50} />, color: "#1572b6", bgColor: "#f0f9ff" },
  { id: 3, name: "JavaScript", icon: <FaJs size={50} />, color: "#f7df1e", bgColor: "#fffbeb" },
  { id: 4, name: "Bootstrap", icon: <FaBootstrap size={50} />, color: "#7952b3", bgColor: "#faf5ff" },
  { id: 5, name: "React", icon: <FaReact size={50} />, color: "#61dafb", bgColor: "#f0fdff" },
  { id: 6, name: "Python", icon: <FaPython size={50} />, color: "#3776ab", bgColor: "#f8fafc" },
  { id: 7, name: "SQL", icon: <FaDatabase size={50} />, color: "#336791", bgColor: "#f1f5f9" },
];

// Data for your experience section
const experiences = [
  {
    id: 1,
    company: "RR IT Solutions",
    role: "Frontend Project Trainee",
    period: "Present",
    description:
      "Developed reusable and responsive UI components using React.js, JavaScript, HTML, and CSS. Implemented client-side routing and state management using React Hooks. Integrated API responses for dynamic content rendering and collaborated in code reviews to improve UI performance.",
    logo: "/assets/rr-it-logo.png", // NOTE: This is a placeholder path
  },
  {
    id: 2,
    company: "INVENTROM",
    role: "Frontend Developer Intern",
    period: "May 2024 - July 2024",
    description:
      "During my internship, I built website content and designs using HTML, CSS, and JavaScript. I also implemented responsive design principles to ensure websites were mobile-friendly and assisted in developing and maintaining user-friendly sites.",
    logo: "/assets/inventrom-logo.png",
  },
  {
    id: 3,
    company: "SmartKnower",
    role: "Web Development Intern",
    period: "Apr 2022 - May 2022",
    description:
      "Completed an intensive internship focused on foundational web development. Gained practical experience in building and styling web pages using HTML and CSS, and learned to implement interactive features with JavaScript. This role helped build a strong base for my full-stack development skills.",
    logo: "/assets/smartknower-logo.png",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activePhase, setActivePhase] = useState(0);
  
  // Skills data for the Tech Universe Animation
  const skillsData = [
    { name: "HTML", pos: { x: 20, y: 30 }, connections: [1, 2, 3] },
    { name: "CSS", pos: { x: 40, y: 20 }, connections: [0, 2, 3] },
    { name: "JavaScript", pos: { x: 60, y: 35 }, connections: [0, 1, 3, 4] },
    { name: "Bootstrap", pos: { x: 30, y: 60 }, connections: [0, 1, 2] },
    { name: "React", pos: { x: 70, y: 50 }, connections: [2, 5, 6] },
    { name: "Python", pos: { x: 80, y: 75 }, connections: [4, 6] },
    { name: "SQL", pos: { x: 50, y: 80 }, connections: [4, 5] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Tech Universe Animation */}
        <div className="relative w-full h-96 mx-auto my-16 lg:my-20 bg-gradient-to-br from-black via-gray-900 to-green-900/30 rounded-2xl overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-green-500/20"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
              animate={{ 
                x: [0, Math.random() * 200 - 100], 
                y: [0, Math.random() * 200 - 100], 
                opacity: [0.2, 0.8, 0.2], 
                scale: [1, 1.5, 1] 
              }}
              transition={{ 
                duration: Math.random() * 8 + 4, 
                repeat: Infinity, 
                delay: Math.random() * 3 
              }}
              style={{ 
                left: `${20 + Math.random() * 60}%`, 
                top: `${20 + Math.random() * 60}%` 
              }}
            />
          ))}

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
            <AnimatePresence mode="wait">
              {activePhase === 0 && (
                <motion.div 
                  key="welcome" 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.8 }} 
                  className="text-center"
                >
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-4" 
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(74, 222, 128, 0.5)", 
                        "0 0 20px rgba(74, 222, 128, 0.8)", 
                        "0 0 10px rgba(74, 222, 128, 0.5)"
                      ] 
                    }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Welcome to My Tech Universe
                  </motion.h3>
                  <motion.div 
                    className="flex space-x-2 justify-center" 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div 
                        key={i} 
                        className="w-3 h-3 bg-green-400 rounded-full" 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
                        transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }} 
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
              
              {activePhase === 1 && (
                <motion.div 
                  key="constellation" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="relative w-full h-full max-w-2xl"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {skillsData.map((skill, index) =>
                      skill.connections.map((connectionIndex) => (
                        <motion.line
                          key={`${index}-${connectionIndex}`}
                          x1={skill.pos.x}
                          y1={skill.pos.y}
                          x2={skillsData[connectionIndex].pos.x}
                          y2={skillsData[connectionIndex].pos.y}
                          stroke="rgba(74, 222, 128, 0.6)"
                          strokeWidth="0.2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      ))
                    )}
                    {skillsData.map((skill, index) => (
                      <motion.g key={skill.name}>
                        <motion.circle
                          cx={skill.pos.x}
                          cy={skill.pos.y}
                          r="2"
                          fill="rgb(74, 222, 128)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.3, duration: 0.6 }}
                        />
                        <motion.text
                          x={skill.pos.x}
                          y={skill.pos.y - 3}
                          textAnchor="middle"
                          className="fill-white text-xs font-semibold"
                          initial={{ opacity: 0, y: skill.pos.y }}
                          animate={{ opacity: 1, y: skill.pos.y - 3 }}
                          transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                        >
                          {skill.name}
                        </motion.text>
                      </motion.g>
                    ))}
                  </svg>
                  
                  <motion.p
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-200 text-sm font-mono text-right w-24"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    Skills interconnected in perfect harmony
                  </motion.p>
                </motion.div>
              )}
              
              {activePhase === 2 && (
                <motion.div 
                  key="code" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="font-mono text-green-400 text-sm w-full max-w-lg"
                >
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 ml-2 text-xs">developer-skills.js</span>
                    </div>
                    <motion.div className="space-y-2">
                      {[
                        "const skills = {",
                        "  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],",
                        "  styling: ['Bootstrap'],",
                        "  backend: ['Python', 'SQL'],",
                        "  passion: 'Building amazing experiences'",
                        "}"
                      ].map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "100%", opacity: 1 }}
                          transition={{ delay: index * 0.5, duration: 0.8 }}
                          className="overflow-hidden whitespace-nowrap"
                        >
                          <span className="text-gray-300">{line}</span>
                          <motion.span
                            className="border-r-2 border-green-400 ml-1"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          >
                            |
                          </motion.span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
              
              {activePhase === 3 && (
                <motion.div 
                  key="summary" 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  className="text-center"
                >
                  <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    {['Frontend', 'Api', 'Backend', 'Database'].map((category, index) => (
                      <motion.div
                        key={category}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 }
                        }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      >
                        <h4 className="text-white font-semibold text-md mb-2">{category}</h4>
                        <motion.div
                          className="h-2 bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.p
                    className="text-white/80 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Ready to bring ideas to life through code
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[0, 1, 2, 3].map((phase) => (
                <motion.div
                  key={phase}
                  className={`w-2 h-2 rounded-full ${
                    activePhase === phase ? 'bg-green-400' : 'bg-white/30'
                  }`}
                  animate={{
                    scale: activePhase === phase ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative border-2 border-gray-300 rounded-xl p-4 h-36 w-36 flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden group"
              style={{ 
                backgroundColor: hoveredSkill === skill.id ? skill.bgColor : 'white'
              }}
              initial={{ opacity: 0, y: 20, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -10,
                rotateY: 10,
                scale: 1.05
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20"
                style={{ backgroundColor: skill.color }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Particles */}
              {hoveredSkill === skill.id && (
                <>
                  <motion.div
                    className="absolute w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    animate={{
                      x: [0, 20, -20, 0],
                      y: [0, -30, 30, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute w-1 h-1 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    animate={{
                      x: [0, -25, 25, 0],
                      y: [0, 20, -20, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </>
              )}

              {/* Icon with Color Animation */}
              <motion.div
                style={{ color: hoveredSkill === skill.id ? skill.color : '#666' }}
                animate={{
                  rotate: hoveredSkill === skill.id ? [0, -10, 10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <motion.p 
                className="text-sm font-semibold"
                style={{ color: hoveredSkill === skill.id ? skill.color : '#333' }}
              >
                {skill.name}
              </motion.p>

              {/* Progress Ring */}
              <motion.div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Updated Experience Section with Enhanced Animations */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                x: [0, Math.random() * 100],
                y: [0, Math.random() * 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-gray-900 p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, x: -50, rotateX: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                borderColor: "#3b82f6"
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center relative z-10">
                <div className="flex items-center gap-5">
                  <motion.img 
                    className="w-24 h-16 bg-white rounded-lg p-2 object-contain" 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <motion.span 
                  className="text-gray-400 font-semibold text-sm mt-4 lg:mt-0 lg:text-base px-3 py-1 bg-gray-800 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.period}
                </motion.span>
              </div>
              <p className="text-gray-300 mt-6 text-sm/6 lg:text-base font-light relative z-10">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}