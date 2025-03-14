import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    adapter: node(),
    site: 'https://sae203.melvyn-philippon.fr',
    integrations: [
        // Ajoutez ici d'autres intégrations si nécessaire
    ],
    build: {
        // Autres configurations de build si nécessaire
    },
});