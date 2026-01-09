import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AppointmentSection from "@/components/AppointmentSection";
import ElfsightWidget from "@/components/ElfsightWidget";
import ExpertiseSection from "@/components/ExpertiseSection";
import StatsComponent from "@/components/StatsComponent";

// Static metadata
export const metadata = {
  title: "About Dr. Abhishek Saxena | Orthopedic Specialist",
  description:
    "Dr. Abhishek Saxena is a leading orthopedic specialist in ajmer committed to transforming lives with advanced orthopedic solutions. Learn about his expertise and services.",
  keywords:
    "Dr. Abhishek Saxena, orthopedic specialist, orthopedic surgeon, advanced orthopedic solutions",
  openGraph: {
    title: "About Dr. Abhishek Saxena | Orthopedic Specialist",
    description:
      "Dr. Abhishek Saxena is a leading orthopedic specialist committed to transforming lives with advanced orthopedic solutions.",
    images: [
      {
        url: "/images/abhishek.png",
        width: 800,
        height: 600,
        alt: "Dr. Abhishek Saxena",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in/about",
  },
  alternates: {
    canonical: "https://boneandjoints.in/about",
  },
};


export default function AboutPage() {
  return (
    <>
      <AboutHero
        bannerImage="/images/img3.png"
        title="Dr. Abhishek Saxena"
        subtitle="From Injury to Empowerment: The New Age of Orthopedics"
        breadcrumbs={[{ label: "About Us", path: "" }]}
      />
      <AboutDoctor doctorImage="/images/abhishek.png" />
      <StatsComponent />
      <ExpertiseSection />
      <ElfsightWidget />
      <AppointmentSection />
    </>
  );
}
