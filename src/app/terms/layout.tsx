import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service governing usage of AM Tech Hub enterprise applications, SaaS platforms, and software solutions.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | AM Tech Hub",
    description: "Read the terms of service governing usage of AM Tech Hub enterprise applications, SaaS platforms, and software solutions.",
    url: "https://amtechhub.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
