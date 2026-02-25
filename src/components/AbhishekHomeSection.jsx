"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const AbhishekHomeSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
    });

    return (
        <section
            ref={sectionRef}
            className="relative py-20 overflow-hidden bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                        }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-100 rounded-full blur-3xl opacity-60" />

                            {/* Image Frame */}
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white bg-[#C3E1F2]">
                                <Image
                                    src="/images/abhishek.png"
                                    alt="Dr. Abhishek Saxena"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />


                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Expertise</p>
                                            <p className="text-sm font-bold text-gray-900">Orthopedic & Joint Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -left-8 bg-blue-600 text-white p-6 rounded-3xl shadow-xl hidden md:block"
                            >
                                <p className="text-3xl font-bold">10+</p>
                                <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Years of<br />Experience</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp(0.1)}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                                Senior Consultant Orthopedic Surgeon
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Dr. Abhishek <span className="text-blue-600">Saxena</span>
                            </h2>
                            <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
                        </motion.div>

                        <motion.p
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp(0.2)}
                            className="text-lg text-gray-600 leading-relaxed text-justify"
                        >
                            Welcome to the practice of Dr. Abhishek Saxena, a distinguished orthopedic surgeon dedicated to providing exceptional care. With over a decade of experience and more than 500 successful surgeries, Dr. Saxena specializes in shoulder, knee, and sports injuries, transforming lives through surgical precision and compassionate care.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp(0.3)}
                            className="grid grid-cols-2 gap-6"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-blue-600 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    <span>Joint Replacement</span>
                                </div>
                                <p className="text-sm text-gray-500">Knee & hip replacements</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-blue-600 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    <span>Arthroscopy</span>
                                </div>
                                <p className="text-sm text-gray-500">Minimally invasive surgery</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-blue-600 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    <span>Sports Medicine</span>
                                </div>
                                <p className="text-sm text-gray-500">Injury recovery & prevention</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-blue-600 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    <span>Fracture Care</span>
                                </div>
                                <p className="text-sm text-gray-500">Advanced trauma management</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp(0.4)}
                            className="pt-6"
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Learn More About Dr. Saxena
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AbhishekHomeSection;
