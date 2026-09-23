import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services & Enterprise Solutions",
  description: "Full-cycle software engineering, AI agentic automations, high-concurrency architectures, and cloud DevOps infrastructure.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services & Enterprise Solutions | AM Tech Hub",
    description: "Full-cycle software engineering, AI agentic automations, high-concurrency architectures, and cloud DevOps infrastructure.",
    url: "https://amtechhub.online/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
