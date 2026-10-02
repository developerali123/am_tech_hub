import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart POS System | Retail & Fiscal Billing",
  description: "Enterprise Smart POS with offline-first sync, real-time inventory, hardware integration, and FBR fiscal compliance.",
  alternates: {
    canonical: "/pos",
  },
  openGraph: {
    title: "Smart POS System | Retail & Fiscal Billing | AM Tech Hub",
    description: "Enterprise Smart POS with offline-first sync, real-time inventory, hardware integration, and FBR fiscal compliance.",
    url: "https://amtechhub.online/pos",
  },
};

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
