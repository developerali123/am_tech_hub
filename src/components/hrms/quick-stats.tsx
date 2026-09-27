"use client";

import {
  RiCheckboxCircleLine,
  RiSearchLine,
  RiUploadCloudLine,
  RiDownloadCloudLine,
  RiEqualizerLine,
  RiSpeedLine,
} from "@remixicon/react";

const STATS_ITEMS = [
  { label: "50+ HR & Payroll Modules", icon: RiCheckboxCircleLine, color: "text-emerald-500" },
  { label: "Advanced Search Across All Records", icon: RiSearchLine, color: "text-blue-500" },
  { label: "Bulk Import with Ready Templates", icon: RiUploadCloudLine, color: "text-violet-500" },
  { label: "One-Click Data Export Support", icon: RiDownloadCloudLine, color: "text-indigo-500" },
  { label: "Configurable Filters on Every Module", icon: RiEqualizerLine, color: "text-amber-500" },
  { label: "Optimized for Large Datasets", icon: RiSpeedLine, color: "text-rose-500" },
];

export function QuickStats() {
  return (
    <section id="quick-stats" className="py-12 border-y border-border/60 bg-muted/10 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border/60 bg-card/40 hover:bg-card hover:border-border transition-all">
                <div className={`p-2 rounded-lg bg-muted/30 shrink-0 ${item.color}`}>
                  <Icon className="size-5" />
                </div>
                <span className="font-bold text-xs text-foreground/80 leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
