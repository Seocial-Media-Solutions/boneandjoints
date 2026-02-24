// app/page.jsx
import AllCondition from "@/components/AllConditions";
import AppointmentSection from "@/components/AppointmentSection";
import DoctorProfile from "@/components/DoctorProfile";
import ElfsightWidget from "@/components/ElfsightWidget";


import ImageSlider from "@/components/ImageSlider";
import InstagramEmbed from "@/components/InstagramFeedWidget";
import StatsComponent from "@/components/StatsComponent";
import WhyChooseUs from "@/components/WhyChooseUs";
import React, { Suspense } from 'react';
const ExpertiseSection = React.lazy(() => import("@/components/ExpertiseSection"));
const ImageGallerySlider = React.lazy(() => import("@/components/ImageGallerySlider"));

// Static metadata for the home page
export const metadata = {
  title: "Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena",
  description:
    "Dr. Abhishek Saxena, Ajmer's top orthopedic surgeon, restores movement and relieves pain with expert joint care, sports injury treatment, and bone surgery.",
  keywords:
    "orthopedic surgeon Ajmer, bone specialist Ajmer, joint replacement surgeon, Dr. Abhishek Saxena, best orthopedic doctor in Ajmer, sports injury treatment, fracture treatment, knee replacement, hip replacement, Ajmer orthopedic clinic",
  openGraph: {
    title: "Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena",
    description:
      "Expert orthopedic care for bone and joint problems at Jeevan Jyoti Hospital in Ajmer. Specializing in joint replacements, fractures, and sports injuries.",
    images: [
      {
        url: "/images/abhishek.png",
        width: 800,
        height: 600,
        alt: "Dr. Abhishek Saxena - Orthopedic Surgeon Ajmer",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in",
    siteName: "Dr. Abhishek Saxena - Orthopedic Surgeon",
  },
  alternates: {
    canonical: "https://boneandjoints.in",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena",
    description:
      "Advanced orthopedic treatments for bone and joint problems at Jeevan Jyoti Hospital in Ajmer.",
    images: ["/images/abhishek.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Additional structured data for local business
  other: {
    "application-name": "Dr. Abhishek Saxena - Orthopedic Surgeon",
    author: "Dr. Abhishek Saxena",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://boneandjoints.in/#doctor",
      name: "Dr. Abhishek Saxena",
      givenName: "Abhishek",
      familyName: "Saxena",
      honorificPrefix: "Dr.",
      jobTitle: "Orthopedic Surgeon",
      description: "Expert orthopedic surgeon specializing in joint replacements, sports injury treatment, fracture treatment, and comprehensive bone and joint care.",
      url: "https://boneandjoints.in",
      image: "https://boneandjoints.in/images/abhishek.png",
      email: "abhishek.saxena1120@gmail.com",
      telephone: "+91 86182 43967",
      yearsOfExperience: "10+",
      medicalSpecialty: [
        "Orthopedic Surgery",
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Fracture Treatment",
        "Bone Surgery"
      ],
      knowsLanguage: ["English", "Hindi"],
      worksFor: {
        "@type": "Hospital",
        name: "Jeevan Jyoti Hospital"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN"
      },
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Joint Replacement Surgery",
          description: "Knee and hip replacement surgeries"
        },
        {
          "@type": "MedicalProcedure",
          name: "Sports Injury Treatment",
          description: "Treatment for sports-related injuries and rehabilitation"
        },
        {
          "@type": "MedicalProcedure",
          name: "Fracture Treatment",
          description: "Comprehensive fracture care and bone healing"
        },
        {
          "@type": "MedicalProcedure",
          name: "Orthopedic Consultation",
          description: "Expert consultation for bone and joint problems"
        }
      ]
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://boneandjoints.in/#business",
      name: "Dr. Abhishek Saxena - Orthopedic Surgeon",
      description: "Leading orthopedic surgery practice in Ajmer, specializing in joint replacements, sports injuries, and comprehensive bone care.",
      url: "https://boneandjoints.in",
      telephone: "+91 86182 43967",
      email: "abhishek.saxena1120@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4499",
        longitude: "74.6399"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "10:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
          opens: "14:00",
          closes: "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "12:00"
        }
      ],
      medicalSpecialty: [
        "Orthopedic Surgery",
        "Joint Replacement",
        "Sports Medicine",
        "Fracture Treatment"
      ],
      availableLanguage: ["English", "Hindi"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Orthopedic Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Knee Replacement Surgery"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Hip Replacement Surgery"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Sports Injury Treatment"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Fracture Treatment"
            }
          }
        ]
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "88",
        bestRating: "5",
        worstRating: "1"
      },
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Insurance"],
      currenciesAccepted: "INR",
      founder: {
        "@id": "https://boneandjoints.in/#doctor"
      },
      employee: {
        "@id": "https://boneandjoints.in/#doctor"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://boneandjoints.in/#localbusiness",
      name: "Dr. Abhishek Saxena - Orthopedic Surgeon",
      description: "Top-rated orthopedic surgeon in Ajmer providing expert care for bone and joint problems.",
      url: "https://boneandjoints.in",
      telephone: "+91 86182 43967",
      email: "abhishek.saxena1120@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4499",
        longitude: "74.6399"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "10:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
          opens: "14:00",
          closes: "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "12:00"
        }
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "88",
        bestRating: "5",
        worstRating: "1"
      },
      priceRange: "$$",
      image: "https://boneandjoints.in/images/abhishek.png",
      sameAs: [
        "https://boneandjoints.in"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://boneandjoints.in/#website",
      name: "Dr. Abhishek Saxena - Orthopedic Surgeon",
      description: "Official website of Dr. Abhishek Saxena, leading orthopedic surgeon in Ajmer.",
      url: "https://boneandjoints.in",
      publisher: {
        "@id": "https://boneandjoints.in/#doctor"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://boneandjoints.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://boneandjoints.in/#organization",
      name: "Dr. Abhishek Saxena - Orthopedic Practice",
      description: "Premier orthopedic surgery practice in Ajmer, Rajasthan, providing comprehensive bone and joint care.",
      url: "https://boneandjoints.in",
      logo: "https://boneandjoints.in/images/abhishek.png",
      telephone: "+91 86182 43967",
      email: "abhishek.saxena1120@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN"
      },
      medicalSpecialty: [
        "Orthopedic Surgery",
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Fracture Treatment"
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical Degree"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ImageSlider />
      <DoctorProfile />

      <StatsComponent />
      <Suspense fallback={<div>Loading expertise section...</div>}>
        <ExpertiseSection />
      </Suspense>
      <WhyChooseUs />
      <Suspense fallback={<div>Loading Gallery section...</div>}>
        <ImageGallerySlider />
      </Suspense>
      <AllCondition />
      <ElfsightWidget />
      <AppointmentSection />
      <InstagramEmbed />
    </>
  );
}