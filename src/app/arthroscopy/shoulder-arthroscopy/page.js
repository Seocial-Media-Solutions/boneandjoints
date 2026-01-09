

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

export const metadata = {
  title: 'Best Shoulder Arthroscopy in Ajmer | Dr. Abhishek Saxena',
  description: 'Expert shoulder arthroscopy for rotator cuff tears, labral tears & shoulder instability in Ajmer. Advanced keyhole surgery techniques by top orthopedic surgeon Dr. Abhishek Saxena.',
  keywords: [
    'shoulder arthroscopy Ajmer',
    'rotator cuff surgery specialist',
    'labral tear treatment',
    'minimally invasive shoulder surgery',
    'shoulder impingement surgery',
    'SLAP lesion repair',
    'frozen shoulder treatment',
    'best shoulder surgeon in Ajmer',
    'day care shoulder surgery',
    'quick recovery shoulder procedure',
    'Dr. Abhishek Saxena shoulder specialist',
    'shoulder dislocation treatment'
  ].join(', '),
  openGraph: {
    title: 'Shoulder Arthroscopy Specialist in Ajmer | Dr. Abhishek Saxena',
    description: 'Advanced minimally invasive shoulder surgery for rotator cuff tears, labral injuries and shoulder instability. Faster recovery with precision arthroscopic techniques.',
    images: [
      {
        url: '/images/shoulder-arthroscopy.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Abhishek Saxena Performing Shoulder Arthroscopy',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/arthroscopy/shoulder-arthroscopy',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/arthroscopy/shoulder-arthroscopy',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoulder Arthroscopy Expert in Ajmer | Dr. Abhishek Saxena',
    description: 'Specialized in minimally invasive shoulder procedures for rotator cuff, labral tears and instability. Advanced techniques for faster recovery.',
    images: ['/images/shoulder-arthroscopy.webp']
  }
};

const ShoulderArthroscopy = () => {
  return (
    <>
       <AboutHero
          bannerImage="/images/shoulderarthoscopy.png"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
        
          { label: 'Shoulder Arthroscopy  Surgery', path: '/arthroscopy' }
         ]}
      />
    <div className="max-w-8xl mx-auto p-6 bg-gray-50">
      <div className="space-y-8">
        {/* Doctor Info Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-28 w-24 rounded-full bg-[#C3E1F2] flex items-center justify-center">
                   <div className="relative h-28 w-24">
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
                    <span className="ml-2 hidden sm:inline text-gray-600">(500+ reviews)</span>
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
              <div>
                <p className="text-sm text-gray-600">Surgeries</p>
                <p className="font-bold text-black">500+</p>
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
              Shoulder Arthroscopy Surgery
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
              <Image
                                  src="/images/shoulder-arthroscopy.webp"
                                  alt="Shoulder Arthroscopy"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Shoulder Arthroscopy</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Shoulder Arthroscopy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shoulder arthroscopy is a minimally invasive surgical procedure that uses a tiny camera (arthroscope) and specialized instruments to diagnose and treat various shoulder conditions. This advanced technique allows surgeons to view the shoulder joint through small incisions, reducing trauma to surrounding tissues and enabling faster recovery compared to traditional open surgery.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs state-of-the-art arthroscopic techniques using high-definition cameras and specialized instruments. This approach allows for precise visualization and treatment of shoulder conditions through incisions typically less than 1cm in size. The procedure can be performed under regional or general anesthesia, with most patients returning home the same day.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Conditions Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Rotator cuff tears and tendinitis</li>
                  <li>Shoulder impingement syndrome</li>
                  <li>Labral tears and SLAP lesions</li>
                  <li>Shoulder instability and recurrent dislocations</li>
                  <li>Frozen shoulder (adhesive capsulitis)</li>
                  <li>Biceps tendon disorders</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Care Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our shoulder arthroscopy program includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Advanced diagnostic imaging and evaluation</li>
                  <li>Customized surgical planning for each patient</li>
                  <li>Specialized shoulder rehabilitation protocols</li>
                  <li>Regular post-operative monitoring</li>
                  <li>Return-to-sport assessment for athletes</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from shoulder arthroscopy is typically faster than traditional open surgery. Most patients can return to light activities within 1-2 weeks and progress to full activity by 3-6 months, depending on the procedure performed. Our success rates are excellent, with over 90% of patients reporting significant improvement in shoulder function and reduction in pain following arthroscopic treatment.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Experiencing shoulder pain or limited mobility? Schedule a comprehensive evaluation with Dr. Abhishek Saxena to discuss if shoulder arthroscopy is right for you.
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

export default ShoulderArthroscopy;