'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const LigamentInjury = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/MPFL-MCL-LCL.png"
          title="Dr. Abhishek Saxena"
          subtitle="Sidekicks of the Knee: MPFL, MCL & LCL Injuries Solution"
          breadcrumbs={[
          
          { label: 'MPFL/MCL/LCL Injury', path: '/conditions/mpfl-mcl-lcl-injury' }
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
              MPFL/MCL/LCL Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/lcl-injury.png"
                                  alt="Knee Ligament Injury"
                                  fill
                                  className="object-fit "
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Knee Ligament Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What are MPFL/MCL/LCL Injuries?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The knee is stabilized by several key ligaments that work together to provide proper movement and function. The Medial Patellofemoral Ligament (MPFL) connects the patella (kneecap) to the femur and prevents lateral displacement of the kneecap. The Medial Collateral Ligament (MCL) runs along the inner side of the knee and provides stability against forces that would push the knee inward. The Lateral Collateral Ligament (LCL) runs along the outer side of the knee and provides stability against forces that would push the knee outward. Injuries to these ligaments can occur from direct impact, sudden twisting motions, or from chronic overuse, affecting the knee's stability and function.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Symptoms of Ligament Injuries
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><span className="font-semibold">MPFL Injury:</span> Kneecap instability or dislocation, pain around or behind the kneecap, swelling, difficulty with stairs, and a feeling that the knee is giving way</li>
                  <li><span className="font-semibold">MCL Injury:</span> Pain along the inner side of the knee, swelling, stiffness, instability when changing direction, and bruising</li>
                  <li><span className="font-semibold">LCL Injury:</span> Pain along the outer side of the knee, swelling, knee instability particularly when bearing weight, and difficulty walking</li>
                  <li><span className="font-semibold">General Symptoms:</span> Popping sound at the time of injury, immediate pain, inability to continue activity, joint stiffness, and decreased range of motion</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs a multimodal diagnostic approach to accurately assess ligament injuries. This includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Specialized physical examination with stress testing to evaluate ligament integrity</li>
                  <li>High-resolution MRI to visualize ligament tears, associated injuries, and to grade severity</li>
                  <li>Stress radiographs to quantify joint instability</li>
                  <li>Dynamic ultrasound assessment for real-time evaluation of joint movement</li>
                  <li>Diagnostic arthroscopy for complex cases or when multiple injuries are suspected</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Treatment for ligament injuries varies based on the specific ligament involved, injury severity, and patient factors. Our comprehensive approach includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Conservative Management:</span> For Grade I and some Grade II injuries, including RICE protocol (Rest, Ice, Compression, Elevation), bracing, and structured physical therapy</li>
                  <li><span className="font-semibold">MPFL Reconstruction:</span> Advanced arthroscopic and mini-open techniques using autograft or allograft tissue to restore patellofemoral stability</li>
                  <li><span className="font-semibold">MCL Repair/Reconstruction:</span> Direct repair for acute injuries with good tissue quality or reconstruction using hamstring grafts for chronic or severe cases</li>
                  <li><span className="font-semibold">LCL Reconstruction:</span> Anatomic reconstruction techniques to restore lateral knee stability while addressing any associated posterolateral corner injuries</li>
                  <li><span className="font-semibold">Biological Augmentation:</span> Platelet-rich plasma (PRP) and other growth factors to enhance healing for partial tears</li>
                  <li><span className="font-semibold">Combined Ligament Procedures:</span> Addressing multiple ligament injuries with staged or simultaneous surgical approaches</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Cutting-Edge Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena specializes in the latest minimally invasive and anatomic reconstruction techniques for ligament injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Anatomic MPFL reconstruction with precise graft positioning and tensioning</li>
                  <li>Internal bracing techniques for MCL injuries to allow early mobilization</li>
                  <li>Arthroscopic-assisted LCL and posterolateral corner reconstruction</li>
                  <li>Individualized graft selection based on patient activity level and anatomy</li>
                  <li>Computer-navigated ligament reconstruction for complex cases</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Rehabilitation and Recovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from ligament injuries requires careful rehabilitation to restore stability, strength, and function. Our personalized rehabilitation protocols include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Early protected range of motion to prevent stiffness while protecting the repair</li>
                  <li>Progressive weight-bearing based on healing milestones</li>
                  <li>Neuromuscular training to restore proprioception and dynamic stability</li>
                  <li>Targeted strengthening of supporting muscle groups</li>
                  <li>Sport-specific training for athletes returning to competition</li>
                  <li>Functional testing before clearance for return to sports or high-demand activities</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Most patients can expect a return to daily activities within 6-12 weeks following surgery, with return to sports typically occurring between 6-9 months, depending on the specific ligament involved and the nature of the sport or activity.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena emphasizes injury prevention as part of comprehensive care. Recommendations include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Neuromuscular training programs that focus on proper landing mechanics</li>
                  <li>Core and lower extremity strengthening exercises</li>
                  <li>Proper warm-up protocols before athletic activities</li>
                  <li>Sport-specific conditioning to prepare for the demands of particular activities</li>
                  <li>Appropriate footwear and bracing for high-risk activities or previous injuries</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing knee pain, instability, or have suffered an injury, don't delay seeking care. Early diagnosis and treatment of ligament injuries can significantly improve outcomes and prevent long-term complications. Schedule a comprehensive evaluation with Dr. Abhishek Saxena to develop a personalized treatment plan for your knee condition.
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

export default LigamentInjury;