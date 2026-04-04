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
    <section id="experience" className="section section-inner">
      <div className="section-head">
        <p className="sec-tag">Experience</p>
        <h2 className="sec-title">Career <em>Timeline</em></h2>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <p className="timeline-period">{exp.period}</p>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-org">{exp.org}</p>
            <p className="timeline-desc">{exp.description}</p>
            <span className="timeline-badge" style={{ background: exp.current ? "rgba(201,162,82,0.1)" : "transparent", borderColor: exp.current ? "var(--gold)" : "var(--border)" }}>
              {exp.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
