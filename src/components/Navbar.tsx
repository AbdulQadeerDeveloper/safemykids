"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex w-full h-[80px] sticky top-0 bg-white text-black border-b border-gray-200 shadow-md z-30 backdrop-blur-md bg-opacity-95 transition-all duration-300">
        <div className="lg:w-[80%] xl:w-[75%] 2xl:max-w-[90rem] mx-auto flex justify-between items-center h-full px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Snap
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Check
              </span>
            </h1>
          </Link>

          {/* Menu Links */}
          <ul className="flex items-center gap-10 text-base font-semibold">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-6">
            <Link href="/auth/login">
              <p className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 font-semibold hover:to-blue-500 transition">
                Sign In
              </p>
            </Link>

            {/* Gradient Button like image */}
            <Link href="/auth/register">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 hover:opacity-90 shadow-md transition-all duration-300">
                <span className="bg-white text-black p-1.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden w-full h-[80px] sticky top-0 bg-white text-black shadow-md z-30 px-4 justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold">
            Snap
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Check
            </span>
          </h1>
        </Link>
        <GiHamburgerMenu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[320px] md:w-[360px] bg-white text-black z-40 transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Snap
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Check
              </span>
            </h1>
          </Link>
          <IoClose
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-4 p-6 text-base font-semibold">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="py-2 block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-4 px-6 py-4 border-t border-gray-200">
          <Link href="/auth/login" onClick={() => setIsOpen(false)}>
            <p className="font-semibold text-center transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
              Sign In
            </p>
          </Link>

          <Link href="/auth/register" onClick={() => setIsOpen(false)}>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 hover:opacity-90 shadow-md transition-all duration-300">
              <span className="bg-white text-black p-1.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              Start Free Trial
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
