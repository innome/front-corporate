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
				'@contexts': path.resolve('./src/contexts'),
				'@layouts': path.resolve('./src/layouts'),
				'@styles': path.resolve('./src/styles'),
				'@pages': path.resolve('./src/pages'),
				'@types': path.resolve('./src/types'),
				'@hooks': path.resolve('./src/hooks'),
				'@themes': path.resolve('./src/themes'),
				'@contexts': path.resolve('./src/contexts'),
				'@data': path.resolve('./src/data'),
				'@entries': path.resolve('./src/entries'),
				'@utils': path.resolve('./src/utils'),
				'@themes': path.resolve('./src/themes'),
			},
		},
	},
});
