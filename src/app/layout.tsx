import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTranslator } from "@/components/GoogleTranslator";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amtechhub.online"),
  title: {
    default: "AM Tech Hub | Custom Software, Enterprise HRMS & Commercial POS Solutions",
    template: "%s | AM Tech Hub",
  },
  description: "AM Tech Hub delivers intelligent enterprise software: audit-ready HRMS & payroll automation, high-speed commercial POS systems, and dedicated custom cloud software engineering for growing businesses.",
  keywords: [
    "Custom Software Development Company",
    "Enterprise HRMS Software",
    "Automated Payroll System",
    "Commercial POS System",
    "Retail Point of Sale",
    "Inventory Management Software",
    "B2B SaaS Engineering",
    "Cloud Architecture & DevOps",
    "Dedicated Software Development Team",
    "Next.js and Cloud Consulting"
  ],
  authors: [{ name: "AM Tech Hub" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AM Tech Hub | Custom Software, Enterprise HRMS & Commercial POS Solutions",
    description: "Build, automate, and scale with AM Tech Hub. Custom SaaS engineering, high-performance HRMS payroll platforms, and commercial POS systems engineered for reliable business growth.",
    url: "https://amtechhub.online",
    siteName: "AM Tech Hub",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://amtechhub.online/#organization",
      "name": "AM Tech Hub",
      "url": "https://amtechhub.online",
      "logo": "https://amtechhub.online/favicon.ico",
      "description": "Enterprise software engineering studio specializing in automated HRMS & Payroll suites, commercial POS systems, and custom cloud architecture.",
      "sameAs": [
        "https://www.linkedin.com/company/amtechhub"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://amtechhub.online/#website",
      "url": "https://amtechhub.online",
      "name": "AM Tech Hub",
      "publisher": { "@id": "https://amtechhub.online/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "AM Tech Hub HRMS & Payroll Suite",
      "operatingSystem": "Web, Cloud",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "Custom",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "AM Tech Hub Commercial POS",
      "operatingSystem": "Web, Windows, Cloud",
      "applicationCategory": "PointOfSaleApplication",
      "offers": {
        "@type": "Offer",
        "price": "Custom",
        "priceCurrency": "USD"
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GoogleTranslator />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

