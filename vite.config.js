import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tmbantigue-portfolio/', // Set this to your repository name for GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.{png,jpg,jpeg,JPG,PNG}'],
  server: {
    port: 3000, 
    fs: {
      allow: ['..'], // This is to allow file access outside of the project directory
    }
  }
});