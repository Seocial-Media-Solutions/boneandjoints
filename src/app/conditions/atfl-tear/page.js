import AtflTear from '@/components/AtflTear'
import React from 'react'
export const metadata = {
  title: "Best ATFL Tear Treatment in Ajmer | Dr. Abhishek Saxena",
  description:
    "Expert ATFL tear treatment in Ajmer by Dr. Abhishek Saxena. Specialized care for ankle ligament injuries, sprains, and instability to restore mobility and prevent re-injury.",
  keywords:
    "ATFL tear treatment Ajmer, ankle ligament injury Ajmer, lateral ligament tear Ajmer, ankle sprain treatment Ajmer, orthopedic surgeon Ajmer, Dr Abhishek Saxena ankle specialist",
  openGraph: {
    title: "ATFL Tear Treatment in Ajmer | Dr. Abhishek Saxena",
    description:
      "Learn about causes, symptoms, and advanced treatments for ATFL tears and ankle ligament injuries. Consult Dr. Abhishek Saxena in Ajmer for effective ankle care.",
    url: "https://boneandjoints.in/conditions/atfl-tear",
    type: "article",
    images: [
      {
        url: "/images/atfl-tear.png", // update path if your image is differently named
        width: 800,
        height: 600,
        alt: "ATFL Tear Treatment by Dr. Abhishek Saxena",
      },
    ],
  },
  alternates: {
    canonical: "https://boneandjoints.in/conditions/atfl-tear",
  },
};

function AtflTearOrtho() {
  return (
    <div>
      <AtflTear/>
    </div>
  )
}

export default AtflTearOrtho
