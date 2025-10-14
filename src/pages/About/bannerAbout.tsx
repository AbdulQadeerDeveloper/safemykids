import React from "react";
import banner from "@/components/sections/images/bannerAbout.jpg";

const AboutHeroSection: React.FC = () => {
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
          <span className="text-white">About Us</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          About Us
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Discover the ultimate online legal advisor that puts the power of
          legal knowledge in your hands. Our app provides instant access to
          trusted legal guidance whenever you need it.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
