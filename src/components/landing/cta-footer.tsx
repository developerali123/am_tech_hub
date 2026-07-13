"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  RiFlashlightLine,
  RiArrowRightUpLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowUpLine,
} from "@remixicon/react";

export function CtaFooter() {
  const [demoState, setDemoState] = React.useState<"idle" | "success">("idle");
  const [emailInput, setEmailInput] = React.useState("");
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() !== "") {
      setDemoState("success");
    }
  };

  return (
    <footer id="cta" className="relative overflow-hidden bg-muted/30 border-t border-border">
      {/* Scroll to top floating button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 border border-primary/20 cursor-pointer"
          aria-label="Scroll to top"
        >
          <RiArrowUpLine className="size-5" />
        </button>
      )}



      {/* 2. Directory Navigation Footer */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 text-xs text-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo & Brand description */}
          <div className="md:col-span-4 space-y-4">
            <a href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
              <div className="size-8 rounded-lg bg-gradient-to-tr from-primary to-violet-400 flex items-center justify-center text-white">
                <RiFlashlightLine className="size-4.5" />
              </div>
              <span>HR<span className="text-primary">Flow</span></span>
            </a>
            <p className="leading-relaxed font-medium">
              HRMS & Payroll software designed to automate shift scheduling, tax compliant payouts, leave balance ledgers, and double-entry journals.
            </p>
          </div>

          {/* Links col 1 */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-bold text-foreground uppercase tracking-wider text-[10px]">Platform</h5>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-foreground">Features Showcase</a></li>
              <li><a href="#approvals" className="hover:text-foreground">Workflows Builder</a></li>
              <li><a href="#payroll" className="hover:text-foreground">Payroll Engine</a></li>
              <li><a href="#self-service" className="hover:text-foreground">Self-Service Portal</a></li>
            </ul>
          </div>

          {/* Links col 2 */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-bold text-foreground uppercase tracking-wider text-[10px]">Company</h5>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-foreground">Pricing Tier List</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQs Accordion</a></li>
              <li><a href="#" className="hover:text-foreground">Security Standards</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Contacts col 3 */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-foreground uppercase tracking-wider text-[10px]">Get in Touch</h5>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <RiMailLine className="size-4 text-primary shrink-0" />
                <a href="mailto:muhammadalimirza90@gmail.com" className="hover:text-foreground">muhammadalimirza90@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <RiPhoneLine className="size-4 text-primary shrink-0" />
                <a href="tel:+923170068650" className="hover:text-foreground">+923170068650</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border/40 mb-6" />

        {/* Copy lines */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground/80">
          <span>&copy; 2026 HRFlow Systems Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Cookie Preference</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

