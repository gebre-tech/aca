import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aca-bwaw.onrender.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
