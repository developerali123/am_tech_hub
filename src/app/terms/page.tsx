"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function TermsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
      {/* Structural ambient overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24 font-sans">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          {/* Header Block */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-2">Legal Compliance</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-xs font-bold mt-2">Last Updated: August 26, 2026</p>
          </div>

          {/* Content Block */}
          <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base bg-brand-dark-gray/25 border border-brand-dark-gray/80 p-8 md:p-12 rounded-3xl shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">1. Scope of Service</h2>
              <p>
                AM Tech Hub provides custom software engineering products, cloud architecture deployment models, and SaaS ecosystem software (such as HRMS and Payroll platforms) to enterprise clients subject to these terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">2. Service Level Agreement (SLA)</h2>
              <p>
                Our standard service level availability targets 99.99% system uptime for active hosting modules. Critical issue tickets log immediate response actions within 15 minutes as defined in corporate account contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">3. Subscription & Payments</h2>
              <p>
                SaaS module usage relies on agreed monthly/annual billing options. Account suspensions execute if accounts display past-due bills beyond a 30-day grace period.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">4. Customer Auditing & Logs</h2>
              <p>
                Users agree not to disrupt or tamper with transaction verification channels or database nodes. We register and log system mutations and administrative records for SOC2 reporting compliance tracks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">5. Term Termination</h2>
              <p>
                Clients can terminate service plans with 30-day notice letters. Upon termination, tenant schemas run automated purge runs following our standard GDPR logical schema teardown protocol.
              </p>
            </section>
          </div>

        </div>
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
