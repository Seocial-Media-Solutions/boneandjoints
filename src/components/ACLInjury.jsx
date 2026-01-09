"use client";

import React from "react";
import { Star, Calendar, Award, Phone } from "lucide-react";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import Link from "next/link";





const ACLInjury = () => {
  return (
    <>
      <AboutHero
        bannerImage="/images/acl-injury1.png"
        title="Dr. Abhishek Saxena"
        subtitle="ACL Injuries: The Snap That Changes Everything"
        breadcrumbs={[{ label: "ACL Injury ", path: "/conditions/acl-injury" }]}
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
                ACL Injury Treatment
              </h1>

              {/* Image Section */}
              <div className="mb-8">
                <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/acl-injury.png"
                    alt="ACL Reconstruction Procedure"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm">ACL Injury</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    What is an ACL Injury?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Anterior Cruciate Ligament (ACL) is a critical
                    stabilizing structure in the knee that prevents excessive
                    forward movement of the tibia (shin bone) and rotational
                    instability. ACL injuries commonly occur during sudden
                    stops, changes in direction, landing awkwardly from jumps,
                    or direct contact to the knee. These injuries are
                    particularly common in sports like football, basketball,
                    soccer, and skiing. When torn, the ACL cannot heal on its
                    own due to limited blood supply, often necessitating
                    surgical reconstruction for patients who wish to return to
                    active lifestyles.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Advanced Reconstruction Techniques
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Abhishek Saxena employs the latest anatomic
                    reconstruction techniques to restore natural knee function.
                    Our approach utilizes minimally invasive arthroscopic
                    methods combined with sophisticated graft placement to
                    recreate the original ACL's position and tension. We offer
                    multiple graft options, including hamstring tendon, patellar
                    tendon, and quadriceps tendon autografts, as well as
                    carefully selected allografts when appropriate. Each
                    reconstruction is precisely customized to the patient's
                    anatomy, activity goals, and specific injury pattern.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Comprehensive ACL Treatment
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Complete ACL tears requiring reconstruction</li>
                    <li>Partial ACL tears with instability</li>
                    <li>ACL injuries with associated meniscus tears</li>
                    <li>Multi-ligament knee injuries (ACL + MCL, PCL, etc.)</li>
                    <li>
                      ACL revision surgery for failed prior reconstructions
                    </li>
                    <li>
                      ACL injuries in growing adolescents with specialized
                      techniques
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Our ACL Treatment Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our comprehensive ACL program includes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                    <li>Advanced MRI and dynamic stability assessment</li>
                    <li>Pre-surgical "prehabilitation" to optimize outcomes</li>
                    <li>
                      Anatomic single-bundle or double-bundle reconstruction
                    </li>
                    <li>
                      Concurrent treatment of associated injuries (meniscus,
                      cartilage)
                    </li>
                    <li>Accelerated rehabilitation protocols</li>
                    <li>Sport-specific return-to-play assessment</li>
                    <li>Injury prevention training upon recovery</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Recovery and Outcomes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recovery from ACL reconstruction typically follows a
                    graduated timeline. Patients begin controlled
                    range-of-motion exercises within days after surgery and
                    progress to weight-bearing activities within 1-2 weeks.
                    Strengthening exercises intensify at 6-12 weeks, with
                    running typically resuming around 3-4 months. Return to
                    pivoting sports generally occurs between 7-9 months,
                    following comprehensive strength and stability testing. Our
                    patients consistently achieve excellent outcomes, with over
                    90% successfully returning to their desired activity levels.
                    Long-term follow-up shows high satisfaction rates and
                    significantly reduced risk of re-injury when compared to
                    national averages.
                  </p>
                </section>

                <section className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experiencing knee instability, swelling, or pain after a
                    sports injury? Schedule a comprehensive evaluation with Dr.
                    Abhishek Saxena to determine if you have an ACL injury and
                    discuss the most appropriate treatment options for your
                    athletic and lifestyle goals.
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

export default ACLInjury;
