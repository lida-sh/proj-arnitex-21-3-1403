// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "nuxt-marquee",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  srcDir: "src/",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components",
    },
  ],
  plugins: ["~/plugins/auth.js"],
});