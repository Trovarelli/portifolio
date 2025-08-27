"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, Check, Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeDropdown() {
  const { mode, setMode, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Option = ({
    value,
    label,
    Icon,
  }: {
    value: "light" | "dark" | "system";
    label: string;
    Icon: React.ElementType;
  }) => (
    <button
      className="flex w-full items-center justify-between gap-2 px-3 py-2 text-sm
                 hover:bg-slate-100 dark:hover:bg-slate-700"
      onClick={() => {
        setMode(value);
        setOpen(false);
      }}
      role="menuitemradio"
      aria-checked={mode === value}
    >
      <span className="flex items-center gap-2">
        <Icon className="h-4 w-4" /> {label}
      </span>
      {mode === value && (
        <Check className="h-4 w-4 text-slate-600 dark:text-slate-300" />
      )}
    </button>
  );

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Botão que abre o dropdown */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full
                   bg-slate-200 text-slate-800
                   dark:bg-slate-700 dark:text-slate-200
                   ring-1 ring-black/5 dark:ring-white/10
                   focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Palette className="h-4 w-4" />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-40 rounded-md border border-slate-300 dark:border-slate-700
                     bg-white dark:bg-slate-800 shadow-lg z-50"
          role="menu"
        >
          <Option value="light" label="Claro" Icon={Moon} />
          <Option value="dark" label="Escuro" Icon={Sun} />
          <Option value="system" label="Sistema" Icon={Monitor} />
        </div>
      )}
    </div>
  );
}
