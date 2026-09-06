"use client";

import React, { useState } from "react";
import { POSHeader } from "@/components/pos/header";
import { POSHero } from "@/components/pos/hero";
import { POSTrustStrip } from "@/components/pos/trust-strip";
import { POSProblemSolution } from "@/components/pos/problem-solution";
import { POSFeaturePillars } from "@/components/pos/feature-pillars";
import { POSSimulator } from "@/components/pos/pos-simulator";
import { POSIndustryPacks } from "@/components/pos/industry-packs";
import { POSRolesMatrix } from "@/components/pos/roles-matrix";
import { POSDeepFeatureGrid } from "@/components/pos/deep-feature-grid";
import { POSTestimonials } from "@/components/pos/testimonials";
import { POSPricing } from "@/components/pos/pricing";
import { POSFaq } from "@/components/pos/faq";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import DemoModal from "@/components/DemoModal";

export default function CommercialPOSPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* POS Top Navigation */}
      <POSHeader onOpenDemo={openDemo} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <ScrollReveal delayMs={50}>
          <POSHero onOpenDemo={openDemo} />
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

        {/* 9. Customer Success Section */}
        <ScrollReveal>
          <POSTestimonials />
        </ScrollReveal>

        {/* 10. Transparent Pricing */}
        <ScrollReveal>
          <POSPricing />
        </ScrollReveal>

        {/* 11. FAQ Section */}
        <ScrollReveal>
          <POSFaq />
        </ScrollReveal>

        {/* 12. POS-Aware Contact Section */}
        <ContactUs isPOS />
      </main>

      {/* Standard Ecosystem Footer */}
      <Footer />

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Demo Booking Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}
