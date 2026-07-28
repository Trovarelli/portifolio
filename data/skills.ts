export type Skill = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
    level: 'expert' | 'advanced' | 'intermediate';
};

export const skills: Skill[] = [
    { name: 'Golang', category: 'backend', level: 'expert' },
    { name: 'Node.js', category: 'backend', level: 'advanced' },
    { name: 'Microservices', category: 'backend', level: 'expert' },
    { name: 'Clean Architecture', category: 'backend', level: 'advanced' },
    { name: 'REST APIs', category: 'backend', level: 'expert' },
    { name: 'gRPC', category: 'backend', level: 'intermediate' },

    { name: 'PostgreSQL', category: 'backend', level: 'expert' },
    { name: 'MongoDB', category: 'backend', level: 'intermediate' },
    { name: 'RabbitMQ', category: 'backend', level: 'intermediate' },
    { name: 'Kafka', category: 'backend', level: 'intermediate' },

    { name: 'Docker', category: 'devops', level: 'advanced' },
    { name: 'CI/CD', category: 'devops', level: 'advanced' },
    { name: 'Git', category: 'devops', level: 'expert' },
    { name: 'Linux', category: 'devops', level: 'intermediate' },

    { name: 'TypeScript', category: 'frontend', level: 'advanced' },
    { name: 'React/Next.js', category: 'frontend', level: 'advanced' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },

    { name: 'React Native', category: 'mobile', level: 'intermediate' },
];
export const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    devops: 'DevOps & Tools',
    tools: 'Ferramentas',
} as const;

export const levelColors = {
    expert: 'from-blue-600 to-blue-500',
    advanced: 'from-emerald-600 to-emerald-500',
    intermediate: 'from-amber-600 to-amber-500',
} as const;
