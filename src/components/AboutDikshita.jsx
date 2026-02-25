"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────
   GOOGLE FONTS — add to your _document.js or layout:
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
───────────────────────────────────────── */

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SKILLS = [
  "Physiotherapy ",
  "Comprehensive patient assessment (musculoskeletal, neurological, and sports-related conditions)",
  "Evidence-based treatment planning and functional rehabilitation",
  "Sports injury assessment and rehabilitation (sprain, strain, ligament injuries, overuse injuries)",
  "Return-to-sport rehabilitation and performance conditioning",
  "Manual therapy techniques (soft tissue release, joint mobilization, MFR)",
  "Therapeutic exercise prescription and progression",
  "Posture correction and movement re-education",
  "Pain management and functional restoration strategies",
  "Neuro-rehabilitation including spasticity management (e.g., CP cases)",
  "Gait training, balance, and coordination training",
  "Injury prevention programs and athletic strengthening protocols",
  "Patient education and home exercise program design",
  "Clinical documentation and outcome-based monitoring",
  "Tele-rehabilitation and online consultation support",
  "Experience developing physiotherapy services at Jeevan Jyoti Hospital",
  "Strong communication and patient-centered care approach",
  "Continuous learning and integration of modern rehabilitation techniques",
];

const EDUCATION = [
  {
    degree: "B.P.T",
    full: "Bachelor of Physiotherapy",
    institution: "Geetanjali Medical College, Udaipur",
    year: "2016 – 2021",
    icon: "🎓",
    color: "from-blue-600 to-indigo-700",
  },
  {
    degree: "C.C.CH",
    full: "Certified Clinical Chiropractor Helper",
    institution: "Poddar College, Jaipur",
    year: "2023",
    icon: "📜",
    color: "from-cyan-500 to-teal-600",
  },
  {
    degree: "M.I.A.P",
    full: "Member – Indian Association of Physiotherapists",
    institution: "Professional Membership",
    year: "Active",
    icon: "🏅",
    color: "from-violet-600 to-purple-700",
  },
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "1000+", label: "Patients Treated" },
  { value: "17+", label: "Specializations" },
  { value: "100%", label: "Patient-Centered" },
];

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay } },
});

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const AboutDeekshita = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.05 });
  const eduInView = useInView(eduRef, { once: true, amount: 0.1 });

  return (
    <main
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-[#f8f9fc] overflow-hidden"
    >
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#04112e] min-h-screen flex items-center"
      >
        {/* Ambient background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Deep radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(7,160,230,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(30,15,180,0.22) 0%, transparent 65%)",
            }}
          />
          {/* Fine dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          {/* Diagonal light stripe */}
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-[90vw] h-[90vw] rounded-full"
            style={{
              background:
                "conic-gradient(from 200deg at 70% 40%, transparent 0deg, rgba(7,204,236,0.07) 60deg, transparent 120deg)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-28">

            {/* ── Image column ── */}
            <motion.div
              variants={fadeLeft(0.1)}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
            >
              {/* Card frame */}
              <div className="relative">
                {/* Offset decorative border */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-sm" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 opacity-30 blur-2xl" />

                {/* Image wrapper */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                  <Image
                    src="/images/dikshita.jpeg"
                    alt="Dr. Deekshita Yadav"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 500px"
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04112e]/70 to-transparent" />
                  {/* Floating credential chip */}
                  <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap">
                    {["B.P.T", "M.I.A.P", "C.C.CH"].map((c) => (
                      <span
                        key={c}
                        className="text-xs font-semibold text-white bg-white/15 backdrop-blur border border-white/25 px-3 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Text column ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="flex-1 text-white text-center lg:text-left"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeUp(0)} className="mb-5 flex items-center justify-center lg:justify-start gap-3">
                <span className="h-px w-10 bg-cyan-400/70" />
                <span
                  className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-cyan-400"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Consultant Physiotherapist
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp(0.05)}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-4 tracking-tight"
              >
                Dr. Deekshita
                <br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  Yadav
                </span>
              </motion.h1>

              {/* Divider */}
              <motion.div variants={fadeUp(0.1)} className="flex items-center justify-center lg:justify-start gap-3 my-6">
                <div className="h-px flex-1 max-w-16 bg-white/15" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <div className="h-px flex-1 max-w-16 bg-white/15" />
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={fadeUp(0.15)}
                className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                A dedicated physiotherapist committed to restoring mobility, reducing
                pain, and improving quality of life. Specialising in spine conditions,
                sports injuries, post-surgical rehabilitation, and pediatric
                physiotherapy — with a patient-centered, evidence-based approach for
                every recovery journey.
              </motion.p>

              {/* CTA row */}
              <motion.div
                variants={fadeUp(0.2)}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-xl shadow-cyan-500/25 transition-all duration-300"
                >
                  Book an Appointment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300"
                >
                  View Expertise
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#f8f9fc" />
        </svg>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section ref={statsRef} className="py-14 px-5 sm:px-8 bg-[#f8f9fc]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.08)}
              className="text-center group"
            >
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-cyan-500 mb-1"
              >
                {s.value}
              </div>
              <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS SECTION
      ══════════════════════════════════════ */}
      <section id="skills" ref={skillsRef} className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="mb-14 max-w-2xl"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-semibold text-cyan-500 mb-3">
              What She Does
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              Professional Skills{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                &amp; Expertise
              </span>
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-blue-700 to-cyan-400 rounded-full" />
          </motion.div>

          {/* Skills grid */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
          >
            {SKILLS.map((skill, i) => (
              <motion.li
                key={i}
                variants={listItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group flex items-start gap-4 bg-[#f8f9fc] hover:bg-white rounded-2xl p-4 sm:p-5 border border-transparent hover:border-blue-100 hover:shadow-md transition-all duration-300"
              >
                <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-600 group-hover:text-gray-800 text-sm sm:text-[15px] leading-relaxed transition-colors duration-200">
                  {skill}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EDUCATION SECTION
      ══════════════════════════════════════ */}
      <section ref={eduRef} className="py-20 sm:py-28 px-5 sm:px-8 bg-[#f8f9fc] relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={eduInView ? "visible" : "hidden"}
            className="mb-14 max-w-2xl"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-semibold text-cyan-500 mb-3">
              Academic Background
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              Education &amp;{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                Certifications
              </span>
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-blue-700 to-cyan-400 rounded-full" />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.12)}
                initial="hidden"
                animate={eduInView ? "visible" : "hidden"}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${edu.color}`} />

                <div className="p-6 sm:p-8">
                  {/* Icon + year */}
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl shadow-lg shadow-blue-200/50`}
                    >
                      {edu.icon}
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full mt-1">
                      {edu.year}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight"
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
                    {edu.full}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA RIBBON
      ══════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-[#04112e] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(7,160,230,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-xs tracking-[0.2em] uppercase font-semibold text-cyan-400 mb-5"
          >
            Start Your Recovery
          </motion.span>

          <motion.h2
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Ready for a{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Pain-Free Life?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/65 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Book a consultation with Dr. Deekshita Yadav and take the first step
            toward lasting wellness and restored movement.
          </motion.p>

          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold text-sm sm:text-base px-10 py-4 rounded-full shadow-xl shadow-cyan-500/30 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="tel:+91XXXXXXXXXX"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium text-sm sm:text-base px-10 py-4 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutDeekshita;