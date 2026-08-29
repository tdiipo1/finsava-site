import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "How We Run a Full-Stack Fintech App on a $7/Month VPS";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "How We Run a Fintech App on a $7/Month VPS",
    category: "Engineering",
    readTime: "6 min",
  });
}
