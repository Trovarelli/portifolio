"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const dark = root.classList.contains("dark");
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Alternar tema"
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
      onClick={toggleTheme}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
