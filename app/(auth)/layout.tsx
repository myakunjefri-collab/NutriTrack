import type { ReactNode } from "react";
import AuthShell from "@/components/auth/AuthShell";

// Layout ini TIDAK unmount saat berpindah /login <-> /register, itulah yang membuat transisi panel bisa mulus.
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthShell>{children}</AuthShell>;
}
