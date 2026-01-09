
'use client';
import { useState } from 'react';

export default function KneeExercisesPDFDownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Replace this with your actual PDF URL
  const pdfUrl = '/documents/KNEE-Exercises.pdf'; // Your PDF file
  const fileName = 'KNEE-Exercises.pdf';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Knee Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 00-7 7v2a7 7 0 007 7h1v4a2 2 0 104 0v-4a7 7 0 006-7V9a7 7 0 00-7-7h-4z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">घुटनों के व्यायाम गाइड</h1>
          <h2 className="text-xl text-gray-700">Knee Exercises Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Download our comprehensive knee exercise guide to strengthen your knees, reduce stiffness, 
            relieve pain, and improve mobility step by step.
          </p>
          
          {/* Benefits */}
          <div className="bg-green-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-green-800 mb-2">लाभ:</h3>
            <ul className="space-y-1 text-green-700">
              <li>• घुटनों के दर्द में राहत</li>
              <li>• अकड़न और जकड़न में कमी</li>
              <li>• चलने और बैठने में आसानी</li>
              <li>• मांसपेशियों की मजबूती</li>
              <li>• आर्थराइटिस के लक्षणों में सुधार</li>
            </ul>
          </div>
          
          {/* Target Audience */}
          <div className="bg-blue-50 rounded-lg p-4 text-left text-sm">
            <h3 className="font-semibold text-blue-800 mb-2">किसके लिए उपयोगी:</h3>
            <ul className="space-y-1 text-blue-700">
              <li>• घुटनों में दर्द वाले मरीज</li>
              <li>• आर्थराइटिस और ऑस्टियोआर्थराइटिस के मरीज</li>
              <li>• खेल या चोट से घुटने में समस्या वाले</li>
              <li>• लंबे समय तक बैठने वाले लोग</li>
              <li>• बुजुर्ग जिनको घुटनों में जकड़न है</li>
            </ul>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-3 text-lg font-semibold"
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
          <p className="text-xs text-cyan-600"> ट्रामा, आर्थ्रोस्कोपी एवं जोड़ प्रत्यारोपण विशेषज्ञ</p>
          <p className="text-xs text-cyan-600">आर्थोपेडिक सर्जन</p>
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
