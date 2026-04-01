"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      style={{
        padding: "7rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border2)",
      }}
    >
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">About Me</p>
        <h2 className="sec-title">
          Developer with a <em>Banking</em> Mindset
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* ── Left: Photo ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
            {/* Gold corner accents */}
            {[
              { top: -8, left: -8, borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" },
              { top: -8, right: -8, borderTop: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" },
              { bottom: -8, left: -8, borderBottom: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" },
              { bottom: -8, right: -8, borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" },
            ].map((style, i) => (
              <div key={i} style={{ position: "absolute", width: 28, height: 28, zIndex: 2, ...style }} />
            ))}

            {/* Offset shadow block */}
            <div style={{ position: "absolute", top: 12, left: 12, right: -12, bottom: -12, background: "var(--bg3)", border: "1px solid var(--border2)", zIndex: 0 }} />

            {/* Photo or Placeholder */}
            <div style={{ position: "relative", width: "100%", height: "100%", background: "var(--bg2)", border: "1px solid var(--border)", overflow: "hidden", zIndex: 1 }}>
              {!imgError ? (
                <Image
                  src="/profile.jpg"
                  alt="Tesfahun Aschalew Tsegaye"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.2rem", background: "var(--bg2)" }}>
                  <div style={{ width: 90, height: 90, borderRadius: "50%", border: "2px solid var(--border)", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="14" r="8" stroke="#c9a252" strokeWidth="1.5" fill="none"/>
                      <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#c9a252" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem", color: "var(--text2)", marginBottom: "0.4rem" }}>
                      Tesfahun Aschalew
                    </p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.6 }}>
                      Add your photo as<br />
                      <span style={{ color: "var(--gold)" }}>public/profile.jpg</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* about me */}
          <div style={{ padding: "1rem 1.25rem", background: "var(--bg2)", border: "1px solid var(--border2)", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.2rem" }}>
              Tesfahun Aschalew Tsegaye
            </p>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              IT Officer · Global Bank of Ethiopia
            </p>
          </div>
        </div>

        {/* ── Right: Text + Info Card ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div>
            {[
              <>I am <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Tesfahun Aschalew Tsegaye</strong>, a full-stack web developer and IT professional currently working at <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Global Bank of Ethiopia</strong> in the IT Application &amp; Project Management Office.</>,
              <>Since joining the bank in June 2023, I have moved through multiple technical domains — from <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Digital Banking</strong> to <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Core Banking Systems</strong>, and now into <strong style={{ color: "var(--gold)", fontWeight: 500 }}>IT project and application management</strong> — giving me a uniquely broad perspective on how enterprise systems are built, deployed, and maintained.</>,
              <>I build with <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Node.js, ASP.NET, React, and Next.js</strong> on the backend and frontend, with solid experience managing both SQL and NoSQL databases. I bring both developer discipline and project thinking to every problem I work on.</>,
            ].map((text, i) => (
              <p key={i} style={{ color: "var(--text2)", marginBottom: "1.2rem", fontSize: "1.02rem", lineHeight: 1.85 }}>
                {text}
              </p>
            ))}
          </div>

          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", padding: "2rem", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "var(--gold)" }} />
            {[
              { label: "Current Position", value: "IT Application & Project Management Office", sub: "IT Officer" },
              { label: "Organization", value: "Global Bank of Ethiopia" },
              { label: "Started", value: "June 5, 2023" },
              { label: "Focus", value: "Full-Stack Development", sub: "· Project Management" },
            ].map((item, i) => (
              <div key={item.label}>
                {i !== 0 && <hr style={{ border: "none", borderTop: "1px solid var(--border2)", margin: "1.2rem 0" }} />}
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", color: "var(--text)" }}>
                  {item.value}{" "}{item.sub && <span style={{ color: "var(--text2)", fontSize: "0.9rem" }}>{item.sub}</span>}
                </p>
              </div>
            ))}
            <hr style={{ border: "none", borderTop: "1px solid var(--border2)", margin: "1.2rem 0" }} />
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>GitHub</p>
            <a href="https://github.com/tesfu21" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.8rem" }}>
              github.com/tesfu21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}