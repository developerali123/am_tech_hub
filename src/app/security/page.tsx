"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function SecurityPage() {
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-2">Technical Standards</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
              Security Compliance
            </h1>
            <p className="text-slate-400 text-xs font-bold mt-2">Last Updated: August 26, 2026</p>
          </div>

          {/* Content Block */}
          <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base bg-brand-dark-gray/25 border border-brand-dark-gray/80 p-8 md:p-12 rounded-3xl shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">1. Security Architecture</h2>
              <p>
                AM Tech Hub operates in private, isolated VPC configurations. Our systems employ automated intrusion detection mechanisms, next-gen Web Application Firewalls (WAF), and strict internal controls to defend transactional pipelines against exploit vectors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">2. Tenant Logical Schema Isolation</h2>
              <p>
                For modular SaaS configurations (HRMS and Payroll), cross-client database isolation is enforced at the schema boundary. This ensures that personal identifiers, salary matrix logs, and bank accounts are logical-bound and structurally safe.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">3. Encryption & Secrets Storage</h2>
              <p>
                Database assets are encrypted at rest using AES-256 standards with rotating master keys. Environment parameters, API passwords, and integration credentials are dynamically loaded from secure vault storage containers at bootstrap runtimes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">4. Immutable Audits</h2>
              <p>
                Compliance trails register every database alteration and code deployment in immutable logs. We maintain cryptographically chained audit registries to allow automated compliance compilation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-sans">5. Vulnerability Disclosures</h2>
              <p>
                We execute automated dependencies auditing runs daily inside our CI/CD pipelines. Security researchers can coordinate reports of compliance anomalies or bugs to <a href="mailto:muhammadalimirza90@gmail.com" className="text-brand-teal hover:underline font-bold">muhammadalimirza90@gmail.com</a>.
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
