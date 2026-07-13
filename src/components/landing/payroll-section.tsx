"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  RiCheckboxCircleFill,
  RiBankCardLine,
  RiSettings3Line,
  RiLoader5Line,
  RiDownload2Line,
  RiArrowRightLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Payroll Periods & Frequency Config",
  "Automated Tax Slabs & Relief calculations",
  "Customizable Paycodes (Base, Allowances, Deductions)",
  "Double-Entry Accounting Rules alignment",
  "Settlement Accounts mapping per bank",
  "Payroll Ledgers & Journal ledger sync",
  "Secure Digital Payslips distribution",
];

const EMPLOYEES = [
  { name: "John Doe", title: "Engineering Lead", base: 8500, tax: 1950, net: 6550 },
  { name: "Sarah Jenkins", title: "Product Designer", base: 6200, tax: 1100, net: 5100 },
  { name: "David Miller", title: "Marketing Analyst", base: 4800, tax: 720, net: 4080 },
];

export function PayrollSection() {
  const [status, setStatus] = React.useState<"idle" | "running" | "success">("idle");
  const [progress, setProgress] = React.useState(0);
  const [currentStep, setCurrentStep] = React.useState("");

  const runPayroll = () => {
    setStatus("running");
    setProgress(0);
    setCurrentStep("Reconciling attendance sheets...");

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("success");
          return 100;
        }

        const next = prev + 10;
        if (next === 30) {
          setCurrentStep("Calculating tax slabs & deductions...");
        } else if (next === 60) {
          setCurrentStep("Structuring paycodes & ledger rules...");
        } else if (next === 85) {
          setCurrentStep("Generating payslips & digital invoices...");
        }
        return next;
      });
    }, 250);
  };

  const resetPayroll = () => {
    setStatus("idle");
    setProgress(0);
    setCurrentStep("");
  };

  return (
    <section id="payroll" className="py-20 md:py-28 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          {/* Left panel: Info & Feature Bullets */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
              Generate Payroll in Minutes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Payroll That Finance Teams Trust
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Eliminate manual reconciliation errors and spreadsheet hacks. Our double-entry bookkeeping ledger matches
              each payroll run to tax rules and custom charts of accounts.
            </p>

            <ul className="space-y-3">
              {FEATURES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                  <RiCheckboxCircleFill className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel: Live simulator card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Card top styling */}
              <div className="flex items-center justify-between pb-4 border-b border-border/80 mb-6">
                <div className="flex items-center gap-2">
                  <RiBankCardLine className="text-primary size-5" />
                  <span className="font-bold text-sm text-foreground">Cycle: May 2026</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">3 Employees Listed</span>
              </div>

              {/* Status conditional render */}
              {status === "idle" && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {EMPLOYEES.map((emp, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20 text-xs">
                        <div>
                          <p className="font-semibold text-foreground">{emp.name}</p>
                          <p className="text-muted-foreground text-[10px]">{emp.title}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">${emp.base.toLocaleString()}</p>
                          <p className="text-[10px] text-muted-foreground">Gross Salary</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button onClick={runPayroll} className="w-full rounded-full py-5 font-semibold text-sm shadow-md shadow-primary/10">
                    Process Payroll Run <RiArrowRightLine className="size-4 ml-1" />
                  </Button>
                </div>
              )}

              {status === "running" && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <RiLoader5Line className="size-10 text-primary animate-spin mb-4" />
                  <h4 className="font-bold text-sm text-foreground mb-2">Processing Payroll ledger...</h4>
                  <p className="text-xs text-muted-foreground min-h-[16px] mb-6">{currentStep}</p>

                  <div className="w-full bg-border rounded-full h-2 overflow-hidden mb-2">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-semibold">{progress}% complete</span>
                </div>
              )}

              {status === "success" && (
                <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full mb-2 inline-block">
                      Success
                    </span>
                    <h4 className="font-bold text-lg text-foreground">Payroll Processed</h4>
                    <p className="text-xs text-muted-foreground mt-1">Ledger, slips, and journals generated successfully.</p>
                  </div>

                  {/* Summary values */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-lg border border-border bg-muted/20">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Total Disbursement</span>
                      <p className="text-lg font-bold text-primary mt-0.5">$15,730</p>
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/20">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Tax Reconciled</span>
                      <p className="text-lg font-bold text-foreground mt-0.5">$3,770</p>
                    </div>
                  </div>

                  {/* Download and reset buttons */}
                  <div className="flex gap-2.5">
                    <Button variant="outline" className="flex-1 rounded-full text-xs py-5">
                      <RiDownload2Line className="size-4 mr-1 shrink-0" /> Ledger PDF
                    </Button>
                    <Button onClick={resetPayroll} className="flex-1 rounded-full text-xs py-5">
                      Reset Process
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
