export default defineNuxtConfig({
    modules: ["@vite-pwa/nuxt"],
    devtools: { enabled: true },
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
    ],
    build: {
        transpile: ["vuetify"],
    },
});
