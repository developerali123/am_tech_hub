import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Security & Compliance Architecture",
  description: "Explore AM Tech Hub security standards: SOC2 compliance, logical tenant isolation, data encryption, and audit logging.",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    title: "Enterprise Security & Compliance Architecture | AM Tech Hub",
    description: "Explore AM Tech Hub security standards: SOC2 compliance, logical tenant isolation, data encryption, and audit logging.",
    url: "https://amtechhub.online/security",
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
