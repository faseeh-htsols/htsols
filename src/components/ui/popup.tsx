"use client";
import Image from "next/image";
import { useEffect } from "react";

function PopUp({
  open,
  src,
  onClose,
}: {
  open: boolean;
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open || !src) return null;

  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-2xl px-4">
      <button
        aria-label="Close popup"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />
      <div className="relative z-[1000] w-full max-w-4xl rounded-2xl bg-primary  shadow-2xl">
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-[1001] h-9 w-9 rounded-full bg-[#075B65] text-white hover:bg-white/25 transition flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="w-full aspect-video bg-black">
          {isVideo ? (
            <video
              src={src}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={src}
              alt="Feedback"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default PopUp;
