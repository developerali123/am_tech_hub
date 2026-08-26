"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

const BLOG_POSTS_DATA: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  content: React.ReactNode;
}> = {
  "scaling-redis": {
    title: "Scaling Redis for 10M Concurrent WebSockets",
    subtitle: "Memory layout models, cluster pub/sub channels, and pooling optimization metrics.",
    category: "Infrastructure",
    readTime: "8 min read",
    author: "Ali Mirza",
    date: "August 24, 2026",
    content: (
      <div className="space-y-6">
        <p>
          Managing millions of open WebSocket connections is an architectural challenge, particularly in serverless or containerized environments. Standard stateful connections demand massive RAM layouts. By introducing Redis Pub/Sub as an event coordination bus, we distribute session states cleanly.
        </p>
        <h3 className="text-lg font-bold text-white font-sans mt-8">WebSocket Mesh Topology</h3>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-brand-teal overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`[Client Sessions]  -->  [Next.js Socket Nodes (Scale)]
                              |
                              +--> [Redis Sentinel / Cluster Bus]
                                         |
                                         +--> [Pub/Sub Ledger Streams]`}
        </pre>
        <h3 className="text-lg font-bold text-white font-sans mt-8">Memory Footprint Reductions</h3>
        <p>
          Each WebSocket handle normally requires ~25KB of system memory buffer in Node.js. By pooling sockets and delegating heartbeat registers directly to a shared Redis cluster hash mapping, we cut local socket RAM overhead by up to 60%.
        </p>
        <h3 className="text-lg font-bold text-white font-sans mt-8">Code Setup: Redis connection pooling</h3>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`import Redis from "ioredis";

const redisPool = new Redis.Cluster([
  { host: "redis-node-1", port: 6379 },
  { host: "redis-node-2", port: 6379 }
], {
  scaleReads: "slave",
  maxRedirections: 16
});`}
        </pre>
      </div>
    )
  },
  "event-driven-ledger": {
    title: "Event-Driven Ledger Reconciliation with Go & Kafka",
    subtitle: "Achieving eventual consistency and transactional verification at scale.",
    category: "Backend",
    readTime: "6 min read",
    author: "S. Tanveer",
    date: "August 12, 2026",
    content: (
      <div className="space-y-6">
        <p>
          Relational database systems struggle to reconcile concurrent payouts under strict ACID boundaries at high transaction volumes. We decoupled write operations from audits by introducing an event-sourcing ledger pattern via Apache Kafka and a high-performance Go reconciliation daemon.
        </p>
        <h3 className="text-lg font-bold text-white font-sans mt-8">Log-Structured Ledger Design</h3>
        <p>
          Instead of performing direct resource updates, mutations are recorded as immutable event sequences in Kafka partitions. A consumer daemon reads these logs sequentially, resolving account balances in transaction batches.
        </p>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-brand-teal overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`[Transaction Request] --> [Kafka Event Log (Partitioned)]
                                   |
                                   +--> [Go Daemon (Batch Audits)]
                                              |
                                              +--> [PostgreSQL (Index States)]`}
        </pre>
        <h3 className="text-lg font-bold text-white font-sans mt-8">Transaction Processing Loop (Go)</h3>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`func ProcessEvents(ctx context.Context, reader *kafka.Reader) {
    for {
        msg, err := reader.ReadMessage(ctx)
        if err != nil {
            log.Fatalf("failed reading ledger batch: %v", err)
        }
        ReconcileTx(msg.Value)
    }
}`}
        </pre>
      </div>
    )
  },
  "soc2-compliance": {
    title: "SOC2 Compliance: Setting Up VPCs with OpenTofu",
    subtitle: "Declarative infrastructure-as-code configuration for strict audit parameters.",
    category: "Security",
    readTime: "11 min read",
    author: "DevOps Team",
    date: "July 29, 2026",
    content: (
      <div className="space-y-6">
        <p>
          SOC2 audit requirements demand logical data boundaries, explicit network firewalls, and immutable admin audit trails. Building these architectures manually invites configuration drift and security leaks. We declarative-code our VPC topology using OpenTofu template standards.
        </p>
        <h3 className="text-lg font-bold text-white font-sans mt-8">Isolated Network Schema</h3>
        <p>
          All application tasks execute inside isolated private subnets. Communication with external APIs must go through authenticated NAT gateways, while administrative console sessions require multi-factor client VPN connections.
        </p>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-brand-teal overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`[Internet Gateway]  --> [WAF Shield]  --> [Application Load Balancer]
                                                    |
                                                    +--> [Private VPC Subnet]`}
        </pre>
        <h3 className="text-lg font-bold text-white font-sans mt-8">OpenTofu Declarative Module Example</h3>
        <pre className="p-4 rounded-xl bg-brand-midnight text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-brand-teal/10">
          {`resource "tofu_vpc" "production_mesh" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Compliance = "SOC2-TypeII"
    Security   = "Strict-Isolation"
  }
}`}
        </pre>
      </div>
    )
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const blogId = params?.id as string;
  const post = BLOG_POSTS_DATA[blogId];

  // If blog post does not exist, show fallback
  if (!post) {
    return (
      <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
        <Navbar onOpenDemo={openDemo} />
        <main className="flex-grow z-10 pt-40 pb-24 text-center">
          <div className="max-w-md mx-auto px-6">
            <h1 className="text-3xl font-extrabold text-white mb-4 font-sans">Article Not Found</h1>
            <p className="text-slate-400 mb-8 font-sans">The blog post you requested does not exist or has been relocated.</p>
            <button
              onClick={() => router.push("/blog")}
              className="px-6 py-3 rounded-full text-xs font-bold text-brand-midnight bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-lg hover:shadow-brand-teal/20 transition-all"
            >
              Back to Blog
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
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 font-sans">
            <a href="/blog" className="hover:text-brand-teal transition-colors">Blog</a>
            <span>/</span>
            <span className="text-slate-200">{post.title}</span>
          </nav>

          {/* Header Block */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 py-0.5 rounded bg-brand-teal/10">
                {post.category}
              </span>
              <span className="text-[10px] text-slate-500 font-bold">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-400 text-lg font-sans">
              {post.subtitle}
            </p>

            <div className="pt-4 border-y border-brand-dark-gray/60 py-4 flex justify-between items-center text-xs text-slate-500 font-bold">
              <span>Published by {post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="text-slate-300 leading-relaxed font-sans prose prose-invert max-w-none">
            {post.content}
          </div>

          {/* Footer Back Link */}
          <div className="pt-12 border-t border-brand-dark-gray/60 mt-12">
            <button
              onClick={() => router.push("/blog")}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-cyan transition-colors"
            >
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back to Blog roll
            </button>
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
