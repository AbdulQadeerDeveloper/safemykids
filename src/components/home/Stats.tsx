"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Background image */}
        <div className="relative h-[420px] w-full overflow-hidden">
          <Image
            src="/home/imgi_61_about-banner.png" // replace with your SnapCheck image
            alt="SnapCheck Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/80 to-blue-600/70"></div>

          {/* Hero text */}
          <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              About SnapCheck
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl text-white/90"
            >
              Smart attendance and safety solutions built for schools, trusted
              by parents and educators worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/*  Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {[
            { number: "2021", label: "Founding Year" },
            { number: "50+", label: "Schools Connected" },
            { number: "10K+", label: "Students Monitored" },
            { number: "1M+", label: "Attendance Logs Processed" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2 text-lg font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  Description Section */}
      <section className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto py-20 px-6 text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          SnapCheck was founded with a simple mission — to make schools safer
          and more connected. By combining real-time attendance tracking,
          instant alerts, and data-driven insights, we empower schools to focus
          on what truly matters: student success and safety. Our platform helps
          parents stay informed, teachers save time, and administrators manage
          attendance seamlessly.
        </motion.p>
      </section>
    </div>
  );
  
}
