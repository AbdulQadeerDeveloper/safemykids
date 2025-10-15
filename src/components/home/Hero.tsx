"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FaBolt } from "react-icons/fa";

export default function Hero() {
  const features = [
    "Simplify Attendance",
    "Enhance Efficiency",
    "Empower Education",
  ];

  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[100vh] flex items-center overflow-hidden pt-[40px] md:pt-0"
      style={{ backgroundImage: "url('/home/imgi_52_banner-bg.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-indigo-800/70"></div>

      {/* Content Wrapper */}
      <div className="relative lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side (Text Section) */}
        <motion.div
          className="max-w-xl space-y-6 z-10 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title with React Icon */}
          <div className="flex justify-center md:justify-start items-center gap-3">
            <h1 className="text-3xl md:text-4xl md:py-6 font-extrabold leading-tight drop-shadow-lg">
              SnapCheck – Smart Digital Attendance Solution
            </h1>
          </div>

          {/* Bolt Features */}
          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex justify-center md:justify-start items-center gap-3 text-lg font-semibold text-purple-200"
              >
                <FaBolt className="text-yellow-400 animate-pulse" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-white/90 leading-relaxed">
            SnapCheck revolutionizes attendance tracking with AI-driven face
            recognition and instant cloud-based logs. From schools to offices,
            manage your teams and students seamlessly — with real-time insights
            and automation that saves hours daily.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-400/50 transition-all duration-300"
            >
              Get Started
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-md hover:shadow-purple-300/50"
            >
              See Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side (Image Section) */}
        <motion.div
          className="relative md:w-1/2 flex justify-center md:justify-end z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-[90%] sm:w-[80%] md:w-full max-w-[600px] h-auto">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/home/imgi_18_banner-img.png"
                alt="SnapCheck Banner"
                width={600}
                height={600}
                className="object-contain w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-24 left-10 -z-10"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/30 blur-3xl rounded-full bottom-10 right-20 -z-10"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
