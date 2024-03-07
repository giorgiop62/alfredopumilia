import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Altre configurazioni...
  assetsInclude: ['**/*.JPG'], // Aggiungi questa riga per includere i file .JPG come asset
});
