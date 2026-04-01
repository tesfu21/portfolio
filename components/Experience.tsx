const experiences = [
  {
    period: "May 2025 — Present",
    role: "IT Application & Project Management Officer",
    org: "Global Bank of Ethiopia · Addis Ababa, Ethiopia",
    description:
      "Managing enterprise IT applications and overseeing project delivery within the bank's IT department. Responsible for coordinating application lifecycles, supporting system implementations, and ensuring project milestones are met on time and within scope.",
    badge: "Current Role",
    current: true,
  },
  {
    period: "January 2024 — May 2025 · ~1–4months",
    role: "Core Banking System Support In flexcube and  oracle database",
    org: "Global Bank of Ethiopia · Addis Ababa, Ethiopia",
    description:
      "Worked within the Core Banking it support division supporting the bank's primary transaction and account management infrastructure. Gained exposure to mission-critical banking systems, data integrity practices, and enterprise-level software reliability requirements.",
    badge: "Core Banking",
    current: false,
  },
  {
    period: "June 5, 2023 · 7 months",
    role: "Junior Digital Banking Officer",
    org: "Global Bank of Ethiopia · Addis Ababa, Ethiopia",
    description:
      "Digital banking operations and entry-level support. Assisted in the management of digital channels, customer support for online banking services, and contributed to the development of digital banking initiatives. This role provided foundational experience in the banking sector and digital financial services.",
    badge: "First Role · GBE",
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "7rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border2)",
      }}
    >
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Experience</p>
        <h2 className="sec-title">
          Career <em>Timeline</em>
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background:
              "linear-gradient(to bottom, var(--gold), var(--gold-dim), transparent)",
          }}
        />

        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              paddingLeft: "2.5rem",
              paddingBottom: i < experiences.length - 1 ? "3.5rem" : 0,
            }}
          >
            {/* diamond dot */}
            <div
              style={{
                position: "absolute",
                left: -4.5,
                top: 6,
                width: 10,
                height: 10,
                border: "1px solid var(--gold)",
                background: "var(--bg)",
                transform: "rotate(45deg)",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.65rem",
                color: "var(--gold)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              {exp.period}
            </p>

            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "0.2rem",
              }}
            >
              {exp.role}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                color: "var(--text2)",
                marginBottom: "0.9rem",
              }}
            >
              {exp.org}
            </p>

            <p
              style={{
                color: "var(--text2)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: 600,
              }}
            >
              {exp.description}
            </p>

            <span
              style={{
                display: "inline-block",
                marginTop: "0.8rem",
                padding: "0.25rem 0.8rem",
                border: "1px solid var(--border)",
                background: exp.current ? "rgba(201,162,82,0.1)" : "transparent",
                borderColor: exp.current ? "var(--gold)" : "var(--border)",
                color: "var(--gold)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {exp.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
