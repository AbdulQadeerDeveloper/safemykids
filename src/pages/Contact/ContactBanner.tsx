import React from "react";
import banner from "@/components/sections/images/bannerAbout.jpg";

const ContactHeroSection: React.FC = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner.src})` }}
      ></div>

      {/* Green Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(9, 36, 29, 0.8)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-left">
          <span className="text-white opacity-80">Home</span>
          <span className="mx-2 text-white opacity-60">›</span>
          <span className="text-white">Contact Us</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Contact Us
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Have questions or need legal guidance? Our team is here to help. Reach
          out today for trusted support and quick assistance with your legal
          matters.
        </p>
      </div>
    </div>
  );
};

export default ContactHeroSection;
