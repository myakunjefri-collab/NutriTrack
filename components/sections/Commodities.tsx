"use client";

import Illustration from "@/components/ui/Illustration";
import { commodities } from "@/lib/demo-data";

const COMMODITY_STUDIO_TOKENS = [
  { code: "protein.egg_blitar", badge: "KAB. BLITAR", supplier: "Koperasi Peternak Blitar Jaya", nutrient: "12.8g Protein / 100g", color: "text-[#0E7490] border-[#A5F3FC] bg-[#EBFBFC]", stageBg: "bg-[#FFFBEB] border-amber-200/80" },
  { code: "protein.lele_lamongan", badge: "KAB. LAMONGAN", supplier: "Gapoktan Mina Makmur", nutrient: "Asam Lemak Esensial & DHA", color: "text-[#15803D] border-[#BBF7D0] bg-[#F0FDF4]", stageBg: "bg-[#F0FDF4] border-emerald-200/80" },
  { code: "nutrient.iron_liver", badge: "PETERNAK JATIM", supplier: "Sentra Peternak Mandiri", nutrient: "Zat Besi Tinggi & Vit. A", color: "text-[#C2410C] border-[#FFEDD5] bg-[#FFF7ED]", stageBg: "bg-[#FFF7ED] border-orange-200/80" },
  { code: "protein.soy_tempe", badge: "PENGRAJIN LOKAL", supplier: "Koperasi Pengrajin Kedelai", nutrient: "Protein Nabati Fermentasi", color: "text-[#A16207] border-[#FEF08A] bg-[#FEFCE8]", stageBg: "bg-[#FEFCE8] border-yellow-200/80" },
  { code: "micro.moringa_kelor", badge: "KEBUN WARGA", supplier: "Kelompok Wanita Tani Desa", nutrient: "Kaya Kalsium & Antioksidan", color: "text-[#0F766E] border-[#CCFBF1] bg-[#F0FDFA]", stageBg: "bg-[#ECFDF5] border-teal-200/80" },
];

export default function Commodities() {
  return (
    <section className="relative bg-[#F7F8F8] py-28 text-zinc-900 border-b border-zinc-200/80">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38E8F5]" />
              06 / KETAHANAN PANGAN LOKAL
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 max-w-3xl leading-[1.05]">
              Bahan dari kandang & kebun <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                di sekitar anak.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 leading-relaxed font-sans">
            Menyerap hasil peternak dan kelompok tani Jawa Timur. Rantai pasok pangan diperpendek untuk menjaga kesegaran gizi sekaligus menggerakkan ekonomi desa.
          </p>
        </div>

        {/* 5 Modern Bento Commodity Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {commodities.map((c, idx) => {
            const tk = COMMODITY_STUDIO_TOKENS[idx];
            return (
              <div
                key={c.name}
                className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-studio transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
              >
                <div>
                  {/* Top Token Badge */}
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <span className="font-mono text-xs font-bold text-zinc-300 group-hover:text-zinc-800 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className={`token-chip rounded-full px-2 py-0.5 text-[9px] ${tk.color}`}>
                      ● {tk.badge}
                    </span>
                  </div>

                  {/* Illustration Stage */}
                  <div className={`my-5 flex h-36 w-full items-center justify-center rounded-2xl border p-4 shadow-sm transition-transform group-hover:scale-[1.02] ${tk.stageBg}`}>
                    <div className="h-28 w-28">
                      <Illustration
                        name={c.art}
                        alt={c.name}
                        redrawOnHover
                        className="h-full w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                      />
                    </div>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-zinc-950 tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-emerald-700 font-semibold">
                    {c.origin}
                  </p>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-sans">
                    {c.note}
                  </p>
                </div>

                {/* Bottom Nutrient Token */}
                <div className="mt-6 rounded-2xl bg-zinc-50 p-2.5 border border-zinc-100 font-mono text-[10px] space-y-1">
                  <div className="text-zinc-400 uppercase text-[8px] tracking-wider">Sumber Gizi:</div>
                  <div className="font-semibold text-zinc-800 truncate">{tk.nutrient}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200/80 font-mono text-xs text-zinc-500">
          <span>Evaluasi Ketersediaan Bahan Pangan Lokal (PRD Bagian 5.2 - SKPL F09)</span>
          <span className="token-chip bg-white border-zinc-200 text-zinc-600">
            ● 100% Pasokan Jawa Timur · Data Demo
          </span>
        </div>

      </div>
    </section>
  );
}
