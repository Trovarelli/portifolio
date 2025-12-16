"use client";
import { motion } from "framer-motion";
import { skills, categoryLabels, levelColors } from "@/data/skills";
import { Code2, Sparkles } from "lucide-react";

export default function SkillsShowcase() {
  const categories = ['frontend', 'backend', 'mobile', 'devops'] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles size={20} className="text-slate-600 dark:text-slate-400" />
        <h2 className="text-2xl font-bold">Skills & Tecnologias</h2>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Code2 size={16} />
                {categoryLabels[category]}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {categorySkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${levelColors[skill.level]} text-white font-medium text-sm shadow-md hover:shadow-lg transition-shadow cursor-default`}>
                      {skill.name}
                    </div>
                    {/* Tooltip com nível */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-slate-900 dark:bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {skill.level === 'expert' ? 'Expert' : skill.level === 'advanced' ? 'Avançado' : 'Intermediário'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500" />
          <span>Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500" />
          <span>Avançado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500" />
          <span>Intermediário</span>
        </div>
      </div>
    </section>
  );
}
