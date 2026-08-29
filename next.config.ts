import type { NextConfig } from "next";

// CSP: defense-in-depth for the marketing site (no payment forms live here —
// checkout is Stripe-hosted from the app). 'unsafe-inline' is required by
// Next.js hydration scripts; plausible.io is the conditionally-loaded,
// cookieless analytics script in layout.tsx.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://plausible.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://plausible.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Post removed 2026-08-29 (founder decision F-d in docs/blog-pipeline.md)
        source: "/blog/hosting-fintech-7-dollars",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
