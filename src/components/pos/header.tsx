"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  RiSunLine,
  RiMoonLine,
  RiMenuLine,
  RiCloseLine,
  RiStore2Line,
  RiArrowRightUpLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Pillars", href: "#pillars" },
  { label: "Simulator", href: "#simulator" },
  { label: "Industry Packs", href: "#industry-packs" },
  { label: "Roles", href: "#roles" },
  { label: "Features", href: "#deep-features" },
  { label: "Customer Success", href: "#customer-success" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function POSHeader({ onOpenDemo }: { onOpenDemo?: () => void } = {}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-xs"
          : "bg-background/80 backdrop-blur-sm border-border/40 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="/pos" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-foreground group">
            <div className="size-9 rounded-xl bg-gradient-to-br from-[#0074d9] to-blue-900 border border-[#0074d9]/40 flex items-center justify-center text-white shadow-md shadow-[#0074d9]/25 group-hover:scale-105 transition-transform">
              <RiStore2Line className="size-5 text-blue-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-foreground leading-tight">
                Commercial <span className="text-blue-600 dark:text-blue-400">POS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold leading-none">
                Counter to Compliance
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-2.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={handleDemoClick}
            className="rounded-full bg-[#0074d9] hover:bg-[#005bb5] text-white text-xs font-semibold px-5 py-2 shadow-md shadow-[#0074d9]/25 transition-all hover:scale-105 inline-flex items-center cursor-pointer"
          >
            Request Demo <RiArrowRightUpLine className="size-3.5 ml-1" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex xl:hidden items-center gap-2">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="size-5" /> : <RiMenuLine className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 top-[65px] z-40 w-full bg-background border-t border-border flex flex-col p-6 transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-2.5 mb-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-auto">
          <a
            href="#contact"
            className="w-full rounded-full py-3.5 bg-[#0074d9] hover:bg-[#005bb5] text-white font-semibold text-center block text-sm shadow-md shadow-[#0074d9]/20 cursor-pointer"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleDemoClick(e);
            }}
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
