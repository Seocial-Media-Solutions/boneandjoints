

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

export const metadata = {
  title: 'Best Back Injury Treatment in Ajmer | Dr. Abhishek Saxena',
  description: 'Expert back injury treatment & spine care in Ajmer by Dr. Abhishek Saxena. Specialized in sports injuries, slipped discs, sciatica & spinal rehabilitation for pain relief & recovery.',
  keywords: [
    'back pain treatment Ajmer',
    'sports injury specialist Ajmer',
    'spine doctor near me',
    'slipped disc treatment',
    'sciatica pain relief',
    'spinal rehabilitation',
    'back injury specialist',
    'best orthopedic surgeon for back pain',
    'Dr. Abhishek Saxena Ajmer',
    'non-surgical back treatment',
    'chronic back pain solutions'
  ].join(', '),
  openGraph: {
    title: 'Back Injury Specialist in Ajmer | Dr. Abhishek Saxena',
    description: 'Comprehensive back injury treatment including sports injuries, spinal disorders, and rehabilitation programs. Get personalized care for acute and chronic back conditions.',
    images: [
      {
        url: '/images/back-injuries.webp',
        width: 1200,  // Increased for better social media display
        height: 630,  // Ideal aspect ratio for social sharing
        alt: 'Dr. Abhishek Saxena - Back Injury Treatment Specialist in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/sports-injury/back-injury',
    siteName: 'Dr Abhishek Saxena - Ajmer',  // Added for better branding
  },
  alternates: {
    canonical: 'https://boneandjoints.in/sports-injury/back-injury',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,  // Explicitly stated for clarity
    googleBot: {    // Added specific Google bot instructions
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {  // Added Twitter card metadata
    card: 'summary_large_image',
    title: 'Back Injury Treatment Specialist in Ajmer | Dr. Abhishek Saxena',
    description: 'Expert care for back injuries, spinal conditions, and sports-related back problems. Advanced treatment options for pain relief and recovery.',
    images: ['/images/back-injuries.webp']
  }
};

const BackInjury = () => {
  return (
    <>
         <AboutHero
          bannerImage="/images/backinjury.png"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
           
          { label: 'Back Injury Treatment', path: '' }
         ]}
      />
    <div className="max-w-8xl mx-auto p-6 bg-gray-50">
      <div className="space-y-8">
        {/* Doctor Info Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative h-28 rounded-full bg-[#C3E1F2] w-24">
                  <Image
                    src="/images/abhishek.png"
                    alt="Dr. Abhishek Saxena"
                    fill
                    className="rounded-full object-cover"
                  />
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
                <p className="text-sm text-gray-600">Patients Treated</p>
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
              Sports-Related Back Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/back-injuries.webp"
                  alt="Back Injury Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Specialized Back Injury Treatment</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Understanding Sports-Related Back Injuries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Back injuries in sports can occur from repetitive strain, sudden impacts, or improper form during activities. These injuries can affect muscles, ligaments, discs, and vertebrae. Early intervention and proper diagnosis are essential for preventing chronic conditions and ensuring a safe return to athletic activities.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Types of Back Injuries
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Lumbar strain and sprains</li>
                  <li>Herniated or bulging discs</li>
                  <li>Sciatica</li>
                  <li>Spondylolisthesis</li>
                  <li>Facet joint syndrome</li>
                  <li>Muscle spasms and tension</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Treatment Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer personalized treatment plans that address both immediate pain relief and long-term spine health:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Comprehensive spine evaluation and imaging</li>
                  <li>Sport-specific biomechanical analysis</li>
                  <li>Non-invasive treatment options</li>
                  <li>Minimally invasive procedures when necessary</li>
                  <li>Customized rehabilitation programs</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our facility offers cutting-edge treatments including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Spinal decompression therapy</li>
                  <li>Advanced pain management techniques</li>
                  <li>Specialized physical therapy</li>
                  <li>Regenerative medicine options</li>
                  <li>Posture and movement retraining</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Return to Sport
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive rehabilitation protocol includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Core strengthening programs</li>
                  <li>Flexibility and mobility work</li>
                  <li>Sport-specific movement training</li>
                  <li>Gradual return-to-play progression</li>
                  <li>Injury prevention education</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Don't let back pain limit your athletic performance. Contact Dr. Abhishek Saxena for expert diagnosis and treatment of your sports-related back injury.
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

export default BackInjury;