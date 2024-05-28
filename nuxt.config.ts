// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@formkit/nuxt", "nuxt-icon","@nuxt/ui"],
  //@ts-ignore
  formkit: {
    autoImport: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    "@": resolve(__dirname, "/app.vue"),
  },

  css: ["~/assets/main.scss"],
  //@ts-ignore
  head: {
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href: "https://fonts.googleapis.com/css2?family=Manorpe:wght@400;500;700&display=swap",
    //   },
    // ],
    link: [
      {
        rel: "icon",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
      },
    ],
  },
});
