'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewYearPopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-gray-100 transition-all hover:scale-110"
          aria-label="Close popup"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* New Year Banner Container */}
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden relative border-4 border-yellow-400">
          {/* Banner Image */}
          <div className="relative w-full aspect-square">
            <Image
              src="/images/new-year-2026.jpg"
              alt="Happy New Year 2026 Wishes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Progress bar with festive colors */}
        <div className="mt-3 bg-gray-800 rounded-full h-2 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 h-full animate-progress"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </div>
  );
}