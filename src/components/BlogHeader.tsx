interface BlogHeaderProps {
  category: string;
  /** Emoji or single-char icon shown inside the gradient header. */
  icon?: string;
  /** Tailwind gradient classes for the header background. */
  gradient?: string;
}

const CATEGORY_GRADIENTS: Record<string, { gradient: string; icon: string }> = {
  "FIRE Planning": {
    gradient: "from-orange-500/20 via-amber-500/15 to-transparent",
    icon: "🔥",
  },
  "Comparison": {
    gradient: "from-blue-500/20 via-indigo-500/15 to-transparent",
    icon: "⚖️",
  },
  "Infrastructure": {
    gradient: "from-emerald-500/20 via-teal-500/15 to-transparent",
    icon: "🛠",
  },
  "Engineering": {
    gradient: "from-violet-500/20 via-purple-500/15 to-transparent",
    icon: "⚙️",
  },
};

export default function BlogHeader({ category, icon, gradient }: BlogHeaderProps) {
  const preset = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS["FIRE Planning"];
  const finalGradient = gradient ?? preset.gradient;
  const finalIcon = icon ?? preset.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-gradient-to-br ${finalGradient} p-10 mb-8`}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-3xl">
          {finalIcon}
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
            Finsava / {category}
          </p>
          <p className="mt-1 text-sm text-[var(--foreground)]/80">
            Your money. Your intelligence. Your rules.
          </p>
        </div>
      </div>
    </div>
  );
}
