"use client";

import React, { useState } from "react";
import {
  RiShoppingCartLine,
  RiArchiveStackLine,
  RiBuilding2Line,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiAdminLine,
  RiCheckLine,
} from "@remixicon/react";

export function POSDeepFeatureGrid() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const GROUPS = [
    {
      title: "Sales & Counter",
      icon: <RiShoppingCartLine className="size-5" />,
      items: [
        { name: "POS Checkout", desc: "Fast barcode & SKU keyboard navigation with split tenders." },
        { name: "Invoicing & Orders", desc: "Pro-forma, quotations, and official fiscal invoices." },
        { name: "Returns & Exchanges", desc: "Automated refund processing, credit notes, and restock." },
        { name: "Due Reminders", desc: "Automated SMS/WhatsApp reminders for unpaid customer balances." },
        { name: "Customer Loyalty", desc: "Point accumulation, tier rewards, and phone number lookup." },
        { name: "Offline Queue", desc: "Continues offline and auto-syncs upon connection restore." },
      ],
    },
    {
      title: "Catalog & Products",
      icon: <RiArchiveStackLine className="size-5" />,
      items: [
        { name: "Product Variants", desc: "Color, size, grade, and material matrix management." },
        { name: "Categories & Brands", desc: "Hierarchical classification with tax category bindings." },
        { name: "Kits & Bundles", desc: "Composite packages that deduct constituent child items." },
        { name: "Barcode Label Designer", desc: "Print custom barcode labels directly to thermal rolls." },
        { name: "Bulk Excel/CSV Import", desc: "Migrate thousands of SKUs and vendor costs in seconds." },
        { name: "Custom Attributes", desc: "Add unlimited metadata fields (CFT, IMEI, serials)." },
      ],
    },
    {
      title: "Stock & Warehouses",
      icon: <RiBuilding2Line className="size-5" />,
      items: [
        { name: "Multi-Warehouse", desc: "Central storage, branch backrooms, and delivery hubs." },
        { name: "Stock Transfers", desc: "Formal dispatch, in-transit tracking, and destination receipt." },
        { name: "Low-Stock Triggers", desc: "Auto-calculated reorder suggestions based on sales run-rate." },
        { name: "Serialized Inventory", desc: "Track high-value units with unique serial IDs from receipt to sale." },
        { name: "Batch & Expiry Dates", desc: "FIFO / FEFO stock rotation to minimize expired write-offs." },
        { name: "Cycle Counting", desc: "Perform rolling inventory audits without halting store sales." },
      ],
    },
    {
      title: "Money & Accounts",
      icon: <RiMoneyDollarCircleLine className="size-5" />,
      items: [
        { name: "Customer Ledgers", desc: "Real-time khata balances with aging buckets (30/60/90 days)." },
        { name: "Supplier Payments", desc: "Track bills, partial disbursements, and bank transfer logs." },
        { name: "Expense Tracking", desc: "Record petty cash, store rent, generator fuel, and utility bills." },
        { name: "Tiered Price Lists", desc: "Wholesale vs retail vs VIP client pricing schedules." },
        { name: "Coupons & Discounts", desc: "Percentage and fixed amount promotional vouchers." },
        { name: "Cash Drawer Float", desc: "Opening float, safe drops, and verified cash collections." },
      ],
    },
    {
      title: "Tax & Compliance",
      icon: <RiShieldCheckLine className="size-5" />,
      items: [
        { name: "Configurable Tax Regimes", desc: "Set standard GST, reduced rates, or zero-tax rules." },
        { name: "FBR / Fiscal Path", desc: "Ready for electronic fiscal invoicing and QR code outputs." },
        { name: "HS Code Integration", desc: "Assign customs Harmonized System codes for each line item." },
        { name: "Sales Tax Registers", desc: "One-click export of Annexure-C compliant sales schedules." },
        { name: "Tax Invoices", desc: "Mandatory STRN, NTN, buyer registration numbers printed." },
        { name: "Audit Proofing", desc: "Immutable fiscal sequence numbering prevents missing invoices." },
      ],
    },
    {
      title: "Admin & Settings",
      icon: <RiAdminLine className="size-5" />,
      items: [
        { name: "Multi-Company Context", desc: "Switch between sister companies from a single login." },
        { name: "Receipt Customizer", desc: "Upload logo, header text, policy notes, and footer messages." },
        { name: "Branch Management", desc: "Manage phone numbers, tax jurisdictions, and addresses." },
        { name: "Activity Logs", desc: "Detailed audit trail of user actions, deletions, and overrides." },
        { name: "Role Permissions", desc: "Toggle exact permissions down to individual button actions." },
        { name: "Backup & Restore", desc: "Encrypted automated cloud backups with instant recovery." },
      ],
    },
  ];

  return (
    <section id="deep-features" className="py-20 md:py-28 bg-[#001428] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-300 mb-4">
            <span>Comprehensive Feature Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Architected for deep retail & wholesale control
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Organized exactly like the live product navigation. Every module connects to a unified ledger and database.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GROUPS.map((group, idx) => (
            <button
              key={group.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#0074d9] text-white shadow-md shadow-[#0074d9]/30"
                  : "bg-[#001f3f] text-slate-300 hover:bg-[#002b57] border border-white/10"
              }`}
            >
              {group.icon}
              <span>{group.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Group Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS[activeTab].items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#001b38] border border-white/10 hover:border-[#0074d9]/50 transition-all flex items-start gap-3.5 group"
            >
              <div className="size-6 rounded-lg bg-[#0074d9]/20 border border-[#0074d9]/40 flex items-center justify-center text-[#4da3ff] shrink-0 mt-0.5">
                <RiCheckLine className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#4da3ff] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
