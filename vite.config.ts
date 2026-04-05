import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	ssr: {
		// To rozwiązuje błąd 500 z ikonami przy włączonym SSR
		noExternal: ['@tabler/icons-svelte']
	},
	optimizeDeps: {
		// Przyspiesza ładowanie ikon w trybie dev
		include: ['@tabler/icons-svelte']
	}
});