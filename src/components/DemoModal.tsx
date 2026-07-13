"use client";

import React, { useState } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [service, setService] = useState("saas");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompanySize("");
    setService("saas");
    setMessage("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-brand-midnight-dark/80 backdrop-blur-md cursor-pointer transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-[#061d23] to-[#010e12] border border-brand-teal/30 shadow-2xl p-8 overflow-hidden z-10 transition-all duration-300 transform scale-100">
        
        {/* Decorative ambient background light */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          /* Demo Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-extrabold text-white font-sans">
                Book a Demo
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                Speak directly with an enterprise architect to outline your SaaS payroll pipeline or custom microservices requirement.
              </p>
            </div>

            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-name" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                Full Name
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alexander Mercer"
                className="w-full px-4 py-3 rounded-xl border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-email" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                Work Email
              </label>
              <input
                id="modal-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alex@company.com"
                className="w-full px-4 py-3 rounded-xl border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
              />
            </div>

            {/* Company Size & Service Interest (Row) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-size" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                  Company Size
                </label>
                <select
                  id="modal-size"
                  required
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors cursor-pointer"
                >
                  <option value="" disabled className="bg-brand-midnight text-slate-500">Select headcount</option>
                  <option value="10-50" className="bg-brand-midnight">10 - 50 employees</option>
                  <option value="50-250" className="bg-brand-midnight">50 - 250 employees</option>
                  <option value="250-1000" className="bg-brand-midnight">250 - 1,000 employees</option>
                  <option value="1000+" className="bg-brand-midnight">1,000+ employees</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-interest" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                  Core Track Interest
                </label>
                <select
                  id="modal-interest"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors cursor-pointer"
                >
                  <option value="saas" className="bg-brand-midnight">SaaS Products (HRMS/Payroll)</option>
                  <option value="custom" className="bg-brand-midnight">Custom Engineering</option>
                  <option value="devops" className="bg-brand-midnight">Cloud Infrastructure</option>
                </select>
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-msg" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                Project Details
              </label>
              <textarea
                id="modal-msg"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your current engineering challenge..."
                className="w-full px-4 py-3 rounded-xl border border-brand-dark-gray bg-brand-midnight text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-sm font-bold text-brand-midnight rounded-xl bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-brand-midnight" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Initializing Secure Connection...
                </div>
              ) : (
                "Book Architecture Session"
              )}
            </button>
          </form>
        ) : (
          /* Success Screen */
          <div className="flex flex-col items-center text-center gap-6 py-10">
            {/* Animated Check Circle */}
            <div className="w-20 h-20 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-brand-teal animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black text-white font-sans">
                Connection Established!
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
                Thank you, <span className="text-brand-teal font-semibold">{name}</span>. An engineering account executive has been matched to your profile. We will email scheduling options to <span className="text-brand-cyan font-semibold">{email}</span> within the next hour.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 text-xs font-bold text-white border border-slate-700 bg-brand-dark-gray/30 hover:border-brand-teal/40 rounded-full transition-colors cursor-pointer"
            >
              Return to Landing Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
