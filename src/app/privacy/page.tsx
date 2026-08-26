"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-xs font-bold mt-2">Last Updated: August 26, 2026</p>
          </div>

          {/* Content Block */}
          <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base bg-brand-dark-gray/25 border border-brand-dark-gray/80 p-8 md:p-12 rounded-3xl shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">1. Information Collection</h2>
              <p>
                We collect information necessary to supply our SaaS services and custom applications. This includes employee organizational structures, registration parameters, names, email communication logs, and corporate payout data essential for payroll calculation functions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">2. Logical Schema isolation</h2>
              <p>
                All tenant database instances run logical schema isolation parameters. Your personal data is logically separated and protected from access by other users or organizations on the same cluster fabric.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">3. Encryption & Transmission</h2>
              <p>
                Sensitive records, including payroll parameters and bank ledger items, are encrypted using AES-256 standard protocols at rest. Transmit operations occur exclusively over TLS 1.3 encrypted connection tunnels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">4. GDPR and SOC2 Compliance</h2>
              <p>
                Consistent with GDPR mandates, clients retain complete access vectors to view, update, or permanently delete personal records within 30 days of filing requests. We maintain full system audit records to compile compliance evidence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">5. Contact and Inquiries</h2>
              <p>
                For questions regarding data processing policies, direct tickets to our privacy desk at <a href="mailto:muhammadalimirza90@gmail.com" className="text-brand-teal hover:underline font-bold">muhammadalimirza90@gmail.com</a>.
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
