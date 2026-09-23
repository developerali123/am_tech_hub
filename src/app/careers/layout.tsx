import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at AM Tech Hub | Engineering & Product Roles",
  description: "Join our engineering team building high-performance SaaS, commercial POS platforms, and cloud infrastructure.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at AM Tech Hub | Engineering & Product Roles",
    description: "Join our engineering team building high-performance SaaS, commercial POS platforms, and cloud infrastructure.",
    url: "https://amtechhub.com/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
