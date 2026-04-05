"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    emoji: "🔬",
    title: "Track Every Dose",
    description:
      "Build multi-peptide protocols with flexible scheduling — daily, twice daily, every X days, or specific days. Log peptides, supplements, and habits together. Track titration schedules and on/off cycles.",
    color: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/20",
    tag: "Dose Logging",
  },
  {
    emoji: "💉",
    title: "Own Your Rotation",
    description:
      "Tap anywhere on the 3D body map to mark injection sites. Protocol learns your rotation history and suggests the next best site — reducing scar tissue and keeping your protocol optimal.",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    tag: "Body Map",
  },
  {
    emoji: "📊",
    title: "See Your Progress",
    description:
      "Visualize blood concentration with PK curves. Track your 89-day streak, adherence rates, weight milestones, and earn achievements for dose milestones and consistency.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    tag: "Analytics",
  },
  {
    emoji: "🔒",
    title: "Your Data Stays Yours",
    description:
      "No accounts. No cloud sync. No third parties. Everything lives on your device. Export everything as CSV or PDF — dose logs, protocols, weight, metrics, and more. Your data, forever.",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    tag: "Privacy First",
  },
  {
    emoji: "⚗️",
    title: "Reconstitution Calculator",
    description:
      "Built-in syringe draw guide calculates exact units for any dose. Enter peptide mass, water volume, and desired dose — Protocol shows you precisely where to draw on a 100 or 50-unit syringe.",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    tag: "Calculator",
  },
  {
    emoji: "📦",
    title: "Inventory Management",
    description:
      "Track vials, remaining amounts, batch numbers, expiration dates, and vendor details. Low-stock alerts keep you from running out mid-cycle. Never lose track of what you have.",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20",
    tag: "Inventory",
  },
  {
    emoji: "⌚",
    title: "Apple Watch Companion",
    description:
      "Log doses, check active levels, and complete daily check-ins directly from your wrist. Today's schedule, Quick Log, and complications on your watch face — all synced offline-first.",
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    tag: "Pro",
  },
  {
    emoji: "❤️",
    title: "Apple Health Integration",
    description:
      "Protocol writes your weight, body measurements, and mindfulness sessions to Apple Health automatically. Reads your sleep and heart rate to pre-fill your daily check-in.",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/20",
    tag: "Pro",
  },
  {
    emoji: "🤖",
    title: "AI Research Assistant",
    description:
      "Ask anything about your compounds — half-lives, interactions, dosing windows, side effects. Grounded in research, context-aware of your active stack. 50 queries/month included with Pro.",
    color: "from-teal-500/20 to-emerald-600/5",
    border: "border-teal-500/20",
    tag: "Pro",
  },
  {
    emoji: "🧬",
    title: "AI Stack Builder",
    description:
      "Describe your goal — fat loss, recovery, longevity — and the AI builds a complete protocol with compounds, doses, and schedules. Review, edit, and activate it in one tap.",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    tag: "Pro",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">Everything you need</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for serious{" "}
            <span className="gradient-text">biohackers.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Every feature designed around precision, privacy, and the reality of running a peptide protocol.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} group hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{f.emoji}</span>
                <span className="glass rounded-full px-3 py-1 text-xs text-slate-400 font-medium">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
