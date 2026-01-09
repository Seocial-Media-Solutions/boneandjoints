'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsComponent = () => {
  const stats = [
    {
      image: "/images/doctor.png", 
      value: "10+",
      label: "Years of Experience"
    },
    {
      image: "/images/love.png", 
      value: "2000+",
      label: "Happy Patients"
    },
    {
      image: "/images/stretcher.png", 
      value: "500+",
      label: "Successful Surgeries"
    },
    {
      image: "/images/trophy.png", 
      value: "50+",
      label: "Winning Awards"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="mb-5"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </motion.div>
              <motion.h2 
                className="text-5xl font-bold text-indigo-600 mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-center text-lg"
                whileHover={{ scale: 1.05 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsComponent;