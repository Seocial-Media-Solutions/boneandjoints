'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const AtflTear = () => {  
  return (
    <>
     <AboutHero
          bannerImage="/images/atfltear.png"
          title="Dr. Abhishek Saxena"
          subtitle="Fixing a Torn Ankle Ligament (ATFL Tear)"
          breadcrumbs={[
          
          { label: 'ATFL Tear', path: '/conditions/atfl-tear' }
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
              ATFL Tear Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/atfl-injury.jpg"
                                  alt="ATFL Tear Injury"
                                  fill
                                  className="object-fit"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Ankle Ligament Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is an ATFL Tear?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Anterior Talofibular Ligament (ATFL) is one of the main stabilizing ligaments of the ankle joint, connecting the fibula (calf bone) to the talus (ankle bone). It's the most commonly injured ligament during ankle sprains, typically occurring when the foot rolls inward excessively (inversion). ATFL tears range from mild stretching (Grade I) to complete rupture (Grade III) and account for approximately 85% of all ankle sprains. When severe or left untreated, ATFL injuries can lead to chronic ankle instability, recurrent sprains, and long-term joint degeneration. Athletes and individuals with high-arched feet have an increased risk of experiencing these injuries.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Symptoms of ATFL Tears
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Pain:</span> Sharp pain along the outer (lateral) side of the ankle, especially during weight-bearing activities</li>
                  <li><span className="font-semibold">Swelling:</span> Rapid onset of swelling around the lateral ankle, often extending down to the foot</li>
                  <li><span className="font-semibold">Bruising:</span> Discoloration appearing within 24-48 hours after injury</li>
                  <li><span className="font-semibold">Instability:</span> Feeling that the ankle is "giving way" during walking or standing</li>
                  <li><span className="font-semibold">Limited Range of Motion:</span> Difficulty moving the ankle, particularly with turning the foot inward</li>
                  <li><span className="font-semibold">Tenderness:</span> Pain when the ATFL area is touched or pressed</li>
                  <li><span className="font-semibold">Difficulty Walking:</span> Altered gait pattern with reduced confidence in the injured ankle</li>
                  <li><span className="font-semibold">Recurrent Injuries:</span> History of multiple ankle sprains on the same side (in chronic cases)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena employs a comprehensive diagnostic approach to precisely evaluate ATFL injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Detailed clinical examination including anterior drawer test and talar tilt test to assess ligament integrity</li>
                  <li>Stress radiographs to quantify ankle joint instability</li>
                  <li>High-resolution ultrasound with dynamic assessment to visualize the ATFL during joint movement</li>
                  <li>MRI with specialized ankle protocols to evaluate the extent of ligament damage and identify associated injuries</li>
                  <li>3D CT scanning for complex cases or when bone injuries are suspected</li>
                  <li>Ankle arthroscopy for direct visualization in complex or chronic cases</li>
                  <li>Computerized balance assessment to quantify functional instability</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Treatment for ATFL tears is tailored to the grade of injury, patient's activity level, and presence of chronic instability:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Conservative Management:</span> For Grade I and most Grade II injuries, including:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>RICE protocol (Rest, Ice, Compression, Elevation)</li>
                      <li>Protected weight-bearing with crutches or walking boot as needed</li>
                      <li>Functional ankle bracing or taping</li>
                      <li>Targeted physical therapy focusing on proprioception and peroneal strengthening</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Biological Interventions:</span> To enhance healing in select cases:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Platelet-rich plasma (PRP) injections</li>
                      <li>Prolotherapy for chronic ligament laxity</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Surgical Management:</span> Considered for:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Complete (Grade III) tears, especially in athletes</li>
                      <li>Failed conservative treatment</li>
                      <li>Chronic ankle instability with recurrent sprains</li>
                      <li>Patients with high functional demands</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Cutting-Edge Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena specializes in the latest minimally invasive and anatomic reconstruction techniques for ATFL injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Arthroscopic-Assisted ATFL Repair:</span> Minimally invasive repair of the native ligament with specialized suture anchors</li>
                  <li><span className="font-semibold">Modified Broström-Gould Procedure:</span> Gold-standard technique for direct ATFL repair with reinforcement</li>
                  <li><span className="font-semibold">Internal Brace Augmentation:</span> Synthetic reinforcement to protect the repair during healing while allowing early mobilization</li>
                  <li><span className="font-semibold">Anatomic Ligament Reconstruction:</span> Using tendon grafts (autograft or allograft) for cases with poor tissue quality or revision surgeries</li>
                  <li><span className="font-semibold">Percutaneous/Mini-Open Techniques:</span> Minimally invasive approaches with reduced surgical trauma</li>
                  <li><span className="font-semibold">Suture Tape Augmentation:</span> Advanced reinforcement of the repair to enhance stability</li>
                  <li><span className="font-semibold">Combined Procedures:</span> Addressing concomitant pathology such as peroneal tendon injuries or osteochondral lesions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Rehabilitation and Recovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rehabilitation after ATFL injury is critical for successful outcomes and preventing recurrence:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Phase 1 (0-2 weeks):</span> Protection phase with immobilization or protected weight-bearing as appropriate</li>
                  <li><span className="font-semibold">Phase 2 (2-6 weeks):</span> 
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Progressive weight-bearing</li>
                      <li>Range of motion exercises</li>
                      <li>Early proprioception training</li>
                      <li>Initiation of gentle strengthening</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Phase 3 (6-12 weeks):</span>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Advanced proprioception and balance training</li>
                      <li>Progressive resistance exercises</li>
                      <li>Functional ankle stability drills</li>
                      <li>Sport-specific or activity-specific conditioning</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Phase 4 (3-6 months):</span> Return to sport/activity with:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Advanced agility training</li>
                      <li>Plyometric exercises</li>
                      <li>Sport-specific drills with cutting and pivoting</li>
                      <li>Functional testing before full clearance</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  For conservative treatment, patients typically return to normal activities within 4-6 weeks, with full recovery in 8-12 weeks. Following surgical repair, return to sports typically occurs at 4-6 months, with continued strength and proprioception improvements for up to a year.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena emphasizes proactive approaches to prevent initial and recurrent ATFL injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Proprioceptive training programs on unstable surfaces</li>
                  <li>Peroneal muscle strengthening to improve lateral ankle stability</li>
                  <li>Proper footwear selection with adequate lateral support</li>
                  <li>Prophylactic bracing or taping for high-risk activities</li>
                  <li>Neuromuscular training focusing on proper landing mechanics</li>
                  <li>Core and hip strengthening to improve overall lower extremity biomechanics</li>
                  <li>Gradual progression when returning to sports or activities after injury</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you've experienced an ankle sprain or have ongoing ankle instability, early evaluation and treatment are essential to prevent chronic issues. What may seem like a "simple ankle sprain" can lead to long-term problems if not properly addressed. Dr. Abhishek Saxena offers comprehensive assessment and personalized treatment plans for ATFL injuries. Schedule a consultation today to take the first step toward restored ankle stability and function.
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

export default AtflTear;