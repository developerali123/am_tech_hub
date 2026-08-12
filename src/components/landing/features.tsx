"use client";

import {
  RiUserSharedLine,
  RiCalendarCheckLine,
  RiFileList3Line,
  RiCoinsLine,
  RiHandCoinLine,
  RiAwardLine,
  RiCheckboxCircleFill,
  RiGraduationCapLine,
} from "@remixicon/react";

const FEATURES_DATA = [
  {
    title: "Employee Lifecycle Management",
    description: "Manage the complete employee journey from onboarding to exit with centralized employee records.",
    icon: RiUserSharedLine,
    color: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.15)",
    items: [
      "Employee Management",
      "Profile Management",
      "Position Assignment",
      "Resignation Management",
      "Termination & Exit Checks",
      "NOC Processing",
    ],
  },
  {
    title: "Attendance & Workforce Management",
    description: "Handle complex workforce schedules with flexible attendance and shift management.",
    icon: RiCalendarCheckLine,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
    items: [
      "Attendance Tracking",
      "Roster Management",
      "Work Shifts Configuration",
      "Rotating Shift Patterns",
      "Shift Swap Requests",
      "Attendance Policies",
    ],
  },
  {
    title: "Leave Management",
    description: "Automate leave approvals while maintaining complete leave history and balances.",
    icon: RiFileList3Line,
    color: "from-sky-500 to-blue-600",
    glowColor: "rgba(14, 165, 233, 0.15)",
    items: [
      "Leave Requests Routing",
      "Real-time Leave Balances",
      "Leave Ledgers & Audits",
      "Custom Leave Types",
      "Custom Leave Policies",
      "Company Holiday Calendars",
    ],
  },
  {
    title: "Payroll Automation",
    description: "Run accurate payroll with automated calculations, deductions, taxes and settlements.",
    icon: RiCoinsLine,
    color: "from-primary to-violet-600",
    glowColor: "rgba(139, 92, 246, 0.15)",
    items: [
      "Payroll Build Engine",
      "Payroll Summaries & G/L",
      "Digital Payslips Portal",
      "Flexible Paycodes",
      "Tax Slabs & Reliefs",
      "Settlement Accounts Setup",
      "Payroll Ledgers & Exports",
    ],
  },
  {
    title: "Finance & Benefits",
    description: "Connect HR operations with financial processes and employee benefits.",
    icon: RiHandCoinLine,
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    items: [
      "Loan Management & Interest",
      "Loan Disbursement Ledger",
      "Expense Claims & Receipts",
      "Benefits & Final Settlement",
      "Accounting Integration API",
      "Chart of Accounts Mapping",
    ],
  },
  {
    title: "Performance & Compliance",
    description: "Support employee development and organizational compliance with structured processes.",
    icon: RiAwardLine,
    color: "from-rose-500 to-red-600",
    glowColor: "rgba(244, 63, 94, 0.15)",
    items: [
      "Annual Appraisals & Reviews",
      "Disciplinary Proceedings",
      "Disciplinary Appeals Routing",
      "Custom Assessment Forms",
      "Custom Approval Workflows",
    ],
  },
  {
    title: "Training & Development Module",
    description: "Accelerate professional growth, track course progress, manage certifications, and collect training feedback.",
    icon: RiGraduationCapLine,
    color: "from-fuchsia-500 to-purple-600",
    glowColor: "rgba(217, 70, 239, 0.15)",
    items: [
      "Training Course Registry",
      "Corporate Certification Tracking",
      "Employee Quiz & Assessment Portal",
      "Automatic Retraining Tickers",
      "Feedback & Review Forms",
      "Skills Matrix Telemetry Dashboard",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            A Complete Suite of HR & Payroll Tools
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A single unified ledger that handles employee records, work rosters, leave balances, automated payroll calculations, and financial accounting integrations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out group"
                style={{
                  boxShadow: `0 0 30px -15px ${feature.glowColor}`,
                }}
              >
                <div>
                  {/* Icon */}
                  <div className={`size-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="size-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-xs text-foreground/80 group-hover:translate-x-1.5 transition-transform duration-300">
                        <RiCheckboxCircleFill className="size-4 text-primary shrink-0 opacity-80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
