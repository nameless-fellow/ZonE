import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Londrina Sketch"', "cursive"],
        bodoni: ['"Bodoni Moda"', "serif"],
        bitcount: ['"Bitcount Prop Double Ink"', "system-ui"],
      },
    },
  },
})
