import BookingPage from "@/components/BookingPage";

export const metadata = {
  title: 'Book Appointment with Dr. Abhishek Saxena | Orthopedic Specialist in Ajmer',
  description: 'Schedule your consultation with Dr. Abhishek Saxena, top orthopedic surgeon in Ajmer. Online booking available for joint pain, sports injuries, and orthopedic treatments.',
  keywords: [
    'orthopedic appointment online',
    'book doctor appointment Ajmer',
    'knee specialist consultation',
    'hip replacement surgeon booking',
    'sports injury doctor appointment',
    'Dr. Abhishek Saxena booking',
    'online orthopedic consultation',
    'emergency orthopedic appointment',
    'best bone doctor in Ajmer',
    'orthopedic clinic booking system'
  ].join(', '),
  openGraph: {
    title: 'Book Online Appointment | Dr. Abhishek Saxena - Orthopedic Specialist',
    description: 'Secure your consultation slot with Ajmer\'s leading orthopedic surgeon for joint pain, sports injuries, and advanced treatments.',
    type: 'website',
    url: 'https://boneandjoints.in/bookconsultation',
    images: [
      {
        url: '/images/doctor-consultation-booking.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Appointment with Dr. Abhishek Saxena',
      },
    ],
    siteName: 'Dr Abhishek Saxena'
  },
  alternates: {
    canonical: 'https://boneandjoints.in/bookconsultation',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Online Appointment | Dr. Abhishek Saxena',
    description: 'Secure your consultation with Ajmer\'s leading orthopedic surgeon',
    images: ['/images/doctor-consultation-booking.jpg'],
  },
};

// Appointment Booking Schema
const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Bone & Joint Clinic - Dr. Abhishek Saxena",
  "url": "https://boneandjoints.in",
  "description": "Specialized orthopedic clinic offering advanced treatments in Ajmer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
    "addressLocality": "Ajmer",
    "addressRegion": "Rajasthan",
    "postalCode": "305001",
    "addressCountry": "India"
  },
  "telephone": "+91-8618243967",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Consultation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Initial Orthopedic Consultation",
          "description": "Comprehensive evaluation and treatment plan"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Follow-up Consultation",
          "description": "Progress evaluation and treatment adjustment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Consultation",
          "description": "Immediate care for acute orthopedic conditions"
        }
      }
    ]
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://boneandjoints.in/bookconsultation",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "reservationFor": {
        "@type": "Service",
        "name": "Orthopedic Consultation"
      }
    }
  }
};

export default function BookConsultation() {
  return (
    <>
      {/* Add structured data for appointment booking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />

      <div className="bg-gray-50">
        <BookingPage />
      </div>
    </>
  );
}