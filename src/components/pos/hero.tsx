"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  RiArrowRightUpLine,
  RiBarcodeLine,
  RiCheckboxCircleLine,
  RiStore2Line,
  RiFileList3Line,
  RiExchangeDollarLine,
  RiPrinterLine,
  RiBuildingLine,
  RiShieldCheckLine,
} from "@remixicon/react";

const HERO_PILLARS = [
  "Multi-Branch & Warehouses",
  "Configurable GST / Tax Engine",
  "FBR-Ready Fiscal Path",
  "Role-Based Staff Permissions",
];

export function POSHero({ onOpenDemo }: { onOpenDemo?: () => void } = {}) {
  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 md:pb-28 bg-[#001428] text-white">
      {/* Brand Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[900px] h-[500px] bg-gradient-to-b from-[#0074d9]/20 via-[#001f3f]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-72 h-72 bg-[#0074d9]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-80 h-80 bg-[#4da3ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-18">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0074d9]/40 bg-[#001f3f]/90 text-xs font-semibold text-[#4da3ff] mb-6 shadow-sm shadow-[#0074d9]/20">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Commercial POS Platform · Multi-Company & Branch Ready</span>
          </div>

          {/* Hero Brand Title */}
          <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-2">
            Commercial POS
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            Run your store from{" "}
            <span className="bg-gradient-to-r from-[#4da3ff] via-[#0074d9] to-cyan-400 bg-clip-text text-transparent">
              counter to compliance.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Commercial POS connects checkout, inventory, purchases, and FBR-ready reporting so your team stops juggling spreadsheets. Built for Pakistan SMEs, wholesale operations, and growing multi-branch chains.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto mb-10">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full py-4 px-8 text-sm md:text-base font-bold shadow-xl shadow-[#0074d9]/30 bg-[#0074d9] hover:bg-[#005bb5] text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Live Demo <RiArrowRightUpLine className="size-4 ml-1.5" />
            </a>
            
            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm md:text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all"
            >
              Try Interactive Counter
            </a>
          </div>

          {/* Hero Feature Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mx-auto pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 font-medium">
            {HERO_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2 text-left justify-center sm:justify-start">
                <RiCheckboxCircleLine className="size-4 text-[#4da3ff] shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dominant Product Visual — High-Fidelity POS Screen Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0074d9]/30 via-cyan-500/20 to-[#001f3f]/50 rounded-2xl blur-lg opacity-75"></div>

          <div className="relative rounded-2xl border border-white/15 bg-[#001b38] shadow-2xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/10 bg-[#00162e]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-amber-500/80" />
                <div className="size-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono font-semibold text-slate-400 ml-3 hidden sm:inline">
                  Commercial POS v2.4 · Main Store Terminal #01
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  FBR Path: Fiscal Ready
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#0074d9]/20 border border-[#0074d9]/40 text-[#4da3ff] font-medium hidden md:inline">
                  Cashier: Tariq M. (Shift #104)
                </span>
              </div>
            </div>

            {/* POS Interface Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 text-slate-200">
              {/* Left 8 Cols: Product Catalog & Quick-Actions */}
              <div className="lg:col-span-8 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#001e3d]/60">
                {/* Search & Barcode Bar */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative flex-1">
                    <RiBarcodeLine className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#4da3ff]" />
                    <input
                      type="text"
                      readOnly
                      value="Scan barcode or search SKU [e.g. TIMBER-PINE-8X4 / ELEC-LED-24W]..."
                      className="w-full bg-[#001326] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-400 font-mono focus:outline-none"
                    />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-[#0074d9]/20 border border-[#0074d9]/30 text-xs font-bold text-[#4da3ff] flex items-center gap-1.5 shrink-0">
                    <span>F1 Barcode</span>
                  </div>
                </div>

                {/* Quick Category Chips */}
                <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-[#0074d9] text-white font-semibold shrink-0 cursor-pointer">
                    All Items
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#001326] hover:bg-white/10 text-slate-300 font-medium shrink-0 border border-white/10">
                    Wood & Timber Pack (CFT)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#001326] hover:bg-white/10 text-slate-300 font-medium shrink-0 border border-white/10">
                    Building Supplies
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#001326] hover:bg-white/10 text-slate-300 font-medium shrink-0 border border-white/10">
                    General Hardware
                  </span>
                </div>

                {/* Mock Grid of Products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Pine Wood Plank 12ft", sku: "WOD-PN-12", price: "PKR 3,450", unit: "CFT: 2.4", badge: "Wood Pack" },
                    { name: "Teak Hardwood Beam", sku: "WOD-TK-16", price: "PKR 14,200", unit: "CFT: 6.8", badge: "Serial #401" },
                    { name: "Steel Angle Bar 20ft", sku: "STL-AG-20", price: "PKR 2,800", unit: "Weight: 14kg", badge: "Hardware" },
                    { name: "Heavy Duty Hinges (Pair)", sku: "HRD-HN-04", price: "PKR 650", unit: "Pack of 2", badge: "Fast Mover" },
                    { name: "Industrial Poly Lacquer 5L", sku: "CHM-LQ-05", price: "PKR 4,100", unit: "Can: 5 Liter", badge: "Stock: 18" },
                    { name: "DeWalt Cordless Drill", sku: "TLS-DW-18", price: "PKR 22,500", unit: "Serial Piece", badge: "Warranty 1Y" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#00142b] border border-white/10 hover:border-[#0074d9]/60 hover:bg-[#001936] transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[10px] font-mono text-slate-400">{item.sku}</span>
                          <span className="text-[9px] font-semibold text-[#4da3ff] bg-[#0074d9]/15 px-1.5 py-0.5 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white group-hover:text-[#4da3ff] transition-colors line-clamp-1">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">{item.unit}</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-extrabold text-white">{item.price}</span>
                        <span className="size-5 rounded-full bg-[#0074d9]/20 text-[#4da3ff] flex items-center justify-center text-xs font-bold group-hover:bg-[#0074d9] group-hover:text-white transition-colors">
                          +
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Quick Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <RiStore2Line className="size-3.5 text-[#4da3ff]" /> Main Branch
                    </span>
                    <span className="flex items-center gap-1">
                      <RiBuildingLine className="size-3.5 text-[#4da3ff]" /> Warehouse A (Stock: 1,420 SKUs)
                    </span>
                  </div>
                  <span className="font-mono text-slate-400">Offline Sale Queue: 0 Pending</span>
                </div>
              </div>

              {/* Right 4 Cols: Active Order & Checkout Ledger */}
              <div className="lg:col-span-4 p-5 md:p-6 bg-[#00162e] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div>
                      <span className="text-xs font-bold text-white">Current Invoice #INV-2026-904</span>
                      <p className="text-[11px] text-slate-400">Customer: Malik Timber Works (Credit Active)</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Walk-in / Net-30
                    </span>
                  </div>

                  {/* Cart Items list */}
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    <div className="p-2.5 rounded-lg bg-[#001e3d] border border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">Pine Wood Plank 12ft</div>
                        <div className="text-[10px] text-slate-400">2 pcs × PKR 3,450 (4.8 CFT)</div>
                      </div>
                      <span className="font-bold text-white">PKR 6,900</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#001e3d] border border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">Teak Hardwood Beam 16ft</div>
                        <div className="text-[10px] text-slate-400">1 pc × PKR 14,200 (Serial #TK-992)</div>
                      </div>
                      <span className="font-bold text-white">PKR 14,200</span>
                    </div>
                  </div>
                </div>

                {/* Calculation & Payment */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>PKR 21,100</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      GST Sales Tax (18%)
                      <RiShieldCheckLine className="size-3 text-emerald-400" />
                    </span>
                    <span>PKR 3,798</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Customer Discount (Prompt Pay)</span>
                    <span className="text-emerald-400">- PKR 898</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-base font-extrabold text-white">
                    <span>Grand Total</span>
                    <span className="text-[#4da3ff]">PKR 24,000</span>
                  </div>

                  {/* Payment Buttons */}
                  <div className="grid grid-cols-3 gap-1.5 pt-2">
                    <button className="py-2 rounded-lg bg-[#0074d9] hover:bg-[#005bb5] text-white font-bold text-xs flex flex-col items-center">
                      <RiExchangeDollarLine className="size-3.5 mb-0.5" />
                      <span>Cash</span>
                    </button>
                    <button className="py-2 rounded-lg bg-[#00284d] hover:bg-[#00386b] text-slate-200 font-bold text-xs flex flex-col items-center border border-white/10">
                      <span>Card/POS</span>
                    </button>
                    <button className="py-2 rounded-lg bg-[#00284d] hover:bg-[#00386b] text-amber-300 font-bold text-xs flex flex-col items-center border border-amber-500/20">
                      <span>Credit Due</span>
                    </button>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <RiPrinterLine className="size-3" /> Thermal 80mm Ready
                    </span>
                    <span className="font-mono">HS: 4407.11.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
