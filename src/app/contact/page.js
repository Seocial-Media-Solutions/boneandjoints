import AboutHero from "@/components/AboutHero";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: 'Contact Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena',
  description: 'Book an appointment with Dr. Abhishek Saxena, leading orthopedic surgeon in Ajmer. Get expert consultation for joint pain, sports injuries, and orthopedic treatments.',
  keywords: [
    'orthopedic doctor in Ajmer',
    'joint replacement specialist contact',
    'sports injury consultation',
    'knee pain doctor near me',
    'hip specialist Ajmer',
    'Dr. Abhishek Saxena contact',
    'bone and joint clinic address',
    'orthopedic appointment booking',
    'emergency orthopedic care Ajmer',
    'best orthopedic surgeon contact'
  ].join(', '),
  openGraph: {
    title: 'Contact Dr. Abhishek Saxena - Orthopedic Specialist in Ajmer',
    description: 'Schedule a consultation with Ajmer\'s leading orthopedic surgeon for joint pain, sports injuries, and advanced orthopedic treatments.',
    type: 'website',
    url: 'https://boneandjoints.in/contact',
    images: [
      {
        url: '/images/orthopedic-clinic-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Bone & Joint Clinic - Contact Dr. Abhishek Saxena',
      },
    ],
    siteName: 'Bone & Joints Clinic',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/contact',
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
    title: 'Contact Dr. Abhishek Saxena - Orthopedic Specialist in Ajmer',
    description: 'Book an appointment with Ajmer\'s leading orthopedic surgeon',
    images: ['/images/orthopedic-clinic-contact.jpg'],
  },
};

// Local Business Schema for better local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Bone & Joint Clinic - Dr. Abhishek Saxena",
  "description": "Specialized orthopedic clinic offering joint replacement, sports injury treatment, and advanced orthopedic care in Ajmer",
  "url": "https://boneandjoints.in",
  "telephone": "+91-8618243967",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj",
    "addressLocality": "Ajmer",
    "addressRegion": "Rajasthan",
    "postalCode": "305001",
    "addressCountry": "India"
  },
 
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "image": "/images/clinic-exterior.jpg",
  "priceRange": "$$",
  "medicalSpecialty": "Orthopedics"
};

export default function Contact() {
  return (
    <>
      {/* Add structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <AboutHero
        bannerImage="/images/img2.png"
        title="Dr. Abhishek Saxena"
        subtitle="Rebuilding Lives, One Joint at a Time"
        breadcrumbs={[
         
          { label: 'Contact Us', path: '/contact' }
        ]}
      />
      <ContactPage />
    </>
  );
}