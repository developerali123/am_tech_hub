"use client";

import { RiDoubleQuotesR, RiStarFill } from "@remixicon/react";

const TESTIMONIALS = [
  {
    quote: "Payroll processing time was reduced from two days to less than one hour.",
    role: "HR Manager",
    name: "Eleanor Vance",
    company: "TechSphere Inc.",
    avatar: "EV",
    color: "border-primary/20",
  },
  {
    quote: "The payroll ledgers and accounting integration eliminated manual reconciliations.",
    role: "Finance Manager",
    name: "Marcus Thorne",
    company: "Horizon Retail Group",
    avatar: "MT",
    color: "border-violet-500/20",
  },
  {
    quote: "We finally have complete visibility of our workforce operations.",
    role: "CEO",
    name: "Katarina Rostova",
    company: "Apex Global Services",
    avatar: "KR",
    color: "border-emerald-500/20",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/15 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
            Customer Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Loved by HR Teams & Executives
          </h2>
          <p className="text-muted-foreground text-sm">
            Read what managers, accountants, and CEOs say about streamlining their workforce compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-card border ${test.color} shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between`}
            >
              {/* Quote Mark */}
              <RiDoubleQuotesR className="absolute top-4 right-4 size-10 text-muted/30" />

              <div>
                {/* 5 Stars */}
                <div className="flex gap-0.5 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} className="size-4" />
                  ))}
                </div>

                <p className="text-sm font-medium text-foreground leading-relaxed mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground leading-tight">{test.name}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {test.role}, {test.company}
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
