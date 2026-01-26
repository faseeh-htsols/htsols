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
          <div className="flex flex-col md:flex-row gap-12 lg:gap-8">
            {/* Column 1 - Brand */}
            <div className="space-y-6 md:w-[45%]">
              {/* Logo */}
              <div className="flex md:justify-start justify-center items-center">
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

              <p className="text-white/40 uppercase md:text-left text-center text-xs uppercase tracking-wider">
                Strategize, Optimize, Maximize
              </p>

              <div className="space-y-3">
                <h3 className="text-white md:text-left text-center  flex flex-col uppercase font-primary gap-2 text-5xl md:text-3xl font-bold leading-tight">
                  <span className="flex md:justify-start justify-center items-center gap-3">
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
            <div className="md:w-[13%]">
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
                    <span className="text-white/80">CALL AT:</span> (+1)
                    437-937-1235
                  </p>
                </li>
                <li>
                  <p className="text-white/60 text-sm">
                    <span className="text-white/80">Email Us:</span>{" "}
                    hello@htsol.ca
                  </p>
                </li>
                <li>
                  <p className="text-white/60 text-sm">
                    <span className="text-white/80">Location:</span> 3400
                    Riverspray Crescent, L4Y 3M5 , Mississauga
                  </p>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="mailto:hello@htsol.ca"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-black transition-all duration-300"
                  aria-label="Email"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </a>

                <a
                  href="http://instagram.com/htsol.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.5.49a5 5 0 0 1 1.8 1.17 5 5 0 0 1 1.17 1.8c.27.7.44 1.4.49 2.5.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.49 2.5a5 5 0 0 1-1.17 1.8 5 5 0 0 1-1.8 1.17c-.7.27-1.4.44-2.5.49-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.5-.49a5 5 0 0 1-1.8-1.17 5 5 0 0 1-1.17-1.8c-.27-.7-.44-1.4-.49-2.5C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.49-2.5a5 5 0 0 1 1.17-1.8 5 5 0 0 1 1.8-1.17c.7-.27 1.4-.44 2.5-.49C9 2.01 9.3 2 12 2Zm0 1.7c-2.66 0-2.97.01-4.02.06-.97.04-1.5.2-1.86.34a3.3 3.3 0 0 0-1.2.78 3.3 3.3 0 0 0-.78 1.2c-.14.36-.3.89-.34 1.86C3.71 9.03 3.7 9.34 3.7 12s.01 2.97.06 4.02c.04.97.2 1.5.34 1.86.18.47.4.8.78 1.2.4.38.73.6 1.2.78.36.14.89.3 1.86.34 1.05.05 1.36.06 4.02.06s2.97-.01 4.02-.06c.97-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.2-.78.38-.4.6-.73.78-1.2.14-.36.3-.89.34-1.86.05-1.05.06-1.36.06-4.02s-.01-2.97-.06-4.02c-.04-.97-.2-1.5-.34-1.86a3.3 3.3 0 0 0-.78-1.2 3.3 3.3 0 0 0-1.2-.78c-.36-.14-.89-.3-1.86-.34C14.97 3.71 14.66 3.7 12 3.7Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/htsol"
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
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
