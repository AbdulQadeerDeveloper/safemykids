"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Vision() {
  return (
    <div>
      <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              At SnapCheck, we aim to revolutionize school safety and attendance
              tracking. Our mission is to provide parents and educators with the
              tools to ensure every student’s presence and well-being is just a
              tap away.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-blue-600">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We envision a future where every school operates seamlessly with
              real-time transparency, connecting parents, teachers, and students
              through technology that truly cares.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/home/imgi_18_banner-img.png"
              alt="Mission illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Values / Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-white/90">
            We believe in innovation, transparency, and a passion for safety —
            the foundation of everything we build at SnapCheck.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Innovation",
              desc: "We use the latest technology to create smarter, safer, and faster systems for schools.",
            },
            {
              title: "Trust",
              desc: "We build confidence through transparent data and real-time communication.",
            },
            {
              title: "Community",
              desc: "We connect parents, students, and schools into one collaborative network.",
            },
            {
              title: "Excellence",
              desc: "We ensure every feature we deliver is designed to make education better.",
            },
            {
              title: "Responsibility",
              desc: "We take data privacy and student safety as our top priorities.",
            },
            {
              title: "Growth",
              desc: "We continuously evolve to meet the needs of modern education.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-white/80">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Vision;
