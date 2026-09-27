"use client";

import * as React from "react";
import { RiArrowDownSLine, RiQuestionLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Can it support multiple offices?",
    answer:
      "Yes. HRFlow natively supports multi-office structures. You can configure branch-specific holiday calendars, localized working hours, regional tax slabs, and distinct approval chains for each location while maintaining centralized global admin records.",
  },
  {
    question: "Can approval workflows be customized?",
    answer:
      "Absolutely. You can configure custom multi-level approval pathways for leave requests, expense claims, appraisal reviews, resignations, and NOC documents without writing code. Routes can be assigned dynamically based on department heads, roles, or request limits.",
  },
  {
    question: "Can payroll be integrated with accounting?",
    answer:
      "Yes. HRFlow connects HR processes with financial ledgers. You can map standard paycodes (base salaries, allowances, tax withholdings) directly to your general ledger Chart of Accounts. We export audit-ready entries compatible with major double-entry accounting tools.",
  },
  {
    question: "Does it support shift rotations?",
    answer:
      "Yes. The workforce management module supports complex schedules, rotating shift patterns, custom rosters, and shift swap requests. Shift calendars automatically sync with attendance logs to ensure accurate overtime calculations.",
  },
  {
    question: "Can employees access payslips online?",
    answer:
      "Yes. Employees get access to their personal Self-Service portal, where they can securely download historical payslips in PDF format, view real-time attendance logs, request leave, track advance loan repayments, and submit expense receipts.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-card relative">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-muted-foreground text-sm">
            Learn more about the capabilities, configuration options, and integrations of our HRMS platform.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-xl border transition-all duration-200",
                  isOpen ? "bg-muted/20 border-primary" : "bg-muted/5 border-border hover:bg-muted/15"
                )}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm text-foreground focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <RiQuestionLine className="size-4.5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <RiArrowDownSLine
                    className={cn("size-5 text-muted-foreground transition-transform duration-200", isOpen ? "rotate-180 text-primary" : "")}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[200px] opacity-100 border-t border-border/60" : "max-h-0 opacity-0 pointer-events-none"
                  )}
                >
                  <p className="p-5 text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
