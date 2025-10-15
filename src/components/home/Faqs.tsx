"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ======================
// 💡 Data Interface
// ======================
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// ======================
// 💬 FAQs Data
// ======================
const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is SnapCheck?",
    answer:
      "SnapCheck is a real-time student attendance and monitoring platform that helps schools, teachers, and parents track attendance, activities, and performance instantly.",
  },
  {
    id: 2,
    question: "Can parents receive notifications about attendance?",
    answer:
      "Yes! SnapCheck sends instant notifications to parents when a student is absent, late, or when important updates are posted.",
  },
  {
    id: 3,
    question: "How secure is the student data?",
    answer:
      "All student information is securely stored using encrypted cloud storage and industry-standard security protocols to ensure privacy and compliance.",
  },
  {
    id: 4,
    question: "Can I access SnapCheck on mobile devices?",
    answer:
      "Absolutely! SnapCheck is fully responsive and works seamlessly on mobile phones, tablets, and desktops for both teachers and parents.",
  },
  {
    id: 5,
    question: "Is there a free trial available?",
    answer:
      "Yes, schools can sign up for a limited free trial to explore SnapCheck’s features before subscribing.",
  },
  {
    id: 6,
    question: "How can I contact support?",
    answer:
      "You can reach SnapCheck support anytime via email at support@snapcheck.com or through the in-app chat.",
  },
];

// ======================
// ⚡ Accordion Component
// ======================
const Accordion = ({ items }: { items: FaqItem[] }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((faq) => (
        <motion.div
          key={faq.id}
          layout
          className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Question */}
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
          >
            <span className="text-lg font-semibold text-white">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: activeId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold text-yellow-400"
            >
              +
            </motion.span>
          </button>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {activeId === faq.id && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-6 pb-4 text-white/90 text-base leading-relaxed"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// ======================
// 🌈 Main FAQ Section
// ======================
const FaqsPage = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>

      <div className="relative z-10 lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Have questions? <br />
            <span className="text-yellow-400">We have answers!</span>
          </motion.h2>

          <p className="text-white/80 text-lg max-w-lg">
            Want to know more? You can email us anytime at{" "}
            <span className="text-yellow-400 font-semibold">
              support@snapcheck.io
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Right Accordion */}
        <div className="flex-1 max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
