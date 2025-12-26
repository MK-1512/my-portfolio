import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const socialLinks = {
  gmail: "mailto:mktech1512@gmail.com",
  linkedin: "https://www.linkedin.com/in/mk2003/",
  github: "https://github.com/MK-1512",
};

const BackgroundRipples = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gray-200"
          initial={{
            opacity: 0,
            scale: 0,
            x: '50%',
            y: '50%',
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeOut',
          }}
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        website: formData.website,
        message: formData.message,
    };
    try {
      await emailjs.send(
        "service_bp2bf6c", "template_oys42jg", templateParams, "9dwitHbQstcQB5BAA"
      );
      setSubmitStatus('success');
      formRef.current.reset();
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5 relative overflow-hidden py-10'
      id='contact'
    >
      <BackgroundRipples />
      
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
           <form ref={formRef} onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your name' 
              required 
            />
            
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email' 
              required 
            />
            
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder='Your website (If exists)' 
            />
            
            <textarea 
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full' 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='How can I help?*'
              required
            />

            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm font-medium bg-green-50 p-3 rounded border border-green-200"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded border border-red-200"
              >
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                type='submit'
                disabled={isSubmitting}
                className={`justify-center w-fit lg:w-auto lg:flex-1 text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Get In Touch'}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                <motion.a
                  href={socialLinks.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          {/* ... (rest of your existing code for the contact text is unchanged) ... */}
           <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:mktech1512@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              mktech1512@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:1234567890"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +91 6374218503
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}