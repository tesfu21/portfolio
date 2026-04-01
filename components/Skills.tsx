"use client";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "ASP.NET", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML / CSS"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "XAMPP"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "Project Management", "IT Operations"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border2)",
      }}
    >
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Skills</p>
        <h2 className="sec-title">
          Tech <em>Stack</em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              padding: "1.75rem",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border2)")
            }
          >
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.65rem",
                color: "var(--gold)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
                paddingBottom: "0.8rem",
                borderBottom: "1px solid var(--border2)",
              }}
            >
              {cat.title}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.3rem 0.85rem",
                    background: "var(--bg3)",
                    border: "1px solid var(--border2)",
                    color: "var(--text2)",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    cursor: "default",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--gold)";
                    el.style.color = "var(--gold)";
                    el.style.background = "rgba(201,162,82,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border2)";
                    el.style.color = "var(--text2)";
                    el.style.background = "var(--bg3)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
