import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Budget Visualization vs YNAB Categories";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Budget Visualization vs YNAB Categories",
    category: "Comparison",
    readTime: "5 min",
  });
}
