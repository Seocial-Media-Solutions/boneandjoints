'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const InjuriesAroundShoulder = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/injured-around-shoulder.png"
          title="Dr. Abhishek Saxena"
          subtitle="Shoulder Pain: Causes and Treatments"
          breadcrumbs={[
          
          { label: 'Injuries Around Shoulder', path: '/conditions/injuries-around-shoulder' }
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
              Injuries Around Shoulder
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/injury-shoulder.jpg"
                                  alt="Injuries Around Shoulder Treatment"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Comprehensive Treatment for Shoulder Injuries</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Overview of Shoulder Injuries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The shoulder is one of the most complex and mobile joints in the human body, consisting of multiple bones, joints, muscles, and connective tissues working together. This complexity, combined with the shoulder's extensive range of motion, makes it susceptible to various injuries and conditions. Dr. Abhishek Saxena specializes in diagnosing and treating the full spectrum of shoulder disorders, providing patients with comprehensive care tailored to their specific condition and lifestyle needs.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Shoulder Conditions
                </h3>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Shoulder Bursitis</h4>
                <p className="text-gray-600 leading-relaxed">
                  Bursitis is inflammation of the bursa, small fluid-filled sacs that cushion and reduce friction between tissues in the shoulder. When these become inflamed, typically due to repetitive movements, injury, or age-related changes, they can cause pain and limited mobility.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Symptoms:</span> Pain on the outer shoulder that may worsen at night, tenderness to touch, and pain with certain movements, especially overhead activities.</li>
                  <li><span className="font-semibold">Treatment:</span> Often responds well to conservative measures like rest, anti-inflammatory medications, physical therapy, and sometimes corticosteroid injections. Severe cases may require surgical intervention to remove the inflamed bursa.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Shoulder Tendinitis</h4>
                <p className="text-gray-600 leading-relaxed">
                  Tendinitis involves inflammation or irritation of the tendons, the thick fibrous cords that attach muscles to bones. In the shoulder, this commonly affects the rotator cuff or biceps tendons.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Symptoms:</span> Pain that develops gradually, is worse with overhead activities, may radiate from the front of the shoulder down the arm, and is often accompanied by weakness.</li>
                  <li><span className="font-semibold">Treatment:</span> Similar to bursitis, treatment typically includes activity modification, anti-inflammatory medications, physical therapy, and sometimes injections. Persistent cases may require surgical intervention, particularly if there is a partial tear of the tendon.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Frozen Shoulder (Adhesive Capsulitis)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Frozen shoulder involves thickening and tightening of the shoulder capsule, the connective tissue surrounding the shoulder joint. This leads to progressive stiffness and significantly reduced range of motion.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Phases:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Freezing phase: Gradual onset of pain and loss of motion (2-9 months)</li>
                      <li>Frozen phase: Less pain but significant stiffness (4-12 months)</li>
                      <li>Thawing phase: Gradual improvement in motion (5-24 months)</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Risk Factors:</span> More common in women, people 40-60 years old, and those with diabetes, thyroid disorders, or after periods of immobilization.</li>
                  <li><span className="font-semibold">Treatment:</span> Physical therapy, home stretching programs, anti-inflammatory medications, and sometimes injections. In resistant cases, manipulation under anesthesia or arthroscopic release of the tight capsule may be necessary.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">AC Joint Injuries</h4>
                <p className="text-gray-600 leading-relaxed">
                  The acromioclavicular (AC) joint is where the collarbone (clavicle) meets the highest point of the shoulder blade (acromion). Injuries to this joint are often called "separated shoulder."
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Causes:</span> Typically result from a fall directly onto the shoulder, a direct blow, or a fall on an outstretched hand.</li>
                  <li><span className="font-semibold">Grades:</span> Classified into six grades (I-VI) based on severity, with higher grades indicating greater displacement and more ligament damage.</li>
                  <li><span className="font-semibold">Treatment:</span> Lower-grade injuries (I-II) usually heal with conservative management including rest, ice, pain medications, and a sling. Higher-grade injuries (IV-VI) often require surgical reconstruction, while grade III injuries may be treated either conservatively or surgically depending on the patient's activity level and symptoms.</li>
                </ul>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">SLAP Tears</h4>
                <p className="text-gray-600 leading-relaxed">
                  Superior Labrum Anterior to Posterior (SLAP) tears affect the labrum, a ring of cartilage that surrounds the socket of the shoulder joint, specifically at the point where the biceps tendon attaches.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Causes:</span> Acute trauma (fall on an outstretched arm), repetitive overhead activities (throwing sports), or degenerative changes with age.</li>
                  <li><span className="font-semibold">Symptoms:</span> Deep, aching pain within the shoulder, clicking or catching sensations, pain with specific movements (especially overhead), and reduced throwing velocity in athletes.</li>
                  <li><span className="font-semibold">Treatment:</span> May include physical therapy, activity modification, and anti-inflammatory medications. Surgical repair through arthroscopy may be necessary for active individuals or those with persistent symptoms.</li>
                </ul>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Shoulder Instability</h4>
                <p className="text-gray-600 leading-relaxed">
                  Instability occurs when the humeral head (ball) moves excessively or dislocates from the glenoid (socket). This can range from subtle looseness to complete dislocation.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Types:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Anterior (forward) - most common</li>
                      <li>Posterior (backward)</li>
                      <li>Multidirectional (multiple directions)</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Symptoms:</span> Feelings of the shoulder "giving way," pain with certain arm positions, recurrent dislocations, and apprehension with certain movements.</li>
                  <li><span className="font-semibold">Treatment:</span> Physical therapy to strengthen the rotator cuff and stabilizing muscles is the first-line treatment. For recurrent instability, surgical repair of the labrum and capsule (Bankart repair or capsular shift) may be necessary, typically performed arthroscopically.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Diagnostic Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs a comprehensive approach to diagnose shoulder conditions:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Detailed History:</span> Understanding the onset, duration, and nature of symptoms, as well as aggravating and relieving factors.</li>
                  <li><span className="font-semibold">Physical Examination:</span> Evaluating range of motion, strength, stability, and performing specific tests to identify particular shoulder conditions.</li>
                  <li><span className="font-semibold">Imaging Studies:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>X-rays: To evaluate bone structure, alignment, and detect arthritis or fractures</li>
                      <li>MRI: Provides detailed images of soft tissues including muscles, tendons, labrum, and cartilage</li>
                      <li>MR Arthrogram: Enhanced MRI with contrast injected into the joint for better visualization of labral tears and subtle injuries</li>
                      <li>Ultrasound: Dynamic imaging useful for evaluating tendons and detecting fluid collections</li>
                      <li>CT Scan: Sometimes used for complex bone issues or pre-surgical planning</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Diagnostic Injections:</span> Can help differentiate between various pain sources and confirm specific diagnoses.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Philosophy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena's approach to treating shoulder injuries is guided by several principles:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Individualized Care:</span> Treatment plans are tailored to each patient's specific condition, age, activity level, goals, and overall health.</li>
                  <li><span className="font-semibold">Conservative First:</span> Non-surgical approaches are typically tried before considering surgical intervention, except in cases where early surgery provides clear benefits.</li>
                  <li><span className="font-semibold">Evidence-Based Practices:</span> All treatment recommendations are based on the latest research and clinical evidence.</li>
                  <li><span className="font-semibold">Comprehensive Approach:</span> Addressing not just the primary shoulder problem but also any contributing factors such as posture, muscle imbalances, or movement patterns.</li>
                  <li><span className="font-semibold">Minimally Invasive Techniques:</span> When surgery is necessary, arthroscopic and other minimally invasive approaches are used whenever possible to reduce recovery time and complications.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Non-Surgical Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many shoulder conditions respond well to conservative management:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Rest and Activity Modification:</span> Temporarily avoiding activities that aggravate symptoms to allow healing.</li>
                  <li><span className="font-semibold">Physical Therapy:</span> Customized exercise programs to improve range of motion, strength, and proper movement patterns. This is a cornerstone of treatment for most shoulder conditions.</li>
                  <li><span className="font-semibold">Anti-inflammatory Medications:</span> NSAIDs and other medications to reduce pain and inflammation.</li>
                  <li><span className="font-semibold">Therapeutic Injections:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Corticosteroid injections to reduce inflammation</li>
                      <li>Hyaluronic acid for arthritic conditions</li>
                      <li>Platelet-Rich Plasma (PRP) therapy to promote healing in tendons and other tissues</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Bracing or Immobilization:</span> When appropriate, to protect the shoulder during the healing process.</li>
                  <li><span className="font-semibold">Massage and Manual Therapy:</span> To address soft tissue restrictions and improve mobility.</li>
                  <li><span className="font-semibold">Ultrasound, Electrical Stimulation, and Other Modalities:</span> May help reduce pain and promote healing in some cases.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Surgical Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When conservative treatment doesn't provide adequate relief, or for certain conditions where surgery offers the best outcome, Dr. Saxena offers various surgical interventions:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Arthroscopic Procedures:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Subacromial decompression for impingement syndrome</li>
                      <li>Labral repairs for SLAP tears and instability</li>
                      <li>Capsular release for frozen shoulder</li>
                      <li>Biceps tenodesis or tenotomy for biceps tendon problems</li>
                      <li>Debridement of inflamed tissue or damaged cartilage</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">AC Joint Procedures:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Distal clavicle excision for arthritic AC joints</li>
                      <li>Reconstruction for high-grade AC separations</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Instability Repairs:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Bankart repair for anterior instability</li>
                      <li>Capsular shift for multidirectional instability</li>
                      <li>Bone augmentation procedures (Latarjet) for significant bone loss</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Fracture Fixation:</span> Surgical repair of clavicle, scapula, or proximal humerus fractures using plates, screws, or specialized implants.</li>
                  <li><span className="font-semibold">Shoulder Replacement:</span> For advanced arthritis or complex fractures, including:
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Total shoulder replacement</li>
                      <li>Reverse total shoulder replacement</li>
                      <li>Partial (hemiarthroplasty) replacement</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Most of these procedures are performed arthroscopically or through minimally invasive techniques, resulting in smaller incisions, less pain, and faster recovery compared to traditional open surgery.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Techniques and Technologies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes the latest advancements in shoulder surgery:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">High-Definition Arthroscopy:</span> Provides exceptional visualization of all shoulder structures, allowing for precise diagnosis and treatment.</li>
                  <li><span className="font-semibold">Advanced Fixation Methods:</span> Including knotless anchors, all-suture anchors, and specialized suture configurations for stronger repairs.</li>
                  <li><span className="font-semibold">Biological Augmentation:</span> Application of growth factors, stem cells, or other biologics to enhance healing when appropriate.</li>
                  <li><span className="font-semibold">Computer-Assisted Navigation:</span> For complex cases requiring precise implant positioning.</li>
                  <li><span className="font-semibold">Patient-Specific Instrumentation:</span> Custom guides based on the patient's anatomy for certain procedures.</li>
                  <li><span className="font-semibold">Innovative Implant Designs:</span> Including anatomic and reverse shoulder replacement systems with improved longevity and function.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Rehabilitation and Recovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proper rehabilitation is crucial for optimal outcomes after shoulder treatments:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Customized Protocols:</span> Rehabilitation plans are tailored to the specific condition and procedure, with clear progression criteria.</li>
                  <li><span className="font-semibold">Phased Approach:</span> Typically progressing through protection, range of motion, strengthening, and return to function phases.</li>
                  <li><span className="font-semibold">Collaboration:</span> Close communication between Dr. Saxena, physical therapists, and patients ensures coordinated care.</li>
                  <li><span className="font-semibold">Patient Education:</span> Clear guidance on activities, restrictions, exercises, and what to expect throughout recovery.</li>
                  <li><span className="font-semibold">Monitoring:</span> Regular follow-up appointments to assess progress and adjust treatment plans as needed.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Recovery times vary significantly depending on the condition and treatment:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Minor arthroscopic procedures: Return to normal activities within 4-6 weeks</li>
                  <li>Labral and instability repairs: 3-6 months for full recovery</li>
                  <li>Shoulder replacements: 3-6 months for basic function, with continued improvement for up to a year</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention of Shoulder Injuries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena emphasizes prevention strategies for those at risk of shoulder problems:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Proper Technique:</span> Learning and maintaining correct form during sports, exercise, and occupational activities.</li>
                  <li><span className="font-semibold">Balanced Strengthening:</span> Developing appropriate strength in all the muscles around the shoulder, including the often-neglected posterior rotator cuff.</li>
                  <li><span className="font-semibold">Flexibility:</span> Maintaining good mobility in the shoulder, neck, and upper back.</li>
                  <li><span className="font-semibold">Progressive Training:</span> Gradually increasing activity intensity, especially with overhead sports or occupations.</li>
                  <li><span className="font-semibold">Proper Warm-up:</span> Thorough preparation before demanding shoulder activities.</li>
                  <li><span className="font-semibold">Posture Awareness:</span> Maintaining good posture during daily activities, work, and sleep.</li>
                  <li><span className="font-semibold">Early Intervention:</span> Addressing minor symptoms before they become major problems.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  For athletes and workers with high shoulder demands, Dr. Saxena can provide sport or occupation-specific recommendations to reduce injury risk.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing shoulder pain, stiffness, weakness, or instability, don't delay seeking professional evaluation. Dr. Abhishek Saxena provides expert diagnosis and treatment for all types of shoulder conditions, using the latest evidence-based approaches. Early intervention often leads to better outcomes and can prevent the progression of shoulder problems. Contact us today to schedule a consultation and take the first step toward shoulder pain relief and improved function.
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

export default InjuriesAroundShoulder;