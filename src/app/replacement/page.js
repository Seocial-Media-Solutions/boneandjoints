import AboutHero from "@/components/AboutHero";
import ReplacementService from "@/components/ReplacmentService";

export const metadata = {
  title: 'Hip & Knee Replacement in Ajmer | Dr. Abhishek Saxena',
  description: 'Advanced hip and knee replacement surgery in Ajmer by Dr. Abhishek Saxena. Get expert orthopedic care for joint replacements with minimally invasive techniques and faster recovery.',
  keywords: 'hip replacement Ajmer, knee replacement surgery, joint replacement specialist, orthopedic surgeon Ajmer, total knee replacement, partial knee replacement, hip resurfacing, revision joint replacement, Dr. Abhishek Saxena',
  openGraph: {
    title: 'Hip & Knee Replacement Services in Ajmer | Dr. Abhishek Saxena',
    description: 'Specialized joint replacement services including total knee replacement, partial knee replacement, and hip replacement surgery by top orthopedic surgeon in Ajmer.',
    images: [
      {
        url: '/images/kneereplacement.webp', 
        width: 800,
        height: 600,
        alt: 'Joint Replacement Services in Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/replacement',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/replacement',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Replacement() {
    return (
      <div className="w-full overflow-x-hidden">
      <AboutHero 
          bannerImage="/images/joint-replacement.png
          "
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
           
          { label: 'Advanced Joint Replacement ', path: '/replacement' }
         ]}
      />
      <ReplacementService/>
     </div>
    );
  }
  