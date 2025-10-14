// components/SecondaryNav.tsx
"use client";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import SecondaryNavbar from "../data/SecondaryNavbar";

const SecondaryNav: React.FC = () => {
  return (
    <div className="bg-[rgba(10,27,15,1)] text-white py-2 px-4 text-sm font-light tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-gray-400">
            <ChevronLeft className="w-3 h-3 -mr-1" />
            <ChevronLeft className="w-3 h-3" />
          </div>

          <span className="text-gray-300">{SecondaryNavbar.line}</span>

          <Link
            href={SecondaryNavbar.link}
            className="text-primary-green hover:text-accent-gold transition-colors duration-300 font-medium relative group px-2"
            target="_blank"
          >
            {SecondaryNavbar.appname}
            <span className="absolute bottom-0 left-2 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
          </Link>

          <Image
            src={SecondaryNavbar.emoji}
            alt={SecondaryNavbar.appname}
            width={200}
            height={200}
            className="w-4 h-4"
          />

          <div className="flex items-center text-gray-400">
            <ChevronRight className="w-3 h-3" />
            <ChevronRight className="w-3 h-3 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
