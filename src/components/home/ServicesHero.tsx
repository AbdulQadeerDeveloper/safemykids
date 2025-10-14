"use client";

import { motion } from "framer-motion";
import {
  FaSchool,
  FaUserShield,
  FaClock,
  FaChartLine,
  FaBell,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/*  HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-blue-200">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Empowering schools and parents with real-time monitoring, smart
            attendance, and safety tools.
          </p>
        </motion.div>
      </section>

      {/* 🏫 SECTION 1 – Smart Attendance */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Smart Attendance Tracking
          </h2>
          <p className="text-gray-600 mb-6">
            SnapCheck automatically records attendance using advanced RFID,
            facial recognition, or mobile check-ins. Save time, reduce errors,
            and get instant reports on student presence.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Instant attendance updates</li>
            <li>Automated daily reports</li>
            <li>Parent notifications in real time</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <FaSchool className="text-8xl text-purple-600" />
        </motion.div>
      </section>

      {/* 🛡️ SECTION 2 – Student Safety */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 flex justify-center"
          >
            <FaUserShield className="text-8xl text-blue-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Student Safety & Security
            </h2>
            <p className="text-gray-600 mb-6">
              Ensure complete student safety with secure entry systems, route
              tracking, and instant alerts for unusual activities.
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Secure school check-ins</li>
              <li>Geo-tracking and bus monitoring</li>
              <li>Emergency alert notifications</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ⏱️ SECTION 3 – Real-Time Notifications */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Real-Time Notifications
          </h2>
          <p className="text-gray-600 mb-6">
            Stay connected with your child’s day. SnapCheck instantly notifies
            parents when students arrive, leave, or miss a class.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Instant attendance alerts</li>
            <li>Push notifications for parents</li>
            <li>Custom alerts for events and delays</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <FaBell className="text-8xl text-purple-500" />
        </motion.div>
      </section>

      {/* 📊 SECTION 4 – Analytics Dashboard */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 flex justify-center"
          >
            <FaChartLine className="text-8xl text-blue-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Analytics & Reports
            </h2>
            <p className="text-gray-600 mb-6">
              Our dashboard helps teachers and school admins track trends,
              monitor attendance, and analyze performance efficiently.
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Visual insights and trends</li>
              <li>Downloadable reports</li>
              <li>Admin performance tracking</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 🌟 SECTION 5 – 24/7 Support */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <FaClock className="text-6xl mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">24/7 Dedicated Support</h2>
          <p className="text-lg text-white/90 mb-8">
            Our support team is always ready to help schools, teachers, and
            parents with smooth onboarding and quick problem-solving.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </section>
    </div>
  );
}
