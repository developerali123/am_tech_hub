"use client";

import React, { useState } from "react";
import { RiQuestionLine, RiArrowDownSLine } from "@remixicon/react";

export function POSFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: "Does Commercial POS support multiple branches and warehouses?",
      a: "Yes. The platform is architected with a strict hierarchy: Company → Branches → Warehouses. You can transfer stock between locations with in-transit tracking, compare branch sales velocity in real-time, and let branch managers manage local staff while maintaining central company oversight.",
    },
    {
      q: "Can cashiers and warehouse staff have different access permissions?",
      a: "Absolutely. Our granular Role-Based Access Control (RBAC) ensures cashiers only see the fast checkout terminal, customer directory, and their own shift drawer. Warehouse workers only manage goods receipts, physical cycle counts, and stock transfers. Pricing, tax rules, and company financials remain restricted to Admins.",
    },
    {
      q: "Is Commercial POS only for wood and timber trading?",
      a: "No. Standard Commercial Retail is the core foundation—optimized for general retail, hardware, electronics, garments, and wholesale. The Wood Trading pack is an optional industry module that activates specialized volume formulas (CFT), serial piece tracking, and wagon/car batch receiving without cluttering standard retail users.",
    },
    {
      q: "How does it handle Pakistan tax and FBR compliance?",
      a: "The system features a fully configurable tax engine supporting 18% standard GST, reduced rates, and tax exemptions. Line items support official Pakistan Customs Harmonized System (HS) codes. The invoicing flow follows electronic fiscal requirements with STRN/NTN printing, verification QR codes, and exportable sales tax registers for monthly returns.",
    },
    {
      q: "Can we print barcode labels and thermal receipts with our logo?",
      a: "Yes. Commercial POS connects seamlessly with standard 80mm and 58mm thermal receipt printers via USB or network IP, supporting high-speed ESC/POS commands. You can customize the receipt header, store logo, terms, and footer. It also includes a built-in barcode label designer for printing sticky product price tags.",
    },
    {
      q: "What reports and financial exports are included?",
      a: "The reports suite includes daily sales velocity, profit & loss statements, inventory valuation (FIFO/weighted average), cashier shift Z-reconciliations, customer aging ledgers, supplier purchase summaries, and tax registers. All reports can be exported to Excel, CSV, or formatted PDF.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#001021] text-white relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0074d9]/30 bg-[#0074d9]/10 text-xs font-bold text-[#4da3ff] mb-4">
            <RiQuestionLine className="size-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Answers to common implementation questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about hardware compatibility, tax compliance, or multi-branch rollouts? Here is everything you need to know.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#001a36] border-[#0074d9]/50 shadow-lg shadow-[#0074d9]/10"
                    : "bg-[#00152b] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-white focus:outline-none cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <RiArrowDownSLine
                    className={`size-5 text-[#4da3ff] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
