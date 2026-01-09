'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

const HipLabralTear = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/hipproblem.png"
          title="Dr. Abhishek Saxena"
          subtitle="Hip Labral Tear: Causes, Symptoms & Treatment"
          breadcrumbs={[
          
          { label: 'Hip Labral Tear', path: '/conditions/hip-labral-tear' }
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
              Hip Labral Tear Treatment
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/labral-tear.jpg"
                                  alt="Hip Labral Tear Treatment"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Treatment for Hip Labral Tears</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is a Hip Labral Tear?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The hip labrum is a ring of strong fibrocartilage that surrounds the rim of the hip socket (acetabulum). It creates a tight seal around the ball of the femur (femoral head), providing stability, cushioning, and a smooth surface for the joint to move. A hip labral tear occurs when this cartilage ring becomes damaged or torn, which can disrupt normal hip function and cause significant pain. The labrum plays an essential role in maintaining proper hip mechanics and distributing pressure evenly across the joint.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types and Causes of Hip Labral Tears
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Types of Tears</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Radial Tears:</span> Occur perpendicular to the labrum edge, creating a split in the tissue.</li>
                  <li><span className="font-semibold">Peripheral Tears:</span> Develop at the attachment point between the labrum and acetabulum.</li>
                  <li><span className="font-semibold">Degenerative Tears:</span> Result from wear and tear over time, with fraying of the labral tissue.</li>
                  <li><span className="font-semibold">Anterior Tears:</span> Most common location, typically associated with FAI (femoroacetabular impingement).</li>
                  <li><span className="font-semibold">Posterior Tears:</span> Less common, often related to traumatic injuries or instability.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Causes</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Femoroacetabular Impingement (FAI):</span> Abnormal bone growths on the femoral head or acetabulum cause friction during movement, damaging the labrum. This is the most common cause.</li>
                  <li><span className="font-semibold">Trauma:</span> Falls, car accidents, sports injuries, or dislocations can cause sudden labral tears.</li>
                  <li><span className="font-semibold">Repetitive Movements:</span> Activities requiring extreme hip rotation or flexion such as ballet, hockey, soccer, golf, and football can lead to labral damage over time.</li>
                  <li><span className="font-semibold">Structural Abnormalities:</span> Hip dysplasia or other congenital conditions can place abnormal stress on the labrum.</li>
                  <li><span className="font-semibold">Degenerative Changes:</span> Age-related wear and tear can weaken labral tissue, making it more susceptible to tearing.</li>
                  <li><span className="font-semibold">Capsular Laxity:</span> Loose ligaments around the hip can cause instability, leading to labral injury.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Symptoms and Diagnosis
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Common Symptoms</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Pain in the hip or groin area, especially during activity</li>
                  <li>A clicking, locking, or catching sensation in the hip joint</li>
                  <li>Stiffness or limited range of motion in the hip</li>
                  <li>Deep ache in the buttock or outer hip region</li>
                  <li>Pain that worsens with prolonged sitting, walking, or athletic activities</li>
                  <li>Sensation of instability in the hip</li>
                  <li>Pain that radiates into the thigh</li>
                  <li>Difficulty with activities like putting on shoes and socks</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Diagnostic Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs a thorough approach to diagnose hip labral tears:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Detailed Medical History:</span> Reviewing symptoms, previous injuries, and activities that aggravate the hip.</li>
                  <li><span className="font-semibold">Physical Examination:</span> Specific tests to evaluate hip range of motion, stability, and reproduction of symptoms, including:
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>FADIR test (flexion, adduction, internal rotation)</li>
                      <li>FABER test (flexion, abduction, external rotation)</li>
                      <li>Resisted straight leg raise</li>
                      <li>Assessment for clicking or catching</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Imaging Studies:</span>
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>X-rays: To assess bone structure, detect FAI, dysplasia, or arthritis</li>
                      <li>MRI with contrast (arthrogram): Gold standard for visualizing labral tears</li>
                      <li>CT scans: Sometimes used to better understand bony abnormalities</li>
                      <li>Ultrasound: May help in dynamic assessment of the hip</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Diagnostic Injection:</span> Anesthetic injected into the hip joint can confirm the source of pain if symptoms are temporarily relieved.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena develops individualized treatment plans based on the patient's age, activity level, type and location of the tear, underlying causes, and overall health. Treatment approaches include:
                </p>
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Non-Surgical Management</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Activity Modification:</span> Temporarily avoiding activities that aggravate symptoms, particularly those involving pivoting, twisting, or impact.</li>
                  <li><span className="font-semibold">Physical Therapy:</span> Focused exercises to improve hip stability, core strength, and biomechanics.</li>
                  <li><span className="font-semibold">Anti-inflammatory Medications:</span> NSAIDs to reduce pain and inflammation.</li>
                  <li><span className="font-semibold">Intra-articular Injections:</span> Corticosteroid or hyaluronic acid injections may provide temporary relief.</li>
                  <li><span className="font-semibold">Regenerative Medicine:</span> PRP (platelet-rich plasma) or other biologics may be considered in select cases.</li>
                  <li><span className="font-semibold">Assistive Devices:</span> Canes or crutches may be used temporarily to reduce weight-bearing.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Non-surgical approaches are often tried first, especially for minor tears or in patients with lower physical demands. However, labral tears often don't heal on their own due to the limited blood supply to this tissue.
                </p>
                
                <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Surgical Management</h4>
                <p className="text-gray-600">
                  Surgery may be recommended when:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Symptoms persist despite conservative treatment (typically 4-6 weeks)</li>
                  <li>The tear is causing significant mechanical symptoms (locking, catching)</li>
                  <li>There are associated structural abnormalities requiring correction</li>
                  <li>The patient is young, active, or an athlete</li>
                  <li>The tear is large or causing progressive damage to the hip joint</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Dr. Saxena specializes in various surgical techniques:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Hip Arthroscopy:</span> Minimally invasive procedure using small incisions and a camera to repair the labrum with suture anchors. This is the most common approach.</li>
                  <li><span className="font-semibold">Labral Repair:</span> Reattaching the torn labrum to the acetabular rim using specialized anchors.</li>
                  <li><span className="font-semibold">Labral Reconstruction:</span> For severely damaged labrum, using graft tissue (often from the patient's own body or allograft) to rebuild the labrum.</li>
                  <li><span className="font-semibold">Labral Debridement:</span> Removing damaged tissue in cases where repair isn't feasible, though this is less preferred.</li>
                  <li><span className="font-semibold">FAI Correction:</span> Addressing bone abnormalities causing impingement:
                    <ul className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Femoral osteoplasty (reshaping the femoral head/neck)</li>
                      <li>Acetabular rim trimming (for pincer impingement)</li>
                    </ul>
                  </li>
                  <li><span className="font-semibold">Capsular Plication or Repair:</span> Tightening loose ligaments to improve stability.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena employs cutting-edge techniques for hip labral repair:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>High-resolution arthroscopy for precise visualization and access</li>
                  <li>Advanced suture anchor technology for secure fixation</li>
                  <li>Comprehensive treatment of associated conditions (FAI, dysplasia, cartilage damage)</li>
                  <li>Preservation of healthy tissue and minimization of surgical trauma</li>
                  <li>Capsular management techniques to preserve stability</li>
                  <li>Biological augmentation when appropriate (PRP, growth factors)</li>
                  <li>Computer navigation for precise bone reshaping in complex cases</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hip arthroscopy is typically performed as an outpatient procedure under general anesthesia, sometimes with regional anesthesia for postoperative pain control.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  During surgery, Dr. Saxena makes 2-4 small incisions (about 1 cm each) around the hip. A specialized traction table is used to gently separate the femoral head from the socket, creating enough space to insert the arthroscope and instruments. The entire hip joint is examined, including the labrum, cartilage surfaces, and surrounding structures.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  The torn labrum is repaired using specialized suture anchors that secure the tissue back to the bone. Any bone abnormalities contributing to impingement are addressed by reshaping the femoral head/neck or acetabular rim. Associated cartilage damage may be treated with debridement or microfracture techniques. The procedure typically takes 1.5-3 hours, depending on the complexity of the case.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Patients go home the same day with crutches to assist with walking. A specialized brace may be used temporarily to protect the repair. Pain management protocols include multimodal medications and sometimes continuous cooling devices to ensure comfort during recovery.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from hip labral repair follows a progressive timeline:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Initial Phase (0-2 weeks):</span> Limited weight-bearing with crutches, gentle range of motion exercises, and protection against extremes of motion.</li>
                  <li><span className="font-semibold">Early Recovery (2-6 weeks):</span> Progressive weight-bearing as tolerated, stationary cycling, and gradually increasing range of motion. Brace may be discontinued based on healing progress.</li>
                  <li><span className="font-semibold">Intermediate Phase (6-12 weeks):</span> Focus on strengthening hip muscles, core stability, and normalized gait. Return to low-impact activities like swimming, elliptical training.</li>
                  <li><span className="font-semibold">Advanced Phase (3-5 months):</span> Sport-specific or activity-specific rehabilitation, agility drills, and gradual return to higher-impact activities.</li>
                  <li><span className="font-semibold">Return to Full Activity (5-7 months):</span> Resumption of pre-injury activities including sports, with proper technique and preventive strategies.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena provides a customized rehabilitation protocol for each patient with regular follow-up appointments to monitor progress. The specific timeline varies based on the extent of the repair, associated procedures, and individual healing. Complete recovery and maximum improvement may take 6-12 months.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outcomes and Success Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hip labral repair has shown favorable outcomes in appropriately selected patients:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>80-90% of patients experience significant pain reduction</li>
                  <li>Most patients regain functional mobility and return to daily activities</li>
                  <li>70-85% of athletes return to their pre-injury level of sports participation</li>
                  <li>Long-term studies show preservation of hip function and potential delay of arthritis progression</li>
                  <li>Patient satisfaction rates exceed 80% in most studies</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Factors influencing outcomes include the duration of symptoms before surgery (earlier intervention generally yields better results), extent of cartilage damage, presence of arthritis, patient age, adherence to rehabilitation, and addressing all sources of impingement. Dr. Saxena discusses these factors during consultation to help set realistic expectations.
                </p>
                <p className="text-gray-600 mt-4">
                  It's important to note that while most patients improve substantially, some may still have residual symptoms, especially if there was significant pre-existing joint damage or if arthritis was already present.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prevention Strategies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  While not all hip labral tears can be prevented, especially those related to structural abnormalities, several strategies may reduce risk:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Proper warm-up before athletic activities</li>
                  <li>Core and hip strengthening exercises</li>
                  <li>Maintaining flexibility of hip muscles</li>
                  <li>Using proper technique during sports and fitness activities</li>
                  <li>Avoiding excessive training or repetitive high-impact activities without adequate recovery</li>
                  <li>Early evaluation of hip pain or clicking to prevent progression</li>
                  <li>Sport-specific preventive training programs for athletes</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Dr. Saxena can provide personalized prevention recommendations based on your anatomy, activities, and risk factors. For those with known FAI or dysplasia, specialized exercise programs may help reduce the risk of labral injuries.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing hip pain, clicking, or limited mobility that might indicate a hip labral tear, prompt evaluation can lead to better outcomes. Dr. Abhishek Saxena provides expert diagnosis and personalized treatment plans to help you recover and return to an active lifestyle. Schedule a consultation today to discuss your symptoms and explore treatment options.
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

export default HipLabralTear;