'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ReplacementService = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-blue-900 mb-8">
          Advanced Joint Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-justify text-xl max-w-3xl mx-auto mb-12">
          At the heart of our expertise lies a commitment to restoring mobility and eliminating pain through cutting-edge joint replacement techniques. Dr. Abhishek Saxena specializes in <b>Knee and Hip Replacements</b>, offering personalized care and innovative solutions to help you reclaim an active, pain-free life.
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Knee Replacement Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group">
          <div className="relative h-64 md:h-96"> {/* Increased height for desktop */}
            <Image 
              src="/images/kneereplacement.webp" 
              alt="Knee Replacement"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Knee Replacement</h3>
            <p className="text-gray-600 text-justify text-lg mb-6">
              Knee replacement surgery is a transformative procedure for those suffering from severe arthritis, joint damage, or chronic knee pain. Dr. Saxena utilizes advanced techniques to ensure precision, faster recovery, and long-lasting results.
            </p>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Minimally invasive procedures
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Customized implants for a perfect fit
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Reduced recovery time
              </li>
            </ul>
            <Link href="/replacement/knee-replacement">
            <button className="mt-4 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-cyan-400 hover:from-cyan-400 hover:to-blue-900 transition-all duration-300">
              Learn More
            </button>
            </Link>
          </div>
        </motion.div>
        
        {/* Hip Replacement Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group">
          <div className="relative h-64 md:h-96"> {/* Increased height for desktop */}
            <Image 
              src="/images/hip-replacement.webp" 
              alt="Hip Replacement"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-t-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Hip Replacement</h3>
            <p className="text-gray-600 text-lg mb-6 text-justify">
              Hip replacement surgery is designed to alleviate pain and restore mobility for patients with hip arthritis, fractures, or degenerative conditions. Dr. Saxena’s expertise ensures a seamless surgical experience and a quicker return to an active lifestyle.
            </p>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Robotic-assisted precision
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Durable, biocompatible implants
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✔</span> Comprehensive rehabilitation plans
              </li>
            </ul>
            <Link href="/replacement/hip-replacement">
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
        <h3 className="text-4xl font-bold text-blue-900 mb-6">Take the First Step Toward a Pain-Free Life</h3>
        <p className="text-gray-700 text-justify text-xl max-w-2xl mx-auto mb-8">
          If joint pain is holding you back, it’s time to take action. Schedule a consultation with Dr. Abhishek Saxena today and explore how our advanced joint solutions can help you regain your mobility and quality of life.
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

export default ReplacementService;