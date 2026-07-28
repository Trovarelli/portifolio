import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "José Trovarelli Neto • Backend Developer & Golang Specialist",
  description:
    "Portfólio de José Trovarelli Neto, engenheiro de software especializado em sistemas backend, Golang e arquiteturas distribuídas.",
  keywords: [
    "José Trovarelli",
    "Backend Developer",
    "Golang",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "José Trovarelli Neto" }],
  creator: "José Trovarelli Neto",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://trovarelli.github.io/portifolio/",
    title: "José Trovarelli Neto • Backend Developer & Golang Specialist",
    description:
      "Engenheiro de software especializado em sistemas backend, Golang e arquiteturas distribuídas.",
    siteName: "José Trovarelli Neto — Portfólio",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth motion-reduce:scroll-auto">
      <head>
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="alternate icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
