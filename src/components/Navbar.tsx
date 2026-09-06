"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  RiStore2Line,
  RiTeamLine,
  RiBrainLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "@remixicon/react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    {
      name: "Services",
      items: [
        { name: "SaaS Product Ecosystem", href: "/services/saas" },
        { name: "AI Agentic Automations", href: "/services/ai" },
        { name: "Custom Full-Stack Engineering", href: "/services/dev" },
        { name: "Cloud & DevOps Architecture", href: "/services/devops" },
      ],
    },
    {
      name: "Solutions",
      items: [
        { name: "Commercial POS & Retail", href: "/pos" },
        { name: "Workforce HRMS & Payroll", href: "/hrms" },
        { name: "AI-Powered Automation", href: "/solutions/ai" },
        { name: "High-Concurrency Systems", href: "/solutions/concurrency" },
        { name: "Compliance & Auditing", href: "/solutions/compliance" },
      ],
    },
    { name: "Use Cases", href: "/#case-studies" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-brand-midnight/90 backdrop-blur-md border-b border-slate-200 dark:border-brand-teal/20 py-3 shadow-md dark:shadow-lg dark:shadow-brand-midnight/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center">
              <Image
                src="/am_tech_hub_logo.png"
                alt="AM Tech Hub Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain transform transition-transform duration-500 group-hover:rotate-12 z-10"
                priority
              />
              <div className="absolute -inset-1.5 bg-brand-teal/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground dark:text-white font-sans">
                AM Tech <span className="text-[#0074d9] dark:text-brand-teal">Hub</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground dark:text-slate-400 font-semibold -mt-1 group-hover:text-[#0074d9] dark:group-hover:text-brand-teal transition-colors font-sans">
                Enterprise Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Home */}
            <a
              href="/#"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* About */}
            <a
              href="/#about"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer font-sans">
                Services
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-white dark:bg-[#061d23] border border-slate-200 dark:border-brand-teal/25 p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="flex flex-col gap-1">
                  <a
                    href="/services/saas"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#0074d9] dark:group-hover/item:text-brand-teal transition-colors font-sans">
                      SaaS Product Ecosystem
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                      Enterprise HRMS & Payroll Suite
                    </span>
                  </a>
                  <a
                    href="/services/ai"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#0074d9] dark:group-hover/item:text-brand-teal transition-colors font-sans">
                      AI Agentic Automations
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                      Intelligent Workflows & LLM Audits
                    </span>
                  </a>
                  <a
                    href="/services/dev"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#0074d9] dark:group-hover/item:text-brand-teal transition-colors font-sans">
                      Custom Full-Stack Engineering
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                      High-Concurrency APIs & Streams
                    </span>
                  </a>
                  <a
                    href="/services/devops"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#0074d9] dark:group-hover/item:text-brand-teal transition-colors font-sans">
                      Cloud & DevOps Architecture
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                      SOC2/GDPR Compliant CI/CD Pipelines
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions Mega Dropdown Menu */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer font-sans">
                Solutions
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] max-w-[95vw] rounded-3xl bg-white/95 dark:bg-[#03141a]/95 backdrop-blur-2xl border border-slate-200 dark:border-brand-teal/25 p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 text-left">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-brand-dark-gray/60">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#0074d9] dark:bg-brand-teal animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-teal font-sans">
                      Enterprise Solutions Ecosystem
                    </span>
                  </div>
                  <a
                    href="/#case-studies"
                    className="text-xs font-semibold text-[#0074d9] dark:text-brand-cyan hover:underline flex items-center gap-1 font-sans"
                  >
                    View Real-World Deployments <RiArrowRightLine className="size-3.5" />
                  </a>
                </div>

                {/* 2-Column Mega Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Left Column (Flagship Platforms) - 7 cols */}
                  <div className="md:col-span-7 flex flex-col gap-3.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Flagship Production SaaS
                    </div>

                    {/* POS Card */}
                    <a
                      href="/pos"
                      className="p-4 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 dark:bg-brand-dark-gray/30 dark:hover:bg-brand-dark-gray/60 border border-slate-200/80 dark:border-brand-teal/15 transition-all group/item flex items-start gap-4"
                    >
                      <div className="size-11 rounded-xl bg-gradient-to-br from-[#0074d9] to-[#001f3f] border border-[#0074d9]/40 flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#0074d9]/25 group-hover/item:scale-105 transition-transform">
                        <RiStore2Line className="size-6 text-[#4da3ff]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-[#0074d9] dark:group-hover/item:text-brand-cyan transition-colors font-sans">
                            Commercial POS Platform
                          </span>
                          <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                            FBR Ready
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed font-sans line-clamp-2">
                          High-speed counter checkout, multi-warehouse inventory, Wood/CFT volumetric pack, and fiscal tax compliance.
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          <span className="hover:text-[#0074d9] dark:hover:text-white transition-colors">· Live Simulator</span>
                          <span className="hover:text-[#0074d9] dark:hover:text-white transition-colors">· Wood CFT Pack</span>
                          <span className="hover:text-[#0074d9] dark:hover:text-white transition-colors">· Flexible Pricing</span>
                        </div>
                      </div>
                    </a>

                    {/* HRMS Card */}
                    <a
                      href="/hrms"
                      className="p-4 rounded-2xl bg-slate-50/80 hover:bg-violet-50/50 dark:bg-brand-dark-gray/30 dark:hover:bg-brand-dark-gray/60 border border-slate-200/80 dark:border-brand-teal/15 transition-all group/item flex items-start gap-4"
                    >
                      <div className="size-11 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-800 border border-indigo-500/40 flex items-center justify-center text-white shrink-0 shadow-sm shadow-indigo-500/25 group-hover/item:scale-105 transition-transform">
                        <RiTeamLine className="size-6 text-violet-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-indigo-600 dark:group-hover/item:text-violet-400 transition-colors font-sans">
                            Workforce HRMS & Payroll
                          </span>
                          <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300">
                            Enterprise
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed font-sans line-clamp-2">
                          Automated payroll ledger engine, biometric attendance, multi-office rosters, and configurable approval matrices.
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          <span className="hover:text-indigo-600 dark:hover:text-white transition-colors">· Auto Payroll</span>
                          <span className="hover:text-indigo-600 dark:hover:text-white transition-colors">· Approvals</span>
                          <span className="hover:text-indigo-600 dark:hover:text-white transition-colors">· Self-Service</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Right Column (Specialized Architectures) - 5 cols */}
                  <div className="md:col-span-5 flex flex-col gap-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Specialized Engineering
                    </div>

                    <a
                      href="/solutions/ai"
                      className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/40 border border-transparent hover:border-slate-200 dark:hover:border-brand-teal/20 transition-all flex items-start gap-3 group/sub"
                    >
                      <div className="size-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-brand-teal shrink-0 mt-0.5">
                        <RiBrainLine className="size-4.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/sub:text-[#0074d9] dark:group-hover/sub:text-brand-teal font-sans">
                          AI-Powered Automation
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug font-sans">
                          LLM agentic workflows, smart document parsing & reconciliation.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/solutions/concurrency"
                      className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/40 border border-transparent hover:border-slate-200 dark:hover:border-brand-teal/20 transition-all flex items-start gap-3 group/sub"
                    >
                      <div className="size-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-brand-cyan shrink-0 mt-0.5">
                        <RiFlashlightLine className="size-4.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/sub:text-[#0074d9] dark:group-hover/sub:text-brand-cyan font-sans">
                          High-Concurrency Systems
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug font-sans">
                          Distributed event-driven backends & microservices.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/solutions/compliance"
                      className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-brand-dark-gray/40 border border-transparent hover:border-slate-200 dark:hover:border-brand-teal/20 transition-all flex items-start gap-3 group/sub"
                    >
                      <div className="size-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <RiShieldCheckLine className="size-4.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/sub:text-[#0074d9] dark:group-hover/sub:text-emerald-400 font-sans">
                          Compliance & Auditing
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug font-sans">
                          Cryptographic audit trails & financial regulatory sync.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-brand-dark-gray/60 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                    Need legacy database migration (SQL Server, MS Access, Excel) to cloud?
                  </div>
                  <a
                    href="/#contact"
                    className="text-xs font-bold text-[#0074d9] dark:text-brand-teal hover:underline flex items-center gap-1 font-sans"
                  >
                    Consult Our Engineers <RiArrowRightUpLine className="size-3.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* Use Cases */}
            <a
              href="/#case-studies"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Testimonials */}
            <a
              href="/#testimonials"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* FAQ */}
            <a
              href="/#faq"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Contact */}
            <a
              href="/#contact"
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2 group font-sans"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Call to Action & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[#0074d9] to-cyan-500 hover:from-[#005bb5] hover:to-cyan-600 text-white text-xs font-semibold px-6 py-2.5 shadow-md shadow-[#0074d9]/20 hover:shadow-lg hover:shadow-[#0074d9]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-sans"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-300 dark:border-brand-dark-gray/60 bg-white/80 dark:bg-brand-dark-gray/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-brand-midnight/95 backdrop-blur-xl border-b border-slate-200 dark:border-brand-teal/20 px-4 py-6 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-3">
          {mobileNavLinks.map((link) => {
            if (link.items) {
              return (
                <div key={link.name} className="flex flex-col py-2 border-b border-slate-200 dark:border-brand-dark-gray/30">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2 font-sans">
                    {link.name}
                  </span>
                  <div className="flex flex-col gap-1 pl-4">
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0074d9] dark:hover:text-brand-teal transition-colors py-1.5 font-sans"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-[#0074d9] dark:hover:text-brand-teal transition-colors py-2 border-b border-slate-200 dark:border-brand-dark-gray/30 px-2 font-sans"
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 py-3 px-5 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#0074d9] to-cyan-500 hover:shadow-lg transition-all duration-300 font-sans cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
