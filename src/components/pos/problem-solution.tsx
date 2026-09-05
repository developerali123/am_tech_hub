"use client";

import React from "react";
import {
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiAlertLine,
  RiSparklingLine,
  RiArrowRightLine,
} from "@remixicon/react";

export function POSProblemSolution() {
  const PAIN_POINTS = [
    {
      title: "Stockout Blindspots & Lost Margins",
      desc: "Items run out on the retail floor while sitting uncounted in back warehouses. Cashiers guess prices and loose tracking eats profit.",
    },
    {
      title: "Unclear Customer & Supplier Dues",
      desc: "Manual paper khata records lead to disputed credit balances, forgotten receivables, and awkward reconciliation arguments.",
    },
    {
      title: "Cash Drawer Discrepancies",
      desc: "Shift handovers lack clear float tracking. End-of-day register tallies don't match the actual cash drawer.",
    },
    {
      title: "FBR & Tax Season Nightmares",
      desc: "Scrambling through shoeboxes of physical receipts to calculate sales tax, missing HS codes, and risking compliance penalties.",
    },
  ];

  const SOLUTIONS = [
    {
      title: "Real-Time Multi-Warehouse Inventory",
      desc: "Automated low-stock alerts, instant inter-branch stock transfers, barcode tracking, and precise unit conversions (CFT, Kg, Pcs).",
    },
    {
      title: "Automated Customer Credit & Supplier Ledgers",
      desc: "Set customer credit limits, track age of receivables, generate automated payment reminders, and record split payments effortlessly.",
    },
    {
      title: "Cashier Shift Accountability & Z-Reports",
      desc: "Every cashier opens and closes shifts with float declaration. Automatic discrepancy flags and comprehensive Z-reports per shift.",
    },
    {
      title: "Configurable Tax Engine & Fiscal Invoicing",
      desc: "Automatic GST calculation, compliant fiscal receipt generation with QR codes, HS codes, and one-click exportable tax registers.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#00172e] relative overflow-hidden text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0074d9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-xs font-bold text-red-400 mb-4">
            <RiAlertLine className="size-3.5" />
            <span>The Retail Reality Check</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Stop losing revenue to disconnected store systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Running counter sales on one computer, inventory in Excel, and accounting in physical paper books creates costly leakages every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Problem Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#001021]/80 border border-red-500/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <RiCloseCircleLine className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Manual Chaos</h3>
                    <p className="text-xs text-red-400">Spreadsheets, Paper Dues & Discrepancies</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                  Costly & Vulnerable
                </span>
              </div>

              <div className="space-y-5">
                {PAIN_POINTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <RiCloseCircleLine className="size-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400 font-semibold flex items-center justify-between">
              <span>Result: Up to 6-8% margin leakage every month</span>
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#002247] to-[#00172e] border border-[#0074d9]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0074d9]/15 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#0074d9]/30">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-[#0074d9]/20 border border-[#0074d9]/40 flex items-center justify-center text-[#4da3ff]">
                    <RiSparklingLine className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Commercial POS</h3>
                    <p className="text-xs text-[#4da3ff]">Integrated Counter, Stock & Fiscal Compliance</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Unified System
                </span>
              </div>

              <div className="space-y-5">
                {SOLUTIONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <RiCheckboxCircleLine className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-emerald-400 font-bold flex items-center justify-between">
              <span>Result: Total audit-readiness, zero cash drift, 100% stock truth</span>
              <a href="#simulator" className="flex items-center gap-1 text-[#4da3ff] hover:underline font-semibold">
                See it in action <RiArrowRightLine className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
