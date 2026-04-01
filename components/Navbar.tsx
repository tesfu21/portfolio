"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.25rem 4rem",
        background: "rgba(var(--bg-rgb), 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border2)",
      }}>
        {/* Logo */}
        <Link href="#hero" style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.3rem", fontWeight: 500,
          color: "var(--gold)", letterSpacing: "0.05em", textDecoration: "none",
        }}>
          T.A.T
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0 }} className="nav-desktop">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.7rem", color: "var(--text2)",
                textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase",
                transition: "color 0.3s",
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text2)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            background: "none", border: "1px solid var(--border)",
            color: "var(--gold)", cursor: "pointer",
            width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.3s",
            flexShrink: 0,
          }}>
            {theme === "dark" ? (
              // Moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              // Sun icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          {/* Hamburger — only visible on mobile */}
          <button onClick={toggleMenu} aria-label="Toggle menu" className="hamburger" style={{
            background: "none", border: "1px solid var(--border)",
            color: "var(--gold)", cursor: "pointer",
            width: 36, height: 36, display: "none", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 5,
            transition: "border-color 0.3s",
          }}>
            <span style={{ display: "block", width: 16, height: 1, background: "var(--gold)", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: 16, height: 1, background: "var(--gold)", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 16, height: 1, background: "var(--gold)", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div className="mobile-menu" style={{
        position: "fixed", top: "73px", left: 0, right: 0, zIndex: 99,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border2)",
        display: "flex", flexDirection: "column",
        maxHeight: menuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu} style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.75rem", color: "var(--text2)",
            textDecoration: "none", letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "1.1rem 2rem",
            borderBottom: "1px solid var(--border2)",
            transition: "color 0.2s, background 0.2s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text2)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}