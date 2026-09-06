"use client";

import React from "react";
import {
  RiUser3Line,
  RiArchiveLine,
  RiUserSettingsLine,
  RiShieldCheckLine,
  RiBuilding4Line,
  RiCheckLine,
  RiLockPasswordLine,
} from "@remixicon/react";

export function POSRolesMatrix() {
  const ROLES = [
    {
      role: "Cashier",
      icon: <RiUser3Line className="size-6 text-[#0074d9] dark:text-[#4da3ff]" />,
      promise: "Fast POS & own shift accountability",
      badge: "Store Front",
      capabilities: [
        "Rapid barcode scan & invoice generation",
        "Open & close own shift with float declaration",
        "View walk-in customers & search contact records",
        "Restricted from changing base prices or tax settings",
      ],
    },
    {
      role: "Warehouse Staff",
      icon: <RiArchiveLine className="size-6 text-emerald-600 dark:text-emerald-400" />,
      promise: "Stock in, transfers & shelf locations",
      badge: "Logistics",
      capabilities: [
        "Receive Goods Received Vouchers against POs",
        "Initiate & approve inter-branch stock transfers",
        "Conduct physical barcode cycle counts & adjustments",
        "Track bin/aisle locations and serial numbers",
      ],
    },
    {
      role: "Store Manager",
      icon: <RiUserSettingsLine className="size-6 text-amber-600 dark:text-amber-400" />,
      promise: "Operations, returns & shift reconciliations",
      badge: "Branch Control",
      capabilities: [
        "Authorize customer returns, credit notes & discounts",
        "Review daily cash drawer Z-reports & cash drops",
        "Approve local store purchase requests & petty cash",
        "Access branch-level sales KPIs and margin reports",
      ],
    },
    {
      role: "Company Admin",
      icon: <RiShieldCheckLine className="size-6 text-cyan-600 dark:text-cyan-400" />,
      promise: "Full multi-branch control & compliance",
      badge: "Executive",
      capabilities: [
        "Configure GST tax regimes, FBR rules & fiscal paths",
        "Add/edit branches, warehouses, users & permissions",
        "View company-wide P&L, balance sheets & tax registers",
        "Audit trail logs: view every price change or override",
      ],
    },
    {
      role: "Super Admin",
      icon: <RiBuilding4Line className="size-6 text-violet-600 dark:text-violet-400" />,
      promise: "Multi-tenant platform & company management",
      badge: "Platform Host",
      capabilities: [
        "Manage multiple distinct legal tenant companies",
        "Platform database backups, updates & API integrations",
        "Global subscription tiers, module toggles & billing",
        "Enterprise cloud scalability & health telemetry",
      ],
    },
  ];

  return (
    <section id="roles" className="py-20 md:py-28 bg-background text-foreground relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold text-blue-600 dark:text-blue-400 mb-4">
            <RiLockPasswordLine className="size-3.5" />
            <span>Granular Role-Based Access Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-4">
            Security and permissions tailored to every team member
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Keep sensitive financials and master tax settings away from the cashier terminal while giving cashiers the speed they need to ring sales without friction.
          </p>
        </div>

        {/* Roles 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/60 hover:shadow-md transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-muted/40 border border-border group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-colors">
                    {r.icon}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded border border-border">
                    {r.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {r.role}
                </h3>
                <p className="text-xs text-muted-foreground mb-5 font-medium leading-tight">
                  {r.promise}
                </p>

                <ul className="space-y-2.5 border-t border-border pt-4">
                  {r.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-foreground/80 leading-snug">
                      <RiCheckLine className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-border text-[10px] font-mono text-muted-foreground">
                Isolated context & activity log tracked
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
