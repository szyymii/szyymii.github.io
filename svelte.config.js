import adapter from '@sveltejs/adapter-static'; // Zmienione z adapter-auto
import { relative, sep } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        runes: ({ filename }) => {
            const relativePath = relative(import.meta.dirname, filename);
            const pathSegments = relativePath.toLowerCase().split(sep);
            const isExternalLibrary = pathSegments.includes('node_modules');
            return isExternalLibrary ? undefined : true;
        }
    },
    kit: {
        // Konfiguracja dla GitHub Pages
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Ważne dla obsługi odświeżania stron
            precompress: false,
            strict: true
        }),
        paths: {
            // Jeśli Twoje repo nazywa się np. "moje-portfolio", odkomentuj linię poniżej:
            // base: process.env.NODE_ENV === 'production' ? '/moje-portfolio' : '',
        }
    },
    vitePlugin: {
        dynamicCompileOptions({ filename }) {
            if (filename.includes('node_modules')) {
                return { runes: undefined };
            }
        }
    }
};

export default config;