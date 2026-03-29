"use client";

import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  title: string;
  description: string;
  onClose: () => void;
}

export default function Lightbox({ src, title, description, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 flex flex-col items-center max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ maxHeight: "85vh", maxWidth: "min(420px, 90vw)" }}>
          <Image
            src={src}
            alt={title}
            width={1206}
            height={2622}
            className="w-auto h-auto"
            style={{ maxHeight: "85vh", maxWidth: "min(420px, 90vw)", objectFit: "contain" }}
            quality={100}
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-white font-semibold">{title}</p>
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
