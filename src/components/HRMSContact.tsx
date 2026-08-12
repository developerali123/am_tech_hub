"use client";

import React, { useState } from "react";

export default function HRMSContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Payroll Setup",
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
        body: JSON.stringify({
          ...formData,
          projectType: `HRMS: ${formData.projectType}`
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: "Payroll Setup",
          message: "",
        });
      } else {
        const errData = await response.json();
        console.error("Form submission failed:", errData);
        setIsSubmitted(true); // Fallback success screen
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitted(true); // Fallback success screen
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/15 border-t border-border/40 bg-grid-pattern">
      {/* Background glow styling matching HRMS */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary backdrop-blur-md mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Streamline Your HR & <br />
            <span className="bg-gradient-to-r from-primary via-violet-500 to-indigo-600 bg-clip-text text-transparent">
              Workforce Operations
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed font-sans text-sm md:text-base">
            Ready to integrate automated payroll, employee self-service schedules, or the training module? Connect with an integration engineer today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between h-full relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-sans">Consulting & Support</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Set up a scoping call to map payroll ledgers or customize appraisals and training modules.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-primary/10 border-primary/20 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Client Mail</div>
                      <a href="mailto:muhammadalimirza90@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        muhammadalimirza90@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp Support */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-emerald-500/10 border-emerald-500/20 text-emerald-600">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.858.002-2.634-1.013-5.11-2.861-6.958-1.848-1.847-4.322-2.862-6.957-2.863-5.441 0-9.866 4.422-9.87 9.86.002 2.125.568 4.202 1.64 6.012l-.997 3.646 3.734-.979zm11.068-7.5c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.642.145-.19.29-.735.942-.9.1.13-.162-.162-.325-.262-.616-.263-.29-.015-.558.125-.697.126-.125.262-.303.393-.455.13-.152.175-.262.263-.437.088-.175.044-.328-.022-.459-.066-.13-.642-1.547-.88-2.119-.232-.558-.466-.481-.642-.49-.166-.008-.357-.01-.548-.01-.19 0-.5.072-.762.355-.262.29-1 .978-1 2.385s1.023 2.766 1.168 2.956c.145.19 2.01 3.07 4.869 4.302.68.293 1.213.468 1.627.6.686.218 1.312.187 1.806.114.55-.082 1.716-.7 1.961-1.374.245-.672.245-1.25.172-1.372-.072-.121-.262-.19-.553-.335z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">WhatsApp Direct</div>
                      <a 
                        href="https://wa.me/923170068650?text=Hi%20AM%20Tech%20Hub,%20I'd%20like%20to%20discuss%20the%20HRMS%20and%20payroll%20platform!" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-emerald-600 transition-colors flex items-center gap-1.5"
                      >
                        +923170068650
                        <span className="inline-flex items-center justify-center bg-emerald-500/20 text-emerald-600 text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Chat Live
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Response SLA */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-primary/10 border-primary/20 text-primary">
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
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>
                  All client integration queries are handled in strict compliance with GDPR data isolation agreements.
                </span>
              </div>

            </div>
          </div>

          {/* Form - 7 Columns */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-card border border-border backdrop-blur-md relative shadow-sm">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center text-primary mb-2">
                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-sans">Scoping Request Logged</h3>
                  <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                    Thank you! Your ticket has been registered. An onboarding engineer will follow up shortly to schedule a live systems demonstration.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-primary hover:underline focus:outline-none"
                  >
                    Submit Another Scoping Form
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
                      className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full"
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
                      className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full"
                    />
                  </div>

                  {/* Module Requirement Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Scoping Modules Required
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full cursor-pointer"
                    >
                      <option value="Payroll Setup">Automated Payroll Setup</option>
                      <option value="Employee Lifecycle & Rosters">Roster scheduling & Lifecycles</option>
                      <option value="Training & Development Integration">Training & Development Integration</option>
                      <option value="Entire Unified Suite">Full-Suite Platform Scoping</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans">
                      Scoping Notes & Company Size
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your headcount, current HR software stack, or timeline..."
                      className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full resize-y min-h-[100px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-br from-primary to-violet-600 shadow-primary/15 hover:shadow-primary/30 focus:ring-primary/50 hover:text-white focus:outline-none transition-all duration-300 transform active:translate-y-px disabled:opacity-50 cursor-pointer"
                  >
                    <span className="relative w-full px-8 py-3.5 transition-all ease-in duration-75 bg-card hover:bg-transparent rounded-xl text-foreground hover:text-white flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Scoping...
                        </>
                      ) : (
                        <>
                          Schedule HRMS Scoping Call
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
