export type Skill = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
    level: 'expert' | 'advanced' | 'intermediate';
};

export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', level: 'expert' },
    { name: 'Next.js', category: 'frontend', level: 'expert' },
    { name: 'TypeScript', category: 'frontend', level: 'expert' },
    { name: 'JavaScript', category: 'frontend', level: 'expert' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
    { name: 'Vue.js', category: 'frontend', level: 'advanced' },
    { name: 'HTML/CSS', category: 'frontend', level: 'expert' },

    // Backend
    { name: 'Golang', category: 'backend', level: 'advanced' },
    { name: 'Node.js', category: 'backend', level: 'advanced' },
    { name: 'Express', category: 'backend', level: 'advanced' },
    { name: 'PostgreSQL', category: 'backend', level: 'advanced' },
    { name: 'MongoDB', category: 'backend', level: 'intermediate' },
    { name: 'REST APIs', category: 'backend', level: 'expert' },
    { name: 'Prisma', category: 'backend', level: 'advanced' },

    // Mobile
    { name: 'React Native', category: 'mobile', level: 'advanced' },

    // DevOps & Tools
    { name: 'Docker', category: 'devops', level: 'advanced' },
    { name: 'Git', category: 'devops', level: 'expert' },
    { name: 'CI/CD', category: 'devops', level: 'advanced' },
    { name: 'Linux', category: 'devops', level: 'intermediate' },
];

export const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    devops: 'DevOps & Tools',
    tools: 'Ferramentas',
} as const;

export const levelColors = {
    expert: 'from-slate-700 to-slate-600',
    advanced: 'from-slate-600 to-slate-500',
    intermediate: 'from-slate-500 to-slate-400',
} as const;
