import Image from "next/image";
// Correct imports
import femaleImage from "../images/contact_1_man.png";
import femaleBackgroundImage from "../images/bannerAbout.jpg";
import leftBanner from "../images/leftBanner.png";
import rightBanner from "../images/rightBanner.png";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white relative py-16 lg:py-20 overflow-hidden">
      {/* Left Banner */}
      <div className="absolute bottom-10 left-0 w-[200px] opacity-100 z-0 hidden lg:block">
        <Image
          src={leftBanner}
          alt="Left Banner"
          width={150}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Right Banner */}
      <div className="absolute bottom-10 right-0  w-[200px] opacity-100 z-0 hidden lg:block">
        <Image
          src={rightBanner}
          alt="Right Banner"
          width={150}
          height={250}
          className="object-contain"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto shadow-lg rounded-2xl bg-[#F5F5F5] p-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left side - Contact form */}
          <div className="relative w-full lg:w-[650px] h-[624px] rounded-2xl bg-gradient-to-b from-[#16633A] to-[#034B24] shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Have Any Questions?
            </h2>
            <p className="text-lg text-white mb-8">Get In Touch With Us</p>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-full focus:outline-none"
                  placeholder="Your name"
                />
                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-full focus:outline-none"
                    placeholder="Your email"
                  />
                  <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="number"
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-full focus:outline-none"
                    placeholder="Your phone number"
                  />
                  <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-2xl focus:outline-none resize-none"
                  style={{ height: "40%" }}
                  placeholder="Type your message here..."
                ></textarea>
                <FaRegCommentDots className="absolute right-4 top-6 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-medium rounded-full transition duration-300 flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(90deg, #E7B10C 0%, #CA9C0F 100%)",
                }}
              >
                Send Now <FaPaperPlane className="text-lg" />
              </button>
            </form>
          </div>

          {/* Right side - Contact info + images */}
          <div className="relative w-full lg:w-[650px] h-[624px] rounded-2xl overflow-hidden">
            {/* Address / Contact info */}
            <div className="space-y-6 px-4 sm:px-6 pt-4 sm:pt-6 relative z-20">
              {/* Location */}
              <div className="flex items-center gap-4">
                <span
                  className="w-14 h-14 flex items-center justify-center rounded-[30px] flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #16633A 0%, #034B24 100%)",
                  }}
                >
                  <FaMapMarkerAlt className="text-white text-lg" />
                </span>
                <div>
                  <strong className="block text-gray-900">Location</strong>
                  <p className="text-gray-700 text-sm sm:text-base">
                    123 Main Street, Karachi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <span
                  className="w-14 h-14 flex items-center justify-center rounded-[30px] flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #16633A 0%, #034B24 100%)",
                  }}
                >
                  <FaPhone className="text-white text-lg" />
                </span>
                <div>
                  <strong className="block text-gray-900">Phone</strong>
                  <p className="text-gray-700 text-sm sm:text-base">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <span
                  className="w-14 h-14 flex items-center justify-center rounded-[30px] flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #16633A 0%, #034B24 100%)",
                  }}
                >
                  <FaEnvelope className="text-white text-lg" />
                </span>
                <div>
                  <strong className="block text-gray-900">Email</strong>
                  <p className="text-gray-700 text-sm sm:text-base">
                    info@wakeelapp.com
                  </p>
                </div>
              </div>
            </div>

            {/* Background Image Box */}
            <div className="absolute bottom-0 w-full h-[279px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={femaleBackgroundImage}
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Overlay Image */}
            <div className="absolute top-20 left-[65%]  -translate-x-1/2 w-[340px] h-[630px] z-10">
              <Image
                src={femaleImage}
                alt="Overlay"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
