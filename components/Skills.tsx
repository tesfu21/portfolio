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
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "Project Management", "IT Operations"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-inner">
      <div className="section-head">
        <p className="sec-tag">Skills</p>
        <h2 className="sec-title">
          Tech <em>Stack</em>
        </h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <p className="skill-category">{cat.title}</p>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
