import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface BlogOgProps {
  title: string;
  category?: string;
  readTime?: string;
}

export function blogOgImage({ title, category = "Blog", readTime }: BlogOgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#09090b",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Blue glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#fafafa",
            }}
          >
            Finsava
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#3b82f6",
              fontWeight: 500,
            }}
          >
            / {category}
          </span>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              fontSize: title.length > 80 ? "52px" : "62px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
        </div>

        {/* Bottom: meta + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#a1a1aa",
            }}
          >
            {readTime ? `${readTime} read` : "finsava.com"}
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
            }}
          >
            Your money. Your intelligence. Your rules.
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          }}
        />
      </div>
    ),
    { ...ogSize },
  );
}
