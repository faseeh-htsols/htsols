import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ArrowLinkButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  arrowClassName?: string;
  variant?: "teal" | "outline";
};

const variantClasses = {
  teal: "border border-[#00A1A5] bg-[#00A1A5] text-white hover:bg-transparent hover:text-[#00A1A5]",
  outline:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-black",
} as const;

const ArrowLinkButton = ({
  children,
  href,
  className = "",
  arrowClassName = "",
  variant = "outline",
}: ArrowLinkButtonProps) => {
  const buttonClasses = [
    "group inline-flex items-center justify-center gap-3 rounded-full text-center font-sans font-semibold uppercase transition-all duration-300",
    variantClasses[variant],
    className,
  ].join(" ");

  const iconClasses = [
    "h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
    arrowClassName,
  ].join(" ");

  return (
    <a href={href} className={buttonClasses}>
      {children}
      <ArrowUpRight className={iconClasses} />
    </a>
  );
};

export default ArrowLinkButton;
