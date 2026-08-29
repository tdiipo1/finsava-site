import { blogOgImage, ogSize, ogContentType } from "@/lib/og-template";

export const alt = "Finsava Is Live, Invite-Only: What Shipped and What Didn't";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return blogOgImage({
    title: "Finsava Is Live, Invite-Only",
    category: "Launch",
    readTime: "6 min",
  });
}
