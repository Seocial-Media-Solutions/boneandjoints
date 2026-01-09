'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const PCLInjury = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/acl-injury1.png"
          title="Dr. Abhishek Saxena"
          subtitle="PCL Injury Recovery: Your Game Plan Starts Here"
          breadcrumbs={[
          
          { label: 'PCL Injury', path: '/conditions/pclinjury' }
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
              PCL Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/pcl-injury.png"
                                  alt="PCL Injury Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">PCL Injury Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is a PCL Injury?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Posterior Cruciate Ligament (PCL) is one of the four main ligaments in the knee that connects the thigh bone (femur) to the shin bone (tibia). It prevents the shin bone from moving too far backward in relation to the thigh bone. PCL injuries typically occur from direct impact to the front of the knee, such as a dashboard injury in a car accident or a fall onto a bent knee during sports. Unlike ACL tears, PCL injuries can sometimes heal with conservative treatment, though severe tears may require surgical reconstruction.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic and Surgical Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena utilizes comprehensive diagnostic protocols including specialized physical examination techniques, high-resolution MRI, and stress radiography to accurately assess PCL injuries. For surgical cases, we employ state-of-the-art arthroscopic and minimally invasive techniques to reconstruct the PCL with either autografts (using the patient's own tissue) or carefully selected allografts. Our surgical approach focuses on anatomic reconstruction with precision tunnel placement to restore normal knee biomechanics.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types of PCL Injuries Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Grade I: Partial PCL tear with minimal instability</li>
                  <li>Grade II: Partial tear with increased posterior laxity</li>
                  <li>Grade III: Complete PCL tear with significant instability</li>
                  <li>Combined ligament injuries (PCL + ACL, MCL, or LCL)</li>
                  <li>PCL avulsion fractures requiring fixation</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Treatment Protocol
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our PCL injury treatment program includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Detailed biomechanical assessment of knee stability</li>
                  <li>Conservative management for appropriate cases with specialized bracing</li>
                  <li>Advanced surgical reconstruction techniques for high-grade tears</li>
                  <li>Customized rehabilitation protocols based on injury severity and treatment approach</li>
                  <li>Progressive return-to-activity progression with functional testing</li>
                  <li>Long-term knee health maintenance program</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from PCL reconstruction typically involves wearing a specialized brace for 4-6 weeks, with restricted weight-bearing initially. Physical therapy begins immediately with controlled range of motion exercises. Most patients can resume light activities by 3-4 months and return to sports between 6-9 months post-surgery, depending on the complexity of the injury and associated procedures. Our clinical outcomes data demonstrates that over 80% of patients achieve excellent knee function with significant improvement in stability and reduction in pain following PCL reconstruction.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Experiencing knee pain, instability, or difficulty with activities after a knee injury? Schedule a comprehensive evaluation with Dr. Abhishek Saxena to determine if you have a PCL injury and discuss the most appropriate treatment options for your specific situation.
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

export default PCLInjury;