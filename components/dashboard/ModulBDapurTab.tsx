"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESEP_MOCK, SUPPLY_LOGS_MOCK, type RecipeItem } from "@/lib/app-data";

export default function ModulBDapurTab() {
  const [activePortionB, setActivePortionB] = useState<number>(3480);
  const [activePortionA, setActivePortionA] = useState<number>(8410);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem>(RESEP_MOCK[0]);
  const [activeFilter, setActiveFilter] = useState<"semua" | "Paket B" | "Paket A">("semua");
  const [printQrModal, setPrintQrModal] = useState(false);
  const [showSupplyModal, setShowSupplyModal] = useState(false);

  const totalPortion = activePortionA + activePortionB;

  // Otomatisasi Kebutuhan Bahan Baku Harian (SKPL-F06)
  const kgTelur = Math.round((activePortionB * 55) / 1000); // 55g per porsi Paket B
  const kgLele = Math.round((activePortionB * 35) / 1000); // 35g per porsi Paket B
  const kgHatiAyam = Math.round((activePortionB * 25) / 1000); // 25g per porsi Paket B
  const kgBeras = Math.round(((activePortionA * 50) + (activePortionB * 45)) / 1000);
  const ikatKelor = Math.round((activePortionB * 15) / 250); // 1 ikat ~ 250g

  const filteredRecipes = RESEP_MOCK.filter((r) => {
    if (activeFilter === "semua") return true;
    return r.tipePaket.includes(activeFilter);
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Header Info & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7866FF] animate-pulse" />
            <h2 className="font-sans text-xl font-black uppercase tracking-tight text-zinc-950">
              Modul B: Preskripsi MBG Presisi & Dapur SPPG
            </h2>
          </div>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Dapur Mandiri SPPG · Konversi Data Timbangan Menjadi Kuota & Gramasi Masak
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPrintQrModal(true)}
            className="rounded-2xl border-2 border-[#18140B] bg-[#18140B] px-5 py-2.5 font-sans text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01M7 17h.01M17 7h.01M12 12h.01" />
            </svg>
            <span>Cetak Semua Label QR Kotak (128-bit)</span>
          </button>

          <button
            type="button"
            onClick={() => setShowSupplyModal(true)}
            className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 font-sans text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors"
          >
            Log Pembelian Peternak & Gapoktan
          </button>
        </div>
      </div>

      {/* 3 Metric Cards: Kuota Harian Otomatis (SKPL-F06) */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="relative overflow-hidden rounded-[26px] border border-zinc-200/90 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Total Porsi MBG Hari Ini
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-4xl font-black text-zinc-950 tracking-tight">
              {totalPortion.toLocaleString("id-ID")}
            </span>
            <span className="font-mono text-xs text-zinc-500 font-bold">porsi anak</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>Terdistribusi ke 28 Posyandu</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[26px] border-2 border-[#7866FF]/40 bg-gradient-to-br from-[#F3F0FF] to-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#7866FF]">
              Paket B · Intervensi Faltering
            </span>
            <span className="rounded-full bg-[#7866FF] px-2 py-0.5 font-mono text-[9px] font-black text-white">
              PRIORITAS
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-4xl font-black text-[#24135E] tracking-tight">
              {activePortionB.toLocaleString("id-ID")}
            </span>
            <span className="font-mono text-xs text-[#7866FF] font-bold">porsi (29.2%)</span>
          </div>
          <p className="mt-4 text-xs font-medium text-zinc-600">
            Ekstra Protein Hewani Booster: Telur Blitar, Lele Lamongan & Daun Kelor.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[26px] border border-zinc-200/90 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Paket A · Menu Reguler Balita
            </span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[9px] font-bold text-zinc-700">
              GIZI SEIMBANG
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-4xl font-black text-zinc-950 tracking-tight">
              {activePortionA.toLocaleString("id-ID")}
            </span>
            <span className="font-mono text-xs text-zinc-500 font-bold">porsi (70.8%)</span>
          </div>
          <p className="mt-4 text-xs font-medium text-zinc-600">
            Standar AKG harian balita sehat Jawa Timur berbasis bahan segar lokal.
          </p>
        </div>
      </div>

      {/* Kalkulator Kebutuhan Bahan Baku Harian Otomatis (SKPL-F06) */}
      <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-4">
          <div>
            <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
              Kalkulasi Kebutuhan Bahan Baku Harian Dapur
            </h3>
            <p className="font-mono text-[11px] text-zinc-500">
              Dihitung otomatis: Gramasi Resep Standar Gizi × Kuota Balita Hari Ini
            </p>
          </div>
          <span className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
            94% Rantai Pasok Petani & Peternak Lokal
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-800 block">
              Telur Ayam Blitar
            </span>
            <span className="font-sans text-2xl font-black text-amber-950 block mt-1">
              {kgTelur} kg
            </span>
            <span className="font-mono text-[10px] text-amber-700 mt-1 block">
              ~{activePortionB.toLocaleString("id-ID")} butir (Koperasi Blitar)
            </span>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-[#032D30] block">
              Fillet Lele Lamongan
            </span>
            <span className="font-sans text-2xl font-black text-[#032D30] block mt-1">
              {kgLele} kg
            </span>
            <span className="font-mono text-[10px] text-[#0A7680] mt-1 block">
              Segar dari Gapoktan Mina Makmur
            </span>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-rose-800 block">
              Hati Ayam Kampung
            </span>
            <span className="font-sans text-2xl font-black text-rose-950 block mt-1">
              {kgHatiAyam} kg
            </span>
            <span className="font-mono text-[10px] text-rose-700 mt-1 block">
              Zat Besi & Pencegah Anemia
            </span>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 block">
              Daun Kelor Organik
            </span>
            <span className="font-sans text-2xl font-black text-emerald-950 block mt-1">
              {ikatKelor} Ikat
            </span>
            <span className="font-mono text-[10px] text-emerald-700 mt-1 block">
              Petani Sayur Malang & Pasuruan
            </span>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-zinc-600 block">
              Beras Pulen Lokal
            </span>
            <span className="font-sans text-2xl font-black text-zinc-950 block mt-1">
              {kgBeras} kg
            </span>
            <span className="font-mono text-[10px] text-zinc-500 mt-1 block">
              Gapoktan Lumbung Padi
            </span>
          </div>
        </div>
      </div>

      {/* Katalog Resep MPASI Lokal Jatim (SKPL-F07) */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Daftar Resep Filterable */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
              Katalog Resep MPASI Lokal
            </h3>
            {/* Filter Tabs */}
            <div className="flex rounded-xl border border-zinc-200 bg-white p-1 text-[11px] font-bold">
              {(["semua", "Paket B", "Paket A"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-2.5 py-1 capitalize transition-colors ${
                    activeFilter === filter ? "bg-[#18140B] text-white" : "text-zinc-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredRecipes.map((r) => {
              const active = selectedRecipe.id === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => setSelectedRecipe(r)}
                  className={`cursor-pointer rounded-2xl border p-4.5 transition-all ${
                    active
                      ? "border-[#7866FF] bg-[#F3F0FF]/50 shadow-md ring-2 ring-[#7866FF]/20"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`rounded-md px-2 py-0.5 font-mono text-[9px] font-black uppercase ${
                        r.tipePaket.includes("Paket B")
                          ? "bg-[#7866FF] text-white"
                          : "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      {r.tipePaket}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-zinc-400">
                      {r.energiKkal} kkal · {r.proteinGram}g protein
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-black text-zinc-950 leading-snug">
                    {r.nama}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Komoditas: {r.komoditasUtama}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Resep Aktif */}
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-6">
            <div className="border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-md bg-[#7866FF] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                  {selectedRecipe.tipePaket}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 font-bold">
                  ID: {selectedRecipe.id}
                </span>
              </div>
              <h3 className="font-sans text-xl font-black text-zinc-950 leading-snug">
                {selectedRecipe.nama}
              </h3>
              <p className="mt-1 font-mono text-xs text-emerald-700 font-semibold">
                Sumber Pasokan: {selectedRecipe.asalKomoditas}
              </p>
            </div>

            {/* Nutrisi Breakdown Ringkas */}
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-500 block">Kalori</span>
                <span className="font-sans text-lg font-black text-zinc-950 block mt-0.5">{selectedRecipe.energiKkal}</span>
                <span className="font-mono text-[9px] text-zinc-400">kkal</span>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-3">
                <span className="font-mono text-[10px] uppercase font-bold text-[#7866FF] block">Protein</span>
                <span className="font-sans text-lg font-black text-[#24135E] block mt-0.5">{selectedRecipe.proteinGram}</span>
                <span className="font-mono text-[9px] text-[#7866FF]">gram</span>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-800 block">Lemak Baik</span>
                <span className="font-sans text-lg font-black text-amber-950 block mt-0.5">{selectedRecipe.lemakGram}</span>
                <span className="font-mono text-[9px] text-amber-700">gram</span>
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3">
                <span className="font-mono text-[10px] uppercase font-bold text-[#032D30] block">Karbohidrat</span>
                <span className="font-sans text-lg font-black text-[#032D30] block mt-0.5">{selectedRecipe.karboGram}</span>
                <span className="font-mono text-[9px] text-[#0A7680]">gram</span>
              </div>
            </div>

            {/* Gramasi Bahan per Porsi */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase text-zinc-500 mb-2.5">
                Gramasi Bahan Baku & Skala Masak (1 Porsi vs 100 Porsi)
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-zinc-100">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="bg-zinc-50 border-b border-zinc-100 font-mono text-[10px] uppercase text-zinc-500">
                    <tr>
                      <th className="py-2.5 px-3.5">Nama Bahan</th>
                      <th className="py-2.5 px-3.5">Per 1 Porsi</th>
                      <th className="py-2.5 px-3.5">Kebutuhan 100 Porsi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 font-medium">
                    {selectedRecipe.gramasiBahan.map((b, i) => (
                      <tr key={i} className="hover:bg-zinc-50/50">
                        <td className="py-2.5 px-3.5 font-bold text-zinc-900">{b.bahan}</td>
                        <td className="py-2.5 px-3.5 font-mono">{b.gram} gram</td>
                        <td className="py-2.5 px-3.5 font-mono font-bold text-[#7866FF]">{b.porsi100}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Langkah Masak */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase text-zinc-500 mb-2.5">
                Prosedur Pengolahan Higienis Dapur
              </h4>
              <ol className="space-y-2 text-xs font-medium text-zinc-700">
                {selectedRecipe.langkahMasak.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#18140B] text-[10px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Cetak Label QR Stiker 128-bit (SKPL-F08) */}
      <AnimatePresence>
        {printQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-zinc-200 bg-white p-7 shadow-2xl space-y-6 custom-scrollbar"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-black uppercase text-zinc-950">
                    Pencetak Label QR Kotak Makan (128-bit)
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    SKPL-F08 · Token Terenkripsi per Wadah, Melindungi Data Pribadi Anak (UU PDP)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPrintQrModal(false)}
                  className="rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Sample QR Sticker Sheet Preview */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { token: "NT-JTM-9821-B4A1-14", inisial: "AF (14 bln)", pack: "Paket B (Protein Booster)", pos: "Posyandu Mawar 01" },
                  { token: "NT-JTM-9821-B4A2-18", inisial: "SNA (18 bln)", pack: "Paket A (Reguler)", pos: "Posyandu Mawar 01" },
                  { token: "NT-JTM-9821-B4A3-24", inisial: "BS (24 bln)", pack: "Paket B (Protein Booster)", pos: "Posyandu Melati 03" },
                  { token: "NT-JTM-9821-B4A4-20", inisial: "KP (20 bln)", pack: "Paket A (Reguler)", pos: "Posyandu Anggrek 02" },
                ].map((stiker, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border-2 border-dashed border-zinc-300 p-4 bg-zinc-50/50 flex items-center gap-4"
                  >
                    {/* Simulated High-Res QR Graphic */}
                    <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-white border border-zinc-200 p-1.5 shadow-sm">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        {/* Outer Frame & Targets */}
                        <rect x="5" y="5" width="30" height="30" fill="none" stroke="#18140B" strokeWidth="6" rx="3" />
                        <rect x="14" y="14" width="12" height="12" fill="#18140B" />
                        <rect x="65" y="5" width="30" height="30" fill="none" stroke="#18140B" strokeWidth="6" rx="3" />
                        <rect x="74" y="14" width="12" height="12" fill="#18140B" />
                        <rect x="5" y="65" width="30" height="30" fill="none" stroke="#18140B" strokeWidth="6" rx="3" />
                        <rect x="14" y="74" width="12" height="12" fill="#18140B" />
                        {/* Matrix Bits */}
                        <circle cx="50" cy="20" r="4" fill="#38E8F5" />
                        <circle cx="50" cy="50" r="5" fill="#7866FF" />
                        <circle cx="70" cy="50" r="4" fill="#18140B" />
                        <circle cx="35" cy="50" r="3" fill="#18140B" />
                        <circle cx="50" cy="80" r="4" fill="#18140B" />
                        <circle cx="80" cy="80" r="4" fill="#38E8F5" />
                      </svg>
                    </div>

                    <div className="space-y-1 text-xs">
                      <span className="font-mono text-[9px] font-bold text-zinc-400 block">
                        KOTAK MBG #{i + 1}
                      </span>
                      <h5 className="font-sans font-black text-zinc-950 text-sm">
                        {stiker.inisial}
                      </h5>
                      <span className="inline-block rounded-md bg-[#7866FF] px-2 py-0.5 text-[9px] font-black text-white">
                        {stiker.pack}
                      </span>
                      <p className="font-mono text-[10px] text-zinc-500">{stiker.pos}</p>
                      <p className="font-mono text-[9px] text-zinc-400 truncate max-w-[140px]">
                        {stiker.token}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Total 3.480 Stiker Siap Cetak (A4 Label Sheet 4x6)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    alert("Perintah cetak dikirim ke printer thermal / stiker dapur SPPG!");
                    setPrintQrModal(false);
                  }}
                  className="rounded-full bg-[#18140B] px-6 py-3 font-sans text-xs font-black text-white shadow-lg hover:scale-105 transition-transform"
                >
                  🖨️ Cetak Semua Stiker QR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Log Pembelian Peternak / Gapoktan (SKPL-F09) */}
      <AnimatePresence>
        {showSupplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-zinc-200 bg-white p-7 shadow-2xl space-y-6 custom-scrollbar"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-black uppercase text-zinc-950">
                    Log Pembelian Komoditas Peternak & Gapoktan Lokal
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    SKPL-F09 · Transparansi Rantai Pasok Lokal Tanpa Perantara
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSupplyModal(false)}
                  className="rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-zinc-200">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="bg-zinc-50 border-b border-zinc-200 font-mono text-[10px] uppercase text-zinc-600">
                    <tr>
                      <th className="py-3 px-4">No. Transaksi</th>
                      <th className="py-3 px-4">Tanggal</th>
                      <th className="py-3 px-4">Mitra Pemasok</th>
                      <th className="py-3 px-4">Komoditas Pangan</th>
                      <th className="py-3 px-4">Volume</th>
                      <th className="py-3 px-4">Total Biaya</th>
                      <th className="py-3 px-4">Status Mutu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 font-medium">
                    {SUPPLY_LOGS_MOCK.map((s) => (
                      <tr key={s.id} className="hover:bg-zinc-50/50">
                        <td className="py-3 px-4 font-mono font-bold text-zinc-900">{s.id}</td>
                        <td className="py-3 px-4 font-mono text-zinc-500">{s.tanggal}</td>
                        <td className="py-3 px-4 font-bold text-zinc-900">
                          {s.pemasok}
                          <span className="block font-mono text-[10px] text-zinc-400 font-normal">
                            {s.lokasi}
                          </span>
                        </td>
                        <td className="py-3 px-4">{s.komoditas}</td>
                        <td className="py-3 px-4 font-mono font-bold">{s.volumeKg} kg</td>
                        <td className="py-3 px-4 font-mono font-black text-emerald-700">
                          Rp {s.hargaTotalRp.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 px-4">
                          <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                            {s.statusMutu}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-100 pt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Total Serapan Anggaran Pangan Lokal: Rp 20.470.000 / Siklus
                </span>
                <button
                  type="button"
                  onClick={() => setShowSupplyModal(false)}
                  className="rounded-full bg-[#18140B] px-5 py-2.5 font-sans text-xs font-black text-white hover:scale-105 transition-transform"
                >
                  Tutup Log
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

