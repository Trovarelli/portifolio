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

```yml
name: Deploy Next.js to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: 'out' }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

> Dica: se o repo NÃO for `SEUUSUARIO.github.io`, ative **Project Pages** e acesse em `https://SEUUSUARIO.github.io/portifolio`.

## Personalização
- Edite `data/profile.ts`, `data/projects.ts` e `data/experience.ts`.
- Substitua `public/avatar.png` pela sua foto (56x56px ou maior).

## Deploy na Vercel
1. Crie um projeto na Vercel e importe este repositório.
2. Não é necessário `next export`. Remova `output: 'export'` de `next.config.mjs` se usar Vercel.
