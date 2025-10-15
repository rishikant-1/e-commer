import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/user': {
        // target: 'http://localhost:5000',
        target: 'https://e-commer-zmu4.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/api/seller': {
        // target: 'http://localhost:5000',
        target: 'https://e-commer-zmu4.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/api/cart': {
        // target: 'http://localhost:5000',
        target: 'https://e-commer-zmu4.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
