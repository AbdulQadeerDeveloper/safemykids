"use client";

import { motion } from "framer-motion";

export default function JourneySection() {
  const timeline = [
    {
      year: "2021",
      title: "Founded with a Vision",
      description:
        "SnapCheck was established to simplify school safety and attendance systems through smart, secure, and connected technology.",
    },
    {
      year: "2022",
      title: "First 50 Schools Onboarded",
      description:
        "Within our first year, over 50 schools trusted SnapCheck for real-time attendance monitoring and parent notifications.",
    },
    {
      year: "2023",
      title: "Expanded Nationwide",
      description:
        "SnapCheck rapidly grew, reaching schools across Pakistan and introducing analytics dashboards for administrators.",
    },
    {
      year: "2024",
      title: "AI Integration Launched",
      description:
        "We introduced AI-based insights for attendance trends and student safety alerts, making schools smarter and more proactive.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 text-gray-800">
      <div className="lg:w-[80%] xl:w-[74%] 2xl:max-w-[90rem] mx-auto grid md:grid-cols-2 gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Our Journey
          </h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Growing with Purpose
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Founded with the mission to create safer and more connected
            educational environments, SnapCheck has evolved into a trusted
            platform for schools and parents. From our humble beginnings to
            nation-wide adoption, our journey is driven by innovation and a
            passion for student safety.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Today, SnapCheck integrates AI, analytics, and instant communication
            tools that empower educators, streamline attendance, and give
            parents peace of mind. And we’re only getting started.
          </p>
        </motion.div>

        {/* Right timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative pl-10 border-l-2 border-dashed border-gray-300"
        >
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 relative">
              {/* Dot indicator */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></span>

              {/* Year */}
              <span className="text-sm font-semibold text-gray-500 absolute -left-20 top-1">
                {item.year}
              </span>

              {/* Box */}
              <div className="ml-4 bg-blue-50 border border-blue-100 rounded-xl p-5 hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-blue-700 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
