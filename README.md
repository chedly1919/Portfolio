# Portfolio FR - Vite + React + Tailwind

## Prerequis
- Node.js 18+
- npm

## Installation
```bash
npm install
npm run dev
```

## Personnalisation
- Modifie `src/data/portfolioData.js` pour ton contenu.
- Modifie `src/portfolio-fr.jsx` pour la structure et l'UI.
- Mets les assets dans `public/bi-the-way`.

## Build de production
```bash
npm run build
npm run preview
```

## Deploiement Vercel
1. Cree un repository GitHub et pousse ce projet.
2. Va sur `https://vercel.com/new`.
3. Importe ton repo GitHub.
4. Laisse les reglages par defaut :
   `Framework Preset: Vite`
   `Build Command: vite build`
   `Output Directory: dist`
5. Clique sur `Deploy`.

Tu obtiendras un lien public du type :
`https://ton-portfolio.vercel.app`
