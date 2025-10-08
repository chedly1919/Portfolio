import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ permet à Vercel de bien gérer les chemins relatifs
  build: {
    outDir: 'dist', // ✅ dossier de sortie pour le build
  },
})
