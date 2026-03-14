"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "@/components/ui/TiltCard";




const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
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

export default function HomePage() {
  const heroRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});
const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <div style={{ backgroundColor: "var(--cream)" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen grid md:grid-cols-[1fr_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 md:px-12 pb-16 pt-32 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-[11px] tracking-[0.3em] uppercase text-[var(--ink-muted)]"
            >
              African Editorial Talent
            </motion.p>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="font-display text-[18vw] md:text-[12vw] font-light leading-none tracking-tight text-[var(--ink)]"
              aria-label="NOIR"
            >
              <SplitText text="NOIR" />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-[13px] text-[var(--ink-muted)] max-w-[300px] leading-relaxed"
            >
              A curated directory of Africa's most compelling editorial faces.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/models"
                className="inline-flex items-center gap-3 font-body text-[12px] tracking-[0.2em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:gap-5 transition-all duration-300"
              >
                View Models
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

      <motion.div
  ref={heroRef}
  style={{ y: heroY }}
  initial={{ opacity: 0, scale: 1.04 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
  className="relative h-[60vh] md:h-screen"
>
          <Image
            src="/images/01.jpg"
            alt="NOIR editorial"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 60%, var(--cream) 100%)" }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
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
              className="font-display text-[13px] italic font-light tracking-[0.15em] text-[var(--ink-faint)]"
            >
              Editorial · Campaign · Runway · African Talent · NOIR ·
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── FEATURED ── */}
      <section style={{ paddingTop: "8rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
        <div className="flex items-end justify-between" style={{ marginBottom: "3rem" }}>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--ink)]">
            Featured Faces
          </h2>
          <Link
            href="/models"
            className="font-body text-[11px] tracking-[0.2em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors border-b border-[var(--ink-faint)] pb-0.5"
          >
            All Models
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          style={{ gridTemplateRows: "400px 400px" }}
        >
          {/* Large card */}
          <TiltCard
            className="col-span-2 md:col-span-1 md:row-span-2"
            style={{ aspectRatio: "3/4", position: "relative" }}
          >
            <Link
              href="/models/amara-diallo"
              className="group block absolute inset-0 overflow-hidden"
            >
              <Image
                src="/images/02.jpg"
                alt="Amara Diallo"
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-display text-xl text-white font-light">Amara Diallo</p>
                <p className="font-body text-[11px] text-white/60 tracking-widest uppercase mt-0.5">Dakar, Senegal</p>
              </div>
            </Link>
          </TiltCard>

          {/* Small card 1 */}
          <TiltCard style={{ position: "relative" }}>
            <Link
              href="/models/zola-mensah"
              className="group block absolute inset-0 overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/05.jpg"
                alt="Zola Mensah"
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-display text-lg text-white font-light">Zola Mensah</p>
                <p className="font-body text-[10px] text-white/60 tracking-widest uppercase mt-0.5">Accra, Ghana</p>
              </div>
            </Link>
          </TiltCard>

          {/* Small card 2 */}
          <TiltCard style={{ position: "relative" }}>
            <Link
              href="/models/nadia-osei"
              className="group block absolute inset-0 overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/08.jpg"
                alt="Nadia Osei"
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-display text-lg text-white font-light">Nadia Osei</p>
                <p className="font-body text-[10px] text-white/60 tracking-widest uppercase mt-0.5">Lagos, Nigeria</p>
              </div>
            </Link>
          </TiltCard>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section
        style={{
          // paddingTop: "4rem",
          paddingBottom: "8rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          borderTop: "1px solid var(--sand)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.3] max-w-4xl"
        >
          "We believe the most compelling faces
          are the ones that carry a world within them."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-body text-[11px] tracking-[0.25em] uppercase text-[var(--ink-muted)]"
          style={{ marginTop: "1.5rem" }}
        >
          — NOIR
        </motion.p>
      </section>

      {/* ── FULL BLEED IMAGE ── */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <Image
          src="/images/03.jpg"
          alt="NOIR editorial"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--cream) 0%, transparent 30%, transparent 70%, var(--cream) 100%)",
          }}
        />
      </section>

    </div>
  );
}