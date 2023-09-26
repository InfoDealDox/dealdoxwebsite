export default {
    // server: {
    //         host: '0.0.0.0'
    // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DealDox',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/pages-css/home-one.css',
    // '~/assets/css/pages-css/home-one.scss',
    // '~/assets/css/pages-css/home-two.css',
    // '~/assets/css/pages-css/home-two.scss',
    // '~/assets/css/pages-css/home-three.css',
    // '~/assets/css/pages-css/home-three.scss',
    // '~/assets/css/pages-css/home-four.css',
    // '~/assets/css/pages-css/home-four.scss',
    // '~/assets/css/pages-css/home-five.css',
    // '~/assets/css/pages-css/home-five.scss',
    // '~/assets/css/pages-css/home-six.css',
    // '~/assets/css/pages-css/home-six.scss',
    '~/assets/css/pages-css/footer.css',
    '~/assets/css/pages-css/footer.scss',
    '~/assets/css/pages-css/navbar.css',
    '~/assets/css/pages-css/navbar.scss',
    '~/assets/css/style.css',
    '~/assets/css/style.scss',
    '~/assets/css/remixicon.css',
    '~/assets/css/bootstrap.min.css',
    // '~/assets/css/pages-css/profile-authentication.css',
    // '~/assets/css/pages-css/profile-authentication.scss',
    '~/assets/css/pages-css/blog-details.css',
    '~/assets/css/pages-css/blog-details.scss',
    '~/assets/custom.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-seo'
    // '@nuxtjs/strapi',
  ],

  // site map configuration
  sitemap: {
    hostname: 'https://dealdox.io',
    gzip: true,
    exclude: [
      '/secret',
      '/coming-soon/**',
      '/careers/**',
      '/case-studies/**',
      '/sitemap/**'
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://cms.dealdox.io/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    loaders: {
      vue: {
        prettify: false
      }
    }
  },
  // seo: {
  //   // My custom configuration
  //   baseUrl: 'https://domain',
  //   name: '<name of site>',
  //   title: '<title default>',
  //   templateTitle: '%name% - %title%',
  //   description: '<description default>',
  //   canonical: 'auto',
  //   isForcedTrailingSlash: false
  // }
}