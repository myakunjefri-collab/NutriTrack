"use client";

import { useState, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Illustration, { type MapRegionData } from "@/components/ui/Illustration";
import { impactDemo, priorityRegions } from "@/lib/demo-data";

type Cycle = 30 | 60 | 90;

export default function Impact() {
  const [cycle, setCycle] = useState<Cycle>(60);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [displayTreated, setDisplayTreated] = useState(0);
  const [displayDeltaZ, setDisplayDeltaZ] = useState(0);
  const [displayRecovery, setDisplayRecovery] = useState(0);

  const d = impactDemo.cycles[cycle];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayTreated(d.treated);
      setDisplayDeltaZ(d.deltaZ);
      setDisplayRecovery(d.recovery);
      return;
    }

    const obj = {
      treated: displayTreated,
      deltaZ: displayDeltaZ,
      recovery: displayRecovery,
    };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        treated: d.treated,
        deltaZ: d.deltaZ,
        recovery: d.recovery,
        duration: 1,
        ease: "power3.out",
        onUpdate: () => {
          setDisplayTreated(Math.round(obj.treated));
          setDisplayDeltaZ(Math.round(obj.deltaZ * 10) / 10);
          setDisplayRecovery(Math.round(obj.recovery * 10) / 10);
        },
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  return (
    <section
      id="dampak"
      ref={sectionRef}
      className="relative bg-[#F7F8F8] py-28 text-zinc-950 overflow-hidden border-b border-zinc-200/80"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header with Cycle Selector Pills */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-zinc-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7866FF]" />
              07 / RETURN ON NUTRITION (RoN)
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 leading-[1.05]">
              Bukti kurva nyata, <br />
              bukan <span className="text-[#7866FF]">perkiraan.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2.5">
            <span className="font-mono text-xs text-zinc-500 font-medium">Pilih Siklus Evaluasi Intervensi:</span>
            <div className="flex gap-2 rounded-full bg-white p-1 border border-zinc-200 shadow-sm">
              {([30, 60, 90] as Cycle[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCycle(c)}
                  className={clsx(
                    "rounded-full px-5 py-2 font-mono text-xs font-bold transition-all",
                    cycle === c
                      ? "bg-[#7866FF] text-white shadow-md"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                  )}
                >
                  {c} Hari
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Bento Grid: Map + Metrics */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
          
          {/* Left: Interactive Map Canvas */}
          <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 md:p-8 shadow-studio">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <span className="font-mono text-xs text-[#7866FF] font-bold block">PETA GEOSPASIAL JATIM</span>
                <span className="font-sans text-base font-extrabold text-zinc-950">
                  Sebaran Wilayah Prioritas & Sentra Pangan
                </span>
              </div>
              <span className="token-chip bg-zinc-50 text-zinc-600 border-zinc-200">
                Data Demo
              </span>
            </div>

            <div className="mt-6">
              <Illustration
                name="peta-jatim"
                interactive
                selectedRegion={selectedRegion}
                onRegionHover={(region: MapRegionData | null) => {
                  setSelectedRegion(region ? region.name.toLowerCase() : null);
                }}
                className="w-full"
                alt="Peta stilisasi Jawa Timur"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4 font-mono text-xs text-zinc-600">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF764C] animate-ping" />
                  <span className="font-semibold text-zinc-900">Prioritas Stunting</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#B8893B]" />
                  <span>Sentra Komoditas</span>
                </span>
              </div>
              <span className="text-zinc-500 font-sans">
                Fokus: {priorityRegions.join(" · ")}
              </span>
            </div>
          </div>

          {/* Right: 3 Big Metric Studio Cards */}
          <div className="space-y-4">
            
            <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-studio">
              <div className="flex items-baseline justify-between border-b border-zinc-100 pb-3">
                <span className="font-mono text-xs uppercase text-zinc-500 font-semibold">Balita Terintervensi</span>
                <span className="token-chip bg-[#F3F0FF] text-[#24135E] border-[#D3CEFC] font-bold">
                  ● Kohort Jatim
                </span>
              </div>
              <div className="mt-3 font-sans text-5xl font-black text-zinc-950">
                {displayTreated.toLocaleString("id-ID")}
              </div>
              <p className="mt-2 text-xs text-zinc-600 font-sans">
                Balita gizi kurang/faltering penerima Paket B yang ditimbang berkala di posyandu.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-studio">
              <div className="flex items-baseline justify-between border-b border-zinc-100 pb-3">
                <span className="font-mono text-xs uppercase text-zinc-500 font-semibold">Rata-rata Kenaikan Z-Score</span>
                <span className="token-chip bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0] font-bold">
                  ● Siklus {cycle} Hari
                </span>
              </div>
              <div className="mt-3 font-sans text-5xl font-black text-[#15803D]">
                +{displayDeltaZ.toFixed(1)} <span className="font-mono text-lg text-zinc-500">SD</span>
              </div>
              
              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between font-mono text-[11px] text-zinc-600">
                  <span>Progres Target WHO (+1.0 SD)</span>
                  <span className="text-zinc-950 font-bold">{Math.round((d.deltaZ / 1.0) * 100)}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#91EB4C] transition-all duration-500 shadow-sm"
                    style={{ width: `${Math.min((d.deltaZ / 1.0) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-studio">
              <div className="flex items-baseline justify-between border-b border-zinc-100 pb-3">
                <span className="font-mono text-xs uppercase text-zinc-500 font-semibold">Angka Sukses Pemulihan</span>
                <span className="token-chip bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5] font-bold">
                  ● Keluar Zona Merah
                </span>
              </div>
              <div className="mt-3 font-sans text-5xl font-black text-[#FF764C]">
                {displayRecovery.toFixed(1)}%
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between font-mono text-[11px] text-zinc-600">
                  <span>Tingkat Kesembuhan Balita</span>
                  <span className="text-zinc-950 font-bold">{d.recovery}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#FF764C] transition-all duration-500 shadow-sm"
                    style={{ width: `${d.recovery}%` }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
