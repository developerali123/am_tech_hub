"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function ServicesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const services = [
    {
      id: "saas",
      title: "SaaS Product Ecosystem",
      subtitle: "Enterprise HRMS & Automated Payroll",
      description:
        "Engineered for high-scale workforce operations. Our modular SaaS suite automates complex multi-state payroll, taxes, employee lifecycle compliance, and dynamic benefits management in real-time.",
      longDesc:
        "We build comprehensive B2B workforce platforms designed to scale seamlessly. From automated tax filing engines to dynamic employee onboarding portals, our systems prioritize data integrity, continuous uptime, and extreme usability.",
      features: [
        "Automated Multi-State Tax Compliance",
        "Direct Deposit & Instant ACH Banking Pipelines",
        "Granular Role-Based Access Control (RBAC)",
        "Dynamic Benefits & Time Tracking Integration",
      ],
      icon: (
        <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      id: "ai",
      title: "AI Agentic Automations",
      subtitle: "Intelligent Workflows & LLMs",
      description:
        "Deploying self-healing autonomous AI agents, fine-tuned LLMs, and semantic search (RAG) pipelines. We automate payroll reconciliation, smart roster compliance, and intelligent corporate knowledge retrieval.",
      longDesc:
        "By integrating generative AI directly into legacy pipelines, we construct automated auditing systems. Our AI agents continuously monitor operations, reconciles database states, and provides secure retrieval channels over sensitive knowledge bases.",
      features: [
        "Autonomous AI Audit & Verification Agents",
        "Retrieval Augmented Generation (RAG) Systems",
        "Automated Workforce Regulation Audits",
        "Self-Healing Queue Operations & Alerts",
      ],
      icon: (
        <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
    },
    {
      id: "dev",
      title: "Custom Full-Stack Engineering",
      subtitle: "High-Concurrency Architectures",
      description:
        "High-performance backends built on robust microservices matrices. We design API gateways, stream processing pipelines, and state databases to manage millions of concurrent user transactions.",
      longDesc:
        "Our custom systems are constructed for low latency and distributed scalability. We design custom microservices fabrics in Go and Rust, high-throughput WebSockets, and state storage engines that remain resilient under peak demand.",
      features: [
        "Distributed & Decoupled Microservices Systems",
        "Sub-Millisecond Routing & Custom API Gateways",
        "Replicated High-Availability Database Matrices",
        "Apache Kafka Real-Time Stream Event Processing",
      ],
      icon: (
        <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      longDesc:
        "We build secure-by-default platforms using modern automation frameworks. Our systems utilize auto-scaling container configurations, infrastructure configuration templates, and comprehensive logging suites to fulfill SOC2 & GDPR benchmarks.",
      features: [
        "Infrastructure as Code via Terraform & OpenTofu",
        "Zero-Downtime CI/CD Blueprints & Canary Releases",
        "Kubernetes (EKS/GKE) Autoscaling Cluster Fabrics",
        "Strict SOC2/GDPR Compliant Firewalls & Vault Storage",
      ],
      icon: (
        <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
      {/* Structural ambient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-sans">
              Technical Service Capabilities
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed font-sans">
              Discover our enterprise suite of engineering disciplines. We build for high concurrency, absolute reliability, and absolute compliance.
            </p>
          </div>

          {/* Services Stacked Listing */}
          <div className="flex flex-col gap-16">
            {services.map((svc, index) => (
              <div
                key={svc.id}
                className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 rounded-3xl bg-brand-dark-gray/25 border border-brand-dark-gray/80 hover:border-brand-teal/30 transition-all duration-500 shadow-xl relative overflow-hidden group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Glow */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-[40px] pointer-events-none"></div>

                {/* Left Side: Content */}
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-midnight border border-brand-teal/15 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal/15 transition-all duration-300">
                    {svc.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1 group-hover:text-brand-teal transition-colors font-sans">
                      {svc.title}
                    </h2>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                      {svc.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed font-sans">
                    {svc.longDesc}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-slate-300 font-sans">
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

                  <div className="pt-6">
                    <a
                      href={`/services/${svc.id}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-brand-midnight bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 transform hover:-translate-y-0.5 font-sans"
                    >
                      View Engineering Specs
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Side: Mock Architecture/Tech Detail Panel */}
                <div className="w-full lg:w-96 rounded-2xl bg-brand-midnight/60 border border-brand-teal/10 p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-brand-dark-gray/50 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                      SYSTEM METRICS
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1 font-sans">
                        <span>Availability Target</span>
                        <span className="text-brand-teal font-sans">99.99%</span>
                      </div>
                      <div className="w-full bg-brand-dark-gray/40 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-teal h-full w-[99.99%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1 font-sans">
                        <span>API Latency (p99)</span>
                        <span className="text-brand-cyan font-sans">&lt; 15ms</span>
                      </div>
                      <div className="w-full bg-brand-dark-gray/40 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-cyan h-full w-[95%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1 font-sans">
                        <span>Encryption Standard</span>
                        <span className="text-white font-sans">TLS 1.3 / AES-256</span>
                      </div>
                    </div>
                    <div className="border-t border-brand-dark-gray/50 pt-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-2 font-sans">
                        RECOMMENDED FOR
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[9px] font-bold px-2 py-1 rounded bg-brand-dark-gray/80 text-brand-teal font-sans">Enterprise</span>
                        <span className="text-[9px] font-bold px-2 py-1 rounded bg-brand-dark-gray/80 text-brand-cyan font-sans">FinTech</span>
                        <span className="text-[9px] font-bold px-2 py-1 rounded bg-brand-dark-gray/80 text-white font-sans">High-Load</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
