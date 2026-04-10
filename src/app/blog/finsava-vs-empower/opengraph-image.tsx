import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Finsava vs Empower — Free Isn't Really Free";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Finsava vs Empower: Free Isn't Really Free",
    category: "Comparison",
    readTime: "8 min",
  });
}
