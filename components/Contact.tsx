"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <section
      id="contact"
      style={{
        padding: "7rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border2)",
      }}
    >
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Contact</p>
        <h2 className="sec-title">
          Let&apos;s <em>Connect</em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Info */}
        <div>
          <p style={{ color: "var(--text2)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            Whether you have a project idea, a job opportunity, or just want to
            connect — my inbox is always open.
          </p>

          {[
            { label: "tesfahun21aschalew@gmail.com", href: "mailto:tesfahun21aschalew@gmail.com" },
            { label: "github.com/tesfu21", href: "https://github.com/tesfu21" },
            { label: "phone: +251 940 52 81 27", href: "tel:+251940528127" },
            { label: "Addis Ababa, Ethiopia", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "var(--text2)",
                textDecoration: "none",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border2)",
                transition: "color 0.3s",
                marginBottom: "0.25rem",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text2)")
              }
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--gold)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {item.label}
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
          ].map((field) => (
            <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.62rem",
                  color: "var(--text3)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
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
            <label
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                color: "var(--text3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
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
