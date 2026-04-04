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
 //  THIS IS SECOND PROJECT:
  {
    title: "Personal Portfolio Website",
    problem: "No public presence to showcase skills and experience",
    description:
      "Designed and built this portfolio website from scratch to showcase my experience, skills, and projects. Features a dark prestige theme with gold accents, light/dark mode toggle, responsive mobile layout, animated sections, a working contact form via Nodemailer, and PostgreSQL database via Supabase. Deployed on Vercel with CI/CD from GitHub.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "PostgreSQL", "Supabase", "Vercel"],
    isPublic: true,
    demoUrl: "https://tesfahun-dev-portfolio.vercel.app",
    githubUrl: "https://github.com/tesfu21/portfolio",
    category: "Personal Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-inner">
      <div className="section-head" style={{ marginBottom: "4rem" }}>
        <p className="sec-tag">Projects</p>
        <h2 className="sec-title">Selected <em>Work</em></h2>
      </div>
      <div className="projects-list">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="project-card"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border2)")}
          >
            {/* Left panel */}
            <div className="project-left">
              <div>
                <p className="proj-index">{String(i + 1).padStart(2, "0")}</p>
                <span className="proj-category">{project.category}</span>
                <p className="proj-problem">&ldquo;{project.problem}&rdquo;</p>
              </div>
              <div className="proj-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="proj-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="project-right">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <h3>{project.title}</h3>
                  {!project.isPublic && (<span className="proj-internal">Internal</span>)}
                </div>
                <p>{project.description}</p>
              </div>
              <div className="project-actions">
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary proj-action">Live Demo</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline proj-action">GitHub</a>}
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
        <div className="more-projects">
          <p>More projects coming soon</p>
          <p>Local and personal projects being prepared</p>
        </div>
      </div>
    </section>
  );
}


