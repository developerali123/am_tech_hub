"use client";

import { RiCloseCircleLine, RiCheckboxCircleFill, RiArrowRightLine, RiErrorWarningLine } from "@remixicon/react";

const BEFORE_ITEMS = [
  "Manual attendance reconciliation",
  "Payroll errors and manual calculations",
  "Leave disputes and scheduling overlaps",
  "Scattered employee records across folders",
  "Complex approval chains delayed in inbox",
];

const AFTER_ITEMS = [
  "Automated payroll in minutes",
  "Real-time attendance & shift roster synchronization",
  "Centralized employee records & directory",
  "Configurable approval workflows (no-code)",
  "Accurate audit-ready reports and exports",
];

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Stop Managing HR Through Spreadsheets
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Traditional tools create chaos and cost hours of manual administrative labor. Upgrade to a modern platform
            built to scale.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {/* Before: Red Card */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 dark:bg-destructive/10/5 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/60" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-destructive/10 text-destructive">
                  <RiErrorWarningLine className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Spreadsheets & Paper</h3>
                  <p className="text-xs text-destructive">Fragmented & Error-Prone</p>
                </div>
              </div>

              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                    <RiCloseCircleLine className="size-5 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-destructive/10 text-xs text-destructive font-medium flex items-center gap-1.5">
              <span>Average loss: 12-15 administrative hours per week</span>
            </div>
          </div>

          {/* After: Green Card */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10/5 p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-violet-500" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <RiCheckboxCircleFill className="size-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-foreground">HRFlow Platform</h3>
                  <p className="text-xs text-primary">Unified & Automated</p>
                </div>
              </div>

              <ul className="space-y-4">
                {AFTER_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                    <RiCheckboxCircleFill className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 text-xs text-primary font-semibold flex items-center justify-between">
              <span>95% workflow efficiency improvement</span>
              <a href="#cta" className="flex items-center gap-0.5 hover:underline group-hover:translate-x-0.5 transition-transform">
                See how it works <RiArrowRightLine className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
