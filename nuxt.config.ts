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
  build: {
    transpile: ['chart.js']
  },
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
  plugins: ["~/plugins/auth.js",
    // '~/plugins/chart.js'
  ],
  app: {
    head: {
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
      ],
      script: [],
    },
  },
});
