"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-0">
            <Image
              className="w-[250px] h-[50px] object-contain"
              src={"/footer-logo.png"}
              width={300}
              height={100}
              alt="logo"
            />
          </Link>
        </div>

        {/* Center/Right Section */}
        <div className="flex items-center gap-6">
          {/* Book Consultation Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[#0a0a0a] border border-white/20 text-white px-5 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Free Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Menu Icons */}
          <div className="flex items-center gap-4">
            {/* Grid Dots Icon */}
            <button className="text-white hover:text-primary transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="2" />
                <circle cx="12" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="6" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="18" cy="12" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="12" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
              </svg>
            </button>

            {/* Menu Toggle Icon */}
            <button className="text-white hover:text-primary transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="16"
                  cy="8"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="8"
                  cy="16"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
