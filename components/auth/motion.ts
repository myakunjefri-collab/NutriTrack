import type { Variants } from "framer-motion";

export const EASE_SWAP = [0.76, 0, 0.24, 1] as [number, number, number, number];
export const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Wadah form: anak-anaknya muncul berurutan setelah panel selesai bergeser. */
export const stagger = (delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

export const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
