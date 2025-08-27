"use client";
import Image from "next/image";
import { profile } from "@/data/profile";
import avatar from "@/public/avatar.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="Avatar"
          width={56}
          height={56}
          className="rounded-full ring-1 ring-slate-300 dark:ring-slate-700 bg-slate-200 dark:bg-slate-800"
          priority
        />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{profile.name}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            {profile.headline}
          </p>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-2">
        <a
          className="px-3 py-2 rounded-full bg-slate-200 dark:bg-slate-900/70 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 text-sm"
          href="#projetos"
        >
          Projetos
        </a>
        <a
          className="px-3 py-2 rounded-full bg-slate-200 dark:bg-slate-900/70 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 text-sm"
          href="#experiencia"
        >
          Experiência
        </a>
        <a
          className="px-3 py-2 rounded-full bg-slate-200 dark:bg-slate-900/70 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 text-sm"
          href="#contato"
        >
          Contato
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
