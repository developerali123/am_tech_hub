"use client";

import * as React from "react";
import {
  RiUserHeartLine,
  RiFileList3Line,
  RiCalendarCheckLine,
  RiBankCardLine,
  RiHandCoinLine,
  RiMoneyDollarCircleLine,
  RiVolumeUpLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const SELF_SERVICE_OPTIONS = [
  {
    id: "leave",
    title: "Apply Leave",
    desc: "Submit vacation requests, view remaining balances, and check approval status instantly.",
    icon: RiFileList3Line,
    color: "text-blue-500 bg-blue-500/10",
    mockup: {
      title: "Request Leave",
      badge: "Annual Leave",
      content: (
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-muted/30 border border-border">
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Remaining Balance</span>
            <p className="text-xl font-bold text-foreground mt-0.5">14.5 Days</p>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-muted-foreground uppercase">Dates</label>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-center">
              <div className="p-2 rounded bg-muted/40 border border-border">June 15, 2026</div>
              <div className="p-2 rounded bg-muted/40 border border-border">June 19, 2026</div>
            </div>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs text-center shadow-md">
            Submit Request
          </button>
        </div>
      ),
    },
  },
  {
    id: "payslips",
    title: "Download Payslips",
    desc: "Access historical earnings summaries, tax deductions, and download legal PDFs.",
    icon: RiBankCardLine,
    color: "text-emerald-500 bg-emerald-500/10",
    mockup: {
      title: "My Payslips",
      badge: "May 2026 Cycle",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2.5 rounded-lg border border-border bg-muted/20">
            <div>
              <p className="font-bold text-[11px] text-foreground">May Payslip</p>
              <p className="text-[9px] text-muted-foreground">Disbursed on May 30</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
              $5,100
            </span>
          </div>
          <div className="flex justify-between items-center p-2.5 rounded-lg border border-border bg-muted/20">
            <div>
              <p className="font-bold text-[11px] text-foreground">April Payslip</p>
              <p className="text-[9px] text-muted-foreground">Disbursed on April 28</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
              $5,100
            </span>
          </div>
          <button className="w-full py-2.5 rounded-lg border border-border hover:bg-muted/40 text-foreground font-semibold text-xs text-center flex items-center justify-center gap-1.5">
            Download Latest PDF
          </button>
        </div>
      ),
    },
  },
  {
    id: "expenses",
    title: "Submit Expenses",
    desc: "Snap receipts, categorize meals or transit, and trace reimbursement pipelines.",
    icon: RiMoneyDollarCircleLine,
    color: "text-violet-500 bg-violet-500/10",
    mockup: {
      title: "New Expense Claim",
      badge: "Travel & Transit",
      content: (
        <div className="space-y-4">
          <div className="border border-dashed border-border rounded-lg p-5 text-center bg-muted/10 cursor-pointer hover:bg-muted/20 transition-all flex flex-col items-center">
            <span className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">📸</span>
            <span className="font-semibold text-[10px] text-foreground">Upload Receipt</span>
            <span className="text-[8px] text-muted-foreground mt-0.5">JPEG, PNG, or PDF</span>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-muted-foreground uppercase">Amount</label>
            <input
              type="text"
              placeholder="e.g. $45.00"
              className="w-full px-3 py-2 text-xs rounded border border-border bg-background focus:outline-none"
              disabled
            />
          </div>
          <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs text-center">
            Submit Expense
          </button>
        </div>
      ),
    },
  },
];

export function SelfService() {
  const [selectedId, setSelectedId] = React.useState("leave");

  const optionInfo = SELF_SERVICE_OPTIONS.find((opt) => opt.id === selectedId) || SELF_SERVICE_OPTIONS[0];

  return (
    <section id="self-service" className="py-20 md:py-28 relative overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          {/* Mobile frame mockup (left) */}
          <div className="lg:col-span-5 flex justify-center relative order-last lg:order-first">
            <div className="size-72 absolute -z-10 rounded-full bg-violet-500/15 blur-[60px] top-1/4" />

            {/* Mobile casing */}
            <div className="w-[280px] h-[550px] rounded-[36px] border-[8px] border-slate-900 bg-background shadow-2xl relative flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-b-xl z-20" />

              {/* Status bar */}
              <div className="h-6 flex justify-between items-center px-6 pt-3 text-[9px] text-muted-foreground font-mono">
                <span>09:41</span>
                <span className="flex items-center gap-1">📶 🔋</span>
              </div>

              {/* Simulated App Header */}
              <div className="p-4 border-b border-border/80 flex items-center justify-between mt-2">
                <div>
                  <p className="text-[9px] text-muted-foreground font-semibold">Self-Service Portal</p>
                  <h4 className="font-bold text-sm text-foreground">{optionInfo.mockup.title}</h4>
                </div>
                <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {optionInfo.mockup.badge}
                </span>
              </div>

              {/* Simulated App Body */}
              <div className="flex-1 p-4 overflow-y-auto text-xs bg-muted/10">
                {optionInfo.mockup.content}
              </div>

              {/* Nav Mock */}
              <div className="h-12 border-t border-border bg-card flex items-center justify-around text-[9px] text-muted-foreground px-2">
                <span className="text-primary font-bold">🏠 Home</span>
                <span>📅 Roster</span>
                <span>💰 Payouts</span>
                <span>⚙️ Account</span>
              </div>
            </div>
          </div>

          {/* Details list (right) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
                Employee Empowerment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Empower Employees Through Self-Service
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Give your workforce direct control. Employees can perform all vital tasks, check their schedule allowances, and request disbursements without overloading the HR operations team.
              </p>
            </div>

            <div className="space-y-4">
              {SELF_SERVICE_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = opt.id === selectedId;

                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer",
                      isSelected
                        ? "bg-card border-primary shadow-md ring-1 ring-primary"
                        : "bg-muted/10 border-border hover:bg-muted/30"
                    )}
                  >
                    <div className={cn("p-2.5 rounded-lg shrink-0 mt-0.5", opt.color)}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-sm text-foreground">{opt.title}</h4>
                        <RiArrowRightSLine className={cn("size-4 text-muted-foreground transition-transform", isSelected ? "translate-x-1" : "")} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Tiny bullet list for remaining self-service items */}
              <div className="pt-4 border-t border-border/80 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <RiCalendarCheckLine className="size-4 text-primary shrink-0" />
                  <span>View Shift Attendance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RiHandCoinLine className="size-4 text-primary shrink-0" />
                  <span>Track Loan Balances</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RiVolumeUpLine className="size-4 text-primary shrink-0" />
                  <span>View Announcements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
