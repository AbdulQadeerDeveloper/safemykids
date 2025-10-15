"use client";

import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function MonitoringTrends() {
  // 💬 Live Chat Data
  const chatMessages = [
    {
      id: 1,
      user: "Teacher",
      message: "John is absent today.",
      time: "09:05 AM",
    },
    {
      id: 2,
      user: "Parent",
      message: "Thanks for the update!",
      time: "09:07 AM",
    },
    {
      id: 3,
      user: "Teacher",
      message: "Emma arrived late by 15 mins.",
      time: "09:10 AM",
    },
    { id: 4, user: "Parent", message: "Noted, thank you.", time: "09:12 AM" },
  ];

  // 📊 Attendance Data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance %",
        data: [95, 92, 98, 90, 96],
        borderColor: "#7F3DFF",
        backgroundColor: "rgba(127, 61, 255, 0.25)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#7F3DFF",
        fill: true,
      },
    ],
  };

  // ⚙️ Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100, grid: { color: "#f0f0f0" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-500 blur-[120px] opacity-25 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-600 to-blue-500 blur-[120px] opacity-25 rounded-full -z-10" />

      {/* Main Container */}
      <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Smart{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
              Student Insights
            </span>{" "}
            for Effortless Control
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Stay ahead with SnapCheck — a comprehensive platform for tracking
            student attendance, classroom participation, and performance trends
            in real time. Get actionable insights, automated alerts, and
            detailed reports to manage schools efficiently and keep parents
            informed instantly.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore Dashboard
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE — Chat + Graph */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Live Chat Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-4 max-h-[320px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Live Chat
            </h3>
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.user === "Parent" ? "items-end" : "items-start"
                }`}
              >
                <span
                  className={`px-4 py-2 rounded-xl max-w-[85%] md:max-w-[70%] break-words ${
                    msg.user === "Parent"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {msg.message}
                </span>
                <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Chart Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-[320px] sm:h-[360px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Attendance Trend
            </h3>
            <div className="w-full h-[240px] sm:h-[280px]">
              <Line data={data} options={options} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
