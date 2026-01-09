'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ArthroscopyService = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-blue-900 mb-8">
          Advanced Arthroscopy Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-justify text-xl max-w-3xl mx-auto mb-12">
          Arthroscopy is a minimally invasive surgical procedure used to diagnose and treat joint problems. Using a small camera called an arthroscope, surgeons can visualize, diagnose, and treat issues within joints with precision and minimal disruption to surrounding tissues. Dr. Abhishek Saxena specializes in <b>Shoulder Arthroscopy</b> and <b>Knee Arthroscopy</b>, offering cutting-edge solutions to restore joint function and alleviate pain.
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-stretch max-w-7xl mx-auto">
        {/* Knee Arthroscopy Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group flex flex-col h-full">
          <div className="relative h-64 md:h-96 flex-shrink-0">
            <Image 
              src="/images/knee-arthroscopy.webp" 
              alt="Knee Arthroscopy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
          <div className="p-8 text-center flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Knee Arthroscopy</h3>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Knee arthroscopy is a minimally invasive procedure used to diagnose and treat a variety of knee conditions, including torn meniscus, ligament injuries, and cartilage damage. Dr. Saxena employs advanced techniques to ensure faster recovery and optimal outcomes.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Minimally invasive with small incisions
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Effective for meniscus and ligament repairs
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Quick recovery and reduced post-operative pain
                </li>
              </ul>
            </div>
            <Link href="/arthroscopy/knee-arthroscopy">
              <button className="mt-4 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
        
        {/* Shoulder Arthroscopy Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group flex flex-col h-full">
          <div className="relative h-64 md:h-96 flex-shrink-0">
            <Image 
              src="/images/shoulder-arthroscopy.webp" 
              alt="Shoulder Arthroscopy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
          <div className="p-8 text-center flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Shoulder Arthroscopy</h3>
              <p className="text-gray-600 text-justify text-lg mb-6">
                Shoulder arthroscopy is a highly effective procedure for treating shoulder conditions such as rotator cuff tears, labral tears, and shoulder instability. Dr. Saxena's expertise ensures precise diagnosis and treatment with minimal downtime.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Ideal for rotator cuff and labral repairs
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Minimally invasive with faster recovery
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> Restores shoulder stability and function
                </li>
              </ul>
            </div>
            <Link href="/arthroscopy/shoulder-arthroscopy">
              <button className="mt-4 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Additional CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 text-center">
        <h3 className="text-4xl font-bold text-blue-900 mb-6">Take the First Step Toward Joint Health</h3>
        <p className="text-gray-700 text-xl max-w-2xl mx-auto text-justify mb-8">
          If joint pain or instability is affecting your daily life, arthroscopy may be the solution. Schedule a consultation with Dr. Abhishek Saxena today to explore how our advanced arthroscopy techniques can help you regain mobility and live pain-free.
        </p>
        <Link href="/bookconsultation">
          <button className="px-10 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
            Book a Consultation
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ArthroscopyService;