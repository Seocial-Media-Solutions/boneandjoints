

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import AboutHero from '@/components/AboutHero';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Best Knee Injury Treatment in Ajmer | Dr. Abhishek Saxena',
  description: 'Expert knee injury treatment for athletes & active individuals in Ajmer. Specialized care for ACL tears, meniscus injuries, patellar tendinitis & sports-related knee pain by top orthopedic surgeon Dr. Abhishek Saxena.',
  keywords: [
    'knee injury treatment Ajmer',
    'ACL tear specialist',
    'sports injury doctor',
    'meniscus tear surgery',
    'patellar tendinitis treatment',
    'knee pain relief',
    'arthroscopic knee surgery',
    'best orthopedic surgeon for knee',
    'sports medicine specialist Ajmer',
    'knee rehabilitation',
    'PRP therapy for knees',
    'Dr. Abhishek Saxena knee specialist'
  ].join(', '),
  openGraph: {
    title: 'Knee Injury & Sports Medicine Specialist in Ajmer | Dr. Abhishek Saxena',
    description: 'Comprehensive knee injury treatment including ACL reconstruction, meniscus repair, and sports rehabilitation programs. Get back to your sport with advanced orthopedic care.',
    images: [
      {
        url: '/images/knee-injuries.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Abhishek Saxena - Knee Injury Treatment Specialist in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/sports-injury/knee-injury',
    siteName: 'Dr . Abhishek Saxena'
  },
  alternates: {
    canonical: 'https://boneandjoints.in/sports-injury/knee-injury',
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
    title: 'Knee Injury Treatment Specialist in Ajmer | Dr. Abhishek Saxena',
    description: 'Expert care for ACL tears, meniscus injuries, and sports-related knee problems. Advanced treatment options for athletes and active individuals.',
    images: ['/images/knee-injuries.webp']
  }
};

const KneeInjury = () => {
  return (
    <>
       <AboutHero 
          bannerImage="/images/kneeinjury.webp"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
           
          { label: 'Effective Treatments for Knee Injuries', path: '' }
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
                <p className="text-sm text-gray-600">Athletes Treated</p>
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
              Sports-Related Knee Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/knee-injuries.webp"
                                  alt="=knee Injury Treatment"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Sports Injury Treatment</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Understanding Sports-Related Knee Injuries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sports-related knee injuries can range from minor sprains to severe ligament tears. These injuries commonly occur during high-impact activities, sudden direction changes, or improper landing techniques. Early diagnosis and appropriate treatment are crucial for optimal recovery and preventing long-term complications.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Types of Knee Injuries
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>ACL (Anterior Cruciate Ligament) tears or sprains</li>
                  <li>MCL (Medial Collateral Ligament) injuries</li>
                  <li>Meniscus tears</li>
                  <li>Patellar tendinitis (Jumper's knee)</li>
                  <li>Runner's knee (Patellofemoral pain syndrome)</li>
                  <li>Cartilage injuries and wear</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Treatment Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide comprehensive treatment plans tailored to each athlete's specific injury and sport. Our approach includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Advanced diagnostic imaging (MRI, CT scans)</li>
                  <li>Sport-specific rehabilitation programs</li>
                  <li>Minimally invasive surgical options when necessary</li>
                  <li>Performance optimization techniques</li>
                  <li>Injury prevention strategies</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our clinic offers state-of-the-art treatment options including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Platelet-Rich Plasma (PRP) therapy</li>
                  <li>Advanced arthroscopic procedures</li>
                  <li>Specialized physical therapy protocols</li>
                  <li>Custom bracing and support systems</li>
                  <li>Biomechanical analysis and correction</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Return to Sport
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery timelines vary based on injury severity and type. Our comprehensive rehabilitation program focuses on:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Progressive strength building</li>
                  <li>Sport-specific movement patterns</li>
                  <li>Agility and balance training</li>
                  <li>Return-to-play testing and certification</li>
                  <li>Long-term injury prevention strategies</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Don't let a knee injury keep you from your sport. Schedule a comprehensive evaluation with Dr. Abhishek Saxena for expert diagnosis and treatment.
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

export default KneeInjury;