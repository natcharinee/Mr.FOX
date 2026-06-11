import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/foxy': {
        target: 'https://www.foxy.club',
        changeOrigin: true,
        rewrite: (requestPath) => requestPath.replace(/^\/api\/foxy/, ''),
      },
    },
  },
})
