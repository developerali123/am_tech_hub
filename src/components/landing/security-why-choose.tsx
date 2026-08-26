"use client";

import {
  RiSettings4Line,
  RiBuildingLine,
  RiShieldFlashLine,
  RiTimerFlashLine,
  RiGitRepositoryPrivateLine,
  RiSearchEyeLine,
  RiLockLine,
  RiKeyLine,
  RiFileTextLine,
  RiRadarLine,
} from "@remixicon/react";

const WHY_CHOOSE_ITEMS = [
  {
    title: "Highly Configurable",
    desc: "Adjust compliance rosters, holiday periods, tax brackets, and approval nodes without coding.",
    icon: RiSettings4Line,
  },
  {
    title: "Enterprise Ready",
    desc: "Built to support multi-office entities, localized tax structures, and international shift patterns.",
    icon: RiBuildingLine,
  },
  {
    title: "Secure & Scalable",
    desc: "Deploys on secure cloud infrastructure that automatically expands with employee database growth.",
    icon: RiShieldFlashLine,
  },
  {
    title: "Fast Implementation",
    desc: "Migrate employee history, outstanding loans, and rosters within days with dedicated support.",
    icon: RiTimerFlashLine,
  },
  {
    title: "Role-Based Access",
    desc: "Enforce custom visibility levels so managers see roster metrics, and finance sees payroll ledgers.",
    icon: RiGitRepositoryPrivateLine,
  },
  {
    title: "Audit Trails",
    desc: "Record all ledger updates, profile changes, and expense approvals in an unalterable history log.",
    icon: RiSearchEyeLine,
  },
];

const SECURITY_ITEMS = [
  {
    title: "Role-Based Permissions",
    desc: "Define granular policies down to single action permissions, matching your internal controls structure.",
    icon: RiKeyLine,
  },
  {
    title: "Data Encryption",
    desc: "All personal employee data, banking numbers, and files are encrypted at rest (AES-256) and in transit (TLS 1.3).",
    icon: RiLockLine,
  },
  {
    title: "Audit Logs",
    desc: "Automatic immutable tracking logs that details who accessed or modified payroll, bank registers, and profiles.",
    icon: RiFileTextLine,
  },
  {
    title: "Activity Tracking",
    desc: "Real-time active tracking of user logins, IP vectors, and security alerts, keeping you compliant.",
    icon: RiRadarLine,
  },
];

export function SecurityWhyChoose() {
  return (
    <section id="security" className="py-20 md:py-28 bg-muted/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
              Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Organizations Choose Us
            </h2>
            <p className="text-muted-foreground text-sm">
              We connect your HR processes directly to finance logic in a secure, audit-ready environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-border bg-card hover:border-foreground/15 transition-all">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="size-5" />
                </div>
                <h4 className="font-bold text-sm text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-border/60 my-16" />

        {/* Security Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
              Compliance & Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-muted-foreground text-sm">
              Protecting employee records and banking structures is our primary operational focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECURITY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm">
                <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
