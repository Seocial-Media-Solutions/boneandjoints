'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const RecurrentShoulderDislocation = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/shoulderdislocate.png"
          title="Dr. Abhishek Saxena"
          subtitle="Redefining Recovery with Modern Orthopedic Innovation"
          breadcrumbs={[
          
          { label: 'Recurrent Shoulder Dislocation', path: '/shoulder/recurrent-shoulder-dislocation' }
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
              Recurrent Shoulder Dislocation Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/recurrent-shoulder.webp"
                                  alt="Recurrent Shoulder Dislocation Treatment"
                                  fill
                                  className="object-fit"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Treatment for Recurrent Shoulder Dislocation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Recurrent Shoulder Dislocation?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recurrent shoulder dislocation occurs when the shoulder repeatedly slips out of its socket (the glenohumeral joint). The shoulder is the most mobile joint in the body, allowing a wide range of motion, but this mobility also makes it susceptible to instability. After an initial dislocation, the supporting structures of the shoulder—including ligaments, labrum (the cartilage rim around the socket), and joint capsule—may be damaged, leading to a higher risk of repeated dislocations. Each subsequent dislocation can cause further damage to the joint and increase the likelihood of developing chronic instability, arthritis, and other long-term complications.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Causes and Risk Factors
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Several factors can contribute to recurrent shoulder dislocations:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Previous Dislocation:</span> The most significant risk factor is having experienced a prior shoulder dislocation, especially at a young age.</li>
                  <li><span className="font-semibold">Bankart Lesion:</span> Damage to the labrum, particularly to the anterior-inferior labrum (known as a Bankart lesion).</li>
                  <li><span className="font-semibold">Hill-Sachs Lesion:</span> A compression fracture of the humeral head that can occur during dislocation.</li>
                  <li><span className="font-semibold">Ligament Laxity:</span> Naturally loose ligaments or conditions like Ehlers-Danlos syndrome can increase risk.</li>
                  <li><span className="font-semibold">Age:</span> Younger patients (under 25) have a significantly higher recurrence rate after initial dislocation.</li>
                  <li><span className="font-semibold">Athletic Activities:</span> Participation in contact sports or activities requiring overhead arm movements.</li>
                  <li><span className="font-semibold">Inadequate Rehabilitation:</span> Insufficient or improper rehabilitation after the initial dislocation.</li>
                  <li><span className="font-semibold">Bone Defects:</span> Significant bone loss on either the glenoid (socket) or humeral head (ball).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Symptoms and Diagnosis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Common symptoms of recurrent shoulder dislocation include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Repeated episodes of the shoulder "giving way" or coming out of place</li>
                  <li>Visible deformity of the shoulder during dislocation episodes</li>
                  <li>Pain and swelling after dislocation</li>
                  <li>Limited range of motion</li>
                  <li>Feeling of looseness or instability in the shoulder</li>
                  <li>Apprehension or fear when the arm is positioned in certain ways</li>
                  <li>Clicking, catching, or grinding sensations</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena uses a comprehensive diagnostic approach that includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Detailed Medical History:</span> Including information about previous dislocations and circumstances surrounding them.</li>
                  <li><span className="font-semibold">Physical Examination:</span> Specific tests to assess stability and identify signs of labral tears or other damage.</li>
                  <li><span className="font-semibold">Imaging Studies:</span> X-rays, MRI with contrast (MR arthrogram), and sometimes CT scans to evaluate bone and soft tissue damage.</li>
                  <li><span className="font-semibold">Assessment of Bone Loss:</span> Quantifying glenoid and humeral bone loss, which is crucial for surgical planning.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena develops personalized treatment plans based on several factors, including the patient's age, activity level, number of previous dislocations, and degree of structural damage. Treatment options include:
                </p>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Non-Surgical Management</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Physical Therapy:</span> Focused on strengthening the rotator cuff and scapular stabilizing muscles to improve dynamic shoulder stability.</li>
                  <li><span className="font-semibold">Activity Modification:</span> Avoiding positions and activities that put the shoulder at risk for dislocation.</li>
                  <li><span className="font-semibold">Bracing:</span> In some cases, temporary bracing can help during the healing or rehabilitation process.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  While non-surgical approaches may be attempted, particularly in older, less active patients, they are generally less effective for younger, active individuals with recurrent dislocations.
                </p>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Surgical Management</h4>
                <p className="text-gray-600">
                  Dr. Saxena specializes in advanced surgical techniques for shoulder instability:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Arthroscopic Bankart Repair:</span> Minimally invasive procedure to reattach the torn labrum to the glenoid rim using special anchors and sutures.</li>
                  <li><span className="font-semibold">Capsular Shift/Plication:</span> Tightening the loose joint capsule to enhance stability.</li>
                  <li><span className="font-semibold">Remplissage Procedure:</span> Addressing Hill-Sachs lesions by filling the defect with part of the infraspinatus tendon.</li>
                  <li><span className="font-semibold">Latarjet Procedure:</span> For cases with significant bone loss, involving transfer of a portion of the coracoid process to the front of the glenoid.</li>
                  <li><span className="font-semibold">Glenoid Augmentation:</span> Using bone grafts to reconstruct the glenoid in cases of severe bone loss.</li>
                  <li><span className="font-semibold">Combined Procedures:</span> Tailored approaches addressing multiple aspects of instability simultaneously.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes state-of-the-art techniques for treating recurrent shoulder dislocation:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>3D preoperative planning for precise assessment of structural damage</li>
                  <li>High-definition arthroscopy for minimally invasive procedures</li>
                  <li>Advanced suture anchor systems for superior fixation</li>
                  <li>Modified Latarjet techniques with specialized instrumentation</li>
                  <li>Customized approach based on individual patient's pathology and needs</li>
                  <li>Comprehensive intraoperative assessment of all potential contributing factors</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most shoulder stabilization procedures are performed arthroscopically, allowing for smaller incisions, less pain, and quicker recovery. The procedure is typically performed under general anesthesia, often supplemented with a regional nerve block for postoperative pain control.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Arthroscopic procedures usually require 2-4 small incisions (portals) around the shoulder. Through these portals, Dr. Saxena inserts a camera and specialized instruments to repair the damaged structures. Most patients can return home the same day, though some complex procedures may require an overnight stay.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  For open procedures like the Latarjet, a slightly larger incision (approximately 5-7 cm) is made at the front of the shoulder. These procedures typically require more extensive dissection but provide robust solutions for complex instability cases.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from shoulder stabilization surgery follows a progressive timeline:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Initial Phase (0-6 weeks):</span> The arm is protected in a sling, with limited movement allowed. Passive range of motion exercises begin under the guidance of a physical therapist.</li>
                  <li><span className="font-semibold">Intermediate Phase (6-12 weeks):</span> Progressive transition to active motion exercises as healing progresses. The sling is discontinued, and gentle strengthening exercises begin.</li>
                  <li><span className="font-semibold">Strengthening Phase (3-4 months):</span> Focus shifts to building rotator cuff and scapular muscle strength with progressive resistance training.</li>
                  <li><span className="font-semibold">Return to Activity Phase (4-6 months):</span> Sport-specific or activity-specific conditioning and gradual return to full activities.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena and his team provide a customized rehabilitation protocol for each patient, with regular follow-up appointments to monitor progress and ensure optimal healing. Full recovery can take 6-9 months, depending on the procedure performed and individual healing rates.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outcomes and Success Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern surgical techniques for treating recurrent shoulder dislocation have excellent success rates:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Over 90% of patients experience no further dislocations after appropriate surgical stabilization</li>
                  <li>Most patients can return to their previous level of activity, including sports</li>
                  <li>Significant improvement in comfort and confidence in shoulder function</li>
                  <li>Reduced risk of developing arthritis from repeated dislocations</li>
                  <li>High patient satisfaction rates</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Factors that influence outcomes include the number of previous dislocations, amount of bone loss, type of procedure performed, and adherence to rehabilitation protocols. Dr. Saxena carefully evaluates each patient to select the procedure with the highest likelihood of success for their specific situation.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing recurrent shoulder dislocations or instability, don't wait for the condition to worsen. Dr. Abhishek Saxena provides expert evaluation and personalized treatment plans to help you regain shoulder stability and return to your activities with confidence. Schedule a consultation today to discuss your symptoms and explore your treatment options.
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

export default RecurrentShoulderDislocation;