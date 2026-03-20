async function getGitHubStars(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/tdiipo1/Finsava",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
}

export default async function SocialProof() {
  const stars = await getGitHubStars();

  const badges = [
    {
      label: stars > 0 ? `\u2605 ${stars} stars` : "\u2605 New",
      href: "https://github.com/tdiipo1/Finsava",
    },
    {
      label: "17 Features",
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
          {...(badge.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex items-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)] hover:border-[var(--muted)] transition-colors"
        >
          {badge.label}
        </a>
      ))}
    </div>
  );
}
