"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const procedures = {
    'Slap Tears': {
      title: 'Slap Tears',
      description: 'A SLAP tear (Superior Labrum Anterior and Posterior) is an injury to the ring of cartilage surrounding the shoulder socket. This injury commonly occurs in athletes who perform overhead throwing motions and can cause pain, clicking, and reduced range of motion in the shoulder.',
      image: '/images/slap-tears.png',
      slug: '/conditions/slaptears'
    },
    'Knee Arthroscopy': {
      title: 'Knee Arthroscopy',
      description: 'Knee arthroscopy is a minimally invasive surgical procedure used to diagnose and treat various knee problems. Using small incisions and specialized instruments, surgeons can repair torn meniscus, reconstruct ligaments, and remove damaged cartilage with minimal tissue disruption.',
      image: '/images/knee-arthroscopy.webp',
      slug: '/arthroscopy/knee-arthroscopy'
    },
    'Knee Replacement': {
      title: 'Knee Replacement',
      description: 'Total knee replacement surgery involves replacing damaged knee joints with artificial components. This procedure is typically recommended for severe arthritis or significant knee damage, helping to relieve pain and restore mobility to the knee joint.',
      image: '/images/kneereplacement.webp',
      slug: '/replacement/knee-replacement'
    },
    'ACL Injury': {
      title: 'ACL Injury',
      description: 'The Anterior Cruciate Ligament (ACL) is crucial for knee stability. ACL injuries commonly occur during sudden stops, direction changes, or landing awkwardly from jumps. Treatment may involve reconstruction surgery using a graft to restore knee stability and function.',
      image: '/images/acl-injury.png',
      slug: '/conditions/acl-injury'
    },
    'PCL Injury': {
      title: 'PCL Injury',
      description: 'The Posterior Cruciate Ligament (PCL) prevents the shin bone from moving too far backward. PCL injuries typically occur from direct impact to the front of the knee. While some heal with conservative treatment, severe tears may require surgical reconstruction.',
      image: '/images/pcl-injury.png',
      slug: '/conditions/pcl-injury'
    },
    'Meniscus Injury': {
      title: 'Meniscus Injury',
      description: 'The meniscus is cartilage that acts as a shock absorber in your knee. Tears can occur from twisting movements or degenerative changes. Treatment options range from conservative management to arthroscopic repair, depending on the tear type and location.',
      image: '/images/meniscus-injury.png',
      slug: '/conditions/meniscus-injury'
    },
    'MPFL/MCL/LCL Injury': {
      title: 'MPFL/MCL/LCL Injury',
      description: 'These ligaments provide stability to different areas of the knee. The Medial Patellofemoral Ligament (MPFL) stabilizes the kneecap, while the Medial and Lateral Collateral Ligaments (MCL/LCL) provide side stability. Treatment varies based on injury severity.',
      image: '/images/lcl-injury.png',
      slug: '/conditions/mpfl-mcl-lcl-injury'
    },
    'Shoulder Arthroscopy': {
      title: 'Shoulder Arthroscopy',
      description: 'Shoulder arthroscopy is a minimally invasive procedure used to diagnose and treat various shoulder problems. This surgical technique involves small incisions and specialized instruments, allowing quicker recovery and less post-operative pain compared to traditional open surgery.',
      image: '/images/shoulder-arthroscopy.webp',
      slug: '/arthroscopy/shoulder-arthroscopy'
    },
    'Shoulder Replacement': {
      title: 'Shoulder Replacement',
      description: 'Shoulder replacement surgery involves replacing damaged parts of the shoulder joint with artificial components. This procedure is typically performed to treat severe arthritis or complex fractures, helping to reduce pain and improve shoulder function.',
      image: '/images/shoulder-replacement.webp',
      slug: '/replacement/shoulder-replacement'
    },
    'Recurrent Shoulder Dislocation': {
      title: 'Recurrent Shoulder Dislocation',
      description: 'This condition occurs when the shoulder repeatedly slips out of its socket, often due to ligament or labral damage. Treatment may involve arthroscopic surgery to repair damaged tissues and stabilize the joint, preventing future dislocations.',
      image: '/images/recurrent-shoulder.webp',
      slug: '/conditions/recurrent-shoulder-dislocation'
    },
    'Rotator Cuff Tear': {
      title: 'Rotator Cuff Tear',
      description: 'The rotator cuff is a group of muscles and tendons that stabilize the shoulder. Tears can occur from injury or degeneration over time, causing pain and weakness. Treatment options range from physical therapy to surgical repair depending on tear severity.',
      image: '/images/cuff-tear.png',
      slug: '/conditions/rotator-cuff-tear'
    },
    'Injuries around Shoulder': {
      title: 'Injuries around Shoulder',
      description: 'This encompasses various conditions affecting the shoulder region, including bursitis, tendinitis, frozen shoulder, and AC joint injuries. Treatment approaches are tailored to the specific condition and may include conservative care or surgical intervention.',
      image: '/images/injury-shoulder.jpg',
      slug: '/conditions/injuries-around-shoulder'
    },
    'Cartilage Injury': {
      title: 'Cartilage Injury',
      description: 'Cartilage injuries can occur in various joints and affect the smooth surface that cushions bone movement. Treatment options include microfracture, cartilage transplantation, or other advanced techniques to restore joint surface integrity.',
      image: '/images/cartilage-injury.jpg',
      slug: '/conditions/cartilage-injury'
    },
    'ATFL Tear': {
      title: 'ATFL Tear',
      description: 'The Anterior Talofibular Ligament (ATFL) is commonly injured during ankle sprains. This ligament stabilizes the ankle joint, and severe tears may require surgical repair to restore stability and prevent chronic ankle instability.',
      image: '/images/atfl-injury.jpg',
      slug: '/conditions/atfl-tear'
    },
    'Tennis Elbow': {
      title: 'Tennis Elbow',
      description: 'Tennis elbow (lateral epicondylitis) is an overuse injury affecting the tendons that attach to the outer elbow. Despite its name, it can affect anyone who performs repetitive arm movements. Treatment typically begins with conservative measures but may require surgery in persistent cases.',
      image: '/images/tennis-elbow.jpg',
      slug: '/conditions/tennis-elbow'
    },
    'Golfer Elbow': {
      title: 'Golfer Elbow',
      description: 'Golfer elbow medial epicondylitis affects the tendons on the inner side of the elbow. It caused by repetitive wrist and arm motions and can affect anyone, not just golfers. Treatment ranges from rest and physical therapy to surgical intervention in severe cases.',
      image: '/images/golfers-elbow.jpg',
      slug: '/conditions/golfer-elbow'
    },
    'Hip Labral Tear': {
      title: 'Hip Labral Tear',
      description: 'The hip labrum is a ring of cartilage that helps secure the hip joint. Tears can result from trauma, repetitive movements, or structural abnormalities. Treatment may include arthroscopic repair to restore normal hip function and prevent further damage.',
      image: '/images/labral-tear.jpg',
      slug: '/conditions/hip-labral-tear'
    }
  };

const AllCondition = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('Shoulder Arthroscopy');
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const proceduresList = [
    ['Slap Tears', 'Knee Arthroscopy', 'Knee Replacement', 'ACL Injury', 'PCL Injury', 'Meniscus Injury', 'MPFL/MCL/LCL Injury'],
    ['Shoulder Arthroscopy', 'Shoulder Replacement', 'Recurrent Shoulder Dislocation', 'Rotator Cuff Tear', 'Injuries around Shoulder'],
    ['Cartilage Injury', 'ATFL Tear', 'Tennis Elbow', 'Golfer Elbow', 'Hip Labral Tear']
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Pains We Treat</h2>
        <div className="text-center mb-6">
          <p className="text-gray-600">Some of our common areas of expertise have been listed below</p>
        </div>
      </motion.div>

      <motion.div
        ref={buttonsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={buttonsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4 mb-12"
      >
        {proceduresList.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-4 justify-center text-black">
            {row.map((procedure) => (
              <motion.button
                key={procedure}
                onClick={() => setSelectedProcedure(procedure)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedProcedure === procedure
                    ? 'bg-gradient-to-r from-blue-900 to-cyan-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {procedure}
              </motion.button>
            ))}
          </div>
        ))}
      </motion.div>

      <div ref={contentRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProcedure}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 bg-white rounded-xl p-6 text-black shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative w-full h-80"
            >
              <Image
                src={procedures[selectedProcedure]?.image || '/api/placeholder/600/400'}
                alt={selectedProcedure}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={selectedProcedure === 'Shoulder Arthroscopy'}
                className="object-fit rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-500/10 rounded-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4">{selectedProcedure}</h2>
              <p className="text-gray-600 mb-6">
                {procedures[selectedProcedure]?.description || 'Description coming soon...'}
              </p>
              
              <Link href={`${procedures[selectedProcedure]?.slug || selectedProcedure.toLowerCase().replace(/ /g, '-')}`}>
                <motion.button
                  className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllCondition;