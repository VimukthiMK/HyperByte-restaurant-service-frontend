import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },   
  },
  server: {
    host: true, // This ensures that Vite listens on all IP addresses, not just localhost
    watch: {
      usePolling: true, 
    },
  },
})