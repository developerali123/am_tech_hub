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

        {/* Single CTA */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full justify-center items-center">
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-brand-midnight rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan hover:shadow-xl hover:shadow-brand-teal/25 hover:scale-[1.02] active:scale-100 transition-all duration-300 text-center font-sans"
          >
            Explore Our Platforms
          </a>
        </div>

      </div>
    </section>
  );
}
