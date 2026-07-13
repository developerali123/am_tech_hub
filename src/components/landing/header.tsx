"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RiSunLine, RiMoonLine, RiMenuLine, RiCloseLine, RiFlashlightLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Before & After", href: "#problem-solution" },
  { label: "Approvals", href: "#approvals" },
  { label: "Payroll", href: "#payroll" },
  { label: "Self-Service", href: "#self-service" },
  { label: "Reports", href: "#reports" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header({ onOpenDemo }: { onOpenDemo: () => void }) {
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
          ? "bg-background/80 backdrop-blur-md border-border/80 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
          <div className="size-9 rounded-xl bg-gradient-to-tr from-primary to-violet-400 flex items-center justify-center text-white shadow-md shadow-primary/20">
            <RiFlashlightLine className="size-5" />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            HR<span className="text-primary font-extrabold">Flow</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <RiSunLine className="size-5 animate-pulse" />
            ) : (
              <RiMoonLine className="size-5" />
            )}
          </Button>

          <Button variant="default" size="sm" onClick={onOpenDemo} className="rounded-full shadow-md shadow-primary/10">
            Start Free Demo
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex xl:hidden items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <RiSunLine className="size-5" />
            ) : (
              <RiMoonLine className="size-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="size-6" /> : <RiMenuLine className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 top-[60px] z-40 w-full bg-background border-t border-border flex flex-col p-6 transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-4 mb-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/85 hover:text-primary transition-all py-1 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-auto">
          <Button variant="default" className="w-full rounded-full py-6 shadow-md shadow-primary/10" onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}>
            Start Free Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
