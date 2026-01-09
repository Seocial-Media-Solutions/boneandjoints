"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactPage = () => {
  // Intersection Observer hooks for different sections
  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [specialtiesRef, specialtiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
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

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Banner with Gradient Text instead of Gradient Background */}
        <motion.div
          ref={bannerRef}
          initial="hidden"
          animate={bannerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
        >
          <div className="md:flex">
            <motion.div variants={fadeInLeft} className="md:w-1/2 p-8">
              <motion.h1
                variants={staggerItem}
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text"
              >
                Expert Orthopedic Care
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-xl text-black mb-6"
              >
                Specialized treatment for all bone and joint conditions with
                personalized care.
              </motion.p>
              <motion.div
                variants={staggerItem}
                className="flex items-center space-x-2 mb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-900 to-cyan-400 p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </motion.div>
                <span className="text-lg font-medium text-black">
                  +91 86182 43967
                </span>
              </motion.div>
              <Link href="/bookconsultation">
                <motion.button
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                >
                  Book Appointment
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="md:w-1/2 flex items-center justify-center p-6"
            >
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="rounded-full bg-[#C3E1F2] overflow-hidden"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-white px-6 py-4 border-b">
              <motion.h2
                variants={staggerItem}
                className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text"
              >
                Contact Information
              </motion.h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              className="p-6"
            >
              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-900 to-cyan-400 p-3 rounded-full mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Address
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat
                      Nagar, Ramganj,
                    </p>
                    <p className="text-gray-600">Ajmer, Rajasthan 305001</p>
                  </div>
                </motion.div>

                {/* Phone (click to WhatsApp) */}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  className="flex items-start cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://wa.me/918618243967?text=Hi%20Dr.%20Saxena%2C%20I%20have%20a%20question%20about%20your%20orthopedic%20services",
                      "_blank"
                    )
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-blue-900 to-cyan-400 p-3 rounded-full mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600 mt-1">+91 8618243967</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  onClick={() =>
                    (window.location.href =
                      "mailto:abhishek.saxena1120@gmail.com")
                  }
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-900 to-cyan-400 p-3 rounded-full mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600 mt-1">
                      abhishek.saxena1120@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="bg-gradient-to-r from-blue-900 to-cyan-400 p-3 rounded-full mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Consultation Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 10:00 AM & 2:00 PM – 8:30 PM
                    </p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 12:00 PM</p>
                    <p className="text-gray-600">Wednesday: Closed</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-white px-6 py-4 border-b">
              <motion.h2
                variants={staggerItem}
                className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text"
              >
                Location
              </motion.h2>
            </div>
            <div className="p-6">
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="w-full h-80 rounded-lg overflow-hidden shadow-md"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.852038934999!2d74.63355337520677!3d26.428250976939314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be775a44a2b01%3A0xd3a07ca87944433e!2sDr%20Abhishek%20Saxena%20-%20Orthopedic%20Surgeon%20In%20Ajmer%2C%20Bones%20and%20Joints%20Specialist!5e0!3m2!1sen!2sin!4v1740477286498!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>

              {/* Specialties - Made fully responsive */}
              <motion.div
                ref={specialtiesRef}
                initial="hidden"
                animate={specialtiesInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="mt-8"
              >
                <motion.h3
                  variants={staggerItem}
                  className="text-xl font-semibold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4"
                >
                  Our Specialties
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href={"/replacement"}>
                    <motion.div
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800 cursor-pointer"
                    >
                      <div className="font-medium text-blue-900">
                        Joint Replacement
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Hip, knee and shoulder replacements
                      </p>
                    </motion.div>
                  </Link>
                  <Link href={"/sports-injury"}>
                    <motion.div
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800 cursor-pointer"
                    >
                      <div className="font-medium text-blue-900">
                        Sports Injuries
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        ACL, meniscus and rotator cuff repair
                      </p>
                    </motion.div>
                  </Link>
                  <Link href={"/sports-injury/back-injury"}>
                    <motion.div
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800 cursor-pointer"
                    >
                      <div className="font-medium text-blue-900">
                        Spine Surgery
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Disc replacement and spinal fusion
                      </p>
                    </motion.div>
                  </Link>
                  <Link href={"/arthroscopy"}>
                    <motion.div
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      }}
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800 cursor-pointer"
                    >
                      <div className="font-medium text-blue-900">
                        Trauma Care
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Fracture treatment and rehabilitation
                      </p>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
