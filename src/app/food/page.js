"use client";
import { useState } from "react";

export default function DietChartPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const pdfUrl = "/documents/Food.pdf";
  const fileName = "Diet-Chart.pdf";

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
        {/* Nutrition Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            डाइट चार्ट
          </h1>
          <h2 className="text-xl text-gray-700">
            Healthy Diet Chart
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Download our scientifically designed diet chart to improve bone
            strength, joint health, and overall body nutrition. Easy to follow
            and suitable for daily life.
          </p>

          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-green-800 mb-2">
              डाइट के लाभ:
            </h3>
            <ul className="space-y-1 text-green-700">
              <li>• शरीर को आवश्यक पोषक तत्व प्रदान करता है</li>
              <li>• हड्डियों और जोड़ों को मजबूती देता है</li>
              <li>• सूजन और दर्द कम करने में सहायक</li>
              <li>• कैल्शियम और विटामिन की कमी पूरी करता है</li>
              <li>• ऊर्जा स्तर और इम्युनिटी बढ़ाता है</li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-orange-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-orange-800 mb-2">
              किसके लिए उपयोगी:
            </h3>
            <ul className="space-y-1 text-orange-700">
              <li>• हड्डियों या जोड़ों में दर्द वाले लोग</li>
              <li>• ऑफिस में लंबे समय तक बैठने वाले</li>
              <li>• बढ़ती उम्र में हड्डियों की कमजोरी</li>
              <li>• सर्वाइकल / कमर दर्द से पीड़ित व्यक्ति</li>
            </ul>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
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
            <strong>सलाह:</strong> यह डाइट चार्ट सामान्य मार्गदर्शन के लिए है।
            किसी भी विशेष बीमारी या एलर्जी की स्थिति में डॉक्टर से परामर्श अवश्य
            लें।
          </p>
        </div>
      </div>
    </div>
  );
}
