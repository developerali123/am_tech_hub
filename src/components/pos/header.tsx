"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  RiSunLine,
  RiMoonLine,
  RiMenuLine,
  RiCloseLine,
  RiStore2Line,
  RiArrowLeftLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Pillars", href: "#pillars" },
  { label: "Live Simulator", href: "#simulator" },
  { label: "Industry Packs", href: "#industry-packs" },
  { label: "Roles & RBAC", href: "#roles" },
  { label: "Deep Features", href: "#deep-features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function POSHeader() {
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-[#001428]/95 dark:bg-[#040e1c]/95 backdrop-blur-md border-[#0074d9]/25 py-3 shadow-xl shadow-black/20"
          : "bg-[#001f3f]/90 dark:bg-[#00152b]/90 backdrop-blur-sm border-white/10 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="/pos" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white group">
            <div className="size-9 rounded-xl bg-gradient-to-br from-[#0074d9] to-[#001f3f] border border-[#0074d9]/40 flex items-center justify-center text-white shadow-md shadow-[#0074d9]/25 group-hover:scale-105 transition-transform">
              <RiStore2Line className="size-5 text-[#4da3ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-white leading-tight">
                Commercial <span className="text-[#0074d9] dark:text-[#4da3ff]">POS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none">
                Counter to Compliance
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <RiSunLine className="size-4 text-amber-400" />
            ) : (
              <RiMoonLine className="size-4 text-blue-300" />
            )}
          </Button>

          <a
            href="#contact"
            className="rounded-full bg-[#0074d9] hover:bg-[#005bb5] text-white text-xs font-semibold px-5 py-2 shadow-lg shadow-[#0074d9]/25 transition-all hover:scale-105 inline-flex items-center"
          >
            Request POS Demo <RiArrowRightUpLine className="size-3.5 ml-1" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-slate-300 hover:text-white"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <RiSunLine className="size-4 text-amber-400" />
            ) : (
              <RiMoonLine className="size-4 text-blue-300" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="size-5" /> : <RiMenuLine className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[65px] z-40 w-full bg-[#001428] border-t border-white/10 flex flex-col p-6 transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-3 mb-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#4da3ff] py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-auto">
          <a
            href="#contact"
            className="w-full rounded-full py-4 bg-[#0074d9] hover:bg-[#005bb5] text-white font-semibold text-center block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request POS Demo
          </a>
        </div>
      </div>
    </header>
  );
}
