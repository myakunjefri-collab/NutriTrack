"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { authRoles, jatimRegions, type AuthRole } from "@/lib/auth-data";
import { EASE_OUT, item, stagger } from "./motion";
import { Checkbox, FloatingField, PasswordField, RoleSegmented, SelectField, StrengthMeter, SubmitButton, strengthOf, type SubmitStatus } from "./fields";

type Errors = Partial<Record<"name" | "contact" | "pw" | "region" | "unit" | "consent", string>>;

export default function RegisterForm({ delay }: { delay: number }) {
  const [step, setStep] = useState<0 | 1>(0);
  const [dir, setDir] = useState(1);
  const [name, setName] = useState("");
  const [role, setRole] = useState<AuthRole>("kader");
  const [contact, setContact] = useState("");
  const [pw, setPw] = useState("");
  const [region, setRegion] = useState("");
  const [unit, setUnit] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const info = authRoles.find((r) => r.key === role)!;

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const next = () => {
    const e: Errors = {};
    if (name.trim().length < 3) e.name = "Tulis nama lengkap (minimal 3 huruf).";
    if (!contact.trim()) e.contact = `${info.contactLabel} wajib diisi.`;
    if (strengthOf(pw) < 2 || pw.length < 8) e.pw = "Kata sandi minimal 8 karakter dan tidak terlalu lemah.";
    setErrors(e);
    if (Object.keys(e).length) return;
    setDir(1);
    setStep(1);
  };

  const back = () => {
    setDir(-1);
    setStep(0);
    setErrors({});
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (step === 0) return next();
    const e: Errors = {};
    if (!region) e.region = "Pilih kabupaten/kota wilayah kerjamu.";
    if (!unit.trim()) e.unit = `${info.unitLabel} wajib diisi.`;
    if (!consent) e.consent = "Persetujuan diperlukan untuk melanjutkan.";
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("loading");
    // TODO(Supabase Auth): Ganti timer simulasi ini dengan `await supabase.auth.signUp({ email: contact, password: pw, options: { data: { fullName: name, role, region, unit } } })`
    // Setelah pendaftaran, tampilkan konfirmasi verifikasi email atau status review admin.
    timer.current = setTimeout(() => setStatus("done"), 1200);
  };

  return (
    <motion.div variants={stagger(delay)} initial="hidden" animate="show" className="font-sans">
      <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFCA38]" /> Daftar · Langkah {step + 1} dari 2
      </motion.p>
      <motion.h1 variants={item} className="mt-5 font-sans text-4xl font-black uppercase leading-[1.02] tracking-tightest sm:text-[2.7rem]">
        Buat akun<br />NutriTrack.
      </motion.h1>

      {/* Stepper */}
      <motion.div variants={item} className="mt-5 flex items-center gap-3" aria-hidden>
        {["Akun", "Penugasan"].map((l, i) => (
          <div key={l} className="flex flex-1 flex-col gap-1.5">
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">
              <motion.div className="h-full rounded-full bg-[#18140B]" initial={false} animate={{ width: step >= i ? "100%" : "0%" }} transition={{ duration: 0.5, ease: EASE_OUT }} />
            </div>
            <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${step >= i ? "text-zinc-900" : "text-zinc-400"}`}>{l}</span>
          </div>
        ))}
      </motion.div>

      <form onSubmit={submit} noValidate className="mt-6">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={{ enter: (d: number) => ({ opacity: 0, x: 28 * d }), center: { opacity: 1, x: 0 }, exit: (d: number) => ({ opacity: 0, x: -28 * d }) }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: EASE_OUT }}
            className="space-y-4"
          >
            {step === 0 ? (
              <>
                <FloatingField id="reg-name" label="Nama lengkap" value={name} onChange={setName} error={errors.name} autoComplete="name" />
                <div>
                  <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-500">Peran akun</p>
                  <RoleSegmented value={role} onChange={setRole} roles={authRoles} layoutId="reg-role" />
                </div>
                <FloatingField id="reg-contact" label={info.contactLabel} value={contact} onChange={setContact} error={errors.contact} autoComplete="username" />
                <div className="space-y-2">
                  <PasswordField id="reg-pw" label="Kata sandi" value={pw} onChange={setPw} error={errors.pw} autoComplete="new-password" />
                  <StrengthMeter password={pw} />
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="group flex h-14 min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full bg-[#18140B] font-sans text-sm font-black text-white shadow-lg transition-transform duration-300 hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38E8F5]/40 focus-visible:ring-offset-2"
                >
                  Lanjut ke penugasan
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="#38E8F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <SelectField id="reg-region" label="Kabupaten / Kota" value={region} onChange={setRegion} options={jatimRegions} error={errors.region} />
                <FloatingField id="reg-unit" label={info.unitLabel} value={unit} onChange={setUnit} error={errors.unit} />
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3.5 font-mono text-[11px] leading-relaxed text-zinc-600">
                  Akses data dibatasi per peran dan wilayah kerja. Akun baru ditinjau Admin Sistem sebelum diaktifkan (usulan alur, prototipe).
                </div>
                <Checkbox id="reg-consent" checked={consent} onChange={setConsent} error={errors.consent}>
                  Saya menyetujui pengolahan data sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Data balita hanya dipakai untuk intervensi gizi.
                </Checkbox>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={back}
                    aria-label="Kembali ke langkah 1"
                    className="grid h-14 w-14 min-h-[44px] min-w-[44px] shrink-0 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38E8F5]/40 focus-visible:ring-offset-2"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <div className="flex-1">
                    <SubmitButton status={status} doneLabel="Akun dibuat (mode demo)">Buat akun</SubmitButton>
                  </div>
                </div>
                {status === "done" && (
                  <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 font-mono text-[11px] leading-relaxed text-emerald-950">
                    <div className="flex items-center gap-2 font-bold text-emerald-800">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-600 text-white text-[9px]">✓</span>
                      <span>Akun berhasil didaftarkan (Mode Demo)!</span>
                    </div>
                    <Link
                      href={`/app?role=${role}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18140B] px-6 py-3 font-sans text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all w-full"
                    >
                      <span>Masuk ke Dasbor Operasional ({info.name})</span>
                      <span className="text-[#FFCA38]">→</span>
                    </Link>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </form>

      <motion.p variants={item} className="mt-5 border-t border-zinc-100 pt-5 text-sm font-medium text-zinc-600">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          scroll={false}
          className="inline-flex min-h-[44px] items-center font-black text-zinc-950 underline decoration-[#FFCA38] decoration-2 underline-offset-4 hover:decoration-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-md"
        >
          Masuk di sini
        </Link>
      </motion.p>
    </motion.div>
  );
}
