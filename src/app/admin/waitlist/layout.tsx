import type { Metadata } from "next";

// The page itself is a client component and cannot export metadata, so the
// noindex lives here. This route lists pilot signup emails; it should never
// appear in a search index.
export const metadata: Metadata = {
  title: "Waitlist Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function WaitlistAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
