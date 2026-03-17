"use client";

import { motion } from "framer-motion";

const words = "We believe the most compelling faces are the ones that carry a world within them.".split(" ");

export default function Statement() {
  return (
    <section
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        borderTop: "1px solid var(--sand)",
      }}
    >
      <motion.p
        className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.3] max-w-4xl"
        aria-label="We believe the most compelling faces are the ones that carry a world within them."
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.04,
              duration: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
            style={{ marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="font-body text-[11px] tracking-[0.25em] uppercase text-[var(--ink-muted)]"
        style={{ marginTop: "1.5rem" }}
      >
        — NOIR
      </motion.p>
    </section>
  );
}