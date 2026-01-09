'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const MeniscusInjury = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/MeniscusInjury.png"
          title="Dr. Abhishek Saxena"
          subtitle="Meniscus Injuries: Small Tear, Big Trouble"
          breadcrumbs={[
         
          { label: 'Meniscus Injury', path: '/conditions/meniscus-injury' }
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
              Meniscus Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/meniscus-injury.png"
                                  alt="Meniscus Injury Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Meniscus Injury Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is a Meniscus Injury?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The meniscus is a C-shaped piece of cartilage that acts as a shock absorber between the thigh bone (femur) and shin bone (tibia) in your knee. Each knee has two menisci – one on the inner side (medial) and one on the outer side (lateral). Meniscus tears commonly occur during activities that involve twisting or rotating the knee, particularly when the foot is planted and weight is placed on the knee. They can also develop gradually due to age-related degenerative changes. Depending on the tear pattern, location, and patient factors, treatment options range from conservative management to arthroscopic repair or partial removal.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic and Surgical Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs a comprehensive diagnostic approach including specialized physical examination maneuvers, high-resolution MRI, and when necessary, diagnostic arthroscopy to accurately assess meniscus injuries. Our treatment philosophy emphasizes meniscus preservation whenever possible, utilizing advanced arthroscopic techniques to repair rather than remove meniscal tissue. For cases requiring partial meniscectomy, we employ precise tissue-sparing techniques to preserve as much healthy meniscus as possible to maintain knee biomechanics and prevent early degenerative changes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types of Meniscus Injuries Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Traumatic radial tears</li>
                  <li>Bucket-handle tears</li>
                  <li>Horizontal tears</li>
                  <li>Complex degenerative tears</li>
                  <li>Meniscus root injuries</li>
                  <li>Meniscus transplantation for complete loss</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Treatment Protocol
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our meniscus injury treatment program includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Personalized evaluation of tear pattern and healing potential</li>
                  <li>Conservative management with targeted physical therapy for appropriate cases</li>
                  <li>Minimally invasive arthroscopic repair techniques including all-inside, inside-out, and outside-in methods</li>
                  <li>Advanced meniscus root repair and meniscal allograft transplantation</li>
                  <li>Biologics and growth factor augmentation to enhance healing</li>
                  <li>Customized rehabilitation protocols based on repair technique and associated injuries</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery timelines vary based on the specific procedure performed. For meniscus repair, patients typically wear a brace for 4-6 weeks with restricted weight-bearing and controlled range of motion to protect the repair. Physical therapy begins immediately with focus on quadriceps activation and gradual restoration of motion. For meniscectomy procedures, recovery is considerably faster, with most patients returning to normal activities within 4-6 weeks. Our clinical outcomes data demonstrates high rates of meniscal healing following repair, with over 85% of repaired menisci showing complete healing on follow-up MRI studies, and patients reporting significant improvement in pain and function.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Experiencing knee pain, swelling, catching, or locking? These could be signs of a meniscus tear. Schedule a comprehensive evaluation with Dr. Abhishek Saxena to determine if you have a meniscus injury and discuss the most appropriate treatment options for your specific situation.
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

export default MeniscusInjury;