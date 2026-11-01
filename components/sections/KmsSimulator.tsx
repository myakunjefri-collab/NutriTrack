"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { demoAssess, type Sex } from "@/lib/zscore-demo";

export default function KmsSimulator() {
  const [sex, setSex] = useState<Sex>("L");
  const [age, setAge] = useState(14);
  const [weight, setWeight] = useState(8.2);
  const [height, setHeight] = useState(73.5);

  const r = useMemo(
    () => demoAssess({ sex, ageMonths: age, weightKg: weight, heightCm: height }),
    [sex, age, weight, height]
  );

  const chartX = 50 + ((age - 6) / 30) * 410;
  const chartY = 220 - ((Math.min(Math.max(weight, 4), 18) - 4) / 14) * 190;

  const statusTheme = {
    normal: {
      bg: "bg-[#F2FCE8] text-[#143E00] border-[#C0FC92]",
      dot: "#16A34A",
      badge: "NORMAL",
      packColor: "text-emerald-600",
    },
    waspada: {
      bg: "bg-[#FEFCE8] text-[#713F12] border-[#FEF08A]",
      dot: "#D97706",
      badge: "WASPADA / FALTERING",
      packColor: "text-amber-600",
    },
    stunting: {
      bg: "bg-[#FFF2EE] text-[#9A3412] border-[#FFD7CB]",
      dot: "#EA580C",
      badge: "RISIKO STUNTING",
      packColor: "text-[#FF764C]",
    },
  }[r.status];

  return (
    <section id="simulasi" className="relative bg-[#F7F8F8] py-28 text-zinc-950 border-b border-zinc-200/80">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-bold text-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#38E8F5]" /> 03 / SIMULATOR INTERAKTIF
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 uppercase">
              Geser parameternya. Saksikan <span className="text-[#7866FF]">keputusannya.</span>
            </h2>
          </div>
          <span className="token-chip bg-white text-zinc-500 border-zinc-200 shadow-sm">
            Formula WHO LMS · Data Demo
          </span>
        </div>

        {/* Studio Interactive Playground Card */}
        <div className="mt-12 rounded-3xl border border-zinc-200/90 bg-white p-6 md:p-8 shadow-xl">
          
          <div className="grid gap-8 lg:grid-cols-[340px_1fr_360px] items-start">
            
            {/* 1. Left Token Sliders */}
            <div className="space-y-6 rounded-2xl bg-[#F7F8F8] p-5 border border-zinc-200/80">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-bold">
                  Input Pengukuran
                </span>
                <span className="font-mono text-[10px] text-zinc-400">Kader PWA</span>
              </div>

              {/* Gender selector */}
              <div>
                <span className="font-mono text-[11px] text-zinc-500 block mb-2 font-semibold">Jenis Kelamin</span>
                <div className="flex gap-2">
                  {(["L", "P"] as Sex[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSex(s)}
                      className={clsx(
                        "flex-1 py-2 rounded-xl text-xs font-bold font-mono border transition-all",
                        sex === s
                          ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                          : "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-50"
                      )}
                    >
                      {s === "L" ? "Laki-laki (L)" : "Perempuan (P)"}
                    </button>
                  ))}
                </div>
              </div>

              <Slider label="Usia Balita" unit="bulan" min={6} max={36} step={1} value={age} onChange={setAge} />
              <Slider label="Berat Badan" unit="kg" min={5} max={18} step={0.1} value={weight} onChange={setWeight} />
              <Slider label="Panjang/Tinggi" unit="cm" min={60} max={105} step={0.5} value={height} onChange={setHeight} />

              <div className="rounded-xl bg-white p-3 border border-zinc-200 font-mono text-[11px] text-zinc-600 flex justify-between items-center shadow-sm">
                <span>Metode Ukur:</span>
                <span className="text-zinc-950 font-bold">
                  {age < 24 ? "Panjang (Terlentang)" : "Tinggi (Berdiri)"}
                </span>
              </div>
            </div>

            {/* 2. Center Curve Graph */}
            <div className="rounded-2xl bg-[#F7F8F8] p-5 border border-zinc-200/80 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-bold">
                  Visual Kurva Pertumbuhan
                </span>
                <div className="flex items-center gap-2">
                  <span className={`token-chip rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${statusTheme.bg}`}>
                    ● {statusTheme.badge}
                  </span>
                </div>
              </div>

              <div className="relative my-4">
                <svg
                  viewBox="0 0 500 260"
                  className="w-full select-none"
                  role="img"
                  aria-label="Grafik KMS Interaktif"
                >
                  <path d="M50 30 V220 H480" stroke="#CBD5E1" strokeWidth="1.5" />
                  <path d="M50 80 H480 M50 130 H480 M50 180 H480" stroke="#E2E8F0" strokeDasharray="3 3" />

                  {/* Colored zone bands */}
                  <path d="M50 100 Q 240 70, 480 40 L 480 100 Q 240 130, 50 155 Z" fill="#91EB4C" fillOpacity=".25" />
                  <path d="M50 155 Q 240 130, 480 100 L 480 135 Q 240 165, 50 185 Z" fill="#FFCA38" fillOpacity=".25" />
                  <path d="M50 185 Q 240 165, 480 135 L 480 200 Q 240 215, 50 220 Z" fill="#FF764C" fillOpacity=".25" />

                  {/* Reference curves */}
                  <path d="M50 100 Q 240 70, 480 40" fill="none" stroke="#16A34A" strokeWidth="2" strokeOpacity=".8" />
                  <path d="M50 185 Q 240 165, 480 135" fill="none" stroke="#EA580C" strokeWidth="2" strokeOpacity=".8" />

                  {/* Axis labels */}
                  <text x="50" y="238" fill="#64748B" fontSize="10" fontFamily="monospace" fontWeight="bold">6 bln</text>
                  <text x="250" y="238" fill="#64748B" fontSize="10" fontFamily="monospace" fontWeight="bold">20 bln</text>
                  <text x="460" y="238" fill="#64748B" fontSize="10" fontFamily="monospace" fontWeight="bold">36 bln</text>

                  {/* Interactive Moving Point */}
                  <g className="transition-all duration-200 ease-out">
                    <circle
                      cx={chartX}
                      cy={chartY}
                      r="14"
                      stroke={statusTheme.dot}
                      strokeWidth="2"
                      opacity=".4"
                      className="animate-ping"
                      style={{ transformOrigin: `${chartX}px ${chartY}px` }}
                    />
                    <circle
                      cx={chartX}
                      cy={chartY}
                      r="7"
                      fill={statusTheme.dot}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <rect
                      x={chartX - 35}
                      y={chartY - 26}
                      width="70"
                      height="18"
                      rx="4"
                      fill="#18140B"
                    />
                    <text
                      x={chartX}
                      y={chartY - 14}
                      fill="#FFFFFF"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      {age}m · {weight}kg
                    </text>
                  </g>
                </svg>
              </div>

              {/* Z-Scores Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-200">
                <div className="rounded-xl bg-white p-3 border border-zinc-200 shadow-sm">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">Z-Score BB/U</span>
                  <span className="font-sans text-2xl font-black text-zinc-950">
                    {r.zWeightForAge > 0 ? `+${r.zWeightForAge}` : r.zWeightForAge} <span className="font-mono text-xs text-zinc-500">SD</span>
                  </span>
                </div>
                <div className="rounded-xl bg-white p-3 border border-zinc-200 shadow-sm">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">Z-Score TB/U</span>
                  <span className="font-sans text-2xl font-black text-[#7866FF]">
                    {r.zHeightForAge > 0 ? `+${r.zHeightForAge}` : r.zHeightForAge} <span className="font-mono text-xs text-zinc-500">SD</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Right JSON Token Payload & Kitchen Action */}
            <div className="space-y-4 rounded-2xl bg-[#F7F8F8] p-5 border border-zinc-200/80">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-bold">
                  Data Pesanan Dapur MBG
                </span>
                <span className="token-chip bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                  ● Sinkron Otomatis
                </span>
              </div>

              {/* JSON code block in dark rounded container */}
              <div className="rounded-xl bg-[#18140B] p-3 font-mono text-[11px] leading-relaxed text-zinc-300 shadow-md">
                <span className="text-zinc-500">{"// Hasil Evaluasi LMS WHO"}</span>
                <br />
                {"{"}
                <div className="pl-3">
                  <span className="text-[#A499FF]">&quot;status&quot;</span>: <span className={statusTheme.packColor}>&quot;{r.status.toUpperCase()}&quot;</span>,<br />
                  <span className="text-[#A499FF]">&quot;pack&quot;</span>: <span className="text-[#38E8F5]">&quot;PAKET_{r.pack}&quot;</span>,<br />
                  <span className="text-[#A499FF]">&quot;z_wfa&quot;</span>: <span className="text-white">{r.zWeightForAge}</span>,<br />
                  <span className="text-[#A499FF]">&quot;z_hfa&quot;</span>: <span className="text-white">{r.zHeightForAge}</span>,<br />
                  <span className="text-[#A499FF]">&quot;kitchen_queue&quot;</span>: <span className="text-[#91EB4C]">&quot;SPPG_SUKOREJO_01&quot;</span>,<br />
                  <span className="text-[#A499FF]">&quot;qr_token&quot;</span>: <span className="text-zinc-400">&quot;sec_token_9f8a...&quot;</span>
                </div>
                {"}"}
              </div>

              {/* Recommendation Callout */}
              <div className="rounded-xl bg-white p-3.5 border border-zinc-200 font-sans text-xs shadow-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1 font-bold">
                  Keputusan Menu Hari Ini:
                </span>
                <p className="font-bold text-zinc-900 leading-relaxed">
                  {r.recommendation}
                </p>
              </div>

              <div className="pt-2">
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-center font-mono text-xs font-bold text-emerald-800">
                  Alokasi Kuota Berhasil Diterbitkan ✓
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Slider({
  label,
  unit,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5 font-mono text-xs">
        <span className="text-zinc-600 font-semibold">{label}</span>
        <span className="text-zinc-950 font-black">
          {value} <span className="text-zinc-500 text-[10px]">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#7866FF] h-2 bg-zinc-200 rounded-lg cursor-pointer"
      />
    </div>
  );
}
