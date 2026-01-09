 import GolfersElbow from '@/components/GolfersElbow'
import React from 'react'
export const metadata = {
  title: "Best Golfer's Elbow Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Expert golfer's elbow treatment in Ajmer by Dr. Abhishek Saxena. Advanced care for medial epicondylitis, elbow pain, and tendon injuries to restore strength and function.",
  keywords:
    "golfer's elbow treatment Ajmer, medial epicondylitis Ajmer, elbow pain doctor Ajmer, orthopedic surgeon Ajmer, Dr Abhishek Saxena elbow specialist, tendon injury treatment Ajmer",
  openGraph: {
    title: "Golfer's Elbow Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about causes, symptoms, and treatments for golfer's elbow. Consult Dr. Abhishek Saxena in Ajmer for personalized care and recovery plans to relieve elbow pain effectively.",
    url: "https://boneandjoints.in/conditions/golfer-elbow",
    type: "article",
    images: [
      {
        url: "/images/golfer-elbow.png", // update to actual image path if different
        width: 800,
        height: 600,
        alt: "Golfer's Elbow Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/golfer-elbow",
  },
};

 function GolfersElbowOrtho() {
   return (
     <div>
       <GolfersElbow/>
     </div>
   )
 }
 
 export default GolfersElbowOrtho
 