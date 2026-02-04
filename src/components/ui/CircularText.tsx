"use client";

import React from "react";

interface CircularTextProps {
  text?: string;
  className?: string;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text = "Ht Solutions Marketing Agency",
  className = "",
}) => {
  return (
    <div className={`circular-text-container cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-32 h-32 md:w-40 md:h-40 animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text className="fill-white text-[18px] uppercase tracking-[0.3em] font-medium">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center arrow icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularText;
