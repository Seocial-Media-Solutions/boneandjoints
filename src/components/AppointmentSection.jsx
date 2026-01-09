'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppointmentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  const benefits = [
    "Personalized care tailored to your specific needs",
    "Advanced treatment options for bone and joint concerns",
    "Customized recovery plans for lasting health",
    "Flexible payment plans available",
    "Expert care for sports injuries and arthritis"
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const benefitVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      rotateY: -15,
      scale: 0.8
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  const infoBoxVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      y: 40,
      rotateZ: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    },
    hover: {
      scale: 1.08,
      y: -3,
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95,
      y: 0
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 py-8 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <motion.div
        className="max-w-4xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header - Enhanced with 3D effects */}
        <motion.div 
          className="text-center space-y-2 mb-6"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            variants={titleVariants}
            style={{ perspective: "1000px" }}
          >
            <motion.span
              variants={floatingVariants}
              animate="animate"
              className="inline-block"
            >
              Book Your Consultation with
            </motion.span>
            <motion.span 
              className="block mt-1"
              variants={titleVariants}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
              }}
            >
              Dr. Abhishek Saxena
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl font-semibold text-cyan-100"
            variants={headerVariants}
            whileHover={{
              scale: 1.02,
              color: "#ffffff"
            }}
          >
            Orthopedic Surgeon
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-cyan-50 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Ready to restore your active, pain-free lifestyle? Schedule your appointment today.
          </motion.p>
        </motion.div>
        
        {/* Benefits - Enhanced with 3D transforms */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300"
              variants={benefitVariants}
              custom={index}
              whileHover={{ 
                x: 10,
                scale: 1.02,
                backgroundColor: "rgba(30, 64, 175, 0.3)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span 
                className="text-cyan-300 text-xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
                whileHover={{ 
                  rotate: 180,
                  scale: 1.3,
                  color: "#ffffff"
                }}
              >
                ▶
              </motion.span>
              <p className="text-cyan-50 text-base md:text-lg">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Info Section - Enhanced with pulsing effect */}
        <motion.div 
          className="text-center mb-6 bg-blue-800/20 py-2 px-4 rounded-lg"
          variants={infoBoxVariants}
          whileHover={{ 
            backgroundColor: "rgba(30, 64, 175, 0.4)",
            scale: 1.02,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.p 
            className="text-base md:text-lg text-cyan-100"
            variants={pulseVariants}
            animate="animate"
          >
            Available Monday-Saturday | Emergency services 24/7
          </motion.p>
        </motion.div>
        
        {/* CTA Button - Enhanced with magnetic effect */}
        <motion.div 
          className="text-center"
        >
          <Link href="/bookconsultation">
            <motion.button 
              className="inline-flex items-center px-6 py-2 text-base md:text-lg font-semibold text-blue-900
                        bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50
                        shadow-lg relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              
              <motion.div
                animate={{ 
                  rotate: inView ? [0, 15, -15, 0, 360] : 0,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                className="relative z-10"
              >
                <Calendar className="w-5 h-5 mr-2" />
              </motion.div>
              <span className="relative z-10">Book Consultation</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppointmentSection;