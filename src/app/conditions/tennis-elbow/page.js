 import TennisElbow from '@/components/TennisElbow'
import React from 'react'
export const metadata = {
  title: "Best Tennis Elbow Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Effective tennis elbow treatment in Ajmer by Dr. Abhishek Saxena. Advanced care for elbow pain, lateral epicondylitis, and repetitive strain injuries to restore function and relieve pain.",
  keywords:
    "tennis elbow treatment Ajmer, lateral epicondylitis Ajmer, elbow pain doctor Ajmer, orthopedic surgeon Ajmer, Dr Abhishek Saxena elbow specialist, repetitive strain injury treatment Ajmer",
  openGraph: {
    title: "Tennis Elbow Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about causes, symptoms, and treatments for tennis elbow. Consult Dr. Abhishek Saxena in Ajmer for personalized elbow pain management and recovery solutions.",
    url: "https://boneandjoints.in/conditions/tennis-elbow",
    type: "article",
    images: [
      {
        url: "/images/tennis-elbow.png", // update to actual image path if different
        width: 800,
        height: 600,
        alt: "Tennis Elbow Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/tennis-elbow",
  },
};

 function TennisElbowOrtho() {
   return (
     <div>
       <TennisElbow/>
     </div>
   )
 }
 
 export default TennisElbowOrtho
 