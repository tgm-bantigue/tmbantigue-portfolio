import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tmbantigue-portfolio',
  plugins: [react()],
  assetsInclude: ['**/*.{png,jpg,jpeg,JPG,PNG}'],
  server: {
    port: 3000, 
    fs: {
      allow: ['..'],
    }
  }
});