"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const SCREENS = [
  {
    title: "AI Research Assistant",
    description: "Ask anything — interactions, dosing, half-lives, side effects",
    file: "Research Assistant - iPhone 17 Pro - 2026-04-06 at 19.53.50.png",
    bg: "from-teal-900/40 to-emerald-950/40",
    aiFeature: true,
  },
  {
    title: "Today",
    description: "PK curves, streak stats, and every dose due today",
    file: "Today  - iPhone 17 Pro - 2026-04-06 at 19.51.13.png",
    bg: "from-teal-900/40 to-teal-950/40",
  },
  {
    title: "Health Dashboard",
    description: "Energy, mood, sleep, and pain tracked over time",
    file: "Health Dashboard - iPhone 17 Pro - 2026-04-06 at 19.54.27.png",
    bg: "from-blue-900/40 to-blue-950/40",
  },
  {
    title: "Apple Health",
    description: "Weight, measurements, and mindfulness sync automatically",
    file: "Apple Heath - iPhone 17 Pro - 2026-04-06 at 19.51.47.png",
    bg: "from-red-900/40 to-red-950/40",
  },
  {
    title: "Progress",
    description: "Achievements, streaks, and 7-day adherence at a glance",
    file: "Progress - iPhone 17 Pro - 2026-04-06 at 19.52.10.png",
    bg: "from-purple-900/40 to-purple-950/40",
  },
  {
    title: "Progress Details",
    description: "Weight milestones, body metrics, and goal progress",
    file: "Progress 2- iPhone 17 Pro - 2026-04-06 at 19.52.27.png",
    bg: "from-violet-900/40 to-violet-950/40",
  },
  {
    title: "Injection Sites",
    description: "Tap-anywhere body map with smart rotation history",
    file: "Injection site - iPhone 17 Pro - 2026-04-06 at 20.42.49.png",
    bg: "from-blue-900/40 to-indigo-950/40",
  },
  {
    title: "Check-in",
    description: "Daily wellness check-in: energy, mood, sleep, pain",
    file: "Checkin - iPhone 17 Pro Max - 2026-04-06 at 20.10.13.png",
    bg: "from-rose-900/40 to-rose-950/40",
  },
  {
    title: "Inventory",
    description: "Track vials, amounts, expiry dates, and vendor details",
    file: "Inventoryt - iPhone 17 Pro - 2026-04-06 at 19.52.43.png",
    bg: "from-green-900/40 to-green-950/40",
  },
  {
    title: "Health Report",
    description: "Full PDF export of your health data and protocol history",
    file: "Health Report  - iPhone 17 Pro - 2026-04-06 at 19.55.28.png",
    bg: "from-sky-900/40 to-sky-950/40",
  },
  {
    title: "Data & Export",
    description: "Full dose history, protocols, and metrics — always yours",
    file: "Settings Data Report- iPhone 17 Pro - 2026-04-06 at 19.55.00.png",
    bg: "from-orange-900/40 to-orange-950/40",
  },
];

type Screen = (typeof SCREENS)[0];

function PhoneMockup({
  screen,
  onClick,
}: {
  screen: Screen;
  onClick: () => void;
}) {
  const src = `/screenshots/${encodeURIComponent(screen.file)}`;

  return (
    <button
      className="flex-shrink-0 text-left group cursor-pointer focus:outline-none relative"
      style={{ width: 260 }}
      onClick={onClick}
      aria-label={`View ${screen.title} screenshot`}
    >
      {/* AI glow highlight */}
      {screen.aiFeature && (
        <div className="absolute -inset-3 rounded-[52px] bg-teal-500/20 blur-xl z-0 pointer-events-none" />
      )}

      {/* Phone frame */}
      <div
        className="relative rounded-[44px] bg-[#1a1a1a] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.25)] z-10"
        style={{ width: 244, height: 528 }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full bg-black z-10" />

        {/* Screen */}
        <div className={`absolute inset-0 bg-gradient-to-b ${screen.bg}`}>
          <Image
            src={src}
            alt={screen.title}
            fill
            className="object-cover object-top"
            sizes="244px"
            quality={90}
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 glass-teal rounded-full px-4 py-2 flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="text-teal-400 text-sm font-medium">Expand</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[4px] rounded-full bg-white/30" />
      </div>

      {/* Label */}
      <div className="mt-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-2">
          <p className="text-white font-semibold text-sm">{screen.title}</p>
          {screen.aiFeature && (
            <span className="text-[10px] text-teal-400 border border-teal-500/50 rounded px-1.5 py-0.5 font-medium">
              AI
            </span>
          )}
        </div>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-[220px] mx-auto">
          {screen.description}
        </p>
      </div>
    </button>
  );
}

export default function Screenshots() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<Screen | null>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <section id="screenshots" className="py-20 relative">
      {/* Background glow — isolated so it never clips the scroll area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">
              See it in action
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Precision, in your{" "}
            <span className="gradient-text">pocket.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Every screen designed for clarity. Tap any screenshot to explore.
          </p>
        </motion.div>
      </div>

      {/* Scroll container */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 z-20 glass rounded-full w-10 h-10 flex items-center justify-center text-teal-400 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-lg"
          style={{ top: 264 }}
          aria-label="Scroll left"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-5 overflow-x-auto pb-6"
          style={
            {
              paddingLeft: "max(52px, calc((100vw - 1152px) / 2))",
              paddingRight: "max(52px, calc((100vw - 1152px) / 2))",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties
          }
        >
          {SCREENS.map((s, i) => (
            <PhoneMockup key={i} screen={s} onClick={() => setLightbox(s)} />
          ))}
        </motion.div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 z-20 glass rounded-full w-10 h-10 flex items-center justify-center text-teal-400 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-lg"
          style={{ top: 264 }}
          aria-label="Scroll right"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={`/screenshots/${encodeURIComponent(lightbox.file)}`}
          title={lightbox.title}
          description={lightbox.description}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
