import AboutDeekshita from "@/components/AboutDikshita";

// Static metadata for Dr. Deekshita Yadav
export const metadata = {
  title: "About Dr. Deekshita Yadav | Consultant Physiotherapist",
  description:
    "Dr. Deekshita Yadav is a dedicated Consultant Physiotherapist (B.P.T – GMCH, M.I.A.P, C.C.CH) committed to restoring mobility, reducing pain, and improving quality of life through evidence-based rehabilitation.",
  keywords:
    "Dr. Deekshita Yadav, physiotherapist, consultant physiotherapist, physiotherapy Ajmer, sports rehabilitation, neuro rehabilitation, pediatric physiotherapy",
  openGraph: {
    title: "About Dr. Deekshita Yadav | Consultant Physiotherapist",
    description:
      "Dr. Deekshita Yadav is a dedicated Consultant Physiotherapist committed to restoring mobility and improving quality of life.",
    images: [
      {
        url: "/images/Dikshita.jpeg",
        width: 800,
        height: 600,
        alt: "Dr. Deekshita Yadav",
      },
    ],
    type: "website",
    url: "https://boneandjoints.in/about-dikshita",
  },
  alternates: {
    canonical: "https://boneandjoints.in/about-dikshita",
  },
};

export default function AboutDeekshitaPage() {
  return <AboutDeekshita />;
}
