export default {
  head: {
    title: 'find-my-book-front',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/styles/reset.css', '@/styles/commons', '@/styles/_modules'],

  plugins: ['~/plugins/globalComponents.js', '~/plugins/axios'],

  components: true,

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources',
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
  ],

  styleResources: {
    scss: ['@/styles/*.scss'],
  },

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
