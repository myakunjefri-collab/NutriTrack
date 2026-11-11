"use client";

import { problems } from "@/lib/demo-data";

const PROBLEM_STUDIO_METRICS = [
  { tag: "SISTEM MANUAL", fix: "PWA OFFLINE-FIRST", diff: "< 60 detik per anak", color: "text-[#0E7490] bg-[#EBFBFC] border-[#A5F3FC]" },
  { tag: "JEDA 2 BULAN", fix: "DETEKSI DINI HARI-H", diff: "Pencegahan permanen", color: "text-[#C2410C] bg-[#FFF2EE] border-[#FFD7CB]" },
  { tag: "PORSI SAMA RATA", fix: "PAKET A & PAKET B", diff: "Presisi protein lokal", color: "text-[#15803D] bg-[#F2FCE8] border-[#C0FC92]" },
  { tag: "EVALUASI BUTA", fix: "RETURN ON NUTRITION", diff: "Audit 30/60/90 hari", color: "text-[#6D28D9] bg-[#F3F0FF] border-[#D3CEFC]" },
];

export default function Problem() {
  return (
    <section
      id="masalah"
      className="relative bg-[#F7F8F8] py-24 text-zinc-900 border-b border-zinc-200/80"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF764C]" />
              01 / DIAGNOSA MASALAH
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 max-w-3xl leading-[1.05]">
              Data antropometri ada. <br />
              Keputusan menu datang{" "}
              <span className="text-[#FF764C] underline decoration-[#FF764C]/30 underline-offset-8">
                terlambat.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 leading-relaxed font-sans">
            Jeda berminggu-minggu antara penimbangan posyandu dan respons makanan membuat jendela kritis pencegahan stunting terlewat. NutriTrack mengotomatiskan seluruh alur kerja.
          </p>
        </div>

        {/* 4 Bento Problem Cards - 100% Always Visible & Responsive */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, idx) => {
            const m = PROBLEM_STUDIO_METRICS[idx];
            return (
              <div
                key={p.n}
                className="problem-card group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 shadow-studio transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                    <span className="font-mono text-2xl font-black text-zinc-300 group-hover:text-zinc-900 transition-colors">
                      {p.n}
                    </span>
                    <span className={`token-chip rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${m.color}`}>
                      ● {m.fix}
                    </span>
                  </div>

                  <h3 className="mt-5 font-sans text-xl font-black tracking-tight text-zinc-900">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">
                    {p.body}
                  </p>
                </div>

                {/* Bottom Card Token Fix Indicator */}
                <div className="mt-8 rounded-2xl bg-zinc-50 p-3.5 border border-zinc-100 font-mono text-[11px]">
                  <div className="text-zinc-400 text-[9px] uppercase tracking-wider font-bold">Target Solusi:</div>
                  <div className="font-black text-zinc-800 mt-0.5">{m.diff}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <span>Standar WHO Child Growth Standards & Permenkes No. 2/2020</span>
          <span>Sistem Terintegrasi Posyandu & Dapur SPPG</span>
        </div>
      </div>
    </section>
  );
}
