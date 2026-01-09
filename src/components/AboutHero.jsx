"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = ({
  bannerImage = "/api/placeholder/1920/600",
  title = "Dr. Abhishek Saxena",
  subtitle = "Dedicated to excellence in medical care and research",
  breadcrumbs = breadcrumbs,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
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
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative w-full mt-4" ref={ref}>
      {/* Banner Image Container */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Image with parallax effect */}
        <motion.img
          src={bannerImage}
          alt={`${title} Banner`}
          className="w-full h-full object-cover"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Overlay */}
        <motion.div
          className="absolute inset-0 "
          variants={overlayVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />

        {/* Content Container */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Title with enhanced animation */}
          <motion.h2
            className="text-xl md:text-5xl lg:text-6xl font-bold mb-4 text-center rounded-lg p-2  bg-[#265ababe] text-white  "
            variants={titleVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {title}
          </motion.h2>

          {/* Subtitle with typewriter effect simulation */}
          <motion.p
            className=" backdrop-blur-4xl md:text-2xl sm:text-sm text-center font-semibold max-w-2xl  px-1 rounded-lg mb-6 text-white drop-shadow-md   bg-[#265ababe] "
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>

          {/* Enhanced Breadcrumb Navigation */}
          <motion.div
            className="flex items-center justify-center sm:text-10  text-lg font-semibold bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20"
            variants={breadcrumbVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <motion.a
                  href={crumb.path}
                  className="text-gray-800 hover:text-cyan-600 transition-colors duration-200"
                  whileHover={{
                    scale: 1.1,
                    color: "#0891b2",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {crumb.label}
                </motion.a>
                {index < breadcrumbs.length - 1 && (
                  <motion.span
                    className="text-gray-600 font-bold"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      },
                    }}
                  ></motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements for Visual Interest */}
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-50"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default AboutHero;
