"use client";

import React, { useState } from "react";
import {
  RiTreeLine,
  RiStore2Line,
  RiTShirtLine,
  RiMedicineBottleLine,
  RiShoppingBasketLine,
  RiCheckLine,
  RiArrowRightLine,
} from "@remixicon/react";

export function POSIndustryPacks() {
  const [activePack, setActivePack] = useState<"retail" | "wood" | "specialty">("retail");

  const PACKS = {
    retail: {
      title: "Commercial Retail (Core)",
      badge: "Standard Platform Core",
      desc: "Engineered for fast-paced retail shops, supermarkets, electronics, hardware, and multi-branch stores.",
      bullets: [
        "Rapid barcode scan, label printing, and multi-unit conversions (Boxes, Packs, Pieces)",
        "Customer loyalty numbers, credit limits, and aging ledger tracking",
        "Split cash, debit/credit cards, mobile wallets, and deferred credit invoices",
        "Inventory reorder points with automated vendor purchase order generation",
      ],
      tag: "General Retail & Wholesale",
    },
    wood: {
      title: "Wood Trading Industry Pack",
      badge: "Heritage Specialized Workflow",
      desc: "Tailored specifically for timber merchants, sawmill operators, and wood wholesalers requiring volume-based calculations.",
      bullets: [
        "Measured quantities: Automated Cubic Feet (CFT) and square feet calculations from (L × W × T)",
        "Serial piece tracking: Tag individual high-value timber logs, beams, and premium cuts with unique serial IDs",
        "Car & wagon batch receiving: Track incoming supplier railroad cars/trucks with tare weight and net yield",
        "Lumber grading and species catalog: Teak, Pine, Deodar, Sheesham with specialized grade pricing",
      ],
      tag: "Sawmills, Timber & Lumber Yards",
    },
    specialty: {
      title: "Garments, Pharmacy & Supermarket",
      badge: "Template Packs",
      desc: "Flexible data attributes let you adapt Commercial POS for matrix-based inventory needs in minutes.",
      bullets: [
        "Garments: Matrix grid for Color × Size × Fit with unified master barcode labels",
        "Pharmacy: Batch numbers, expiry date enforcement, and controlled substance tracking",
        "Supermarket: Scale integration for weighed produce, fast touch-button lookup, and dual-customer displays",
        "Custom attributes: Add unlimited fields (Warranty, IMEI, Brand, Shelf location) to any product",
      ],
      tag: "Configurable Attributes",
    },
  };

  return (
    <section id="industry-packs" className="py-20 md:py-28 bg-[#00172e] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0074d9]/30 bg-[#0074d9]/10 text-xs font-bold text-[#4da3ff] mb-4">
            <span>Modular Industry Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            One platform, industry-aware workflows
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Start with standard Commercial Retail, or toggle the specialized Wood Trading pack for serial logs, CFT formulas, and car batches.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActivePack("retail")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activePack === "retail"
                ? "bg-[#0074d9] text-white shadow-lg shadow-[#0074d9]/25"
                : "bg-[#001f3f] text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <RiStore2Line className="size-4 text-[#4da3ff]" />
            <span>Commercial Retail</span>
          </button>

          <button
            onClick={() => setActivePack("wood")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activePack === "wood"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                : "bg-[#001f3f] text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <RiTreeLine className="size-4 text-emerald-400" />
            <span>Wood Trading Pack (CFT)</span>
          </button>

          <button
            onClick={() => setActivePack("specialty")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activePack === "specialty"
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                : "bg-[#001f3f] text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <RiTShirtLine className="size-4 text-violet-400" />
            <span>Garments & Specialty</span>
          </button>
        </div>

        {/* Active Pack Feature Card */}
        {(() => {
          const pack = PACKS[activePack];
          return (
            <div className="p-8 md:p-12 rounded-3xl bg-[#001124] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#4da3ff] bg-[#0074d9]/15 px-3 py-1 rounded-full border border-[#0074d9]/30">
                      {pack.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4">{pack.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                      {pack.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {pack.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="size-5 rounded-full bg-[#0074d9]/20 border border-[#0074d9]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <RiCheckLine className="size-3.5 text-[#4da3ff]" />
                        </div>
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#001b38] border border-white/10 shadow-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-white">
                      <span>Workflow Blueprint</span>
                      <span className="text-[#4da3ff]">{pack.tag}</span>
                    </div>

                    {activePack === "wood" ? (
                      <div className="space-y-2 text-xs font-mono text-slate-300">
                        <div className="p-3 rounded-lg bg-[#001224] border border-emerald-500/20">
                          <div className="text-emerald-400 font-bold mb-1">Cubic Feet (CFT) Calculator</div>
                          <div>Input: Length 14ft × Width 10in × Thickness 6in</div>
                          <div className="text-white font-bold mt-1">Calculated Volume = 5.83 CFT</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#001224] border border-white/10">
                          <div className="text-slate-200 font-bold mb-1">Car / Batch Receiving</div>
                          <div>Wagon #PR-882 · Tare: 22.4 Ton · Net Wood: 18.2 Ton</div>
                        </div>
                      </div>
                    ) : activePack === "specialty" ? (
                      <div className="space-y-2 text-xs font-mono text-slate-300">
                        <div className="p-3 rounded-lg bg-[#001224] border border-violet-500/20">
                          <div className="text-violet-400 font-bold mb-1">Size × Color Matrix</div>
                          <div>SKU: POLO-NVY-M (Stock: 48) | SKU: POLO-NVY-L (Stock: 62)</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#001224] border border-white/10">
                          <div className="text-slate-200 font-bold mb-1">Batch & Expiry Controls</div>
                          <div>Batch #LOT-921 · Expiry: 12/2027 · First-Expire-First-Out</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 text-xs font-mono text-slate-300">
                        <div className="p-3 rounded-lg bg-[#001224] border border-[#0074d9]/30">
                          <div className="text-[#4da3ff] font-bold mb-1">Instant Barcode Checkout</div>
                          <div>EAN-13 / Code128 scanner trigger → Line item in 0.2s</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#001224] border border-white/10">
                          <div className="text-slate-200 font-bold mb-1">Multi-Branch Reorder Loop</div>
                          <div>Branch #02 Low Stock (4 left) → Auto PO to Central Warehouse</div>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 text-[11px] text-slate-400">
                      Enabled dynamically in settings without altering core database schemas.
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
