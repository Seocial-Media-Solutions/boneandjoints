"use client";
import { useState } from "react";

export default function WristExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this with your actual PDF URL
  const pdfUrl = "/documents/Wrist-Exercise.pdf"; // Your PDF file
  const fileName = "Wrist-Exercise.pdf";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Wrist/Hand Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v6.5c0 .28.22.5.5.5s.5-.22.5-.5V2c0-.83.67-1.5 1.5-1.5S15 1.17 15 2v8.5c0 .28.22.5.5.5s.5-.22.5-.5V3c0-.83.67-1.5 1.5-1.5S19 2.17 19 3v7.5c0 .28.22.5.5.5s.5-.22.5-.5V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            कलाई के व्यायाम गाइड
          </h1>
          <h2 className="text-xl text-gray-700">Wrist Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive wrist exercise guide with easy-to-follow
            steps for strengthening and improving flexibility of your wrists.
            Perfect for daily practice.
          </p>
          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-green-800 mb-2">
              लाभ :
            </h3>
            <ul className="space-y-1 text-green-700">
              <li>
                • कलाई और हाथ के दर्द में राहत 
              </li>
              <li>
                • मांसपेशियों और टेंडन को मजबूत बनाता है 
              </li>
              <li>• सूजन और अकड़न कम करता है </li>
              <li>
                • रोज़मर्रा के काम करने में आसानी 
              </li>
              <li>
                • चोट या रिपीट मूवमेंट से होने वाले दर्द को रोकता है 
              </li>
            </ul>
          </div>

          {/* Useful For */}
          <div className="bg-yellow-50 rounded-lg p-4 text-left text-sm mt-4">
            <h3 className="font-semibold text-yellow-800 mb-2">
              किसके लिए उपयोगी :
            </h3>
            <ul className="space-y-1 text-yellow-700">
              <li>
                • कलाई में दर्द या सूजन वाले लोग 
    
              </li>
              <li>
                • कंप्यूटर या मोबाइल ज्यादा इस्तेमाल करने वाले लोग 
              </li>
              <li>
                • खेलकूद या जिम करने वाले लोग 
              </li>
              <li>
                • चोट या सर्जरी के बाद रिकवरी करने वाले लोग 
              </li>
              <li>
                • रिपीट मूवमेंट करने वाले लोग 
              </li>
            </ul>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
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

        {/* Contact Info */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            जीवन ज्योति हॉस्पिताल रामगंज, अजमेर, राजस्थान
          </p>
          <p className="text-xs text-gray-600">📞 +91 86182 43967</p>
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
