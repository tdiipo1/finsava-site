export default function SocialProof() {
  const badges = [
    {
      label: "1,100+ Tests Passing",
      href: "#security",
    },
    {
      label: "21 Modules",
      href: "#features",
    },
    {
      label: "Privacy-First",
      href: "#security",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 px-6 -mt-12 mb-4 relative z-10">
      {badges.map((badge) => (
        <a
          key={badge.label}
          href={badge.href}
          className="inline-flex items-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)] hover:border-[var(--muted)] transition-colors"
        >
          {badge.label}
        </a>
      ))}
    </div>
  );
}
