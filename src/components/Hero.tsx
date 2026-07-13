"use client";

import React, { useEffect, useRef } from "react";

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Speeds
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "rgba(0, 225, 217, 0.6)";
        c.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(Math.floor(width / 20), 80); // scale particle count based on screen width
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse coords tracker
    const mouse = { x: -9999, y: -9999, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background subtle grid lines
      ctx.strokeStyle = "rgba(0, 225, 217, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw Particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity fades as distance increases
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(0, 225, 217, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Connect mouse to particles
      if (mouse.x !== -9999) {
        particles.forEach((p) => {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / mouse.radius) * 0.25;
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background canvas for matrix nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-75 z-0"
      />

      {/* Radiant glow overlays */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center gap-8">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-brand-teal/20 bg-brand-dark-gray/60 backdrop-blur-md animate-fade-in hover:border-brand-teal/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
            Enterprise SaaS & Custom Engineering
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] font-sans">
          Engineering Scalable <br />
          <span className="bg-gradient-to-r from-brand-teal via-[#00f2fe] to-brand-teal bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
            B2B Software Solutions
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
          The Central Hub for Enterprise HRMS, Payroll, and High-Performance Applications. 
          We architect mission-critical infrastructure to power high-concurrency environments.
        </p>

        {/* Double CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full justify-center items-center">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-brand-midnight rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-xl hover:shadow-brand-teal/25 hover:scale-[1.02] active:scale-100 transition-all duration-300 cursor-pointer"
          >
            Explore Our Platforms
          </button>
          <a
            href="#saas"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white rounded-full border border-slate-700 bg-brand-dark-gray/30 hover:border-brand-teal/50 hover:bg-brand-dark-gray/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center"
          >
            Talk to an Architect
          </a>
        </div>

        {/* Tech Stack quick icons showcase */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold font-sans">
            Architected with modern industry standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300">
            {/* React Icon */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              <span className="text-sm font-semibold text-slate-300 font-sans">React / Next.js</span>
            </div>
            {/* TS Icon */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-black px-1.5 py-0.5 rounded bg-slate-400 text-brand-midnight font-sans">TS</span>
              <span className="text-sm font-semibold text-slate-300 font-sans">TypeScript</span>
            </div>
            {/* Microservices Node.js icon */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
              <span className="text-sm font-semibold text-slate-300 font-sans">Microservices</span>
            </div>
            {/* AWS/Cloud Icon */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.89-3.5-4-3.5-3 0-5 2.5-5 5.5A4.5 4.5 0 0 0 7.5 22h10z" />
              </svg>
              <span className="text-sm font-semibold text-slate-300 font-sans">AWS & Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
