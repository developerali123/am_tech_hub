"use client";

const HIGHLIGHTS = [
  { number: "50+", suffix: "HR & Payroll Modules", desc: "Covers employee directory, work rotations, advanced loan rules, accounting ledgers, and appraisals." },
  { number: "100%", suffix: "Configurable Policies", desc: "No hardcoding. Tailor leave types, shift caps, tax brackets, and compliance settings from our rules engine." },
  { number: "Multi-Tenant", suffix: "Multi-Company Architecture", desc: "Isolate and administer distinct sister companies, branches, or client entities with secure logical database schema boundaries." },
  { number: "Multi-Level", suffix: "Approval Workflows", desc: "Custom chains of validation for leave, expenses, and payroll runs, routed straight to managers." },
];

export function PlatformHighlights() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/20 pl-6 first:border-l-0">
              <span className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                {item.number}
              </span>
              <span className="text-sm font-bold tracking-wide uppercase mb-3 text-white/90">
                {item.suffix}
              </span>
              <p className="text-xs text-white/75 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
