import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10rem 4rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Tag */}
      <p
        className="fade-in"
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.7rem",
          color: "var(--gold)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          animationDelay: "0.1s",
        }}
      >
        <span
          style={{
            display: "block",
            width: 40,
            height: 1,
            background: "var(--gold)",
          }}
        />
        Full-stack developer · IT &amp; Project Management Expert
      </p>

      {/* Name */}
      <h1
        className="fade-in"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(3.5rem, 8vw, 7rem)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "var(--text)",
          marginBottom: "0.25rem",
          animationDelay: "0.25s",
        }}
      >
        Tesfahun
        <br />
        <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Aschalew</em>
      </h1>

      {/* Subtitle */}
      <p
        className="fade-in"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--text2)",
          marginBottom: "2rem",
          animationDelay: "0.4s",
        }}
      >
        Building Systems. Managing Projects. Delivering Value.
      </p>

      {/* Description */}
      <p
        className="fade-in"
        style={{
          maxWidth: 560,
          fontSize: "1rem",
          color: "var(--text2)",
          lineHeight: 1.8,
          marginBottom: "3rem",
          animationDelay: "0.55s",
        }}
      >
        Full-stack developer and IT project professional at Global Bank of
        Ethiopia, with experience spanning digital banking, core banking
        systems, and enterprise application management.
      </p>

      {/* Buttons */}
      <div
        className="fade-in"
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animationDelay: "0.7s" }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a
          href="https://github.com/tesfu21"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          GitHub Profile
        </a>
        
        <a href="#contact" className="btn-outline">
          Get In Touch
        </a>
      </div>

      {/* Stats */}
      <div
        className="fade-in"
        style={{
          display: "flex",
          gap: "3rem",
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border2)",
          animationDelay: "0.85s",
        }}
      >
        {[
          { num: "2+", label: "Years at GBE" },
          { num: "3", label: "Roles Held" },
          { num: "6+", label: "Tech Skills" },
        ].map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2.2rem",
                fontWeight: 400,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {stat.num}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.65rem",
                color: "var(--text3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "0.4rem",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
