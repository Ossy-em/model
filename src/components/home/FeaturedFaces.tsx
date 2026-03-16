"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "/images/01.jpg", href: "/models/amara-diallo", name: "Amara Diallo", rotate: -6, x: "0%", y: "0%", scale: 1, zIndex: 1 },
  { src: "/images/02.jpg", href: "/models/amara-diallo", name: "Amara Diallo", rotate: 4, x: "18%", y: "-8%", scale: 0.92, zIndex: 3 },
  { src: "/images/03.jpg", href: "/models/zola-mensah", name: "Zola Mensah", rotate: -3, x: "38%", y: "5%", scale: 0.98, zIndex: 2 },
  { src: "/images/04.jpg", href: "/models/zola-mensah", name: "Zola Mensah", rotate: 7, x: "58%", y: "-6%", scale: 0.94, zIndex: 4 },
  { src: "/images/05.jpg", href: "/models/nadia-osei", name: "Nadia Osei", rotate: -5, x: "76%", y: "2%", scale: 1, zIndex: 2 },
  { src: "/images/06.jpg", href: "/models/amara-diallo", name: "Amara Diallo", rotate: 3, x: "8%", y: "55%", scale: 0.96, zIndex: 3 },
  { src: "/images/07.jpg", href: "/models/zola-mensah", name: "Zola Mensah", rotate: -8, x: "28%", y: "60%", scale: 0.9, zIndex: 1 },
  { src: "/images/08.jpg", href: "/models/nadia-osei", name: "Nadia Osei", rotate: 5, x: "48%", y: "52%", scale: 0.97, zIndex: 4 },
  { src: "/images/09.jpg", href: "/models/nadia-osei", name: "Nadia Osei", rotate: -4, x: "66%", y: "58%", scale: 0.93, zIndex: 2 },
  { src: "/images/10.jpg", href: "/models/amara-diallo", name: "Amara Diallo", rotate: 6, x: "84%", y: "50%", scale: 0.95, zIndex: 3 },
];

export default function FeaturedFaces() {
  return (
    <section
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between"
        style={{ marginBottom: "4rem" }}
      >
        <h2 className="font-display text-4xl md:text-5xl font-light text-(--ink)">
          Featured Faces
        </h2>
        <Link
          href="/models"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-(--ink-muted) hover:text-(--ink) transition-colors border-b border-(--ink-faint) pb-0.5"
        >
          All Models
        </Link>
      </motion.div>

      {/* Scattered layout */}
      <div
        style={{
          position: "relative",
          height: "900px",
        }}
      >
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85, rotate: photo.rotate - 5 }}
            whileInView={{ opacity: 1, scale: photo.scale, rotate: photo.rotate }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.07,
              duration: 0.7,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            whileHover={{
              rotate: 0,
              scale: 1.06,
              zIndex: 20,
              transition: { duration: 0.3 },
            }}
            style={{
              position: "absolute",
              left: photo.x,
              top: photo.y,
              zIndex: photo.zIndex,
              width: "200px",
            }}
          >
            <Link href={photo.href} className="block group">
              {/* Polaroid frame */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "8px 8px 28px 8px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
                  <Image
                    src={photo.src}
                    alt={photo.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Polaroid caption */}
                <p
                  className="font-display text-[11px] font-light text-center"
                  style={{
                    color: "var(--ink-muted)",
                    marginTop: "6px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {photo.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}