// components/PrimaryNav.tsx
'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Download } from 'lucide-react';
import PrimaryNavbar from '../data/PrimaryNavbar';
import type { NavItem } from '../types';

const PrimaryNav: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const router = useRouter();

  const handleScroll = (): void => {
    if (window.pageYOffset >= 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const extractRouteFromURL = (url: string): string => {
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart.startsWith('#')) {
      return '';
    }
    return lastPart;
  };

  const currentRoute = typeof window !== 'undefined' ? extractRouteFromURL(window.location.href) : '';

  const handleRoute = (event: React.MouseEvent): void => {
    setToggle(false);
    if (currentRoute === '' || currentRoute === '/') {
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, link: string): void => {
    if (event.key === 'Enter' || event.key === 'Space') {
      handleRoute(event as any);
    }
  };

  return (
    <nav 
  className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200 transition-all duration-300"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 lg:h-20">
      
      {/* Logo */}
      <div className="flex-shrink-0 cursor-pointer group">
        <Image
          src="/images/logo2.png"
          alt="Wakeel App Logo" 
          width={200}
          height={200}
          className="h-8 lg:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
          onClick={() => router.push('/')} 
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        {PrimaryNavbar.map((item: NavItem) => (
          <Link 
            key={item.id} 
            href={`/${item.link}`} 
            className="relative font-medium text-lg text-gray-800 hover:text-primary-green transition-all duration-300 group"
            onClick={(event) => {
              if (currentRoute === '' || currentRoute === '/') {
                event.stopPropagation();
              }
            }}
          >
            {item.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Desktop Download Button */}
      <div className="hidden lg:flex">
        <Link href="https://play.google.com/store/apps" target="_blank">
          <button className="bg-gradient-to-r from-[rgba(231,177,12,1)] to-[rgba(202,156,15,1)] text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:from-[rgba(202,156,15,1)] hover:to-[rgba(231,177,12,1)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
        onClick={() => setToggle(!toggle)}
      >
        <span className={`block w-6 h-0.5 transition-all duration-300 transform origin-center ${toggle ? 'rotate-45 translate-y-1 bg-gray-800' : 'rotate-0 bg-gray-800'}`}></span>
        <span className={`block w-6 h-0.5 transition-all duration-300 ${toggle ? 'opacity-0' : 'opacity-100 bg-gray-800'}`}></span>
        <span className={`block w-6 h-0.5 transition-all duration-300 transform origin-center ${toggle ? '-rotate-45 -translate-y-1 bg-gray-800' : 'rotate-0 bg-gray-800'}`}></span>
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl transform transition-all duration-300 ${toggle ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'}`}>
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {PrimaryNavbar.map((item: NavItem, index: number) => (
        <Link 
          key={item.id} 
          href={`/${item.link}`} 
          className={`block text-xl font-medium text-gray-800 hover:text-primary-green transition-all duration-300 transform ${toggle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: `${index * 50}ms` }}
          onKeyDown={(event) => handleKeyDown(event, item.link)} 
          onClick={handleRoute}
        >
          {item.title}
        </Link>
      ))}

      {/* Mobile Download Button */}
      <div className="pt-4">
        <Link href="https://play.google.com/store/apps" target="_blank">
          <button 
            className={`w-full bg-gradient-to-r from-[rgba(231,177,12,1)] to-[rgba(202,156,15,1)] text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-[rgba(202,156,15,1)] hover:to-[rgba(231,177,12,1)] transition-all duration-300 shadow-lg transform ${toggle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: `${PrimaryNavbar.length * 50}ms` }}
            onClick={() => setToggle(false)}
          >
            <Download className="w-5 h-5" />
            <span>Download App</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
</nav>
  );
};

export default PrimaryNav;