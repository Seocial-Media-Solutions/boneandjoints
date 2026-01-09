'use client';

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BookingSystem = () => {
  // State management
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [firestoreReady, setFirestoreReady] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Intersection Observer hooks for scroll animations
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [guidelinesRef, guidelinesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Check if we're on client side and set Firestore as ready
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirestoreReady(true);
    }
  }, []);

  // Clinic and Hospital hours (same as before)
  const consultationHours = {
    clinic: {
      0: { // Sunday
        start: '10:00',
        end: '12:00',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      1: { // Monday
        start1: '09:00',
        end1: '10:00',
        start2: '14:00',
        end2: '20:30',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      2: { // Tuesday
        start1: '09:00',
        end1: '10:00',
        start2: '14:00',
        end2: '20:30',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      3: { // Wednesday
        isClosed: true,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      4: { // Thursday
        start1: '09:00',
        end1: '10:00',
        start2: '14:00',
        end2: '20:30',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      5: { // Friday
        start1: '09:00',
        end1: '10:00',
        start2: '14:00',
        end2: '20:30',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      },
      6: { // Saturday
        start1: '09:00',
        end1: '10:00',
        start2: '14:00',
        end2: '20:30',
        isClosed: false,
        location: "Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001"
      }
    },
    hospital: {
      0: { // Sunday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      1: { // Monday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      2: { // Tuesday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      3: { // Wednesday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      4: { // Thursday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      5: { // Friday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      },
      6: { // Saturday
        start: '11:00',
        end: '13:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer"
      }
    }
  };

  // Fetch booked slots from Firestore (same as before)
  const fetchBookedSlots = async (date) => {
    if (!firestoreReady || !db) {
      console.warn("Firestore not ready yet");
      return;
    }
    
    try {
      const q = query(collection(db, "bookings"), where("date", "==", date));
      const querySnapshot = await getDocs(q);
      const booked = [];
      querySnapshot.forEach((doc) => {
        booked.push(doc.data().timeSlot);
      });
      setBookedSlots(booked);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setErrorMessage("Failed to fetch booked slots. Please try again.");
    }
  };

  // Format time to 12-hour format with AM/PM (same as before)
  const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Generate time slots in 15-minute intervals (same as before)
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let current = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);

    while (current < end) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      const timeSlot = `${hours}:${minutes}`;
      slots.push(timeSlot);
      
      current.setMinutes(current.getMinutes() + 15);
    }
    
    return slots;
  };

  // Update available time slots based on consultation type and date (same as before)
  useEffect(() => {
    if (consultationType && selectedDate && firestoreReady) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();

      const hours = consultationHours[consultationType][dayOfWeek];
      
      if (hours.isClosed) {
        setAvailableSlots(['Closed']);
        return;
      }
      
      let slots = [];
      
      if (hours.start1 && hours.end1) {
        slots = [...slots, ...generateTimeSlots(hours.start1, hours.end1)];
      }
      if (hours.start2 && hours.end2) {
        slots = [...slots, ...generateTimeSlots(hours.start2, hours.end2)];
      }
      if (hours.start && hours.end) {
        slots = [...slots, ...generateTimeSlots(hours.start, hours.end)];
      }
      
      setAvailableSlots(slots);
      fetchBookedSlots(selectedDate);
    } else {
      setAvailableSlots([]);
    }
  }, [consultationType, selectedDate, firestoreReady]);

  // Get minimum date (2 days from now) (same as before)
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 1);
    return minDate.toISOString().split('T')[0];
  };

  // Get consultation location based on type and date (same as before)
  const getConsultationLocation = () => {
    if (!consultationType || !selectedDate) return '';
    
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return consultationHours[consultationType][dayOfWeek].location;
  };

  // Validation functions (same as before)
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError('Full Name is required');
      return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Name should only contain letters and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      setPhoneError('Phone Number is required');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone Number should be 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError('Email Address is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid Email Address');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Handle form submission (same as before)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!firestoreReady || !db) {
      setErrorMessage("Database connection is not ready. Please refresh the page and try again.");
      return;
    }
    
    if (!consultationType || !selectedDate || !selectedSlot || !fullName || !phoneNumber || !email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    
    if (selectedSlot === 'Closed') {
      setErrorMessage("The selected day is closed for consultations.");
      return;
    }
    
    if (bookedSlots.includes(selectedSlot)) {
      setErrorMessage("This time slot is already booked. Please select another slot.");
      return;
    }
    
    const isNameValid = validateName(fullName);
    const isPhoneValid = validatePhone(phoneNumber);
    const isEmailValid = validateEmail(email);
    
    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      await addDoc(collection(db, "bookings"), {
        consultationType,
        date: selectedDate,
        timeSlot: selectedSlot,
        fullName,
        phoneNumber,
        email,
        location: getConsultationLocation(),
        createdAt: new Date().toISOString(),
        status: "pending"
      });
      
      setSelectedSlot('');
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setMessage("Booking successful! We will send a confirmation to your email shortly. Please arrive 15 minutes before your scheduled appointment time.");
      
      window.scrollTo(0, 0);
      
      fetchBookedSlots(selectedDate);
    } catch (error) {
      console.error("Error adding booking:", error);
      setErrorMessage("Failed to book appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-4 mt-6 sm:p-6 bg-gray-50 rounded-lg shadow-lg"
    >
      <motion.h1 
        ref={headerRef}
        initial={{ y: -20, opacity: 0 }}
        animate={headerInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center"
      >
        Book Your Consultation with Dr. Abhishek Saxena
      </motion.h1>
      
      {!firestoreReady && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md"
        >
          Connecting to booking system... Please wait.
        </motion.div>
      )}
      
      {message && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
        >
          {message}
        </motion.div>
      )}
      
      {errorMessage && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
        >
          {errorMessage}
        </motion.div>
      )}
      
      <motion.div
        ref={guidelinesRef}
        initial={{ y: 20, opacity: 0 }}
        animate={guidelinesInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-md"
      >
        <h3 className="font-bold text-lg mb-2">Appointment Guidelines:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Please arrive 15 minutes before your scheduled appointment</li>
          <li>Bring any previous medical reports or imaging studies</li>
          <li>A confirmation email will be sent within 24 hours of booking</li>
          <li>Rescheduling requires at least 24 hours notice</li>
          <li>Consultation duration is approximately 15-20 minutes</li>
          <li>Please enter a valid email to receive a confirmation email.</li>  
        </ul>
      </motion.div>
      
      <motion.form
        ref={formRef}
        initial={{ y: 20, opacity: 0 }}
        animate={formInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Consultation Type Selection */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-gray-700 font-bold mb-2">
            Choose your Consultation Place*
          </label>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-md flex flex-col items-center justify-center transition-all ${
                consultationType === 'clinic'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setConsultationType('clinic')}
            >
              <span className="text-lg font-medium">Clinic</span>
              <span className="text-xs mt-1">Dr Abhishek Saxena, near Jeevan Jyoti Hospital, Lajpat Nagar, Ramganj, Ajmer, Rajasthan 305001</span>
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-md flex flex-col items-center justify-center transition-all ${
                consultationType === 'hospital'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setConsultationType('hospital')}
            >
              <span className="text-lg font-medium">Hospital</span>
              <span className="text-xs mt-1">Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer</span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Date Selection */}
        {consultationType && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='w-[27%]'
          >
            <label className="block text-gray-700 font-bold mb-2">
              Select Date*
            </label>
            <input
              type="date"
              min={getMinDate()}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </motion.div>
        )}
        
        {/* Time Slot Selection */}
        {selectedDate && availableSlots.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-gray-700 font-bold mb-2">
              Select Time Slot*
            </label>
            {availableSlots[0] === 'Closed' ? (
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md"
              >
                <p className="font-medium">Clinic Closed on this day.</p>
                <p className="text-sm mt-1">Please select another date for your appointment.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {availableSlots.map((slot, index) => (
                  <motion.button
                    key={slot}
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    disabled={bookedSlots.includes(slot)}
                    whileHover={!bookedSlots.includes(slot) ? { scale: 1.05 } : {}}
                    whileTap={!bookedSlots.includes(slot) ? { scale: 0.95 } : {}}
                    className={`py-3 px-2 text-sm rounded-md transition-all ${
                      selectedSlot === slot
                        ? 'bg-blue-600 text-white font-semibold shadow-md'
                        : bookedSlots.includes(slot)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {formatTime(slot)}
                    {bookedSlots.includes(slot) && (
                      <span className="block text-xs font-medium mt-1">Booked</span>
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}
        
        {/* Personal Information */}
        {selectedSlot && selectedSlot !== 'Closed' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md mb-4"
            >
              <p className="font-medium">Your appointment details:</p>
              <p className="mt-1">
                <span className="font-bold">{consultationType === 'clinic' ? 'Clinic' : 'Hospital'}</span> appointment on{' '}
                <span className="font-bold">{new Date(selectedDate).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span> at{' '}
                <span className="font-bold">{formatTime(selectedSlot)}</span>
              </p>
              <p className="text-sm mt-1">{getConsultationLocation()}</p>
            </motion.div>
            
            {/* Full Name Input */}
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700 font-bold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFullName(value);
                  validateName(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </motion.div>
            
            {/* Phone Number Input */}
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneNumber(value);
                  validatePhone(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. 9876543210"
                maxLength="10"
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700 font-bold mb-2">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                placeholder='Please enter a valid email to receive a confirmation email.'
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isLoading || !firestoreReady}
              whileHover={!(isLoading || !firestoreReady) ? { scale: 1.02 } : {}}
              whileTap={!(isLoading || !firestoreReady) ? { scale: 0.98 } : {}}
              className={`w-full py-3 px-4 rounded-md transition-all ${
                isLoading || !firestoreReady
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-bold text-lg shadow-md`}
            >
              {isLoading ? 'Processing...' : 'Confirm Appointment'}
            </motion.button>
            
            <p className="text-center text-sm text-gray-600 mt-2">
              You will receive a confirmation via SMS and email.
            </p>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default BookingSystem;