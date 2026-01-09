import React from 'react';
import Image from 'next/image';

const WhychoosingUs = ({ imagePath = "/images/doctor.png" }) => {
  const features = [
    {
      icon: "🏥",
      title: "Health Partner",
      description: "Your trusted partner in health, providing comprehensive and compassionate care."
    },
    {
      icon: "⭐",
      title: "Medical Excellence",
      description: "Leaders in medical excellence, offering advanced treatments and concern care."
    },
    {
      icon: "🤝",
      title: "Our Commitment",
      description: "Dedicated to your health and well-being with personalized care."
    },
    {
      icon: "👤",
      title: "Patient Focus",
      description: "Centered on you, delivering personalized care with compassion and expertise."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-blue-600 mb-2 tracking-wide uppercase">
            Why Choose Us
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            All-Inclusive Medical Care
            <br />
            <span className="text-blue-600">For Everyone</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl transform rotate-3 opacity-30"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-3xl transform -rotate-2 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={imagePath}
                  alt="Healthcare Professional"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-lg group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhychoosingUs;