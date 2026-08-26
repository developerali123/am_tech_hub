"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function CareersPage() {
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
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* Header Block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                Careers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-sans">
              Join Our Engineering Crew
            </h1>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              We design and ship B2B workforce platforms and custom low-latency systems. Although we don't have active openings, we are always interested in meeting outstanding builders.
            </p>
          </div>

          {/* Current Openings Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-brand-dark-gray/25 border border-brand-dark-gray/80 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-[45px] pointer-events-none"></div>

            <div className="max-w-md mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-midnight border border-brand-teal/20 flex items-center justify-center text-brand-teal mx-auto shadow-lg shadow-brand-teal/5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Status</span>
                <h3 className="text-2xl font-extrabold text-white mt-1 font-sans">No Active Openings</h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed font-sans">
                  We are not actively hiring for any roles at this time. However, if you are a systems engineer, compiler expert, or full-stack web developer passionate about low latency and clean architectures, we want to hear from you.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:muhammadalimirza90@gmail.com"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-brand-midnight bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 transform hover:-translate-y-0.5 font-sans"
                >
                  Send Speculative CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
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
