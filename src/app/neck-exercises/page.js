"use client";
import { useState } from "react";

export default function NeckExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this with your actual PDF URL
  const pdfUrl = "/documents/Neck-Exercise.pdf"; // Your PDF file
  const fileName = "Neck-Exercise.pdf";

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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Neck/Head Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-teal-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7C14.65 7 14.4 7.35 14.4 7.65V9.35C14.4 9.65 14.65 10 15 10V22H13V16H11V22H9V10C9.35 10 9.6 9.65 9.6 9.35V7.65C9.6 7.35 9.35 7 9 7L3 7V9H21Z" />
              <circle
                cx="12"
                cy="4"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M12 6.5V8.5M10.5 7.5L13.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            गर्दन के व्यायाम गाइड
          </h1>
          <h2 className="text-xl text-gray-700">Neck Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive neck exercise guide with easy-to-follow
            steps for relieving neck pain and stiffness. Perfect for office
            workers and daily neck care.
          </p>

          {/* Benefits */}
          <div className="bg-teal-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-teal-800 mb-2">लाभ:</h3>
            <ul className="space-y-1 text-teal-700">
              <li>• गर्दन के दर्द से राहत</li>
              <li>• अकड़न में कमी</li>
              <li>• गर्दन की मांसपेशियों को मजबूती</li>
              <li>• बैठकर काम करने वालों के लिए उपयोगी</li>
              <li>• सिरदर्द में राहत</li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-orange-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-orange-800 mb-2">
              किसके लिए उपयोगी:
            </h3>
            <ul className="space-y-1 text-orange-700">
              <li>• कंप्यूटर पर काम करने वाले</li>
              <li>• गर्दन में दर्द या अकड़न की समस्या</li>
              <li>• लंबे समय तक बैठने वाले</li>
              <li>• सर्वाइकल स्पॉन्डिलाइटिस के मरीज</li>
            </ul>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
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
