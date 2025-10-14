import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#011C1A] text-white">
      {/* Main Footer Content */}
      <div className="py-12 max-w-[76%] mx-auto">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-[31%,23%,23%,23%] 
            gap-8 lg:gap-4
          "
        >
          {/* Brand Section (NO border here) */}
          <div>
            <Image
              src="/images/Frame 44.png"
              alt="Newsletter Decoration"
              width={238}
              height={51}
              className="mb-10"
            />

            <p className="text-gray-400 text-sm mb-6">
              Wakeel App is your trusted gateway to professional legal services.
              Discover verified lawyers, book appointments, and manage your
              legal needs with confidence through our user-friendly digital
              platform.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A3331] text-white transition-all duration-500 transform hover:scale-110 hover:bg-gradient-to-r hover:from-[#E7B10C] hover:to-[#CA9C0F] shadow-md"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Pages Links */}
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <h3 className="text-lg font-semibold mb-4 pb-2">Pages</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Services",
                "Features",
                "Online Dealings",
                "Pricing Plan",
                "Contact us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="no-underline text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <h3 className="text-lg font-semibold mb-4 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Criminal Law",
                "Corporate Law",
                "Family Law",
                "Real Estate Law",
                "Personal Injury Law",
                "Health Care Policy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="no-underline text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <h3 className="text-lg font-semibold mb-4 pb-2">Contact Us</h3>

            {/* Contact Item */}
            <div className="mb-6 flex items-start">
              <div
                className="w-10 h-10 relative left-[-10px] top-1 flex items-center justify-center rounded-full 
                bg-[#1A3331] text-white transition-all duration-500 transform hover:scale-110 hover:bg-gradient-to-r hover:from-[#E7B10C] hover:to-[#CA9C0F] shadow-md"
              >
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="font-medium mb-1">New York, NY</h4>
                <p className="text-gray-400 text-sm">Main Office</p>
              </div>
            </div>

            {/* Contact Item */}
            <div className="mb-6 flex items-start">
              <div
                className="w-10 h-10 relative left-[-10px] top-1 flex items-center justify-center rounded-full 
                bg-[#1A3331] text-white transition-all duration-500 transform hover:scale-110 hover:bg-gradient-to-r hover:from-[#E7B10C] hover:to-[#CA9C0F] shadow-md"
              >
                <FaPhone size={18} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">24/7 Support</p>
              </div>
            </div>

            {/* Contact Item */}
            <div className="flex items-start">
              <div
                className="w-10 h-10 relative left-[-10px] top-1 flex items-center justify-center rounded-full 
                bg-[#1A3331] text-white transition-all duration-500 transform hover:scale-110 hover:bg-gradient-to-r hover:from-[#E7B10C] hover:to-[#CA9C0F] shadow-md"
              >
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-gray-400 text-sm">info@wakeelepp.com</p>
                <p className="text-gray-400 text-sm">General Inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Bottom Bar */}
      <div className="w-full bg-gradient-to-b from-[#16633A] to-[#034B24]">
        <div className="max-w-[80%] mx-auto px-7  py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm text-center md:text-left mb-2 md:mb-0">
            Copyright © 2025 Wakeel All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
