// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://aztrocat16.github.io',
    base: 'unplash',
    env: {
        schema: {
            API_URL: envField.string({default: "hola", optional: false, access: "public", context: "client"})
        }
    }
});
