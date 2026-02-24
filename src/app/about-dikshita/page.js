import AboutDikshita from "@/components/AboutDikshita";

// Static metadata for Dr. Dikshita Yadav
export const metadata = {
  title: "About Dr. Dikshita Yadav | Consultant Physiotherapist",
  description:
    "Dr. Dikshita Yadav is a dedicated Consultant Physiotherapist (B.P.T – GMCH, M.I.A.P, C.C.CH) committed to restoring mobility, reducing pain, and improving quality of life through evidence-based rehabilitation.",
  keywords:
    "Dr. Dikshita Yadav, physiotherapist, consultant physiotherapist, physiotherapy Ajmer, sports rehabilitation, neuro rehabilitation, pediatric physiotherapy",
  openGraph: {
    title: "About Dr. Dikshita Yadav | Consultant Physiotherapist",
    description:
      "Dr. Dikshita Yadav is a dedicated Consultant Physiotherapist committed to restoring mobility and improving quality of life.",
    images: [
      {
        url: "/images/dikshita.jpeg",
        width: 800,
        height: 600,
        alt: "Dr. Dikshita Yadav",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in/about-dikshita",
  },
  alternates: {
    canonical: "https://boneandjoints.in/about-dikshita",
  },
};

export default function AboutDikshitaPage() {
  return <AboutDikshita />;
}
