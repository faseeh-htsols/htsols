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
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 border";

  const variants = {
    primary:
      "bg-transparent border-white text-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent border-white/30 text-white hover:border-white hover:bg-white/5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
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

