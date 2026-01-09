

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';
import Link from 'next/link';

export const metadata = {
  title: 'Shoulder Replacement Surgeon in Ajmer | Dr. Abhishek Saxena',
  description: 'Advanced Shoulder replacement surgery in Ajmer by Dr. Abhishek Saxena. Get expert orthopedic care for joint replacements with minimally invasive techniques and faster recovery.',
  keywords: 'hip replacement Ajmer, Shoulder replacement surgery, joint replacement specialist, orthopedic surgeon Ajmer, total Shoulder replacement, partial Shoulder replacement, hip resurfacing, revision joint replacement, Dr. Abhishek Saxena',
  openGraph: {
    title: 'Shoulder Replacement Surgeon in Ajmer | Dr. Abhishek Saxena',
    description: 'Specialized joint replacement services including total Shoulder replacement, partial Shoulder replacement, and hip replacement surgery by top orthopedic surgeon in Ajmer.',
    images: [
      {
        url: '/images/shoulder-replacement.webp', 
        width: 800,
        height: 600,
        alt: 'Joint Replacement Services in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/replacement/shoulder-replacement',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/replacement/shoulder-replacement',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ShoulderReplacement = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
           
          { label: 'Modern Solutions for Shoulder Replacement', path: '/replacement/shoulder-replacement' }
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
              Shoulder Replacement Surgery
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/shoulder-replacement.webp"
                                  alt="Shoulder Replacement Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Advanced Shoulder Replacement Surgery</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Shoulder Replacement Surgery?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shoulder replacement surgery (shoulder arthroplasty) involves replacing damaged parts of the shoulder joint with prosthetic components. The shoulder is a ball-and-socket joint where the head of the humerus (upper arm bone) fits into a shallow socket in the scapula (shoulder blade). During replacement surgery, the damaged humeral head is replaced with a metal ball attached to a stem, while the socket may be resurfaced with a plastic or metal and plastic component. This procedure is typically performed to relieve pain and restore function in shoulders damaged by various forms of arthritis, severe fractures, or other degenerative conditions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  When Is Shoulder Replacement Recommended?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena may recommend shoulder replacement surgery for patients experiencing:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Severe shoulder pain that interferes with daily activities</li>
                  <li>Moderate to severe pain while resting, particularly at night</li>
                  <li>Loss of motion or weakness in the shoulder</li>
                  <li>Failure to improve with conservative treatments like medications, injections, or physical therapy</li>
                  <li>Advanced osteoarthritis (degenerative joint disease)</li>
                  <li>Rheumatoid arthritis causing severe joint damage</li>
                  <li>Post-traumatic arthritis following a severe shoulder injury</li>
                  <li>Complex fractures of the shoulder that cannot be reconstructed</li>
                  <li>Avascular necrosis (death of bone tissue due to limited blood flow)</li>
                  <li>Rotator cuff tear arthropathy (a combination of severe arthritis and a massive rotator cuff tear)</li>
                  <li>Failed previous shoulder replacement surgery (revision surgery)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types of Shoulder Replacement Procedures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena specializes in various shoulder replacement techniques, tailoring the approach to each patient's specific condition:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Total Shoulder Replacement:</span> Both the ball (humeral head) and socket (glenoid) are replaced with prosthetic components. Ideal for patients with intact rotator cuff muscles and osteoarthritis.</li>
                  <li><span className="font-semibold">Partial Shoulder Replacement (Hemiarthroplasty):</span> Only the ball portion of the joint is replaced, leaving the natural socket intact. This may be recommended for certain fractures or when the socket cartilage is healthy.</li>
                  <li><span className="font-semibold">Reverse Total Shoulder Replacement:</span> The ball and socket positions are reversed, with the ball attached to the shoulder blade and the socket attached to the upper arm. This revolutionary design is particularly effective for patients with rotator cuff tear arthropathy or failed conventional replacement.</li>
                  <li><span className="font-semibold">Stemless Shoulder Replacement:</span> Uses an implant that doesn't extend down the arm bone's shaft, preserving more bone stock and allowing for easier revision if needed in the future.</li>
                  <li><span className="font-semibold">Revision Shoulder Replacement:</span> Surgery to replace a previous shoulder implant that has worn out, become loose, infected, or is causing complications.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Advanced Surgical Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Saxena utilizes the latest techniques and technologies in shoulder replacement surgery:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Preoperative 3D planning using CT scans for precise implant positioning</li>
                  <li>Patient-specific instrumentation for optimal implant placement</li>
                  <li>Minimally invasive techniques when appropriate to reduce muscle damage</li>
                  <li>Advanced bearing surfaces that maximize implant longevity</li>
                  <li>Augmented glenoid components for patients with significant bone loss</li>
                  <li>Innovative fixation methods for secure implant attachment</li>
                  <li>Intraoperative nerve monitoring for enhanced safety</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  The Surgical Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shoulder replacement surgery typically takes 2-3 hours and is performed under general anesthesia, often combined with a regional nerve block for postoperative pain control. Most patients require a hospital stay of 1-2 days.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  During the procedure, Dr. Saxena makes an incision (typically 4-6 inches) at the front of the shoulder to access the joint. After carefully protecting surrounding nerves and blood vessels, the damaged bone surfaces are prepared, and the appropriate prosthetic components are precisely positioned. The incision is closed with sutures, and a sterile dressing is applied.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Rehabilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from shoulder replacement surgery is a gradual process that typically follows this timeline:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li><span className="font-semibold">Immediate Post-Surgery (0-6 weeks):</span> Arm is kept in a sling for protection, with passive motion exercises beginning within days of surgery under the guidance of a physical therapist. Pain management is a priority during this phase.</li>
                  <li><span className="font-semibold">Early Recovery (6-12 weeks):</span> Progressive transition to active motion exercises as healing progresses. The sling is gradually discontinued, and strengthening exercises are introduced.</li>
                  <li><span className="font-semibold">Intermediate Recovery (3-6 months):</span> Focus shifts to strengthening the shoulder muscles and improving functional use of the arm for daily activities. Most patients experience significant pain relief by this stage.</li>
                  <li><span className="font-semibold">Long-term Recovery (6+ months):</span> Continued improvement in strength and function, with many patients able to resume light recreational activities. Maximum improvement may continue for up to a year after surgery.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Our comprehensive rehabilitation protocol is tailored to each patient's specific needs and type of replacement performed. Regular follow-up appointments with Dr. Saxena ensure optimal healing and functional recovery.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Long-Term Outcomes and Expectations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern shoulder replacement surgery has an excellent track record of success. Most patients can expect:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Significant reduction or elimination of shoulder pain</li>
                  <li>Improved range of motion and function</li>
                  <li>Enhanced quality of life and independence</li>
                  <li>High satisfaction rates (over 90% in most studies)</li>
                  <li>Durable results with many implants lasting 15-20 years or longer</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  After recovery, most patients can comfortably perform daily activities such as dressing, grooming, and household tasks. While high-impact activities and heavy lifting are generally discouraged to protect the implant, many patients can enjoy swimming, golf, doubles tennis, and other low-impact recreational activities.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're suffering from chronic shoulder pain that hasn't responded to conservative treatment, shoulder replacement surgery may be an option to consider. Dr. Abhishek Saxena provides thorough evaluations to determine the most appropriate treatment for your specific condition. Schedule a consultation today to discuss your symptoms and explore whether shoulder replacement could help restore your comfort and function.
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

export default ShoulderReplacement;