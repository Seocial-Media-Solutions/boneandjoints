 import NutritionFitness from '@/components/Nutrition'
import React from 'react'
 

export const metadata = {
    title: "Best Nutrition & Fitness in Ajmer | Dr. Abhishek Saxena",
    description:
      "Discover Nutrition and Fitness tips by Bone and Joints to enhance your orthopedic health, recovery, and overall well-being with expert guidance.",
    keywords:
      "nutrition, fitness, orthopedic health, bone health, joint health, recovery, wellness tips, Bone and Joints Ajmer",
    openGraph: {
      title: "Nutrition & Fitness | Bone and Joints",
      description:
        "Discover Nutrition and Fitness tips by Bone and Joints to enhance your orthopedic health, recovery, and overall well-being with expert guidance.",
      url: "https://boneandjoints.in/nutrition-fitness",
      type: "website",
      images: [
        {
          url: "/images/nutrition-fitness.png", // update to actual image path
          width: 800,
          height: 600,
          alt: "Nutrition and Fitness - Bone and Joints",
        },
      ],
    },
    alternates: {
      canonical: "https://boneandjoints.in/nutrition-fitness",
    },
  };
  

 function Nutrition() {
   return (
     <div>
       <NutritionFitness/>
     </div>
   )
 }
 
 export default Nutrition
 
 