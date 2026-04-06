"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const screens = [
  {
    title: "Today",
    description: "PK curves, streak stats, and every dose due today",
    file: "/screenshots/today-ipad.png",
    bg: "from-teal-900/40 to-teal-950/40",
    device: "ipad" as const,
  },
  {
    title: "Body Map",
    description: "Tap-anywhere injection site rotation with smart suggestions",
    file: "/screenshots/body-map-ipad.png",
    bg: "from-blue-900/40 to-blue-950/40",
    device: "ipad" as const,
  },
  {
    title: "Progress",
    description: "Achievements, weight milestones, and 7-day metrics",
    file: "/screenshots/progress-ipad.png",
    bg: "from-purple-900/40 to-purple-950/40",
    device: "ipad" as const,
  },
  {
    title: "Protocol",
    description: "Multi-peptide protocols with flexible scheduling",
    file: "/screenshots/protocol-ipad.png",
    bg: "from-green-900/40 to-green-950/40",
    device: "ipad" as const,
  },
  {
    title: "Check-in",
    description: "Daily wellness check-in: energy, mood, sleep, pain",
    file: "/screenshots/checkin-ipad.png",
    bg: "from-rose-900/40 to-rose-950/40",
    device: "ipad" as const,
  },
  {
    title: "Catalog",
    description: "Browse 100+ compounds with dosing guides and half-life data",
    file: "/screenshots/catalog.png",
    bg: "from-sky-900/40 to-sky-950/40",
    device: "ipad" as const,
  },
  {
    title: "Export",
    description: "Choose your format — PDF reports or raw CSV data",
    file: "/screenshots/export-options.png",
    bg: "from-orange-900/40 to-orange-950/40",
    device: "ipad" as const,
  },
  {
    title: "Export Data",
    description: "Full dose history, protocols, and metrics — always yours",
    file: "/screenshots/export-data.png",
    bg: "from-amber-900/40 to-orange-950/40",
    device: "ipad" as const,
  },
  {
    title: "AI Research",
    description: "Ask anything — interactions, dosing, half-lives, side effects",
    file: "/screenshots/research.png",
    bg: "from-teal-900/40 to-emerald-950/40",
    device: "ipad" as const,
  },
];

type Screen = typeof screens[0];

function DeviceMockup({ screen, onClick }: { screen: Screen; onClick: () => void }) {
  const isIpad = screen.device === "ipad";

  if (isIpad) {
    return (
      <button
        className="flex-shrink-0 text-left group cursor-pointer focus:outline-none"
        style={{ width: 320 }}
        onClick={onClick}
        aria-label={`View ${screen.title} screenshot`}
      >
        {/* iPad frame */}
        <div className="relative rounded-[28px] bg-[#1a1a1a] border-[7px] border-[#2a2a2a] shadow-2xl overflow-hidden transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]"
          style={{ width: 306, height: 430 }}>
          {/* Front camera pill */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-black z-10" />

          {/* Screen content */}
          <div className={`absolute inset-0 bg-gradient-to-b ${screen.bg}`}>
            <Image
              src={screen.file}
              alt={screen.title}
              fill
              className="object-cover object-top"
              sizes="306px"
              quality={95}
            />
          </div>

          {/* Tap hint overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 glass-teal rounded-full px-4 py-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span className="text-teal-400 text-sm font-medium">Expand</span>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="mt-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-semibold">{screen.title}</p>
            <span className="text-[10px] text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">iPad</span>
          </div>
          <p className="text-slate-500 text-sm mt-1 leading-relaxed">{screen.description}</p>
        </div>
      </button>
    );
  }

  // iPhone fallback
  return (
    <button
      className="flex-shrink-0 w-[300px] text-left group cursor-pointer focus:outline-none"
      onClick={onClick}
      aria-label={`View ${screen.title} screenshot`}
    >
      <div className="relative w-[300px] h-[640px] rounded-[44px] bg-[#1a1a1a] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full bg-black z-10" />
        <div className={`absolute inset-0 bg-gradient-to-b ${screen.bg}`}>
          <Image
            src={screen.file}
            alt={screen.title}
            fill
            className="object-cover object-top"
            sizes="300px"
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 glass-teal rounded-full px-4 py-2 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <span className="text-teal-400 text-sm font-medium">Expand</span>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-[5px] rounded-full bg-white/30" />
      </div>
      <div className="mt-5 text-center">
        <p className="text-white font-semibold">{screen.title}</p>
        <p className="text-slate-500 text-sm mt-1 leading-relaxed">{screen.description}</p>
      </div>
    </button>
  );
}

export default function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<Screen | null>(null);

  return (
    <section id="screenshots" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">See it in action</span>
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

      {/* Horizontal scroll — full width */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex gap-6 overflow-x-auto pb-6"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1152px) / 2))",
          paddingRight: "max(24px, calc((100vw - 1152px) / 2))",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {screens.map((s, i) => (
          <DeviceMockup key={i} screen={s} onClick={() => setLightbox(s)} />
        ))}
      </motion.div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.file}
          title={lightbox.title}
          description={lightbox.description}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
