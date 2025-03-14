import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    mode: 'ssr', // ou 'spa' selon vos besoins
    output: 'server',
    adapter: node(),
    site: 'https://sae203.melvyn-philippon.fr',
    integrations: [
        tailwind(),
        // Ajoutez ici d'autres intégrations si nécessaire
    ],
    build: {
        // Autres configurations de build si nécessaire
    },
});