'use client';
import { useState } from 'react';

export default function FrozenShoulderExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Replace this with your actual PDF URL
  const pdfUrl = '/documents/Frozen-Shoulder-Exercise.pdf'; // Your PDF file
  const fileName = 'Frozen-Shoulder-Exercise.pdf';

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const response = await fetch(pdfUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Shoulder Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.5 8.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5zM12 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2zm-5.5 4.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5z"/>
              <circle cx="16" cy="8" r="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="8" cy="8" r="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">फ्रोजन शोल्डर एक्सरसाइज गाइड</h1>
          <h2 className="text-xl text-gray-700">Frozen Shoulder Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive frozen shoulder exercise guide to help manage symptoms, 
            reduce pain, and improve shoulder mobility step by step.
          </p>
          
         
          
          {/* Benefits */}
          <div className="bg-blue-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-blue-800 mb-2">लाभ:</h3>
            <ul className="space-y-1 text-blue-700">
              <li>• कंधे के दर्द में राहत</li>
              <li>• जकड़न और अकड़न में कमी</li>
              <li>• कंधे की गतिशीलता में सुधार</li>
              <li>• मांसपेशियों की मजबूती</li>
              <li>• दैनिक गतिविधियों में आसानी</li>
            </ul>
          </div>
          
      
          
          {/* Target Audience */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-green-800 mb-2">किसके लिए उपयोगी:</h3>
            <ul className="space-y-1 text-green-700">
              <li>• फ्रोजन शोल्डर के मरीज</li>
              <li>• कंधे में जकड़न की समस्या</li>
              <li>• 40-60 साल की उम्र के लोग</li>
              <li>• डायबिटीज के मरीज (अधिक जोखिम)</li>
              <li>• कंधे की चोट के बाद रिकवरी</li>
            </ul>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                डाउनलोड हो रहा है...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF डाउनलोड करें
              </>
            )}
          </button>
        </div>

        {/* Doctor Info */}
        <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
          <p className="text-sm text-cyan-800 font-medium">डॉ. अभिषेक सक्सेना</p>
          <p className="text-xs text-cyan-600">आर्थोपेडिक सर्जन</p>
          <p className="text-xs text-cyan-600">ट्रामा, आर्थ्रोस्कोपी एवं जोड़ प्रत्यारोपण विशेषज्ञ</p>
          <p className="text-xs text-cyan-500 mt-1">boneandjoints.in</p>
        </div>

        {/* Contact Info */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">जीवन ज्योति हॉस्पिताल रामगंज, अजमेर, राजस्थान</p>
          <p className="text-xs text-gray-600">📞 +91 86102 43967</p>
        </div>

       

        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <p className="text-xs text-red-800">
            <strong>सलाह:</strong> किसी भी नए व्यायाम कार्यक्रम को शुरू करने से पहले अपने डॉक्टर या फिजियोथेरेपिस्ट से परामर्श जरूर करें।
          </p>
        </div>
      </div>
    </div>
  );
}