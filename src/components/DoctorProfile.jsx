"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
const DoctorProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row items-start gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div
            className="lg:ml-10 lg:w-[30%] w-full"
            variants={imageVariants}
          >
            <div className="rounded-full bg-[#C3E1F2] overflow-hidden">
              <div className="relative w-full" style={{ maxHeight: "650px" }}>
                <Image
                  src="/images/abhishek.png"
                  alt="Dr. Abhishek Saxena"
                  width={650}
                  height={650}
                  priority
                  className="w-full h-auto max-h-[650px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-3/5 space-y-6 sm:mt-20"
            variants={containerVariants}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-blue-600"
              variants={itemVariants}
            >
              Dr. Abhishek Saxena
            </motion.h2>

            <motion.h1
              className="text-3xl md:text-4xl font-semibold text-gray-700"
              variants={itemVariants}
            >
              Orthopedic Surgeon In Ajmer
            </motion.h1>

            <motion.h3
              className="text-2xl text-gray-600 font-medium"
              variants={itemVariants}
            >
              Senior Consultant - Shoulder, Knee & Sport Injuries
            </motion.h3>

            <motion.div
              className="space-y-4 text-gray-600"
              variants={itemVariants}
            >
              <motion.p
                className="leading-relaxed text-lg text-justify"
                variants={itemVariants}
              >
                Welcome to the practice of Dr. Abhishek Saxena, Senior
                Consultant specializing in shoulder, knee, and sports injuries.
                Dr. Abhishek Saxena's academic journey reflects his commitment
                to excellence, starting with an MBBS from the prestigious MS
                Ramaiah Medical College, Bangalore, ranked 3rd in Bangalore by
                India Today in 2024. He further enhanced his expertise with a
                Diploma in Orthopedics from BMCRI, consistently ranked among the
                top 15 institutions in India and affiliated with the historic
                Victoria Hospital, and a DNB in Orthopedics from Tejasvini
                Hospital & SSCOT, one of Karnataka's premier orthopedic centers.
                Dr. Saxena is dedicated to providing world-class orthopedic care
                tailored to individual needs.
              </motion.p>
              <div className="mt-20">
              <Link
                className="bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white px-6  py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
                href={"/about"}
              >
                Read More
              </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorProfile;
