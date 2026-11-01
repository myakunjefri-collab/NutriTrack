"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DISTRIBUTIONS_MOCK, type DistributionItem } from "@/lib/app-data";

export default function ModulCKonsumsiTab() {
  const [distributions, setDistributions] = useState<DistributionItem[]>(DISTRIBUTIONS_MOCK);
  const [manualCode, setManualCode] = useState("");
  const [scanningActive, setScanningActive] = useState(false);
  const [scannedItem, setScannedItem] = useState<DistributionItem | null>(DISTRIBUTIONS_MOCK[0]);
  const [logSuccessMessage, setLogSuccessMessage] = useState("");

  const handleSimulateScan = () => {
    setScanningActive(true);
    setTimeout(() => {
      setScanningActive(false);
      // Pick random package or target package
      const target = distributions[0];
      setScannedItem(target);
    }, 1800);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode.trim()) return;
    const found = distributions.find((d) => d.qrToken.toLowerCase().includes(manualCode.toLowerCase()));
    if (found) {
      setScannedItem(found);
    } else {
      alert("Kode token QR tidak ditemukan atau belum aktif.");
    }
  };

  const handleSetDayaTerima = (choice: "Habis (100%)" | "Tersisa Sebagian (50%)" | "Tidak Termakan (0%)") => {
    if (!scannedItem) return;

    const updated = distributions.map((d) => {
      if (d.qrToken === scannedItem.qrToken) {
        return {
          ...d,
          status: "Diterima" as const,
          dayaTerima: choice,
          verifiedAt: "Baru saja (via App)",
          verifiedBy: "Kader Posyandu",
        };
      }
      return d;
    });

    setDistributions(updated);
    setScannedItem((prev) => prev ? { ...prev, status: "Diterima", dayaTerima: choice } : null);
    setLogSuccessMessage(`Daya terima paket untuk ${scannedItem.namaAnak} berhasil disimpan: ${choice}`);
    setTimeout(() => setLogSuccessMessage(""), 4500);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38E8F5] animate-pulse" />
            <h2 className="font-sans text-xl font-black uppercase tracking-tight text-zinc-950">
              Modul C: Verifikasi Distribusi & Daya Terima MBG
            </h2>
          </div>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Pelacakan Terpadu Wadah Makanan · Bukti Konsumsi Anak per Kotak MBG
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 font-mono text-xs font-bold text-emerald-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>94.8% Paket Terverifikasi Diterima Hari Ini</span>
          </div>
        </div>
      </div>

      {logSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 font-mono text-xs font-bold text-emerald-900 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white text-[10px]">
              ✓
            </span>
            <span>{logSuccessMessage}</span>
          </div>
          <span className="text-[10px] opacity-70">Tercatat di Audit Log</span>
        </motion.div>
      )}

      {/* Main Grid: QR Scanner Simulator vs Daya Terima Form */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: QR Scanner Camera Simulator (SKPL-F10) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
                  Scan Terima Paket MBG
                </h3>
                <p className="font-mono text-[11px] text-zinc-500">SKPL-F10 · Kamera Web API / Input Manual</p>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-[10px] font-bold text-zinc-700">
                128-bit Entropi
              </span>
            </div>

            {/* Simulated Camera Viewfinder */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-zinc-950 flex flex-col items-center justify-center text-white p-4 shadow-inner">
              {/* Corner Reticle Markers */}
              <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-[#38E8F5]" />
              <div className="absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-[#38E8F5]" />
              <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[#38E8F5]" />
              <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#38E8F5]" />

              {/* Scanning Red Laser Line */}
              {scanningActive ? (
                <motion.div
                  className="absolute inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-[#38E8F5] to-transparent shadow-[0_0_12px_#38E8F5]"
                  animate={{ y: [-80, 80] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
              ) : (
                <div className="text-center space-y-2 select-none">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#38E8F5]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                  <p className="font-mono text-xs text-white/90 font-bold">
                    Arahkan kamera ke stiker label QR kotak makanan
                  </p>
                  <p className="font-mono text-[10px] text-white/60">
                    Bisa digunakan kader saat paket tiba atau orang tua di rumah
                  </p>
                </div>
              )}

              {/* Live Scanner Trigger Button */}
              <button
                type="button"
                onClick={handleSimulateScan}
                disabled={scanningActive}
                className="absolute bottom-4 rounded-full bg-[#38E8F5] px-6 py-2.5 font-sans text-xs font-black text-[#032D30] shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-60"
              >
                {scanningActive ? "Sedang Memindai Kode..." : "Buka Scanner Kamera"}
              </button>
            </div>

            {/* Fallback Manual Code Input Form */}
            <form onSubmit={handleManualSubmit} className="pt-2">
              <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1.5">
                Fallback: Masukkan Kode QR Manual
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Contoh: NT-JTM-9821-B4A1"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  className="h-12 flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 font-mono text-xs font-bold text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-[#18140B] px-5 font-sans text-xs font-black text-white hover:bg-black transition-colors"
                >
                  Verifikasi
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Log Daya Terima Makanan (SKPL-F11) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm space-y-6">
            <div className="border-b border-zinc-100 pb-4">
              <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
                Log Daya Terima Makanan (Survei 1-Klik)
              </h3>
              <p className="font-mono text-[11px] text-zinc-500">
                SKPL-F11 · Evaluasi Daya Serap Gizi & Kesukaan Menu Balita
              </p>
            </div>

            {scannedItem ? (
              <div className="space-y-5">
                {/* Active Scanned Package Card */}
                <div className="rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-zinc-400">
                      WADAH TERVERIFIKASI
                    </span>
                    <span className="rounded-md bg-[#7866FF] px-2 py-0.5 font-mono text-[9px] font-bold text-white uppercase">
                      {scannedItem.tipePaket}
                    </span>
                  </div>
                  <h4 className="font-sans text-lg font-black text-zinc-950">
                    {scannedItem.namaAnak}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1 text-zinc-600">
                    <div>Posyandu: <span className="font-bold text-zinc-900">{scannedItem.posyandu}</span></div>
                    <div>Waktu: <span className="font-bold text-zinc-900">{scannedItem.waktuKirim}</span></div>
                  </div>
                  <div className="font-mono text-[10px] text-zinc-400 truncate">
                    Token: {scannedItem.qrToken}
                  </div>
                </div>

                {/* 3 Tactile Buttons: Habis / Sebagian / Tolak */}
                <div>
                  <span className="block font-mono text-xs font-bold uppercase text-zinc-600 mb-3">
                    Berapa banyak makanan yang dihabiskan balita?
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleSetDayaTerima("Habis (100%)")}
                      className={`rounded-2xl border-2 p-3.5 text-center transition-all hover:scale-105 active:scale-95 ${
                        scannedItem.dayaTerima === "Habis (100%)"
                          ? "border-emerald-600 bg-emerald-50 text-emerald-950 shadow-md ring-2 ring-emerald-500/20"
                          : "border-zinc-200 bg-white hover:border-emerald-300"
                      }`}
                    >
                      <span className="block text-2xl mb-1">😋</span>
                      <span className="font-sans text-xs font-black block">Habis (100%)</span>
                      <span className="font-mono text-[9px] text-emerald-700 block mt-0.5">Maksimal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSetDayaTerima("Tersisa Sebagian (50%)")}
                      className={`rounded-2xl border-2 p-3.5 text-center transition-all hover:scale-105 active:scale-95 ${
                        scannedItem.dayaTerima === "Tersisa Sebagian (50%)"
                          ? "border-amber-600 bg-amber-50 text-amber-950 shadow-md ring-2 ring-amber-500/20"
                          : "border-zinc-200 bg-white hover:border-amber-300"
                      }`}
                    >
                      <span className="block text-2xl mb-1">🙂</span>
                      <span className="font-sans text-xs font-black block">Tersisa 50%</span>
                      <span className="font-mono text-[9px] text-amber-700 block mt-0.5">Sebagian</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSetDayaTerima("Tidak Termakan (0%)")}
                      className={`rounded-2xl border-2 p-3.5 text-center transition-all hover:scale-105 active:scale-95 ${
                        scannedItem.dayaTerima === "Tidak Termakan (0%)"
                          ? "border-rose-600 bg-rose-50 text-rose-950 shadow-md ring-2 ring-rose-500/20"
                          : "border-zinc-200 bg-white hover:border-rose-300"
                      }`}
                    >
                      <span className="block text-2xl mb-1">🙁</span>
                      <span className="font-sans text-xs font-black block">Tidak Termakan</span>
                      <span className="font-mono text-[9px] text-rose-700 block mt-0.5">Evaluasi Rasa</span>
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-zinc-50 p-3 border border-zinc-200 font-mono text-[11px] text-zinc-500">
                  Data daya terima langsung disinkronkan ke rekap cita rasa dapur SPPG dan laporan evaluasi Puskesmas.
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-zinc-400 font-mono text-xs">
                Scan paket QR terlebih dahulu untuk menginput daya terima makanan.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabel Log Distribusi Terkini */}
      <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
          <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
            Daftar Paket MBG Terdistribusi Hari Ini
          </h3>
          <span className="font-mono text-xs text-zinc-500">
            Total {distributions.length} sampel posyandu aktif
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-100">
          <table className="w-full text-left font-sans text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100 font-mono text-[10px] uppercase text-zinc-500">
              <tr>
                <th className="py-3 px-4">Token QR</th>
                <th className="py-3 px-4">Nama Balita</th>
                <th className="py-3 px-4">Paket</th>
                <th className="py-3 px-4">Posyandu</th>
                <th className="py-3 px-4">Waktu Distribusi</th>
                <th className="py-3 px-4">Status & Daya Terima</th>
                <th className="py-3 px-4">Verifikator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium">
              {distributions.map((d, i) => (
                <tr key={i} className="hover:bg-zinc-50/50">
                  <td className="py-3 px-4 font-mono text-[11px] font-bold text-zinc-900">{d.qrToken}</td>
                  <td className="py-3 px-4 font-bold text-zinc-950">{d.namaAnak}</td>
                  <td className="py-3 px-4">
                    <span className={`rounded-md px-2 py-0.5 text-[9px] font-black ${d.tipePaket === "Paket B" ? "bg-[#7866FF] text-white" : "bg-zinc-100 text-zinc-700"}`}>
                      {d.tipePaket}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-600">{d.posyandu}</td>
                  <td className="py-3 px-4 font-mono text-zinc-500">{d.waktuKirim}</td>
                  <td className="py-3 px-4">
                    {d.dayaTerima ? (
                      <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[10px] font-bold text-emerald-800">
                        ✓ {d.dayaTerima}
                      </span>
                    ) : (
                      <span className="rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-[10px] font-bold text-amber-800">
                        {d.status}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-zinc-500">
                    {d.verifiedBy || "Menunggu konfirmasi"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

