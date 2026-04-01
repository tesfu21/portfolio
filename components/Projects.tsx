"use client";

type Project = {
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPublic: boolean;
  category: string;
};

const projects: Project[] = [
  {
    title: "Branch Contact Management System",
    problem: "200+ bank branches, no central contact directory",
    description:
      "Global Bank of Ethiopia has over 200 branches. The Core Banking IT team needed branch contact info every day to follow up on end-of-day transaction completion — but contacts were scattered across Excel files and other departments. Built an internal web system that lets IT staff instantly search, add, update,Delete and manage branch contacts and phone numbers under each branch — replacing the manual Excel process entirely.",
    techStack: ["ASP.NET", "Bootstrap", "Postgres Database"],
    isPublic: false,
    category: "Internal Tool · GBE",
  },
  // ← Add more projects here when ready
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid var(--border2)" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Projects</p>
        <h2 className="sec-title">Selected <em>Work</em></h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{ background: "var(--bg2)", border: "1px solid var(--border2)", display: "grid", gridTemplateColumns: "1fr 2fr", transition: "border-color 0.3s", overflow: "hidden" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border2)")}
          >
            {/* Left panel */}
            <div style={{ padding: "2.5rem 2rem", borderRight: "1px solid var(--border2)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "var(--bg3)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "3.5rem", fontWeight: 300, color: "var(--border)", lineHeight: 1, marginBottom: "1.5rem", userSelect: "none" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span style={{ display: "inline-block", padding: "0.25rem 0.8rem", border: "1px solid var(--border)", color: "var(--gold)", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                  {project.category}
                </span>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem", fontStyle: "italic", color: "var(--text2)", lineHeight: 1.6 }}>
                  &ldquo;{project.problem}&rdquo;
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "2rem" }}>
                {project.techStack.map((tech) => (
                  <span key={tech} style={{ padding: "0.25rem 0.7rem", background: "var(--bg2)", border: "1px solid var(--border2)", color: "var(--text3)", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.8rem", fontWeight: 400, color: "var(--text)", lineHeight: 1.2 }}>
                    {project.title}
                  </h3>
                  {!project.isPublic && (
                    <span style={{ padding: "0.2rem 0.7rem", border: "1px solid var(--border2)", color: "var(--text3)", fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0, marginLeft: "1rem", marginTop: "0.3rem" }}>
                      Internal
                    </span>
                  )}
                </div>
                <p style={{ color: "var(--text2)", fontSize: "0.97rem", lineHeight: 1.85 }}>
                  {project.description}
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.62rem", padding: "0.6rem 1.2rem" }}>Live Demo</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.62rem", padding: "0.6rem 1.2rem" }}>GitHub</a>}
                {!project.demoUrl && !project.githubUrl && (
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: 5, height: 5, background: "var(--text3)", transform: "rotate(45deg)", display: "inline-block" }} />
                    Deployed internally at Global Bank of Ethiopia
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* More coming soon */}
        <div style={{ background: "var(--bg2)", border: "1px dashed var(--border)", padding: "3rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", color: "var(--text2)", fontWeight: 300, marginBottom: "0.5rem" }}>More projects coming soon</p>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem", color: "var(--text3)", letterSpacing: "0.08em" }}>Local and personal projects being prepared</p>
        </div>
      </div>
    </section>
  );
}


