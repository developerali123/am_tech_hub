"use client";

import { RiStackFill, RiShieldCheckLine, RiFlashlightLine } from "@remixicon/react";

const TABLE_DATA = [
  { feature: "Advanced Search", benefit: "Find records instantly" },
  { feature: "Smart Filters", benefit: "Analyze data faster" },
  { feature: "Bulk Import", benefit: "Save hours of manual entry" },
  { feature: "Data Export", benefit: "Simplify reporting" },
  { feature: "Ready-Made Templates", benefit: "Faster implementation" },
  { feature: "Pagination", benefit: "Smooth navigation" },
  { feature: "Audit Logs", benefit: "Full traceability" },
  { feature: "Approval Workflows", benefit: "Controlled processes" },
];

export function ProductivityTable() {
  return (
    <section id="productivity-table" className="py-20 md:py-28 bg-muted/10 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        {/* Productivity Copy Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block self-start">
              Enterprise Productivity
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground leading-tight">
              Designed for Teams That Manage Large Workforces
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you&apos;re managing hundreds or thousands of employees, our platform helps HR, Finance and Operations
              teams work faster with advanced search, smart filters, bulk imports, data exports and optimized performance
              across every module.
            </p>
          </div>
        </div>

        {/* Premium SaaS Table */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden mb-16">
          <div className="p-4 md:p-6 border-b border-border bg-muted/20 flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-foreground flex items-center gap-2">
              <RiStackFill className="text-primary size-5" /> Enterprise Features Included
            </h3>
            <span className="text-[10px] font-bold text-muted-foreground uppercase">Workforce Operations Grid</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-muted/15 text-muted-foreground font-bold border-b border-border/80 uppercase tracking-wider text-[10px]">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6">Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/10 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-foreground flex items-center gap-2">
                      <RiShieldCheckLine className="size-4 text-primary shrink-0 opacity-80" />
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-6 text-muted-foreground font-medium">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Short Marketing Copy Banner */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="text-left max-w-xl">
            <h4 className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
              <RiFlashlightLine className="size-4 text-primary shrink-0 animate-pulse" /> More than HRMS
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A complete workforce operations platform with powerful data management, automation, reporting, and payroll
              capabilities designed for growing organizations.
            </p>
          </div>
          <a
            href="#cta"
            className="shrink-0 text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 hover:underline"
          >
            Get Started Now &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
