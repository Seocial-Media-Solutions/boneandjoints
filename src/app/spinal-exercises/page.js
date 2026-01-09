"use client";
import { useState } from "react";

export default function SpinalExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this with your actual PDF URL
  const pdfUrl = "/documents/Spinal-Exercises.pdf"; // Your PDF file
  const fileName = "Spinal-Exercises.pdf";

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch(pdfUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.status}`);
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Spine/Medical Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V8c0-2.21 1.79-4 4-4s4 1.79 4 4v2c0 .55-.45 1-1 1s-1-.45-1-1V8c0-1.1-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
              <circle cx="8" cy="16" r="2" />
              <circle cx="16" cy="16" r="2" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            स्पाइनल एक्सरसाइज गाइड
          </h1>
          <h2 className="text-xl text-gray-700">Spinal Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive spinal exercise guide with easy-to-follow
            steps for managing spinal pain. Includes Cat-Cow pose, Spinal Twist,
            and Forward Bend exercises.
          </p>
          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-green-800 mb-2">
              लाभ :
            </h3>
            <ul className="space-y-1 text-green-700">
              <li>• रीढ़ की हड्डी के दर्द में राहत </li>
              <li>
                • रीढ़ की लचक और गतिशीलता बढ़ाता है 
              </li>
              <li>
                • मांसपेशियों की ताकत और सहारा बढ़ाता है 
              </li>
              <li>
                • चोट या ऑपरेशन के बाद रिकवरी में मदद 
              </li>
              <li>
                • रोज़मर्रा के काम करने में आराम 
              </li>
            </ul>
          </div>

          {/* Useful For */}
          <div className="bg-yellow-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-yellow-800 mb-2">
              किसके लिए उपयोगी :
            </h3>
            <ul className="space-y-1 text-yellow-700">
              <li>• रीढ़ की हड्डी में दर्द वाले लोग</li>
              <li>• लंबे समय तक बैठने वाले लोग</li>
              <li>• चोट या सर्जरी के बाद रिकवरी करने वाले लोग</li>
              <li>• पीठ में अकड़न महसूस करने वाले लोग</li>
              <li>• योग या फिटनेस में सुधार चाहते लोग</li>
            </ul>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                डाउनलोड हो रहा है...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                PDF डाउनलोड करें
              </>
            )}
          </button>
        </div>

        {/* Doctor Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 font-medium">
            डॉ. अभिषेक सक्सेना{" "}
          </p>
          <p className="text-xs text-blue-600">
            ट्रामा, आर्थ्रोस्कोपी एवं जोड़ प्रत्यारोपण विशेषज्ञ
          </p>
          <p className="text-xs text-blue-600">ऑर्थोपेडिक सर्जन</p>
          <p className="text-xs text-blue-500 mt-1">boneandjoints.in</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>सलाह:</strong> किसी भी नए व्यायाम कार्यक्रम को शुरू करने से
            पहले अपने डॉक्टर या फिजियोथेरेपिस्ट से परामर्श जरूर करें।
          </p>
        </div>
      </div>
    </div>
  );
}
