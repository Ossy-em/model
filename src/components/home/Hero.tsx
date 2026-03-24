"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen grid md:grid-cols-[1fr_1fr] overflow-hidden"
    >

      <div className="flex flex-col justify-end px-8 md:px-12 pb-16 pt-32 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-(--ink-muted)"
          >
            African Editorial Talent
          </motion.p>

          <motion.h1
            variants={stagger}
            initial="hidden"
            animate="show"
            className="font-display text-[18vw] md:text-[12vw] font-light leading-none tracking-tight text-(--ink)"
            aria-label="NOIR"
          >
            <SplitText text="NOIR" />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-[13px] text-(--ink-muted) max-w-[300px] leading-relaxed"
          >
            A curated directory of Africa's most compelling editorial faces.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/models"
              className="inline-flex items-center gap-3 font-body text-[12px] tracking-[0.2em] uppercase text-(--ink) border-b border-(--ink) pb-0.5 hover:gap-5 transition-all duration-300"
            >
              View Models
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative h-[60vh] md:h-screen overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/01.jpg"
            alt="NOIR editorial"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, var(--cream) 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}