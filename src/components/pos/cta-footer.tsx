"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  RiStore2Line,
  RiArrowRightUpLine,
  RiMailLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiBuildingLine,
} from "@remixicon/react";

interface POSCtaFooterProps {
  onOpenDemo: () => void;
}

export function POSCtaFooter({ onOpenDemo }: POSCtaFooterProps) {
  return (
    <footer className="bg-[#000d1a] text-white border-t border-white/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#0074d9]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10 border-b border-white/10">
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-[#001b38] via-[#00284d] to-[#00172e] border border-[#0074d9]/40 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 text-xs font-bold text-emerald-300 mb-5">
            <span>Free Guided Onboarding & Data Seeding</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            See Commercial POS on your actual workflow
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            We will seed a private sandbox company with your sample products, branches, and staff accounts so your team can test real checkout in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full py-6 px-9 text-sm md:text-base font-bold bg-[#0074d9] hover:bg-[#005bb5] text-white shadow-xl shadow-[#0074d9]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              onClick={onOpenDemo}
            >
              Request Seeded Demo <RiArrowRightUpLine className="size-4 ml-1.5" />
            </Button>

            <a
              href="https://wa.me/?text=Hello%20AM%20Tech%20Hub,%20I%20would%20like%20a%20demo%20of%20Commercial%20POS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-8 text-sm md:text-base font-semibold border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all"
            >
              <RiWhatsappLine className="size-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-[#0074d9] flex items-center justify-center text-white">
                <RiStore2Line className="size-4 text-white" />
              </div>
              <span className="text-base font-extrabold text-white">
                Commercial <span className="text-[#4da3ff]">POS</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A flagship enterprise engineering product by AM Tech Hub. Point of sale for retail and wholesale operations—sales, inventory, purchases, and FBR-ready invoicing in one system.
            </p>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="mailto:info@amtechhub.com" className="hover:text-white flex items-center gap-1.5">
                <RiMailLine className="size-3.5 text-[#4da3ff]" /> info@amtechhub.com
              </a>
              <span className="text-slate-600">|</span>
              <a href="/hrms" className="hover:text-white text-[11px] text-slate-400 hover:text-[#4da3ff]">
                Looking for HRMS? Click here
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Product Modules</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#simulator" className="hover:text-white transition-colors">Fast POS Terminal</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Inventory & Transfers</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Cash Shifts & Z-Reports</a></li>
              <li><a href="#industry-packs" className="hover:text-white transition-colors">Wood Trading CFT Pack</a></li>
              <li><a href="#deep-features" className="hover:text-white transition-colors">FBR Fiscal Integration</a></li>
            </ul>
          </div>

          {/* Legal / Hub */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">AM Tech Hub Ecosystem</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-white transition-colors">AM Tech Hub Main Site</a></li>
              <li><a href="/hrms" className="hover:text-white transition-colors">Enterprise HRMS Platform</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/security" className="hover:text-white transition-colors">Security Architecture</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AM Tech Hub. Commercial POS is a trademark of AM Tech Hub.
          </div>
          <div className="flex items-center gap-6">
            <span>Pakistan Market Ready (PKR & GST)</span>
            <span>Multi-Branch Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
