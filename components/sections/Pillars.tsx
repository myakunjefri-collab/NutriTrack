"use client";

import Illustration from "@/components/ui/Illustration";
import { pillars } from "@/lib/demo-data";

const PILLAR_CONFIG = [
  {
    badge: "MODUL A · POSYANDU OFFLINE",
    color: "text-[#0E7490] border-[#A5F3FC] bg-[#EBFBFC]",
    stageBg: "bg-[#F0FDFE] border-[#BAE6FD]",
    dotColor: "bg-[#0E7490]",
    features: [
      "Penyimpanan lokal IndexedDB (Dexie.js) aman tanpa sinyal internet",
      "Kalkulasi metode LMS WHO Child Growth Standards seketika (<1 detik)",
      "Koreksi otomatis cara ukur panjang badan terlentang vs tinggi berdiri",
    ],
  },
  {
    badge: "MODUL B · PRESKRIPSI MBG",
    color: "text-[#15803D] border-[#BBF7D0] bg-[#F0FDF4]",
    stageBg: "bg-[#F2FCE8] border-[#C0FC92]",
    dotColor: "bg-[#15803D]",
    features: [
      "Memisahkan otomatis kuota Paket A Reguler vs Paket B Intervensi",
      "Kalkulasi gramasi resep langsung ke kebutuhan belanja kg dapur",
      "Cetak label stiker QR code unik sekali pakai terenkripsi 128-bit",
    ],
  },
  {
    badge: "MODUL D · ANALITIK PEMDA",
    color: "text-[#6D28D9] border-[#DDD6FE] bg-[#F5F3FF]",
    stageBg: "bg-[#F3F0FF] border-[#D3CEFC]",
    dotColor: "bg-[#6D28D9]",
    features: [
      "Pelacakan Return on Nutrition (RoN) pada kohort siklus 30, 60, 90 hari",
      "Peta heatmap sebaran kasus stunting hingga tingkat desa & kecamatan",
      "Ekspor laporan audit resmi berkop instansi dalam format PDF & Excel",
    ],
  },
];

export default function Pillars() {
  return (
    <section className="relative bg-[#F7F8F8] py-28 text-zinc-900 border-b border-zinc-200/80">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#91EB4C]" />
              04 / ARSITEKTUR PLATFORM
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 max-w-3xl leading-[1.05]">
              Bukan sekadar pencatat, tapi <br />
              <span className="bg-gradient-to-r from-teal-600 to-[#38E8F5] bg-clip-text text-transparent">
                pengambil keputusan gizi.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 leading-relaxed font-sans">
            Tiga pilar modular yang dirancang khusus untuk memotong birokrasi, mengamankan data anak, dan membuktikan efektivitas program makan bergizi gratis.
          </p>
        </div>

        {/* 3 Modern Bento Feature Rows */}
        <div className="mt-14 space-y-8">
          {pillars.map((p, i) => {
            const cfg = PILLAR_CONFIG[i];
            const isReversed = i % 2 === 1;

            return (
              <div
                key={p.title}
                className="group rounded-3xl border border-zinc-200/90 bg-white p-8 md:p-12 shadow-studio transition-all duration-300 hover:border-zinc-300 hover:shadow-xl"
              >
                <div
                  className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-12 ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Visual Illustration Card */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:col-start-8" : ""}`}>
                    <div className={`relative flex h-64 sm:h-72 w-full items-center justify-center rounded-2xl border p-8 shadow-sm overflow-hidden ${cfg.stageBg}`}>
                      <div className="canvas-dot-grid absolute inset-0 opacity-40 pointer-events-none" />
                      
                      <div className="relative h-48 w-48 sm:h-56 sm:w-56 transition-transform duration-500 group-hover:scale-105">
                        <Illustration name={p.art} alt={p.title} className="h-full w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]" />
                      </div>

                      <div className="absolute top-3 left-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                        Pilar 0{i + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content & Feature Pills */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-1" : ""}`}>
                    <span className={`token-chip rounded-full px-3 py-1 text-xs ${cfg.color}`}>
                      ● {cfg.badge}
                    </span>

                    <h3 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                      {p.title}
                    </h3>

                    <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans">
                      {p.body}
                    </p>

                    <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-100">
                      {cfg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
