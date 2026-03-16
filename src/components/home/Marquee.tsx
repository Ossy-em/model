"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-[var(--sand)]"
      style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-[13px] italic font-light tracking-[0.15em] text-(--ink-faint)"
          >
            Editorial · Campaign · Runway · African Talent · NOIR ·
          </span>
        ))}
      </motion.div>
    </div>
  );
}