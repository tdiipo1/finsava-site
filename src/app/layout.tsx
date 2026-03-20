import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://finsava.com";
const siteTitle = "Finsava — Private Finance with Local AI";
const siteDescription =
  "Self-hosted personal finance with a local AI advisor, anomaly detection, and bank sync. Your money, your machine, your rules.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💸</text></svg>",
  },
  keywords: [
    "personal finance",
    "self-hosted",
    "local AI",
    "budgeting",
    "privacy",
    "bank sync",
    "anomaly detection",
    "expense tracker",
    "docker",
    "ollama",
  ],
  authors: [{ name: "Finsava", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Personal finance with a local AI advisor, anomaly detection, and modular feature selection. Self-host or use Finsava Cloud.",
    type: "website",
    siteName: "Finsava",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Finsava",
  description: siteDescription,
  url: siteUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Docker, Windows, Linux, macOS",
  author: {
    "@type": "Organization",
    name: "Finsava",
    url: siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  license: "https://www.gnu.org/licenses/agpl-3.0.html",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
