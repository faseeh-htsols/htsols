import Image from "next/image";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
}) => {
  /* ── WHITE variant: solid white + black arrow; hover → transparent, white text/border, white arrow ── */
  if (variant === "white") {
    const whiteClasses = [
      "group inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider",
      "border-2 border-white bg-white text-black",
      "transition-[background-color,color,border-color] duration-300 ease-out",
      "hover:bg-transparent hover:text-white hover:border-white",
      className,
    ].join(" ");

    const content = (
      <>
        {children}
        <Image
          src="/black-arrow.svg"
          alt=""
          width={30}
          height={30}
          unoptimized
          className="h-[30px] w-[30px] shrink-0 object-contain transition-[filter] duration-300 ease-out group-hover:invert"
        />
      </>
    );

    if (href) {
      return (
        <a href={href} className={whiteClasses}>
          {content}
        </a>
      );
    }

    return (
      <button type="button" onClick={onClick} className={whiteClasses}>
        {content}
      </button>
    );
  }

  /* ── OUTLINE variant: white-stroke + arrow style ── */
  if (variant === "outline") {
    const outlineClasses = `flex items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black ${className}`;

    const content = (
      <>
        {children}
        <Image
          src={"/right-arrow-btn.webp"}
          alt="arrow"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
          fetchPriority="high"
        />
      </>
    );

    if (href) {
      return (
        <a href={href} className={outlineClasses}>
          {content}
        </a>
      );
    }

    return (
      <button type="button" onClick={onClick} className={outlineClasses}>
        {content}
      </button>
    );
  }

  /* ── PRIMARY variant: glow grows on hover (no scale) ── */
  const baseClasses = [
    "group relative isolate inline-flex cursor-pointer items-center justify-center overflow-visible rounded-full px-7 py-2.5",
    "transition-shadow duration-300 ease-out",
    "before:pointer-events-none before:absolute before:-z-10 before:rounded-full before:content-['']",
    "before:inset-[-6px] before:bg-[#00A1A5]/25 before:opacity-80 before:blur-md",
    "before:transition-[inset,opacity,filter] before:duration-300 before:ease-out",
    "before:group-hover:inset-[-18px] before:group-hover:opacity-100 before:group-hover:blur-2xl",
    "shadow-[0_0_12px_1px_rgba(0,161,165,0.35),0_0_28px_3px_rgba(0,131,138,0.18),inset_0_0_20px_2px_rgba(0,161,165,0.08)]",
    "hover:shadow-[0_0_22px_6px_rgba(0,161,165,0.55),0_0_56px_14px_rgba(0,131,138,0.32),inset_0_0_26px_4px_rgba(0,161,165,0.12)]",
    className,
  ].join(" ");

  const style: React.CSSProperties = {
    background:
      "radial-gradient(ellipse 100% 150% at 50% 100%, rgba(0, 131, 138, 0.35) 0%, rgba(5, 20, 25, 0.95) 55%, rgba(3, 12, 15, 0.98) 100%)",
    border: "1.5px solid rgba(0, 161, 165, 0.55)",
  };

  const textClasses =
    "relative z-10 font-sans text-sm font-semibold uppercase tracking-wider text-[#e0f5f5] transition-[text-shadow] duration-300 ease-out " +
    "[text-shadow:0_0_6px_rgba(0,200,200,0.8),0_0_16px_rgba(0,161,165,0.6),0_0_40px_rgba(0,131,138,0.35)] " +
    "group-hover:[text-shadow:0_0_10px_rgba(0,220,220,0.95),0_0_22px_rgba(0,161,165,0.75),0_0_48px_rgba(0,131,138,0.45)]";

  const buttonContent = <span className={textClasses}>{children}</span>;

  if (href) {
    return (
      <a href={href} className={baseClasses} style={style}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
      style={style}
    >
      {buttonContent}
    </button>
  );
};

export default GlowButton;
