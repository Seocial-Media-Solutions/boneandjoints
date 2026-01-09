import React from "react";
import { Star, Calendar, Award, Phone } from "lucide-react";
import AboutHero from "@/components/AboutHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hip Replacement Surgeon in Ajmer | Dr. Abhishek Saxena",
  description:
    "Advanced hip replacement surgery in Ajmer by Dr. Abhishek Saxena. Get expert orthopedic care for joint replacements with minimally invasive techniques and faster recovery.",
  keywords:
    "hip replacement Ajmer, knee replacement surgery, joint replacement specialist, orthopedic surgeon Ajmer, total knee replacement, partial knee replacement, hip resurfacing, revision joint replacement, Dr. Abhishek Saxena",
  openGraph: {
    title: "Hip Replacement Surgeon in Ajmer | Dr. Abhishek Saxena",
    description:
      "Specialized joint replacement services including total knee replacement, partial knee replacement, and hip replacement surgery by top orthopedic surgeon in Ajmer.",
    images: [
      {
        url: "/images/kneereplacement.webp",
        width: 800,
        height: 600,
        alt: "Joint Replacement Services in Ajmer",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in/replacement/hip-replacement",
  },
  alternates: {
    canonical: "https://boneandjoints.in/replacement/hip-replacement",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const HipReplacement = () => {
  return (
    <>
      <AboutHero
        bannerImage="/images/hipreplacement.png"
        title="Dr. Abhishek Saxena"
        subtitle="Transforming Lives with Advanced Orthopedic Solutions"
        breadcrumbs={[{ label: "Hip Replacement Made Better", path: "" }]}
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
                    <h2 className="text-2xl font-bold text-gray-800">
                      Dr. Abhishek Saxena
                    </h2>
                    <p className="text-gray-600">Senior Orthopedic Surgeon</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 hidden sm:inline text-gray-600">
                        (500+ reviews)
                      </span>
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
                Total Hip Replacement Surgery
              </h1>

              {/* Image Section - Modified for square image */}
              <div className="mb-8">
                <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hip-replacement.webp"
                    alt="Hip Replacement Procedure"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm">
                      Advanced Hip Replacement
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    What is Total Hip Replacement?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Total hip replacement (THR) is an advanced surgical
                    procedure where the damaged hip joint is replaced with a
                    prosthetic implant. This procedure is designed to eliminate
                    pain and restore mobility for patients suffering from severe
                    hip arthritis, fractures, or other degenerative conditions.
                    The surgery involves replacing both the ball (femoral head)
                    and socket (acetabulum) of the hip joint with durable
                    artificial components.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Advanced Surgical Techniques
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Abhishek Saxena specializes in minimally invasive hip
                    replacement techniques, including anterior approach surgery
                    and computer-navigated procedures. These modern approaches
                    typically result in faster recovery, less post-operative
                    pain, and improved implant positioning. We utilize the
                    latest ceramic and highly cross-linked polyethylene bearings
                    for maximum durability and reduced wear.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Common Conditions Treated
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Advanced osteoarthritis of the hip joint</li>
                    <li>Femoral neck fractures and hip trauma</li>
                    <li>Avascular necrosis of the hip</li>
                    <li>Hip dysplasia and developmental conditions</li>
                    <li>Failed previous hip surgeries requiring revision</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Comprehensive Care Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our hip replacement program includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                    <li>
                      3D pre-operative planning for precise implant sizing
                    </li>
                    <li>Advanced pain management protocols</li>
                    <li>Specialized hip rehabilitation program</li>
                    <li>Regular post-operative follow-up care</li>
                    <li>Dedicated support team throughout recovery</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Recovery and Outcomes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Modern hip replacements have excellent durability, often
                    lasting 20-25 years or more. Most patients can resume light
                    activities within 4-6 weeks and return to full activity by
                    3-4 months. Our success rates are particularly high, with
                    over 95% of patients reporting significant improvement in
                    pain and mobility following surgery.
                  </p>
                </section>

                <section className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ready to explore hip replacement surgery? Schedule a
                    comprehensive evaluation with Dr. Abhishek Saxena to discuss
                    your options.
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

export default HipReplacement;
