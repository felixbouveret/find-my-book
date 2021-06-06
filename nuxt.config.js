export default {
  head: {
    title: 'find-my-book-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/styles/reset.css'],

  plugins: ['~/plugins/globalComponents.js', '~/plugins/axios'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],

  axios: {
    baseURL: process.env.API_ENTRY_POINT,
  },

  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[folder]-[local]-[emoji]',
        },
      },
    },
  },
};
