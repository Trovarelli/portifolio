"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
