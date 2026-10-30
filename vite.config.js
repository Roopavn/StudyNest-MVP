import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // The app bundle currently exceeds Workbox's default 2 MiB precache limit.
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'AR CodeLab — IT Learning Lab',
        short_name: 'AR CodeLab',
        description: 'Learn IT courses, practise code, prepare for interviews, and follow system setup guides.',
        theme_color: '#1e3a8a',
        background_color: '#f7f8fc',
        display: 'standalone',
        orientation: 'any',
        start_url: './',
        scope: './',
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ],
  base: process.env.GITHUB_PAGES === 'true' ? '/StudyNest-MVP/' : '/',
})
