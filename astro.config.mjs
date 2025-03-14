import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    mode: 'ssr',
    output: 'server',
    adapter: node(),
    site: 'https://sae203.melvyn-philippon.fr',
    integrations: [
        tailwind(),
    ],
    build: {
    },
});
