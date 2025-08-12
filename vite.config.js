import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/',
   base: '/React_Project/',
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       poppins: ['Poppins', 'sans-serif'],
  //     },
  //   },
  // },
  plugins: [
    tailwindcss(),
    react(),
  ],
})
