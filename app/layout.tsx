import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "José Trovarelli Neto • Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Golang. Experiência em arquitetura de sistemas e soluções escaláveis.",
  keywords: ["José Trovarelli", "Full Stack Developer", "React", "Next.js", "TypeScript", "Golang", "Node.js", "Desenvolvedor"],
  authors: [{ name: "José Trovarelli Neto" }],
  creator: "José Trovarelli Neto",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://trovarelli.github.io/portifolio/",
    title: "José Trovarelli Neto • Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Golang.",
    siteName: "José Trovarelli Neto - Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Trovarelli Neto • Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Golang.",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className="scroll-smooth motion-reduce:scroll-auto"
    >
      <head>
        <link
          rel="icon"
          href={`${basePath}/favicon.svg`}
          type="image/svg+xml"
        />
        <link rel="alternate icon" href={`${basePath}/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          href={`${basePath}/apple-touch-icon.png`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (theme === 'dark' || (!theme && systemDark)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        <div className="max-w-6xl mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
