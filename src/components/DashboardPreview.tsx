"use client";

import React, { useState, useEffect, useRef } from "react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "automation" | "logs">("overview");
  const [aiEnabled, setAiEnabled] = useState(true);
  const [complianceEnabled, setComplianceEnabled] = useState(true);
  const [rosterEnabled, setRosterEnabled] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Booting AM Tech Hub ledger core...",
    "[INFO] Establishing secure gRPC channels... Connected",
    "[SECURITY] SSL/TLS 1.3 handshake successful.",
    "[AI AGENT] Audit engine initialized (LLM v4.2-flash).",
    "[SYSTEM] Standby - Listening for incoming payroll webhook briefs."
  ]);
  const [auditProgress, setAuditProgress] = useState<number | null>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal logs locally (prevents page-level scroll shifts)
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulated background log ticker
  useEffect(() => {
    const messages = [
      "[INFO] Syncing ledger telemetry with Apex Ledger DB.",
      "[AI AGENT] Auditing employee rosters for California overtime compliance... Clean.",
      "[SYSTEM] Generated tax voucher hash: tx_0x9a8f2e4b.",
      "[INFO] Ping latency: 12ms to cluster-us-west.",
      "[AI AGENT] Smart payroll auditor calculated tax bracket differential... Adjusted 0.12%.",
      "[SECURITY] Automated role authorization check passed for role ID: accountant_lead.",
      "[SYSTEM] Standby payroll cycle disbursement queue: 0 pending."
    ];

    const interval = setInterval(() => {
      // Add random message
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [...prev, `[${timestamp}] ${randomMsg}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const triggerManualAudit = () => {
    if (auditProgress !== null) return;
    
    setAuditProgress(0);
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, `[${timestamp}] [AI AUDIT] Manual sanity audit requested by admin.`]);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setAuditProgress(progress);
      
      const ts = new Date().toLocaleTimeString();
      if (progress === 25) {
        setLogs((prev) => [...prev, `[${ts}] [AI AUDIT] Scanning active payroll ledger database index...`]);
      } else if (progress === 50) {
        setLogs((prev) => [...prev, `[${ts}] [AI AUDIT] Checking compliance with IRS Sec 409A limits...`]);
      } else if (progress === 75) {
        setLogs((prev) => [...prev, `[${ts}] [AI AUDIT] Running anomalous payout pattern analysis...`]);
      } else if (progress === 100) {
        setLogs((prev) => [
          ...prev, 
          `[${ts}] [AI AUDIT] SUCCESS: Audit passed. Zero ledger violations detected.`
        ]);
        clearInterval(interval);
        setTimeout(() => setAuditProgress(null), 1000);
      }
    }, 800);
  };

  const handleToggle = (type: "ai" | "compliance" | "roster") => {
    const timestamp = new Date().toLocaleTimeString();
    if (type === "ai") {
      const nextVal = !aiEnabled;
      setAiEnabled(nextVal);
      setLogs((prev) => [
        ...prev, 
        `[${timestamp}] [AI AGENT] Agent core set to: ${nextVal ? "ACTIVE" : "SHUTDOWN"}`
      ]);
    } else if (type === "compliance") {
      const nextVal = !complianceEnabled;
      setComplianceEnabled(nextVal);
      setLogs((prev) => [
        ...prev, 
        `[${timestamp}] [SYSTEM] Automated tax compliance module: ${nextVal ? "ENABLED" : "DISABLED"}`
      ]);
    } else if (type === "roster") {
      const nextVal = !rosterEnabled;
      setRosterEnabled(nextVal);
      setLogs((prev) => [
        ...prev, 
        `[${timestamp}] [AI AGENT] Intelligent roster optimization engine: ${nextVal ? "RUNNING" : "STOPPED"}`
      ]);
    }
  };

  return (
    <section className="py-24 relative bg-brand-midnight overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-teal/5 to-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-dark-gray/50 w-fit">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-teal flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                </span>
                Interactive SaaS Preview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Designed for Speed. <br />
              Autonomous by Choice.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
              Experience the control panel for your enterprise HRMS and payroll. Click the live interactive preview to configure AI audit parameters, toggle self-filing compliance workflows, and monitor real-time telemetry logs.
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
            <div className="relative w-full max-w-[650px] aspect-[16/10] [perspective:1500px]">
              
              {/* Outer Glow container */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-cyan/20 rounded-2xl blur-3xl opacity-60 pointer-events-none"></div>

              {/* Tilted interactive frame */}
              <div className="relative w-full h-full rounded-2xl border border-brand-teal/30 bg-[#07181f]/95 p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 transform rotate-x-4 rotate-y-[-6deg] skew-y-1 overflow-hidden group flex flex-col">
                
                {/* Simulated browser window bar */}
                <div className="flex items-center justify-between px-3 pb-2 pt-1 border-b border-brand-dark-gray/60 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                    <div className="h-4 w-48 sm:w-60 rounded bg-brand-dark-gray/50 ml-4 border border-brand-dark-gray/30 text-[9px] text-slate-400 flex items-center justify-center font-mono tracking-wide">
                      app.amtechhub.com/dashboard/control-center
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono hidden sm:block">
                    Node: client_us_west_1
                  </div>
                </div>

                {/* Dashboard Panel Wrapper */}
                <div className="flex-grow flex rounded-lg overflow-hidden bg-[#03141a] text-slate-300 min-h-[280px]">
                  
                  {/* Dashboard Mock Sidebar */}
                  <div className="w-16 sm:w-20 bg-brand-midnight border-r border-brand-dark-gray flex flex-col items-center py-4 gap-4">
                    {/* Logo dot */}
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-teal to-brand-cyan flex items-center justify-center text-[10px] text-brand-midnight font-black">
                      AM
                    </div>
                    <div className="w-full h-px bg-brand-dark-gray/80 my-2"></div>
                    
                    {/* Menu items */}
                    <button 
                      onClick={() => setActiveTab("overview")}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${activeTab === "overview" ? "bg-brand-teal/15 text-brand-teal" : "text-slate-500 hover:text-slate-300"}`}
                      title="Overview"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setActiveTab("automation")}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${activeTab === "automation" ? "bg-brand-teal/15 text-brand-teal" : "text-slate-500 hover:text-slate-300"}`}
                      title="AI Automation Track"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.904-4.473L21 9l-3.482-3.482M9.813 15.904 5.011 12.28m4.802 3.624L17.518 9.09m-3.482-3.482L12.3 8.3m0 0a4.5 4.5 0 1 0-6.364 6.364l4.586-4.586" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setActiveTab("logs")}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${activeTab === "logs" ? "bg-brand-teal/15 text-brand-teal" : "text-slate-500 hover:text-slate-300"}`}
                      title="Terminal Telemetry Logs"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                    </button>
                  </div>

                  {/* Main Simulated Panel */}
                  <div className="flex-grow flex flex-col p-4 overflow-hidden relative">
                    
                    {/* Header profile row */}
                    <div className="flex items-center justify-between border-b border-brand-dark-gray/60 pb-3 mb-4">
                      <div>
                        <h3 className="text-xs font-bold text-white capitalize font-sans">
                          {activeTab === "overview" && "Executive Telemetry Dashboard"}
                          {activeTab === "automation" && "AI Automation Hub"}
                          {activeTab === "logs" && "Live Telemetry Auditor"}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-sans">
                          {activeTab === "overview" && "Active Payroll Cycle Summary"}
                          {activeTab === "automation" && "Configure Intelligent Workflows"}
                          {activeTab === "logs" && "Autonomous compliance ledger records"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" title="System online"></div>
                        <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest hidden sm:block">AI Live</span>
                      </div>
                    </div>

                    {/* Tab Views */}
                    <div className="flex-grow overflow-y-auto">
                      
                      {/* VIEW 1: OVERVIEW */}
                      {activeTab === "overview" && (
                        <div className="flex flex-col gap-4">
                          {/* Metrics row */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2.5 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-sans">Disbursements</span>
                              <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5 font-mono">$148,250.00</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-sans">Staff Audited</span>
                              <div className="text-xs sm:text-sm font-extrabold text-brand-teal mt-0.5 font-mono">42 Active</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-sans">Next Payday</span>
                              <div className="text-xs sm:text-sm font-extrabold text-brand-cyan mt-0.5 font-mono">15-Aug-2026</div>
                            </div>
                          </div>

                          {/* Interactive Section */}
                          <div className="p-4 rounded-xl bg-brand-dark-gray/30 border border-brand-teal/20 relative overflow-hidden flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-white font-sans">Active Pre-Disbursement Compliance check</h4>
                                <p className="text-[9.5px] text-slate-400 mt-0.5 font-sans leading-relaxed">
                                  Run real-time automated audit testing using autonomous agent nodes.
                                </p>
                              </div>
                              <button 
                                onClick={triggerManualAudit}
                                disabled={auditProgress !== null}
                                className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border border-brand-teal bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-brand-midnight transition-colors cursor-pointer disabled:opacity-50`}
                              >
                                {auditProgress !== null ? `Auditing (${auditProgress}%)` : "Trigger AI Audit"}
                              </button>
                            </div>

                            {/* Progress bar */}
                            {auditProgress !== null && (
                              <div className="w-full bg-brand-dark-gray rounded-full h-1.5 overflow-hidden">
                                <div className="bg-brand-teal h-1.5 transition-all duration-300" style={{ width: `${auditProgress}%` }}></div>
                              </div>
                            )}
                          </div>

                          {/* Quick Telemetry Indicator */}
                          <div className="flex items-center justify-between bg-brand-midnight/40 p-2 px-3 rounded-lg border border-brand-dark-gray">
                            <span className="text-[10px] text-slate-400 font-sans">Compliance Health Index</span>
                            <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 font-mono">
                              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                              </svg>
                              100% SECURE
                            </span>
                          </div>
                        </div>
                      )}

                      {/* VIEW 2: AI AUTOMATIONS */}
                      {activeTab === "automation" && (
                        <div className="flex flex-col gap-3">
                          {/* Toggle 1 */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                            <div>
                              <h4 className="text-xs font-bold text-white font-sans">AI Pre-Audit Engine</h4>
                              <p className="text-[9.5px] text-slate-500 mt-0.5 font-sans">
                                Checks tax entries against state brackets autonomously.
                              </p>
                            </div>
                            <button 
                              onClick={() => handleToggle("ai")}
                              className={`w-11 h-6 rounded-full transition-all duration-300 relative cursor-pointer ${aiEnabled ? "bg-brand-teal" : "bg-slate-700"}`}
                            >
                              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-brand-midnight transition-all duration-300 ${aiEnabled ? "right-0.5" : "left-0.5"}`}></div>
                            </button>
                          </div>

                          {/* Toggle 2 */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                            <div>
                              <h4 className="text-xs font-bold text-white font-sans">Auto-Filing tax integration</h4>
                              <p className="text-[9.5px] text-slate-500 mt-0.5 font-sans">
                                Disburses quarterly multi-state IRS calculations directly.
                              </p>
                            </div>
                            <button 
                              onClick={() => handleToggle("compliance")}
                              className={`w-11 h-6 rounded-full transition-all duration-300 relative cursor-pointer ${complianceEnabled ? "bg-brand-teal" : "bg-slate-700"}`}
                            >
                              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-brand-midnight transition-all duration-300 ${complianceEnabled ? "right-0.5" : "left-0.5"}`}></div>
                            </button>
                          </div>

                          {/* Toggle 3 */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-brand-dark-gray/40 border border-brand-dark-gray/80">
                            <div>
                              <h4 className="text-xs font-bold text-white font-sans">Roster Schedule Optimizer</h4>
                              <p className="text-[9.5px] text-slate-500 mt-0.5 font-sans">
                                Smart roster adjustments based on employee fatigue indices.
                              </p>
                            </div>
                            <button 
                              onClick={() => handleToggle("roster")}
                              className={`w-11 h-6 rounded-full transition-all duration-300 relative cursor-pointer ${rosterEnabled ? "bg-brand-teal" : "bg-slate-700"}`}
                            >
                              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-brand-midnight transition-all duration-300 ${rosterEnabled ? "right-0.5" : "left-0.5"}`}></div>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* VIEW 3: LIVE TELEMETRY LOGS */}
                      {activeTab === "logs" && (
                        <div ref={terminalContainerRef} className="bg-[#01090d] border border-brand-dark-gray/80 rounded-xl p-3 h-[180px] overflow-y-auto font-mono text-[9px] leading-relaxed flex flex-col gap-1.5 scrollbar-thin">
                          {logs.map((log, index) => {
                            let textClass = "text-slate-400";
                            if (log.includes("[SECURITY]")) textClass = "text-yellow-400";
                            if (log.includes("[AI AGENT]")) textClass = "text-brand-teal";
                            if (log.includes("SUCCESS")) textClass = "text-emerald-400 font-bold";
                            if (log.includes("[SYSTEM]")) textClass = "text-brand-cyan";
                            
                            return (
                              <div key={index} className={textClass}>
                                {log}
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>

                  </div>
                </div>

                {/* Floating telemetry metrics tag */}
                <div className="absolute bottom-6 left-6 p-3 rounded-xl glass-panel bg-brand-midnight/90 border border-brand-teal/40 shadow-lg flex items-center gap-3 backdrop-blur-xl pointer-events-none">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-sans">Active AI Nodes</span>
                    <span className="text-xs font-bold text-white font-sans font-mono">
                      {aiEnabled ? (complianceEnabled ? "3 Agents Online" : "2 Agents Online") : "Idle Telemetry"}
                    </span>
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
