"use client";

import {
  RiBankFill,
  RiBuildingLine,
  RiGraduationCapFill,
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
    <section className="py-12 border-y border-border/60 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by HR Teams, Finance Departments, Educational Institutions, NGOs and Enterprises
        </p>
        
        {/* Continuous Horizontal Ticker */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max opacity-60 dark:opacity-50 hover:opacity-90 transition-opacity duration-300 animate-infinite-scroll">
            {/* 1st copy */}
            <div className="flex items-center gap-16 shrink-0 pr-16">
              {LOGOS.map((logo, index) => (
                <div
                  key={`copy1-${index}`}
                  className="flex items-center gap-2 transition-opacity duration-200 cursor-default"
                >
                  <logo.icon className="size-6 text-foreground shrink-0" />
                  <span className="font-bold text-sm tracking-tight text-foreground font-mono">{logo.text}</span>
                </div>
              ))}
            </div>

            {/* 2nd copy */}
            <div className="flex items-center gap-16 shrink-0 pr-16" aria-hidden="true">
              {LOGOS.map((logo, index) => (
                <div
                  key={`copy2-${index}`}
                  className="flex items-center gap-2 transition-opacity duration-200 cursor-default"
                >
                  <logo.icon className="size-6 text-foreground shrink-0" />
                  <span className="font-bold text-sm tracking-tight text-foreground font-mono">{logo.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
