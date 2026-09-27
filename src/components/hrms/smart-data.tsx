"use client";

import {
  RiSearchEyeLine,
  RiFilter3Line,
  RiDownloadCloud2Line,
  RiUploadCloud2Line,
  RiFileTextLine,
  RiSpeedMiniLine,
  RiCheckboxCircleFill,
} from "@remixicon/react";

const SMART_DATA_CARDS = [
  {
    title: "Advanced Search",
    subtitle: "Find Information Instantly",
    desc: "Search employees, payroll records, attendance logs, leave requests, expenses, loans, and more in seconds.",
    icon: RiSearchEyeLine,
    badge: null,
    color: "from-indigo-500 to-blue-600",
    glowColor: "rgba(99, 102, 241, 0.15)",
    points: ["Global Search", "Quick Record Lookup", "Real-Time Results", "Fast Navigation"],
  },
  {
    title: "Smart Filters",
    subtitle: "Filter Data Your Way",
    desc: "Narrow down records using multiple criteria including office, department, employee, date range, status, payroll period, leave type, and more.",
    icon: RiFilter3Line,
    badge: null,
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.15)",
    points: ["Multi-Level Filters", "Date Range Filters", "Status-Based Filtering", "Department & Office Filters"],
  },
  {
    title: "Data Export",
    subtitle: "Export Reports in One Click",
    desc: "Download filtered data for payroll processing, audits, compliance reporting, finance reconciliation, and management reviews.",
    icon: RiDownloadCloud2Line,
    badge: "Export Only What You Need",
    color: "from-sky-500 to-indigo-600",
    glowColor: "rgba(14, 165, 233, 0.15)",
    points: ["Payroll Exports", "Attendance Reports", "Leave Reports", "Employee Data", "Financial Records"],
  },
  {
    title: "Bulk Import",
    subtitle: "Import Data Without Manual Entry",
    desc: "Upload employees, payroll information, opening balances, leave records, and other master data using ready-to-use templates.",
    icon: RiUploadCloud2Line,
    badge: "Import Thousands of Records in Minutes",
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
    points: ["Excel Import", "Bulk Upload", "Data Validation", "Ready-Made Templates"],
  },
  {
    title: "Sample Templates",
    subtitle: "Pre-Built Import Templates",
    desc: "Reduce setup time with downloadable templates designed for accurate and consistent data imports.",
    icon: RiFileTextLine,
    badge: null,
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    points: [
      "Employee Templates",
      "Payroll Templates",
      "Leave Templates",
      "Loan Templates",
      "Master Data Templates",
    ],
  },
  {
    title: "Pagination & Performance",
    subtitle: "Built for Large Organizations",
    desc: "Navigate large datasets smoothly with optimized pagination and fast-loading screens.",
    icon: RiSpeedMiniLine,
    badge: null,
    color: "from-rose-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.15)",
    points: ["Large Data Support", "Fast Page Loading", "Efficient Navigation", "Enterprise Performance"],
  },
];

export function SmartData() {
  return (
    <section id="smart-data" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
            Smart Data Management
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Find, Import, Export, and Manage Data Effortlessly
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Handle thousands of employee, payroll, attendance, and financial records with powerful search, filtering, import, and export capabilities built into every module.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SMART_DATA_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out group"
                style={{
                  boxShadow: `0 0 30px -15px ${card.glowColor}`,
                }}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`size-11 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="size-5.5" />
                    </div>

                    {card.badge && (
                      <span className="text-[9px] font-extrabold uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Sub */}
                  <h3 className="text-base font-extrabold text-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="grid grid-cols-2 gap-2 border-t border-border/60 pt-4">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5 text-[10px] text-foreground/80 group-hover:translate-x-1 transition-transform duration-300">
                        <RiCheckboxCircleFill className="size-3.5 text-primary shrink-0 opacity-80" />
                        <span className="truncate">{pt}</span>
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
