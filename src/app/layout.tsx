import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amtechhub.com"),
  title: {
    default: "AM Tech Hub | Enterprise SaaS, Commercial POS & Custom Engineering",
    template: "%s | AM Tech Hub",
  },
  description: "AM Tech Hub builds high-performance enterprise SaaS, commercial POS systems, automated HRMS payroll platforms, and scalable cloud software architectures.",
  keywords: ["Software Engineering", "Commercial POS", "Point of Sale", "FBR Fiscal Invoicing", "Retail Inventory", "Enterprise HRMS", "Payroll Automation", "Cloud Architecture", "DevOps"],
  authors: [{ name: "AM Tech Hub" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AM Tech Hub | Enterprise SaaS, Commercial POS & Custom Engineering",
    description: "AM Tech Hub builds high-performance enterprise SaaS, commercial POS systems, automated HRMS payroll platforms, and scalable cloud software architectures.",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

