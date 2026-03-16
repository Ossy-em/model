"use client";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedFaces from "@/components/home/FeaturedFaces";
import Statement from "@/components/home/Statement";
import FullBleedImage from "@/components/home/FullBleedImage";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--cream)" }}>
      <Hero />
      <Marquee />
      <FeaturedFaces />
      <Statement />
      <FullBleedImage />
    </div>
  );
}