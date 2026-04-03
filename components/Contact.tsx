"use client";
import { useState } from "react";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const contactLinks = [
  { label: "tesfahun21aschalew@gmail.com", href: "mailto:tesfahun21aschalew@gmail.com", Icon: EmailIcon },
  { label: "github.com/tesfu21", href: "https://github.com/tesfu21", Icon: GitHubIcon },
  { label: "linkedin.com/in/tesfahun-aschalew", href: "https://www.linkedin.com/in/tesfahun-aschalew-7b411a223", Icon: LinkedInIcon },
  { label: "Addis Ababa, Ethiopia", href: "#", Icon: LocationIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid var(--border2)" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Contact</p>
        <h2 className="sec-title">Let&apos;s <em>Connect</em></h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "start" }}>

        {/* ── Left: Info ── */}
        <div>
          <p style={{ color: "var(--text2)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            Whether you have a project idea, a job opportunity, or just want to
            connect — my inbox is always open.
          </p>

          {contactLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                color: "var(--text2)",
                textDecoration: "none",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                padding: "0.85rem 0",
                borderBottom: "1px solid var(--border2)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text2)")}
            >
              {/* Icon box */}
              <span style={{
                width: 32, height: 32, flexShrink: 0,
                border: "1px solid var(--border2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--gold)",
              }}>
                <Icon />
              </span>
              {label}
            </a>
          ))}

          {/* Social icon buttons */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
            {[
              { href: "https://github.com/tesfu21", Icon: GitHubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/tesfahun-aschalew-7b411a223", Icon: LinkedInIcon, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 40, height: 40,
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text2)", textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,162,82,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
          ].map((field) => (
            <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {field.label}
              </label>
              <input
                className="form-input"
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Message
            </label>
            <textarea
              className="form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
              style={{ height: 130, resize: "none" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary"
            style={{ alignSelf: "flex-start", border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1 }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p style={{ color: "#4ade80", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.72rem" }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#f87171", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.72rem" }}>
              Something went wrong. Please try emailing me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}