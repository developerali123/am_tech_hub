"use client";

import React from "react";

export default function Solutions() {
  const cards = [
    {
      id: "hrms",
      title: "Workforce HRMS & Payroll",
      subtitle: "Integrated Enterprise Operations",
      description:
        "Streamline staff lifecycles, automated tax compliance, shift planning, and direct ACH payroll networks on a single dashboard.",
      features: [
        "Dynamic Shift Schedules",
        "Direct Bank Integrations",
        "Employee Self-Service portals",
      ],
      href: "/hrms",
      icon: (
        <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "ai",
      title: "AI-Powered Automation",
      subtitle: "Autonomous Financial Operations",
      description:
        "Leverage fine-tuned LLM agents to reconcile accounts, audit logs, and flag anomalies with minimal manual touch points.",
      features: [
        "Autonomous Audit Workers",
        "Instant Ledger Matching",
        "AI Policy Query Support",
      ],
      href: "/solutions/ai",
      icon: (
        <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "concurrency",
      title: "High-Concurrency Systems",
      subtitle: "Engineered for Extreme Scalability",
      description:
        "Handle millions of active sessions with sub-10ms response targets, built-in rate limit gateways, and streaming database synchronization.",
      features: [
        "Goroutine Payment Pools",
        "Low-Latency API Gateways",
        "Horizontal Database Shards",
      ],
      href: "/solutions/concurrency",
      icon: (
        <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="12" x2="2" y2="12" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          <line x1="6" y1="16" x2="6.01" y2="16" />
          <line x1="10" y1="16" x2="10.01" y2="16" />
        </svg>
      ),
    },
    {
      id: "compliance",
      title: "Compliance & Auditing",
      subtitle: "SOC2 & GDPR Secured Frameworks",
      description:
        "Infrastructure and databases optimized for HIPAA, SOC2 Type II, and ISO security audits from day one of deployment.",
      features: [
        "End-to-End TLS 1.3 Encryption",
        "Immutable Operations Logging",
        "Logical Tenant Databases",
      ],
      href: "/solutions/compliance",
      icon: (
        <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-brand-midnight">
      {/* Structural background highlights */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-midnight/60 backdrop-blur-md mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-cyan">
                Business Capability
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Custom Enterprise Solutions
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed font-sans">
              Deploy secure, high-performance blueprints customized to your business goals. 
              Accelerate time-to-market with pre-tested framework layers.
            </p>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              id={`solution-${card.id}`}
              className="bg-brand-dark-gray/30 text-slate-200 border border-brand-dark-gray/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between border-b-4 border-b-transparent hover:border-b-brand-cyan min-h-[460px]"
            >
              {/* Card Inner Content */}
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-brand-midnight border border-brand-cyan/10 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/30 transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 text-brand-cyan">
                    {card.icon}
                  </div>
                </div>

                {/* Headers */}
                <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-brand-cyan transition-colors font-sans">
                  {card.title}
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-4 font-sans">
                  {card.subtitle}
                </h4>

                {/* Paragraph */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                  {card.description}
                </p>

                {/* Features Bullets */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-slate-300 font-sans">
                      <svg
                        className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Interactive Arrow Link */}
              <a
                href={card.href}
                className="border-t border-brand-dark-gray/50 pt-5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-brand-cyan transition-all duration-300 cursor-pointer"
              >
                <span>Explore Solution Details</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
