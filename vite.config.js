import { defineConfig } from 'vite';

export default defineConfig({
  // base: '/stocklab/', // descomenta solo si despliegas en GitHub Pages
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // silencia avisos que vienen de node_modules
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      },
    },
  },
});