"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureItem = ({ icon, title, description, index, inView }) => (
  <motion.div
    className="flex items-start gap-4"
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ x: 5 }}
  >
    <motion.span 
      className="text-2xl text-cyan-300"
      animate={inView ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
    >
      {icon}
    </motion.span>
    <p className="text-lg">
      <span className="font-semibold text-cyan-300">{title}</span> {description}
    </p>
  </motion.div>
);

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Expertise in Orthopedics:",
      description: "Over 10 years of experience and more than 500 successful surgeries, specializing in joint replacement, arthroscopy, and advanced orthopedic care.",
    },
    {
      title: "Personalized Treatment Plans:",
      description: "Customized care tailored to each patient's unique needs, ensuring effective recovery and optimal outcomes.",
    },
    {
      title: "State-of-the-Art Technology:",
      description: "Utilizing the latest diagnostic tools and treatment methods for precise and efficient results.",
    },
    {
      title: "Minimally Invasive Techniques:",
      description: "Advanced procedures with smaller incisions, reduced pain, and quicker recovery times.",
    },
    {
      title: "Comprehensive Rehabilitation Support:",
      description: "Dedicated guidance through physical therapy and recovery to help patients return to their daily activities with confidence.",
    },
  ];

  return (
    <section 
      className="bg-gradient-to-r from-blue-900 to-cyan-400 py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="w-full md:w-7/12 text-white">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Why Choose<br />Dr. Abhishek Saxena
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p 
                className="text-xl md:text-2xl font-medium mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With a patient-first approach, Dr. Abhishek Saxena offers:
              </motion.p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon="▶"
                    title={feature.title}
                    description={feature.description}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-5/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white p-3 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative h-[600px] w-full overflow-hidden"
                initial={{ borderRadius: '0.5rem' }}
                whileHover={{ borderRadius: '1rem' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/surgery.jpg"
                  alt="Dr. Abhishek Saxena"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-blue-900/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;