"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REGIONS_JATIM_DATA, RON_COHORT_DATA, type JatimRegionData } from "@/lib/app-data";

export default function ModulDAnalitikTab() {
  const [selectedRegion, setSelectedRegion] = useState<JatimRegionData>(REGIONS_JATIM_DATA[0]);
  const [filterCategory, setFilterCategory] = useState<"semua" | "merah" | "kuning" | "hijau">("semua");
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "xlsx">("pdf");
  const [isExporting, setIsExporting] = useState(false);

  const filteredRegions = REGIONS_JATIM_DATA.filter((r) => {
    if (filterCategory === "semua") return true;
    if (filterCategory === "merah") return r.kategori.includes("Merah");
    if (filterCategory === "kuning") return r.kategori.includes("Kuning");
    if (filterCategory === "hijau") return r.kategori.includes("Hijau");
    return true;
  });

  const handleSimulateExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setShowExportModal(false);
      alert(`Laporan Audit NutriTrack Jatim (${exportFormat.toUpperCase()}) berhasil digenerate dan siap diunduh!`);
    }, 1500);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Info & Export Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38E8F5] animate-pulse" />
            <h2 className="font-sans text-xl font-black uppercase tracking-tight text-zinc-950">
              Modul D: Analitik Dampak & Dasbor Pimpinan Jatim
            </h2>
          </div>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Dinas Kesehatan Provinsi Jawa Timur · TPID & Bappeda · Evaluasi Siklus 30/60/90 Hari
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowExportModal(true)}
          className="rounded-2xl bg-[#18140B] px-5 py-2.5 font-sans text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#38E8F5]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Ekspor Laporan Audit (PDF & XLSX)</span>
        </button>
      </div>

      {/* SKPL-F12: Heatmap Geospasial Stunting Jawa Timur */}
      <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4">
          <div>
            <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
              Heatmap Geospasial Stunting Jawa Timur (38 Kab/Kota)
            </h3>
            <p className="font-mono text-[11px] text-zinc-500">
              SKPL-F12 · Pemetaan Prevalensi Stunting & Alokasi Kuota Dapur SPPG
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "semua", label: "Semua Wilayah" },
              { key: "merah", label: "Prioritas Merah (>20%)" },
              { key: "kuning", label: "Waspada (14-20%)" },
              { key: "hijau", label: "Terkendali (<14%)" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilterCategory(f.key as any)}
                className={`rounded-xl px-3 py-1 font-mono text-[11px] font-bold transition-colors ${
                  filterCategory === f.key
                    ? "bg-[#18140B] text-white shadow-sm"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Heatmap Grid Cards (Interactive) */}
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRegions.map((region) => {
            const active = selectedRegion.nama === region.nama;
            const isRed = region.prevalensiPersen >= 20;
            const isYellow = region.prevalensiPersen >= 14 && region.prevalensiPersen < 20;

            return (
              <div
                key={region.nama}
                onClick={() => setSelectedRegion(region)}
                className={`cursor-pointer rounded-2xl border p-4 transition-all hover:scale-[1.02] ${
                  active
                    ? "border-[#38E8F5] bg-[#EBFBFC]/60 ring-2 ring-[#38E8F5]/30 shadow-md"
                    : isRed
                    ? "border-rose-200 bg-rose-50/40 hover:bg-rose-50/70"
                    : isYellow
                    ? "border-amber-200 bg-amber-50/40 hover:bg-amber-50/70"
                    : "border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/70"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-sans font-black text-sm text-zinc-950">
                    {region.nama}
                  </span>
                  <span
                    className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] font-black ${
                      isRed ? "bg-rose-600 text-white" : isYellow ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                    }`}
                  >
                    {region.prevalensiPersen}%
                  </span>
                </div>
                <div className="text-[11px] font-mono text-zinc-500 space-y-0.5">
                  <div>Balita: {region.totalBalita.toLocaleString("id-ID")}</div>
                  <div>Paket B: <strong className="text-zinc-900">{region.porsiPaketB.toLocaleString("id-ID")} porsi</strong></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Panel for Selected Region */}
        {selectedRegion && (
          <div className="rounded-2xl border-2 border-[#18140B] bg-zinc-50 p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3">
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase">
                  DETAIL KABUPATEN / KOTA PILIHAN
                </span>
                <h4 className="font-sans text-xl font-black text-zinc-950">
                  {selectedRegion.nama}
                </h4>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full font-mono text-xs font-black ${
                selectedRegion.prevalensiPersen >= 20 ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
              }`}>
                Prevalensi Stunting: {selectedRegion.prevalensiPersen}%
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-4 pt-1 font-mono text-xs">
              <div className="bg-white p-3 rounded-xl border border-zinc-200">
                <span className="text-zinc-500 block text-[10px]">Total Balita Terdata</span>
                <span className="text-lg font-black text-zinc-950">{selectedRegion.totalBalita.toLocaleString("id-ID")}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200">
                <span className="text-zinc-500 block text-[10px]">Balita Faltering / Waspada</span>
                <span className="text-lg font-black text-rose-600">{selectedRegion.balitaFaltering.toLocaleString("id-ID")}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200">
                <span className="text-zinc-500 block text-[10px]">Alokasi Kuota Paket B</span>
                <span className="text-lg font-black text-[#7866FF]">{selectedRegion.porsiPaketB.toLocaleString("id-ID")} porsi</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200">
                <span className="text-zinc-500 block text-[10px]">Status Program SPPG</span>
                <span className="text-xs font-black text-emerald-700">{selectedRegion.statusProgram}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SKPL-F13: Return on Nutrition (RoN) Tracker */}
      <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-zinc-100 pb-4">
          <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
            Return on Nutrition (RoN) Tracker · Siklus 30, 60, dan 90 Hari
          </h3>
          <p className="font-mono text-[11px] text-zinc-500">
            SKPL-F13 · Koreksi Kenaikan Z-Score vs Konsumsi Paket MBG Presisi Terverifikasi
          </p>
        </div>

        {/* 3 Kohort Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {RON_COHORT_DATA.map((cohort, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border-2 border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#18140B] px-2.5 py-0.5 font-mono text-[10px] font-black uppercase text-white">
                  {cohort.siklus}
                </span>
                <span className="font-mono text-xs font-bold text-emerald-700">
                  {cohort.statusAudit}
                </span>
              </div>

              <div className="pt-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold block">
                  Kenaikan Z-Score Rata-Rata (ΔZ)
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-sans text-3xl font-black text-emerald-600 tracking-tight">
                    +{cohort.deltaZTBU} SD
                  </span>
                  <span className="font-mono text-xs text-zinc-500 font-bold">Tinggi Badan</span>
                </div>
                <div className="font-mono text-xs text-zinc-600 mt-1">
                  Berat Badan: <strong>+{cohort.deltaZBBU} SD</strong>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-3 space-y-1 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Balita Kohort:</span>
                  <span className="font-bold text-zinc-900">{cohort.balitaKohort.toLocaleString("id-ID")} anak</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Tingkat Pemulihan:</span>
                  <span className="font-bold text-emerald-600">{cohort.recoveryRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Kepatuhan Konsumsi:</span>
                  <span className="font-bold text-[#7866FF]">{cohort.porsiDihabiskan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs text-zinc-600 leading-relaxed">
          <strong>Catatan Metodologi:</strong> Nilai Return on Nutrition (RoN) dihitung dari korelasi peningkatan Z-score anak penerima Paket B berurutan dengan tingkat konsumsi &ge; 90% porsi habis. Laporan siap diaudit dan diintegrasikan ke SIPD Pemprov Jawa Timur.
        </div>
      </div>

      {/* Modal Ekspor Laporan Audit Resmi (SKPL-F14) */}
      <AnimatePresence>
        {showExportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-zinc-200 bg-white p-7 shadow-2xl space-y-6 custom-scrollbar"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-black uppercase text-zinc-950">
                    Ekspor Laporan Audit NutriTrack Jatim
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    SKPL-F14 · Dokumen Resmi Rekapitulasi MBG & Prevalensi Stunting
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowExportModal(false)}
                  className="rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Official Letterhead Sample Preview */}
              <div className="rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-5 space-y-3 text-center">
                <div className="text-xs font-mono font-bold uppercase text-zinc-800">
                  PEMERINTAH PROVINSI JAWA TIMUR<br />
                  DINAS KESEHATAN & TIM PERCEPATAN PENURUNAN STUNTING (TPPS)
                </div>
                <div className="h-0.5 w-full bg-zinc-300" />
                <h5 className="font-sans text-sm font-black text-zinc-900 uppercase">
                  LAPORAN AUDIT PREVALENSI STUNTING & EFISIENSI MBG LOKAL TAHUN 2026
                </h5>
                <p className="font-mono text-[10px] text-zinc-500">
                  Cakupan: 38 Kabupaten/Kota · 14.250 Balita Terpantau · Rantai Pasok Gapoktan
                </p>
              </div>

              {/* Format Selection */}
              <div>
                <span className="block font-mono text-xs font-bold uppercase text-zinc-600 mb-2">
                  Pilih Format Berkas:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setExportFormat("pdf")}
                    className={`rounded-2xl border-2 p-3 text-center transition-all ${
                      exportFormat === "pdf"
                        ? "border-[#18140B] bg-zinc-100 font-black shadow-sm"
                        : "border-zinc-200 bg-white"
                    }`}
                  >
                    <span className="text-2xl block mb-1">📄</span>
                    <span className="font-sans text-xs font-black">PDF Berkop Resmi</span>
                    <span className="font-mono text-[10px] text-zinc-500 block">Siap Cetak & Presentasi</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setExportFormat("xlsx")}
                    className={`rounded-2xl border-2 p-3 text-center transition-all ${
                      exportFormat === "xlsx"
                        ? "border-emerald-600 bg-emerald-50 font-black shadow-sm"
                        : "border-zinc-200 bg-white"
                    }`}
                  >
                    <span className="text-2xl block mb-1">📊</span>
                    <span className="font-sans text-xs font-black text-emerald-950">Excel Data Mentah</span>
                    <span className="font-mono text-[10px] text-emerald-700 block">Audit BPKP & TPID</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="font-mono text-[11px] text-zinc-400">
                  Data otomatis di-anonymize sesuai ketentuan UU No. 27/2022 (PDP).
                </span>
                <button
                  type="button"
                  disabled={isExporting}
                  onClick={handleSimulateExport}
                  className="rounded-full bg-[#18140B] px-6 py-2.5 font-sans text-xs font-black text-white shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isExporting ? "Membuat Berkas..." : `Unduh ${exportFormat.toUpperCase()}`}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

