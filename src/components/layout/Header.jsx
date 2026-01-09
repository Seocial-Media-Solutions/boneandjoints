"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const menuTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  const expertise = {
    'Replacement': {
      path: '/replacement',
      submenus: [
        { name: 'Hip Replacement', path: '/replacement/hip-replacement' },
        { name: 'Knee Replacement', path: '/replacement/knee-replacement' }
      ]
    },
    'Arthroscopy': {
      path: '/arthroscopy',
      submenus: [
        { name: 'Shoulder Arthroscopy', path: '/arthroscopy/shoulder-arthroscopy' },
        { name: 'Knee Arthroscopy', path: '/arthroscopy/knee-arthroscopy' }
      ]
    },
    'Sports Injury': {
      path: '/sports-injury',
      submenus: [
        { name: 'Knee Injury', path: '/sports-injury/knee-injury' },
        { name: 'Back Injury', path: '/sports-injury/back-injury' },
        { name: 'Sprains', path: '/sports-injury/sprains' }
      ]
    }
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  const handleMenuHover = useCallback((menu, isEntering) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    
    if (isEntering) {
      setActiveMenu(menu);
    } else {
      menuTimeoutRef.current = setTimeout(() => {
        setActiveMenu('');
      }, 300);
    }
  }, []);

  const handleSubmenuHover = useCallback((submenu, isEntering) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    
    if (isEntering) {
      setActiveSubmenu(submenu);
    } else {
      submenuTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu('');
      }, 300);
    }
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setActiveMenu('');
    setActiveSubmenu('');
  }, []);

  const handleMobileMenuClick = useCallback((menu) => {
    setActiveMenu(prev => prev === menu ? '' : menu);
    setActiveSubmenu('');
  }, []);

  const handleMobileSubmenuClick = useCallback((submenu) => {
    setActiveSubmenu(prev => prev === submenu ? '' : submenu);
  }, []);

  // New function to handle category click in mobile view
  const handleMobileCategoryClick = useCallback((category, data) => {
    if (window.innerWidth < 1024) { // Check if in mobile view
      if (activeSubmenu === category) {
        // If submenu is already open, navigate to category page
        window.location.href = data.path;
      } else {
        // If submenu is closed, open it
        handleMobileSubmenuClick(category);
      }
    }
  }, [activeSubmenu]);

  const contactButtonClasses = "bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white px-6 py-2 rounded-md hover:shadow-lg transition-all duration-300 shadow-md shadow-blue-500/50 hover:shadow-blue-500/70";

  return (
    <>
    <div className="h-[96px]"></div> 
    
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="w-full bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-6">
            <a href="mailto:abhishek.saxena1120@gmail.com" className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">abhishek.saxena1120@gmail.com</span>
            </a>
            <a href="tel:+918618243967" className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors">
              <Phone size={16} />
              <span className="hidden sm:inline">+91 8618243967</span>
            </a>
            <div className="h-4 w-[1px] bg-white/30"></div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/bonesandjoint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.instagram.com/boneandjoints.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
            <div className="relative">
  <Image 
    src="/images/logoo.png"
    alt="Dentist clinic"
    width={180}
    height={150}
    style={{ width: 'auto', height: 'auto' }}
    className="rounded object-contain"
    priority
  />
</div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => handleMenuHover('expertise', true)}
                onMouseLeave={() => handleMenuHover('expertise', false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  Our Expertise
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {activeMenu === 'expertise' && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                    style={{ marginTop: '0.5rem' }}
                  >
                    {Object.entries(expertise).map(([category, data]) => (
                      <div 
                        key={category}
                        className="relative group"
                        onMouseEnter={() => handleSubmenuHover(category, true)}
                        onMouseLeave={() => handleSubmenuHover(category, false)}
                      >
                        <Link
                          href={data.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                        >
                          {category}
                          <ChevronDown size={16} className="inline ml-2" />
                        </Link>

                        {activeSubmenu === category && (
                          <div 
                            className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg"
                            style={{ marginLeft: '0.5rem' }}
                          >
                            {data.submenus.map((submenu) => (
                              <Link
                                key={submenu.name}
                                href={submenu.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {submenu.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

             
              <Link href="/nutrition-fitness" className="text-gray-700 hover:text-blue-600 transition-colors">
                Nutrition & Fitness
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact us
              </Link>
              
              <Link 
                href="/bookconsultation"
                className={contactButtonClasses}
              >
                Book Consultation
              </Link>
            </div>

            <button 
              onClick={handleMobileMenuToggle}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white"
            >
              <div className="container mx-auto px-4 pb-4">
                {/* Regular menu items remain the same */}
                <Link 
                  href="/"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  About Us
                </Link>

                <div className="border-b">
                  <button
                    onClick={() => handleMobileMenuClick('expertise')}
                    className="w-full py-2 text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors"
                  >
                    Our Expertise
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${
                        activeMenu === 'expertise' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeMenu === 'expertise' && (
                    <div className="pl-4">
                      {Object.entries(expertise).map(([category, data]) => (
                        <div key={category}>
                          <div
                            onClick={() => handleMobileCategoryClick(category, data)}
                            className="w-full py-2 text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors cursor-pointer"
                          >
                            {category}
                            <ChevronDown
                              size={16}
                              className={`transform transition-transform duration-300 ${
                                activeSubmenu === category ? 'rotate-180' : ''
                              }`}
                            />
                          </div>

                          {activeSubmenu === category && (
                            <div className="pl-4">
                              {data.submenus.map((submenu) => (
                                <Link
                                  key={submenu.name}
                                  href={submenu.path}
                                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                                  onClick={handleMobileMenuToggle}
                                >
                                  {submenu.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rest of the mobile menu items remain the same */}
               
                <Link 
                  href="/nutrition-fitness"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Nutrition & Fitness
                </Link>
                <Link 
                  href="/blog"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Contact Us
                </Link>
                <Link 
                  href="/bookconsultation"
                  className={`inline-block mt-4 ${contactButtonClasses}`}
                  onClick={handleMobileMenuToggle}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
    </>
  );
};

export default Header;