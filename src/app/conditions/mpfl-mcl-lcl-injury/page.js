 import LigamentInjury from '@/components/LigamentInjury'
import React from 'react'
export const metadata = {
  title: "Top MPFL, MCL & LCL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Expert treatment for MPFL, MCL, and LCL knee ligament injuries in Ajmer by Dr. Abhishek Saxena. Advanced surgical and rehabilitation solutions for knee stability.",
  keywords:
    "MPFL injury treatment Ajmer, MCL injury treatment Ajmer, LCL injury treatment Ajmer, knee ligament surgery, Dr Abhishek Saxena orthopedic, knee specialist Ajmer, MPFL reconstruction, MCL repair Ajmer, LCL reconstruction Ajmer, sports injury doctor Ajmer",
  openGraph: {
    title: "MPFL, MCL & LCL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about causes, symptoms, and advanced treatment options for MPFL, MCL, and LCL knee ligament injuries. Consult Dr. Abhishek Saxena in Ajmer for surgical repair and rehabilitation.",
    url: "https://boneandjoints.in/conditions/mpfl-mcl-lcl-injury",
    type: "article",
    images: [
      {
        url: "/images/mpfl-mcl-lcl-injury.png", // update with actual image path
        width: 800,
        height: 600,
        alt: "MPFL, MCL, LCL Knee Injury Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/mpfl-mcl-lcl-injury",
  },
};

 function LigamentInjuryOrtho() {
   return (
     <div>
       <LigamentInjury/>
     </div>
   )
 }
 
 export default LigamentInjuryOrtho
 