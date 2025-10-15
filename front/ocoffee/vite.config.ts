import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Pour GitHub Pages : utiliser le nom du dépôt comme base si le site est servi
  // depuis https://<username>.github.io/<repo>/
  base: '/O-Coffee-2.0/',
  plugins: [react()],
})
