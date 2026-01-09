'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutDoctor = ({ 
  doctorImage = '/images/abhishek.png'  // Default placeholder image
}) => {
  // Intersection observer hooks for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      x: -20 
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageContainerVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Column - Now on Left */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            {/* Title Section */}
            <motion.div
              ref={titleRef}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text"
                variants={titleVariants}
              >
                Dr. Abhishek Saxena
              </motion.h2>
              <motion.h1 
                className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text"
                variants={subtitleVariants}
              >
                Senior Consultant - Shoulder, Knee & Sport Injuries
              </motion.h1>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              ref={contentRef}
              className="space-y-6 text-gray-700 leading-relaxed"
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.p variants={paragraphVariants}>
                Welcome to the practice of Dr. Abhishek Saxena, a distinguished orthopedic surgeon dedicated to providing exceptional care in the field of orthopedics. Dr. Saxena's academic foundation is built on an MBBS degree from the prestigious MS Ramaiah Medical College, Bangalore. He further honed his expertise by completing his D. Ortho at BMCRI, one of Bangalore's premier institutions, associated with the historic Victoria Hospital.
              </motion.p>

              <motion.p variants={paragraphVariants}>
                Dr. Saxena holds a DNB Ortho from Tejasvini Hospital & SSCOT, Mangalore, where he deepened his knowledge in advanced orthopedic techniques. His commitment to excellence led him to complete a fellowship in joint replacement and arthroscopy under the Indian Orthopaedic Association, guided by the renowned Dr. S.S. Babhulkar.
              </motion.p>

              <motion.p variants={paragraphVariants}>
                With over a decade of experience and more than 500 successful surgeries, Dr. Saxena has earned a reputation for his surgical precision and compassionate patient care. He is currently serving as a consultant orthopedic surgeon at Jeevan Jyoti Hospital, Ajmer, where he continues to transform lives with his expertise in joint replacement and arthroscopic procedures.
              </motion.p>

              <motion.p variants={paragraphVariants}>
                Dr. Abhishek Saxena is dedicated to improving mobility and enhancing the quality of life for his patients through personalized care and advanced treatment options.
              </motion.p>
            </motion.div>
          </div>

          {/* Image Column - Now on Right */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <motion.div
              ref={imageRef}
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              variants={imageContainerVariants}
              className="rounded-lg overflow-hidden shadow-lg bg-[#C3E1F2]"
              whileHover={{ 
                scale: 1.02, 
                shadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={doctorImage}
                alt="Dr. Abhishek Saxena"
                className="w-full h-auto object-fit"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDoctor;