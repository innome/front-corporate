// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve('./src/assets'),
        '@database': path.resolve('./src/database'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@styles': path.resolve('./src/styles'),
        '@pages': path.resolve('./src/pages'),
        '@types': path.resolve('./src/types'),
      },
    },
  },
});