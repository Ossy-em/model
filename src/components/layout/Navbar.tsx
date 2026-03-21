"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/models", label: "Models" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 md:px-12 py-6"
      style={{ backgroundColor: "transparent" }}
    >

      <Link href="/" className="font-display text-2xl font-light tracking-[0.25em] text-(--ink)">
        NOIR
      </Link>

      <nav className="flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-[11px] font-medium tracking-[0.2em] uppercase text-(--ink-muted) hover:text-(--ink) transition-colors duration-300"
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--ink)]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}