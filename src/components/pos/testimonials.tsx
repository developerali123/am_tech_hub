"use client";

import React from "react";
import { RiDoubleQuotesR, RiStarFill, RiCheckboxCircleFill } from "@remixicon/react";

const TESTIMONIALS = [
  {
    quote: "Split payments and barcode scanning cut our cashier queues by more than half during peak rush hours. End-of-day register tallies match our cash drawer to the exact penny every single shift.",
    role: "Operations Manager",
    name: "Tariq Mahmood",
    company: "Al-Madina Superstore & Mart",
    avatar: "TM",
    highlight: "55% Faster Checkout",
    badgeColor: "bg-blue-500/10 text-[#0074d9] dark:text-[#4da3ff] border-blue-500/20",
    cardBorder: "border-border hover:border-[#0074d9]/50",
  },
  {
    quote: "Calculating CFT for wood planks and tracking serialized timber beams was a nightmare in paper khatas. The wood pack calculates volume formulas instantly and our commercial invoices are generated with zero customer disputes.",
    role: "Managing Partner",
    name: "Haji Abdul Rehman",
    company: "Rehman Lumber & Wood Trading",
    avatar: "AR",
    highlight: "100% Accurate CFT Invoicing",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    cardBorder: "border-border hover:border-emerald-500/50",
  },
  {
    quote: "Managing stock across our 4 apparel branches used to require constant phone calls. Now warehouse transfers and cashier floats are synchronized live, and FBR tax receipts print without a hitch.",
    role: "Retail Director",
    name: "Sana Tariq",
    company: "Vogue Retail Chain",
    avatar: "ST",
    highlight: "4 Outlets Synced Live",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    cardBorder: "border-border hover:border-cyan-500/50",
  },
];

const METRICS = [
  { label: "Register Uptime", value: "99.98%" },
  { label: "Average Checkout", value: "14.2s" },
  { label: "FBR Compliance", value: "100%" },
  { label: "Audit Speed", value: "5x Faster" },
];

export function POSTestimonials() {
  return (
    <section id="customer-success" className="py-20 md:py-28 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 mb-4 inline-flex items-center gap-1.5">
            <RiCheckboxCircleFill className="size-3.5 text-blue-600 dark:text-blue-400" />
            Customer Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Trusted by Retailers, Superstores & Wholesalers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Discover how retail owners, cashier leads, and timber merchants eliminated stockout blindspots and transformed daily counter speed.
          </p>
        </div>

        {/* Quick Operational Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {METRICS.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-card border border-border shadow-xs text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5"
            >
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                {m.value}
              </span>
              <span className="text-xs font-semibold text-muted-foreground mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-card border border-border hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-200 relative flex flex-col justify-between group"
            >
              {/* Subtle quote watermark */}
              <RiDoubleQuotesR className="absolute top-5 right-5 size-12 text-muted-foreground/20 group-hover:text-blue-500/15 transition-colors pointer-events-none" />

              <div>
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="size-4" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${test.badgeColor}`}>
                    {test.highlight}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-border">
                <div className="size-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-xs font-bold text-foreground shrink-0">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-snug">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {test.role} · <span className="text-foreground font-medium">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
