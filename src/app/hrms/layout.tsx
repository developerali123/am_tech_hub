import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise HRMS & Automated Payroll Software",
  description: "Automate workforce management, multi-tier approval workflows, dynamic shift rosters, and compliant payroll processing.",
  alternates: {
    canonical: "/hrms",
  },
  openGraph: {
    title: "Enterprise HRMS & Automated Payroll Software | AM Tech Hub",
    description: "Automate workforce management, multi-tier approval workflows, dynamic shift rosters, and compliant payroll processing.",
    url: "https://amtechhub.online/hrms",
  },
};

export default function HrmsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
