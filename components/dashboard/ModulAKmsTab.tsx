"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BALITA_MOCK, type BalitaRecord } from "@/lib/app-data";
import ClayCard from "@/components/auth/ClayCard";

export default function ModulAKmsTab() {
  const [selectedChildId, setSelectedChildId] = useState<string>("B-001");
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);
  const [syncedBanner, setSyncedBanner] = useState(false);

  // Form State untuk SKPL-F01 & F02
  const [inputWeight, setInputWeight] = useState<number>(8.4);
  const [inputHeight, setInputHeight] = useState<number>(72.8);
  const [inputHeadCircumference, setInputHeadCircumference] = useState<number>(45.2);
  const [inputAgeMonths, setInputAgeMonths] = useState<number>(14);
  const [inputSex, setInputSex] = useState<"L" | "P">("L");
  const [measuringMethod, setMeasuringMethod] = useState<"panjang" | "tinggi">(
    inputAgeMonths < 24 ? "panjang" : "tinggi"
  );

  const activeChild = BALITA_MOCK.find((b) => b.id === selectedChildId) || BALITA_MOCK[0];

  // Kalkulasi WHO Z-Score sederhana untuk live interactive preview (SKPL-F02)
  const calcZTBU = () => {
    // Standar median approx: 12 bln L ~ 75.7cm, 24 bln L ~ 87.1cm
    const medianHeight = inputSex === "L" ? 64 + inputAgeMonths * 0.95 : 62 + inputAgeMonths * 0.93;
    const z = (inputHeight - medianHeight) / (medianHeight * 0.038);
    return Math.round(z * 100) / 100;
  };

  const calcZBBU = () => {
    const medianWeight = inputSex === "L" ? 7.5 + inputAgeMonths * 0.28 : 7.0 + inputAgeMonths * 0.27;
    const z = (inputWeight - medianWeight) / (medianWeight * 0.12);
    return Math.round(z * 100) / 100;
  };

  const currentZTBU = calcZTBU();
  const currentZBBU = calcZBBU();
  const isFalteringNow = currentZTBU < -2 || currentZBBU < -2 || inputWeight <= 8.4;
  const currentStatus = isFalteringNow ? "Waspada / Growth Faltering" : "Normal";
  const currentPack = isFalteringNow ? "Paket B (Tinggi Protein Hewani)" : "Paket A (Reguler)";

  const handleSimulateAddWeight = () => {
    if (isOfflineMode) {
      setPendingSyncCount((prev) => prev + 1);
    } else {
      setSyncedBanner(true);
      setTimeout(() => setSyncedBanner(false), 4000);
    }
  };

  const handleSyncNow = () => {
    setPendingSyncCount(0);
    setSyncedBanner(true);
    setTimeout(() => setSyncedBanner(false), 4000);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Info & Offline Banner (SKPL-F05) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-zinc-200/90 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38E8F5] animate-pulse" />
            <h2 className="font-sans text-xl font-black uppercase tracking-tight text-zinc-950">
              Modul A: Smart KMS & Deteksi Dini Posyandu
            </h2>
          </div>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Standar Antropometri Permenkes No. 2/2020 · Algoritma WHO Z-Score Real-Time
          </p>
        </div>

        {/* Offline Queue Badge & Simulation Toggle */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 border font-mono text-xs font-bold transition-colors ${
              isOfflineMode
                ? "border-amber-300 bg-amber-50 text-amber-900"
                : "border-emerald-200 bg-emerald-50 text-emerald-800"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isOfflineMode ? "bg-amber-500 animate-ping" : "bg-emerald-500"
              }`}
            />
            <span>
              {isOfflineMode
                ? `Mode Offline (${pendingSyncCount} antrean IndexedDB)`
                : "Tersambung Real-Time"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOfflineMode(!isOfflineMode)}
            className="rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            {isOfflineMode ? "Beralih Online" : "Simulasi Sinyal Mati"}
          </button>

          {pendingSyncCount > 0 && !isOfflineMode && (
            <button
              type="button"
              onClick={handleSyncNow}
              className="rounded-xl bg-[#18140B] px-3.5 py-2 text-xs font-black text-white shadow-sm hover:scale-105 transition-transform"
            >
              Sinkronkan Sekarang ({pendingSyncCount})
            </button>
          )}
        </div>
      </div>

      {syncedBanner && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900 font-mono text-xs flex items-center justify-between"
        >
          <div className="flex items-center gap-2 font-bold">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">
              ✓
            </span>
            <span>
              Data penimbangan berhasil disinkronkan ke Cloud Server & Antrean Dapur SPPG!
            </span>
          </div>
          <span className="text-[11px] opacity-75">Hash SHA-256 Valid</span>
        </motion.div>
      )}

      {/* Early Warning Banner if Faltering (SKPL-F04) */}
      <AnimatePresence>
        {isFalteringNow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-[24px] border-2 border-[#FF764C] bg-gradient-to-r from-[#FFF2EE] via-white to-[#FFF2EE] p-5 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#FF764C] text-white shadow-sm font-black text-lg">
                  !
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-[#FF764C] px-2 py-0.5 font-mono text-[10px] font-black uppercase text-white tracking-wider">
                    EARLY WARNING GROWTH FALTERING (WASPADA)
                  </div>
                  <h3 className="mt-1 font-sans text-lg font-black uppercase tracking-tight text-zinc-950">
                    Kenaikan Berat Badan Tidak Memadai 2 Bulan Berturut-Turut
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-600 max-w-2xl font-medium">
                    Sistem mendeteksi tren mendatar pada balita <span className="font-bold text-zinc-900">{activeChild.nama}</span> ({inputAgeMonths} Bulan). Secara otomatis dimasukkan ke antrean prioritas <strong>Paket B (Protein Hewani Tinggi)</strong> dapur SPPG hari ini.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2.5">
                <span className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-1.5 font-mono text-xs font-black text-amber-900">
                  +1 Butir Telur Blitar
                </span>
                <span className="rounded-xl border border-cyan-300 bg-cyan-50 px-3 py-1.5 font-mono text-xs font-black text-[#032D30]">
                  +35g Lele Lamongan
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Grid: Input Form Cepat & Digital KMS Curve */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Kolom Kiri: Form Input Cepat Antropometri (SKPL-F01 & F02) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
                  Input Cepat Antropometri
                </h3>
                <p className="font-mono text-[11px] text-zinc-500">SKPL-F01 · Target &lt;60 detik</p>
              </div>
              <span className="rounded-lg bg-zinc-100 px-2.5 py-1 font-mono text-[10px] font-bold text-zinc-700">
                Posyandu Mawar 01
              </span>
            </div>

            {/* Pilih Balita */}
            <div className="mt-5 space-y-4">
              <div>
                <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1.5">
                  Pilih Balita Terdaftar (NIK / Nama)
                </label>
                <select
                  value={selectedChildId}
                  onChange={(e) => {
                    const id = e.target.value;
                    setSelectedChildId(id);
                    const b = BALITA_MOCK.find((item) => item.id === id);
                    if (b) {
                      setInputWeight(b.bbKg);
                      setInputHeight(b.tbCm);
                      setInputAgeMonths(b.usiaBulan);
                      setInputSex(b.jenisKelamin);
                      setInputHeadCircumference(b.lingkarKepalaCm);
                      setMeasuringMethod(b.usiaBulan < 24 ? "panjang" : "tinggi");
                    }
                  }}
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 font-sans text-sm font-bold text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                >
                  {BALITA_MOCK.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.nama} ({b.usiaBulan} bln) — {b.nik} [{b.statusNutrisi}]
                    </option>
                  ))}
                </select>
              </div>

              {/* Usia & Jenis Kelamin */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    Usia (Bulan)
                  </label>
                  <input
                    type="number"
                    value={inputAgeMonths}
                    min={1}
                    max={60}
                    onChange={(e) => {
                      const age = Number(e.target.value);
                      setInputAgeMonths(age);
                      setMeasuringMethod(age < 24 ? "panjang" : "tinggi");
                    }}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 font-mono text-sm font-bold text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    Jenis Kelamin
                  </label>
                  <div className="flex h-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-1">
                    <button
                      type="button"
                      onClick={() => setInputSex("L")}
                      className={`flex-1 rounded-xl text-xs font-black transition-colors ${
                        inputSex === "L" ? "bg-[#18140B] text-white" : "text-zinc-600"
                      }`}
                    >
                      Laki-Laki
                    </button>
                    <button
                      type="button"
                      onClick={() => setInputSex("P")}
                      className={`flex-1 rounded-xl text-xs font-black transition-colors ${
                        inputSex === "P" ? "bg-[#18140B] text-white" : "text-zinc-600"
                      }`}
                    >
                      Perempuan
                    </button>
                  </div>
                </div>
              </div>

              {/* Berat Badan & Tinggi Badan */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    Berat Badan (kg)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    value={inputWeight}
                    onChange={(e) => setInputWeight(Number(e.target.value))}
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 font-mono text-lg font-black text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    {measuringMethod === "panjang" ? "Panjang Badan (cm)" : "Tinggi Badan (cm)"}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputHeight}
                    onChange={(e) => setInputHeight(Number(e.target.value))}
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 font-mono text-lg font-black text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                  />
                </div>
              </div>

              {/* Lingkar Kepala & Cara Ukur */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    Lingkar Kepala (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputHeadCircumference}
                    onChange={(e) => setInputHeadCircumference(Number(e.target.value))}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 font-mono text-sm font-bold text-zinc-900 outline-none focus:border-[#38E8F5] focus:ring-4 focus:ring-[#38E8F5]/20"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase text-zinc-600 mb-1">
                    Cara Ukur (WHO)
                  </label>
                  <div className="flex h-12 items-center rounded-2xl border border-zinc-200 bg-zinc-100/80 px-3 font-mono text-xs font-bold text-zinc-700">
                    {inputAgeMonths < 24 ? "Terlentang (<24 bln)" : "Berdiri (≥24 bln)"}
                  </div>
                </div>
              </div>

              {/* Live Status Calculation Box (SKPL-F02) */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-zinc-500">Z-Score TB/U (Stunting):</span>
                  <span className={`px-2 py-0.5 rounded-md ${currentZTBU < -2 ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-800"}`}>
                    {currentZTBU > 0 ? `+${currentZTBU}` : currentZTBU} SD
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-zinc-500">Z-Score BB/U:</span>
                  <span className={`px-2 py-0.5 rounded-md ${currentZBBU < -2 ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-800"}`}>
                    {currentZBBU > 0 ? `+${currentZBBU}` : currentZBBU} SD
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono font-bold pt-1 border-t border-zinc-200">
                  <span className="text-zinc-700">Preskripsi Otomatis:</span>
                  <span className="font-sans font-black text-[#7866FF]">{currentPack}</span>
                </div>
              </div>

              {/* Tombol Simpan Penimbangan */}
              <button
                type="button"
                onClick={handleSimulateAddWeight}
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#18140B] font-sans text-sm font-black text-white shadow-lg transition-transform hover:scale-[1.015] active:scale-95"
              >
                <span>Simpan Penimbangan Hari Ini</span>
                <span className="text-[#38E8F5] transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Kurva KMS Digital Interaktif (SKPL-F03) & Riwayat */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4">
              <div>
                <h3 className="font-sans text-base font-black uppercase tracking-tight text-zinc-950">
                  Kurva KMS Digital Interaktif
                </h3>
                <p className="font-mono text-[11px] text-zinc-500">
                  WHO Growth Standards · {activeChild.nama} ({activeChild.jenisKelamin === "L" ? "Laki-Laki" : "Perempuan"})
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Normal
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> -2 SD
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-rose-100 px-2 py-0.5 text-rose-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-600" /> -3 SD
                </span>
              </div>
            </div>

            {/* Interactive SVG KMS Chart Canvas */}
            <div className="mt-6 relative h-[320px] w-full rounded-2xl bg-zinc-50/80 border border-zinc-200/70 p-4 overflow-hidden">
              <svg viewBox="0 0 540 260" className="h-full w-full select-none">
                <defs>
                  <linearGradient id="kmsZoneGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#91EB4C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#91EB4C" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="kmsZoneYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFCA38" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FFCA38" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[50, 100, 150, 200].map((y) => (
                  <line key={y} x1="40" y1={y} x2="520" y2={y} stroke="#E4E4E7" strokeDasharray="3 3" />
                ))}

                {/* WHO Envelope Ribbons */}
                {/* Zona Hijau Normal (antara -2 SD hingga +2 SD) */}
                <path
                  d="M 40 180 Q 200 120, 360 80 T 520 40 L 520 120 Q 360 160, 200 190 T 40 220 Z"
                  fill="url(#kmsZoneGreen)"
                />

                {/* Zona Kuning Waspada (-2 SD s/d -3 SD) */}
                <path
                  d="M 40 220 Q 200 190, 360 160 T 520 120 L 520 160 Q 360 200, 200 225 T 40 250 Z"
                  fill="url(#kmsZoneYellow)"
                />

                {/* Garis Median 0 SD (WHO) */}
                <path
                  d="M 40 160 Q 200 100, 360 65 T 520 30"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />

                {/* Garis Batas -2 SD (Garis Merah Stunting) */}
                <path
                  d="M 40 220 Q 200 190, 360 160 T 520 120"
                  fill="none"
                  stroke="#FF764C"
                  strokeWidth="2"
                />

                {/* Plot Riwayat Balita Aktif (3 titik penimbangan) */}
                <path
                  d="M 120 205 L 260 215 L 420 220"
                  fill="none"
                  stroke="#7866FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Titik 1: 2 bln lalu */}
                <circle cx="120" cy="205" r="5" fill="#7866FF" stroke="white" strokeWidth="2" />
                <text x="120" y="195" textAnchor="middle" className="font-mono text-[9px] fill-zinc-600 font-bold">
                  8.5 kg
                </text>

                {/* Titik 2: 1 bln lalu */}
                <circle cx="260" cy="215" r="5" fill="#7866FF" stroke="white" strokeWidth="2" />
                <text x="260" y="235" textAnchor="middle" className="font-mono text-[9px] fill-zinc-600 font-bold">
                  8.4 kg (Mendatar)
                </text>

                {/* Titik 3: Bulan Ini (Sorot Terkini) */}
                <circle cx="420" cy="220" r="7" fill="#38E8F5" stroke="#18140B" strokeWidth="2.5" />
                <circle cx="420" cy="220" r="14" fill="none" stroke="#38E8F5" strokeWidth="2" className="animate-ping" opacity="0.4" />
                <text x="420" y="244" textAnchor="middle" className="font-mono text-[10px] fill-zinc-900 font-black">
                  Hari Ini: 8.4 kg (-2.42 SD)
                </text>

                {/* Label Sumbu X & Y */}
                <text x="45" y="25" className="font-mono text-[9px] fill-zinc-400 font-bold">
                  Tinggi/Panjang Badan (cm)
                </text>
                <text x="480" y="255" className="font-mono text-[9px] fill-zinc-400 font-bold">
                  Usia (Bulan) →
                </text>
              </svg>
            </div>

            {/* Riwayat Penimbangan Tabel Ringkas */}
            <div className="mt-6">
              <h4 className="font-mono text-xs font-bold uppercase text-zinc-500 mb-2.5">
                Riwayat Penimbangan 3 Bulan Terakhir
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-zinc-100">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="bg-zinc-50 border-b border-zinc-100 font-mono text-[10px] uppercase text-zinc-500">
                    <tr>
                      <th className="py-2.5 px-3.5">Tanggal</th>
                      <th className="py-2.5 px-3.5">Usia</th>
                      <th className="py-2.5 px-3.5">BB (kg)</th>
                      <th className="py-2.5 px-3.5">TB (cm)</th>
                      <th className="py-2.5 px-3.5">Z TB/U</th>
                      <th className="py-2.5 px-3.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 font-medium">
                    {activeChild.history.map((h, i) => (
                      <tr key={i} className="hover:bg-zinc-50/50">
                        <td className="py-2.5 px-3.5 font-mono text-[11px]">{h.tgl}</td>
                        <td className="py-2.5 px-3.5">{h.usia} bln</td>
                        <td className="py-2.5 px-3.5 font-bold">{h.bb} kg</td>
                        <td className="py-2.5 px-3.5">{h.tb} cm</td>
                        <td className="py-2.5 px-3.5 font-mono font-bold text-red-600">{h.zTbu} SD</td>
                        <td className="py-2.5 px-3.5">
                          <span className="rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                            Waspada
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

