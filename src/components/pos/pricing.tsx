"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { RiCheckboxCircleFill, RiArrowRightUpLine, RiSparklingLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Single Store Starter",
    desc: "For single-counter shops, mini-marts, boutique stores, and specialty retailers.",
    priceMonthly: 19,
    priceYearly: 15,
    features: [
      "1 Active Checkout Counter",
      "Up to 2,000 Product SKUs",
      "Barcode & Thermal Receipt Printing",
      "Offline Sale Queue & Local Cache",
      "Shift Float Declaration & Cash Count",
      "Standard Sales & Inventory Reports",
      "Email & Help Center Support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Multi-Branch Pro",
    desc: "For scaling retail chains, supermarkets, and multi-location commercial businesses.",
    priceMonthly: 49,
    priceYearly: 39,
    features: [
      "Up to 5 Branches & Counters",
      "Unlimited Product SKUs & Barcodes",
      "Multi-Warehouse Stock Transfers",
      "Customer Khata & Supplier Credit Ledgers",
      "Automated FBR Fiscal Tax & GST Invoices",
      "Granular Cashier Roles & Shift Z-Reports",
      "Priority WhatsApp & Phone Support",
    ],
    cta: "Book a Live Demo",
    highlight: true,
  },
  {
    name: "Enterprise & Wholesale",
    desc: "For large wholesale distributors, timber merchants (CFT pack), and enterprise franchises.",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    features: [
      "Unlimited Branches, Registers & Warehouses",
      "Specialized Wood & CFT Volumetric Pack",
      "Serialized Piece & Timber Log Tracking",
      "Super-Admin Multi-Tenant Company Portal",
      "Custom ERP & Double-Entry Accounting Sync",
      "Dedicated Implementation Engineer",
      "24/7 Priority SLA & Custom Modules",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export function POSPricing() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/10 border-y border-border relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 mb-4 inline-flex items-center gap-1.5">
            <RiSparklingLine className="size-3.5 text-blue-600 dark:text-blue-400" />
            Flexible Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Transparent Pricing Built for Growing Stores
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Select the plan that matches your current checkout lanes and inventory scale. Seamlessly upgrade as your footprint expands.
          </p>
        </div>

        {/* Monthly vs. Yearly Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="bg-muted/40 border border-border p-1.5 rounded-full inline-flex items-center gap-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "text-xs font-bold px-5 py-2 rounded-full transition-all cursor-pointer",
                billingCycle === "monthly"
                  ? "bg-card text-blue-600 dark:text-blue-400 shadow-xs border border-border"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "text-xs font-bold px-5 py-2 rounded-full transition-all relative cursor-pointer",
                billingCycle === "yearly"
                  ? "bg-card text-blue-600 dark:text-blue-400 shadow-xs border border-border"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly Billing
              <span className="ml-1.5 text-[9px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const isCustom = typeof plan.priceMonthly === "string";
            const price = billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={cn(
                  "p-8 rounded-3xl flex flex-col justify-between transition-all duration-200 relative",
                  plan.highlight
                    ? "bg-card border-2 border-blue-500 shadow-xl shadow-blue-500/10 lg:-translate-y-2 ring-1 ring-blue-500/20"
                    : "bg-card border border-border shadow-sm hover:shadow-md"
                )}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0074d9] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed min-h-[36px]">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-border">
                    {isCustom ? (
                      <span className="text-4xl font-extrabold text-foreground tracking-tight">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-extrabold text-foreground tracking-tight">
                          ${price}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          / month · billed {billingCycle}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      Included Capabilities
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 font-medium">
                        <RiCheckboxCircleFill
                          className={cn(
                            "size-4 shrink-0 mt-0.5",
                            plan.highlight ? "text-blue-600 dark:text-blue-400" : "text-emerald-500"
                          )}
                        />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className={cn(
                      "w-full inline-flex items-center justify-center gap-1.5 rounded-full py-3.5 px-6 text-sm font-bold transition-all text-center cursor-pointer",
                      plan.highlight
                        ? "bg-[#0074d9] hover:bg-[#005bb5] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                        : "border border-border bg-card hover:bg-muted text-foreground shadow-xs"
                    )}
                  >
                    <span>{plan.cta}</span>
                    <RiArrowRightUpLine className="size-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Callout Strip */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-foreground">Need FBR fiscal printer hardware certification or custom migration?</h4>
            <p className="text-xs text-muted-foreground mt-0.5">We migrate legacy POS databases (MS Access, SQL Server, Excel) with full data fidelity.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-bold text-[#0074d9] dark:text-[#4da3ff] hover:underline inline-flex items-center gap-1"
          >
            Request Data Migration Consult &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
