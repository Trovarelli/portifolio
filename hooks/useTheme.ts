"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type Mode = Theme | "system";

const getDomTheme = (): Theme =>
  typeof document === "undefined"
    ? "light"
    : document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme() {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Mode) ?? "system";
  });

  const theme: Theme = useMemo(() => (mode === "system" ? getDomTheme() : mode), [mode]);

  const apply = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", t === "dark");
    root.style.colorScheme = t;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mode === "system") {
      localStorage.removeItem("theme");
      apply(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } else {
      localStorage.setItem("theme", mode);
      apply(mode);
    }
  }, [mode, apply]);

  useEffect(() => {
    if (mode !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply(mql.matches ? "dark" : "light");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode, apply]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => e.key === "theme" && setMode((e.newValue as Mode) ?? "system");
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = getDomTheme() === "dark" ? "light" : "dark";
    setMode(next);
  }, []);

  return { mode, setMode, theme, setTheme: (t: Theme) => setMode(t), toggle };
}
