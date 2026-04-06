import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://finsava.com";
const siteTitle = "Finsava — AI-Powered Personal Finance";
const siteDescription =
  "AI-powered personal finance with smart budgeting, bank sync from 200+ institutions, FIRE planning, multi-currency support, investment tracking, and anomaly detection. Your money, your intelligence, your rules.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  keywords: [
    "personal finance",
    "AI budgeting",
    "smart budgeting",
    "bank sync",
    "privacy",
    "anomaly detection",
    "expense tracker",
    "financial health score",
    "savings goals",
    "ML categorization",
    "FIRE calculator",
    "debt payoff",
    "multi-currency",
    "investment tracking",
    "transfer detection",
    "net worth",
  ],
  authors: [{ name: "Finsava", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Cloud-first personal finance with AI budgeting, 20+ modular features, FIRE planning, and investment tracking. Your money, your intelligence, your rules.",
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
  operatingSystem: "Web, Docker, Windows, Linux, macOS",
  author: {
    "@type": "Organization",
    name: "Finsava",
    url: siteUrl,
  },
  offers: [
    {
      "@type": "Offer",
      price: "4.99",
      priceCurrency: "USD",
      description: "Basic tier — monthly",
    },
    {
      "@type": "Offer",
      price: "9.99",
      priceCurrency: "USD",
      description: "Pro tier — monthly",
    },
  ],
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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
