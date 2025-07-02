import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/week3-MERN-Stack/', // Set to your repo name for GitHub Pages
  plugins: [react()],
});
