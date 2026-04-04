export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} <span style={{ color: "var(--gold)" }}>Tesfahun Aschalew Tsegaye</span>. All rights reserved.
      </p>
      <p>
        Built with <span style={{ color: "var(--gold)" }}>Next.js</span> · Deployed on <span style={{ color: "var(--gold)" }}>Vercel</span>
      </p>
    </footer>
  );
}
