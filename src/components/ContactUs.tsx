"use client";

import React, { useState } from "react";

interface ContactUsProps {
  isHRMS?: boolean;
}

export default function ContactUs({ isHRMS = false }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: isHRMS ? "SaaS Platform Integration" : "Custom Dev",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        projectType: isHRMS ? "SaaS Platform Integration" : "Custom Dev",
        message: "",
      });
    }, 1200);
  };

  // Theme styles based on page source
  const badgeBorder = isHRMS ? "border-primary/20 bg-primary/5 text-primary" : "border-brand-teal/20 bg-brand-dark-gray/60 text-brand-teal";
  const badgeText = isHRMS ? "text-primary" : "text-brand-teal";
  const gradientTitle = isHRMS 
    ? "bg-gradient-to-r from-primary via-violet-500 to-indigo-600 bg-clip-text text-transparent" 
    : "bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent";
  
  const iconWrapper = isHRMS 
    ? "bg-primary/10 border-primary/20 text-primary" 
    : "bg-brand-teal/10 border-brand-teal/20 text-brand-teal";
  
  const inputFocus = isHRMS 
    ? "focus:border-primary/50 focus:ring-1 focus:ring-primary/50" 
    : "focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50";
  
  const submitButton = isHRMS 
    ? "bg-gradient-to-br from-primary to-violet-600 shadow-primary/15 hover:shadow-primary/30 focus:ring-primary/50" 
    : "bg-gradient-to-br from-brand-teal to-brand-cyan shadow-brand-teal/15 hover:shadow-brand-teal/30 focus:ring-brand-teal/50";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/10 border-t border-border/40 bg-grid-pattern">
      {/* Visual background accents */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 ${isHRMS ? 'bg-primary/5' : 'bg-brand-cyan/5'} rounded-full blur-[110px] pointer-events-none`}></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md mb-4 ${badgeBorder}`}>
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Connect With Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Start Your Custom <br />
            <span className={gradientTitle}>
              Engineering Initiative
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed font-sans text-sm md:text-base">
            Have a custom HRMS/Payroll product project or need low-latency backend systems? Our engineers are ready to build compliance-ready infrastructure tailored to your specs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between h-full relative overflow-hidden shadow-sm">
              <div className={`absolute top-0 right-0 w-32 h-32 ${isHRMS ? 'bg-primary/5' : 'bg-brand-teal/5'} rounded-full blur-[50px] pointer-events-none`}></div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-sans">Direct Partner Communication</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Skip the sales agents and sync directly with our systems engineering team.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconWrapper}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Engineering Mail</div>
                      <a href="mailto:muhammadalimirza90@gmail.com" className={`text-sm font-semibold text-foreground hover:${badgeText} transition-colors`}>
                        muhammadalimirza90@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Support */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconWrapper}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Phone Support</div>
                      <a href="tel:+923170068650" className={`text-sm font-semibold text-foreground hover:${badgeText} transition-colors`}>
                        +923170068650
                      </a>
                    </div>
                  </div>

                  {/* SLA Response */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconWrapper}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Support SLA</div>
                      <span className="text-sm font-semibold text-foreground">
                        &lt; 15 Minute Critical Account Response
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Banner Note */}
              <div className="mt-10 p-4 rounded-2xl bg-muted/30 border border-border text-[11px] text-muted-foreground leading-relaxed flex gap-2">
                <svg className={`w-5 h-5 ${badgeText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>
                  All engineering requests are encrypted end-to-end. We route project briefs under strict confidentiality matrices.
                </span>
              </div>

            </div>
          </div>

          {/* Form - 7 Columns */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-card border border-border backdrop-blur-md relative shadow-sm">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center ${badgeText} mb-2`}>
                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-sans">Engineering Query Logged</h3>
                  <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                    Thank you! Your initialization ticket has been registered. An integration team lead will connect shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className={`mt-6 text-xs font-semibold ${badgeText} hover:underline focus:outline-none`}
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className={`px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none ${inputFocus} transition-all w-full`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@cyberdyne.com"
                      className={`px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none ${inputFocus} transition-all w-full`}
                    />
                  </div>

                  {/* Project Type Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Project Requirement
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={`px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none ${inputFocus} transition-all w-full cursor-pointer`}
                    >
                      <option value="SaaS Platform Integration">SaaS Platform Integration (HRMS/Payroll)</option>
                      <option value="Custom Dev">Custom Full-Stack Dev</option>
                      <option value="DevOps Architecture">Cloud & DevOps Architecture</option>
                      <option value="Other">Other Custom Solution</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Project Description & Requirements
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your timeline, features needed, or legacy systems to sync..."
                      className={`px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none ${inputFocus} transition-all w-full resize-y min-h-[100px]`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group ${submitButton} hover:text-white dark:text-white focus:ring-2 focus:outline-none transition-all duration-300 transform active:translate-y-px disabled:opacity-50 cursor-pointer`}
                  >
                    <span className="relative w-full px-8 py-3.5 transition-all ease-in duration-75 bg-card hover:bg-transparent rounded-xl text-foreground hover:text-white flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Initialization...
                        </>
                      ) : (
                        <>
                          Initialize Project Brief
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
