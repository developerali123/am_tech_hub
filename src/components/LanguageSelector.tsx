"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  RiTranslate2,
  RiArrowDownSLine,
  RiCheckLine,
  RiSearchLine,
  RiCloseLine,
  RiRestartLine,
} from "@remixicon/react";
import {
  FlagUS,
  FlagSA,
  FlagES,
  FlagFR,
  FlagDE,
  FlagCN,
  FlagJA,
  FlagPK,
  FlagIN,
  FlagBR,
} from "./flags";
import {
  SUPPORTED_LANGUAGES,
  getSavedLanguage,
  setWebsiteLanguage,
} from "./GoogleTranslator";

interface LanguageItem {
  code: string;
  name: string;
  nativeName: string;
  region: string;
  dir: "ltr" | "rtl";
  Flag: React.ComponentType<{ className?: string }>;
}

const LANGUAGES: LanguageItem[] = [
  { code: "en", name: "English", nativeName: "English", region: "Global / US", dir: "ltr", Flag: FlagUS },
  { code: "ar", name: "Arabic", nativeName: "العربية", region: "Middle East & Gulf", dir: "rtl", Flag: FlagSA },
  { code: "es", name: "Spanish", nativeName: "Español", region: "Spain & LATAM", dir: "ltr", Flag: FlagES },
  { code: "fr", name: "French", nativeName: "Français", region: "France & Global", dir: "ltr", Flag: FlagFR },
  { code: "de", name: "German", nativeName: "Deutsch", region: "Germany & DACH", dir: "ltr", Flag: FlagDE },
  { code: "zh-CN", name: "Chinese (Simp.)", nativeName: "简体中文", region: "China & East Asia", dir: "ltr", Flag: FlagCN },
  { code: "ja", name: "Japanese", nativeName: "日本語", region: "Japan", dir: "ltr", Flag: FlagJA },
  { code: "ur", name: "Urdu", nativeName: "اردو", region: "Pakistan & South Asia", dir: "rtl", Flag: FlagPK },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", region: "India", dir: "ltr", Flag: FlagIN },
  { code: "pt", name: "Portuguese", nativeName: "Português", region: "Brazil & Portugal", dir: "ltr", Flag: FlagBR },
];

interface LanguageSelectorProps {
  variant?: "default" | "compact" | "mobile";
  className?: string;
}

export function LanguageSelector({ variant = "default", className = "" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCode, setActiveCode] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync active language from cookie/localStorage on mount and when changed
  useEffect(() => {
    setActiveCode(getSavedLanguage());

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: string }>;
      if (customEvent.detail?.lang) {
        setActiveCode(customEvent.detail.lang);
      }
    };

    window.addEventListener("am_lang_change", handleLangChange);
    return () => window.removeEventListener("am_lang_change", handleLangChange);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      // Focus search input after dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeLang = LANGUAGES.find((l) => l.code === activeCode) || LANGUAGES[0];
  const ActiveFlag = activeLang.Flag;

  const filteredLanguages = LANGUAGES.filter((l) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      l.name.toLowerCase().includes(q) ||
      l.nativeName.toLowerCase().includes(q) ||
      l.region.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  });

  const handleSelectLanguage = (code: string) => {
    setIsOpen(false);
    setSearchQuery("");
    setActiveCode(code);
    setWebsiteLanguage(code);
  };

  if (variant === "mobile") {
    return (
      <div className={`w-full notranslate ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100/80 dark:bg-brand-dark-gray/50 border border-slate-200 dark:border-brand-teal/20 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
          aria-expanded={isOpen}
          aria-label="Select website language"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-7 rounded-lg bg-white dark:bg-brand-midnight flex items-center justify-center shadow-xs border border-slate-200/60 dark:border-brand-teal/30">
              <ActiveFlag className="w-4 h-3 rounded-2xs" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-foreground">
                {activeLang.nativeName} <span className="text-muted-foreground font-normal">({activeLang.name})</span>
              </span>
              <span className="text-[10px] text-muted-foreground">{activeLang.region}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {activeLang.dir === "rtl" && (
              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                RTL
              </span>
            )}
            <RiArrowDownSLine
              className={`size-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {isOpen && (
          <div className="mt-2 p-2 rounded-2xl bg-white dark:bg-[#03141a] border border-slate-200 dark:border-brand-teal/25 shadow-xl max-h-72 overflow-y-auto space-y-1">
            {LANGUAGES.map((lang) => {
              const LangFlag = lang.Flag;
              const isSelected = lang.code === activeCode;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-[#0074d9]/10 dark:bg-brand-teal/15 text-[#0074d9] dark:text-brand-teal font-semibold"
                      : "hover:bg-slate-100 dark:hover:bg-brand-dark-gray/60 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <LangFlag className="w-5 h-3.5" />
                    <div>
                      <span className="text-xs font-bold">{lang.nativeName}</span>
                      <span className="text-[11px] text-slate-400 ml-1.5">({lang.name})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {lang.dir === "rtl" && (
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase">RTL</span>
                    )}
                    {isSelected && <RiCheckLine className="size-4 text-[#0074d9] dark:text-brand-teal" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative notranslate ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200/90 dark:border-brand-teal/25 bg-white/80 dark:bg-brand-midnight/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:border-[#0074d9]/60 dark:hover:border-brand-teal/60 hover:shadow-[0_0_15px_rgba(0,225,217,0.15)] transition-all duration-200 cursor-pointer shadow-xs"
        aria-expanded={isOpen}
        aria-label={`Select language, currently ${activeLang.name}`}
      >
        <div className="flex items-center gap-1.5">
          <RiTranslate2 className="size-3.5 text-[#0074d9] dark:text-brand-teal group-hover:rotate-12 transition-transform duration-300" />
          <ActiveFlag className="w-4 h-3 rounded-2xs" />
          <span className="text-xs font-bold tracking-tight uppercase">
            {activeLang.code === "zh-CN" ? "ZH" : activeLang.code}
          </span>
        </div>

        {activeLang.dir === "rtl" && (
          <span className="hidden xl:inline text-[9px] font-extrabold uppercase px-1 py-0.2 rounded bg-brand-teal/15 text-brand-teal border border-brand-teal/30">
            RTL
          </span>
        )}

        <RiArrowDownSLine
          className={`size-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2.5 w-[310px] rounded-2xl bg-white/95 dark:bg-[#03141a]/95 backdrop-blur-2xl border border-slate-200 dark:border-brand-teal/30 shadow-2xl z-50 overflow-hidden transform animate-in fade-in zoom-in-95 duration-150">
          {/* Header Banner */}
          <div className="p-3 border-b border-slate-200/80 dark:border-brand-dark-gray/70 bg-slate-50/70 dark:bg-brand-midnight/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-lg bg-[#0074d9]/10 dark:bg-brand-teal/15 flex items-center justify-center text-[#0074d9] dark:text-brand-teal">
                <RiTranslate2 className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Translate Website</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">10 Global Regions</span>
              </div>
            </div>

            {activeCode !== "en" && (
              <button
                type="button"
                onClick={() => handleSelectLanguage("en")}
                className="text-[10px] font-bold text-slate-500 hover:text-[#0074d9] dark:hover:text-brand-teal flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-brand-dark-gray"
                title="Reset to original English"
              >
                <RiRestartLine className="size-3" />
                <span>Original</span>
              </button>
            )}
          </div>

          {/* Quick Filter Search */}
          <div className="p-2 border-b border-slate-100 dark:border-brand-dark-gray/40">
            <div className="relative flex items-center">
              <RiSearchLine className="size-3.5 absolute left-2.5 text-slate-400 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language or country..."
                className="w-full text-xs pl-8 pr-7 py-1.5 rounded-xl bg-slate-100/80 dark:bg-brand-dark-gray/60 border border-transparent focus:border-[#0074d9]/50 dark:focus:border-brand-teal/50 focus:bg-white dark:focus:bg-brand-midnight outline-none text-slate-800 dark:text-slate-200 placeholder-slate-400 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <RiCloseLine className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Languages List */}
          <div className="max-h-[280px] overflow-y-auto p-1.5 space-y-0.5 divide-y divide-transparent scrollbar-thin">
            {filteredLanguages.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">No language found matching &ldquo;{searchQuery}&rdquo;</div>
            ) : (
              filteredLanguages.map((lang) => {
                const LangFlag = lang.Flag;
                const isSelected = lang.code === activeCode;

                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-all group ${
                      isSelected
                        ? "bg-gradient-to-r from-[#0074d9]/10 to-cyan-500/10 dark:from-brand-teal/20 dark:to-brand-cyan/10 border border-[#0074d9]/25 dark:border-brand-teal/30"
                        : "hover:bg-slate-100/90 dark:hover:bg-brand-dark-gray/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="shrink-0 transition-transform group-hover:scale-105">
                        <LangFlag className="w-5 h-3.5 shadow-xs" />
                      </div>
                      <div className="flex flex-col min-w-0 leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-xs font-bold truncate ${
                              isSelected
                                ? "text-[#0074d9] dark:text-brand-teal"
                                : "text-slate-900 dark:text-slate-100 group-hover:text-[#0074d9] dark:group-hover:text-brand-teal"
                            }`}
                          >
                            {lang.nativeName}
                          </span>
                          {lang.dir === "rtl" && (
                            <span className="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                              RTL
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {lang.name} · {lang.region}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center pl-2 shrink-0">
                      {isSelected ? (
                        <div className="size-5 rounded-full bg-[#0074d9] dark:bg-brand-teal flex items-center justify-center text-white dark:text-brand-midnight shadow-xs">
                          <RiCheckLine className="size-3.5 stroke-[2.5]" />
                        </div>
                      ) : (
                        <span className="text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Select
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Status Bar */}
          <div className="px-3 py-2 border-t border-slate-100 dark:border-brand-dark-gray/50 bg-slate-50/50 dark:bg-brand-midnight/40 flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span>Real-time instant translation</span>
            <span className="font-semibold text-[#0074d9] dark:text-brand-cyan">AM Tech Hub Global</span>
          </div>
        </div>
      )}
    </div>
  );
}
