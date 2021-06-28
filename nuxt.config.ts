export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iBook',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor'],
  /* Executando plugins apenas no server/ssr/terminal:
  plugins: [{ src: '@/plugins/hello', mode: 'server' }],

  Executando plugins apenas no client/navegador:
    plugins: [{ src: '@/plugins/hello', mode: 'client' }],
  */

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Para importar automaticamente tds os components dentro de subpastas, na pasta components:
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  styleResources: {
    // your settings here
    scss: ['@/components/bosons/*.scss'],
  },

  /* Opções do module de Nuxt axios, baixado em -> https://modules.nuxtjs.org/:
   e definido como: "@nuxtjs/axios" no array de types, do "tsconfig.json" */
  axios: {
    baseURL: 'https://api-ibook-thiagosilvalopes.herokuapp.com/',
  },
  /* Se eu quiser mudar a URL do projeto com base no ambiente de produção ou dev:
      baseURL: process.env.NOV_ENV === 'production' ? '' : 'http://localhost:3333', 
  */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
