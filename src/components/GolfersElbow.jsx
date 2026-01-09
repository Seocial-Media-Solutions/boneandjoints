'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const GolfersElbow = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/elbow2.png"
          title="Dr. Abhishek Saxena"
          subtitle="Get Back in the Swing: Treating Golfer’s Elbow"
          breadcrumbs={[
           
          { label: 'Golfers Elbow', path: '/conditions/golfers-elbow' }
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
              Golfer's Elbow Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/golfers-elbow.jpg"
                                  alt="Golfer's Elbow Treatment"
                                  fill
                                  className="object-fit"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Treatment for Golfer's Elbow</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Golfer's Elbow?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Golfer's elbow, medically known as medial epicondylitis, is a condition that causes pain where the tendons of your forearm muscles attach to the bony bump on the inside of your elbow. The pain might spread into your forearm and wrist. Despite its name, this condition isn't limited to golfers. Any activity that involves repetitive wrist, hand, or forearm movement can lead to golfer's elbow, including throwing sports, racket sports, weight training, and various occupational activities.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types and Causes of Golfer's Elbow
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Understanding Golfer's Elbow</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Acute Golfer's Elbow:</span> Develops suddenly, often due to a specific incident or injury.</li>
                  <li><span className="font-semibold">Chronic Golfer's Elbow:</span> Develops gradually over time, usually from repetitive motions.</li>
                  <li><span className="font-semibold">Primary vs. Secondary:</span> Primary occurs from direct overuse; secondary can develop due to referred pain from neck or shoulder issues.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Causes</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Repetitive Stress:</span> Overuse of the flexor muscles in the forearm that control wrist and finger movement.</li>
                  <li><span className="font-semibold">Sports Activities:</span> Golf, baseball, javelin throwing, football, archery, and racquet sports can all contribute to this condition.</li>
                  <li><span className="font-semibold">Occupational Activities:</span> Carpentry, plumbing, construction, assembly line work, computer work, and any job requiring repetitive wrist flexion or gripping.</li>
                  <li><span className="font-semibold">Poor Technique or Equipment:</span> Improper form during sports or work activities, or using equipment that's not properly fitted.</li>
                  <li><span className="font-semibold">Age Factor:</span> Most common in people over 40 due to decreased tendon elasticity with age.</li>
                  <li><span className="font-semibold">Forceful Activities:</span> Activities requiring a combination of force and repetitive movement can increase risk.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Symptoms and Diagnosis
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Symptoms</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Pain and tenderness on the inner side of your elbow</li>
                  <li>Stiffness in the elbow, with pain when making a fist</li>
                  <li>Weakness in the hands and wrists</li>
                  <li>Pain that radiates from the elbow down into the forearm</li>
                  <li>Discomfort that worsens with certain movements such as swinging a golf club or gripping objects</li>
                  <li>Pain when flexing the wrist toward the forearm</li>
                  <li>Numbness or tingling that might radiate into one or more fingers (usually the ring and little fingers)</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Diagnostic Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs a comprehensive approach to diagnose golfer's elbow:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Physical Examination:</span> Dr. Saxena will check for tenderness at the medial epicondyle (inner part of the elbow) and perform specific tests that replicate the pain, such as having you flex your wrist against resistance.</li>
                  <li><span className="font-semibold">Imaging Studies:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>X-rays: To rule out arthritis or other bone abnormalities</li>
                      <li>MRI: May be ordered for persistent cases or to rule out other conditions like ulnar nerve entrapment</li>
                      <li>Ultrasound: Can visualize inflammation in the tendons and rule out other causes of pain</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Electromyography (EMG):</span> In some cases, to check for nerve compression that might mimic or accompany golfer's elbow.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena develops personalized treatment plans based on the severity of the condition, duration of symptoms, and the patient's activity level and goals. Treatment options include:
                </p>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Non-Surgical Management</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Rest and Activity Modification:</span> Avoiding activities that aggravate symptoms and modifying techniques to reduce strain.</li>
                  <li><span className="font-semibold">Physical Therapy:</span> Specific exercises to stretch and strengthen the forearm flexor muscles, focusing on eccentric strength training.</li>
                  <li><span className="font-semibold">Bracing:</span> Counterforce braces below the elbow can reduce strain on the tendon by dispersing pressure throughout the arm.</li>
                  <li><span className="font-semibold">Anti-inflammatory Medications:</span> NSAIDs to reduce pain and inflammation.</li>
                  <li><span className="font-semibold">Corticosteroid Injections:</span> May provide temporary relief in moderate to severe cases, though limited in number due to potential tendon weakening.</li>
                  <li><span className="font-semibold">PRP (Platelet-Rich Plasma) Therapy:</span> An injection of your own platelets to stimulate healing in chronic cases.</li>
                  <li><span className="font-semibold">Extracorporeal Shock Wave Therapy:</span> Using sound waves to promote healing and increase blood flow to the area.</li>
                  <li><span className="font-semibold">Dry Needling or Acupuncture:</span> May provide relief for some patients.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Most cases of golfer's elbow respond well to conservative treatment, with approximately 90% of patients improving without surgery. Complete healing typically takes 3-6 months with appropriate care.
                </p>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Surgical Management</h4>
                <p className="text-gray-600">
                  Surgery may be recommended when:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Symptoms persist for 6-12 months despite comprehensive non-surgical treatment</li>
                  <li>Pain significantly interferes with daily activities</li>
                  <li>The patient has specific occupational demands that cannot accommodate prolonged conservative management</li>
                  <li>There is significant tendon damage seen on imaging</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Dr. Saxena specializes in various surgical techniques:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Open Surgery:</span> Traditional approach involving an incision over the inner elbow to remove damaged tendon tissue and reattach healthy tissue.</li>
                  <li><span className="font-semibold">Percutaneous Tenotomy:</span> A minimally invasive technique where the damaged portion of the tendon is released through a small incision.</li>
                  <li><span className="font-semibold">Arthroscopic Surgery:</span> Using small incisions and a tiny camera, Dr. Saxena can remove damaged tissue with less disruption to surrounding structures.</li>
                  <li><span className="font-semibold">TENEX Procedure:</span> An ultrasound-guided, minimally invasive technique that precisely targets and removes damaged tissue.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes state-of-the-art techniques for golfer's elbow treatment:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Minimally invasive techniques for reduced scarring and faster recovery</li>
                  <li>Precise identification and selective removal of only the diseased tissue</li>
                  <li>Advanced imaging for improved surgical planning and accuracy</li>
                  <li>Comprehensive assessment of potential contributing factors, including ulnar nerve issues</li>
                  <li>Tailored approach based on the specific pattern of tendon damage and individual patient factors</li>
                  <li>Biologic augmentation with platelet-rich plasma in appropriate cases to enhance healing</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Golfer's elbow surgery is typically performed as an outpatient procedure, allowing you to return home the same day. The procedure is usually performed under regional anesthesia (which numbs just the arm) or sometimes with general anesthesia.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  For minimally invasive surgery, Dr. Saxena makes small incisions around the elbow. Using specialized instruments, he identifies and removes the damaged tendon tissue, sometimes releasing or repairing the tendon attachment. The procedure typically takes 30-60 minutes.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  After surgery, your arm will be bandaged and might be placed in a splint temporarily. A comprehensive pain management plan will be in place to ensure your comfort during the initial recovery period. Most patients can return home within a few hours after the procedure with specific aftercare instructions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from golfer's elbow treatment follows a general timeline:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Initial Recovery (0-2 weeks):</span> Rest, protection of the surgical site, ice application, and limited activities. A splint or brace may be used.</li>
                  <li><span className="font-semibold">Early Rehabilitation (2-6 weeks):</span> Gentle range of motion exercises begin, with progressive introduction of light forearm and wrist strengthening.</li>
                  <li><span className="font-semibold">Progressive Strengthening (6-12 weeks):</span> More intensive strengthening of the forearm flexor muscles and grip, with gradual reintroduction of functional activities.</li>
                  <li><span className="font-semibold">Return to Activity (3-4 months):</span> Sport-specific or occupation-specific training with proper form and technique.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena and his team provide a customized rehabilitation protocol for each patient, with regular follow-up appointments to monitor progress. Complete recovery may take 4-6 months, though many patients notice significant improvement in symptoms within the first 6-12 weeks.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outcomes and Success Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Treatment for golfer's elbow has favorable outcomes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>90% of patients improve with comprehensive non-surgical treatment</li>
                  <li>Surgical treatment has a success rate of 85-95% for patients who have failed conservative management</li>
                  <li>Most patients report significant or complete pain relief following appropriate treatment</li>
                  <li>Return to sports and occupational activities is possible for the vast majority of patients</li>
                  <li>Long-term outcomes are excellent when proper technique and preventive measures are adopted</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Factors that influence outcomes include duration of symptoms before treatment, severity of tendon damage, patient age, compliance with rehabilitation, and willingness to modify activities that may have contributed to the condition.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To prevent golfer's elbow or its recurrence, Dr. Saxena recommends:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Strengthening the forearm muscles with specific exercises</li>
                  <li>Stretching before and after activities that stress the elbow</li>
                  <li>Proper technique in sports and occupational activities</li>
                  <li>Using equipment that fits properly (golf clubs, tools, etc.)</li>
                  <li>Ergonomic workstation setups for computer users</li>
                  <li>Taking breaks during repetitive activities</li>
                  <li>Wearing a counterforce brace during activities that stress the elbow</li>
                  <li>Gradual progression in intensity and duration of activities</li>
                  <li>Ice application after activities if you're prone to golfer's elbow</li>
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
                  If you're experiencing pain on the inner side of your elbow, especially during gripping activities or wrist flexion, early evaluation is key to successful treatment. Dr. Abhishek Saxena provides expert diagnosis and personalized treatment plans to help you recover and return to your normal activities. Schedule a consultation today to discuss your symptoms and explore your options.
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

export default GolfersElbow;