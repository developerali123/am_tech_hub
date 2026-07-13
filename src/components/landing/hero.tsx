"use client";

import { Button } from "@/components/ui/button";
import {
  RiUserAddLine,
  RiCheckboxCircleLine,
  RiBankCardLine,
  RiHandCoinLine,
  RiAwardLine,
  RiArrowRightUpLine,
  RiBarChartGroupedLine,
  RiGroupLine,
  RiCalendarCheckLine,
  RiTimeLine,
} from "@remixicon/react";

const STATS = [
  "Payroll in Minutes",
  "100% Attendance Tracking",
  "Configurable Approval Workflows",
  "Multi-Office Support",
];

export function Hero({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pb-32 bg-grid-pattern">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 size-[500px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />
      <div className="absolute top-1/3 right-1/4 -z-10 size-[400px] rounded-full bg-violet-500/10 blur-[100px] dark:bg-violet-500/5" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-20">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-6 animate-pulse">
            <span>✨</span> Everything HR Needs. Everything Payroll Demands. One Powerful Platform.
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Modern HR & Payroll Software for{" "}
            <span className="bg-gradient-to-r from-primary via-violet-500 to-indigo-600 bg-clip-text text-transparent">
              Growing Organizations
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Manage employees, attendance, shifts, leave, payroll, loans, performance, compliance, and approvals from a
            single platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto mb-10">
            <Button size="lg" className="w-full sm:w-auto rounded-full py-6 px-8 text-base shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/95 hover:to-violet-600/95" onClick={onOpenDemo}>
              Start Free Demo <RiArrowRightUpLine className="size-4 ml-1" />
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl mx-auto pt-6 border-t border-border/80">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-left">
                <RiCheckboxCircleLine className="size-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-foreground/80 leading-snug">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual: Mockup and Floating Cards */}
        <div className="relative max-w-5xl mx-auto mt-8">
          {/* Main Mockup Window */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-amber-400" />
                <div className="size-3 rounded-full bg-green-400" />
                <div className="h-5 w-40 rounded bg-border/40 ml-4 hidden sm:block" />
              </div>
              <div className="h-5 w-24 rounded bg-border/40" />
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 grid grid-cols-12 gap-4 p-4 md:p-6 overflow-hidden text-xs text-foreground/80">
              {/* Sidebar Mock */}
              <div className="col-span-3 hidden md:flex flex-col gap-3 border-r border-border pr-4">
                <div className="h-8 rounded bg-primary/10 border border-primary/20 flex items-center px-3 font-semibold text-primary">
                  Dashboard
                </div>
                {[
                  { icon: RiGroupLine, label: "Employees" },
                  { icon: RiCalendarCheckLine, label: "Attendance" },
                  { icon: RiBankCardLine, label: "Payroll Run" },
                  { icon: RiHandCoinLine, label: "Loans & Benefits" },
                  { icon: RiAwardLine, label: "Performance" },
                ].map((item, idx) => (
                  <div key={idx} className="h-8 rounded hover:bg-muted/60 flex items-center px-3 gap-2 cursor-pointer transition-all text-muted-foreground">
                    <item.icon className="size-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Content Mock */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-4 overflow-y-auto pr-1">
                {/* Stats Widgets */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Employees", value: "328", change: "+12 this month", color: "text-primary" },
                    { label: "Attendance Rate", value: "98.4%", change: "On Time", color: "text-emerald-500" },
                    { label: "Payroll Status", value: "May Ready", change: "100% Tax Compliant", color: "text-violet-500" },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-border bg-muted/20">
                      <div className="text-muted-foreground text-[10px] uppercase font-semibold">{stat.label}</div>
                      <div className={`text-xl font-bold my-1 ${stat.color}`}>{stat.value}</div>
                      <div className="text-muted-foreground text-[9px]">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Graph and List */}
                <div className="grid grid-cols-12 gap-3 flex-1">
                  {/* Mini Graph */}
                  <div className="col-span-12 sm:col-span-8 p-3 rounded-xl border border-border bg-muted/20 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Attendance & Shifts</span>
                      <span className="text-[10px] text-muted-foreground">Last 7 Days</span>
                    </div>
                    {/* SVG Chart */}
                    <div className="w-full h-24 flex items-end gap-1.5 pt-2">
                      {[65, 80, 75, 95, 98, 92, 98].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            style={{ height: `${h}%` }}
                            className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t-sm min-h-[10px] transition-all duration-500"
                          />
                          <span className="text-[8px] text-muted-foreground">Day {i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity log */}
                  <div className="col-span-12 sm:col-span-4 p-3 rounded-xl border border-border bg-muted/20 flex flex-col gap-2">
                    <span className="font-semibold mb-1">Company Calendar</span>
                    {[
                      { time: "09:00 AM", desc: "Shift Sync-up" },
                      { time: "11:30 AM", desc: "Leave Approvals Run" },
                      { time: "03:00 PM", desc: "Disbursement Complete" },
                    ].map((act, i) => (
                      <div key={i} className="flex items-start gap-2 border-b border-border/50 pb-1.5 last:border-b-0 last:pb-0">
                        <RiTimeLine className="size-3.5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-[10px] leading-tight">{act.desc}</p>
                          <p className="text-[8px] text-muted-foreground">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          {/* 1. Employee Joined */}
          <div className="absolute -top-6 -left-10 md:-left-12 lg:-left-20 max-w-[210px] p-3 rounded-xl border border-border bg-card/90 shadow-xl backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-3">
            <div className="size-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
              <RiUserAddLine className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Employee Joined</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1">Sarah Jenkins (UI Designer)</p>
              <span className="text-[9px] font-medium text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-full mt-1 inline-block">Welcome!</span>
            </div>
          </div>

          {/* 2. Leave Approved */}
          <div className="absolute top-1/4 -right-8 md:-right-12 lg:-right-16 max-w-[210px] p-3 rounded-xl border border-border bg-card/90 shadow-xl backdrop-blur-md animate-float-medium hidden sm:flex items-center gap-3">
            <div className="size-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0">
              <RiCheckboxCircleLine className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Leave Approved</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1">David Miller — Annual (5 days)</p>
              <span className="text-[9px] font-medium text-sky-600 bg-sky-500/10 px-1.5 py-0.5 rounded-full mt-1 inline-block">Manager Signed</span>
            </div>
          </div>

          {/* 3. Payroll Processed */}
          <div className="absolute -bottom-8 -left-8 md:-left-12 max-w-[220px] p-3 rounded-xl border border-border bg-card/90 shadow-xl backdrop-blur-md animate-float-medium hidden sm:flex items-center gap-3">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <RiBankCardLine className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Payroll Processed</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1">May Cycle Payout Complete</p>
              <span className="text-[9px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full mt-1 inline-block">100% Disbursed</span>
            </div>
          </div>

          {/* 4. Loan Disbursed */}
          <div className="absolute bottom-1/3 -right-12 lg:-right-24 max-w-[215px] p-3 rounded-xl border border-border bg-card/90 shadow-xl backdrop-blur-md animate-float-fast hidden sm:flex items-center gap-3">
            <div className="size-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <RiHandCoinLine className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Loan Disbursed</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1">$2,500 advance to John D.</p>
              <span className="text-[9px] font-medium text-amber-600 bg-amber-500/10 px-1.5 py-0.5 rounded-full mt-1 inline-block">Direct Deposit</span>
            </div>
          </div>

          {/* 5. Assessment Completed */}
          <div className="absolute -bottom-6 right-8 md:right-16 lg:right-24 max-w-[220px] p-3 rounded-xl border border-border bg-card/90 shadow-xl backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-3">
            <div className="size-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-500 shrink-0">
              <RiAwardLine className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Assessment Complete</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1">Q1 Performance Reviews</p>
              <span className="text-[9px] font-medium text-violet-600 bg-violet-500/10 px-1.5 py-0.5 rounded-full mt-1 inline-block">HR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
