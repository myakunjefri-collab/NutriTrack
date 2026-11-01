"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, MotionConfig, motion, useReducedMotion } from "framer-motion";
import IsometricCube from "@/components/ui/IsometricCube";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ShowcasePanel from "./ShowcasePanel";
import { EASE_SWAP } from "./motion";

export type AuthMode = "login" | "register";

/**
 * Shell persisten untuk /login dan /register (route group `(auth)`).
 * Karena layout tidak ikut unmount saat pindah rute, panel berwarna bisa MELUNCUR antar sisi,
 * sementara form lama memudar dan form baru muncul berurutan. URL tetap berganti dan tombol Back berfungsi.
 */
export default function AuthShell({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const mode: AuthMode = pathname?.startsWith("/register") ? "register" : "login";
  const reduce = useReducedMotion();

  // Form baru menunggu panel meluncur dulu (0.55s); pada pemuatan pertama cukup jeda singkat.
  // Dihitung saat render (bukan di effect) supaya form yang baru mount langsung memakai delay yang benar.
  const prevMode = useRef(mode);
  const isSwitch = prevMode.current !== mode;
  useEffect(() => {
    prevMode.current = mode;
  }, [mode]);
  const enterDelay = reduce ? 0 : isSwitch ? 0.55 : 0.1;

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-[#F7F8F8] px-4 pb-10 pt-28 font-sans text-zinc-950 sm:px-6">
        {/* latar: grid titik + cahaya */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(24,20,11,0.09) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#38E8F5]/20 blur-[110px]" aria-hidden />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFCA38]/25 blur-[110px]" aria-hidden />

        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-10">
          <Link
            href="/"
            className="group flex min-h-[44px] items-center gap-3 font-black tracking-tight text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-xl px-1"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 font-mono text-sm font-black text-[#38E8F5] shadow-sm transition-transform group-hover:scale-105">
              &lt;&gt;
            </span>
            <span className="flex items-center gap-2 font-sans text-base font-black uppercase tracking-tight sm:text-lg">
              NutriTrack
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                JATIM
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 font-mono text-xs font-bold text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5] rounded-lg px-2"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>{" "}
            <span className="hidden sm:inline">Kembali ke</span> beranda
          </Link>
        </header>

        <ModeToggle mode={mode} />

        <div className="relative z-10 mt-6 w-full max-w-[1120px]">
          <div className="relative overflow-hidden rounded-[36px] border border-zinc-200/90 bg-white shadow-[0_30px_80px_-30px_rgba(24,20,11,0.28)]">
            <MobileBanner mode={mode} />

            <div className="relative grid lg:min-h-[740px] lg:grid-cols-2">
              <div className="col-start-1 row-start-1 flex items-center">
                <AnimatePresence initial>
                  {mode === "login" && (
                    <motion.div
                      key="login"
                      className="w-full px-6 py-10 sm:px-12 lg:px-14"
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24, transition: { duration: 0.28 } }}
                    >
                      <LoginForm delay={enterDelay} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="col-start-1 row-start-1 flex items-center lg:col-start-2">
                <AnimatePresence initial>
                  {mode === "register" && (
                    <motion.div
                      key="register"
                      className="w-full px-6 py-10 sm:px-12 lg:px-14"
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24, transition: { duration: 0.28 } }}
                    >
                      <RegisterForm delay={enterDelay} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <ShowcasePanel mode={mode} />
          </div>
          <p className="mt-5 text-center font-mono text-[11px] text-zinc-500">
            Data demo · Prototipe antarmuka, belum terhubung ke backend
          </p>
        </div>
        {children}
      </main>
    </MotionConfig>
  );
}

function ModeToggle({ mode }: { mode: AuthMode }) {
  const items: { key: AuthMode; label: string; href: string }[] = [
    { key: "login", label: "Masuk", href: "/login" },
    { key: "register", label: "Daftar", href: "/register" },
  ];
  return (
    <LayoutGroup id="auth-mode">
      <nav aria-label="Mode autentikasi" className="relative z-10 flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm font-sans">
        {items.map((it) => {
          const active = mode === it.key;
          return (
            <Link
              key={it.key}
              href={it.href}
              scroll={false}
              aria-current={active ? "page" : undefined}
              className="relative isolate min-h-[44px] inline-flex items-center justify-center rounded-full px-7 py-2.5 font-mono text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38E8F5]/40"
            >
              {active && (
                <motion.span
                  layoutId="auth-mode-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[#18140B]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className={active ? "text-white" : "text-zinc-600 hover:text-zinc-950"}>{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}

function MobileBanner({ mode }: { mode: AuthMode }) {
  const login = mode === "login";
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="relative overflow-hidden px-6 py-6 font-sans lg:hidden"
      initial={false}
      animate={{ backgroundColor: login ? "#7866FF" : "#FFCA38", color: login ? "#FFFFFF" : "#18140B" }}
      transition={{ duration: 0.6, ease: EASE_SWAP }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider opacity-80">
            ● {login ? "Portal akses terpadu" : "Pendaftaran akun"}
          </p>
          <p className="mt-1 font-sans text-lg font-black uppercase leading-tight tracking-tight">
            {login ? "Satu portal, lima peran." : "Gabung jaringan gizi Jatim."}
          </p>
        </div>
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <IsometricCube colorScheme={login ? "cyan" : "purple"} size={64} />
        </motion.div>
      </div>
    </motion.div>
  );
}
