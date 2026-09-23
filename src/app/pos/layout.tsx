import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial POS System | Retail & Fiscal Billing",
  description: "Enterprise commercial POS with offline-first sync, real-time inventory, hardware integration, and FBR fiscal compliance.",
  alternates: {
    canonical: "/pos",
  },
  openGraph: {
    title: "Commercial POS System | Retail & Fiscal Billing | AM Tech Hub",
    description: "Enterprise commercial POS with offline-first sync, real-time inventory, hardware integration, and FBR fiscal compliance.",
    url: "https://amtechhub.com/pos",
  },
};

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
