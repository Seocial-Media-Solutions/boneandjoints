import AboutHero from "@/components/AboutHero";
import ArthroscopyService from "@/components/ArthroscopyService";

export const metadata = {
  title: 'Knee & Shoulder  Specialist in Ajmer | Dr. Abhishek Saxena',
  description: 'Expert arthroscopic surgery in Ajmer by Dr. Abhishek Saxena. Minimally invasive procedures for knee, shoulder, hip and joint problems with faster recovery and precision.',
  keywords: 'arthroscopy specialist Ajmer, knee arthroscopy, shoulder arthroscopy, minimally invasive surgery, sports injury treatment, ligament repair, meniscus surgery, rotator cuff repair, joint pain treatment, Dr. Abhishek Saxena',
  openGraph: {
    title: 'Advanced Arthroscopy Services in Ajmer | Dr. Abhishek Saxena',
    description: 'Specialized arthroscopic procedures including knee scope, shoulder arthroscopy, and sports injury treatments by top orthopedic surgeon in Ajmer.',
    images: [
      {
        url: '/images/knee-arthroscopy.webp', 
        width: 800,
        height: 600,
        alt: 'Arthroscopy Services in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/arthroscopy',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/arthroscopy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Arthroscopy() {
    return (
        <div className="w-full overflow-x-hidden">
        <AboutHero 
          bannerImage="/images/arthoscopy.png"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          
          { label: 'Arthroscopy Solutions ', path: '' }
         ]}
      />
      <ArthroscopyService/>
        </div>
    )
}