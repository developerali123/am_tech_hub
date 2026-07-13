"use client";

import {
  RiBankFill,
  RiBuildingLine,
  RiGraduationCapFill,
  RiHeartPulseFill,
  RiGlobeFill,
  RiShieldCheckLine,
} from "@remixicon/react";

export function TrustedBy() {
  const LOGOS = [
    { name: "Acuity Finance", icon: RiBankFill, text: "AcuityFinance" },
    { name: "Apex Enterprise", icon: RiBuildingLine, text: "ApexCorp" },
    { name: "Nova Edu", icon: RiGraduationCapFill, text: "NovaEdu" },
    { name: "GlobalCare NGO", icon: RiGlobeFill, text: "GlobalCare" },
    { name: "Vertex HR", icon: RiShieldCheckLine, text: "VertexHR" },
  ];

  return (
    <section className="py-12 border-y border-border/60 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by HR Teams, Finance Departments, Educational Institutions, NGOs and Enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-24 opacity-60 dark:opacity-50">
          {LOGOS.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              <logo.icon className="size-6 text-foreground shrink-0" />
              <span className="font-bold text-sm tracking-tight text-foreground font-mono">{logo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
