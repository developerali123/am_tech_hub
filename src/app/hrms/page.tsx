"use client";

import React, { useState } from "react";
import { Header } from "@/components/hrms/header";
import { Hero } from "@/components/hrms/hero";
import { TrustedBy } from "@/components/hrms/trusted-by";
import { ProblemSolution } from "@/components/hrms/problem-solution";
import { Features } from "@/components/hrms/features";
import { PlatformHighlights } from "@/components/hrms/platform-highlights";
import { ApprovalWorkflow } from "@/components/hrms/approval-workflow";
import { PayrollSection } from "@/components/hrms/payroll-section";
import { SelfService } from "@/components/hrms/self-service";
import { Reports } from "@/components/hrms/reports";
import { SmartData } from "@/components/hrms/smart-data";
import { ProductivityTable } from "@/components/hrms/productivity-table";
import { SecurityWhyChoose } from "@/components/hrms/security-why-choose";
import { Testimonials } from "@/components/hrms/testimonials";
import { Pricing } from "@/components/hrms/pricing";
import { Faq } from "@/components/hrms/faq";
import { QuickStats } from "@/components/hrms/quick-stats";
import { CtaFooter } from "@/components/hrms/cta-footer";
import { ScrollReveal } from "@/components/hrms/scroll-reveal";
import HRMSContact from "@/components/HRMSContact";
import DemoModal from "@/components/DemoModal";

export default function HRMSPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header onOpenDemo={openDemo} />
      <main className="flex-grow">
        <ScrollReveal delayMs={100}>
          <Hero onOpenDemo={openDemo} />
        </ScrollReveal>

        <ScrollReveal>
          <TrustedBy />
        </ScrollReveal>

        <ScrollReveal>
          <ProblemSolution />
        </ScrollReveal>

        <ScrollReveal>
          <Features />
        </ScrollReveal>

        <ScrollReveal>
          <PlatformHighlights />
        </ScrollReveal>

        <ScrollReveal>
          <ApprovalWorkflow />
        </ScrollReveal>

        <ScrollReveal>
          <PayrollSection />
        </ScrollReveal>

        <ScrollReveal>
          <SelfService />
        </ScrollReveal>

        <ScrollReveal>
          <Reports />
        </ScrollReveal>

        <ScrollReveal>
          <SmartData />
        </ScrollReveal>

        <ScrollReveal>
          <ProductivityTable />
        </ScrollReveal>

        <ScrollReveal>
          <SecurityWhyChoose />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <Faq />
        </ScrollReveal>

        <ScrollReveal>
          <QuickStats />
        </ScrollReveal>

        <ScrollReveal>
          <HRMSContact />
        </ScrollReveal>
      </main>
      <CtaFooter />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}
