// import hooks from './hooks'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'online-shop',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/v-mask.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  publicRuntimeConfig: {
    baseURL: process.env.API_URL,
    axios: {
      baseURL: process.env.API_URL,
    },
  },

  privateRuntimeConfig: {
    baseURL: process.env.API_URL,
    axios: {
      baseURL: process.env.API_URL,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })
    },
  },
}
