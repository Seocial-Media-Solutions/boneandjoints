'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const RotatorCuffTear = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/cuff1.png"
          title="Dr. Abhishek Saxena"
          subtitle="Rotator Cuff Injury: Causes, Symptoms & Treatment"
          breadcrumbs={[
          
          { label: 'Rotator Cuff Tear', path: '/conditions/rotator-cuff-tear' }
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
              Rotator Cuff Tear Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/cuff-tear.png"
                                  alt="Rotator Cuff Tear Treatment"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Treatment for Rotator Cuff Tears</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is a Rotator Cuff Tear?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The rotator cuff is a group of four muscles and their tendons that surround the shoulder joint, keeping the head of the upper arm bone (humerus) firmly within the shallow socket of the shoulder (glenoid). These muscles (supraspinatus, infraspinatus, teres minor, and subscapularis) work together to provide stability and allow a wide range of motion. A rotator cuff tear occurs when one or more of these tendons is torn, either partially or completely, reducing the ability to move the arm properly and often causing significant pain.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types and Causes of Rotator Cuff Tears
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Types of Tears</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Partial Tear:</span> The tendon is damaged but not completely severed.</li>
                  <li><span className="font-semibold">Full-Thickness Tear:</span> A complete tear that creates a hole through the tendon, separating it from the bone.</li>
                  <li><span className="font-semibold">Acute Tear:</span> Occurs suddenly, typically from an injury or trauma.</li>
                  <li><span className="font-semibold">Chronic Tear:</span> Develops slowly over time due to degeneration or repetitive stress.</li>
                  <li><span className="font-semibold">Massive Tear:</span> Involves two or more tendons and may be more challenging to repair.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Causes</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Age-Related Degeneration:</span> Most common in individuals over 40, as tendons naturally wear down over time.</li>
                  <li><span className="font-semibold">Acute Injury:</span> Falling on an outstretched arm, lifting something heavy with a jerking motion, or direct trauma to the shoulder.</li>
                  <li><span className="font-semibold">Repetitive Overhead Activities:</span> Common in painters, carpenters, athletes (particularly swimmers, baseball players, and tennis players), and others who repeatedly use their arms overhead.</li>
                  <li><span className="font-semibold">Reduced Blood Supply:</span> The area where the rotator cuff attaches to the bone naturally has less blood flow, slowing healing and making it more vulnerable to degeneration.</li>
                  <li><span className="font-semibold">Bone Spurs:</span> Overgrowth of bone can rub against tendons, causing wear and eventual tearing.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Symptoms and Diagnosis
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Symptoms</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Pain, especially when lying on the affected shoulder or lifting and lowering the arm</li>
                  <li>Weakness when lifting or rotating the arm</li>
                  <li>Crackling sensation (crepitus) when moving the shoulder</li>
                  <li>Limited range of motion</li>
                  <li>Difficulty performing activities like reaching behind the back or overhead</li>
                  <li>Pain that may disturb sleep, especially when lying on the affected side</li>
                  <li>Arm weakness that may worsen over time</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Diagnostic Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs a comprehensive approach to diagnose rotator cuff tears:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Physical Examination:</span> Testing strength, range of motion, and specific maneuvers to identify rotator cuff problems.</li>
                  <li><span className="font-semibold">Imaging Studies:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>X-rays: To rule out bone spurs, arthritis, or other bone abnormalities</li>
                      <li>MRI: Gold standard for visualizing soft tissues, showing the size, location, and extent of tears</li>
                      <li>Ultrasound: Dynamic imaging that can be useful for evaluating the rotator cuff while in motion</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Diagnostic Injection:</span> Sometimes used to differentiate between various shoulder conditions by temporarily relieving pain.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena develops personalized treatment plans based on several factors, including the patient's age, activity level, tear size, symptom duration, and overall health. Treatment options include:
                </p>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Non-Surgical Management</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Rest and Activity Modification:</span> Avoiding activities that exacerbate symptoms, particularly overhead movements.</li>
                  <li><span className="font-semibold">Physical Therapy:</span> Structured exercises to strengthen the remaining rotator cuff muscles and improve shoulder mechanics.</li>
                  <li><span className="font-semibold">Anti-inflammatory Medications:</span> To reduce pain and swelling.</li>
                  <li><span className="font-semibold">Steroid Injections:</span> Can provide temporary relief for pain and inflammation, though limited in number due to potential tendon weakening with repeated use.</li>
                  <li><span className="font-semibold">Regenerative Medicine Treatments:</span> Including platelet-rich plasma (PRP) or stem cell therapies in appropriate cases.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Non-surgical approaches may be particularly effective for partial tears, older patients with lower physical demands, or tears related to a single incident with minimal retraction.
                </p>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Surgical Management</h4>
                <p className="text-gray-600">
                  Surgery may be recommended when:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Symptoms persist despite conservative treatment</li>
                  <li>The tear is large (over 1-1.5 cm) or complete</li>
                  <li>The tear is acute and occurred in an otherwise healthy tendon</li>
                  <li>Significant weakness or functional limitation is present</li>
                  <li>The patient has high physical demands (athletes, manual laborers)</li>
                  <li>The patient is relatively young and active</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Dr. Saxena specializes in various surgical techniques:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Arthroscopic Repair:</span> Minimally invasive approach using small incisions and specialized instruments to reattach the tendon to bone using anchors and sutures.</li>
                  <li><span className="font-semibold">Mini-Open Repair:</span> Combines arthroscopy with a small incision for more complex tears.</li>
                  <li><span className="font-semibold">Open Repair:</span> Traditional approach for extremely large or complex tears.</li>
                  <li><span className="font-semibold">Superior Capsular Reconstruction (SCR):</span> Advanced technique for irreparable tears, using a graft to stabilize the humeral head.</li>
                  <li><span className="font-semibold">Partial Repair or Margin Convergence:</span> For massive tears where complete repair isn't possible.</li>
                  <li><span className="font-semibold">Tendon Transfers:</span> Using nearby healthy tendons to compensate for irreparable rotator cuff damage.</li>
                  <li><span className="font-semibold">Reverse Shoulder Replacement:</span> For severe, irreparable tears with arthritis in older patients.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes state-of-the-art techniques for rotator cuff repair:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>High-definition arthroscopy for enhanced visualization</li>
                  <li>Double-row and suture-bridge fixation techniques for stronger repairs</li>
                  <li>Biologic augmentation with platelet-rich plasma or other growth factors when appropriate</li>
                  <li>Advanced instrumentations for precise and efficient repairs</li>
                  <li>Comprehensive treatment of associated conditions (biceps pathology, acromioclavicular joint issues)</li>
                  <li>Customized approach based on tear pattern, tissue quality, and patient factors</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most rotator cuff repairs are performed arthroscopically on an outpatient basis. The procedure is typically carried out under general anesthesia, often combined with a regional nerve block for postoperative pain control.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  During arthroscopic repair, Dr. Saxena makes several small incisions (portals) around the shoulder. Through these portals, a camera and specialized instruments are inserted to remove damaged tissue, prepare the bone surface, and secure the tendon back to the bone using anchors and sutures. The procedure typically takes 1-2 hours, depending on the complexity of the tear and any associated procedures needed.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Patients usually go home the same day with their arm in a specialized sling or immobilizer to protect the repair. Pain management protocols, including multimodal medications and sometimes continuous cooling devices, help ensure comfort during the initial recovery period.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from rotator cuff repair is a gradual process that typically follows this timeline:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Protection Phase (0-6 weeks):</span> The arm is kept in a sling to protect the repair. Passive motion exercises may begin soon after surgery under the guidance of a physical therapist, but active movement of the shoulder is restricted.</li>
                  <li><span className="font-semibold">Early Healing Phase (6-12 weeks):</span> The sling is gradually discontinued, and active-assisted range of motion exercises begin. Light activities of daily living are introduced, but lifting is still limited.</li>
                  <li><span className="font-semibold">Strengthening Phase (3-4 months):</span> Progressive strengthening exercises for the rotator cuff and surrounding muscles begin. Functional activities are gradually reintroduced.</li>
                  <li><span className="font-semibold">Return to Activity Phase (4-6 months):</span> Sport-specific or occupation-specific rehabilitation with a gradual return to full activities.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena and his team provide a customized rehabilitation protocol for each patient, with regular follow-up appointments to monitor progress. The exact timeline can vary based on the size of the tear, quality of tissue, type of repair, and individual healing rates. Complete recovery and maximum improvement may take 6-12 months.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outcomes and Success Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern rotator cuff repair techniques have good to excellent outcomes in the majority of patients:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>85-95% of patients experience significant pain relief</li>
                  <li>Most patients regain functional range of motion and strength</li>
                  <li>Return to previous activities is possible for most patients, though some high-demand activities may need modification</li>
                  <li>Structural healing rates vary (70-90%) depending on tear size, patient age, tissue quality, and compliance with rehabilitation</li>
                  <li>Even in cases where complete healing doesn't occur, many patients still experience substantial pain relief and functional improvement</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Factors that influence outcomes include patient age, tear size, tissue quality, smoking status, diabetes, timing of surgery, and adherence to postoperative protocols. Dr. Saxena takes all these factors into account when developing treatment recommendations and setting realistic expectations.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  While not all rotator cuff tears can be prevented, especially those related to aging, several strategies may reduce risk:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Maintaining good shoulder strength and flexibility</li>
                  <li>Using proper technique during sports and work activities</li>
                  <li>Taking breaks from repetitive overhead activities</li>
                  <li>Progressive training for athletes and workers who use their shoulders extensively</li>
                  <li>Addressing early symptoms before they progress to a full tear</li>
                  <li>Proper posture and ergonomics</li>
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
                  If you're experiencing shoulder pain, weakness, or limited motion that might indicate a rotator cuff tear, early evaluation is key to successful treatment. Dr. Abhishek Saxena provides expert diagnosis and personalized treatment plans to help you recover and return to your normal activities. Schedule a consultation today to discuss your symptoms and explore your options.
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

export default RotatorCuffTear;