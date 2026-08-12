"use client";

import React, { useState } from "react";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { Features } from "@/components/landing/features";
import { PlatformHighlights } from "@/components/landing/platform-highlights";
import { ApprovalWorkflow } from "@/components/landing/approval-workflow";
import { PayrollSection } from "@/components/landing/payroll-section";
import { SelfService } from "@/components/landing/self-service";
import { Reports } from "@/components/landing/reports";
import { SmartData } from "@/components/landing/smart-data";
import { ProductivityTable } from "@/components/landing/productivity-table";
import { SecurityWhyChoose } from "@/components/landing/security-why-choose";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { QuickStats } from "@/components/landing/quick-stats";
import { CtaFooter } from "@/components/landing/cta-footer";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
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
