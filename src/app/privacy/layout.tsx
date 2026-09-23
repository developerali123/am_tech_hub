import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how AM Tech Hub collects, processes, and protects customer data across our SaaS products and services.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AM Tech Hub",
    description: "Learn how AM Tech Hub collects, processes, and protects customer data across our SaaS products and services.",
    url: "https://amtechhub.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
