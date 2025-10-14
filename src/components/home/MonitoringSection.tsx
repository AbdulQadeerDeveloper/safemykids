"use client";

import { motion } from "framer-motion";
import { Eye, Bell, Activity, ShieldCheck, Smartphone } from "lucide-react";

export default function MonitoringSection() {
  const features = [
    {
      id: 1,
      icon: <Eye className="w-8 h-8" />,
      title: "Live Monitoring Dashboard",
      desc: "View real-time attendance and student presence directly from your admin panel with instant updates.",
    },
    {
      id: 2,
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts & Notifications",
      desc: "Get automatic alerts when a student is absent or marked late — instantly synced with parent devices.",
    },
    {
      id: 3,
      icon: <Activity className="w-8 h-8" />,
      title: "Performance Analytics",
      desc: "Analyze daily, weekly, and monthly attendance trends with built-in AI-powered insights.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure Cloud Records",
      desc: "All attendance and location data is encrypted and safely stored in cloud-based servers.",
    },
    {
      id: 5,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multi-Device Access",
      desc: "Teachers and parents can access reports on any device — mobile, tablet, or desktop.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Gradient background accents */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-r from-purple-600 to-blue-500 blur-[120px] opacity-20 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-l from-purple-600 to-blue-500 blur-[120px] opacity-20 rounded-full -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Real-Time{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Monitoring
            </span>{" "}
            for Smarter Management
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            SnapCheck lets you monitor student attendance, live status, and
            performance analytics from one secure dashboard. Track daily
            activities, detect irregularities, and receive instant notifications
            — all in real time.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore Dashboard
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE — FEATURE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white group-hover:bg-white group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
