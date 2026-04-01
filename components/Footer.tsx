export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border2)",
        padding: "2rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.62rem",
          color: "var(--text3)",
          letterSpacing: "0.08em",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--gold)" }}>Tesfahun Aschalew Tsegaye</span>
        . All rights reserved.
      </p>
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.62rem",
          color: "var(--text3)",
          letterSpacing: "0.08em",
        }}
      >
        Built with{" "}
        <span style={{ color: "var(--gold)" }}>Next.js</span> · Deployed on{" "}
        <span style={{ color: "var(--gold)" }}>Vercel</span>
      </p>
    </footer>
  );
}
