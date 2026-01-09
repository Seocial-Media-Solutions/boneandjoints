 import PCLInjury from '@/components/PCLInjury'
import React from 'react'
export const metadata = {
  title: "Best PCL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Expert PCL injury diagnosis and treatment by Dr. Abhishek Saxena in Ajmer. Regain knee stability with advanced reconstruction and rehabilitation protocols.",
  keywords:
    "PCL injury treatment Ajmer, posterior cruciate ligament tear, knee ligament surgery, Dr Abhishek Saxena orthopedic, knee pain treatment Ajmer, PCL reconstruction surgery, best knee surgeon Ajmer, sports knee injury, orthopedic doctor Ajmer",
  openGraph: {
    title: "PCL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about PCL injuries, causes, symptoms, and advanced reconstruction options. Consult Dr. Abhishek Saxena for specialized knee ligament treatment in Ajmer.",
    url: "https://boneandjoints.in/conditions/pcl-injury",
    type: "article",
    images: [
      {
        url: "/images/pcl-injury.png", // update to your actual image path
        width: 800,
        height: 600,
        alt: "PCL Reconstruction by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/pcl-injury",
  },
};

 function PCLInjuryOrtho() {
   return (
     <div>
       <PCLInjury/>
     </div>
   )
 }
 
 export default PCLInjuryOrtho
 