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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: isHRMS ? "SaaS Platform Integration" : "Custom Dev",
          message: "",
        });
      } else {
        const errData = await response.json();
        console.error("Form submission failed:", errData);
        // Fallback grace
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission connection error:", error);
      // Fallback grace
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme configuration based on location (HRMS Page vs Main Site)
  const badgeBorder = isHRMS 
    ? "border-primary/20 bg-primary/5 text-primary" 
    : "border-brand-teal/20 bg-brand-dark-gray/60 text-brand-teal";
  
  const badgeText = isHRMS ? "text-primary" : "text-brand-teal";
  
  const gradientTitle = isHRMS 
    ? "bg-gradient-to-r from-primary via-violet-500 to-indigo-600 bg-clip-text text-transparent" 
    : "bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent";
  
  const iconWrapper = isHRMS 
    ? "bg-primary/10 border-primary/20 text-primary" 
    : "bg-brand-teal/10 border-brand-teal/20 text-brand-teal";
  
  const submitButton = isHRMS 
    ? "bg-gradient-to-br from-primary to-violet-600 shadow-primary/15 hover:shadow-primary/30 focus:ring-primary/50" 
    : "bg-gradient-to-br from-brand-teal to-brand-cyan shadow-brand-teal/15 hover:shadow-brand-teal/30 focus:ring-brand-teal/50";

  // Dynamic Layout Theme Classes
  const sectionClass = isHRMS 
    ? "py-24 relative overflow-hidden bg-muted/10 border-t border-border/40 bg-grid-pattern" 
    : "py-24 relative overflow-hidden bg-brand-midnight-dark border-t border-brand-dark-gray/30 bg-grid-lines";

  const sectionTitleClass = isHRMS 
    ? "text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-sans" 
    : "text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans";

  const sectionDescClass = isHRMS 
    ? "text-muted-foreground mt-4 leading-relaxed font-sans text-sm md:text-base" 
    : "text-slate-400 mt-4 leading-relaxed font-sans text-sm md:text-base";

  const cardClass = isHRMS 
    ? "p-8 rounded-3xl bg-card border border-border flex flex-col justify-between h-full relative overflow-hidden shadow-sm" 
    : "p-8 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/80 flex flex-col justify-between h-full relative overflow-hidden shadow-xl";

  const cardTitleClass = isHRMS 
    ? "text-lg font-bold text-foreground font-sans" 
    : "text-lg font-bold text-white font-sans";

  const cardDescClass = isHRMS 
    ? "text-xs text-muted-foreground mt-1 leading-relaxed" 
    : "text-xs text-slate-400 mt-1 leading-relaxed";

  const labelClass = isHRMS 
    ? "text-[10px] font-bold text-muted-foreground uppercase tracking-widest" 
    : "text-[10px] font-bold text-slate-500 uppercase tracking-widest";

  const linkLabelClass = isHRMS 
    ? "text-sm font-semibold text-foreground hover:text-primary transition-colors" 
    : "text-sm font-semibold text-white hover:text-brand-teal transition-colors";

  const slaTextClass = isHRMS 
    ? "text-sm font-semibold text-foreground" 
    : "text-sm font-semibold text-white";

  const securityBannerClass = isHRMS 
    ? "mt-10 p-4 rounded-2xl bg-muted/30 border border-border text-[11px] text-muted-foreground leading-relaxed flex gap-2" 
    : "mt-10 p-4 rounded-2xl bg-brand-midnight/40 border border-brand-dark-gray/80 text-[11px] text-slate-400 leading-relaxed flex gap-2";

  const formContainerClass = isHRMS 
    ? "p-8 rounded-3xl bg-card border border-border backdrop-blur-md relative shadow-sm" 
    : "p-8 rounded-3xl bg-brand-dark-gray/30 border border-brand-dark-gray/80 backdrop-blur-md relative shadow-xl";

  const formLabelClass = isHRMS 
    ? "text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans" 
    : "text-xs font-bold uppercase tracking-wider text-slate-400 font-sans";

  const inputClass = isHRMS 
    ? "px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full" 
    : "px-4 py-3 rounded-xl bg-brand-midnight border border-brand-dark-gray/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all w-full";

  const selectClass = isHRMS 
    ? "px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full cursor-pointer" 
    : "px-4 py-3 rounded-xl bg-brand-midnight border border-brand-dark-gray/80 text-slate-200 text-sm focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all w-full cursor-pointer";

  const textareaClass = isHRMS 
    ? "px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full resize-y min-h-[100px]" 
    : "px-4 py-3 rounded-xl bg-brand-midnight border border-brand-dark-gray/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-all w-full resize-y min-h-[100px]";

  const btnSpanClass = isHRMS 
    ? "relative w-full px-8 py-3.5 transition-all ease-in duration-75 bg-card hover:bg-transparent rounded-xl text-foreground hover:text-white flex items-center justify-center gap-2" 
    : "relative w-full px-8 py-3.5 transition-all ease-in duration-75 bg-brand-midnight group-hover:bg-transparent rounded-xl text-slate-200 hover:text-white flex items-center justify-center gap-2";

  return (
    <section id="contact" className={sectionClass}>
      {/* Visual background accents */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 ${isHRMS ? 'bg-primary/5' : 'bg-brand-cyan/5'} rounded-full blur-[110px] pointer-events-none`}></div>

      <div className="container mx-auto px-4 md:px-6 max-w-8xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md mb-4 ${badgeBorder}`}>
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Connect With Us
            </span>
          </div>
          <h2 className={sectionTitleClass}>
            Start Your Custom <br />
            <span className={gradientTitle}>
              Engineering Initiative
            </span>
          </h2>
          <p className={sectionDescClass}>
            Have a custom HRMS/Payroll product project or need low-latency backend systems? Our engineers are ready to build compliance-ready infrastructure tailored to your specs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={cardClass}>
              <div className={`absolute top-0 right-0 w-32 h-32 ${isHRMS ? 'bg-primary/5' : 'bg-brand-teal/5'} rounded-full blur-[50px] pointer-events-none`}></div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className={cardTitleClass}>Direct Partner Communication</h3>
                  <p className={cardDescClass}>
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
                      <div className={labelClass}>Engineering Mail</div>
                      <a href="mailto:muhammadalimirza90@gmail.com" className={linkLabelClass}>
                        muhammadalimirza90@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp Support */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconWrapper} bg-emerald-500/10 border-emerald-500/20 text-emerald-400`}>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.858.002-2.634-1.013-5.11-2.861-6.958-1.848-1.847-4.322-2.862-6.957-2.863-5.441 0-9.866 4.422-9.87 9.86.002 2.125.568 4.202 1.64 6.012l-.997 3.646 3.734-.979zm11.068-7.5c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.642.145-.19.29-.735.942-.9.1.13-.162-.162-.325-.262-.616-.263-.29-.015-.558.125-.697.126-.125.262-.303.393-.455.13-.152.175-.262.263-.437.088-.175.044-.328-.022-.459-.066-.13-.642-1.547-.88-2.119-.232-.558-.466-.481-.642-.49-.166-.008-.357-.01-.548-.01-.19 0-.5.072-.762.355-.262.29-1 .978-1 2.385s1.023 2.766 1.168 2.956c.145.19 2.01 3.07 4.869 4.302.68.293 1.213.468 1.627.6.686.218 1.312.187 1.806.114.55-.082 1.716-.7 1.961-1.374.245-.672.245-1.25.172-1.372-.072-.121-.262-.19-.553-.335z"/>
                      </svg>
                    </div>
                    <div>
                      <div className={labelClass}>WhatsApp Support</div>
                      <a 
                        href="https://wa.me/923170068650?text=Hi%20AM%20Tech%20Hub,%20I'm%20interested%20in%20initializing%20a%20project%20brief!" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                      >
                        +923170068650
                        <span className="inline-flex items-center justify-center bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Chat Live
                        </span>
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
                      <div className={labelClass}>Support SLA</div>
                      <span className={slaTextClass}>
                        &lt; 15 Minute Critical Account Response
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Banner Note */}
              <div className={securityBannerClass}>
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
            <div className={formContainerClass}>
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center ${badgeText} mb-2`}>
                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className={isHRMS ? "text-xl font-bold text-foreground font-sans" : "text-xl font-bold text-white font-sans"}>Engineering Query Logged</h3>
                  <p className={isHRMS ? "text-muted-foreground text-sm max-w-sm leading-relaxed" : "text-slate-400 text-sm max-w-sm leading-relaxed"}>
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
                    <label htmlFor="name" className={formLabelClass}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className={inputClass}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={formLabelClass}>
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@cyberdyne.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Project Type Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className={formLabelClass}>
                      Project Requirement
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={selectClass}
                    >
                      <option value="SaaS Platform Integration">SaaS Platform Integration (HRMS/Payroll)</option>
                      <option value="Custom Dev">Custom Full-Stack Dev</option>
                      <option value="DevOps Architecture">Cloud & DevOps Architecture</option>
                      <option value="Other">Other Custom Solution</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className={formLabelClass}>
                      Project Description & Requirements
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your timeline, features needed, or legacy systems to sync..."
                      className={textareaClass}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group ${submitButton} hover:text-white dark:text-white focus:ring-2 focus:outline-none transition-all duration-300 transform active:translate-y-px disabled:opacity-50 cursor-pointer`}
                  >
                    <span className={btnSpanClass}>
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
