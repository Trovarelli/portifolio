# Portfólio – José Trovarelli Neto (Next.js + Tailwind)

Projeto de portfólio construído com **Next.js 14 (App Router)** + **Tailwind CSS** e **TypeScript**.

## Scripts

- `npm run dev` – ambiente local
- `npm run build` – build + export para estáticos em `out/` (para GitHub Pages)
- `npm run preview` – serve a pasta `out` localmente

## Deploy no GitHub Pages

1. Crie o repositório `portifolio` no GitHub.
2. Faça push do projeto.
3. Ative **Pages** em **Settings → Pages** e escolha **GitHub Actions**.
4. Use este workflow em `.github/workflows/deploy.yml`:
