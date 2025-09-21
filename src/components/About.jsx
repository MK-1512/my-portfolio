import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center gap-8 lg:gap-16" id="about">
      <motion.div
        className="lg:w-1/2 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        {/* Main Image with subtle bob animation */}
        <motion.img 
          src="/assets/about-me.png" 
          alt="About Me Developer Illustration"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.5, -0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Code Particles */}
        <motion.div
          className="absolute top-16 left-8 text-green-500 text-xl font-mono"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          console.log()
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-16 text-blue-500 text-lg font-mono"
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.9, 0.3],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          function()
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-12 text-purple-500 text-lg font-mono"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          return
        </motion.div>
        
        {/* Typing indicator - simulates active coding */}
        <motion.div
          className="absolute bottom-1/3 right-1/3 flex items-center gap-1"
          animate={{
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
          <motion.div 
            className="w-1 h-1 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="w-1 h-1 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
          ></motion.div>
          <motion.div 
            className="w-1 h-1 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        {/* Glowing screen effect */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-10 bg-blue-400 opacity-20 blur-sm rounded"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        {/* The paragraphs below now have improved styling */}
        <p className="text-gray-600 text-justify text-lg leading-relaxed mt-5 lg:mt-10">
          <span className="text-5xl font-bold float-left mr-3">A</span>s a Full-Stack Developer, I build the bridges between user experience and technology. I enjoy creating seamless digital experiences with frontend tools like <strong>React</strong>, ensuring every interaction is intuitive. At the same time, I architect the powerful backend systems using <strong>Python</strong> and <strong>SQL</strong> that make it all possible.
        </p>

        <p className="text-gray-600 text-justify text-lg leading-relaxed mt-6">
          My professional journey began during my internship as a <strong>Frontend Developer</strong>, where I translated academic knowledge into practical skills. I gained hands-on experience building website content, implementing responsive design from the ground up, and contributing to the maintenance of user-friendly web applications. This experience solidified my passion for creating clean, maintainable code.
        </p>

        <p className="text-gray-600 text-justify text-lg leading-relaxed mt-6">
          I am a dedicated learner, committed to honing my craft and staying current with industry trends. I am actively seeking an opportunity to apply my skills to real-world challenges, collaborate with a passionate team, and build applications that people love to use. Feel free to explore my projects on <strong>GitHub</strong>.
        </p>
      </motion.div>
    </div>
  );
}