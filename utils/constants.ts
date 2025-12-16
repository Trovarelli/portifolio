export const designTokens = {
  // Cores de destaque
  colors: {
    primary: {
      DEFAULT: 'rgb(99, 102, 241)', // indigo-500
      dark: 'rgb(129, 140, 248)', // indigo-400
      gradient: 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(139, 92, 246) 100%)',
    },
    accent: {
      DEFAULT: 'rgb(139, 92, 246)', // violet-500
      dark: 'rgb(167, 139, 250)', // violet-400
      gradient: 'linear-gradient(135deg, rgb(236, 72, 153) 0%, rgb(239, 68, 68) 100%)',
    },
    success: 'rgb(34, 197, 94)', // green-500
    warning: 'rgb(251, 146, 60)', // orange-400
  },

  // Animações
  animations: {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easings: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },

  // Glassmorphism
  glass: {
    light: 'rgba(255, 255, 255, 0.1)',
    lightStrong: 'rgba(255, 255, 255, 0.2)',
    dark: 'rgba(0, 0, 0, 0.1)',
    darkStrong: 'rgba(0, 0, 0, 0.2)',
  },

  // Sombras
  shadows: {
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
    glowStrong: '0 0 40px rgba(99, 102, 241, 0.5)',
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
} as const;

// Variantes de animação para Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

// Container com stagger para filhos
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
