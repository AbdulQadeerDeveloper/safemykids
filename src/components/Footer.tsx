"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Search,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-gray-800 pt-20 pb-10 shadow-inner">
      {/* Optional Floating Orbs (light) */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-purple-300 to-blue-300 opacity-10 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-blue-300 to-purple-300 opacity-10 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-4">
            Snap
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Check
            </span>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Empowering schools and organizations with intelligent attendance and
            activity monitoring powered by AI.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {[
              { Icon: Facebook },
              { Icon: Twitter },
              { Icon: Linkedin },
              { Icon: Instagram },
            ].map(({ Icon }, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 3 }}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 flex items-center justify-center text-gray-800 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "Features", "Monitoring", "About", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            {["Blog", "Help Center", "Documentation", "API Access"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="space-y-4 text-sm mb-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-500" />
              <span>support@snapcheck.io</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+1 (800) 234-5678</span>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-2 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 flex items-center justify-center text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          SnapCheck
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
