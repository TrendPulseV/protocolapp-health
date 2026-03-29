"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const pillars = [
  { icon: "📱", title: "On-Device Only", desc: "All data stored locally using SQLite. Nothing leaves your phone." },
  { icon: "🚫", title: "No Accounts", desc: "No sign-up, no login, no email required. Ever." },
  { icon: "📤", title: "Full Export", desc: "Export everything as CSV or PDF at any time. Your data, your terms." },
  { icon: "👁️", title: "No Tracking", desc: "Zero analytics SDKs, zero ad tracking, zero telemetry." },
];

export default function PrivacyBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl glass-teal overflow-hidden p-12 md:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-6xl mb-6 block">🔒</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              No accounts.
              <br />
              <span className="gradient-text">No cloud. No tracking.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your health data is yours. Protocol stores everything on-device.
              No servers ever see your doses, your weight, or your stack.
              This isn&apos;t a privacy policy workaround — it&apos;s the architecture.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="glass rounded-2xl p-4 text-left"
                >
                  <span className="text-2xl mb-2 block">{p.icon}</span>
                  <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              Read the full Privacy Policy
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
