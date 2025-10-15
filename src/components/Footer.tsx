"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-gray-100 pt-24 pb-10">
      {/* Soft glowing orbs */}
      <div className="absolute top-[-60px] left-[-100px] w-[22rem] h-[22rem] bg-purple-600/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[-80px] right-[-50px] w-[26rem] h-[26rem] bg-blue-500/30 blur-[140px] rounded-full -z-10"></div>

      {/* Content */}
      <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo / About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold mb-4">
            Snap
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Check
            </span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Empowering schools and organizations with intelligent monitoring
            powered by next-generation AI.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-5 relative">
            Quick Links
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "Features", "Monitoring", "About", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-5 relative">
            Resources
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {["Blog", "Help Center", "Documentation", "API Access"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-5 relative">
            Get in Touch
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
          </h4>
          <div className="space-y-4 text-sm mb-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>support@snapcheck.io</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 (800) 234-5678</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
          SnapCheck
        </span>{" "}
        — All rights reserved.
      </motion.div>
    </footer>
  );
}
