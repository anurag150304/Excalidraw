"use client";

import { ToastProvider } from "@repo/ui/ToastProvider";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
