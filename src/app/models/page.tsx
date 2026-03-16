"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { models } from "@/data/models";

export default function ModelsPage() {
  return (
    <div style={{ backgroundColor: "var(--cream)", paddingTop: "8rem" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--sand)",
        }}
      >
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-(--ink-muted)" style={{ marginBottom: "1rem" }}>
          The Roster
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-(--ink)">
          Models
        </h1>
      </motion.div>

      {/* Editorial list */}
      <div>
        {models.map((model, i) => (
          <motion.div
            key={model.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Link
              href={`/models/${model.slug}`}
              className="group block"
              style={{ borderBottom: "1px solid var(--sand)" }}
            >
              <div
                className="grid md:grid-cols-[1fr_320px]"
                style={{ minHeight: "280px" }}
              >
                {/* Left — text */}
                <div
                  className="flex flex-col justify-between"
                  style={{
                    padding: "3rem",
                    borderRight: "1px solid var(--sand)",
                  }}
                >
                  <div>
                    {/* Index number */}
                    <p
                      className="font-body text-[11px] tracking-[0.2em] text-(--ink-faint)"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    {/* Name — slides right on hover */}
                    <motion.h2
                      className="font-display text-4xl md:text-6xl font-light text-(--ink) leading-none"
                      whileHover={{ x: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      {model.name}
                    </motion.h2>

                    <p
                      className="font-body text-[12px] tracking-[0.15em] uppercase text-(--ink-muted)"
                      style={{ marginTop: "1rem" }}
                    >
                      {model.origin}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2" style={{ marginTop: "2rem" }}>
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[10px] tracking-[0.2em] uppercase text-(--ink-faint)"
                        style={{
                          border: "1px solid var(--ink-faint)",
                          padding: "4px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — image */}
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <Image
                    src={model.cover}
                    alt={model.name}
                    fill
                    className="object-cover object-top"
                    style={{
                      filter: "grayscale(20%)",
                      transition: "transform 0.7s ease, filter 0.5s ease",
                    }}
                  />
                  {/* On hover — color comes back, image zooms */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ backgroundColor: "transparent" }}
                  />
                  <div
                    className="absolute inset-0 group-hover:opacity-0 transition-all duration-500"
                    style={{
                      background: "linear-gradient(to right, var(--cream) 0%, transparent 40%)",
                    }}
                  />

                  {/* View label */}
                  <div
                    className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: "1rem" }}
                  >
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white bg-[var(--ink)] px-3 py-1.5">
                      View Profile →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
}