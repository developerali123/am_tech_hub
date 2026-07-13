"use client";

import React from "react";
import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="py-20 relative bg-brand-midnight overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-teal/5 to-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 w-fit">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
                SaaS Dashboard Preview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Designed for Speed. <br />
              Optimized for Scale.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
              Our enterprise HRMS and payroll interface gives operation leads a high-fidelity control dashboard. Real-time telemetry, automated tax auditing pipelines, and employee ledger records are computed inside single-page modular modules.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="p-4 rounded-2xl bg-brand-dark-gray/40 border border-brand-dark-gray">
                <div className="text-xl sm:text-2xl font-black text-brand-teal font-sans">99.998%</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1 font-sans">API SLA Uptime</div>
              </div>
              <div className="p-4 rounded-2xl bg-brand-dark-gray/40 border border-brand-dark-gray">
                <div className="text-xl sm:text-2xl font-black text-brand-cyan font-sans">&lt; 45ms</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1 font-sans">Payroll Sync Latency</div>
              </div>
            </div>
          </div>

          {/* Right angled 3D device showcase */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[620px] aspect-[16/10] [perspective:1500px]">
              
              {/* Outer Glow container */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-cyan/20 rounded-2xl blur-3xl opacity-60"></div>

              {/* Tilted frame */}
              <div className="relative w-full h-full rounded-2xl border border-brand-teal/30 bg-[#07181f]/80 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 transform rotate-x-6 rotate-y-[-10deg] skew-y-1 overflow-hidden group">
                
                {/* Simulated browser window bar */}
                <div className="flex items-center gap-1.5 px-3 pb-2.5 pt-1 border-b border-brand-dark-gray/60 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  <div className="h-4 w-40 sm:w-60 rounded bg-brand-dark-gray/50 ml-4 border border-brand-dark-gray/30 text-[9px] text-slate-500 flex items-center justify-center font-sans tracking-wide">
                    app.amtechhub.com/dashboard/payroll
                  </div>
                </div>

                {/* Dashboard Image */}
                <div className="relative w-full h-[calc(100%-36px)] rounded-lg overflow-hidden bg-[#03141a]">
                  <Image
                    src="/am_tech_hub_cover_image.png"
                    alt="AM Tech Hub SaaS Dashboard Preview"
                    fill
                    sizes="(max-w-7xl) 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                </div>

                {/* Floating telemetry metrics tag */}
                <div className="absolute bottom-6 left-6 p-3 rounded-xl glass-panel bg-brand-midnight/90 border border-brand-teal/40 shadow-lg flex items-center gap-3 backdrop-blur-xl animate-bounce">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-sans">WebSocket State</span>
                    <span className="text-xs font-bold text-white font-sans">1.84M Syncing Nodes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
