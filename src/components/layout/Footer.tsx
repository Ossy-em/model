export default function Footer() {
  return (
    <footer className="px-8 md:px-12 py-8 flex items-center justify-between border-t border-[var(--sand)]">
      <span className="font-display text-sm font-light tracking-[0.2em] text-[var(--ink-muted)]">
        NOIR
      </span>
      <span className="font-body text-[11px] text-[var(--ink-faint)] tracking-wider uppercase">
        African Editorial Talent
      </span>
      <span className="font-body text-[11px] text-[var(--ink-faint)]">
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}