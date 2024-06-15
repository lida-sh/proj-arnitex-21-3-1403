 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', "nuxt-marquee"],
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'https://arnitex.ir',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/api/v1',
  //       },
  //     },
  //   },
  // },
  // axios: {
  //   proxy: true,
  // },
});

