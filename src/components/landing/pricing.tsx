"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    desc: "For growing organizations establishing standard HR foundations.",
    priceMonthly: 4,
    priceYearly: 3.2,
    features: [
      "Up to 50 Employees",
      "Standard Profile Management",
      "Basic Attendance Tracking",
      "Standard Leave Requests",
      "Automated Payroll Calculations",
      "Digital Payslips PDF",
      "Email Customer Support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    desc: "For scaling teams that require custom approval pathways & multi-office rosters.",
    priceMonthly: 8,
    priceYearly: 6.4,
    features: [
      "Up to 500 Employees",
      "Everything in Starter",
      "Configurable Multi-Level Approvals",
      "Rotating Shift Patterns & swaps",
      "Expense Reimbursements",
      "Implementation Assistance",
      "Priority Email & Chat Support",
    ],
    cta: "Request Demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "For large institutions seeking full double-entry ledger integration and dedicated support.",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    features: [
      "Unlimited Employees & Offices",
      "Everything in Professional",
      "Custom Modules Built-to-order",
      "Accounting & Chart of Accounts Sync",
      "Dedicated Implementation Engineer",
      "SLA Support via Slack & Phone",
      "Dedicated Customer Success",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/10 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
            Flexible Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Transparent Pricing Built for Growing Orgs
          </h2>
          <p className="text-muted-foreground text-sm">
            Select the plan that fits your current operational needs. Upgrade as you scale.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "text-xs font-bold px-4 py-2 rounded-full transition-all border",
              billingCycle === "monthly"
                ? "bg-card border-primary text-primary shadow-sm"
                : "bg-transparent border-transparent text-muted-foreground"
            )}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={cn(
              "text-xs font-bold px-4 py-2 rounded-full transition-all border relative",
              billingCycle === "yearly"
                ? "bg-card border-primary text-primary shadow-sm"
                : "bg-transparent border-transparent text-muted-foreground"
            )}
          >
            Yearly Billing
            <span className="absolute -top-3.5 -right-6 text-[8px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider scale-95 shadow-sm">
              -20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => {
            const isCustom = plan.priceMonthly === "Custom";
            const currentPrice =
              billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border bg-card p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative",
                  plan.highlight
                    ? "border-primary shadow-xl ring-1 ring-primary scale-[1.02] md:scale-[1.04]"
                    : "border-border/80 shadow-sm hover:shadow-md"
                )}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-extrabold text-lg text-foreground mb-1">{plan.name}</h3>
                  <p className="text-[11px] text-muted-foreground leading-normal mb-6 min-h-[36px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8 border-b border-border/80 pb-6">
                    {isCustom ? (
                      <span className="text-3xl font-extrabold tracking-tight text-foreground">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-extrabold tracking-tight text-foreground">
                          ${currentPrice}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-semibold">/employee/month</span>
                      </>
                    )}
                  </div>

                  {/* Features checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                        <RiCheckboxCircleFill className="size-4.5 text-primary shrink-0 mt-0.5 opacity-90" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.highlight ? "default" : "outline"}
                  className="w-full rounded-full py-5 font-semibold text-xs mt-auto"
                  asChild
                >
                  <a href="#cta">{plan.cta}</a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
