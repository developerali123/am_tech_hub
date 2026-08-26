"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import ScrollToTop from "@/components/ScrollToTop";

// Data mapping for services
const SERVICES_DATA: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  architecture: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}> = {
  saas: {
    title: "SaaS Product Ecosystem",
    subtitle: "Enterprise HRMS & Automated Payroll",
    heroDesc: "Engineered for high-scale workforce operations. Our modular SaaS suite automates complex multi-state payroll, taxes, employee lifecycle compliance, and dynamic benefits management in real-time.",
    architecture: "Multi-tenant isolated microservices architecture utilizing containerized deployment instances. Schema-based tenant isolation ensures zero cross-leakage of workforce records, while event-driven triggers handle real-time calculations.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "Tenant Isolation Security", value: "Logical Schema Isolation" },
      { label: "Tax Calculation Accuracy", value: "100.00% (Guaranteed)" },
      { label: "ACH Processing Speed", value: "Instant / Next-Day ACH" },
      { label: "Active User Capacity", value: "1M+ Daily Active Users" }
    ],
    features: [
      { title: "Automated Tax Compliance", desc: "Real-time updates mapping local, state, and federal tax rates, generating automated declarations and filing schedules." },
      { title: "Direct Deposit Pipelines", desc: "Automated interfaces supporting instant clearing networks, ACH transactions, and digital payment rails." },
      { title: "Granular Role-Based Access Control", desc: "Organizational structure permission mapping allowing custom sub-admins, managers, and auditor roles." },
      { title: "Modular HR Modules", desc: "Pick-and-choose modules for onboarding workflows, document e-signing, leaves tracking, and benefit enrollments." }
    ],
    faq: [
      { q: "Is the payroll system compliant with local state tax regulations?", a: "Yes. The SaaS ecosystem automates compliance across all 50 states, handling local, state, and federal taxes dynamically based on employee work and residential locations." },
      { q: "How is employee personal identifiable information (PII) secured?", a: "All sensitive employee data is encrypted using AES-256 at rest and TLS 1.3 in transit. Databases are isolated logically per enterprise client with strict access parameters." }
    ]
  },
  ai: {
    title: "AI Agentic Automations",
    subtitle: "Intelligent Workflows & LLMs",
    heroDesc: "Deploying self-healing autonomous AI agents, fine-tuned LLMs, and semantic search (RAG) pipelines. We automate payroll reconciliation, smart roster compliance, and intelligent corporate knowledge retrieval.",
    architecture: "LLM Orchestration frameworks interacting with semantic index databases (vector stores). Agents execute action-feedback loops to self-correct process errors in queuing pipelines and log audits.",
    techStack: ["Python", "FastAPI", "LangChain", "LlamaIndex", "Pinecone / pgvector", "Llama-3", "Claude-3.5", "GPT-4o"],
    metrics: [
      { label: "Anomaly Detection Rate", value: "99.4% Automated Recall" },
      { label: "Semantic Search Latency", value: "< 85ms Query Responses" },
      { label: "Workflow Automation Rate", value: "80%+ Reduction in Ops Time" },
      { label: "Supported LLM Models", value: "Llama, Claude, GPT, Custom" }
    ],
    features: [
      { title: "Autonomous Audit Agents", desc: "Deploy continuous AI workers that audit transactions, cross-reference receipts with ledgers, and detect anomalies." },
      { title: "Retrieval Augmented Generation (RAG)", desc: "Build intelligent search interfaces over legal frameworks, internal handbooks, and compliance policies." },
      { title: "Automated Compliance Auditing", desc: "Instantly check worker scheduling rosters against labor laws, certifications, and union rules." },
      { title: "Self-Healing Operations", desc: "AI-driven automatic recovery mechanisms for standard queue blocks, pipeline retries, and data mapping." }
    ],
    faq: [
      { q: "Can we run the AI agents completely on-premise for security?", a: "Yes. We support deploying open-source models like Llama 3 on private VPC structures or on-premise hardware using Ollama or vLLM hosts." },
      { q: "How does the anomaly detection agent handle false positives?", a: "The agent assigns a confidence score to each flagged item. High-confidence issues trigger autonomous corrections, while borderline cases are queued for manual approval." }
    ]
  },
  dev: {
    title: "Custom Full-Stack Engineering",
    subtitle: "High-Concurrency Architectures",
    heroDesc: "High-performance backends built on robust microservices matrices. We design API gateways, stream processing pipelines, and state databases to manage millions of concurrent user transactions.",
    architecture: "High-throughput message broker systems coordinating real-time stream processing nodes. Database clusters utilize read-replicas and distributed caching to achieve sub-millisecond data reads.",
    techStack: ["Go", "Rust", "TypeScript", "Apache Kafka", "Redis Cluster", "PostgreSQL", "gRPC", "Envoy Gateway"],
    metrics: [
      { label: "API Gateway Latency (p99)", value: "< 12ms under load" },
      { label: "Message Processing Rate", value: "50,000+ events / second" },
      { label: "Database Read Availability", value: "Active-Active Multi-Region" },
      { label: "API Protocol Support", value: "gRPC, WebSocket, GraphQL, REST" }
    ],
    features: [
      { title: "Distributed Microservices", desc: "Decoupled backend services built in Go and Rust, coordinating via high-performance gRPC interfaces." },
      { title: "Sub-Millisecond API Gateways", desc: "Custom-configured routing layers utilizing rate-limit rules, edge token verification, and automated metrics collection." },
      { title: "High-Availability Databases", desc: "Distributed database layers utilizing database-level sharding, clustering, and automatic master failover." },
      { title: "Real-Time Stream Processing", desc: "Event-driven pipelines leveraging Apache Kafka and Flink for real-time tracking, ledger logs, and messaging." }
    ],
    faq: [
      { q: "What technologies do you recommend for real-time web applications?", a: "We primarily utilize Go or Node.js on the backend with WebSockets or Server-Sent Events, combined with Redis Pub/Sub for horizontal scaling." },
      { q: "How do you guarantee transaction atomicity in microservices?", a: "We implement architectural design patterns like the Saga Pattern (orchestration-based) or Outbox Pattern to maintain eventual consistency across distributed states." }
    ]
  },
  devops: {
    title: "Cloud & DevOps Architecture",
    subtitle: "High-Availability CI/CD Pipelines",
    heroDesc: "Automated cloud infrastructure tailored for strict compliance and continuous delivery. We scale with Kubernetes clusters, infrastructure-as-code, and isolated VPC networks.",
    architecture: "Immutable Infrastructure-as-Code definitions provisioning cloud networks. Kubernetes orchestrates self-healing container resources inside private VPC subnets with automatic scaling rules.",
    techStack: ["Terraform / OpenTofu", "Kubernetes", "AWS / GCP", "ArgoCD", "GitHub Actions", "Prometheus", "Grafana", "Vault"],
    metrics: [
      { label: "Deployment Downtime", value: "0.00 seconds (Zero-Downtime)" },
      { label: "Infrastructure Provisioning", value: "100% Declarative Codebase" },
      { label: "Security Compliance Level", value: "SOC2 Type II & GDPR Audit Ready" },
      { label: "Incident Recovery Time (MTTR)", value: "< 3 minutes Automated Rollback" }
    ],
    features: [
      { title: "Infrastructure as Code (IaC)", desc: "Maintainable, declarative definitions of networks, clusters, databases, and firewalls using Terraform templates." },
      { title: "Zero-Downtime CI/CD Blueprints", desc: "Automated deployment sequences supporting blue-green paths, canary releases, and instant error rollbacks." },
      { title: "Kubernetes & Docker Fabrics", desc: "Orchestrate scaling pods across dynamically sized node pools, optimizing CPU and memory distribution." },
      { title: "SOC2/GDPR Compliant Firewalls", desc: "Network security configurations including WAF, encryption of data in transit/rest, and secret managers." }
    ],
    faq: [
      { q: "Do you support multiple cloud providers (Multi-Cloud)?", a: "Yes. Our Terraform modules are structured to provision resource meshes across AWS, Google Cloud, and Microsoft Azure, avoiding vendor lock-in." },
      { q: "How are secrets managed inside deployment pipelines?", a: "We use secure vault managers like HashiCorp Vault or AWS Secrets Manager to inject environment configurations dynamically during runtime, avoiding hardcoded keys." }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const serviceId = params?.id as string;
  const data = SERVICES_DATA[serviceId];

  // If service does not exist, show fallback
  if (!data) {
    return (
      <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
        <Navbar onOpenDemo={() => {}} />
        <main className="flex-grow z-10 pt-40 pb-24 text-center">
          <div className="max-w-md mx-auto px-6">
            <h1 className="text-3xl font-extrabold text-white mb-4">Service Not Found</h1>
            <p className="text-slate-400 mb-8 font-sans">The service catalog you requested does not exist or has been relocated.</p>
            <button
              onClick={() => router.push("/services")}
              className="px-6 py-3 rounded-full text-xs font-bold text-brand-midnight bg-gradient-to-r from-brand-teal to-brand-cyan"
            >
              Back to Services
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
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={() => {}} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-8xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 font-sans">
            <a href="/services" className="hover:text-brand-teal transition-colors">Services</a>
            <span>/</span>
            <span className="text-slate-200">{data.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                  Technical Specifications
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {data.title}
              </h1>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-teal block">
                {data.subtitle}
              </span>
              <p className="text-slate-300 text-lg leading-relaxed font-sans">
                {data.heroDesc}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3.5 text-xs font-bold text-brand-midnight rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-xl hover:shadow-brand-teal/25 hover:scale-[1.02] active:scale-100 transition-all duration-300 font-sans text-center"
                >
                  Consult an Architect
                </a>
              </div>
            </div>

            {/* Architecture Metrics Panel */}
            <div className="lg:col-span-4 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/60 p-8 shadow-xl">
              <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-400 border-b border-brand-dark-gray/50 pb-4 mb-6 font-sans">
                System Standards
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

          {/* Deep Dive & Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-brand-dark-gray/50 pt-16 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                Core Architectural Approach
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                {data.architecture}
              </p>

              {/* Technologies List */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-sans">
                  ENGINEERING TOOLCHAIN & STACK
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {data.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-brand-midnight text-xs font-bold text-slate-300 border border-brand-teal/10 hover:border-brand-teal/30 hover:text-brand-teal transition-all duration-200 font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Highlights Card */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-brand-midnight/60 border border-brand-teal/10">
              <h3 className="text-sm font-bold text-white mb-4 font-sans">System Security</h3>
              <ul className="space-y-3 text-xs text-slate-400 leading-relaxed font-sans">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0"></span>
                  Data isolation validation per deployment instance.
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0"></span>
                  End-to-end data encryption via AES-256 and TLS 1.3 standards.
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0"></span>
                  Comprehensive logging infrastructure mapping audit records.
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-10 border-t border-brand-dark-gray/50 pt-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans text-center lg:text-left">
              Engineered Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-8 rounded-3xl bg-brand-dark-gray/25 border border-brand-dark-gray/80 hover:border-brand-teal/30 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-teal transition-colors font-sans">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQ Section (Accordions) */}
          <div className="border-t border-brand-dark-gray/50 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                Service Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-sans">
                Find quick technical answers about our integration standards and deployments.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {data.faq.map((item, idx) => {
                const isOpen = activeFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen ? "bg-brand-dark-gray/50 border-brand-teal/40" : "bg-brand-dark-gray/25 border-brand-dark-gray/80 hover:border-brand-teal/20"
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white focus:outline-none"
                    >
                      <span className="font-sans">{item.q}</span>
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-teal" : ""}`}
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
            <div id="contact" className="border-t border-brand-dark-gray/50 pt-16 mt-16 scroll-mt-24">
              <ContactUs />
            </div>

          </div>
        </div>
      </main>

        {/* Footer */}
        <Footer />

        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
      </div>
  );
}
