"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const diffs = [
  {
    icon: "🏗️",
    title: "Privacy by Architecture",
    vs: "vs. cloud-first apps",
    description:
      "Most health apps sync your data to servers they control. Protocol's architecture makes that impossible — there are no servers to send your data to. SQLite on-device, full stop.",
    highlight: "No server. No leak.",
  },
  {
    icon: "🧬",
    title: "Peptides + Supplements + Habits",
    vs: "vs. single-purpose trackers",
    description:
      "Most trackers handle one thing. Protocol handles your entire stack — peptides with titration, supplements with unit tracking, and daily habits — all in one protocol with one schedule.",
    highlight: "Your whole stack, one app.",
  },
  {
    icon: "📈",
    title: "PK Curve Visualization",
    vs: "vs. dose logs that stop at the log",
    description:
      "Logging a dose is table stakes. Protocol shows you estimated blood concentration over time using pharmacokinetic curves — so you understand when peptides peak, overlap, and clear.",
    highlight: "See what's actually happening.",
  },
  {
    icon: "💉",
    title: "Intelligent Site Rotation",
    vs: "vs. no rotation tracking at all",
    description:
      "No other app tracks injection site rotation with a tap-anywhere 3D body map. Protocol learns your history and tells you the next best site — reducing scar tissue over time.",
    highlight: "Smart rotation, not guesswork.",
  },
  {
    icon: "📤",
    title: "Export Everything, Always",
    vs: "vs. data locked in proprietary formats",
    description:
      "Your dose logs, protocols, weight, metrics, and side effects export as standard CSV or a formatted PDF report — sharable with a provider, importable anywhere, owned by you forever.",
    highlight: "Your data is portable. Period.",
  },
  {
    icon: "🛡️",
    title: "Icon Stealth",
    vs: "vs. apps that out you on your home screen",
    description:
      "Switch between the Protocol icon and a discreet shield icon. Your home screen stays private without losing quick access. A small detail that matters when it matters.",
    highlight: "Private by default.",
  },
];

export default function Differentiators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-teal rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">Why Protocol</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Different by{" "}
            <span className="gradient-text">design.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Protocol isn&apos;t a generic health tracker with peptides bolted on.
            Every decision was made for the serious self-experimenter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-teal-500/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-1">{d.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-white font-bold text-lg">{d.title}</h3>
                    <span className="text-xs text-slate-500 font-medium">{d.vs}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{d.description}</p>
                  <div className="inline-flex items-center gap-1.5 glass-teal rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="text-teal-400 text-xs font-semibold">{d.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
