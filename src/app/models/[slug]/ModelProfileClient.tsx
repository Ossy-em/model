"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Model } from "@/data/models";

export default function ModelProfileClient({ model }: { model: Model }) {
  const containerRef = useRef(null);
  const sequenceRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);

  const { scrollYProgress: seqProgress } = useScroll({
    target: sequenceRef,
    offset: ["start start", "end end"],
  });

  const img0Opacity = useTransform(seqProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const img1Opacity = useTransform(seqProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const img2Opacity = useTransform(seqProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const img3Opacity = useTransform(seqProgress, [0.7, 0.75, 1], [0, 1, 1]);

  const imageOpacities = [img0Opacity, img1Opacity, img2Opacity, img3Opacity];
  const sequenceImages = model.images.slice(0, 4);

  return (
    <div style={{ backgroundColor: "var(--cream)" }}>

      <div ref={containerRef} className="relative overflow-hidden" style={{ height: "100vh" }}>
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={model.hero}
            alt={model.name}
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 70%, var(--cream) 100%)"
            }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0" style={{ padding: "3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-white/60"
            style={{ marginBottom: "0.5rem" }}
          >
            {model.origin}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl font-light text-white leading-none"
          >
            {model.name}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 right-0 flex flex-col items-center gap-2"
          style={{ padding: "3rem" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-white/40"
            style={{ height: "60px" }}
          />
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/40">
            Scroll
          </span>
        </motion.div>
      </div>

      <div ref={sequenceRef} style={{ height: "400vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {sequenceImages.map((src, i) => (
            <motion.div
              key={i}
              style={{ opacity: imageOpacities[i], position: "absolute", inset: 0 }}
            >
              <Image
                src={src}
                alt={`${model.name} look ${i + 1}`}
                fill
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--cream) 0%, transparent 40%, transparent 60%, var(--cream) 100%)",
                }}
              />
            </motion.div>
          ))}

          <div
            className="absolute inset-0 flex flex-col justify-center"
            style={{ padding: "3rem", pointerEvents: "none" }}
          >
            <p
              className="font-body text-[11px] tracking-[0.3em] uppercase text-[var(--ink-muted)]"
              style={{ marginBottom: "1rem" }}
            >
              Portfolio
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-[var(--ink)] leading-none">
              {model.name}
            </h2>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "6rem 3rem",
          borderTop: "1px solid var(--sand)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
        }}
      >
        <div>
          <p
            className="font-body text-[11px] tracking-[0.3em] uppercase text-[var(--ink-muted)]"
            style={{ marginBottom: "1.5rem" }}
          >
            About
          </p>
          <p className="font-display text-2xl font-light text-[var(--ink)] leading-relaxed">
            {model.bio}
          </p>
        </div>

        <div>
          <p
            className="font-body text-[11px] tracking-[0.3em] uppercase text-[var(--ink-muted)]"
            style={{ marginBottom: "1.5rem" }}
          >
            Measurements
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {Object.entries(model.stats).map(([key, value]) => (
              <div key={key} style={{ borderBottom: "1px solid var(--sand)", paddingBottom: "0.75rem" }}>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[var(--ink-faint)]">
                  {key}
                </p>
                <p className="font-display text-lg font-light text-[var(--ink)]" style={{ marginTop: "0.25rem" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{ padding: "0 3rem 6rem 3rem", borderTop: "1px solid var(--sand)" }}>
        <p
          className="font-body text-[11px] tracking-[0.3em] uppercase text-[var(--ink-muted)]"
          style={{ padding: "3rem 0 2rem 0" }}
        >
          Gallery
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {model.images.slice(4).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
            >
              <Image
                src={src}
                alt={`${model.name} gallery ${i + 1}`}
                fill
                className="object-cover object-top hover:scale-[1.03] transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}