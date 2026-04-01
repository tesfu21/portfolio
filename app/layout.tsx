import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Outfit } from "next/font/google";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tesfahun Aschalew Tsegaye — Developer",
  description:
    "Full-stack developer and IT project professional at Global Bank of Ethiopia. Building systems, managing projects, delivering value.",
  keywords: [
    "Tesfahun Aschalew",
    "developer",
    "Ethiopia",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Tesfahun Aschalew Tsegaye" }],
  openGraph: {
    title: "Tesfahun Aschalew Tsegaye — Developer",
    description:
      "Full-stack developer and IT project professional at Global Bank of Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
