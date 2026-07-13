"use client";

import React from "react";

export default function Services() {
  const cards = [
    {
      id: "saas",
      title: "SaaS Product Ecosystem",
      subtitle: "Enterprise HRMS & Automated Payroll",
      description:
        "Engineered for high-scale workforce operations. Our modular SaaS suite automates complex multi-state payroll, taxes, employee lifecycle compliance, and dynamic benefits management in real-time.",
      features: [
        "Automated Tax Compliance",
        "Direct Deposit Pipelines",
        "Granular Role-Based Access Control",
        "Flexible Modular HR Modules",
      ],
      icon: (
        <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      ),
    },
    {
      id: "dev",
      title: "Custom Full-Stack Engineering",
      subtitle: "High-Concurrency Architectures",
      description:
        "High-performance backends built on robust microservices matrices. We design API gateways, stream processing pipelines, and state databases to manage millions of concurrent user transactions.",
      features: [
        "Distributed Microservices",
        "Sub-Millisecond API Gateways",
        "High-Availability Databases",
        "Real-Time Stream Processing",
      ],
      icon: (
        <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="10" y1="22" x2="14" y2="2" />
        </svg>
      ),
    },
    {
      id: "devops",
      title: "Cloud & DevOps Architecture",
      subtitle: "High-Availability CI/CD Pipelines",
      description:
        "Automated cloud infrastructure tailored for strict compliance and continuous delivery. We scale with Kubernetes clusters, infrastructure-as-code, and isolated VPC networks.",
      features: [
        "Infrastructure as Code (Terraform)",
        "Zero-Downtime CI/CD Blueprints",
        "Kubernetes & Docker Clusters",
        "SOC2/GDPR Compliant Firewalls",
      ],
      icon: (
        <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-midnight-dark">
      {/* Structural background highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-midnight/60 backdrop-blur-md mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                Core Operations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Our Core Technical Services
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed font-sans">
              We deliver enterprise-grade performance through three core specialized tracks. 
              Discover how we architect for speed, compliance, and modular scale.
            </p>
          </div>
          <div className="text-sm font-semibold text-brand-teal flex items-center gap-2 hover:text-brand-cyan transition-colors cursor-pointer group">
            Explore All Features
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              id={card.id}
              className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-brand-teal/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between border-b-4 border-b-transparent hover:border-b-brand-teal"
            >
              {/* Card Inner Content */}
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 text-slate-800 group-hover:text-brand-teal">
                    {card.icon}
                  </div>
                </div>

                {/* Headers */}
                <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-1 group-hover:text-brand-midnight transition-colors font-sans">
                  {card.title}
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4 font-sans">
                  {card.subtitle}
                </h4>

                {/* Paragraph */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                  {card.description}
                </p>

                {/* Features Bullets */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 font-sans">
                      <svg
                        className="w-4 h-4 text-brand-teal mt-0.5 shrink-0"
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
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-teal transition-all duration-300 cursor-pointer">
                <span>View Engineering Specs</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
