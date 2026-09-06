"use client";

import React from "react";
import {
  RiGitBranchLine,
  RiShieldUserLine,
  RiReceiptLine,
  RiWifiOffLine,
  RiTreeLine,
  RiBuilding2Line,
} from "@remixicon/react";

const PROOF_POINTS = [
  {
    icon: <RiGitBranchLine className="size-5 text-[#0074d9] dark:text-[#4da3ff]" />,
    title: "Multi-Branch Ready",
    desc: "Company → Branches → Warehouses",
  },
  {
    icon: <RiShieldUserLine className="size-5 text-[#0074d9] dark:text-[#4da3ff]" />,
    title: "Granular RBAC",
    desc: "Cashier, Warehouse, Manager & Admin roles",
  },
  {
    icon: <RiReceiptLine className="size-5 text-emerald-600 dark:text-emerald-400" />,
    title: "FBR & Tax Engine",
    desc: "Configurable rates, HS codes & fiscal invoices",
  },
  {
    icon: <RiWifiOffLine className="size-5 text-amber-600 dark:text-amber-400" />,
    title: "Offline Sale Queue",
    desc: "Keep ringing sales during internet drops",
  },
  {
    icon: <RiTreeLine className="size-5 text-emerald-600 dark:text-emerald-300" />,
    title: "Wood & CFT Pack",
    desc: "Serial items, measured CFT & car batches",
  },
  {
    icon: <RiBuilding2Line className="size-5 text-[#0074d9] dark:text-[#4da3ff]" />,
    title: "Multi-Tenant Platform",
    desc: "Super-admin portal for multiple companies",
  },
];

export function POSTrustStrip() {
  return (
    <section className="py-8 bg-muted/20 border-y border-border relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {PROOF_POINTS.map((pt, i) => (
            <div key={i} className="flex flex-col items-start gap-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-card border border-border group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-colors shadow-xs">
                  {pt.icon}
                </div>
                <h4 className="text-xs font-bold text-foreground tracking-tight">{pt.title}</h4>
              </div>
              <p className="text-[11px] text-muted-foreground leading-tight pl-1">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
