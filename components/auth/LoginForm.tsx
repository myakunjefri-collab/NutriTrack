"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { authRoles, type AuthRole } from "@/lib/auth-data";
import { item, stagger } from "./motion";
import { Checkbox, FloatingField, PasswordField, RoleSegmented, SubmitButton, type SubmitStatus } from "./fields";

export default function LoginForm({ delay }: { delay: number }) {
  const [role, setRole] = useState<AuthRole>("kader");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ id?: string; pw?: string }>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const info = authRoles.find((r) => r.key === role)!;

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: { id?: string; pw?: string } = {};
    if (!id.trim()) next.id = "Isi identitas akunmu dulu.";
    if (!pw) next.pw = "Kata sandi belum diisi.";
    setErrors(next);
    if (next.id || next.pw) return;

    setStatus("loading");
    // TODO(Supabase Auth): Ganti timer simulasi ini dengan `await supabase.auth.signInWithPassword({ email: id, password: pw })`
    // Setelah berhasil login, arahkan pengguna ke dashboard sesuai role (e.g. /dashboard/{role}).
    timer.current = setTimeout(() => setStatus("done"), 1100);
  };

  const fillDemo = () => {
    setId(`petugas.${role}@nutritrack.go.id`);
    setPw("Password123!");
    setErrors({});
  };

  return (
    <motion.div variants={stagger(delay)} initial="hidden" animate="show" className="font-sans">
      <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#38E8F5]" /> Masuk · Portal terpadu
      </motion.p>
      <motion.h1 variants={item} className="mt-5 font-sans text-4xl font-black uppercase leading-[1.02] tracking-tightest sm:text-[2.7rem]">
        Selamat datang<br />kembali.
      </motion.h1>
      <motion.p variants={item} className="mt-3 max-w-sm font-sans text-sm font-medium leading-relaxed text-zinc-600">
        Pilih peran akunmu, lalu lanjutkan pemantauan gizi balita dan alokasi MBG presisi.
      </motion.p>

      <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
        <motion.div variants={item}>
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-500">Peran akun</p>
          <RoleSegmented value={role} onChange={(r) => { setRole(r); setStatus("idle"); }} roles={authRoles} layoutId="login-role" />
        </motion.div>

        <motion.div variants={item}>
          <FloatingField id="login-id" label={info.loginIdLabel} value={id} onChange={setId} error={errors.id} autoComplete="username" />
        </motion.div>
        <motion.div variants={item}>
          <PasswordField id="login-pw" label="Kata sandi" value={pw} onChange={setPw} error={errors.pw} autoComplete="current-password" />
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-4">
          <Checkbox id="login-remember" checked={remember} onChange={setRemember}>Ingat perangkat ini</Checkbox>
          <button
            type="button"
            className="min-h-[44px] inline-flex items-center text-[13px] font-bold text-[#5C46D9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-md"
          >
            Lupa sandi?
          </button>
        </motion.div>

        <motion.div variants={item}>
          <SubmitButton status={status} doneLabel="Berhasil Masuk">Masuk sebagai {info.name}</SubmitButton>
        </motion.div>

        {status === "done" && (
          <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 font-mono text-[11px] leading-relaxed text-emerald-950">
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-600 text-white text-[9px]">✓</span>
              <span>Berhasil masuk sebagai {info.name}!</span>
            </div>
            <p className="text-zinc-600 font-sans text-xs font-medium">
              Mode prototipe siap dijelajahi. Klik tombol di bawah untuk langsung membuka dasbor operasional dan seluruh modul FR.
            </p>
            <Link
              href={`/app?role=${role}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18140B] px-6 py-3 font-sans text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all w-full"
            >
              <span>Buka Dasbor {info.name}</span>
              <span className="text-[#38E8F5]">→</span>
            </Link>
          </div>
        )}
      </form>

      <motion.div variants={item} className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-5 text-sm">
        <span className="font-sans font-medium text-zinc-600">
          Belum punya akun?{" "}
          <Link
            href="/register"
            scroll={false}
            className="inline-flex min-h-[44px] items-center font-black text-zinc-950 underline decoration-[#38E8F5] decoration-2 underline-offset-4 hover:decoration-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-md"
          >
            Daftar sekarang
          </Link>
        </span>
        <button
          type="button"
          onClick={fillDemo}
          className="inline-flex min-h-[44px] items-center font-mono text-[11px] font-bold text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-md"
        >
          Isi akun pengujian
        </button>
      </motion.div>
    </motion.div>
  );
}
