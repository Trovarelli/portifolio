"use client";
import Image from "next/image";
import { profile } from "@/data/profile";
import avatar from "@/public/avatar.png";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="Avatar"
          width={56}
          height={56}
          className="rounded-full ring-1 ring-zinc-700 bg-zinc-800"
          priority
        />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{profile.name}</h1>
          <p className="text-zinc-400 text-sm md:text-base">
            {profile.headline}
          </p>
        </div>
      </div>
      <nav className="flex flex-wrap gap-2">
        <a
          className="px-3 py-2 rounded-full bg-zinc-900/70 ring-1 ring-zinc-700 hover:bg-zinc-800 text-sm"
          href="#projetos"
        >
          Projetos
        </a>
        <a
          className="px-3 py-2 rounded-full bg-zinc-900/70 ring-1 ring-zinc-700 hover:bg-zinc-800 text-sm"
          href="#experiencia"
        >
          Experiência
        </a>
        <a
          className="px-3 py-2 rounded-full bg-zinc-900/70 ring-1 ring-zinc-700 hover:bg-zinc-800 text-sm"
          href="#contato"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
