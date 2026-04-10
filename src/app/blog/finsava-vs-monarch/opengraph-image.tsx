import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Finsava vs Monarch Money — FIRE-Focused Comparison";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Finsava vs Monarch Money",
    category: "Comparison",
    readTime: "8 min",
  });
}
