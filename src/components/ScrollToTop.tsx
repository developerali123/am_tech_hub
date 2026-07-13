"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-midnight shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-teal/50 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5 font-bold"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
