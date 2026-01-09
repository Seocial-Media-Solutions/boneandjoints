 import MeniscusInjury from '@/components/MeniscusInjury'
import React from 'react'
export const metadata = {
  title: "Top Meniscus Injury Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Get expert meniscus injury treatment in Ajmer by Dr. Abhishek Saxena. Advanced arthroscopic repair and rehabilitation to restore knee function effectively.",
  keywords:
    "Meniscus injury treatment Ajmer, meniscus tear surgery, knee cartilage repair, arthroscopic meniscus surgery, Dr Abhishek Saxena orthopedic, knee pain specialist Ajmer, sports injury doctor Ajmer, meniscus repair Ajmer, best knee surgeon Ajmer",
  openGraph: {
    title: "Meniscus Injury Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about causes, symptoms, and advanced treatments for meniscus injuries. Consult Dr. Abhishek Saxena in Ajmer for knee cartilage repair and arthroscopic surgery.",
    url: "https://boneandjoints.in/conditions/meniscus-injury",
    type: "article",
    images: [
      {
        url: "/images/meniscus-injury.png", // update to your actual image path
        width: 800,
        height: 600,
        alt: "Meniscus Tear Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/meniscus-injury",
  },
};

 function MeniscusInjuryOrtho() {
   return (
     <div>
       <MeniscusInjury/>
     </div>
   )
 }
 
 export default MeniscusInjuryOrtho
 