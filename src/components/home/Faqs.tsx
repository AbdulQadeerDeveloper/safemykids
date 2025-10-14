"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../PageWrapper";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

// SnapCheck-themed FAQs
export const SnapCheckFaqsData: AccordProps[] = [
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
      "All student information is securely stored using encrypted cloud storage, following industry-standard security protocols to ensure privacy and compliance.",
  },
  {
    id: 4,
    question: "Can I access SnapCheck on mobile devices?",
    answer:
      "Absolutely! SnapCheck is fully responsive and works on mobile phones, tablets, and desktops for both teachers and parents.",
  },
  {
    id: 5,
    question: "Is there a free trial available?",
    answer:
      "Yes, schools can sign up for a limited free trial to explore SnapCheck’s features before committing to a subscription plan.",
  },
  {
    id: 6,
    question: "How can I contact support?",
    answer:
      "You can reach SnapCheck support anytime email at support@snapcheck.com or through the in-app chat.",
  },
];
interface AccordionProps {
  faqs?: AccordProps[];
}

const Accordion = ({ faqs = [] }: AccordionProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          layout
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          {/* Question */}
          <button
            onClick={() => toggleAccordion(faq.id)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
          >
            <span className="text-lg md:text-base">{faq.question}</span>
            <span className="ml-4 text-xl font-bold text-purple-600">
              {activeId === faq.id ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {activeId === faq.id && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 text-gray-700 text-base bg-gray-50"
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

// SnapCheck FAQ Page
const FaqsPage = () => {
  return (
    <PageWrapper background="bg-gradient-to-r from-purple-600 to-blue-500">
      <div
        id="faqs"
        className="w-full px-6 lg:px-16 flex flex-col md:flex-row items-start justify-center gap-10 py-24"
      >
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 xl:w-[45%] space-y-6">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-white">
            Have questions? We have answers!
          </h2>
          <p className="text-base lg:text-lg text-white/90">
            Want to know more? You can email us anytime at{" "}
            <span className="text-yellow-400 font-semibold">
              support@snapcheck.io
            </span>
          </p>

          <button className="relative overflow-hidden px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-700 to-blue-500 hover:from-blue-500 hover:to-purple-700 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-base transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
        </div>

        {/* Right Accordion Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <Accordion faqs={SnapCheckFaqsData} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FaqsPage;
