 import InjuriesAroundShoulder from '@/components/InjuriesAroundShoulder'
import React from 'react'
export const metadata = {
  title: "Best Shoulder Injury Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Comprehensive treatment for shoulder injuries in Ajmer by Dr. Abhishek Saxena. Expert care for dislocations, fractures, and rotator cuff tears to restore full mobility.",
  keywords:
    "shoulder injury treatment Ajmer, shoulder dislocation treatment Ajmer, rotator cuff tear Ajmer, shoulder fracture specialist Ajmer, Dr Abhishek Saxena orthopedic, sports injury shoulder Ajmer, shoulder pain doctor Ajmer",
  openGraph: {
    title: "Shoulder Injury Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Explore causes, symptoms, and advanced treatments for shoulder injuries including fractures, dislocations, and ligament tears. Consult Dr. Abhishek Saxena in Ajmer for specialized shoulder care.",
    url: "https://boneandjoints.in/conditions/injuries-around-shoulder",
    type: "article",
    images: [
      {
        url: "/images/shoulder-injury.png", // update with actual image path if different
        width: 800,
        height: 600,
        alt: "Shoulder Injury Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/injuries-around-shoulder",
  },
};

 function InjuriesAroundShoulderOrtho() {
   return (
     <div>
       <InjuriesAroundShoulder/>
     </div>
   )
 }
 
 export default InjuriesAroundShoulderOrtho
 
 