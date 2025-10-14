"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { CheckCircle } from "lucide-react";
import "swiper/css/navigation";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function ContactSection() {
  const cards = [
    {
      title: <>Booked in Minutes, Consulted Securely</>,
      text: "I found a verified lawyer and booked a same-day consultation. Secure chat kept my details private, and notifications kept me on track from booking to follow-up.",
      para: "Verified Client — Karachi · Family Law · 2025",
    },
    {
      title: <>Right Lawyer, Right Away</>,
      text: "Smart matching and clear profiles helped me choose fast. Scheduling was simple, and timely reminders made the whole process smooth and stress-free.",
      para: "Verified Client — Islamabad · Civil Matter · 2025",
    },
    {
      title: <>Booked in Minutes, Consulted Securely</>,
      text: "I found a verified lawyer and booked a same-day consultation. Secure chat kept my details private, and notifications kept me on track from booking to follow-up.",
      para: "Verified Client — Karachi · Family Law · 2025",
    },
    {
      title: <>Right Lawyer, Right Away</>,
      text: "Smart matching and clear profiles helped me choose fast. Scheduling was simple, and timely reminders made the whole process smooth and stress-free.",
      para: "Verified Client — Islamabad · Civil Matter · 2025",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Background Left - Figma values */}
      <div
        className="absolute hidden md:block"
        style={{ top: "166px", left: "-44px" }}
      >
        <Image
          src="/images/image-wakeel.png"
          alt="Left Decoration"
          width={145}
          height={207}
          className="opacity-100"
        />
      </div>

      {/* Background Right - Figma values */}
      <div
        className="absolute hidden md:block"
        style={{ top: "445.8px", left: "1250px" }}
      >
        <Image
          src="/images/image-wakeel.png"
          alt="Right Decoration"
          width={145}
          height={271}
          className="opacity-100"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-4">
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
            What
            <span className="bg-gradient-to-r from-[rgba(22,99,58,1)] to-[rgba(3,75,36,1)] bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Real experiences using Wakeel App to find verified lawyers, consult
            securely, and stay updated.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="pb-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="relative flex flex-col bg-white rounded-[24px] rounded-tr-[50px]  border border-gray-200 border-b-[6px] border-b-green-800 w-full min-h-[300px] p-8 flex-1">
                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 
             w-[70px] h-[55px]    /* mobile */
             md:w-[100px] md:h-[81px]  /* desktop */
             bg-[#F5F5F5] 
             rounded-tr-[40px] md:rounded-tr-[50px] 
             rounded-bl-[40px] md:rounded-bl-[50px] 
             shadow-md"
                  />

                  <h3 className="text-lg md:text-base font-semibold text-[#022E17] text-center mt-6 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-sm  text-justify mt-4 leading-7">
                    {card.text}
                  </p>
                  {card.para && (
                    <div className="flex items-center gap-2 mt-4">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-500">{card.para}</span>
                    </div>
                  )}

                  {/* Button always bottom */}
                  <div className="mt-auto flex pt-5 justify-center">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#03DA03] to-[#027402] text-white font-semibold hover:opacity-90 transition">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Desktop/Tablet Arrows (side par) */}
          <button
            className="prev-arrow hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 
                   w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full 
                   bg-gradient-to-b from-[#16633A] to-[#034B24] text-white shadow-lg 
                   hover:opacity-90 transition z-20"
          >
            <HiArrowLeft size={20} className="md:w-6" />
          </button>
          <button
            className="next-arrow hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 
                   w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full 
                   bg-gradient-to-b from-[#16633A] to-[#034B24] text-white shadow-lg 
                   hover:opacity-90 transition z-20"
          >
            <HiArrowRight size={20} className="md:w-6" />
          </button>

          {/* Mobile Arrows (card ke bottom center) */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              className="prev-arrow w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gradient-to-b from-[#16633A] to-[#034B24] text-white shadow-md 
                     hover:opacity-90 transition"
            >
              <HiArrowLeft size={18} />
            </button>
            <button
              className="next-arrow w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gradient-to-b from-[#16633A] to-[#034B24] text-white shadow-md 
                     hover:opacity-90 transition"
            >
              <HiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
