"use client";

import React, { useState } from "react";

const CASE_STUDIES = [
  {
    company: "TechSphere Inc.",
    industry: "Rapid-Growth SaaS Scaleup",
    logo: "TS",
    metrics: "95% Reduction in Admin Overhead",
    problem: "Manual payroll calculations and tax filing took 2 full days, frequently leading to state bracket calculation errors and employee ledger discrepancies.",
    solution: "Deployed the Automated Payroll Engine with real-time tax calculation algorithms.",
    impact: "Payroll processing window shrank from 48 hours to 35 minutes. Eliminated manual ledger audits completely with zero filing disputes.",
    gradient: "from-brand-teal to-brand-cyan"
  },
  {
    company: "Horizon Retail Group",
    industry: "Multi-State Logistics & Retail",
    logo: "HR",
    metrics: "94% Workforce Scheduler Efficiency",
    problem: "Over 800 employees across 12 warehouses suffered from roster overlaps, manual shift swaps, and certification tracking oversights.",
    solution: "Integrated Rotation Shifts and the custom Training & Development tracking module.",
    impact: "Automated schedule mapping resolved scheduling conflicts. The Training Matrix automatically flags expired forklift and safety certifications, keeping compliance at 100%.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    company: "Apex Global Services",
    industry: "Enterprise Service Firm",
    logo: "AG",
    metrics: "4x Faster Onboarding Cycle",
    problem: "Employee records scattered across shared drives, leading to delayed onboarding security sign-offs and missing audit trails.",
    solution: "Adopted the unified Employee Lifecycle Management suite with secure role-based access paths.",
    impact: "Unified all records into a single secure ledger. Reduced onboarding times from 12 days to 3 days, securing a 100% score on their quarterly SOC2 compliance audit.",
    gradient: "from-brand-cyan to-blue-500"
  }
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-brand-midnight">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-teal/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/60 backdrop-blur-md mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
              Operational Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Real Operational Results.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed font-sans text-sm md:text-base">
            Discover how companies reorganized their daily operations, audited tax compliance, and automated rosters using our integrated engineering solutions.
          </p>
        </div>

        {/* Dynamic Case Studies Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tab selectors - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {CASE_STUDIES.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  activeTab === index 
                    ? "bg-brand-dark-gray/50 border-brand-teal text-white shadow-lg shadow-brand-teal/5" 
                    : "bg-brand-dark-gray/20 border-brand-dark-gray/60 text-slate-400 hover:border-brand-dark-gray/80 hover:text-slate-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${study.gradient} flex items-center justify-center font-bold text-brand-midnight shrink-0`}>
                  {study.logo}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold font-sans leading-none">{study.company}</h3>
                  <span className="text-[10px] text-slate-500 mt-1 block font-sans">{study.industry}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Showcase View - 8 Columns */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/80 h-full relative overflow-hidden flex flex-col justify-between shadow-xl">
              {/* Top border ambient glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent"></div>
              
              <div className="flex flex-col gap-6">
                
                {/* Header Metrics */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-dark-gray/60 pb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal font-sans">Key Operational Result</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">
                      {CASE_STUDIES[activeTab].metrics}
                    </h3>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal px-3 py-1.5 rounded-full w-fit">
                    Case Study
                  </div>
                </div>

                {/* Problem vs Solution Splits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold font-sans flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                      Operational Pain Point
                    </span>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {CASE_STUDIES[activeTab].problem}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold font-sans flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Implemented Solution
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {CASE_STUDIES[activeTab].solution}
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Impact Section */}
              <div className="mt-8 p-5 rounded-2xl bg-brand-midnight/40 border border-brand-dark-gray/80 flex items-start gap-4">
                <div className="p-2 rounded-xl bg-brand-teal/10 text-brand-teal shrink-0">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Operational Change</h4>
                  <p className="text-sm text-slate-200 leading-relaxed mt-1 font-sans">
                    {CASE_STUDIES[activeTab].impact}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
