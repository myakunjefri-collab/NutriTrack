"use client";

import { type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import IsometricCube from "@/components/ui/IsometricCube";
import ClayCard from "./ClayCard";
import { EASE_OUT, EASE_SWAP } from "./motion";
import type { AuthMode } from "./AuthShell";

type Depth = { x: MotionValue<number>; y: MotionValue<number> };

/** Wrapper untuk membuat kubus isometrik mengambang pelan secara konsisten dalam loop */
function FloatingCube({
  children,
  duration = 4,
  offset = 8,
  delay = 0,
}: {
  children: ReactNode;
  duration?: number;
  offset?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      animate={{ y: [0, -offset, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ShowcasePanel({ mode }: { mode: AuthMode }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const near: Depth = { x: useTransform(sx, [-0.5, 0.5], [-16, 16]), y: useTransform(sy, [-0.5, 0.5], [-12, 12]) };
  const far: Depth = { x: useTransform(sx, [-0.5, 0.5], [8, -8]), y: useTransform(sy, [-0.5, 0.5], [6, -6]) };
  const dur = reduce ? 0 : 0.95;

  return (
    <motion.div
      aria-hidden={false}
      className="absolute inset-y-0 z-10 hidden w-1/2 p-3 font-sans lg:block"
      initial={false}
      animate={{ left: mode === "login" ? "50%" : "0%" }}
      transition={{ duration: dur, ease: EASE_SWAP }}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-[28px]"
        initial={false}
        animate={{ backgroundColor: mode === "login" ? "#7866FF" : "#FFCA38", color: mode === "login" ? "#FFFFFF" : "#18140B" }}
        transition={{ duration: dur, ease: EASE_SWAP }}
        onMouseMove={(e) => {
          if (reduce) return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => { mx.set(0); my.set(0); }}
      >
        {/* cahaya lembut ala kartu CTA landing */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#38E8F5]/30 blur-[90px]" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#FFCA38]/25 blur-[90px]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "22px 22px" }} aria-hidden />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            className="relative flex h-full flex-col justify-between p-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, delay: reduce ? 0 : 0.35 } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
          >
            {mode === "login" ? <LoginContent near={near} far={far} /> : <RegisterContent near={near} far={far} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function Badge({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${dark ? "border-[#18140B]/20 bg-[#18140B]/10" : "border-white/30 bg-white/15"}`}>
      <span className={`h-2 w-2 animate-pulse rounded-full ${dark ? "bg-[#18140B]" : "bg-[#38E8F5]"}`} />
      {children}
    </span>
  );
}

function LoginContent({ near, far }: { near: Depth; far: Depth }) {
  return (
    <>
      <Badge>Portal akses terpadu</Badge>

      <div className="relative h-[290px]" aria-hidden>
        <motion.div style={{ x: far.x, y: far.y }} className="absolute right-2 top-0">
          <FloatingCube duration={4} offset={9} delay={0}>
            <IsometricCube colorScheme="cyan" size={108} />
          </FloatingCube>
        </motion.div>
        <motion.div style={{ x: near.x, y: near.y }} className="absolute left-0 top-4">
          <div className="-rotate-3">
            <ClayCard tone="pink" className="w-[220px]">
              <div className="mb-1.5 flex items-center justify-between font-mono text-[9px] font-bold uppercase">
                <span className="tracking-wider">Kurva KMS · WHO</span><span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              </div>
              <div className="h-16 w-full rounded-xl bg-black/15 p-1">
                <svg viewBox="0 0 160 80" className="h-full w-full">
                  <path d="M15 68Q60 55 95 32T145 14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="15" cy="68" r="3.5" fill="white" /><circle cx="95" cy="32" r="3.5" fill="white" />
                  <circle cx="145" cy="14" r="5" fill="#38E8F5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-[9px] font-bold"><span>Normal</span><span className="text-[#CEF9FC]">+0.8 SD</span></div>
            </ClayCard>
          </div>
        </motion.div>
        <motion.div style={{ x: near.x, y: near.y }} className="absolute bottom-3 left-20">
          <div className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-zinc-900 shadow-xl font-sans">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFCA38]" />
            <span className="font-mono text-[11px] font-bold">Waspada → Paket B dialokasikan</span>
          </div>
        </motion.div>
        <motion.div style={{ x: far.x, y: far.y }} className="absolute bottom-0 right-12">
          <FloatingCube duration={4.5} offset={7} delay={0.6}>
            <IsometricCube colorScheme="yellow" size={76} />
          </FloatingCube>
        </motion.div>
      </div>

      <div>
        <h2 className="font-sans text-[2.1rem] font-black uppercase leading-[1.03] tracking-tightest xl:text-[2.4rem]">
          Satu portal.<br />Lima peran.<br /><span className="text-[#38E8F5]">Satu tujuan.</span>
        </h2>
        <p className="mt-4 max-w-sm font-sans text-sm font-medium leading-relaxed text-white/85">
          Kader, orang tua, dapur MBG, Puskesmas, dan Dinkes bekerja dari data yang sama, dengan akses sesuai peran dan wilayah.
        </p>
      </div>
    </>
  );
}

function RegisterContent({ near, far }: { near: Depth; far: Depth }) {
  return (
    <>
      <Badge dark>Pendaftaran akun</Badge>

      <div className="relative h-[290px]" aria-hidden>
        <motion.div style={{ x: far.x, y: far.y }} className="absolute right-4 top-0">
          <FloatingCube duration={4.2} offset={9} delay={0.2}>
            <IsometricCube colorScheme="purple" size={104} />
          </FloatingCube>
        </motion.div>
        <motion.div style={{ x: near.x, y: near.y }} className="absolute left-0 top-2">
          <div className="-rotate-3">
            <ClayCard tone="green" className="w-[210px]">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-80">Peran</p>
              <p className="mt-0.5 flex items-center gap-2 font-sans text-sm font-black">
                <span className="grid h-4 w-4 place-items-center rounded-md bg-[#18140B] text-[9px] text-[#91EB4C]">✓</span> Kader Posyandu
              </p>
            </ClayCard>
          </div>
        </motion.div>
        <motion.div style={{ x: near.x, y: near.y }} className="absolute left-16 top-[120px]">
          <div className="rotate-2">
            <ClayCard tone="purple" className="w-[200px]">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-80">Wilayah kerja</p>
              <p className="mt-0.5 font-sans text-sm font-black">Kab. Blitar</p>
            </ClayCard>
          </div>
        </motion.div>
        <motion.div style={{ x: near.x, y: near.y }} className="absolute bottom-1 left-2">
          <div className="flex items-center gap-2.5 rounded-2xl bg-[#18140B] px-4 py-3 text-white shadow-xl font-sans">
            <span className="h-2.5 w-2.5 rounded-full bg-[#38E8F5]" />
            <span className="font-mono text-[11px] font-bold">Akses dibatasi per wilayah</span>
          </div>
        </motion.div>
        <motion.div style={{ x: far.x, y: far.y }} className="absolute bottom-2 right-14">
          <FloatingCube duration={4.6} offset={7} delay={0.9}>
            <IsometricCube colorScheme="cyan" size={72} />
          </FloatingCube>
        </motion.div>
      </div>

      <div>
        <h2 className="font-sans text-[2.1rem] font-black uppercase leading-[1.03] tracking-tightest xl:text-[2.4rem]">
          Bergabung dengan<br />jaringan gizi<br />Jawa Timur.
        </h2>
        <ul className="mt-4 space-y-2 font-sans text-sm font-semibold">
          {["Satu akun, satu peran, satu wilayah kerja", "Persetujuan data tercatat sejak awal", "Data balita terlindungi sesuai UU PDP"].map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#18140B] text-[11px] text-[#FFCA38]">✓</span>{t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
