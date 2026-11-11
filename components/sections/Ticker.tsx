"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tickerPhrases } from "@/lib/demo-data";

export default function Ticker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const loop = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      });

      let currentScale = 1;
      let targetScale = 1;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          targetScale = 1 + Math.min(velocity / 280, 3.5);
        },
      });

      const updateTicker = () => {
        currentScale += (targetScale - currentScale) * 0.08;
        if (targetScale > 1) {
          targetScale += (1 - targetScale) * 0.04;
        }
        loop.timeScale(currentScale);
      };

      gsap.ticker.add(updateTicker);

      return () => {
        gsap.ticker.remove(updateTicker);
        trigger.kill();
        loop.kill();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  const tokenPills = [
    { label: "token.antropometri", val: "LMS_WHO", color: "text-[#38E8F5] border-[#38E8F5]/30 bg-[#38E8F5]/10" },
    { label: "quota.paket_b", val: "EXTRA_PROTEIN", color: "text-[#FF764C] border-[#FF764C]/30 bg-[#FF764C]/10" },
    { label: "supply.local", val: "BLITAR_LAMONGAN", color: "text-[#91EB4C] border-[#91EB4C]/30 bg-[#91EB4C]/10" },
  ];

  const combined = [
    ...tickerPhrases,
    ...tickerPhrases,
    ...tickerPhrases,
    ...tickerPhrases,
  ];

  return (
    <section
      ref={containerRef}
      aria-label="Semboyan NutriTrack"
      className="relative overflow-hidden border-y border-zinc-200/80 bg-white py-6"
    >
      <div
        ref={trackRef}
        className="flex w-max items-center whitespace-nowrap will-change-transform"
      >
        {combined.map((phrase, i) => {
          const pill = tokenPills[i % tokenPills.length];
          return (
            <div key={`${phrase}-${i}`} className="flex items-center gap-6 pr-6">
              <span className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">
                {phrase}
              </span>
              
              {/* Studio Token Chip */}
              <span className={`token-chip rounded-full px-3 py-1 text-xs ${pill.color}`}>
                <span>●</span>
                <span className="font-mono">{pill.label}:</span>
                <span className="font-bold">{pill.val}</span>
              </span>

              <span className="text-zinc-300 font-mono text-xl" aria-hidden="true">
                /
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
