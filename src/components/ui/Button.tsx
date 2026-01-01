import Image from "next/image";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}) => {
  const baseStyles =
    "flex items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border";

  const variants = {
    primary:
      "bg-white border-white text-black hover:bg-transparent hover:text-white",
    outline:
      "bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
        {/* <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[30px]"
        >
          <g clip-path="url(#clip0_397_144)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.56991 23.5995C5.13058 23.1602 5.13057 22.4479 5.56991 22.0085L17.2372 10.3413C17.6765 9.90193 18.3888 9.90193 18.8282 10.3413C19.2675 10.7806 19.2675 11.4929 18.8282 11.9322L7.1609 23.5995C6.72156 24.0389 6.00923 24.0388 5.56991 23.5995Z"
              fill="url(#paint0_linear_397_144)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.36147 11.1338C7.36147 10.5125 7.86518 10.0088 8.48651 10.0088L18.0324 10.0088C18.6537 10.0088 19.1574 10.5125 19.1575 11.1338L19.1575 20.6797C19.1574 21.301 18.6537 21.8047 18.0324 21.8048C17.4111 21.8047 16.9074 21.301 16.9074 20.6797L16.9074 12.2588L8.48647 12.2588C7.86519 12.2588 7.36151 11.7551 7.36147 11.1338Z"
              fill="url(#paint1_linear_397_144)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_397_144"
              x1="5.56991"
              y1="23.5995"
              x2="18.8282"
              y2="10.3413"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#075B65" />
              <stop offset="0.370192" stop-color="#00838A" />
              <stop offset="0.8125" stop-color="#328A99" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_397_144"
              x1="12.464"
              y1="16.7022"
              x2="18.8279"
              y2="10.3383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#075B65" />
              <stop offset="0.370192" stop-color="#00838A" />
              <stop offset="0.8125" stop-color="#328A99" />
            </linearGradient>
            <clipPath id="clip0_397_144">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 16.9706) rotate(-45)"
              />
            </clipPath>
          </defs>
        </svg> */}
        <Image
          src={"/right-arrow-btn.png"}
          alt="aroow"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:translate-x-1"
      >
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Button;
