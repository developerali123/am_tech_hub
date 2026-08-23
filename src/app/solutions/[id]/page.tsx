"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

// Data mapping for solutions
const SOLUTIONS_DATA: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  details: string;
  useCases: string[];
  metrics: { label: string; value: string }[];
  capabilities: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}> = {
  ai: {
    title: "AI-Powered Automation",
    subtitle: "Smart Auditing & Ledger Reconciliation",
    heroDesc: "Streamline operational overhead by letting autonomous LLM agents audit financial ledger transactions, reconcile payroll anomalies, and answer employee compliance questions instantly.",
    details: "Our AI-powered automation integrates deep-reasoning agent loops into financial pipelines. The system automatically reconciles incoming invoices, verifies ledger logs, and cross-references them with payroll records to detect discrepancies immediately.",
    useCases: [
      "FinTech Ledger Reconciliation & Verification",
      "Automated Monthly Payroll Verification",
      "Interactive Multi-Language Employee Support Chats"
    ],
    metrics: [
      { label: "Operational Overhead Reduction", value: "Up to 75%" },
      { label: "Ledger Reconciliation Accuracy", value: "99.8% Automated" },
      { label: "Query Resolution Time", value: "< 2 Seconds Average" }
    ],
    capabilities: [
      { title: "Automated Ledger Auditing", desc: "Instantly cross-reference database transactions with third-party banking logs and payment receipts." },
      { title: "Smart Anomaly Detection", desc: "Continuous heuristic checking of transaction volumes, payroll changes, and timing vectors to flag compliance risks." },
      { title: "AI Employee Self-Service", desc: "Conversational agents trained on organization-specific handbooks to resolve leave, payroll, and benefits queries." }
    ],
    faq: [
      { q: "How are the AI models updated on custom policies?", a: "We build dynamic Retrieval-Augmented Generation (RAG) indices. Any updates to your policy handbooks or wikis are instantly re-indexed, updating the model's knowledge in real-time." },
      { q: "What security is in place to protect financial data?", a: "The AI agent operates in a secure sandbox. Financial logs are processed in memory and are never used to train global public foundation models." }
    ]
  },
  concurrency: {
    title: "High-Concurrency Systems",
    subtitle: "Scale Handling Millions of Active Sessions",
    heroDesc: "Engineered for extreme scale. We build transaction engines, payment gateways, and streaming platforms that maintain sub-10ms response times even during massive traffic spikes.",
    details: "High-concurrency systems require non-blocking input/output architectures and state managers. We write customized goroutine pools and cache networks to ensure that millions of user interactions are processed in sub-millisecond ranges.",
    useCases: [
      "Real-Time FinTech Order Matching & Trading",
      "High-Volume E-Commerce Checkout Gateways",
      "Live Tracking & Stream Dashboard Synchronization"
    ],
    metrics: [
      { label: "Peak Connection Limit", value: "10M+ Concurrent Websockets" },
      { label: "API Response (p95)", value: "< 8.5ms Response Target" },
      { label: "Database Throughput Capacity", value: "100k+ Transactions/Sec" }
    ],
    capabilities: [
      { title: "Non-Blocking APIs", desc: "State channels using event loops to serve incoming HTTP and WebSocket packets with minimal thread contention." },
      { title: "Active-Active Database Meshes", desc: "Automated shard distribution across regions, guaranteeing high-availability read/write access under stress." },
      { title: "Envoy-Driven Rate Limiting", desc: "Intelligent gateway rate-limiting rules protecting backend pools from server overloads and DDoS issues." }
    ],
    faq: [
      { q: "How does the system handle database locks under high load?", a: "We utilize optimistic concurrency control and partitioned event queues to sequence mutations, avoiding heavy row locks in relational databases." },
      { q: "Can this system integrate with legacy banking structures?", a: "Yes. We deploy custom bridge microservices that translate high-volume incoming requests into batched ETL files suitable for legacy mainframes." }
    ]
  },
  compliance: {
    title: "Compliance & Auditing",
    subtitle: "SOC2 Frameworks & GDPR Pipelines",
    heroDesc: "Meet strict security requirements out of the box. We design infrastructure that complies with SOC2 Type II, GDPR, HIPAA, and ISO 27001 standards from the first line of code.",
    details: "Enterprise compliance is not an afterthought; it is built into the core. We construct isolated VPC structures, automated threat protection layers, and immutable audit logs that record every write action across the entire deployment.",
    useCases: [
      "HIPAA Compliant Health Record Portals",
      "GDPR Isolated Multi-Tenant SaaS Deployments",
      "FinTech Auditable Accounting Databases"
    ],
    metrics: [
      { label: "Compliance Standards Reached", value: "SOC2, GDPR, HIPAA, ISO" },
      { label: "Audit Ledger Immutability", value: "Cryptographically Chained" },
      { label: "Data Encryption Standard", value: "AES-256 / TLS 1.3 Strict" }
    ],
    capabilities: [
      { title: "Isolated Tenant Schema", desc: "Ensure complete logical isolation between enterprise client databases, preventing accidental cross-talk." },
      { title: "Chained Audit Logs", desc: "Cryptographic logging registers every admin action and database alteration, making it impossible to tamper with logs." },
      { title: "Automated Vulnerability Scans", desc: "Intrusion alerts and continuous container vulnerability checking integrated directly into the CI/CD pipeline." }
    ],
    faq: [
      { q: "Are compliance audits fully automated?", a: "We configure dashboard views that compile configurations, deployment histories, and VPC state files, simplifying compliance evidence generation." },
      { q: "How does the platform handle GDPR 'Right to be Forgotten' rules?", a: "We build automatic hard-delete pipelines that cascade through database tables and file buckets, completely purging customer data within the 30-day requirement." }
    ]
  }
};

export default function SolutionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const solutionId = params?.id as string;

  // Redirect solutions/hrms to /hrms
  useEffect(() => {
    if (solutionId === "hrms") {
      router.replace("/hrms");
    }
  }, [solutionId, router]);

  const data = SOLUTIONS_DATA[solutionId];

  // While redirecting or if loading
  if (solutionId === "hrms") {
    return (
      <div className="min-h-screen bg-brand-midnight flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-brand-cyan border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // If solution does not exist, show fallback
  if (!data) {
    return (
      <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
        <Navbar onOpenDemo={openDemo} />
        <main className="flex-grow z-10 pt-40 pb-24 text-center">
          <div className="max-w-md mx-auto px-6">
            <h1 className="text-3xl font-extrabold text-white mb-4">Solution Not Found</h1>
            <p className="text-slate-400 mb-8 font-sans">The custom solution catalog you requested does not exist or has been relocated.</p>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-full text-xs font-bold text-brand-midnight bg-gradient-to-r from-brand-teal to-brand-cyan"
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
      {/* Structural ambient overlays */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-cyan/5 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] bg-brand-teal/5 rounded-full blur-[110px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 font-sans">
            <a href="/" className="hover:text-brand-cyan transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-200">Solutions</span>
            <span>/</span>
            <span className="text-slate-200">{data.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-dark-gray/50">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-cyan">
                  Enterprise Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {data.title}
              </h1>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan block">
                {data.subtitle}
              </span>
              <p className="text-slate-300 text-lg leading-relaxed font-sans">
                {data.heroDesc}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={openDemo}
                  className="px-8 py-3.5 text-xs font-bold text-brand-midnight rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-xl hover:shadow-brand-cyan/25 hover:scale-[1.02] active:scale-100 transition-all duration-300 font-sans"
                >
                  Consult a Solution Specialist
                </button>
                <a
                  href="/#contact"
                  className="px-8 py-3.5 text-xs font-bold text-white rounded-full border border-slate-700 bg-brand-dark-gray/30 hover:border-brand-cyan/50 hover:bg-brand-dark-gray/60 transition-all duration-300 text-center font-sans"
                >
                  Request Technical Case Study
                </a>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="lg:col-span-4 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/60 p-8 shadow-xl">
              <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-400 border-b border-brand-dark-gray/50 pb-4 mb-6 font-sans">
                Key Performance Indicators
              </h3>
              <div className="space-y-6">
                {data.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block font-sans">
                      {metric.label}
                    </span>
                    <span className="text-lg font-bold text-white font-sans mt-1 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deep Dive & Use Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-brand-dark-gray/50 pt-16 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                Solution Overview
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                {data.details}
              </p>
            </div>

            {/* Target Use Cases Card */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-brand-midnight/60 border border-brand-cyan/10">
              <h3 className="text-sm font-bold text-white mb-4 font-sans">Target Implementation Areas</h3>
              <ul className="space-y-3 text-xs text-slate-400 leading-relaxed font-sans">
                {data.useCases.map((uc, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-10 border-t border-brand-dark-gray/50 pt-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans text-center lg:text-left">
              Engineered Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-3xl bg-brand-dark-gray/25 border border-brand-dark-gray/80 hover:border-brand-cyan/30 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors font-sans">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution FAQ Section (Accordions) */}
          <div className="border-t border-brand-dark-gray/50 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                Solution Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-sans">
                Learn more about integration timelines, data pipelines, and setup.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {data.faq.map((item, idx) => {
                const isOpen = activeFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen ? "bg-brand-dark-gray/50 border-brand-cyan/40" : "bg-brand-dark-gray/25 border-brand-dark-gray/80 hover:border-brand-cyan/20"
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white focus:outline-none"
                    >
                      <span className="font-sans">{item.q}</span>
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`}
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
                      <p className="p-6 text-sm text-slate-300 leading-relaxed font-sans">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
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
