"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div
        className={`size-9 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-100/60 dark:bg-slate-800/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`size-9 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0074d9]/50 ${className}`}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <RiSunLine className="size-4.5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <RiMoonLine className="size-4.5 text-sky-500 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

export default ThemeToggle;
