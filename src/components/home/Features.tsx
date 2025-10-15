"use client";

import { motion } from "framer-motion";
import { Activity, Users, Bell, Shield } from "lucide-react";
import Link from "next/link";

export default function MonitoringBioSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24">
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-blue-600 to-purple-500 opacity-20 blur-[120px] rounded-full -z-10"></div>

      <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              Monitoring Dashboard
            </span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Track attendance, device activity, and user patterns in real time.
            SnapCheck’s monitoring dashboard gives you deep visibility and
            actionable analytics — so you can respond instantly when something
            changes.
          </p>
          <Link href="/auth/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Live Analytics
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT SIDE — DASHBOARD VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Dashboard frame */}
          <div className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-semibold text-lg">
                System Overview
              </h3>
              <Shield className="text-blue-400 w-6 h-6" />
            </div>

            {/* Charts simulation */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="h-24 rounded-xl bg-gradient-to-t from-purple-700 to-purple-400 opacity-80"></div>
              <div className="h-32 rounded-xl bg-gradient-to-t from-blue-700 to-blue-400 opacity-80"></div>
              <div className="h-20 rounded-xl bg-gradient-to-t from-purple-600 to-blue-400 opacity-80"></div>
            </div>

            {/* Live stats row */}
            <div className="flex justify-between items-center text-gray-300 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Active Students: 1,284</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
                <span>System Uptime: 99.9%</span>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Bell className="w-5 h-5 text-yellow-400 animate-bounce" />
                <p>3 students marked absent today (Auto-alerts sent)</p>
              </div>
            </div>
          </div>

          {/* Floating glowing elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -left-8 bg-gradient-to-br from-purple-500 to-blue-500 w-20 h-20 blur-2xl opacity-30 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-0 -right-6 bg-gradient-to-tr from-blue-400 to-purple-500 w-16 h-16 blur-xl opacity-40 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
