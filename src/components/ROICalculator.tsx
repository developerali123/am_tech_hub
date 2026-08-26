"use client";

import React, { useState, useEffect } from "react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(150);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursSpent, setHoursSpent] = useState(40);

  const [manualCost, setManualCost] = useState(0);
  const [automatedCost, setAutomatedCost] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Math formulas for Payroll ROI
    const adminProcessingCost = hoursSpent * hourlyRate;
    const humanErrorsCost = employees * 6; // Average $6 in compliance errors/penalties per employee manually
    const totalManual = adminProcessingCost + humanErrorsCost;

    // AM Tech Hub automated payroll cost
    const baseSubscription = 149;
    const userLicenseCost = employees * 2.5; // $2.50 per user license
    const adminProcessingAutomated = (hoursSpent * 0.1) * hourlyRate; // 90% time savings
    const humanErrorsAutomated = (employees * 0.05); // 99% accuracy rate
    const totalAutomated = baseSubscription + userLicenseCost + adminProcessingAutomated + humanErrorsAutomated;

    const monthlySaved = Math.max(0, totalManual - totalAutomated);
    
    setManualCost(Math.round(totalManual));
    setAutomatedCost(Math.round(totalAutomated));
    setSavings(Math.round(monthlySaved));
  }, [employees, hourlyRate, hoursSpent]);

  return (
    <section className="py-24 relative overflow-hidden bg-brand-midnight-dark">
      {/* Background radial cyan glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-midnight/60 backdrop-blur-md mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal">
              ROI Projection
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Calculate Your Payroll Automation Savings
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            See how migrating from manual processing to the AM Tech Hub SaaS payroll pipeline reduces administrative hours by 90% and eliminates compliance penalty overheads.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Container (Left) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 flex flex-col gap-8 justify-center">
            
            {/* Slider 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-300 font-sans">Total Headcount</span>
                <span className="text-brand-teal font-black font-sans">{employees} Employees</span>
              </div>
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-lg bg-brand-midnight border border-brand-dark-gray appearance-none cursor-pointer accent-brand-teal"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>10</span>
                <span>1,000</span>
                <span>2,000</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-300 font-sans">Staff Blended Hourly Rate</span>
                <span className="text-brand-teal font-black font-sans">${hourlyRate} / Hr</span>
              </div>
              <input
                type="range"
                min="15"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-lg bg-brand-midnight border border-brand-dark-gray appearance-none cursor-pointer accent-brand-teal"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>$15</span>
                <span>$67</span>
                <span>$120</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-300 font-sans">Manual HR Admin Processing Hours</span>
                <span className="text-brand-teal font-black font-sans">{hoursSpent} Hours / Mo</span>
              </div>
              <input
                type="range"
                min="5"
                max="160"
                step="5"
                value={hoursSpent}
                onChange={(e) => setHoursSpent(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-lg bg-brand-midnight border border-brand-dark-gray appearance-none cursor-pointer accent-brand-teal"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>5 hrs</span>
                <span>80 hrs</span>
                <span>160 hrs</span>
              </div>
            </div>

          </div>

          {/* ROI Results Card (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-[#07242c] to-[#01141a] border border-brand-teal/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col gap-6">
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-400 font-sans">
                Monthly Savings Summary
              </h3>

              {/* Huge Savings Counter */}
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-teal font-sans">Net Savings</div>
                <div className="text-5xl sm:text-6xl font-black text-white font-sans mt-1 flex items-baseline gap-1">
                  ${savings.toLocaleString()}
                  <span className="text-xs font-bold text-slate-400">/ mo</span>
                </div>
              </div>

              {/* Annualized Savings */}
              <div className="border-t border-brand-dark-gray/60 pt-4">
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan font-sans">Annual Savings Projection</div>
                <div className="text-2xl sm:text-3xl font-black text-brand-cyan font-sans mt-0.5">
                  ${(savings * 12).toLocaleString()}
                  <span className="text-[11px] font-bold text-slate-400"> / yr</span>
                </div>
              </div>

              {/* Breakdown comparison metrics */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400 font-sans">
                  <span>Traditional Process Cost:</span>
                  <span className="text-red-400 font-bold">${manualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 font-sans">
                  <span>AM Tech Hub Automations:</span>
                  <span className="text-brand-teal font-bold">${automatedCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Note text and button */}
            <div className="mt-8 pt-5 border-t border-brand-dark-gray/60">
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans mb-4">
                * Projections are based on administrative labor savings, compliance risk reduction, and modular software licenses. Actual savings may vary.
              </p>
              <a
                href="#services"
                className="block text-center w-full py-3 px-5 text-xs font-bold text-brand-midnight bg-brand-teal hover:bg-brand-cyan rounded-full shadow-lg shadow-brand-teal/20 transition-all duration-300"
              >
                Verify Calculator Specs
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
