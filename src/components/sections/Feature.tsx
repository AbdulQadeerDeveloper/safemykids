import React from "react";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

// Define the feature data type
interface FeatureData {
  id: number;
  title: string;
  greenTitle?: string;
  detail: string;
  img: string;
}

// Mock data - replace with your actual data import
const featureSection: FeatureData[] = [
  {
    id: 1,
    title: "Private",
    greenTitle: "and Encrypted",
    detail:
      "Conversations and shared files are protected with end-to-end encryption, so only you and your lawyer can access sensitive information. Consult confidently through secure in-app messaging and privacy-first design.",
    img: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Smart",
    greenTitle: "Matching",
    detail:
      "AI recommends suitable lawyers based on expertise, availability, budget, and past success, reducing search time and improving fit. Quickly discover verified professionals who handle matters similar to yours.",
    img: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Real",
    greenTitle: "Time Updates",
    detail:
      "Stay informed with instant notifications for bookings, messages, and upcoming sessions. Track case milestones in real time, maintain momentum with your lawyer, and keep everything organized from one secure place.",
    img: "/api/placeholder/600/400",
  },
];

const Feature: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-12 lg:py-16 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase mb-4"
            style={{
              backgroundColor: "rgba(255, 247, 234, 1)",
              color: "rgba(255, 181, 57, 1)",
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Why
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
            Choose
            <span className="bg-gradient-to-r from-[rgba(22,99,58,1)] to-[rgba(3,75,36,1)] bg-clip-text text-transparent">
              {" "}
              Wakeel App
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connect with verified lawyers, book secure consultations, and track
            cases in real time for transparent, convenient, trusted support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 lg:space-y-16">
          {featureSection.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
                ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}
              `}
            >
              {/* Content Side */}
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Feature Badge */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255, 247, 234, 1)",
                    color: "rgba(255, 181, 57, 1)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mr-2 animate-pulse"
                    style={{ backgroundColor: "rgba(255, 181, 57, 1)" }}
                  ></div>
                  Feature {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight">
                  {feature.title}
                  {feature.greenTitle && (
                    <span className="bg-gradient-to-r from-[rgba(22,99,58,1)] to-[rgba(3,75,36,1)] bg-clip-text text-transparent">
                      {` ${feature.greenTitle}`}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-lg">
                  {feature.detail}
                </p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-600">
                      Secure
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-1 rounded-full">
                    <Zap className="w-3 h-3 text-yellow-600" />
                    <span className="text-xs font-medium text-yellow-600">
                      Fast
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    <span className="text-xs font-medium text-blue-500">
                      Reliable
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    className="group inline-flex items-center px-5 py-2.5 
  bg-gradient-to-r from-[rgba(22,99,58,1)] to-[rgba(3,75,36,1)] 
  text-white font-semibold text-sm rounded-full 
  hover:shadow-lg transform hover:scale-105 
  transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative group max-w-md mx-auto">
                  {/* Background Decoration */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500
                    ${
                      index % 2 === 0
                        ? "from-green-500/50 to-emerald-600/50"
                        : "from-yellow-400/50 to-orange-500/50"
                    }
                  `}
                  ></div>

                  {/* Image Container */}
                  <div className="relative bg-white rounded-2xl p-3 lg:p-4 shadow-xl group-hover:shadow-2xl transform group-hover:-translate-y-1 transition-all duration-500">
                    {/* Top Bar */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>

                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={feature.img}
                        alt={`${feature.title} feature illustration`}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating Elements */}
                    <div
                      className="
    absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg 
    transform group-hover:scale-110 transition-transform duration-300
    bg-gradient-to-br from-yellow-400 to-orange-500
  "
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Side Stats */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div
                        className={`text-lg font-bold ${
                          index % 2 === 0 ? "text-green-600" : "text-yellow-600"
                        }`}
                      >
                        99%
                      </div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
