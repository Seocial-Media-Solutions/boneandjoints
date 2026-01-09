 import ACLInjury from '@/components/ACLInjury'
import React from 'react'
 


export const metadata = {
  title: "Best ACL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Learn about advanced ACL reconstruction and treatment by Dr. Abhishek Saxena, top orthopedic surgeon in Ajmer. Restore knee stability and return to sports confidently.",
  keywords:
    "ACL injury treatment Ajmer, ACL reconstruction, knee ligament surgery, Dr Abhishek Saxena orthopedic, sports injury treatment Ajmer, ACL surgeon Ajmer, knee pain treatment, best orthopedic doctor Ajmer, ACL repair, sports injury doctor",
  openGraph: {
    title: "ACL Injury Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Explore ACL injury causes, reconstruction techniques, recovery process, and book your consultation with Dr. Abhishek Saxena for expert knee care in Ajmer.",
    url: "https://boneandjoints.in/conditions/acl-injury",
    type: "article",
    images: [
      {
        url: "/images/acl-injury.png", // ensure this path is correct on your production build
        width: 800,
        height: 600,
        alt: "ACL Reconstruction Surgery by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/acl-injury",
  },
};

 function ACLInjuryOrtho() {
   return (
     <div>
       <ACLInjury/>
     </div>
   )
 }
 
 export default ACLInjuryOrtho
 