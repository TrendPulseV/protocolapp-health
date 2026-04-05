"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const free = [
  "Unlimited dose logging",
  "1 active protocol · up to 3 items",
  "Body map (10 sites)",
  "Peptide catalog",
  "Basic reconstitution calculator",
  "Local data storage",
];

const pro = [
  "Everything in Free",
  "AI Research Assistant (50 queries/mo)",
  "AI Stack Builder",
  "AI Wellness Coach",
  "Apple Watch companion app",
  "Apple Health sync",
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

const plans = [
  { id: "monthly", label: "Monthly", price: "$2.99", period: "/month", note: null },
  { id: "annual",  label: "Annual",  price: "$24.99", period: "/year", note: "Save 30%" },
  { id: "lifetime", label: "Lifetime", price: "$49.99", period: " one-time", note: "Best value" },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState("annual");

  const activePlan = plans.find((p) => p.id === selected)!;

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">Simple pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start free.{" "}
            <span className="gradient-text">Go Pro.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Core tracking is free forever. Unlock the full Protocol with Pro.
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Most Popular
            </div>

            <div className="mb-6">
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">Protocol Pro</p>

              {/* Plan toggle */}
              <div className="flex gap-2 mb-6">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-200 relative ${
                      selected === p.id
                        ? "bg-teal-500 text-white"
                        : "glass text-slate-400 hover:text-white"
                    }`}
                  >
                    {p.label}
                    {p.note && (
                      <span className={`absolute -top-2 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        selected === p.id ? "bg-white text-teal-600" : "bg-teal-500 text-white"
                      }`}>
                        {p.note}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-end gap-1">
                <span className="text-6xl font-bold text-white">{activePlan.price}</span>
                <span className="text-slate-400 text-lg mb-2">{activePlan.period}</span>
              </div>
              {selected === "lifetime" && (
                <p className="text-teal-400 text-sm mt-1">Pay once. Use forever.</p>
              )}
              {selected === "annual" && (
                <p className="text-teal-400 text-sm mt-1">Just $2.08/month — billed annually.</p>
              )}
              {selected === "monthly" && (
                <p className="text-slate-500 text-sm mt-1">Cancel anytime.</p>
              )}
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          Purchases processed securely through the Apple App Store. No account required.
        </motion.p>
      </div>
    </section>
  );
}
