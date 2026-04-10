import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Finsava vs YNAB — Honest Feature Comparison";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Finsava vs YNAB",
    category: "Comparison",
    readTime: "7 min",
  });
}
