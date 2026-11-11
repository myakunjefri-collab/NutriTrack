"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { nav } from "@/lib/demo-data";

/**
 * Navbar (Tokens Studio Style - Larger & Prominent)
 * - Saat awal (scrollY = 0): Full-width, tinggi 82px, tegas, megah, dan proporsional.
 * - Saat di-scroll: Berubah secara halus (morphing) menjadi floating pill berukuran
 *   tinggi 70px dengan max-width 1200px, rounded-2xl, dan bayangan 3D halus.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      // Morph smoothly over 0px to 140px of scroll
      const progress = Math.min(Math.max(scrollY / 140, 0), 1);

      if (headerRef.current && navRef.current) {
        // Header top offset and horizontal padding
        headerRef.current.style.top = `${progress * 14}px`;
        headerRef.current.style.paddingLeft = `${progress * 20}px`;
        headerRef.current.style.paddingRight = `${progress * 20}px`;

        // Nav width interpolation: 100% at scroll=0, smoothly morphing to 1200px (max-w-6xl)
        const widthCalc =
          progress === 0
            ? "100%"
            : `min(100%, calc(1200px + (100% - 1200px) * ${1 - progress}))`;

        navRef.current.style.width = widthCalc;
        navRef.current.style.borderRadius = `${progress * 24}px`;
        // Height shrinks smoothly from 82px (large full) to 70px (floating pill)
        navRef.current.style.height = `${82 - progress * 12}px`;
        navRef.current.style.paddingLeft = `${44 - progress * 16}px`;
        navRef.current.style.paddingRight = `${44 - progress * 16}px`;

        // Floating shadow and border interpolation
        if (progress > 0.05) {
          navRef.current.style.boxShadow = `0 ${progress * 14}px ${progress * 32}px -4px rgba(0, 0, 0, ${
            progress * 0.12
          }), 0 4px 8px -2px rgba(0, 0, 0, 0.04)`;
          navRef.current.style.borderColor = `rgba(228, 228, 231, ${0.6 + progress * 0.4})`;
          navRef.current.style.backgroundColor = `rgba(255, 255, 255, ${0.94 + progress * 0.05})`;
          navRef.current.style.backdropFilter = "blur(14px)";
        } else {
          navRef.current.style.boxShadow = "none";
          navRef.current.style.borderColor = "rgba(228, 228, 231, 0.85)";
          navRef.current.style.backgroundColor = "rgba(255, 255, 255, 1)";
          navRef.current.style.backdropFilter = "none";
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    // Initial positioning
    updateNavbar();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 will-change-transform"
      style={{ top: "0px", paddingLeft: "0px", paddingRight: "0px" }}
    >
      <nav
        ref={navRef}
        className="mx-auto flex w-full items-center justify-between border border-zinc-200/85 bg-white will-change-transform"
        style={{
          width: "100%",
          height: "82px",
          borderRadius: "0px",
          paddingLeft: "44px",
          paddingRight: "44px",
        }}
        aria-label="Utama"
      >
        {/* Brand Logo NutriTrack */}
        <Link href="/" className="flex items-center gap-3 font-black text-zinc-950 tracking-tight text-lg group">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="NutriTrack Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="font-sans font-black uppercase tracking-tight text-base sm:text-lg">
            NutriTrack
          </span>
        </Link>

        {/* Desktop Nav Links (Prominent & Spacious) */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-bold uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#simulasi"
            className="text-sm font-bold uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-950"
          >
            Simulasi
          </a>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/app"
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 font-mono text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors"
          >
            Dasbor App
          </Link>
          <Link
            href="/login"
            className="text-sm font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors px-2 py-1"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="text-sm font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors px-2 py-1"
          >
            Daftar
          </Link>
          <a
            href="#simulasi"
            className="rounded-xl bg-[#38E8F5] px-6 py-2.5 font-sans text-sm font-black text-[#032D30] shadow-sm transition-all hover:scale-105 hover:bg-[#25d4e2]"
          >
            Coba Simulasi
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className={clsx("h-0.5 w-5 bg-current transition-transform", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={clsx("h-0.5 w-5 bg-current transition-opacity", mobileOpen && "opacity-0")} />
            <span className={clsx("h-0.5 w-5 bg-current transition-transform", mobileOpen && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 mx-auto max-w-6xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl md:hidden">
          <div className="space-y-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-bold text-zinc-800 hover:text-[#38E8F5]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#simulasi"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-bold text-zinc-800 hover:text-[#38E8F5]"
            >
              Simulasi
            </a>
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href="/app"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-bold text-[#7866FF]"
                >
                  Dasbor
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-zinc-700 hover:text-zinc-950"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-zinc-700 hover:text-zinc-950"
                >
                  Daftar
                </Link>
              </div>
              <a
                href="#simulasi"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#38E8F5] px-4 py-2 text-sm font-black text-[#032D30]"
              >
                Coba Simulasi
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
