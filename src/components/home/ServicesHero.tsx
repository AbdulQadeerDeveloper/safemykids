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
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ✨ HERO SECTION */}
      <section className="relative overflow-hidden py-24 text-center text-white bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-500">
        {/* Background glow effects */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.3),_transparent_60%)]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-blue-200">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Empowering schools and parents with cutting-edge monitoring, smart
            attendance, and safety tools — all in one place.
          </p>
        </motion.div>
      </section>

      {/* 🌟 SECTION TEMPLATE */}
      {[
        {
          title: "Smart Attendance Tracking",
          desc: "SnapCheck automates attendance with RFID, facial recognition, or mobile check-ins. Save time, reduce manual work, and access live reports instantly.",
          points: [
            "Instant attendance updates",
            "Automated daily reports",
            "Parent notifications in real-time",
          ],
          icon: <FaSchool className="text-8xl text-purple-600" />,
          reverse: false,
          bg: "white",
        },
        {
          title: "Student Safety & Security",
          desc: "Ensure complete student safety through secure check-ins, geo-tracking, and instant alerts during emergencies or unusual activity.",
          points: [
            "Secure entry systems",
            "Bus and route tracking",
            "Instant alert notifications",
          ],
          icon: <FaUserShield className="text-8xl text-blue-500" />,
          reverse: true,
          bg: "bg-gray-50",
        },
        {
          title: "Real-Time Notifications",
          desc: "Stay informed every moment. SnapCheck sends live updates about arrivals, absences, and delays directly to parents and school admins.",
          points: [
            "Push notifications for parents",
            "Custom event alerts",
            "Smart mobile notifications",
          ],
          icon: <FaBell className="text-8xl text-purple-500" />,
          reverse: false,
          bg: "white",
        },
        {
          title: "Analytics & Reports",
          desc: "Visualize attendance trends, analyze student performance, and make data-driven decisions using our smart analytics dashboard.",
          points: [
            "Downloadable performance reports",
            "Visual insights and heatmaps",
            "Admin efficiency tracking",
          ],
          icon: <FaChartLine className="text-8xl text-blue-600" />,
          reverse: true,
          bg: "bg-gray-50",
        },
      ].map((item, i) => (
        <section
          key={i}
          className={`${item.bg} py-20 px-6 transition-all duration-300`}
        >
          <div
            className={`lg:w-[80%] xl:w-[74%] 2xl:max-w-[90rem] mx-auto grid md:grid-cols-2 gap-10 items-center ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <ul className="text-gray-700 space-y-2">
                {item.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 before:content-['✓'] before:text-purple-600 before:font-bold"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse" />
                <div className="relative z-10">{item.icon}</div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* 💬 SUPPORT SECTION */}
      <section className="relative py-24 px-6 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.25),_transparent_70%)] opacity-40" />
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <FaClock className="text-6xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">24/7 Dedicated Support</h2>
          <p className="text-lg text-white/90 mb-8">
            Our expert team is always available to assist schools, teachers, and
            parents for a smooth experience and quick issue resolution.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </section>
    </div>
  );
}
