import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description: "Deep dives into distributed systems, Redis scaling, event-driven ledgers, and SOC2 compliance architecture.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | AM Tech Hub",
    description: "Deep dives into distributed systems, Redis scaling, event-driven ledgers, and SOC2 compliance architecture.",
    url: "https://amtechhub.online/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
