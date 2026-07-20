import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Why Your FIRE Calculator Is Wrong (And How 2,000 Monte Carlo Simulations Fix It)";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Why Your FIRE Calculator Is Wrong",
    category: "FIRE",
    readTime: "8 min",
  });
}
