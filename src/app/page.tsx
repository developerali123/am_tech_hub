"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import ROICalculator from "@/components/ROICalculator";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const homeFaqs = [
    {
      q: "Is AM Tech Hub SOC2 and GDPR compliant?",
      a: "Yes. Both our modular SaaS products (HRMS/Payroll) and custom microservices templates are built under strict SOC2 Type II audit requirements, TLS 1.3 encryption, and GDPR data isolation boundaries."
    },
    {
      q: "How does custom engineering interface with existing systems?",
      a: "We specialize in zero-downtime ledger migration and bridge API integrations. We assemble secure ETL channels that sync database structures between legacy mainframe layouts and modern, distributed Kubernetes backends."
    },
    {
      q: "What is the implementation timeline for custom development?",
      a: "Standard enterprise microservices blueprints are delivered within 4 to 8 weeks. Our automated DevOps pipelines ensure code is deployed continuously to staging from day one, allowing stakeholder validation throughout."
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
      {/* Structural ambient overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10">
        {/* Hero Section */}
        <Hero onOpenDemo={openDemo} />

        {/* Brand Showcase Partner / Trust Bar */}
        <section className="py-10 border-y border-brand-dark-gray/40 bg-brand-midnight-dark/50 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold font-sans">
              Powering transaction pipelines for leading institutions
            </p>
            
            {/* Continuous Horizontal Ticker */}
            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex w-[300%] gap-16 items-center justify-between opacity-35 hover:opacity-65 transition-opacity duration-300 animate-infinite-scroll whitespace-nowrap">
                {/* 1st copy */}
                <div className="flex items-center gap-16 min-w-full justify-around shrink-0">
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    APEX_LEDGER
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 17V7l7 5-7 5z" />
                    </svg>
                    NEXUS_SYSTEMS
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                    VERIFY_FLOW
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    HR_SYNAPSE
                  </div>
                </div>

                {/* 2nd copy */}
                <div className="flex items-center gap-16 min-w-full justify-around shrink-0" aria-hidden="true">
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    APEX_LEDGER
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 17V7l7 5-7 5z" />
                    </svg>
                    NEXUS_SYSTEMS
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                    VERIFY_FLOW
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    HR_SYNAPSE
                  </div>
                </div>

                {/* 3rd copy */}
                <div className="flex items-center gap-16 min-w-full justify-around shrink-0" aria-hidden="true">
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    APEX_LEDGER
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 17V7l7 5-7 5z" />
                    </svg>
                    NEXUS_SYSTEMS
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                    VERIFY_FLOW
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                    <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    HR_SYNAPSE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Dashboard Preview Section */}
        <section id="saas">
          <DashboardPreview />
        </section>

        {/* Core Services Grid */}
        <section id="dev">
          <Services />
        </section>

        {/* Enterprise Solutions Section */}
        <Solutions />

        {/* Case Studies / Operational Impact */}
        <CaseStudies />

        {/* Interactive ROI Calculator Section */}
        <section id="industries">
          <ROICalculator />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Detailed Enterprise FAQ / Trust Accordion Section */}
        <section id="faq" className="py-24 relative bg-brand-midnight">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                  FAQ & Compliance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
                Enterprise Standards & Inquiries
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {homeFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen ? "bg-brand-dark-gray/50 border-brand-teal/40" : "bg-brand-dark-gray/30 border-brand-dark-gray/60 hover:border-brand-teal/20"
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white focus:outline-none"
                    >
                      <span className="font-sans text-base md:text-lg">{faq.q}</span>
                      <svg
                        className={`w-5.5 h-5.5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-teal" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] opacity-100 border-t border-brand-dark-gray/60" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="p-6 text-sm text-slate-400 leading-relaxed font-sans">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact & Demo Booking Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
