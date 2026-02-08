"use client";
import Image from "next/image";
import { useEffect } from "react";

function getYouTubeEmbed(url: string) {
  // Shorts
  if (url.includes("youtube.com/shorts/")) {
    const id = url.split("shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0&playsinline=1`;
  }

  // Normal YouTube
  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v");
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`
      : null;
  }

  return null;
}

function PopUpYoutube({
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

  const isMp4 = /\.(mp4|webm|ogg)$/i.test(src);
  const ytEmbed = getYouTubeEmbed(src);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        aria-label="Close popup"
      />

      {/* Modal */}
      <div className="relative z-[1000] w-full max-w-3xl rounded-2xl bg-black shadow-2xl ">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-[1001] h-9 w-9 rounded-full bg-white text-black hover:scale-110 transition flex items-center justify-center"
        >
          ✕
        </button>

        {/* Content */}
        <div className="w-full aspect-video bg-black">
          {ytEmbed ? (
            <iframe
              src={ytEmbed}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : isMp4 ? (
            <video
              src={src}
              autoPlay
              controls
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={src}
              alt="Popup content"
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PopUpYoutube;
