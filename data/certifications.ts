export type Certification = {
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    image?: string;
};

export const certifications: Certification[] = [
    // Adicione suas certificações aqui
    // Exemplo:
    // {
    //   title: "AWS Certified Developer",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialUrl: "https://...",
    // },
];
