// app/layout.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import FloatingContact1 from '@/components/layout/FloatingContact1';
import Script from 'next/script';
import FirstVisitPopup from '@/components/FirstVisitPopup';

export const metadata = {
 metadataBase: new URL('https://boneandjoints.in'),
 title: 'Dr. Abhishek Saxena - Orthopedic Surgeon In Ajmer',
 description: 'Dr. Abhishek Saxena is a leading orthopedic surgeon in Ajmer providing advanced bone and joint treatments. Visit Our Clinic for expert orthopedic care, joint replacements, and sports injury treatments.',
};

export default function RootLayout({ children }) {
 return (
   <html lang="en">
     <head>
       <Script
         src="https://www.googletagmanager.com/gtag/js?id=G-4DNZQ0ML0V"
         strategy="afterInteractive"
       />
       {/* Designed and Developed by Jeetendra Singh Rathore (https://jeetdevv.vercel.app/) */}
       <Script id="google-analytics" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-4DNZQ0ML0V');
         `}
       </Script>
       
     </head>
     <body>
       <Header />
       <main className='bg-gray-50'>{children}</main>
       {/* <FirstVisitPopup/> */}
       <FloatingContact1/>
       <Footer />
     </body>
   </html>
 );
}