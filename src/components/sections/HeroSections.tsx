import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/d5dc.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <Image
          src="/images/54e3.png"
          alt="Green overlay"
          fill
          className="object-cover opacity-95"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-400/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[80vh] lg:min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div>
              <p className="text-amber-400 text-sm sm:text-lg font-medium mb-3 tracking-wide">
                Your Trusted Legal Ally
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="block">Book Your</span>
                <span className="block text-[#03DA03]">Law Expert</span>
                <span className="block">Online Today!</span>
              </h1>

              <div className="mt-4 sm:mt-6 w-16 sm:w-24 h-1 bg-amber-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Wakeel App bridges clients and lawyers through seamless booking,
              secure chat, and real-time updates. Find trusted lawyers, manage
              cases, and consult online effortlessly with transparency,
              confidentiality, and convenience at your fingertips.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, #03DA03 0%, #027402 100%)",
                }}
              >
                Get Started
              </button>

              <button className="border-2 border-amber-400 text-amber-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-amber-400/30 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>

              {/* Main Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                <div
                  className="absolute inset-0 border-2 border-emerald-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 border border-amber-400/30 rounded-full animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/home.png"
                    alt="Legal Professional"
                    width={400}
                    height={400}
                    className="h-56 sm:h-72 lg:h-96 xl:h-[28rem] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Floating Circles */}
              <div className="absolute -top-6 -right-6 w-10 h-10 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 sm:w-12 sm:h-12 bg-amber-400/20 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
