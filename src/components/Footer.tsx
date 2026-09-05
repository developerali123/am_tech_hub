"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

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
    <footer className="relative border-t border-brand-dark-gray/50 bg-[#001115] pt-20 pb-10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-brand-dark-gray/30">
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
              <span className="text-lg font-bold tracking-tight text-white">
                AM Tech <span className="text-brand-teal">Hub</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance enterprise applications, Commercial POS retail platforms, automated Payroll & HRMS SaaS suites, and high-concurrency custom architectures.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-dark-gray bg-brand-midnight/50 flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-dark-gray bg-brand-midnight/50 flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-dark-gray bg-brand-midnight/50 flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-200">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-brand-teal transition-colors"
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

        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-brand-dark-gray/30">
          <div>
            <h3 className="text-base font-semibold text-slate-200 mb-2">
              Subscribe to our engineering newsletter
            </h3>
            <p className="text-sm text-slate-400">
              Get modular architecture tips, SaaS product updates, and DevOps news.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow max-w-md px-4 py-2.5 rounded-full border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/35"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-brand-teal hover:bg-brand-cyan text-brand-midnight text-sm font-semibold hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-brand-teal mt-2 animate-pulse">
                ✓ Thanks for subscribing to AM Tech Hub Engineering insights!
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AM Tech Hub. All rights reserved.
          </div>
          <div className="flex gap-6">
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
    </footer>
  );
}
