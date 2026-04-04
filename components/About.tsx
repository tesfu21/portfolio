"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section section-inner">
      <div className="section-head">
        <p className="sec-tag">About Me</p>
        <h2 className="sec-title">
         Full-Stack <em>Developer</em>
        </h2>
      </div>
      <div className="about-grid">
        {/* ── Left: Photo ── */}
        <div className="about-left">
          <div className="photo-frame">
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
            <div className="photo-offset" />

            {/* Photo or Placeholder */}
            <div className="photo-inner">
              {!imgError ? (
                <Image src="/profile.png" alt="Tesfahun Aschalew Tsegaye" fill style={{ objectFit: "cover", objectPosition: "center top" }} onError={() => setImgError(true)} priority />
              ) : (
                <div className="profile-placeholder">
                  <div style={{ width: 90, height: 90, borderRadius: "50%", border: "2px solid var(--border)", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="14" r="8" stroke="#c9a252" strokeWidth="1.5" fill="none"/>
                      <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#c9a252" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                    <p className="name">Tesfahun Aschalew</p>
                    <p className="hint">Add your photo as<br /><span style={{ color: "var(--gold)" }}>public/profile.png</span></p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* about me */}
          <div className="about-card">
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.2rem" }}>Tesfahun Aschalew Tsegaye</p>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>IT Officer · Global Bank of Ethiopia</p>
          </div>
        </div>

        {/* ── Right: Text + Info Card ── */}
        <div className="about-right">
          <div>
            {[
              <>I am <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Tesfahun Aschalew Tsegaye</strong>, a full-stack web developer and IT professional currently working at <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Global Bank of Ethiopia</strong> in the IT Application &amp; Project Management Office.</>,
              <>Since joining the bank in June 2023, I have moved through multiple technical domains — from <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Digital Banking</strong> to <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Core Banking Systems</strong>, and now into <strong style={{ color: "var(--gold)", fontWeight: 500 }}>IT project and application management</strong> — giving me a uniquely broad perspective on how enterprise systems are built, deployed, and maintained.</>,
              <>I build with <strong style={{ color: "var(--gold)", fontWeight: 500 }}>Node.js, ASP.NET, React, and Next.js</strong> on the backend and frontend, with solid experience managing both SQL and NoSQL databases. I bring both developer discipline and project thinking to every problem I work on.</>,
            ].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="info-card">
            <div className="accent" />
            {[
              { label: "Current Position", value: "IT Application & Project Management Office", sub: "IT Officer" },
              { label: "Organization", value: "Global Bank of Ethiopia" },
              { label: "Started", value: "June 5, 2023" },
              { label: "Focus", value: "Full-Stack Development", sub: "· Project Management" },
            ].map((item, i) => (
              <div className="info-item" key={item.label}>
                <p className="info-label">{item.label}</p>
                <p className="info-value">{item.value} {item.sub && <span className="muted">{item.sub}</span>}</p>
              </div>
            ))}
            <div className="info-item">
              <p className="info-label">GitHub</p>
              <a href="https://github.com/tesfu21" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.8rem" }}>github.com/tesfu21</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}