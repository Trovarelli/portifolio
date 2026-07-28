"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bp-theme-toggle" aria-label="Escolher tema">
        <button type="button" className="bp-theme-button bp-focus">
          LIGHT
        </button>
        <span className="bp-theme-divider bp-mono">/</span>
        <button type="button" className="bp-theme-button bp-focus">
          DARK
        </button>
      </div>
    );
  }

  return (
    <div className="bp-theme-toggle" aria-label="Escolher tema">
      <button
        type="button"
        className={`bp-theme-button bp-focus ${theme === "light" ? "is-active" : ""}`}
        onClick={() => setMode("light")}
        aria-label="Ativar tema claro"
        aria-pressed={theme === "light"}
      >
        LIGHT
      </button>
      <span className="bp-theme-divider bp-mono">/</span>
      <button
        type="button"
        className={`bp-theme-button bp-focus ${theme === "dark" ? "is-active" : ""}`}
        onClick={() => setMode("dark")}
        aria-label="Ativar tema escuro"
        aria-pressed={theme === "dark"}
      >
        DARK
      </button>
    </div>
  );
}
