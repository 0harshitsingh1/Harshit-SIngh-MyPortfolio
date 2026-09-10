"use client";

import React, { useEffect, useRef } from "react";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Configuration for a cleaner, highly professional look
    const particleCount = 40; // Sparse, elegant dots
    const maxDistance = 110; // Only connect very close particles
    
    // Subtle mouse interaction
    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Extremely slow, fluid drift
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        // Tiny to small dots for a refined look
        this.radius = Math.random() * 1.2 + 0.4; 
        // Varied opacity to simulate depth
        this.baseAlpha = Math.random() * 0.6 + 0.1; 
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges seamlessly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Clean, soft white/blue tint matching the tech vibe
        ctx.fillStyle = `rgba(167, 139, 250, ${this.baseAlpha})`; 
        ctx.fill();
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => p.update(canvas.width, canvas.height));
      
      for (let i = 0; i < particles.length; i++) {
        // Connect to mouse for interactivity
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = (1 - (distMouse / 140)) * 0.15;
          ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Very subtle connection lines to keep it looking clean
            const opacity = (1 - (distance / maxDistance)) * 0.12;
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`; 
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => p.draw(ctx));

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticleBackground;
