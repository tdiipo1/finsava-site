import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "The FIRE Dashboard That Models Your Actual Life";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "The FIRE Dashboard That Models Your Actual Life",
    category: "FIRE",
    readTime: "10 min",
  });
}
