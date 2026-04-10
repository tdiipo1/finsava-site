import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Guardrails vs the 4% Rule — The Withdrawal Strategy That Raises Success Rates";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Guardrails vs the 4% Rule",
    category: "FIRE",
    readTime: "9 min",
  });
}
