import AboutHero from "@/components/AboutHero";
import SportsInjuryService from "@/components/SportsInjuryService";

export const metadata = {
  title: "ACL, PCL & Shoulder Injury Specialist | Dr. Abhishek Saxena",
  description:
    "Expert sports injury treatment in Ajmer by Dr. Abhishek Saxena. Specialized care for ACL tears, meniscus injuries, shoulder dislocations, and sports-related fractures with advanced rehabilitation techniques.",
  keywords:
    "sports injury specialist Ajmer, ACL reconstruction, PCL injury treatment, meniscus tear surgery, shoulder dislocation treatment, sports fracture management, ligament injury, rotator cuff repair, ankle sprain treatment, sports medicine Ajmer, Dr. Abhishek Saxena",
  openGraph: {
    title:
      "Sports Injury Treatment & Rehabilitation in Ajmer | Dr. Abhishek Saxena",
    description:
      "Comprehensive care for athletes and active individuals with sports-related injuries including ligament tears, fractures, and joint injuries using advanced orthopedic techniques.",
    images: [
      {
        url: "/images/sprains.webp",
        width: 800,
        height: 600,
        alt: "Sports Injury Treatment in Ajmer",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in/sports-injury",
  },
  alternates: {
    canonical: "https://boneandjoints.in/sports-injury",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SportsInjury() {
  return (
    <div className="w-full overflow-x-hidden">
      <AboutHero
        bannerImage="/images/kneeinjury.webp"
        title="Dr. Abhishek Saxena"
        subtitle="Transforming Lives with Advanced Orthopedic Solutions"
        breadcrumbs={[{ label: "Sports Injury Treatment ", path: "/sports-injury" }]}
      />
      <SportsInjuryService />
    </div>
  );
}
