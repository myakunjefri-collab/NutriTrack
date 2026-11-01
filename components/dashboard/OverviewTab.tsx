"use client";

import { motion } from "framer-motion";
import { REGIONS_JATIM_DATA, RON_COHORT_DATA } from "@/lib/app-data";

export default function OverviewTab({
  onSelectTab,
}: {
  onSelectTab: (tab: "kms" | "dapur" | "konsumsi" | "analitik") => void;
}) {
  return (
    <div className="space-y-8 font-sans">
      {/* Executive Hero Banner */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#18140B] via-[#241A38] to-[#18140B] p-8 text-white shadow-xl">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#38E8F5]/25 blur-[90px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#FFCA38]/20 blur-[90px]" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-mono text-xs font-bold text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#38E8F5] animate-pulse" />
              SISTEM PRESISI TERINTEGRASI PROVINSI JAWA TIMUR
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tightest leading-tight">
              Timbang Hari Ini, Masak Hari Ini.
            </h2>
            <p className="text-sm font-medium text-white/80 leading-relaxed font-sans">
              Menghubungkan meja penimbangan kader posyandu, dapur MBG SPPG mandiri, hingga dasbor pimpinan daerah dalam satu ekosistem data real-time berbasis standar WHO & Permenkes No. 2/2020.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onSelectTab("kms")}
              className="rounded-2xl bg-[#38E8F5] px-6 py-3 font-sans text-xs font-black text-[#032D30] shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              + Input Timbang Baru
            </button>
            <button
              type="button"
              onClick={() => onSelectTab("analitik")}
              className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-sans text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Lihat Heatmap Jatim
            </button>
          </div>
        </div>
      </div>

      {/* 4 Key Executive Metric Tiles */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-[26px] border border-zinc-200/90 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">
              Total Balita Terpantau
            </span>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-800">
              Aktif
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-3xl font-black text-zinc-950 tracking-tight">
              14.250
            </span>
            <span className="font-mono text-xs text-zinc-500 font-bold">anak</span>
          </div>
          <p className="mt-2 text-xs text-zinc-500 font-mono">
            38 Kab/Kota Jawa Timur
          </p>
        </div>

        <div className="rounded-[26px] border-2 border-amber-300 bg-amber-50/40 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase font-black text-amber-800">
              Balita Faltering / Waspada
            </span>
            <span className="rounded-md bg-amber-500 px-2 py-0.5 font-mono text-[9px] font-black text-white">
              WASPADA
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-3xl font-black text-amber-950 tracking-tight">
              3.480
            </span>
            <span className="font-mono text-xs text-amber-800 font-bold">anak (24.4%)</span>
          </div>
          <p className="mt-2 text-xs text-amber-700 font-mono">
            Otomatis masuk antrean Paket B
          </p>
        </div>

        <div className="rounded-[26px] border border-zinc-200/90 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">
              Porsi MBG Terdistribusi
            </span>
            <span className="rounded-md bg-[#7866FF] px-2 py-0.5 font-mono text-[9px] font-bold text-white">
              Hari Ini
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-3xl font-black text-zinc-950 tracking-tight">
              11.890
            </span>
            <span className="font-mono text-xs text-zinc-500 font-bold">kotak QR</span>
          </div>
          <p className="mt-2 text-xs text-zinc-500 font-mono">
            94.8% scan terima terkonfirmasi
          </p>
        </div>

        <div className="rounded-[26px] border border-zinc-200/90 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">
              Tingkat Pemulihan (RoN 90h)
            </span>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-800">
              Sukses
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-3xl font-black text-emerald-600 tracking-tight">
              81.6%
            </span>
            <span className="font-mono text-xs text-emerald-800 font-bold">keluar faltering</span>
          </div>
          <p className="mt-2 text-xs text-zinc-500 font-mono">
            ΔZ TB/U rata-rata +0.92 SD
          </p>
        </div>
      </div>

      {/* End-to-End Visual Workflow (4 Modules) */}
      <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div>
            <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
              Arsitektur Alur Kerja Terpadu NutriTrack (Semua FR)
            </h3>
            <p className="font-mono text-[11px] text-zinc-500">
              Klik modul di bawah ini untuk langsung mencoba fitur fungsionalnya
            </p>
          </div>
          <span className="font-mono text-xs text-emerald-700 font-bold">
            Zero Delay · Hari yang Sama
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Modul A */}
          <div
            onClick={() => onSelectTab("kms")}
            className="cursor-pointer rounded-2xl border-2 border-zinc-200 p-5 bg-gradient-to-br from-white to-zinc-50/50 hover:border-[#38E8F5] hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-pink-100 font-mono text-sm font-black text-[#F5436C]">
                A
              </span>
              <span className="font-mono text-[10px] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                Buka Modul →
              </span>
            </div>
            <h4 className="font-sans text-sm font-black text-zinc-950 uppercase leading-snug">
              Smart KMS & Deteksi Dini
            </h4>
            <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
              SKPL-F01 s/d F05: Timbang offline di balai desa, kalkulator Z-score Kemenkes, kurva KMS interaktif & early warning faltering.
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#F5436C]">
              <span>Kader & Orang Tua</span>
            </div>
          </div>

          {/* Card 2: Modul B */}
          <div
            onClick={() => onSelectTab("dapur")}
            className="cursor-pointer rounded-2xl border-2 border-zinc-200 p-5 bg-gradient-to-br from-white to-zinc-50/50 hover:border-[#7866FF] hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-purple-100 font-mono text-sm font-black text-[#7866FF]">
                B
              </span>
              <span className="font-mono text-[10px] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                Buka Modul →
              </span>
            </div>
            <h4 className="font-sans text-sm font-black text-zinc-950 uppercase leading-snug">
              Preskripsi MBG & Dapur SPPG
            </h4>
            <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
              SKPL-F06 s/d F09: Alokasi kuota otomatis Paket A vs B, kalkulasi kg bahan baku, katalog resep lokal, cetak QR 128-bit & rantai pasok Gapoktan.
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#7866FF]">
              <span>Pengelola Dapur SPPG</span>
            </div>
          </div>

          {/* Card 3: Modul C */}
          <div
            onClick={() => onSelectTab("konsumsi")}
            className="cursor-pointer rounded-2xl border-2 border-zinc-200 p-5 bg-gradient-to-br from-white to-zinc-50/50 hover:border-cyan-400 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-100 font-mono text-sm font-black text-[#0B8E97]">
                C
              </span>
              <span className="font-mono text-[10px] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                Buka Modul →
              </span>
            </div>
            <h4 className="font-sans text-sm font-black text-zinc-950 uppercase leading-snug">
              Scan QR & Daya Terima MBG
            </h4>
            <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
              SKPL-F10 s/d F11: Pemindaian kamera verifikasi penerimaan paket dan survei 1-klik daya terima anak (Habis / Sebagian / Tolak).
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#0B8E97]">
              <span>Kader & Orang Tua</span>
            </div>
          </div>

          {/* Card 4: Modul D */}
          <div
            onClick={() => onSelectTab("analitik")}
            className="cursor-pointer rounded-2xl border-2 border-zinc-200 p-5 bg-gradient-to-br from-white to-zinc-50/50 hover:border-emerald-400 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 font-mono text-sm font-black text-emerald-800">
                D
              </span>
              <span className="font-mono text-[10px] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                Buka Modul →
              </span>
            </div>
            <h4 className="font-sans text-sm font-black text-zinc-950 uppercase leading-snug">
              Heatmap & Return on Nutrition
            </h4>
            <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
              SKPL-F12 s/d F14: Heatmap 38 kab/kota Jatim, RoN Tracker siklus 30/60/90 hari, dan ekspor laporan resmi berkop Dinkes Jatim.
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-700">
              <span>Puskesmas & Dinkes Jatim</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

