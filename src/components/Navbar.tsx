"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
        { name: "SaaS Product Ecosystem", href: "/#saas" },
        { name: "AI Agentic Automations", href: "/#ai" },
        { name: "Custom Full-Stack Engineering", href: "/#dev" },
        { name: "Cloud & DevOps Architecture", href: "/#devops" },
      ],
    },
    {
      name: "Solutions",
      items: [
        { name: "Workforce HRMS & Payroll", href: "/hrms" },
        { name: "AI-Powered Automation", href: "/#ai" },
        { name: "High-Concurrency Systems", href: "/#dev" },
        { name: "Compliance & Auditing", href: "/#faq" },
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
          ? "bg-brand-midnight border-b border-brand-teal/20 py-3 shadow-lg shadow-brand-midnight/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
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
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                AM Tech <span className="text-brand-teal">Hub</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-1 group-hover:text-brand-teal transition-colors font-sans">
                Enterprise Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Home */}
            <a
              href="/#"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* About */}
            <a
              href="/#about"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer">
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-[#061d23] border border-brand-teal/25 p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="flex flex-col gap-1">
                  <a
                    href="/#saas"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      SaaS Product Ecosystem
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      Enterprise HRMS & Payroll Suite
                    </span>
                  </a>
                  <a
                    href="/#ai"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      AI Agentic Automations
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      Intelligent Workflows & LLM Audits
                    </span>
                  </a>
                  <a
                    href="/#dev"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      Custom Full-Stack Engineering
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      High-Concurrency APIs & Streams
                    </span>
                  </a>
                  <a
                    href="/#devops"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      Cloud & DevOps Architecture
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      SOC2/GDPR Compliant CI/CD Pipelines
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer">
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-[#061d23] border border-brand-teal/25 p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="flex flex-col gap-1">
                  <a
                    href="/hrms"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      Workforce HRMS & Payroll
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      Fully integrated compliance solutions
                    </span>
                  </a>
                  <a
                    href="/#ai"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      AI-Powered Automation
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      Smart auditing & data reconciliation
                    </span>
                  </a>
                  <a
                    href="/#dev"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      High-Concurrency Systems
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      Scale handling millions of active sessions
                    </span>
                  </a>
                  <a
                    href="/#faq"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-brand-dark-gray/50 transition-colors group/item"
                  >
                    <span className="text-xs font-bold text-white group-hover/item:text-brand-teal transition-colors font-sans">
                      Compliance & Auditing
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-sans">
                      SOC2 frameworks & GDPR pipelines
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <a
              href="/#case-studies"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Testimonials */}
            <a
              href="/#testimonials"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* FAQ */}
            <a
              href="/#faq"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Contact */}
            <a
              href="/#contact"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-brand-teal to-brand-cyan hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-brand-teal/50 shadow-lg shadow-brand-teal/15 hover:shadow-brand-teal/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-brand-midnight rounded-full group-hover:bg-transparent font-sans">
                Book Demo
              </span>
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-dark-gray/50 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-b border-brand-teal/10 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-5 bg-brand-midnight flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          {mobileNavLinks.map((link) => {
            if (link.items) {
              return (
                <div key={link.name} className="flex flex-col gap-1.5 py-1 border-b border-brand-dark-gray/30">
                  <span className="text-[10px] font-bold text-brand-teal uppercase tracking-wider px-2 font-sans">
                    {link.name}
                  </span>
                  <div className="flex flex-col gap-1 pl-4">
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-slate-300 hover:text-brand-teal transition-colors py-1.5 font-sans"
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
                className="text-base font-medium text-slate-300 hover:text-brand-teal transition-colors py-2 border-b border-brand-dark-gray/30 px-2 font-sans"
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 py-3 px-5 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 font-sans"
          >
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
}
