// app/components/sections/NewsSlider.tsx
"use client";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUser,
  FaCalendarAlt,
  FaComment,
} from "react-icons/fa";
import Image from "next/image";

// Import local images
import sliderImage1 from "@/components/sections/images/slider1.jpg";
import sliderImage2 from "@/components/sections/images/slider2.jpg";
import sliderImage3 from "@/components/sections/images/slide3.jpg";
import leftBanner from "@/components/sections/images/leftBanner.png";
import rightBanner from "@/components/sections/images/rightBanner.png";

const blogs = [
  {
    id: 1,
    img: sliderImage1,
    author: "Wakeel",
    date: "22 Dec, 2024",
    comments: "1 Comment",
    title: "Experienced criminal defense ensures expert strategy,",
    excerpt:
      "Learn how expert legal strategies can make a difference in criminal defense cases.",
  },
  {
    id: 2,
    img: sliderImage2,
    author: "Wakeel",
    date: "17 Dec, 2024",
    comments: "3 Comments",
    title: "Experienced criminal defense ensures expert strategy,",
    excerpt:
      "Discover the importance of experienced representation in complex legal matters.",
  },
  {
    id: 3,
    img: sliderImage3,
    author: "Wakeel",
    date: "17 Dec, 2024",
    comments: "3 Comments",
    title: "Technology is transforming legal services with",
    excerpt:
      "Explore how technology is revolutionizing the way legal services are delivered.",
  },
  {
    id: 4,
    img: sliderImage1,
    author: "Wakeel",
    date: "15 Dec, 2024",
    comments: "2 Comments",
    title: "Understanding your rights in corporate law",
    excerpt:
      "A comprehensive guide to understanding your rights in corporate legal matters.",
  },
  {
    id: 5,
    img: sliderImage2,
    author: "Wakeel",
    date: "12 Dec, 2024",
    comments: "5 Comments",
    title: "Family law updates you need to know",
    excerpt:
      "Stay informed about the latest changes in family law legislation.",
  },
];

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = blogs.length;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - itemsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= totalSlides - itemsPerView ? 0 : prev + 1
    );
  };

  // Auto slide every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

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
      <div className="absolute bottom-10 right-0 w-[200px] opacity-100 z-0 hidden lg:block">
        <Image
          src={rightBanner}
          alt="Right Banner"
          width={150}
          height={250}
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className="text-[#B68C5A] font-semibold text-lg mb-2">
              News & Blog
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000]">
              Our Latest <span className="text-[#16633A]">News & Updates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#16633A] to-[#034B24] mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-gradient-to-br from-[#16633A] to-[#034B24] text-white rounded-full hover:from-[#034B24] hover:to-[#022E1A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-x-1"
              aria-label="Previous slide"
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-gradient-to-br from-[#16633A] to-[#034B24] text-white rounded-full hover:from-[#034B24] hover:to-[#022E1A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-x-1"
              aria-label="Next slide"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-5"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="relative flex-shrink-0"
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`,
                  }}
                >
                  <div className="bg-white rounded-[24px] rounded-tr-[50px] border border-gray-200 border-b-[6px] border-b-green-800 flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow">
                      {/* Info row */}
                      <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
                        <span className="flex items-center gap-1.5 text-[#16633A]">
                          <FaUser className="text-[#16633A] text-xs" />
                          <span className="text-xs font-medium">
                            {blog.author}
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#16633A]">
                          <FaCalendarAlt className="text-[#16633A] text-xs" />
                          <span className="text-xs font-medium">
                            {blog.date}
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#16633A]">
                          <FaComment className="text-[#16633A] text-xs" />
                          <span className="text-xs font-medium">
                            {blog.comments}
                          </span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight hover:text-[#16633A] transition-colors duration-300">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-5">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(totalSlides / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index * itemsPerView
                    ? "bg-gradient-to-r from-[#16633A] to-[#034B24] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
