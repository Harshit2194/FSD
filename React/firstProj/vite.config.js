import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

  // custom port
  export default defineConfig({
  plugins: [react()],
  server: {
    port: 2194, 
  },
})
