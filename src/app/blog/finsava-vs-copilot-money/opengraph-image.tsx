import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Finsava vs Copilot Money — Privacy, Price, and AI";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Finsava vs Copilot Money",
    category: "Comparison",
    readTime: "7 min",
  });
}
