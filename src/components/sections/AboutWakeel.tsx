import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
}

const Responsive: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Our Mission",
      description:
        "Wakeel App’s mission is to <strong>empower individuals with easy access to legal services.</strong> By removing traditional barriers, we simplify finding and consulting lawyers, making justice more accessible, transparent, and efficient for everyone.",
    },
    {
      title: "Our Team",
      description:
        "Our team brings together <strong>skilled attorneys and technology experts</strong> who share a passion for justice and innovation. We are committed to guiding clients through their legal journey, ensuring rights are protected with professionalism and care.",
    },
  ];

  return (
    <div className="space-y-3 max-w-md mx-auto lg:mx-0">
      {features.map((feature, index) => (
        <div key={index} className="group">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-2">
            {feature.title}
          </h3>
          <p
            className="text-gray-600 leading-relaxed text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: feature.description }}
          />
        </div>
      ))}
    </div>
  );
};

const AboutWakeel: React.FC = () => {
  const appFeatures: string[] = [
    "Experienced Lawyers",
    "Secure Consultations",
    "Legal Guidance",
    "Trusted Support",
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-gray-100"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 w-32 sm:w-48 h-32 sm:h-48 opacity-10">
        <Image
          src="/images/df0d.png"
          alt="Background decoration"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 -left-8 sm:-left-16 w-48 sm:w-[300px] h-40 sm:h-[250px]">
        <Image
          src="/images/df0d.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute -bottom-6 right-0 w-40 sm:w-[220px] h-40 sm:h-[250px]">
        <Image
          src="/images/d411.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* About Us Badge */}
        <div className="text-center mb-6">
          <span className="inline-block text-yellow-600 font-extrabold text-xs sm:text-lg px-3 sm:px-4 py-1 rounded-full">
            About Us
          </span>
        </div>

        {/* Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Phone Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[320px] sm:w-[350px] sm:h-[420px] lg:w-[500px] lg:h-[550px] ml-0 lg:ml-44">
              <div className="rounded-2xl overflow-hidden inline-block">
                <Image
                  src="/images/Profile.png"
                  alt="Wakeel App Interface"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              About Wakeel App
            </h1>

            {/* Our App Section */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Our App
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Wakeel App is a secure, modern platform that connects clients
                with professional lawyers online. From lawyer profiles and
                booking to in-app chat and notifications, the app ensures
                reliable, transparent, and hassle-free legal support.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {appFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Team */}
            <Responsive />
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute -top-8 -right-4 sm:-right-6 w-20 sm:w-[150px] h-20 sm:h-[150px]">
          <Image
            src="/images/db1c.png"
            alt="Justice gavel"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutWakeel;
