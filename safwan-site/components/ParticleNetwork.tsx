"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Subtle particle network background in monotone grays.
 * Covers the full viewport and sits behind page content.
 */
export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    interface ParticleType {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      update: () => void;
      draw: () => void;
    }

    const particlesArray: ParticleType[] = [];
    const numberOfParticles = Math.floor(
      (dimensions.width * dimensions.height) / 12000
    );

    // Monotone grays, low opacity
    const colors = [
      "rgba(245, 245, 245, 1)",  // near white
      "rgba(229, 229, 229, 1)",  // light gray
      "rgba(200, 200, 200, 1)",  // soft gray
      "rgba(160, 160, 160, 1)",  // medium gray
      "rgba(120, 120, 120, 1)",  // darker gray
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * dimensions.width;
        this.y = Math.random() * dimensions.height;
        this.size = Math.random() * 2.2 + 0.3;
        this.speedX = Math.random() * 0.4;
        this.speedY = Math.random() * 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > dimensions.width) this.x = 0;
        if (this.x < 0) this.x = dimensions.width;
        if (this.y > dimensions.height) this.y = 0;
        if (this.y < 0) this.y = dimensions.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const connectionDistance =
            dimensions.width < 768 ? dimensions.width / 8 : dimensions.width / 12;

          if (distance < connectionDistance) {
            if (!ctx) return;
            const alpha = 0.06 * (1 - distance / connectionDistance);
            ctx.strokeStyle = `rgba(163, 163, 163, ${alpha})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden
    />
  );
}
