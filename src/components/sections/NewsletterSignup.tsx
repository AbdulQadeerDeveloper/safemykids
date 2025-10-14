"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  if (subscribed) {
    return (
      <div className="w-full max-w-[940px] mx-auto h-auto md:h-[238px] bg-gradient-to-b from-[#16633A] to-[#034B24] rounded-lg overflow-hidden shadow-xl flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-white text-4xl mb-4">🎉</div>
          <h2 className="text-white text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-white opacity-90">
            You've been subscribed to our newsletter.
          </p>
          <button
            onClick={() => setSubscribed(false)}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto md:h-[238px] overflow-hidden shadow-xl flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full relative bg-gradient-to-b from-[#16633A] to-[#034B24] flex flex-col justify-center px-6 md:pl-8 text-white">
        <div className="max-w-[90%] mx-auto md:ml-32 relative z-10">
          <h2 className="text-sm mb-2">Newsletter</h2>
          <p className="text-1xl md:text-[33px] font-medium leading-snug">
            Sign Up To Get Latest Update
          </p>
        </div>
        {/* Background Image Layer */}
        <div className="absolute bottom-4 md:bottom-16 left-0 opacity-100">
          <Image
            src="/images/newsletter-left.png"
            alt="Newsletter Decoration"
            width={120}
            height={100}
            className="md:w-[180px] md:h-[140px] w-[100px] h-[80px]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[220px] md:h-full relative flex items-center justify-center">
        {/* Background Banner */}
        <Image
          src="/images/banner-image.jpg"
          alt="Newsletter Banner"
          fill
          className="object-cover"
        />

        {/* Form Overlay */}
        <div className="relative z-10 md:left-[-50px] w-[90%] max-w-[500px]">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full h-12 bg-[#FFFFFF21] rounded-full pl-6 pr-28 md:pr-40 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-[#E7B10C]"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 h-10 px-4 md:px-6 bg-gradient-to-r from-[#E7B10C] to-[#CA9C0F] rounded-full text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
