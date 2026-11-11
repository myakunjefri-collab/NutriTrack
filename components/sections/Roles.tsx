"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { roles, type RoleKey } from "@/lib/demo-data";

export default function Roles() {
  const [active, setActive] = useState<RoleKey>("kader");
  const current = roles.find((r) => r.key === active)!;

  return (
    <section id="peran" className="relative bg-white py-28 text-zinc-950 border-b border-zinc-200/80">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1 text-xs font-mono font-bold text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-[#7866FF]" /> 05 / MULTI-PLATFORM RBAC
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 uppercase">
              Satu sumber data. <br />
              Empat peran yang <span className="text-[#7866FF]">terkoneksi.</span>
            </h2>
          </div>
          <span className="token-chip bg-zinc-50 text-zinc-600 border-zinc-200 shadow-sm">
            Row-Level Security (RLS) · Standar Keamanan Data
          </span>
        </div>

        {/* Studio Platform Switcher Pills */}
        <div className="mt-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Pilih peran platform">
          {roles.map((r, i) => {
            const isSel = active === r.key;
            return (
              <button
                key={r.key}
                role="tab"
                aria-selected={isSel}
                onClick={() => setActive(r.key)}
                className={clsx(
                  "flex items-center gap-2.5 rounded-full px-5 py-2.5 font-sans text-sm font-bold transition-all border",
                  isSel
                    ? "bg-[#7866FF] text-white border-[#7866FF] shadow-md"
                    : "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-50"
                )}
              >
                <span className="font-mono text-xs opacity-70">0{i + 1}</span>
                <span>{r.title}</span>
                <span className="rounded-full bg-black/10 px-2 py-0.5 font-mono text-[10px] uppercase">
                  {r.device}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Stage: Device Mockup Window */}
        <div className="mt-10 rounded-3xl border border-zinc-200/90 bg-[#F7F8F8] p-6 md:p-10 shadow-lg">
          
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
            <div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block font-bold">
                Simulasi Antarmuka Platform
              </span>
              <h3 className="font-sans text-xl font-black text-zinc-950 mt-0.5">
                {current.title} — TAMPILAN {current.device.toUpperCase()}
              </h3>
            </div>
            <p className="font-sans text-xs text-zinc-600 font-medium max-w-md">
              {current.body}
            </p>
          </div>

          <div className="flex justify-center py-4">
            <AnimatePresence mode="wait">
              {active === "kader" && <MockupKader key="kader" />}
              {active === "dapur" && <MockupDapur key="dapur" />}
              {active === "puskesmas" && <MockupPuskesmas key="puskesmas" />}
              {active === "dinkes" && <MockupDinkes key="dinkes" />}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

function MockupKader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-sm rounded-[2.5rem] border-4 border-zinc-300 bg-white p-3 shadow-2xl"
    >
      <div className="overflow-hidden rounded-[2rem] bg-[#F7F8F8] p-4 text-zinc-950 font-sans border border-zinc-200">
        
        {/* Phone Top Notch */}
        <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-zinc-300" />

        {/* App Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2.5 text-xs">
          <div>
            <span className="font-mono text-[9px] text-[#7866FF] font-bold block">KADER PWA</span>
            <span className="font-bold text-zinc-950">Posyandu Melati 03</span>
          </div>
          <span className="token-chip bg-emerald-100 text-emerald-800 border-emerald-300 font-bold">
            ● Offline Ready
          </span>
        </div>

        {/* Child Card */}
        <div className="mt-3 rounded-xl bg-white p-3 border border-zinc-200 text-xs shadow-sm">
          <div className="flex justify-between items-baseline font-bold text-zinc-950">
            <span>Ananda Arya W.</span>
            <span className="font-mono text-[10px] text-zinc-500">L · 14 Bulan</span>
          </div>
          <span className="font-mono text-[9px] text-zinc-400 block mt-0.5">NIK: 351408**** · Sukorejo</span>
        </div>

        {/* Inputs */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono">
          <div className="rounded-xl bg-white p-2 border border-zinc-200 shadow-sm">
            <span className="text-[9px] text-zinc-500 block">BB</span>
            <span className="text-sm font-bold text-[#FF764C]">8.2 kg</span>
          </div>
          <div className="rounded-xl bg-white p-2 border border-zinc-200 shadow-sm">
            <span className="text-[9px] text-zinc-500 block">TB</span>
            <span className="text-sm font-bold text-zinc-950">73.5 cm</span>
          </div>
          <div className="rounded-xl bg-white p-2 border border-zinc-200 shadow-sm">
            <span className="text-[9px] text-zinc-500 block">L.Kepala</span>
            <span className="text-sm font-bold text-zinc-950">45.0 cm</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-3 w-full rounded-xl bg-[#38E8F5] py-2.5 font-sans text-xs font-bold text-[#032D30] shadow-sm">
          HITUNG STATUS GIZI
        </button>

        {/* Warning Banner */}
        <div className="mt-3 rounded-xl bg-[#FEFCE8] border border-[#FEF08A] p-2.5 text-[11px] font-bold text-[#713F12]">
          [!] STATUS: GROWTH FALTERING (WASPADA)
        </div>

        <div className="mt-2 text-[10px] text-zinc-600 space-y-1">
          <div>Z-Score TB/U: <span className="font-bold text-[#FF764C]">-2.1 SD (Risiko Stunting)</span></div>
          <div className="rounded-lg bg-white p-2 border border-zinc-200 text-zinc-800 shadow-sm">
            <span className="font-bold text-[#7866FF]">Rekomendasi Paket B:</span> Ekstra Protein (Porsi Dobel Telur Blitar + Puree Lele).
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-bold font-sans">
          <button className="rounded-xl bg-[#FF764C] py-2 text-white shadow-sm">
            SCAN TERIMA MBG
          </button>
          <button className="rounded-xl bg-white py-2 text-zinc-800 border border-zinc-200 shadow-sm">
            SIMPAN DATA
          </button>
        </div>

        <span className="font-mono text-[9px] text-zinc-400 block text-center mt-3">
          Antarmuka Kader Posyandu
        </span>
      </div>
    </motion.div>
  );
}

function MockupDapur() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-xl rounded-3xl border border-zinc-300 bg-white p-6 shadow-2xl"
    >
      <div className="rounded-2xl bg-[#F7F8F8] p-6 border border-zinc-200 font-sans text-zinc-950">
        
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <span className="font-mono text-xs text-[#16A34A] font-bold block">DAPUR MBG / SENTRA PELAYANAN GIZI</span>
            <h4 className="text-lg font-bold">Dapur Pelayanan MBG Kec. Sukorejo</h4>
          </div>
          <span className="token-chip bg-emerald-100 text-emerald-800 border-emerald-300 font-bold">
            ● Sinkron Real-Time
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-white p-3 border border-zinc-200 shadow-sm">
            <span className="font-mono text-[10px] text-zinc-500 block font-bold">Total Porsi</span>
            <span className="font-sans text-2xl font-black text-zinc-950">120</span>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3 border border-emerald-200 shadow-sm">
            <span className="font-mono text-[10px] text-emerald-700 block font-bold">Paket A (Reguler)</span>
            <span className="font-sans text-2xl font-black text-emerald-700">85</span>
          </div>
          <div className="rounded-2xl bg-orange-50 p-3 border border-orange-200 shadow-sm">
            <span className="font-mono text-[10px] text-[#FF764C] block font-bold">Paket B (Intervensi)</span>
            <span className="font-sans text-2xl font-black text-[#FF764C]">35</span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white p-4 border border-zinc-200 shadow-sm">
          <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
            <span className="text-xs font-bold text-zinc-900">Kebutuhan Bahan Baku Lokal Hari Ini:</span>
            <span className="token-chip bg-zinc-50 text-zinc-600 border-zinc-200 text-[10px] font-bold">35 Porsi Khusus</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs font-mono text-zinc-700">
            <li className="flex justify-between">
              <span className="font-bold text-zinc-900">Telur Ayam Blitar (7.5 kg)</span>
              <span className="text-zinc-500">Koperasi Peternak Blitar Jaya</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-zinc-900">Lele Segar Fillet (4.0 kg)</span>
              <span className="text-zinc-500">Gapoktan Mina Makmur Lamongan</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-zinc-900">Hati Ayam (2.5 kg) & Kelor (1.5 kg)</span>
              <span className="text-zinc-500">Kebun Sayur Warga Sukorejo</span>
            </li>
          </ul>
        </div>

        <div className="mt-5 flex gap-3 text-xs font-bold">
          <button className="flex-1 rounded-xl bg-zinc-950 py-3 text-white shadow-sm">
            CETAK DAFTAR MASAK
          </button>
          <button className="flex-1 rounded-xl bg-[#38E8F5] py-3 text-[#032D30] shadow-sm">
            CETAK SEMUA LABEL QR KOTAK
          </button>
        </div>

        <span className="font-mono text-[9px] text-zinc-400 block text-right mt-3">
          Antarmuka Dapur SPPG
        </span>
      </div>
    </motion.div>
  );
}

function MockupPuskesmas() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-xl rounded-3xl border border-zinc-300 bg-white p-6 shadow-2xl"
    >
      <div className="rounded-2xl bg-[#F7F8F8] p-6 border border-zinc-200 font-sans text-zinc-950">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <span className="font-mono text-xs text-[#7866FF] font-bold block">PETUGAS GIZI PUSKESMAS</span>
            <h4 className="text-lg font-bold">Puskesmas Wilayah Sukorejo</h4>
          </div>
          <span className="token-chip bg-red-100 text-red-700 border-red-300 font-bold">
            ● 3 Rujukan Zona Merah
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-white p-3 border border-zinc-200 shadow-sm">
            <span className="font-mono text-[10px] text-zinc-500 block font-bold">Balita Terdata</span>
            <span className="font-sans text-2xl font-black text-zinc-950">1.420</span>
          </div>
          <div className="rounded-2xl bg-white p-3 border border-zinc-200 shadow-sm">
            <span className="font-mono text-[10px] text-zinc-500 block font-bold">Prevalensi</span>
            <span className="font-sans text-2xl font-black text-amber-600">14.2%</span>
          </div>
          <div className="rounded-2xl bg-white p-3 border border-zinc-200 shadow-sm">
            <span className="font-mono text-[10px] text-zinc-500 block font-bold">Paket B Aktif</span>
            <span className="font-sans text-2xl font-black text-[#FF764C]">84</span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white p-4 border border-zinc-200 shadow-sm">
          <span className="text-xs font-bold text-zinc-900 block mb-2">Antrean Validasi Terapi Gizi Balita:</span>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-zinc-50 p-2.5 border border-zinc-200">
              <div>
                <span className="font-bold text-zinc-950">Bima Sakti (18 bln)</span>
                <span className="font-mono text-[10px] text-red-600 ml-2 font-bold">TB/U -2.8 SD</span>
              </div>
              <button className="rounded-lg bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 text-[10px] font-bold">
                Validasi
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-zinc-50 p-2.5 border border-zinc-200">
              <div>
                <span className="font-bold text-zinc-950">Siti Rahma (11 bln)</span>
                <span className="font-mono text-[10px] text-red-600 ml-2 font-bold">TB/U -2.4 SD</span>
              </div>
              <button className="rounded-lg bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 text-[10px] font-bold">
                Validasi
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3 text-xs font-bold">
          <button className="flex-1 rounded-xl bg-[#7866FF] py-3 text-white shadow-sm">
            VALIDASI RUJUKAN RESEP
          </button>
          <button className="rounded-xl bg-white px-5 py-3 text-zinc-800 border border-zinc-200 shadow-sm">
            Ekspor Rekap
          </button>
        </div>

        <span className="font-mono text-[9px] text-zinc-400 block text-right mt-3">
          Antarmuka Puskesmas Pembina
        </span>
      </div>
    </motion.div>
  );
}

function MockupDinkes() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-xl rounded-3xl border border-zinc-300 bg-white p-6 shadow-2xl"
    >
      <div className="rounded-2xl bg-[#F7F8F8] p-6 border border-zinc-200 font-sans text-zinc-950">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <span className="font-mono text-xs text-[#7866FF] font-bold block">DASBOR EKSEKUTIF PEMERINTAH DAERAH</span>
            <h4 className="text-lg font-bold">Monitoring Stunting & Evaluasi MBG</h4>
          </div>
          <span className="token-chip bg-cyan-100 text-[#032D30] border-cyan-300 font-bold">
            ● Integrasi Lintas Wilayah
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-4 border border-zinc-200 shadow-sm">
            <span className="font-mono text-[10px] text-zinc-500 block mb-2 font-bold">Sebaran Kasus Prioritas</span>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between">
                <span>Bangkalan:</span>
                <span className="font-bold text-[#FF764C]">19.8%</span>
              </div>
              <div className="flex justify-between">
                <span>Probolinggo:</span>
                <span className="font-bold text-[#FF764C]">18.4%</span>
              </div>
              <div className="flex justify-between">
                <span>Bondowoso:</span>
                <span className="font-bold text-[#FF764C]">17.6%</span>
              </div>
              <div className="flex justify-between">
                <span>Jember:</span>
                <span className="font-bold text-[#FF764C]">16.9%</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="rounded-xl bg-white p-2.5 border border-zinc-200 text-center shadow-sm">
              <span className="font-mono text-[9px] text-zinc-500 block font-bold">Total Balita</span>
              <span className="font-sans text-xl font-black text-zinc-950">14.250</span>
            </div>
            <div className="rounded-xl bg-white p-2.5 border border-zinc-200 text-center shadow-sm">
              <span className="font-mono text-[9px] text-zinc-500 block font-bold">Kenaikan Z-Score (60d)</span>
              <span className="font-sans text-xl font-black text-emerald-600">+0.6 SD</span>
            </div>
            <div className="rounded-xl bg-white p-2.5 border border-zinc-200 text-center shadow-sm">
              <span className="font-mono text-[9px] text-zinc-500 block font-bold">Angka Pemulihan</span>
              <span className="font-sans text-xl font-black text-[#7866FF]">81.4%</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3 text-xs font-bold">
          <button className="flex-1 rounded-xl bg-zinc-950 py-3 text-white shadow-sm">
            UNDUH LAPORAN AUDIT (PDF / XLSX)
          </button>
          <button className="rounded-xl bg-white px-4 py-3 text-zinc-800 border border-zinc-200 shadow-sm">
            Evaluasi Pangan Lokal
          </button>
        </div>

        <span className="font-mono text-[9px] text-zinc-400 block text-right mt-3">
          Antarmuka Dasbor Eksekutif
        </span>
      </div>
    </motion.div>
  );
}
