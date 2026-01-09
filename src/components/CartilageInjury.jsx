'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const CartilageInjury = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/cartilage-injury.png"
          title="Dr. Abhishek Saxena"
          subtitle="Joint Pain from Cartilage Damage"
          breadcrumbs={[
         
          { label: 'Cartilage Injury', path: '/conditions/cartilage-injury' }
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
              Cartilage Injury Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/cartilage-injury.jpg"
                                  alt="Cartilage Injury"
                                  fill
                                  className="object-fit"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Cartilage Repair</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What are Cartilage Injuries?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cartilage is the smooth, white tissue that covers the ends of bones where they form joints. It provides a cushioning surface that allows for smooth movement and helps absorb shock during physical activity. There are two main types of cartilage in joints: articular cartilage (covers joint surfaces) and meniscal cartilage (shock absorbers in the knee). Cartilage injuries can occur from acute trauma, such as sports injuries or falls, or develop gradually due to wear and tear, leading to degenerative conditions like osteoarthritis. Unlike other tissues, cartilage has a limited ability to repair itself due to its poor blood supply, making treatment essential for long-term joint health.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Symptoms of Cartilage Injuries
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Joint Pain:</span> Pain that worsens with activity and improves with rest</li>
                  <li><span className="font-semibold">Swelling:</span> Inflammation around the affected joint, often occurring hours after activity</li>
                  <li><span className="font-semibold">Stiffness:</span> Reduced range of motion and difficulty fully bending or straightening the joint</li>
                  <li><span className="font-semibold">Locking or Catching:</span> Sensation of the joint "catching" or "giving way" during movement</li>
                  <li><span className="font-semibold">Grinding Sensation:</span> Feeling or hearing a grinding or crunching when moving the joint</li>
                  <li><span className="font-semibold">Weakness:</span> Decreased strength in the muscles surrounding the affected joint</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Diagnostic Approaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena utilizes state-of-the-art diagnostic tools to precisely assess cartilage injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Comprehensive physical examination to assess joint stability, range of motion, and localize pain</li>
                  <li>High-resolution MRI with cartilage mapping sequences to visualize the extent and depth of cartilage damage</li>
                  <li>3D CT arthrography for detailed assessment of cartilage surface integrity</li>
                  <li>Diagnostic arthroscopy for direct visualization and grading of cartilage lesions</li>
                  <li>Specialized biomechanical assessment to evaluate joint loading patterns</li>
                  <li>Advanced biochemical markers to assess cartilage metabolism and inflammatory factors</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena offers a comprehensive range of treatment options tailored to the specific type, location, and severity of cartilage injury:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Conservative Management:</span> Physical therapy, activity modification, weight management, and bracing for small or stable lesions</li>
                  <li><span className="font-semibold">Pharmacological Interventions:</span> Anti-inflammatory medications, viscosupplementation (hyaluronic acid injections), and targeted corticosteroid injections</li>
                  <li><span className="font-semibold">Biological Treatments:</span> Platelet-rich plasma (PRP), bone marrow aspirate concentrate (BMAC), and other advanced biologics to stimulate healing</li>
                  <li><span className="font-semibold">Microfracture/Nanofracture:</span> Creating small perforations in the underlying bone to stimulate cartilage regeneration</li>
                  <li><span className="font-semibold">Autologous Chondrocyte Implantation (ACI):</span> Two-stage procedure using laboratory-grown cartilage cells from the patient's own tissue</li>
                  <li><span className="font-semibold">Matrix-Induced Autologous Chondrocyte Implantation (MACI):</span> Advanced form of ACI using a biologic scaffold</li>
                  <li><span className="font-semibold">Osteochondral Autograft/Allograft Transfer (OAT):</span> Transferring healthy cartilage and bone plugs to the defect site</li>
                  <li><span className="font-semibold">Meniscal Repairs:</span> Specialized techniques for meniscal cartilage preservation and restoration</li>
                  <li><span className="font-semibold">Joint Preservation Procedures:</span> Corrective osteotomies to optimize joint biomechanics and reduce cartilage stress</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Cutting-Edge Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena specializes in the latest minimally invasive and regenerative approaches for cartilage restoration:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Arthroscopic cartilage debridement and stabilization for partial-thickness lesions</li>
                  <li>Advanced microfracture techniques with enhanced biologics</li>
                  <li>Single-stage cartilage restoration procedures using autologous matrix-induced chondrogenesis</li>
                  <li>Customized 3D-printed scaffolds for complex cartilage defects</li>
                  <li>Particulated juvenile cartilage allograft for challenging lesions</li>
                  <li>Meniscal transplantation for irreparable meniscal tears</li>
                  <li>Computer-navigated cartilage procedures for precise defect targeting</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Rehabilitation and Recovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from cartilage procedures requires specialized rehabilitation protocols to protect the repair while promoting tissue maturation:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Customized weight-bearing progression based on the specific procedure and location</li>
                  <li>Continuous passive motion therapy to nourish healing cartilage</li>
                  <li>Targeted strengthening of supporting muscles without compromising the repair</li>
                  <li>Joint unloading strategies during early healing phases</li>
                  <li>Progressive exercise programs to gradually increase joint loading</li>
                  <li>Gait retraining and biomechanical optimization</li>
                  <li>Return-to-activity testing with objective functional criteria</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Rehabilitation timelines vary based on the specific procedure, with most patients returning to daily activities within 3-6 months. Return to high-impact activities or sports typically occurs between 6-12 months, with continued biological maturation of the repaired cartilage for up to 2 years after surgery.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena emphasizes proactive measures to protect joint cartilage and prevent injuries:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Joint-friendly exercise programs focusing on low-impact activities</li>
                  <li>Proper warm-up and cool-down routines before physical activity</li>
                  <li>Maintaining healthy body weight to reduce joint stress</li>
                  <li>Proper technique during sports and exercise to minimize abnormal joint loading</li>
                  <li>Appropriate footwear and orthotics to optimize biomechanics</li>
                  <li>Nutritional strategies to support cartilage health</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing joint pain, swelling, or mechanical symptoms such as catching or locking, early evaluation is crucial for optimal outcomes. Cartilage injuries respond best to prompt treatment before significant damage occurs. Schedule a comprehensive consultation with Dr. Abhishek Saxena to explore the most advanced cartilage preservation and restoration options tailored to your specific condition.
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

export default CartilageInjury;