"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__reachEmbed?.init) {
      (window as any).__reachEmbed.init();
    }
  }, []);

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "SaaS Products", href: "/services/saas" },
        { name: "AI Automations", href: "/services/ai" },
        { name: "Custom Dev", href: "/services/dev" },
        { name: "Cloud & DevOps", href: "/services/devops" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Commercial POS", href: "/pos" },
        { name: "Enterprise HRMS", href: "/hrms" },
        { name: "Automated Payroll", href: "/hrms#payroll" },
        { name: "FBR Fiscal Invoicing", href: "/pos#deep-features" },
        { name: "Wood Trading (CFT)", href: "/pos#industry-packs" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Careers", href: "/careers" },
        { name: "Technical Blog", href: "/blog" },
        { name: "Contact Hub", href: "/#contact" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-brand-dark-gray/50 bg-slate-50 dark:bg-[#001115] pt-20 pb-10 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-teal/5 dark:bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-slate-200 dark:border-brand-dark-gray/30">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-3 group focus:outline-none">
              <Image
                src="/am_tech_hub_logo.png"
                alt="AM Tech Hub Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain transform transition-transform duration-500 group-hover:rotate-12"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                AM Tech <span className="text-brand-teal">Hub</span>
              </span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance enterprise applications, Commercial POS retail platforms, automated Payroll & HRMS SaaS suites, and high-concurrency custom architectures.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/am-tech-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-brand-dark-gray bg-white dark:bg-brand-midnight/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-teal hover:border-brand-teal/40 transition-colors shadow-xs"
                aria-label="LinkedIn"
                title="Follow AM Tech Hub on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-200">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-teal transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hostinger Reach Subscribe Form Section */}
        <div className="py-12 border-b border-slate-200 dark:border-brand-dark-gray/30">
          <div className="max-w-xl mx-auto">
            <div className="rounded-2xl p-3 sm:p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-brand-teal/20 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors">
              <div className="reach-form-wrapper w-full min-h-[120px] flex justify-center items-center">
                <div data-reach-form="0a86ec15-06bb-4374-bf4c-9bb42efd50cd" className="w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} AM Tech Hub. All rights reserved.
            </div>
            <a
              href="https://websitelaunches.com/site/amtechhub.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-transform duration-200 hover:scale-105"
              title="Established online - Public launch record"
            >
              {/* Light mode: Deep slate dark badge for bold, crisp contrast on light surfaces */}
              <img
                src="https://websitelaunches.com/badge/amtechhub.online.svg?theme=dark"
                alt="Established online - Public launch record"
                width={255}
                height={55}
                className="h-[44px] w-auto object-contain dark:hidden rounded-lg shadow-sm border border-slate-300/80 hover:border-slate-400 transition-colors"
              />
              {/* Dark mode: Crisp light badge for high contrast on dark backgrounds */}
              <img
                src="https://websitelaunches.com/badge/amtechhub.online.svg"
                alt="Established online - Public launch record"
                width={255}
                height={55}
                className="h-[44px] w-auto object-contain hidden dark:block rounded-lg shadow-sm"
              />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-brand-teal transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-brand-teal transition-colors">
              Terms of Service
            </a>
            <a href="/security" className="hover:text-brand-teal transition-colors">
              Security Compliance
            </a>
          </div>
        </div>
      </div>

      {/* Hostinger Reach Form Embed Script */}
      <Script
        src="https://cdn-reach.hostinger.com/js/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).__reachEmbed?.init) {
            (window as any).__reachEmbed.init();
          }
        }}
      />
    </footer>
  );
}
