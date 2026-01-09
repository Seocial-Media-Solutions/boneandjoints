

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import AboutHero from '@/components/AboutHero';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Knee Replacement Surgeon in Ajmer | Dr. Abhishek Saxena',
  description: 'Advanced Knee replacement surgery in Ajmer by Dr. Abhishek Saxena. Get expert orthopedic care for joint replacements with minimally invasive techniques and faster recovery.',
  keywords: 'hip replacement Ajmer, knee replacement surgery, joint replacement specialist, orthopedic surgeon Ajmer, total knee replacement, partial knee replacement, hip resurfacing, revision joint replacement, Dr. Abhishek Saxena',
  openGraph: {
    title: 'Knee Replacement Surgeon in Ajmer | Dr. Abhishek Saxena',
    description: 'Specialized joint replacement services including total knee replacement, partial knee replacement, and hip replacement surgery by top orthopedic surgeon in Ajmer.',
    images: [
      {
        url: '/images/kneereplacement.webp', 
        width: 800,
        height: 600,
        alt: 'Joint Replacement Services in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/replacement/knee-replacement',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/replacement/knee-replacement',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const KneeReplacement = () => {


  return (
    <>
    <AboutHero
          bannerImage="/images/kneereplacement.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
           
          { label: 'Knee Replacement Surgery', path: '' }
         ]}
      />
    <div className="max-w-8xl mx-auto p-6 bg-gray-50">
      <div className="space-y-8">
        {/* Doctor Info Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-24 w-20 rounded-full bg-[#C3E1F2] flex items-center justify-center">
                  <div className="relative h-24 w-24">
                      <Image
                       src="/images/abhishek.png"
                       alt="Dr. Abhishek Saxena"
                        fill
                        className="rounded-full object-cover"
                       />
                      </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Dr. Abhishek Saxena</h2>
                  <p className="text-gray-600">Senior Orthopedic Surgeon</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 hidden sm:inline text-black">(500+ reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
              <Link href="/bookconsultation">
                <button className="px-6 py-2 bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white rounded-lg transition-colors">
                  Book Consultation
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-bold text-black">10+ Years</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-blue-600" />
              <div className=' text-black'>
                <p className="text-sm text-gray-600">Surgeries</p>
                <p className="font-bold text-black">1000+</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">24/7 Support</p>
                <p className="font-bold text-black">Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Total Knee Replacement Surgery
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                             <Image
                                  src="/images/kneereplacement.webp"
                                  alt="Knee Replacement Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Knee Replacement</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Total Knee Replacement?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Total knee replacement (TKR) is a sophisticated surgical procedure that replaces a damaged or worn knee joint with an artificial joint (prosthesis). This state-of-the-art procedure is typically recommended for patients suffering from severe arthritis or significant knee trauma. The surgery aims to relieve pain and restore function to the knee joint, allowing patients to return to their daily activities with improved mobility and quality of life.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs cutting-edge surgical techniques, including computer-assisted navigation and minimally invasive approaches. These advanced methods result in smaller incisions, less tissue damage, and faster recovery times. The procedure utilizes custom-fitted implants that are specifically designed to match your anatomy, ensuring optimal fit and function.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Conditions Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Severe osteoarthritis causing chronic pain and limited mobility</li>
                  <li>Rheumatoid arthritis affecting knee joint integrity</li>
                  <li>Post-traumatic arthritis following serious knee injury</li>
                  <li>Failed previous knee surgeries requiring revision</li>
                  <li>Severe knee deformities impacting quality of life</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Care Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena's approach to knee replacement goes beyond just surgery. We provide:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Detailed pre-operative assessment and planning</li>
                  <li>Customized pain management protocols</li>
                  <li>Advanced rehabilitation programs with specialized physiotherapists</li>
                  <li>Regular follow-up care and monitoring</li>
                  <li>Long-term support for optimal recovery</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Long-term Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern knee replacements have excellent longevity, with many lasting 15-20 years or more. Success rates are particularly high when performed by experienced surgeons like Dr. Abhishek Saxena, who brings a decade of specialized expertise to each procedure. Patients typically report significant improvement in pain levels and mobility within 3-6 months post-surgery.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Take the first step towards a pain-free life. Contact us to schedule a comprehensive evaluation with Dr. Abhishek Saxena.
                </p>
                <Link href="/bookconsultation">
                <button className="px-6 py-2 bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white rounded-lg transition-colors">
                Book Consultation
                </button>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default KneeReplacement;