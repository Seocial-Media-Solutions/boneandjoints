'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const SLAPTear = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/slaptear.png"
          title="Dr. Abhishek Saxena"
          subtitle="SLAP Tear: Treatment and Recovery"
          breadcrumbs={[
         
          { label: 'SLAP Tears', path: '/conditions/slaptears' }
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
              SLAP Tear Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/slap-tears.png"
                                  alt="SLAP Tear Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">SLAP Tear Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is a SLAP Tear?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A SLAP tear (Superior Labrum Anterior to Posterior) is an injury to the ring of cartilage (labrum) that surrounds the socket of the shoulder joint. This specialized cartilage helps stabilize the shoulder and serves as an attachment site for the biceps tendon. SLAP tears commonly occur in individuals who perform repetitive overhead motions, such as athletes in throwing sports, tennis, and swimming, as well as in workers whose occupations require overhead activities.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic and Surgical Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs state-of-the-art diagnostic imaging and arthroscopic techniques to accurately diagnose and treat SLAP tears. Through minimally invasive shoulder arthroscopy, we can precisely visualize the labrum and biceps anchor, repair torn tissue, and restore shoulder stability with minimal disruption to surrounding structures. Our approach focuses on preserving natural anatomy while providing durable repairs for long-term shoulder health.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types of SLAP Tears Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Type I: Fraying of the superior labrum</li>
                  <li>Type II: Detachment of the superior labrum and biceps tendon</li>
                  <li>Type III: Bucket-handle tear of the superior labrum</li>
                  <li>Type IV: Extension of labral tear into the biceps tendon</li>
                  <li>Complex SLAP tears with associated injuries</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Treatment Protocol
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our SLAP tear treatment program includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>High-resolution MRI with shoulder-specific protocols</li>
                  <li>Customized surgical planning based on tear type and activity goals</li>
                  <li>Minimally invasive arthroscopic repair techniques</li>
                  <li>Sport and age-appropriate rehabilitation protocols</li>
                  <li>Gradual return-to-activity progression</li>
                  <li>Long-term shoulder health maintenance program</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from SLAP tear repair typically involves wearing a sling for 2-4 weeks, followed by progressive physical therapy. Most patients begin light activities by 6-8 weeks and can return to full sports participation between 4-6 months post-surgery. Our outcomes data shows that over 85% of patients achieve excellent shoulder function, with significant pain reduction and return to pre-injury activities. Athletes in overhead sports may require additional time and specialized rehabilitation to regain optimal performance.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Experiencing shoulder pain, instability, or clicking with overhead activities? Schedule a comprehensive evaluation with Dr. Abhishek Saxena to determine if you have a SLAP tear and discuss the most appropriate treatment options.
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

export default SLAPTear;