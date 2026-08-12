"use client";

import React from "react";

const TESTIMONIALS = [
  {
    quote: "AM Tech Hub's custom DevOps architecture completely transformed our rollout pipeline. Automated payroll ledger synchronization that used to take days now finishes in less than an hour.",
    name: "Eleanor Vance",
    role: "Director of HR Operations",
    company: "TechSphere Inc.",
    initials: "EV",
    gradient: "from-brand-teal to-brand-cyan"
  },
  {
    quote: "Integrating autonomous AI audit agents saved us countless accounting hours. The ledger anomaly detection catches mismatches in real-time, giving us 100% compliance security.",
    name: "Marcus Thorne",
    role: "VP of Engineering & Finance",
    company: "Horizon Retail Group",
    initials: "MT",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    quote: "Their team delivered a modular high-concurrency microservices stack in record time. Excellent engineering support, SOC2 compliance blueprints, and zero migration downtime.",
    name: "Katarina Rostova",
    role: "Chief Technology Officer",
    company: "Apex Global Services",
    initials: "KR",
    gradient: "from-brand-cyan to-blue-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-brand-midnight-dark">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/60 backdrop-blur-md mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
              Customer Success
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Trusted by Leaders. <br />
            Built for Scale.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed font-sans text-sm md:text-base">
            See how enterprise leaders, CTOs, and HR operations directors leverage our custom engineering pipelines and SaaS platforms to drive speed, compliance, and automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/80 hover:border-brand-teal/40 hover:bg-brand-dark-gray/40 hover:shadow-brand-teal/10 shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Glowing decorative indicator */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div>
                {/* 5-star rating */}
                <div className="flex gap-1 text-brand-teal mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 italic font-sans">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-dark-gray/60">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${test.gradient} flex items-center justify-center text-sm font-bold text-brand-midnight font-sans shrink-0 shadow-md`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white font-sans leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-sans leading-none">
                    {test.role}, <span className="text-brand-teal">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
