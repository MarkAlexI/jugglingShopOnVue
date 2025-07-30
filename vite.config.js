import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    allowedHosts: ['258e7867-489b-4b52-876c-c1ad1de255fa-00-15wf4dh4x0hsp.kirk.replit.dev'],
  },
  build: {
    outDir: './dist',
    publicDir: './public',
    rollupOptions: {
      input: './main.html',
    },
  }
});