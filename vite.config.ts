import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteNodeEnv from 'vite-plugin-node-environments'

export default defineConfig({
  plugins: [
    react(),
    viteNodeEnv(['DEBUG', 'PORT'])
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})