"use client";

import * as React from "react";
import {
  RiUserLine,
  RiBriefcaseLine,
  RiShieldCheckLine,
  RiHandCoinLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiArrowDownLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const REQUEST_TYPES = [
  {
    id: "leave",
    name: "Leave Request",
    description: "Annual leave routing with balance deduct",
    steps: [
      { role: "Employee", detail: "Applies for 5 days of vacation via self-service", avatar: "JD" },
      { role: "Department Head", detail: "Checks department roster for scheduling overlaps", avatar: "MS" },
      { role: "HR Manager", detail: "Validates remaining leave balance limit in ledger", avatar: "LH" },
      { role: "Finance Officer", detail: "Pre-calculates shift allowances adjustments", avatar: "RK" },
      { role: "Approved", detail: "Balance deducted and calendar calendar updated", avatar: "✓" },
    ],
  },
  {
    id: "expense",
    name: "Expense Claim",
    description: "Reimbursement workflow with receipt scan",
    steps: [
      { role: "Employee", detail: "Uploads client dinner receipt of $120.00", avatar: "JD" },
      { role: "Department Head", detail: "Approves project budget allocation alignment", avatar: "MS" },
      { role: "HR Manager", detail: "Confirms standard entertainment policy limits", avatar: "LH" },
      { role: "Finance Officer", detail: "Triggers direct bank deposit reimbursement", avatar: "RK" },
      { role: "Approved", detail: "Reimbursement journalized in Chart of Accounts", avatar: "✓" },
    ],
  },
  {
    id: "noc",
    name: "NOC Request",
    description: "No Objection Certificate processing",
    steps: [
      { role: "Employee", detail: "Requests NOC for higher education or travel", avatar: "JD" },
      { role: "Department Head", detail: "Reviews performance stats and recommendation", avatar: "MS" },
      { role: "HR Manager", detail: "Generates secure digital certificate with QR seal", avatar: "LH" },
      { role: "Finance Officer", detail: "Reconciles outstanding advance loans and bills", avatar: "RK" },
      { role: "Approved", detail: "NOC sent via email and saved in digital locker", avatar: "✓" },
    ],
  },
];

export function ApprovalWorkflow() {
  const [selectedRequest, setSelectedRequest] = React.useState("leave");
  const [activeStep, setActiveStep] = React.useState(0);

  // Auto-progress steps animation
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(timer);
  }, [selectedRequest]);

  const requestInfo = REQUEST_TYPES.find((r) => r.id === selectedRequest) || REQUEST_TYPES[0];

  const getStepIcon = (role: string) => {
    switch (role) {
      case "Employee":
        return RiUserLine;
      case "Department Head":
        return RiBriefcaseLine;
      case "HR Manager":
        return RiShieldCheckLine;
      case "Finance Officer":
        return RiHandCoinLine;
      default:
        return RiCheckboxCircleLine;
    }
  };

  return (
    <section id="approvals" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
            Fully Automated Approvals
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Build Approval Workflows That Match Your Organization
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Configure approval chains for leave, expenses, assessments, resignations, NOCs, and payroll actions without code.
          </p>
        </div>

        {/* Dynamic Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Options side panel */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 w-full snap-x">
            {REQUEST_TYPES.map((req) => (
              <button
                key={req.id}
                onClick={() => {
                  setSelectedRequest(req.id);
                  setActiveStep(0);
                }}
                className={cn(
                  "flex-1 min-w-[200px] lg:w-full text-left p-4 rounded-xl border transition-all duration-200 snap-start",
                  selectedRequest === req.id
                    ? "bg-card border-primary shadow-md shadow-primary/5 ring-1 ring-primary"
                    : "bg-muted/30 border-border/80 hover:bg-muted/60"
                )}
              >
                <h4 className="font-bold text-sm text-foreground">{req.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{req.description}</p>
              </button>
            ))}
          </div>

          {/* Workflow Canvas */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            {/* Diagram header */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-muted-foreground uppercase">Live Workflow Preview</span>
              <span className="text-xs text-primary font-semibold flex items-center gap-1">
                <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                Step {activeStep + 1} of 5 Active
              </span>
            </div>

            {/* Workflow steps diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 my-auto">
              {requestInfo.steps.map((step, idx) => {
                const StepIcon = getStepIcon(step.role);
                const isCompleted = idx < activeStep;
                const isActive = idx === activeStep;
                const isFuture = idx > activeStep;

                return (
                  <React.Fragment key={idx}>
                    {/* Node Card */}
                    <div
                      className={cn(
                        "relative flex flex-col items-center p-4 rounded-xl border text-center transition-all duration-300 w-full lg:w-[120px] cursor-pointer",
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                          : isCompleted
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:bg-emerald-950/20"
                          : "bg-muted/20 border-border text-muted-foreground"
                      )}
                      onClick={() => setActiveStep(idx)}
                    >
                      {/* Avatar initial or icon */}
                      <div
                        className={cn(
                          "size-8 rounded-full flex items-center justify-center font-bold text-xs mb-2 shadow-inner",
                          isActive
                            ? "bg-white text-primary"
                            : isCompleted
                            ? "bg-emerald-500 text-white"
                            : "bg-border text-muted-foreground"
                        )}
                      >
                        {step.role === "Approved" ? "✓" : step.avatar}
                      </div>

                      {/* Icon badge */}
                      <div className="absolute top-2 right-2 opacity-60">
                        <StepIcon className="size-3.5" />
                      </div>

                      <h5 className="font-bold text-[10px] uppercase tracking-wide leading-none">{step.role}</h5>
                      <span className="text-[8px] mt-1 opacity-80 hidden lg:block">Click to inspect</span>
                    </div>

                    {/* Connecting arrow */}
                    {idx < 4 && (
                      <>
                        <RiArrowRightLine
                          className={cn(
                            "size-5 hidden lg:block transition-all",
                            isCompleted ? "text-emerald-500" : isActive ? "text-primary animate-pulse" : "text-border"
                          )}
                        />
                        <RiArrowDownLine
                          className={cn(
                            "size-5 block lg:hidden transition-all",
                            isCompleted ? "text-emerald-500" : isActive ? "text-primary animate-pulse" : "text-border"
                          )}
                        />
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Info Drawer showing active step description */}
            <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border/80 transition-all duration-300">
              <h6 className="font-bold text-xs uppercase text-foreground mb-1">
                Active Node: {requestInfo.steps[activeStep].role}
              </h6>
              <p className="text-xs text-muted-foreground">{requestInfo.steps[activeStep].detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
