"use client";
import AboutHero from "@/components/AboutHero";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';







export default function NutritionFitness() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: ''
    });
    const [errors, setErrors] = useState({
        fullName: '',
        phoneNumber: '',
        city: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Enhanced Indian phone number validation
    const validateIndianPhoneNumber = (phone) => {
        // Check if it's exactly 10 digits
        if (!/^\d{10}$/.test(phone)) return false;
        
        // Check if it starts with valid Indian mobile prefixes (6, 7, 8, 9)
        if (!/^[6-9]/.test(phone)) return false;
        
        // Check for invalid patterns
        const invalidPatterns = [
            /^(\d)\1{9}$/, // All same digits (e.g., 7777777777)
            /^(\d)\1{7,}/, // 8 or more consecutive same digits
            /^(0123456789|1234567890|9876543210|0987654321)$/, // Sequential patterns
            /^([6-9])\1{4,}/, // 5 or more consecutive same digits starting with valid prefix
        ];
        
        // Check for common fake numbers
        const commonFakeNumbers = [
            '9999999999', '8888888888', '7777777777', '6666666666',
            '1234567890', '0987654321', '9876543210', '1111111111',
            '2222222222', '3333333333', '4444444444', '5555555555',
            '0000000000', '1010101010', '2020202020', '3030303030',
            '9090909090', '8080808080', '7070707070', '6060606060'
        ];
        
        if (commonFakeNumbers.includes(phone)) return false;
        
        // Check for invalid patterns
        for (const pattern of invalidPatterns) {
            if (pattern.test(phone)) return false;
        }
        
        // Additional checks for suspicious patterns
        // Check for too many repeated digits (more than 4 of the same digit)
        const digitCounts = {};
        for (const digit of phone) {
            digitCounts[digit] = (digitCounts[digit] || 0) + 1;
            if (digitCounts[digit] > 4) return false;
        }
        
        // Check for alternating patterns like 9090909090, 8181818181
        let isAlternating = true;
        for (let i = 2; i < phone.length; i++) {
            if (phone[i] !== phone[i % 2]) {
                isAlternating = false;
                break;
            }
        }
        if (isAlternating) return false;
        
        return true;
    };

    const validateName = (name) => {
        return /^[A-Za-z\s]+$/.test(name);
    };

    const validateCity = (city) => {
        // Allow letters, spaces, and common punctuation in city names
        return /^[A-Za-z\s\-\.']+$/.test(city);
    };

    // Function to get detailed error message for phone validation
    const getPhoneValidationError = (phone) => {
        if (!phone) return '';
        
        if (phone.length !== 10) {
            return 'Phone number must be exactly 10 digits';
        }
        
        if (!/^\d{10}$/.test(phone)) {
            return 'Phone number should contain only digits';
        }
        
        if (!/^[6-9]/.test(phone)) {
            return 'Indian mobile numbers must start with 6, 7, 8, or 9';
        }
        
        // Check for all same digits
        if (/^(\d)\1{9}$/.test(phone)) {
            return 'Please enter a valid mobile number (all digits cannot be the same)';
        }
        
        // Check for common fake numbers
        const commonFakeNumbers = [
            '9999999999', '8888888888', '7777777777', '6666666666',
            '1234567890', '0987654321', '9876543210', '1111111111',
            '2222222222', '3333333333', '4444444444', '5555555555',
            '0000000000', '1010101010', '2020202020', '3030303030',
            '9090909090', '8080808080', '7070707070', '6060606060'
        ];
        
        if (commonFakeNumbers.includes(phone)) {
            return 'Please enter a valid mobile number (this appears to be a fake number)';
        }
        
        // Check for too many repeated digits
        const digitCounts = {};
        for (const digit of phone) {
            digitCounts[digit] = (digitCounts[digit] || 0) + 1;
            if (digitCounts[digit] > 4) {
                return 'Please enter a valid mobile number (too many repeated digits)';
            }
        }
        
        // Check for alternating patterns
        let isAlternating = true;
        for (let i = 2; i < phone.length; i++) {
            if (phone[i] !== phone[i % 2]) {
                isAlternating = false;
                break;
            }
        }
        if (isAlternating) {
            return 'Please enter a valid mobile number (alternating pattern detected)';
        }
        
        // Check for consecutive same digits (5 or more)
        if (/(\d)\1{4,}/.test(phone)) {
            return 'Please enter a valid mobile number (too many consecutive same digits)';
        }
        
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            setErrors(prev => ({ ...prev, phoneNumber: '' }));

            if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else if (name === 'fullName') {
            if (value === '' || validateName(value)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else if (name === 'city') {
            if (value === '' || validateCity(value)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    
    useEffect(() => {
        if (formData.phoneNumber && formData.phoneNumber.length > 0) {
            const errorMessage = getPhoneValidationError(formData.phoneNumber);
            setErrors(prev => ({
                ...prev, 
                phoneNumber: errorMessage
            }));
        }
    }, [formData.phoneNumber]);

    useEffect(() => {
        if (formData.fullName && formData.fullName.length > 0) {
            if (!validateName(formData.fullName)) {
                setErrors(prev => ({
                    ...prev, 
                    fullName: 'Name should contain only alphabets and spaces'
                }));
            } else {
                setErrors(prev => ({...prev, fullName: ''}));
            }
        }
    }, [formData.fullName]);

    useEffect(() => {
        if (formData.city && formData.city.length > 0) {
            if (!validateCity(formData.city)) {
                setErrors(prev => ({
                    ...prev, 
                    city: 'City name should contain only alphabets, spaces, hyphens, apostrophes, and periods'
                }));
            } else {
                setErrors(prev => ({...prev, city: ''}));
            }
        }
    }, [formData.city]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateName(formData.fullName)) {
            setErrors(prev => ({
                ...prev, 
                fullName: 'Name should contain only alphabets and spaces'
            }));
            return;
        }
        
        if (!validateIndianPhoneNumber(formData.phoneNumber)) {
            const errorMessage = getPhoneValidationError(formData.phoneNumber) || 'Please enter a valid Indian mobile number';
            setErrors(prev => ({
                ...prev, 
                phoneNumber: errorMessage
            }));
            return;
        }

        if (formData.city && !validateCity(formData.city)) {
            setErrors(prev => ({
                ...prev, 
                city: 'City name should contain only alphabets, spaces, hyphens, apostrophes, and periods'
            }));
            return;
        }
        
        setIsLoading(true);
        setError('');
    
        try {
            const submissionData = {
                ...formData,
                timestamp: new Date()
            };
            
            await addDoc(collection(db, "nutritionFormSubmissions"), submissionData);
            setIsSubmitted(true);
        } catch (err) {
            setError('There was an error submitting your form. Please try again.');
            console.error('Firebase submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const healthResources = [
        { 
            id: 1, 
            name: 'Neck Exercises', 
            description: 'A comprehensive guide to neck exercises for pain relief and strength', 
            color: 'from-green-500 to-green-700', 
            filePath: '/pdfs/neck-exercises.pdf', 
            fileName: 'neck-exercises.pdf'
        },
        { 
            id: 2, 
            name: 'Planter Exercises', 
            description: 'A detailed guide to planter exercises for foot health and strength', 
            color: 'from-blue-500 to-blue-700', 
            filePath: '/pdfs/planter-exercises.pdf', 
            fileName: 'planter-exercises.pdf'
        },
        { 
            id: 3, 
            name: 'Shoulder Exercises', 
            description: 'Shoulder exercises for pain relief and strength', 
            color: 'from-purple-500 to-purple-700', 
            filePath: '/pdfs/shoulder-exercises.pdf', 
            fileName: 'shoulder-exercises.pdf'
        },
        { 
            id: 4, 
            name: 'Knee Exercises', 
            description: 'Knee exercises for pain relief and strength', 
            color: 'from-red-500 to-red-700', 
            filePath: '/pdfs/knee-exercises.pdf', 
            fileName: 'knee-exercises.pdf'
        },
        { 
            id: 5, 
            name: 'Hip Flexion Exercises', 
            description: 'Hip flexion exercises for pain relief and strength', 
            color: 'from-yellow-500 to-yellow-700', 
            filePath: '/pdfs/hipflexion.pdf', 
            fileName: 'hipflexion-exercises.pdf'
        }
    ];
    
    const downloadResource = (resource) => {
        const link = document.createElement('a');
        link.href = resource.filePath;
        link.download = resource.fileName || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const getInputStatus = (field) => {
        if (field === 'phoneNumber') {
            if (!formData.phoneNumber) return 'default';
            if (errors.phoneNumber) return 'error';
            if (validateIndianPhoneNumber(formData.phoneNumber)) return 'success';
            return 'default';
        }
        return 'default';
    };
    
    return(
        <>
            <AboutHero
                bannerImage="/images/nutrition1.png"
                title="Dr. Abhishek Saxena"
                subtitle="Transforming Lives with Advanced Orthopedic Solutions"
                breadcrumbs={[
                   
                    { label: 'Nutrition & Fitness', path: '/nutrition-fitness' }
                ]}
            />
            <div className="min-h-screen bg-gray-50">
                <Head>
                    <title>Health & Fitness Resources</title>
                    <meta name="description" content="Get valuable health and fitness resources" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="container mx-auto px-4 py-12">
                    <main className="flex flex-col items-center justify-center">
                        {!isSubmitted ? (
                            <div className="w-full max-w-md">
                                <div className="text-center mb-10">
                                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">
                                        Complete this form to learn about healthy food and exercise!
                                    </h1>
                                    <p className="text-gray-600">
                                        Fill in your details to access exclusive health and fitness resources
                                    </p>
                                </div>
                                
                                <form 
                                    onSubmit={handleSubmit} 
                                    className="bg-white shadow-xl rounded-xl p-8 transition-all duration-300 hover:shadow-2xl"
                                >
                                    <div className="mb-6">
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-lg border 
                                                ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} 
                                                focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && (
                                            <div className="mt-2 flex items-center text-sm text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.fullName}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                            Mobile Number
                                            <span className="text-xs ml-2 text-gray-500">(Indian mobile number)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                maxLength={10}
                                                className={`w-full px-4 py-3 rounded-lg border 
                                                    ${getInputStatus('phoneNumber') === 'error' ? 'border-red-500 focus:ring-red-500' : 
                                                    getInputStatus('phoneNumber') === 'success' ? 'border-green-500 focus:ring-green-500' : 
                                                    'border-gray-300 focus:ring-indigo-500'} 
                                                    focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200
                                                    ${formData.phoneNumber.length > 0 ? 'pr-10' : ''}`}
                                                placeholder="Enter your 10-digit mobile number"
                                            />
                                            {getInputStatus('phoneNumber') === 'success' && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                            {getInputStatus('phoneNumber') === 'error' && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        {errors.phoneNumber && (
                                            <div className="mt-2 flex items-center text-sm text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.phoneNumber}
                                            </div>
                                        )}
                                        <div className="mt-2 text-xs text-gray-500">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li className={`${formData.phoneNumber.length === 10 ? 'text-green-500' : ''}`}>
                                                    Must be exactly 10 digits
                                                </li>
                                               
                                                <li className={`${/^\d+$/.test(formData.phoneNumber) ? 'text-green-500' : ''}`}>
                                                    Only numbers are allowed (0-9)
                                                </li>
                                                <li className={`${validateIndianPhoneNumber(formData.phoneNumber) ? 'text-green-500' : ''}`}>
                                                    Must be a valid Indian mobile number
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-lg border 
                                                ${errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} 
                                                focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
                                            placeholder="Enter your city name"
                                        />
                                        {errors.city && (
                                            <div className="mt-2 flex items-center text-sm text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.city}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            <span className="font-bold">Disclaimer:</span> The content uploaded on this page, including but not limited to the nutrition chart and exercise chart, is the intellectual property of Dr. Abhishek Saxena. Any unauthorized use, reproduction, or distribution of this material without prior consent is strictly prohibited.
                                        </p>
                                    </div>
                                    
                                    {error && (
                                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
                                            {error}
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 
                                            ${isLoading || errors.phoneNumber || errors.fullName || errors.city ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200'}`}
                                        disabled={isLoading || errors.phoneNumber !== '' || errors.fullName !== '' || errors.city !== ''}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="w-full">
                                <div className="text-center mb-10">
                                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">Thank You for Submitting!</h1>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        Here are your health and fitness resources. Click on each card to download the respective PDF.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {healthResources.map((resource) => (
                                        <div 
                                            key={resource.id} 
                                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                            onClick={() => downloadResource(resource)}
                                        >
                                            <div className={`h-48 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                                                <div className="text-white text-center p-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-xl font-bold">{resource.name}</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        downloadResource(resource);
                                                    }}
                                                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-900 to-cyan-400 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download PDF
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>

                    <footer className="mt-16 text-center text-gray-600">
                        <p>© {new Date().getFullYear()} Dr. Abhishek Saxena - All Rights Reserved</p>
                    </footer>
                </div>
            </div>
        </>
    )
}