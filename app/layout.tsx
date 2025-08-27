import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "José Trovarelli Neto • Portfólio",
  description:
    "Portfólio de José Trovarelli Neto - Front-end (React/Next.js) e Back-end (Golang)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
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
