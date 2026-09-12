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
        this.vx = (Math.random() - 0.5) * 0.8; // subtle movement
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.5 + 0.3;
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

      // Update particles first
      particles.forEach(p => p.update(canvas.width, canvas.height));

      // Draw lines
      ctx.shadowBlur = 0; // Turn off shadow for lines to keep it clean
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity based on distance
            const opacity = (1 - (distance / maxDistance)) * 0.3;
            // Mixed with a subtle purple/blue for the connections
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
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
