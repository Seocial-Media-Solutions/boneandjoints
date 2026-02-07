"use client";
import { useState } from "react";

export default function FooterExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Replace this with your actual PDF URL
  const pdfUrl = "/documents/Footer-Exercise.pdf"; // Your PDF file
  const fileName = "Footer-Exercise.pdf";

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
        {/* Foot/Ankle Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-teal-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Abstract Foot/Leg Icon */}
              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M7,17v-2h2v2H7z M7,13v-2h2v2H7z M7,9V7h2v2H7z M17,17h-6v-2h6V17z M17,13h-6v-2h6V13z M17,9h-6V7h6V9z" opacity="0" />
              {/* Using a footprint icon representation */}
              <path d="M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z M13.5,12c-0.83,0-1.5-0.67-1.5-1.5 S12.67,9,13.5,9S15,9.67,15,10.5S14.33,12,13.5,12z M9.5,12c-0.83,0-1.5-0.67-1.5-1.5S8.67,9,9.5,9S11,9.67,11,10.5S10.33,12,9.5,12z M5.5,12C4.67,12,4,11.33,4,10.5S4.67,9,5.5,9S7,9.67,7,10.5S6.33,12,5.5,12z M10.5,14c-2.67,0-5.11,1.38-6.44,3.63 C3.63,18.37,4.16,19,4.99,19h11.02c0.83,0,1.36-0.63,0.93-1.37C15.61,15.38,13.17,14,10.5,14z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            पैरों और टखने के व्यायाम गाइड
          </h1>
          <h2 className="text-xl text-gray-700">Foot & Ankle Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive foot and ankle exercise guide with easy-to-follow
            steps for relieving pain, improving balance, and strengthening ankle muscles.
          </p>

          {/* Benefits */}
          <div className="bg-teal-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-teal-800 mb-2">लाभ:</h3>
            <ul className="space-y-1 text-teal-700">
              <li>• पैरों और एड़ी के दर्द से राहत</li>
              <li>• टखने की मांसपेशियों को मजबूती</li>
              <li>• संतुलन में सुधार</li>
              <li>• मोच या चोट से उबरने में सहायक</li>
              <li>• रक्त संचार में सुधार</li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-orange-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-orange-800 mb-2">
              किसके लिए उपयोगी:
            </h3>
            <ul className="space-y-1 text-orange-700">
              <li>• लंबे समय तक खड़े रहने वाले</li>
              <li>• धावक और खिलाड़ी (Athletes)</li>
              <li>• प्लांटर फैस्कीइटिस के मरीज</li>
              <li>• टखने के दर्द या अकड़न की समस्या</li>
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
