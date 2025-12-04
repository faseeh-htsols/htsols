"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeadingTwo from "../ui/heading-two";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="bg-tertiary">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex gap-12 lg:gap-8">
            {/* Column 1 - Brand */}
            <div className="space-y-6 w-[45%]">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-0">
                  <Image
                    src={"/footer-logo.png"}
                    width={300}
                    height={300}
                    className="w-[260px] h-[70px] object-contain"
                    alt="HTSOLUTIONS LOGO"
                  />
                </Link>
              </div>

              <p className="text-white/40 text-xs uppercase tracking-wider">
                TAGLINE WILL BE ADDED HERE
              </p>

              <div className="space-y-3">
                <h3 className="text-white flex flex-col uppercase font-primary gap-2 text-5xl md:text-3xl font-bold leading-tight">
                  <span className="flex items-center gap-3">
                    LET&apos;S{" "}
                    <span className="rounded-full w-[120px] h-[60px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] flex items-center justify-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.32725 18.4846C4.90706 18.027 4.93743 17.3153 5.3951 16.8951L17.5493 5.736C18.007 5.31581 18.7187 5.34619 19.1389 5.80386C19.5591 6.26152 19.5287 6.97321 19.071 7.3934L6.91679 18.5525C6.45912 18.9727 5.74744 18.9423 5.32725 18.4846Z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.64913 6.10673C7.67563 5.48597 8.20036 5.0042 8.82112 5.0307L18.3584 5.43778C18.9791 5.46433 19.4608 5.98906 19.4344 6.60978L19.0273 16.147C19.0007 16.7678 18.476 17.2495 17.8553 17.2231C17.2346 17.1965 16.7528 16.6718 16.7793 16.0511L17.1384 7.63779L8.72512 7.27869C8.10441 7.25215 7.62268 6.72745 7.64913 6.10673Z"
                        />
                      </svg>{" "}
                    </span>{" "}
                  </span>
                  WORK TOGETHER
                </h3>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="w-[13%]">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Portfolio */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                PORTFOLIO
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/portfolio/web-development"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Website Development services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/seo"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    SEO services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/cgi"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    CGI services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/staff-augmentation"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Staff Augmentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/digital-transformation"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/digital-marketing"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-200"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Information */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                CONTACT INFORMATION
              </h4>
              <ul className="space-y-4">
                <li>
                  <p className="text-white/60 text-sm">
                    <span className="text-white/80">CALL AT:</span> 123 456 789
                  </p>
                </li>
                <li>
                  <p className="text-white/60 text-sm">
                    <span className="text-white/80">Email Us:</span>{" "}
                    abc@gmail.com
                  </p>
                </li>
                <li>
                  <p className="text-white/60 text-sm">
                    <span className="text-white/80">Location:</span> Lorem Ipsum
                  </p>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-black transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-black transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-black transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6">
          <p className="text-white text-xs text-center">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
