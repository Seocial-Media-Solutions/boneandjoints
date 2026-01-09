"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Animations configuration
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Custom arrow components
const CustomRightArrow = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors border border-gray-200 z-10 mr-2"
      aria-label="Next slide"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </motion.button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors border border-gray-200 z-10 ml-2"
      aria-label="Previous slide"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </motion.button>
  );
};

// Custom dot component
const CustomDot = ({ onClick, active }) => {
  return (
    <motion.button
      className={`h-3 w-3 mx-1 rounded-full ${active ? 'bg-blue-600' : 'bg-gray-300'}`}
      onClick={onClick}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
    />
  );
};

// Card Component
const ExpertiseCard = ({ title, description, imageSrc, linkUrl, inView }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center h-full m-2"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300"
          priority={false}
        />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      
      <div className="mt-auto">
        <Link href={linkUrl}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(7, 204, 236, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Read More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

// Main Component
const ExpertiseSection = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [carouselRef, carouselInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const expertiseData = [
    {
      title: "Shoulder Arthroscopy",
      description: "Shoulder arthroscopy is a minimally invasive procedure to diagnose and treat shoulder conditions like rotator cuff tears, impingement syndrome, labral tears, and shoulder instability. It offers effective shoulder pain relief and recovery.",
      imageSrc: "/images/shoulderinjury.webp",
      linkUrl: "/arthroscopy/shoulder-arthroscopy"
    },
    {
      title: "Knee Arthroscopy",
      description: "Knee arthroscopy is a minimally invasive procedure used to treat conditions such as meniscus tears, ligament injuries, and other knee issues. It allows for faster recovery times and effective treatment of knee problems.",
      imageSrc: "/images/kneearthroscopy.jpg",
      linkUrl: "/arthroscopy/knee-arthroscopy"
    },
    {
      title: "Knee Replacement",
      description: "Knee replacement surgery is a solution for chronic knee pain caused by arthritis, injury, or degeneration. Using state-of-the-art technology, it provides long-term relief and improved knee function.",
      imageSrc: "/images/kneereplacement.jpg",
      linkUrl: "/replacement/knee-replacement"
    },
    {
      title: "Knee Injury",
      description: "Treatment for knee injuries, including ACL, PCL, MCL, MPFL, LCL tears, meniscus tears, and fractures, focuses on personalized care to regain mobility and strength for a full recovery.",
      imageSrc: "/images/kneeinjury.webp",
      linkUrl: "/sports-injury/knee-injury"
    },
    {
      title: "Back Injury",
      description: "Treatment for back injuries includes expert care for sports-related injuries, ensuring faster recovery and helping individuals return to their peak performance after hip, ankle, elbow, or wrist injuries.",
      imageSrc: "/images/backinjury.jpg",
      linkUrl: "/sports-injury/back-injury"
    },
    {
      title: "Sprains",
      description: "Sprain treatment includes proper diagnosis and treatment to ensure a quick recovery, whether it's an ankle, wrist, or knee sprain. This specialized care ensures effective relief and rehabilitation.",
      imageSrc: "/images/sprain.jpg",
      linkUrl: "/sports-injury/sprains"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50" ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={fadeInDown}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-black mb-4">Our Expertise</h2>
        <h3 className="text-5xl font-bold">
          <span className="text-black">
            Treatment for Your
          </span>
          <br />
          <span className=" inline-block text-blue-600 bg-clip-text">
            Orthopedic Needs
          </span>
        </h3>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative" ref={carouselRef}>
        <motion.div
          initial="hidden"
          animate={carouselInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style flex justify-center mt-8"
            itemClass="carousel-item-padding-40-px"
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            showDots={true}
            renderDotsOutside={true}
            customDot={<CustomDot />}
          >
            {expertiseData.map((item, index) => (
              <ExpertiseCard 
                key={index} 
                {...item} 
                inView={carouselInView}
              />
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;