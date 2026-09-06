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
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 md:pb-28 bg-background text-foreground transition-colors duration-300">
      {/* Brand Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[900px] h-[500px] bg-gradient-to-b from-blue-500/15 via-blue-900/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-18">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-6 shadow-xs">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Commercial POS Platform · Multi-Company & Branch Ready</span>
          </div>

          {/* Hero Brand Title */}
          <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-muted-foreground mb-2">
            Commercial POS
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
            Run your store from{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              counter to compliance.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Commercial POS connects checkout, inventory, purchases, and FBR-ready reporting so your team stops juggling spreadsheets. Built for Pakistan SMEs, wholesale operations, and growing multi-branch chains.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto mb-10">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenDemo) {
                  e.preventDefault();
                  onOpenDemo();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full py-4 px-8 text-sm md:text-base font-bold shadow-xl shadow-blue-600/30 bg-[#0074d9] hover:bg-[#005bb5] text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Live Demo <RiArrowRightUpLine className="size-4 ml-1.5" />
            </a>
            
            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm md:text-base font-semibold border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer shadow-xs"
            >
              Try Interactive Counter
            </a>
          </div>

          {/* Hero Feature Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mx-auto pt-6 border-t border-border text-xs sm:text-sm text-muted-foreground font-medium">
            {HERO_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2 text-left justify-center sm:justify-start">
                <RiCheckboxCircleLine className="size-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-foreground/90">{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dominant Product Visual — High-Fidelity POS Screen Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-blue-900/20 rounded-2xl blur-lg opacity-60"></div>

          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-amber-500/80" />
                <div className="size-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono font-semibold text-foreground/80 ml-3 hidden sm:inline">
                  Commercial POS v2.4 · Main Store Terminal #01
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-medium">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                  FBR Path: Fiscal Ready
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hidden md:inline">
                  Cashier: Tariq M. (Shift #104)
                </span>
              </div>
            </div>

            {/* POS Interface Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 text-foreground">
              {/* Left 8 Cols: Product Catalog & Quick-Actions */}
              <div className="lg:col-span-8 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-border bg-muted/10">
                {/* Search & Barcode Bar */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative flex-1">
                    <RiBarcodeLine className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-blue-600 dark:text-blue-400" />
                    <input
                      type="text"
                      readOnly
                      value="Scan barcode or search SKU [e.g. TIMBER-PINE-8X4 / ELEC-LED-24W]..."
                      className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground font-mono focus:outline-none shadow-xs"
                    />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 shrink-0">
                    <span>F1 Barcode</span>
                  </div>
                </div>

                {/* Quick Category Chips */}
                <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-[#0074d9] text-white font-semibold shrink-0 cursor-pointer shadow-xs">
                    All Items
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-card hover:bg-muted text-muted-foreground hover:text-foreground font-medium shrink-0 border border-border cursor-pointer shadow-xs">
                    Wood & Timber Pack (CFT)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-card hover:bg-muted text-muted-foreground hover:text-foreground font-medium shrink-0 border border-border cursor-pointer shadow-xs">
                    Building Supplies
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-card hover:bg-muted text-muted-foreground hover:text-foreground font-medium shrink-0 border border-border cursor-pointer shadow-xs">
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
                      className="p-3.5 rounded-xl bg-card border border-border hover:border-blue-500/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[10px] font-mono text-muted-foreground">{item.sku}</span>
                          <span className="text-[9px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-muted-foreground">{item.unit}</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between">
                        <span className="text-xs font-extrabold text-foreground">{item.price}</span>
                        <span className="size-5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold group-hover:bg-[#0074d9] group-hover:text-white transition-colors">
                          +
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Quick Bar */}
                <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-medium text-foreground/90">
                      <RiStore2Line className="size-3.5 text-blue-600 dark:text-blue-400" /> Main Branch
                    </span>
                    <span className="flex items-center gap-1 font-medium text-foreground/90">
                      <RiBuildingLine className="size-3.5 text-blue-600 dark:text-blue-400" /> Warehouse A (Stock: 1,420 SKUs)
                    </span>
                  </div>
                  <span className="font-mono text-muted-foreground">Offline Sale Queue: 0 Pending</span>
                </div>
              </div>

              {/* Right 4 Cols: Active Order & Checkout Ledger */}
              <div className="lg:col-span-4 p-5 md:p-6 bg-muted/20 flex flex-col justify-between border-t lg:border-t-0 border-border">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                    <div>
                      <span className="text-xs font-bold text-foreground">Current Invoice #INV-2026-904</span>
                      <p className="text-[11px] text-muted-foreground">Customer: Malik Timber Works (Credit Active)</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Walk-in / Net-30
                    </span>
                  </div>

                  {/* Cart Items list */}
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    <div className="p-2.5 rounded-lg bg-card border border-border flex items-center justify-between text-xs shadow-xs">
                      <div>
                        <div className="font-semibold text-foreground">Pine Wood Plank 12ft</div>
                        <div className="text-[10px] text-muted-foreground">2 pcs × PKR 3,450 (4.8 CFT)</div>
                      </div>
                      <span className="font-bold text-foreground">PKR 6,900</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-card border border-border flex items-center justify-between text-xs shadow-xs">
                      <div>
                        <div className="font-semibold text-foreground">Teak Hardwood Beam 16ft</div>
                        <div className="text-[10px] text-muted-foreground">1 pc × PKR 14,200 (Serial #TK-992)</div>
                      </div>
                      <span className="font-bold text-foreground">PKR 14,200</span>
                    </div>
                  </div>
                </div>

                {/* Calculation & Payment */}
                <div className="pt-4 border-t border-border space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-foreground font-semibold">PKR 21,100</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="flex items-center gap-1">
                      GST Sales Tax (18%)
                      <RiShieldCheckLine className="size-3 text-emerald-500" />
                    </span>
                    <span className="text-foreground font-semibold">PKR 3,798</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Customer Discount (Prompt Pay)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">- PKR 898</span>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between text-base font-extrabold text-foreground">
                    <span>Grand Total</span>
                    <span className="text-blue-600 dark:text-blue-400">PKR 24,000</span>
                  </div>

                  {/* Payment Buttons */}
                  <div className="grid grid-cols-3 gap-1.5 pt-2">
                    <button className="py-2 rounded-lg bg-[#0074d9] hover:bg-[#005bb5] text-white font-bold text-xs flex flex-col items-center shadow-xs cursor-pointer">
                      <RiExchangeDollarLine className="size-3.5 mb-0.5" />
                      <span>Cash</span>
                    </button>
                    <button className="py-2 rounded-lg bg-card hover:bg-muted text-foreground font-bold text-xs flex flex-col items-center border border-border cursor-pointer shadow-xs">
                      <span>Card/POS</span>
                    </button>
                    <button className="py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs flex flex-col items-center border border-amber-500/20 cursor-pointer">
                      <span>Credit Due</span>
                    </button>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
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
