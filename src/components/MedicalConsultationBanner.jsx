import React from 'react';
import Image from 'next/image';

const MedicalConsultationBanner = () => {
  return (
    <div className="relative w-full bg-white  overflow-hidden my-20">
      {/* Blue Background - Left 60% */}
      <div className="absolute left-0 top-0 w-full lg:w-[80%] rounded-r-3xl h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
      
      {/* Background Pattern - Left Side */}
      <div className="absolute left-0 top-0 w-full lg:w-[35%] h-full opacity-40">
        <Image
          src="/images/background-pattern.png" // Update this path
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[500px]">
        {/* Left Content - 60% blue area */}
        <div className="flex-1 lg:max-w-[60%] px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
          <div className="max-w-lg">
            {/* Book Now Label */}
            <div className="inline-block mb-4">
              <span className="text-white/90 text-sm font-medium">Book Now</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Reserve Your Appointment:
              <br />
              <span className="block">No-Cost Consultation</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              Book your appointment today and receive a free consultation with our 
              skilled medical staff. Experience customized attention and excellent 
              service in a relaxing and welcoming setting.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors duration-200 min-w-[200px]">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                Book Consultation
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 min-w-[150px]">
                Our Doctors
              </button>
            </div>
          </div>
        </div>

        {/* Right Image - 40% white background area */}
        <div className="flex-1 relative h-[300px] lg:h-full min-h-[450px] w-full lg:w-auto lg:max-w-[40%]">
          <div className="absolute inset-0 lg:inset-y-4 lg:right-4">
            <Image
              src="/images/phone.jpg" // Update this path to your doctor image
              alt="Medical professional on phone"
              fill
              className="object-cover object-center rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalConsultationBanner;