import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  tone?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-luxe focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Sizes
        size === "sm" && "min-h-[38px] px-4 text-xs",
        size === "md" && "min-h-[46px] px-6 text-sm",
        size === "lg" && "min-h-[52px] px-8 text-base font-semibold",
        // Variants
        variant === "primary" &&
          "bg-[#38E8F5] text-[#032D30] hover:bg-[#25d4e2] hover:shadow-studio-glow focus:ring-[#38E8F5]",
        variant === "dark" &&
          "bg-[#18140B] text-white hover:bg-black shadow-md focus:ring-zinc-900",
        variant === "secondary" &&
          "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm focus:ring-zinc-400",
        variant === "outline" &&
          "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400 shadow-sm focus:ring-zinc-400",
        variant === "ghost" &&
          "text-current hover:text-[#38E8F5] hover:bg-black/5 dark:hover:bg-white/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
