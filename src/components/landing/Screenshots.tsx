"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const screens = [
  {
    title: "Today",
    description: "PK curves, streak stats, and every dose due today",
    file: "/screenshots/today.png",
    bg: "from-teal-900/40 to-teal-950/40",
  },
  {
    title: "Body Map",
    description: "Tap-anywhere injection site rotation with smart suggestions",
    file: "/screenshots/body-map.png",
    bg: "from-blue-900/40 to-blue-950/40",
  },
  {
    title: "Progress",
    description: "Achievements, weight milestones, and 7-day metrics",
    file: "/screenshots/progress.png",
    bg: "from-purple-900/40 to-purple-950/40",
  },
  {
    title: "Export",
    description: "Full data export as PDF or CSV — everything, always",
    file: "/screenshots/export.png",
    bg: "from-orange-900/40 to-orange-950/40",
  },
  {
    title: "Protocol",
    description: "Multi-peptide protocols with flexible scheduling",
    file: "/screenshots/protocol.png",
    bg: "from-green-900/40 to-green-950/40",
  },
  {
    title: "Check-in",
    description: "Daily wellness check-in: energy, mood, sleep, pain",
    file: "/screenshots/checkin.png",
    bg: "from-rose-900/40 to-rose-950/40",
  },
];

function PhoneMockup({ screen }: { screen: typeof screens[0] }) {
  return (
    <div className="flex-shrink-0 w-[220px]">
      {/* Phone frame */}
      <div className="relative w-[220px] h-[470px] rounded-[36px] bg-[#1a1a1a] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[22px] rounded-full bg-black z-10" />

        {/* Screen content */}
        <div className={`absolute inset-0 bg-gradient-to-b ${screen.bg}`}>
          <Image
            src={screen.file}
            alt={screen.title}
            fill
            className="object-cover object-top"
            onError={() => {}}
          />
        </div>

        {/* Bottom home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-1 rounded-full bg-white/20" />
      </div>

      {/* Label */}
      <div className="mt-4 text-center">
        <p className="text-white font-semibold text-sm">{screen.title}</p>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{screen.description}</p>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="screenshots" className="py-32 relative overflow-hidden">
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
            Every screen designed for clarity. Every feature one tap away.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll — full width */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex gap-6 overflow-x-auto px-[max(24px,calc((100vw-1152px)/2))] pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {screens.map((s, i) => (
          <PhoneMockup key={i} screen={s} />
        ))}
      </motion.div>
    </section>
  );
}
