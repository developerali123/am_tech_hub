"use client";

import React from "react";

export default function AboutUs() {
  const values = [
    {
      title: "Our Engineering Creed",
      description:
        "We believe enterprise software shouldn't be slow or rigid. We design our platforms with sub-millisecond API response latency, high availability, and modular resilience. Every line of code is compiled for massive transactional throughput.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "Tailored Custom Blueprints",
      description:
        "Every organization has unique processes. We build fully custom microservices architectures and tailored SaaS extensions (such as our high-performance HRMS and Payroll platforms) that align with your workflows rather than forcing you into a standard box.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22h9M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "SOC2 & GDPR Compliance",
      description:
        "Security is baked into our foundation. From database partition bounds and TLS 1.3 tunnels to secure multi-factor user validation and automated payroll tax audit tracks, we ensure strict data isolation and enterprise-grade compliance.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-midnight">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/60 backdrop-blur-md mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Architecting Next-Gen <br />
            <span className="bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
              Enterprise Systems
            </span>
          </h2>
          <p className="text-slate-400 mt-6 text-base md:text-lg leading-relaxed font-sans">
            AM Tech Hub is a premium engineering studio. We offer specialized B2B SaaS platforms and custom cloud architectures designed to handle millions of active workflows with absolute precision.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/60 hover:border-brand-teal/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-dark-gray/80 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 border border-brand-teal/10 transition-colors">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-brand-teal transition-colors">
                {val.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight Card for HRMS Solution */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-brand-dark-gray/80 to-brand-midnight border border-brand-teal/20 relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-teal/15 transition-all duration-500"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full">
                Custom Product Spotlight
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4 font-sans">
                Our Enterprise HRMS & Automated Payroll
              </h3>
              <p className="text-slate-400 text-sm md:text-base mt-3 max-w-3xl leading-relaxed font-sans">
                Looking for a custom workforce solution? We offer a completely integrated, audit-ready HRMS & Payroll system tailored specifically to solve your multi-state compliance, roster scheduling, and salary disbursement challenges.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="/hrms"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-br from-brand-teal to-brand-cyan group-hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-brand-teal/50 shadow-lg shadow-brand-teal/15 hover:shadow-brand-teal/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-brand-midnight rounded-full group-hover:bg-transparent flex items-center gap-2">
                  Launch Interactive Demo
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
