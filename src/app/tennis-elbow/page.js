"use client";
import { useState } from "react";

export default function TennisElbowExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this with your actual PDF URL
  const pdfUrl = "/documents/Tennis-Elbow-Exercises.pdf"; // Your PDF file
  const fileName = "Tennis-Elbow-Exercises.pdf";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Tennis Elbow/Arm Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.9 2 10 2.9 10 4V8C10 9.1 10.9 10 12 10S14 9.1 14 8V4C14 2.9 13.1 2 12 2Z" />
              <path d="M12 10C10.9 10 10 10.9 10 12V16C10 17.1 10.9 18 12 18S14 17.1 14 16V12C14 10.9 13.1 10 12 10Z" />
              <circle cx="7" cy="8" r="2" />
              <circle cx="17" cy="8" r="2" />
              <path d="M7 10V14C7 15.1 6.1 16 5 16S3 15.1 3 14V10" />
              <path d="M17 10V14C17 15.1 17.9 16 19 16S21 15.1 21 14V10" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            टेनिस एल्बो एक्सरसाइज गाइड
          </h1>
          <h2 className="text-xl text-gray-700">Tennis Elbow Exercise Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive tennis elbow rehabilitation guide with
            proven exercises to strengthen and heal your elbow. Includes
            stretching and strengthening routines for effective recovery.
          </p>
          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-green-800 mb-2">
              लाभ :
            </h3>
            <ul className="space-y-1 text-green-700">
              <li>
                • कोहनी के दर्द और सूजन में कमी 
              </li>
              <li>
                • मांसपेशियों और टेंडन को मजबूत बनाता है 
              </li>
              <li>
                • रोज़मर्रा के काम करने में आसानी 
              </li>
              <li>
                • चोट से जल्दी रिकवरी में मदद करता है 
              </li>
              <li>
                • दोबारा चोट लगने का खतरा कम करता है 
              </li>
            </ul>
          </div>

          {/* Useful For */}
          <div className="bg-yellow-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-yellow-800 mb-2">
              किसके लिए उपयोगी :
            </h3>
            <ul className="space-y-1 text-yellow-700">
              <li>• टेनिस एल्बो  के मरीज</li>
              <li>• कोहनी में दर्द या सूजन वाले लोग</li>
              <li>• कंप्यूटर या ऑफिस में लंबे समय तक काम करने वाले लोग</li>
              <li>
                • खेलकूद या जिम करने वाले लोग 
              </li>
              <li>
                • दोहराए जाने वाले हाथ के मूवमेंट करने वाले लोग 
              </li>
            </ul>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
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
            डॉ. अभिषेक सक्सेना
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
