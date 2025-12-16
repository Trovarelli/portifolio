"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import avatar from "@/public/avatar.png";
import ThemeToggle from "./ThemeToggle";
import { ArrowDown } from "lucide-react";

export default function Header() {
  return (
    <header className="relative -mx-4 px-4 py-16 md:py-24 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      </div>
      
      {/* Animated gradient orb */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-slate-300/10 to-slate-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.nav 
          className="flex justify-end items-center gap-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            className="px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-slate-300/50 dark:ring-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm transition-all"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-slate-300/50 dark:ring-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm transition-all"
            href="#projetos"
          >
            Projetos
          </a>
          <a
            className="px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-slate-300/50 dark:ring-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm transition-all"
            href="#experiencia"
          >
            Experiência
          </a>
          <a
            className="px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-slate-300/50 dark:ring-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm transition-all"
            href="#contato"
          >
            Contato
          </a>
          <ThemeToggle />
        </motion.nav>

        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-slate-400 rounded-full blur-lg opacity-20" />
              <Image
                src={avatar}
                alt="Avatar"
                width={120}
                height={120}
                className="relative rounded-full ring-4 ring-white dark:ring-slate-800 bg-slate-200 dark:bg-slate-800"
                priority
              />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span className="gradient-text">{profile.name}</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {profile.headline}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 dark:bg-slate-700 text-white font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transition-all hover:scale-105"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
              >
                LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
              >
                Currículo
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#skills" className="animate-bounce">
            <ArrowDown className="text-slate-400" size={24} />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
