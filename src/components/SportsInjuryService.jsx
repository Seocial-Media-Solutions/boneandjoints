// SportsInjuryService.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SportsInjuryService = () => {
  const serviceCards = [
    {
      title: "Sprains",
      image: "/images/sprains.webp",
      description: "Sprains are common injuries that occur when ligaments are stretched or torn, often affecting the ankles, wrists, or knees. Dr. Abhishek Saxena provides effective treatment plans to reduce pain, promote healing, and prevent future injuries.",
      features: [
        "Immediate pain relief and swelling reduction",
        "Customized rehabilitation programs",
        "Prevention strategies for future injuries"
      ],
      animation: { x: -50 },
      path: "/sports-injury/sprains"
    },
    {
      title: "Back Injuries",
      image: "/images/back-injuries.webp",
      description: "Back injuries, such as muscle strains, herniated discs, or spinal fractures, can significantly impact mobility and quality of life. Dr. Abhishek Saxena offers advanced diagnostic tools and tailored treatment plans to restore function and alleviate pain.",
      features: [
        "Non-surgical and surgical options",
        "Physical therapy and strengthening exercises",
        "Long-term pain management strategies"
      ],
      animation: { y: 50 },
      path: "/sports-injury/back-injury"
    },
    {
      title: "Knee Injuries",
      image: "/images/knee-injuries.webp",
      description: "Knee injuries, such as ACL tears, meniscus tears, or patellar dislocations, are common among athletes. Dr. Abhishek Saxena specializes in advanced treatments to restore knee stability, function, and performance.",
      features: [
        "Minimally invasive surgical techniques",
        "Customized rehabilitation plans",
        "Faster recovery and return to sports"
      ],
      animation: { x: 50 },
      path: "/sports-injury/knee-injury"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-16 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-8"
        >
          Comprehensive Sports Injury Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-justify text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4"
        >
          Sports injuries can sideline athletes and active individuals, affecting their performance and quality of life. Dr. Abhishek Saxena specializes in diagnosing and treating a wide range of sports-related injuries, including <b>Sprains</b>, <b>Back Injuries</b>, and <b>Knee Injuries</b>. With a focus on personalized care and advanced treatment options, we help you recover faster and return to your active lifestyle.
        </motion.p>
      </div>
      
      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto px-4">
        {serviceCards.map((card, index) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, ...card.animation }} 
            whileInView={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg md:shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
          >
            <div className="relative h-48 md:h-64 lg:h-96 flex-shrink-0">
              <Image 
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-4 md:p-8 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">{card.title}</h3>
                <p className="text-gray-600 text-justify text-base md:text-lg mb-4 md:mb-6">
                  {card.description}
                </p>
                <ul className="text-left text-gray-600 mb-4 md:mb-6 space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm md:text-base">
                      <span className="text-cyan-500 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={card.path}>
                <button className="w-full md:w-auto mt-4 px-6 md:px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-20 text-center px-4"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
          Take the First Step Toward Recovery
        </h3>
        <p className="text-gray-700 text-justify text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8">
          If a sports injury is keeping you from doing what you love, don't wait. Schedule a consultation with Dr. Abhishek Saxena today and explore how our advanced treatment options can help you recover and get back in the game.
        </p>
        <Link href="/contact">
          <button className="w-full md:w-auto px-6 md:px-10 py-3 md:py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
            Book a Consultation
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default SportsInjuryService;