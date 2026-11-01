"use client";

import { useId, useState, type ReactNode } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { AuthRoleInfo, AuthRole } from "@/lib/auth-data";

const CYAN = "#38E8F5";
const CORAL = "#FF764C";

/* ---------- Input dengan label mengambang ---------- */
export function FloatingField({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  autoComplete,
  inputMode,
  right,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "email" | "tel";
  right?: ReactNode;
}) {
  return (
    <div className="font-sans">
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={clsx(
            "peer h-14 w-full rounded-2xl border bg-zinc-50/70 px-4 pt-5 font-sans text-[15px] font-medium text-zinc-950 outline-none transition-all duration-200 placeholder-transparent focus:bg-white focus-visible:ring-4",
            right && "pr-12",
            error
              ? "border-[#FF764C] focus:border-[#FF764C] focus-visible:ring-[#FF764C]/25"
              : "border-zinc-200 hover:border-zinc-300 focus:border-[#38E8F5] focus-visible:ring-[#38E8F5]/30",
          )}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-2 font-sans text-[11px] font-semibold text-zinc-500 transition-all duration-200 peer-placeholder-shown:top-[1.1rem] peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#0FA9B7]"
        >
          {label}
        </label>
        {right && <div className="absolute inset-y-0 right-2 flex items-center">{right}</div>}
      </div>
      <FieldError id={id} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          key="err"
          id={`${id}-err`}
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden pt-1.5 font-mono text-[11px] font-bold text-[#C9411A]"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

/* ---------- Kata sandi + tombol lihat ---------- */
export function PasswordField(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <FloatingField
      {...props}
      type={show ? "text" : "password"}
      right={
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
          aria-pressed={show}
          className="grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-xl text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E8F5]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
            {show && <path d="M4 4l16 16" />}
          </svg>
        </button>
      }
    />
  );
}

/* ---------- Select ---------- */
export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
}) {
  return (
    <div className="font-sans">
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={clsx(
            "h-14 w-full appearance-none rounded-2xl border bg-zinc-50/70 px-4 pt-5 pr-11 font-sans text-[15px] font-medium outline-none transition-all duration-200 focus:bg-white focus-visible:ring-4",
            value ? "text-zinc-950" : "text-zinc-400",
            error
              ? "border-[#FF764C] focus:border-[#FF764C] focus-visible:ring-[#FF764C]/25"
              : "border-zinc-200 hover:border-zinc-300 focus:border-[#38E8F5] focus-visible:ring-[#38E8F5]/30",
          )}
        >
          <option value="">Pilih…</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <label htmlFor={id} className="pointer-events-none absolute left-4 top-2 font-sans text-[11px] font-semibold text-zinc-500">
          {label}
        </label>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <FieldError id={id} message={error} />
    </div>
  );
}

/* ---------- Pilihan peran (segmented dengan indikator meluncur & efek tekan tactile) ---------- */
export function RoleSegmented({
  value,
  onChange,
  roles,
  layoutId,
}: {
  value: AuthRole;
  onChange: (r: AuthRole) => void;
  roles: AuthRoleInfo[];
  layoutId: string;
}) {
  return (
    <div role="radiogroup" aria-label="Peran akun" className="flex flex-wrap gap-2">
      {roles.map((r) => {
        const active = value === r.key;
        const disabled = !!r.inviteOnly && layoutId.startsWith("reg");
        return (
          <button
            key={r.key}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            title={disabled ? "Hanya melalui undangan Admin Sistem" : undefined}
            onClick={() => onChange(r.key)}
            className={clsx(
              "relative min-h-[44px] inline-flex items-center justify-center rounded-xl border px-3.5 py-2 font-mono text-[11px] font-bold transition-all duration-150 active:scale-95",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38E8F5]/40 focus-visible:ring-offset-2",
              active ? "border-[#18140B] text-white" : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100",
              disabled && "cursor-not-allowed opacity-45 hover:bg-zinc-50 active:scale-100",
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-xl bg-[#18140B]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{r.name}</span>
            {disabled && <span className="relative z-10 ml-1.5 text-[9px] font-medium opacity-80">undangan</span>}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Kekuatan kata sandi ---------- */
export function strengthOf(pw: string) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 12) s++;
  return s;
}

export function StrengthMeter({ password }: { password: string }) {
  const s = strengthOf(password);
  const labels = ["", "Lemah", "Cukup", "Kuat", "Sangat kuat"];
  const colors = ["#E4E4E7", "#FF764C", "#FFCA38", "#38E8F5", "#91EB4C"];
  return (
    <div aria-live="polite" className="pt-1">
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 flex-1 rounded-full"
            initial={false}
            animate={{ backgroundColor: s >= i ? colors[s] : colors[0] }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <p className="mt-1.5 font-mono text-[11px] text-zinc-500">
        {password ? `Kekuatan: ${labels[s] || "Terlalu pendek"}` : "Minimal 8 karakter, campur huruf, angka, dan simbol."}
      </p>
    </div>
  );
}

/* ---------- Checkbox kustom (touch target >= 44px) ---------- */
export function Checkbox({
  id,
  checked,
  onChange,
  children,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: ReactNode;
  error?: string;
}) {
  const uid = useId();
  const fieldId = id || uid;
  return (
    <div className="font-sans">
      <label
        htmlFor={fieldId}
        className="flex min-h-[44px] cursor-pointer items-start gap-3 py-1 font-sans text-[13px] font-medium leading-snug text-zinc-700"
      >
        <input
          id={fieldId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-err` : undefined}
          className="peer sr-only"
        />
        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-zinc-300 bg-white transition-all duration-200 peer-checked:border-[#18140B] peer-checked:bg-[#18140B] peer-focus-visible:ring-4 peer-focus-visible:ring-[#38E8F5]/40 [&_svg]:scale-0 peer-checked:[&_svg]:scale-100">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 text-[#38E8F5] transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
        <span>{children}</span>
      </label>
      <FieldError id={fieldId} message={error} />
    </div>
  );
}

/* ---------- Tombol kirim: idle -> loading -> done ---------- */
export type SubmitStatus = "idle" | "loading" | "done";

export function SubmitButton({
  status,
  children,
  doneLabel,
}: {
  status: SubmitStatus;
  children: ReactNode;
  doneLabel: string;
}) {
  const reduce = useReducedMotion();
  return (
    <button
      type="submit"
      disabled={status === "loading"}
      className="group relative flex h-14 min-h-[44px] w-full items-center justify-center overflow-hidden rounded-full bg-[#18140B] font-sans text-sm font-black text-white shadow-lg transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] disabled:opacity-85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38E8F5]/40 focus-visible:ring-offset-2"
    >
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["0%", "320%"] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
        />
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="relative flex items-center gap-2.5 font-sans"
        >
          {status === "idle" && (
            <>
              {children}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke={CYAN}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
          {status === "loading" && (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-[#38E8F5]" aria-hidden />
              Memproses…
            </>
          )}
          {status === "done" && (
            <>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="#91EB4C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="m5 12 5 5 9-10" />
              </svg>
              {doneLabel}
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export const CORAL_HEX = CORAL;
