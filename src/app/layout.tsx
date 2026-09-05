import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AM Tech Hub | Enterprise SaaS, Commercial POS & Custom Engineering",
  description: "AM Tech Hub engineers high-performance enterprise applications, Commercial POS retail systems, automated Payroll & HRMS SaaS platforms, and cloud architectures at scale.",
  keywords: ["Software Engineering", "Commercial POS", "Point of Sale", "FBR Fiscal Invoicing", "Retail Inventory", "Enterprise HRMS", "Payroll Automation", "Cloud Architecture", "DevOps"],
  authors: [{ name: "AM Tech Hub" }],
  openGraph: {
    title: "AM Tech Hub | Enterprise SaaS, Commercial POS & Custom Engineering",
    description: "AM Tech Hub engineers high-performance enterprise applications, Commercial POS retail systems, automated Payroll & HRMS SaaS platforms, and cloud architectures at scale.",
    url: "https://amtechhub.com",
    siteName: "AM Tech Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

