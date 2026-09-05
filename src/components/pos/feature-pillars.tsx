"use client";

import React, { useState } from "react";
import {
  RiSpeedUpLine,
  RiArchiveStackLine,
  RiTruckLine,
  RiCoinsLine,
  RiReceiptLine,
  RiLineChartLine,
  RiArrowRightLine,
  RiCheckLine,
} from "@remixicon/react";

export function POSFeaturePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const PILLARS = [
    {
      id: "checkout",
      title: "Fast Checkout Counter",
      route: "/pos",
      subtitle: "Ring up in seconds, keep lines moving",
      icon: <RiSpeedUpLine className="size-6 text-[#4da3ff]" />,
      sellingLine: "Barcode + SKU sales, split payments, credit sales, and shift-aware cash handling.",
      highlights: [
        "Rapid barcode scan with instant price lookup & keyboard-first shortcuts",
        "Split payments: Cash, Card, Bank Transfer, and Customer Credit in a single bill",
        "Hold & resume carts for interrupted sales without clearing the counter",
        "Offline queue ensures checkout continues during local internet outages",
      ],
      preview: {
        title: "Point of Sale Terminal",
        badge: "Route /pos",
        stat1: { label: "Average Checkout", val: "14.2s" },
        stat2: { label: "Split Pay Supported", val: "100%" },
        metricTitle: "Active Cart Speed",
        metricSubtitle: "Scan → Tax Calculation → Receipt in under 3 keystrokes",
      },
    },
    {
      id: "inventory",
      title: "Inventory Control",
      route: "/products",
      subtitle: "Know what's on the shelf across every branch",
      icon: <RiArchiveStackLine className="size-6 text-[#4da3ff]" />,
      sellingLine: "Track variants and warehouses, move stock between locations, and catch low stock before losing a sale.",
      highlights: [
        "Multi-warehouse tracking with automated inter-branch transfer orders",
        "Low-stock thresholds trigger automated reorder alerts for procurement",
        "Serialized piece tracking for high-value items, warranty logs, and timber lots",
        "Batch and expiry tracking with bulk CSV / Excel catalog importing",
      ],
      preview: {
        title: "Live Inventory & Transfer Matrix",
        badge: "Route /products & /stock-transfers",
        stat1: { label: "SKUs Monitored", val: "12,850" },
        stat2: { label: "Stock Accuracy", val: "99.4%" },
        metricTitle: "Multi-Warehouse Sync",
        metricSubtitle: "Branch Main ↔ Central Warehouse A stock delta automatically locked",
      },
    },
    {
      id: "purchasing",
      title: "Purchasing & Suppliers",
      route: "/purchases",
      subtitle: "Streamlined stock in, returns, and supplier ledgers",
      icon: <RiTruckLine className="size-6 text-[#4da3ff]" />,
      sellingLine: "Create purchase orders, receive shipments against POs, track debit notes, and manage supplier balances.",
      highlights: [
        "Purchase Order to Goods Receiving Voucher (GRV) with three-way verification",
        "Automatic landed cost calculation including freight, customs, and transport",
        "Supplier aging balance ledgers and automated payment schedules",
        "Purchase returns with automated credit note creation and stock deduction",
      ],
      preview: {
        title: "Procurement & Vendor Ledger",
        badge: "Route /purchases & /suppliers",
        stat1: { label: "Active Suppliers", val: "48" },
        stat2: { label: "Discrepancy Catch", val: "0% Leak" },
        metricTitle: "Goods Received Note",
        metricSubtitle: "Match PO #PO-482 vs Delivery Note with automated cost allocation",
      },
    },
    {
      id: "shifts",
      title: "Shifts & Cash Management",
      route: "/shifts",
      subtitle: "Drawer accountability per cashier and shift Z-reports",
      icon: <RiCoinsLine className="size-6 text-[#4da3ff]" />,
      sellingLine: "Float declaration, mid-shift cash drop tracking, drawer audits, and indisputable end-of-shift Z reconciliations.",
      highlights: [
        "Shift opening float declaration with dual supervisor authorization if needed",
        "Cash In / Cash Out (Petty cash drops) logged with mandatory memo notes",
        "Detailed shift closing summary comparing expected cash vs counted cash",
        "Instant thermal Z-Report printout per cashier with payment method breakdown",
      ],
      preview: {
        title: "Cashier Shift Audit & Drawer Terminal",
        badge: "Route /shifts",
        stat1: { label: "Cash Drift Rate", val: "0.00%" },
        stat2: { label: "Shift Close Time", val: "2.5 min" },
        metricTitle: "Automated Z-Report",
        metricSubtitle: "Opening Float: PKR 10,000 | Sales: PKR 248,300 | Count: Balanced",
      },
    },
    {
      id: "compliance",
      title: "Tax & FBR Fiscal Path",
      route: "/fiscal",
      subtitle: "Configurable tax engine and fiscal invoicing path",
      icon: <RiReceiptLine className="size-6 text-emerald-400" />,
      sellingLine: "Configure tax rules once, issue fiscal-ready invoices, and export registers when you need them.",
      highlights: [
        "Configurable GST rates (18%, reduced rates, or tax exemptions per item category)",
        "Fiscal invoicing architecture prepared for Pakistan tax / FBR electronic compliance",
        "Automated HS Code assignment for import tariffs and compliant tax classifications",
        "One-click tax register exports for accountants and monthly sales tax returns",
      ],
      preview: {
        title: "Fiscal Compliance & FBR Engine",
        badge: "Route /fiscal & /tax",
        stat1: { label: "Tax Verification", val: "100% Valid" },
        stat2: { label: "Fiscal Path", val: "FBR-Ready" },
        metricTitle: "Fiscalized Invoice Output",
        metricSubtitle: "Unique invoice hash, QR verification code, and HS-Code compliant line items",
      },
    },
    {
      id: "insights",
      title: "Insights & Analytics",
      route: "/reports",
      subtitle: "Real-time KPIs, profit & loss, and executive reports",
      icon: <RiLineChartLine className="size-6 text-[#4da3ff]" />,
      sellingLine: "Sales velocity, gross margin by category, branch comparisons, customer ledgers, and exportable CSVs.",
      highlights: [
        "Live sales and profit dashboards updated the millisecond a transaction finishes",
        "Best & worst selling SKU reports to eliminate dead stock before obsolescence",
        "Multi-branch comparative analytics: compare performance across cities or stores",
        "Exportable PDF/Excel balance sheets, stock valuations, and P&L summaries",
      ],
      preview: {
        title: "Executive Business Dashboard",
        badge: "Route /dashboard & /reports",
        stat1: { label: "Report Generation", val: "< 1 Sec" },
        stat2: { label: "Data Latency", val: "Real-Time" },
        metricTitle: "Gross Margin Matrix",
        metricSubtitle: "PKR 1.84M weekly turnover with category margin breakdown",
      },
    },
  ];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-[#001021] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0074d9]/30 bg-[#0074d9]/10 text-xs font-bold text-[#4da3ff] mb-4">
            <span>6 Core Operational Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Everything your retail & wholesale operation needs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No bloated junk drawers. Commercial POS focuses on the six core disciplines that make stores profitable, accountable, and legally compliant.
          </p>
        </div>

        {/* Pillar Selector Pills (Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col items-start justify-between min-h-[95px] ${
                  isSelected
                    ? "bg-[#00284d] border-[#0074d9] text-white shadow-lg shadow-[#0074d9]/20"
                    : "bg-[#00162e] border-white/10 hover:border-white/20 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`p-1.5 rounded-lg ${isSelected ? "bg-[#0074d9] text-white" : "bg-white/5 text-[#4da3ff]"}`}>
                    {pillar.icon}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{pillar.route}</span>
                </div>
                <span className="text-xs font-bold leading-tight">{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Feature Display Card */}
        {(() => {
          const cur = PILLARS[activePillar];
          return (
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#001b38] to-[#001428] border border-[#0074d9]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#0074d9]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Left: Explanatory Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-[#0074d9]/20 border border-[#0074d9]/40 flex items-center justify-center">
                      {cur.icon}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#4da3ff] uppercase tracking-wider">{cur.route}</div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">{cur.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-medium text-[#4da3ff] leading-relaxed">
                    {cur.sellingLine}
                  </p>

                  <div className="space-y-3 pt-2">
                    {cur.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="size-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <RiCheckLine className="size-3.5 text-emerald-400" />
                        </div>
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="#simulator"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0074d9] hover:bg-[#005bb5] text-white text-xs font-bold transition-colors"
                    >
                      Test in Counter Simulator <RiArrowRightLine className="size-4" />
                    </a>
                  </div>
                </div>

                {/* Right: Live Mock Preview Panel */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-[#001224] p-6 shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                      <div>
                        <span className="text-xs font-bold text-white block">{cur.preview.title}</span>
                        <span className="text-[10px] font-mono text-[#4da3ff]">{cur.preview.badge}</span>
                      </div>
                      <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Quick Metric Tiles */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[10px] text-slate-400 block">{cur.preview.stat1.label}</span>
                        <span className="text-base font-extrabold text-white mt-1 block">{cur.preview.stat1.val}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[10px] text-slate-400 block">{cur.preview.stat2.label}</span>
                        <span className="text-base font-extrabold text-emerald-400 mt-1 block">{cur.preview.stat2.val}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#001e3d] border border-[#0074d9]/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <span className="size-2 rounded-full bg-[#0074d9]" />
                        {cur.preview.metricTitle}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {cur.preview.metricSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
