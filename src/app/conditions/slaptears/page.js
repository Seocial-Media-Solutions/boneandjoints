 import SLAPTear from '@/components/SLAPTear'
import React from 'react'
 
export const metadata = {
  title: "Best SLAP Tear Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Get advanced SLAP tear diagnosis and treatment by Dr. Abhishek Saxena, leading orthopedic surgeon in Ajmer. Restore your shoulder strength and stability effectively.",
  keywords:
    "SLAP tear treatment Ajmer, shoulder labrum tear, SLAP repair surgery, Dr Abhishek Saxena orthopedic, shoulder pain treatment Ajmer, best shoulder surgeon Ajmer, SLAP lesion treatment, arthroscopic SLAP repair, sports shoulder injury, orthopedic doctor Ajmer",
  openGraph: {
    title: "SLAP Tear Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about SLAP tears, their causes, symptoms, advanced arthroscopic treatment options, and consult Dr. Abhishek Saxena for expert shoulder care in Ajmer.",
    url: "https://boneandjoints.in/conditions/slaptears",
    type: "article",
    images: [
      {
        url: "/images/slap-tear.png", // update to your actual image path
        width: 800,
        height: 600,
        alt: "SLAP Tear Repair by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/slaptears",
  },
};

 function SLAPTearOrtho() {
   return (
     <div>
       <SLAPTear/>
     </div>
   )
 }
 
 export default SLAPTearOrtho
 