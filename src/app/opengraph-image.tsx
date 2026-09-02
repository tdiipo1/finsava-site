import { ImageResponse } from "next/og";

export const alt = "Finsava — AI-Powered Personal Finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#09090b",
          padding: "60px",
        }}
      >
        {/* Blue glow accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#fafafa",
            }}
          >
            Finsava
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "40px",
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: "20px",
            gap: "12px",
          }}
        >
          <span>Your money.</span>
          <span style={{ color: "#3b82f6" }}>Your intelligence.</span>
          <span>Your rules.</span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            marginBottom: "16px",
          }}
        >
          Local AI insights. Plaid bank sync, 12,000+ institutions. Free, or Pro $9.99/mo.
        </span>
        <span
          style={{
            fontSize: "18px",
            color: "#71717a",
          }}
        >
          AI insights on our own hardware — your data is never sold.
        </span>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
