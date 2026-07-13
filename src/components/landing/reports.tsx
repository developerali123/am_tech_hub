"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  RiBarChartGroupedLine,
  RiDownload2Line,
  RiFileExcelLine,
  RiCheckboxCircleLine,
  RiLoader5Line,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const REPORT_CATEGORIES = [
  { id: "attendance", name: "Attendance Reports", desc: "Track shifts rosters, absences, late check-ins, and overtime logs." },
  { id: "payroll", name: "Payroll Reports", desc: "Analyze gross-to-net pay summaries, tax allocations, and bank disbursement lists." },
  { id: "leave", name: "Leave Reports", desc: "Monitor annual leave balances, liabilities, and accruals history." },
  { id: "assessment", name: "Assessment Reports", desc: "Evaluate performance appraisal reviews distributions across departments." },
  { id: "loan", name: "Loan Reports", desc: "Reconcile outstanding advance balances, repayments ledger, and interests." },
  { id: "financial", name: "Financial Reports", desc: "Sync payroll expense journals directly to the general ledger chart of accounts." },
];

export function Reports() {
  const [activeCategory, setActiveCategory] = React.useState("attendance");
  const [exportState, setExportState] = React.useState<"idle" | "loading" | "success">("idle");

  const categoryInfo = REPORT_CATEGORIES.find((cat) => cat.id === activeCategory) || REPORT_CATEGORIES[0];

  const handleExport = () => {
    setExportState("loading");
    setTimeout(() => {
      setExportState("success");
      setTimeout(() => setExportState("idle"), 3000);
    }, 1500);
  };

  const renderSVGChart = () => {
    switch (activeCategory) {
      case "payroll":
        // Line chart representing 6 months of expenditures
        return (
          <svg className="w-full h-full text-primary" viewBox="0 0 400 180" fill="none">
            {/* Grid lines */}
            <line x1="0" y1="30" x2="400" y2="30" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />
            <line x1="0" y1="80" x2="400" y2="80" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />
            <line x1="0" y1="130" x2="400" y2="130" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />

            {/* Path */}
            <path
              d="M10,130 Q80,110 150,70 T290,50 T400,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Area under line */}
            <path
              d="M10,130 Q80,110 150,70 T290,50 T400,20 L400,180 L10,180 Z"
              fill="url(#gradient-payroll)"
              opacity="0.1"
            />

            {/* Dots */}
            <circle cx="150" cy="70" r="5" className="fill-card stroke-primary" strokeWidth="2.5" />
            <circle cx="290" cy="50" r="5" className="fill-card stroke-primary" strokeWidth="2.5" />

            <defs>
              <linearGradient id="gradient-payroll" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "leave":
        // Radial/Bar representation of Leave Types
        return (
          <div className="w-full h-full flex items-center justify-around">
            <div className="relative size-32">
              <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="oklch(var(--border) / 0.4)" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="oklch(var(--primary))"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="oklch(var(--accent-foreground))"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset="70"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-extrabold text-sm text-foreground">142 Days</span>
                <span className="text-[8px] text-muted-foreground">Total Month Taken</span>
              </div>
            </div>
            <div className="text-[10px] space-y-1.5">
              <div className="flex items-center gap-1.5"><span className="size-2.5 rounded bg-primary" /> Annual (65%)</div>
              <div className="flex items-center gap-1.5"><span className="size-2.5 rounded bg-accent-foreground" /> Sick (20%)</div>
              <div className="flex items-center gap-1.5"><span className="size-2.5 rounded bg-muted-foreground" /> Unpaid (15%)</div>
            </div>
          </div>
        );

      case "financial":
        // Financial ledger bars
        return (
          <div className="w-full h-full flex flex-col justify-between pt-2">
            {[
              { label: "Engineering Allowances", value: 45000, max: 60000, pct: "75%", color: "bg-blue-500" },
              { label: "Admin & Operations", value: 18000, max: 30000, pct: "60%", color: "bg-emerald-500" },
              { label: "Sales Commission", value: 38000, max: 40000, pct: "95%", color: "bg-primary" },
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px] font-semibold">
                  <span className="text-foreground">{bar.label}</span>
                  <span className="text-muted-foreground">${bar.value.toLocaleString()} / ${bar.max.toLocaleString()}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div className={cn("h-full rounded-full", bar.color)} style={{ width: bar.pct }} />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        // Default: Attendance Reports Bar Chart
        return (
          <svg className="w-full h-full text-primary" viewBox="0 0 400 180" fill="none">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="400" y2="40" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />
            <line x1="0" y1="90" x2="400" y2="90" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />
            <line x1="0" y1="140" x2="400" y2="140" stroke="oklch(var(--border) / 0.5)" strokeWidth="1" />

            {/* Bars */}
            <rect x="40" y="50" width="30" height="100" rx="4" fill="oklch(var(--primary))" />
            <rect x="110" y="70" width="30" height="80" rx="4" fill="oklch(var(--accent-foreground))" opacity="0.8" />
            <rect x="180" y="30" width="30" height="120" rx="4" fill="oklch(var(--primary))" />
            <rect x="250" y="80" width="30" height="70" rx="4" fill="oklch(var(--primary))" opacity="0.6" />
            <rect x="320" y="60" width="30" height="90" rx="4" fill="oklch(var(--primary))" opacity="0.4" />

            {/* Labels */}
            <text x="55" y="165" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">ENG</text>
            <text x="125" y="165" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">MKT</text>
            <text x="195" y="165" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">OPS</text>
            <text x="265" y="165" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">FIN</text>
            <text x="335" y="165" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">HR</text>
          </svg>
        );
    }
  };

  return (
    <section id="reports" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          {/* Details list (left) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
                Advanced Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Data-Driven Decisions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Export reports instantly for HR, management, and finance teams. Maintain oversight of cost distributions, roster overheads, and shift attendance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REPORT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExportState("idle");
                  }}
                  className={cn(
                    "text-left p-3.5 rounded-xl border transition-all text-xs flex flex-col justify-between min-h-[90px]",
                    activeCategory === cat.id
                      ? "bg-card border-primary shadow-sm ring-1 ring-primary"
                      : "bg-muted/15 border-border/80 hover:bg-muted/40"
                  )}
                >
                  <span className="font-bold text-foreground">{cat.name}</span>
                  <span className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-tight">
                    {cat.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Graphical mock panel (right) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl flex flex-col justify-between min-h-[360px] relative overflow-hidden">
              {/* Box Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/80">
                <div className="flex items-center gap-2">
                  <RiBarChartGroupedLine className="text-primary size-5" />
                  <span className="font-bold text-sm text-foreground">{categoryInfo.name} Live View</span>
                </div>

                {/* Export trigger button */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleExport}
                  disabled={exportState !== "idle"}
                  className="rounded-full h-8 text-[11px]"
                >
                  {exportState === "idle" && (
                    <>
                      <RiDownload2Line className="size-3.5 mr-1" /> Export Document
                    </>
                  )}
                  {exportState === "loading" && (
                    <>
                      <RiLoader5Line className="size-3.5 mr-1 animate-spin" /> Compiling...
                    </>
                  )}
                  {exportState === "success" && (
                    <>
                      <RiCheckboxCircleLine className="size-3.5 mr-1 text-emerald-500" /> Exported!
                    </>
                  )}
                </Button>
              </div>

              {/* Box Core visual (SVG graph area) */}
              <div className="flex-1 my-6 min-h-[180px] flex items-center justify-center">
                {renderSVGChart()}
              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-border/80 flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Updated 5 minutes ago</span>
                <span className="font-medium flex items-center gap-1">
                  <RiFileExcelLine className="size-3.5 text-emerald-600" /> Excel, CSV & PDF Formats Supported
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
