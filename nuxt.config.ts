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
  build: {
    transpile: ["vue-sonner", "chart.js"],
  },
  plugins: [
    "~/plugins/auth.js",
    // '~/plugins/chart.js'
  ],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL || "https://arnitex.ir/api/v1/",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        translate: "no",
        class: "notranslate",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#1f2667",
        },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#ff7028" },
        { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
        { name: "theme-color", content: "#ffffff" },
        { name: "google", content: "notranslate" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
      ],
      script: [],
    },
  },
});
