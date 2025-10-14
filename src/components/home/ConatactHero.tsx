"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully ✅ (Connect backend API here)");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 🌈 Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get in Touch with <span className="text-blue-200">SnapCheck</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Have questions or feedback? We’d love to hear from you. Let’s build
            safer, smarter schools together.
          </p>
        </motion.div>
      </section>

      {/* 💬 Contact Form + Info */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our support team is always here to help you with SnapCheck setup,
            technical support, or partnership inquiries. Reach out anytime — we
            usually respond within 24 hours.
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl text-white shadow-md">
                <FiMail className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h4>
                <p className="text-gray-600">support@snapcheck.app</p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl text-white shadow-md">
                <FiPhone className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+92 333 1234567</p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl text-white shadow-md">
                <FiMapPin className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Visit Us
                </h4>
                <p className="text-gray-600">SnapCheck HQ, Lahore, Pakistan</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send us a Message
          </h3>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* 🌍 Map Section */}
      <section className="relative h-[400px] w-full">
        <iframe
          title="SnapCheck HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.44892436478!2d74.2992954!3d31.5820455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904cce4b888f1%3A0xf8c7e34a5a967a7!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708600000000"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10"></div>
      </section>
    </div>
  );
}
