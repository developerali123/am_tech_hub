"use client";

import React, { useEffect } from "react";

// Safe Window type definition
interface GoogleTranslateInstance {
  new (
    options: {
      pageLanguage: string;
      includedLanguages: string;
      autoDisplay: boolean;
      layout?: number;
    },
    elementId: string
  ): void;
}

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateInstance;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", region: "Global / US", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", region: "Middle East & Gulf", dir: "rtl" },
  { code: "es", name: "Spanish", nativeName: "Español", region: "Spain & LATAM", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", region: "France & Global", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", region: "Germany & DACH", dir: "ltr" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", region: "China & East Asia", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", region: "Japan", dir: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", region: "Pakistan & South Asia", dir: "rtl" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", region: "India", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", region: "Brazil & Portugal", dir: "ltr" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

export function getSavedLanguage(): string {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("am_tech_lang");
    if (saved) return saved;

    const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (cookieMatch && cookieMatch[1]) {
      return cookieMatch[1];
    }
  } catch {
    // Ignore storage errors
  }
  return "en";
}

export function setWebsiteLanguage(langCode: string) {
  if (typeof window === "undefined") return;

  const isRtl = langCode === "ar" || langCode === "ur";
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = langCode;

  try {
    localStorage.setItem("am_tech_lang", langCode);
  } catch {
    // Ignore storage errors
  }

  const hostname = window.location.hostname;
  const cookiePath = "path=/;";

  const clearCookie = (name: string) => {
    const past = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = `${name}=; ${past} ${cookiePath}`;
    document.cookie = `${name}=; ${past} ${cookiePath} domain=${hostname};`;
    if (hostname.includes(".") && !/^[0-9.]+$/.test(hostname)) {
      const parts = hostname.split(".");
      const topDomain = "." + parts.slice(-2).join(".");
      document.cookie = `${name}=; ${past} ${cookiePath} domain=${topDomain};`;
    }
  };

  if (langCode === "en") {
    clearCookie("googtrans");
    document.cookie = `googtrans=/en/en; ${cookiePath}`;
    document.cookie = `googtrans=/en/en; ${cookiePath} domain=${hostname};`;

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }

    // Quick reload ensures 100% clean restoration to original English
    setTimeout(() => {
      window.location.reload();
    }, 150);
  } else {
    const val = `/en/${langCode}`;
    document.cookie = `googtrans=${val}; ${cookiePath}`;
    document.cookie = `googtrans=${val}; ${cookiePath} domain=${hostname};`;

    if (hostname.includes(".") && !/^[0-9.]+$/.test(hostname)) {
      const parts = hostname.split(".");
      const topDomain = "." + parts.slice(-2).join(".");
      document.cookie = `googtrans=${val}; ${cookiePath} domain=${topDomain};`;
    }

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      // If widget is not initialized yet, reload allows Google Translate to read the cookie
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  }

  window.dispatchEvent(new CustomEvent("am_lang_change", { detail: { lang: langCode } }));
}

export function GoogleTranslator() {
  useEffect(() => {
    // 1. Prevent React 19 DOM reconciliation errors when Google Translate wraps text with <font> tags
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function <T extends Node>(child: T): T {
        if (child.parentNode !== this) {
          return child;
        }
        return originalRemoveChild.call(this, child) as T;
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function <T extends Node>(
        newNode: T,
        referenceNode: Node | null
      ): T {
        if (referenceNode && referenceNode.parentNode !== this) {
          return newNode;
        }
        return originalInsertBefore.call(this, newNode, referenceNode) as T;
      };
    }

    // 2. Synchronize RTL and active language attribute immediately
    const currentLang = getSavedLanguage();
    const isRtl = currentLang === "ar" || currentLang === "ur";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;

    // 3. Google Translate callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,es,fr,de,zh-CN,ja,ur,hi,pt",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // 4. Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden notranslate"
      style={{ display: "none", visibility: "hidden" }}
      aria-hidden="true"
    />
  );
}
