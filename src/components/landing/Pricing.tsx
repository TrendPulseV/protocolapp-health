"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const free = [
  "Unlimited dose logging",
  "1 active protocol",
  "Body map (10 sites)",
  "Peptide catalog",
  "Basic reconstitution calculator",
  "Local data storage",
];

const pro = [
  "Everything in Free",
  "Unlimited protocols",
  "Full body map — tap anywhere",
  "PK curve visualization",
  "Achievements & streaks",
  "Weight & body metrics tracking",
  "Daily check-ins",
  "Progress photos",
  "CSV + PDF export",
  "Protocol templates",
  "Titration scheduling",
  "Priority support",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">Simple pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start free.{" "}
            <span className="gradient-text">Go Pro.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            No subscription required for core tracking. Unlock everything with a one-time purchase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div className="mb-8">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">Free</p>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold text-white">$0</span>
              </div>
              <p className="text-slate-500 text-sm mt-2">Forever. No credit card.</p>
            </div>

            <a
              href="#download"
              className="block w-full text-center glass hover:bg-white/8 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 mb-8"
            >
              Download Free
            </a>

            <ul className="space-y-3">
              {free.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative glass-teal rounded-3xl p-8 glow-teal"
          >
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Most Popular
            </div>

            <div className="mb-8">
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-2">Protocol Pro</p>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold text-white">$X.99</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">One-time purchase · Lifetime access</p>
            </div>

            <a
              href="#download"
              className="block w-full text-center bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 mb-8"
            >
              Get Protocol Pro
            </a>

            <ul className="space-y-3">
              {pro.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          Purchases are processed securely through the Apple App Store. No account required.
        </motion.p>
      </div>
    </section>
  );
}
