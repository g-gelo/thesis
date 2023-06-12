import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: ["@vite-pwa/nuxt"],
    pwa: {
        manifest: {
            name: "Guidance Connect",
            short_name: "Guidance",
            description: "Testing pwa",
            icons: [
                {
                    src: "icons/icon64x64.png",
                    sizes: "64x64",
                    type: "image/png",
                },
                {
                    src: "icons/icon72x72.png",
                    sizes: "72x72",
                    type: "image/png",
                },
                {
                    src: "icons/icon96x96.png",
                    sizes: "96x96",
                    type: "image/png",
                },
                {
                    src: "icons/icon128x128.png",
                    sizes: "128x128",
                    type: "image/png",
                },
                {
                    src: "icons/icon256x256.png",
                    sizes: "256x256",
                    type: "image/png",
                },
                {
                    src: "icons/icon512x512",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },

    devtools: { enabled: true },
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
    ],
    build: {
        transpile: ["vuetify"],
    },
});
