"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';

const slides = [
  {
    image: "/images/slide1.webp",
    title: "Dr. Abhishek Saxena",
    subtitle: "Transforming Lives Through Specialized Orthopedic Care"
  },
  {
    image: "/images/slide2.webp",
    title: "Dr. Abhishek Saxena",
    subtitle: "Your Path To Recovery Starts Here, With Our Expertise"
  },
  {
    image: "/images/slide3.jpg",
    title: "Dr. Abhishek Saxena",
    subtitle: "Shoulder, Knee & Sports Injury Treatment"
  }
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  const slideRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Slide show properties - ensure autoplay is enabled
  const properties = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: false,
    arrows: !isMobile, // Hide arrows on mobile
    autoplay: true, // Enable autoplay
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    }
  };

  const handleDotClick = (index) => {
    if (slideRef.current) {
      slideRef.current.goTo(index);
    }
  };

  const handleAppointmentClick = () => {
    // Button animation feedback instead of alert
    setIsButtonAnimating(true);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsButtonAnimating(false);
      
      // Here you would add your actual appointment booking logic
      const appointmentSection = document.getElementById('appointment-form');
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-screen w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 h-32 w-32 md:h-64 md:w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-40 w-40 md:h-80 md:w-80 rounded-full bg-blue-600/10 blur-3xl" />
      
      <Slide {...properties} ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className="each-slide-effect">
            <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-screen w-full">
              {/* Image with overlay gradient - Using Next.js Image component */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent z-10" />
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={index === 0} // Priority loading for first slide
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyIDMiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4=" 
                  className="object-cover"
                />
              </div>
              
              <div className="absolute left-0 top-0 flex h-full w-full items-center px-6 sm:px-8 md:px-12 lg:px-24 z-20">
                <div className="max-w-xl lg:max-w-2xl space-y-4 md:space-y-6 lg:space-y-8 text-left">
                  <div className="space-y-3 md:space-y-4 opacity-0 animate-slide-fade-in">
                    <div className="inline-block rounded-full bg-blue-600/20 px-3 py-1 backdrop-blur-sm">
                      <span className="text-xs sm:text-sm font-medium text-blue-200">Orthopedic Specialist</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {slide.title}
                    </h2>
                    
                    <div className="h-1 w-16 md:w-20 lg:w-24 bg-blue-500" />
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                      {slide.subtitle}
                    </p>
                    
                    <div className="pt-4 md:pt-6">
                      {/* Improved button with animation feedback */}
                      <Link href="/bookconsultation">
                      <button 
                        onClick={handleAppointmentClick}
                        className={`group relative cursor-pointer rounded-full overflow-hidden ${
                          isButtonAnimating ? 'animate-button-press' : ''
                        } bg-blue-600 px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg font-medium text-white transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 -mx-0`}
                        style={{ touchAction: 'manipulation' }}
                        disabled={isButtonAnimating}
                      >
                        <span className="relative z-10 block">
                          {isButtonAnimating ? (
                            <span className="inline-flex items-center">
                              <span className="mr-2">Processing</span>
                              <span className="animate-pulse">...</span>
                            </span>
                          ) : (
                            "Book an Appointment"
                          )}
                        </span>
                        <span className="absolute bottom-0 left-0 h-0 w-full bg-blue-800 transition-all duration-300 group-hover:h-full"></span>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      
      {/* Mobile-friendly custom controls */}
      {isMobile && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex pointer-events-none">
          <button 
            onClick={() => slideRef.current?.goBack()}
            className="h-full w-1/4 flex items-center justify-start pl-2 pointer-events-auto focus:outline-none"
            aria-label="Previous slide"
          >
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </button>
          <div className="h-full w-2/4 pointer-events-none"></div>
          <button 
            onClick={() => slideRef.current?.goNext()}
            className="h-full w-1/4 flex items-center justify-end pr-2 pointer-events-auto focus:outline-none"
            aria-label="Next slide"
          >
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </button>
        </div>
      )}
      
      {/* Mobile-friendly dot indicators with larger tap targets */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 z-30 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="mx-2 p-2 focus:outline-none touch-manipulation"
            aria-label={`Go to slide ${index + 1}`}
            style={{ touchAction: 'manipulation' }}
          >
            <div className={`relative h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-500 transform scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}>
              {activeIndex === index && (
                <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping"></span>
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Enhanced styling with mobile fixes and new animations */}
      <style jsx global>{`
        .react-slideshow-container {
          height: 100%;
        }
        
        .react-slideshow-container .nav {
          z-index: 20;
          margin: 0 10px;
        }
        
        .react-slideshow-container .nav span {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .react-slideshow-container .nav {
            margin: 0 20px;
          }
          
          .react-slideshow-container .nav span {
            width: 48px;
            height: 48px;
          }
        }
        
        .react-slideshow-container .nav span:hover {
          background-color: rgba(59, 130, 246, 0.5);
          transform: scale(1.15);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .react-slideshow-container .nav span svg {
          width: 18px;
          height: 18px;
          stroke-width: 2.5;
          stroke: white;
        }
        
        @media (min-width: 768px) {
          .react-slideshow-container .nav span svg {
            width: 24px;
            height: 24px;
          }
        }
        
        @keyframes slide-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-fade-in {
          animation: slide-fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          animation-delay: 0.2s;
        }
        
        @keyframes button-press {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0.5); }
          50% { transform: scale(0.95); box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0.5); }
        }
        
        .animate-button-press {
          animation: button-press 0.6s ease-in-out;
        }
        
        /* Fix for mobile buttons */
        button {
          -webkit-tap-highlight-color: transparent;
        }
        
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
}