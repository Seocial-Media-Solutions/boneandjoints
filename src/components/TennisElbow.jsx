'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const TennisElbow = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/elbow.png"
          title="Dr. Abhishek Saxena"
          subtitle="Elbow Pain: Common Injuries and Treatments"
          breadcrumbs={[
         
          { label: 'Tennis Elbow', path: '/conditions/tennis-elbow' }
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
              Tennis Elbow Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/tennis-elbow.jpg"
                                  alt="Tennis Elbow Treatment"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Treatment for Tennis Elbow</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Tennis Elbow?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tennis elbow, medically known as lateral epicondylitis, is a painful condition that occurs when the tendons in your elbow are overloaded, usually by repetitive motions of the wrist and arm. Despite its name, athletes aren't the only people who develop tennis elbow. Anyone whose activities involve repetitive wrist and arm motions can develop this painful condition, including plumbers, painters, carpenters, and butchers.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types and Causes of Tennis Elbow
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Understanding Tennis Elbow</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Acute Tennis Elbow:</span> Develops suddenly, often due to a specific incident or injury.</li>
                  <li><span className="font-semibold">Chronic Tennis Elbow:</span> Develops gradually over time, usually from repetitive motions.</li>
                  <li><span className="font-semibold">Mild to Severe:</span> Ranges from occasional discomfort during activities to constant pain that interferes with daily tasks.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Causes</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Repetitive Motion:</span> The primary cause is overuse from repetitive wrist and arm movements, causing small tears in the tendon.</li>
                  <li><span className="font-semibold">Sports Activities:</span> Tennis, racquetball, squash, fencing, and weight lifting can all contribute to this condition.</li>
                  <li><span className="font-semibold">Occupational Activities:</span> Painting, plumbing, carpentry, typing, cooking, and other jobs that involve repetitive arm movements.</li>
                  <li><span className="font-semibold">Age Factor:</span> Most common in adults between 30 and 50 years old.</li>
                  <li><span className="font-semibold">Improper Technique:</span> Using poor form during sporting activities or work tasks that put extra stress on the tendons.</li>
                  <li><span className="font-semibold">Inadequate Equipment:</span> Using tools or sports equipment that are too heavy or have grips that are too large or small.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Symptoms and Diagnosis
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Symptoms</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Pain and burning on the outer part of the elbow, which may gradually worsen</li>
                  <li>Weak grip strength</li>
                  <li>Pain that worsens with forearm activities like holding a racquet, turning a wrench, or shaking hands</li>
                  <li>Pain that radiates from the outside of the elbow into the forearm and wrist</li>
                  <li>Difficulty extending your arm fully</li>
                  <li>Morning stiffness or pain when trying to make a fist</li>
                  <li>Pain when lifting objects, opening doors, or raising your hand</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Diagnostic Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs a comprehensive approach to diagnose tennis elbow:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Physical Examination:</span> Dr. Saxena will check for tenderness at the lateral epicondyle (outer part of the elbow) and may perform specific tests that put stress on the affected tendons to reproduce symptoms.</li>
                  <li><span className="font-semibold">Imaging Studies:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>X-rays: To rule out arthritis or other bone problems</li>
                      <li>MRI: May be ordered in cases where symptoms don't improve or to rule out other conditions</li>
                      <li>Ultrasound: Can visualize tendon damage and inflammation in real-time</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Electromyography (EMG):</span> In some cases, to exclude nerve compression syndromes like radial tunnel syndrome.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena develops personalized treatment plans based on the severity of the condition, duration of symptoms, and the patient's lifestyle and activity requirements. Treatment options include:
                </p>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Non-Surgical Management</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Rest and Activity Modification:</span> Avoiding activities that worsen symptoms and modifying techniques to reduce strain.</li>
                  <li><span className="font-semibold">Physical Therapy:</span> Specific exercises to stretch and strengthen the forearm muscles, improving flexibility and gradually building tendon resilience.</li>
                  <li><span className="font-semibold">Bracing:</span> Counter-force braces or tennis elbow straps help reduce strain on the injured tendon by redirecting forces away from the injured area.</li>
                  <li><span className="font-semibold">Anti-inflammatory Medications:</span> NSAIDs to reduce pain and inflammation.</li>
                  <li><span className="font-semibold">Corticosteroid Injections:</span> May provide temporary relief for severe pain, though limited in number due to potential tendon weakening with repeated use.</li>
                  <li><span className="font-semibold">PRP (Platelet-Rich Plasma) Therapy:</span> Utilizing the body's own healing factors to promote tissue repair.</li>
                  <li><span className="font-semibold">Extracorporeal Shock Wave Therapy (ESWT):</span> Sound waves stimulate healing in the affected tendon.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Non-surgical approaches are successful in approximately 80-95% of cases, especially when started early. Most patients see improvement within 6-12 weeks with appropriate treatment.
                </p>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Surgical Management</h4>
                <p className="text-gray-600">
                  Surgery may be recommended when:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Symptoms persist for 6-12 months despite conservative treatment</li>
                  <li>Pain significantly interferes with daily activities and sleep</li>
                  <li>Conservative measures provide limited or temporary relief</li>
                  <li>The patient has occupational demands that cannot accommodate prolonged conservative treatment</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Dr. Saxena specializes in various surgical techniques:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Open Surgery:</span> Traditional approach involving an incision over the elbow to remove damaged tissue and reattach healthy muscle to bone.</li>
                  <li><span className="font-semibold">Arthroscopic Surgery:</span> Minimally invasive approach using small incisions and a camera to guide the removal of damaged tissue.</li>
                  <li><span className="font-semibold">Percutaneous Tenotomy:</span> A technique where the damaged portion of the tendon is released through a small incision.</li>
                  <li><span className="font-semibold">TENEX Procedure:</span> Ultrasound-guided removal of damaged tissue using specialized equipment.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes state-of-the-art techniques for tennis elbow treatment:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Minimally invasive arthroscopic techniques for faster recovery and less scarring</li>
                  <li>Precise identification and removal of only the diseased tissue, preserving healthy structures</li>
                  <li>Advanced imaging guidance for improved accuracy</li>
                  <li>Combined approaches addressing both the tendon pathology and any associated conditions</li>
                  <li>Biologic augmentation with platelet-rich plasma when appropriate</li>
                  <li>Customized surgical planning based on the specific nature of the tendon damage and patient factors</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tennis elbow surgery is typically performed as an outpatient procedure, meaning you can go home the same day. The procedure is usually carried out under regional anesthesia (numbing just the arm) or sometimes with general anesthesia.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  For arthroscopic surgery, Dr. Saxena makes several small incisions around the elbow. Through these portals, a camera and specialized instruments are inserted to identify and remove damaged tissue. The procedure typically takes 30-60 minutes.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  After surgery, your arm will be bandaged and possibly placed in a splint temporarily. Pain management protocols, including appropriate medications, help ensure comfort during the initial recovery period. Most patients can return home within a few hours after the procedure.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from tennis elbow treatment varies depending on the severity of the condition and the type of treatment received:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Initial Recovery (0-2 weeks):</span> Rest, ice, protection of the surgical site, and limited activities. A splint may be used briefly.</li>
                  <li><span className="font-semibold">Early Rehabilitation (2-6 weeks):</span> Gentle range of motion exercises begin, with gradual progression to light strengthening as healing progresses.</li>
                  <li><span className="font-semibold">Strengthening Phase (6-12 weeks):</span> Progressive resistance exercises targeting the wrist extensors and forearm muscles.</li>
                  <li><span className="font-semibold">Return to Activity (3-6 months):</span> Gradual return to sports and occupational activities with proper technique and equipment modifications if necessary.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena and his team provide a customized rehabilitation protocol for each patient, with regular follow-up appointments to monitor progress. Full recovery may take 4-6 months, though many patients notice significant improvement in symptoms much earlier.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outcomes and Success Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Treatment for tennis elbow generally has very good outcomes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>80-95% of patients improve with non-surgical treatment alone</li>
                  <li>Surgical treatment has a success rate of approximately 85-90%</li>
                  <li>Most patients experience significant or complete pain relief</li>
                  <li>Return to previous work and recreational activities is possible for the vast majority of patients</li>
                  <li>Recurrence rates are low when proper technique modifications and preventive measures are adopted</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Factors that influence outcomes include duration of symptoms before treatment, severity of tendon damage, patient age, compliance with rehabilitation, and willingness to modify activities or techniques that contributed to the condition.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To prevent tennis elbow or its recurrence, Dr. Saxena recommends:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Proper warm-up before activities that use the arms and wrists</li>
                  <li>Strengthening forearm muscles with specific exercises</li>
                  <li>Using proper technique in sports and occupational activities</li>
                  <li>Ensuring equipment is properly sized and not too heavy (racquets, tools)</li>
                  <li>Taking breaks during repetitive activities</li>
                  <li>Using ergonomically designed tools and equipment</li>
                  <li>Wearing a counterforce brace during activities that stress the forearm</li>
                  <li>Stretching the forearm muscles regularly, especially before and after activities</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena can provide personalized recommendations for prevention based on your specific activities and risk factors.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing elbow pain, especially during activities that involve gripping or wrist movement, early evaluation is key to successful treatment. Dr. Abhishek Saxena provides expert diagnosis and personalized treatment plans to help you recover and return to your normal activities pain-free. Schedule a consultation today to discuss your symptoms and explore your options.
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

export default TennisElbow;