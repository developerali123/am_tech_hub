"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function BlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const posts = [
    {
      id: "scaling-redis",
      title: "Scaling Redis for 10M Concurrent WebSockets",
      excerpt: "An in-depth look at connection pooling, memory optimization, and pub/sub sharding inside high-load Next.js environments.",
      date: "August 24, 2026",
      readTime: "8 min read",
      author: "Ali Mirza",
      category: "Infrastructure",
    },
    {
      id: "event-driven-ledger",
      title: "Event-Driven Ledger Reconciliation with Go & Kafka",
      excerpt: "How we designed a zero-downtime ledger migration pipeline that validates transaction state in sub-millisecond ranges.",
      date: "August 12, 2026",
      readTime: "6 min read",
      author: "S. Tanveer",
      category: "Backend",
    },
    {
      id: "soc2-compliance",
      title: "SOC2 Compliance: Setting Up VPCs with OpenTofu",
      excerpt: "Step-by-step automation guides for provisioning isolated subnets, WAF layers, and cryptographic vault meshes.",
      date: "July 29, 2026",
      readTime: "11 min read",
      author: "DevOps Team",
      category: "Security",
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-gradient text-slate-100 flex flex-col justify-between overflow-x-hidden bg-grid-lines">
      {/* Structural ambient overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar onOpenDemo={openDemo} />

      {/* Main Page Layout */}
      <main className="flex-grow z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Header Block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                Engineering Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-sans">
              Technical Insights & Blueprints
            </h1>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              Deep-dives into systems architecture, low-latency APIs, automated compliance, and B2B SaaS engineering standards.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <a
                href={`/blog/${post.id}`}
                key={post.id}
                className="block hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <article
                  className="p-8 rounded-3xl bg-brand-dark-gray/25 border border-brand-dark-gray/80 hover:border-brand-teal/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-[35px] pointer-events-none"></div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 py-0.5 rounded bg-brand-teal/10">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors font-sans leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-dark-gray/60 mt-6 flex justify-between items-center text-[10px] text-slate-500 font-bold">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              </a>
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
