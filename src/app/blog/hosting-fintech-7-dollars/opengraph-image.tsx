import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "How We Run a Full-Stack Fintech App for $7/Month";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "How We Run a Full-Stack Fintech for $7/Month",
    category: "Engineering",
    readTime: "6 min",
  });
}
