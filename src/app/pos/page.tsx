"use client";

import React from "react";
import { POSHeader } from "@/components/pos/header";
import { POSHero } from "@/components/pos/hero";
import { POSTrustStrip } from "@/components/pos/trust-strip";
import { POSProblemSolution } from "@/components/pos/problem-solution";
import { POSFeaturePillars } from "@/components/pos/feature-pillars";
import { POSSimulator } from "@/components/pos/pos-simulator";
import { POSIndustryPacks } from "@/components/pos/industry-packs";
import { POSRolesMatrix } from "@/components/pos/roles-matrix";
import { POSDeepFeatureGrid } from "@/components/pos/deep-feature-grid";
import { POSFaq } from "@/components/pos/faq";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function CommercialPOSPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001428] text-white selection:bg-[#0074d9] selection:text-white">
      {/* POS Top Navigation */}
      <POSHeader />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <ScrollReveal delayMs={50}>
          <POSHero />
        </ScrollReveal>

        {/* 2. Trust & Architecture Strip */}
        <ScrollReveal>
          <POSTrustStrip />
        </ScrollReveal>

        {/* 3. Problem → Solution */}
        <ScrollReveal>
          <POSProblemSolution />
        </ScrollReveal>

        {/* 4. 6 Core Feature Pillars */}
        <ScrollReveal>
          <POSFeaturePillars />
        </ScrollReveal>

        {/* 5. Live Interactive POS Counter Simulator */}
        <ScrollReveal>
          <POSSimulator />
        </ScrollReveal>

        {/* 6. Industry Packs (Retail + Wood Trading Pack) */}
        <ScrollReveal>
          <POSIndustryPacks />
        </ScrollReveal>

        {/* 7. Granular Roles & RBAC Matrix */}
        <ScrollReveal>
          <POSRolesMatrix />
        </ScrollReveal>

        {/* 8. Deep Feature Grid Directory */}
        <ScrollReveal>
          <POSDeepFeatureGrid />
        </ScrollReveal>

        {/* 9. FAQ Section */}
        <ScrollReveal>
          <POSFaq />
        </ScrollReveal>

        {/* 10. Standard Contact Section */}
        <ContactUs />
      </main>

      {/* 11. Standard Ecosystem Footer */}
      <Footer />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
