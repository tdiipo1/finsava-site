import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finsava — Private Finance with Local AI",
  description:
    "Self-hosted personal finance with a local AI advisor, anomaly detection, and bank sync. Your money, your machine, your rules.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💸</text></svg>",
  },
  openGraph: {
    title: "Finsava — Private Finance with Local AI",
    description:
      "Self-hosted personal finance with a local AI advisor, anomaly detection, and modular feature selection. Free and open-source under AGPL-3.0.",
    type: "website",
    siteName: "Finsava",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
