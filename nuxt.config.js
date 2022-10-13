const site = process.env.SITE || 'mock'
console.log('RUNNING SITE::',site)

const robotTag = (site === 'prod') ? { hid: 'robots', name: 'robots', content: 'index, follow' } : { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }

let _modules = [
  'nuxt-purgecss',
  '@nuxtjs/axios',
  '@nuxtjs/device',
  ['nuxt-buefy', { 
    css: false,
    materialDesignIcons: false,
  }],
  // ['@nuxtjs/google-tag-manager', 'GTM-ID-HERE']
]




export default {

  components: true,

  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      robotTag
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: '//fonts.googleapis.com', crossorigin: 'true' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700', crossorigin: 'true' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'assets/css/buefy.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/directives.js', ssr: true },
    { src: '~plugins/injected-functions.js', ssr: true },
    { src: '~plugins/global-components.js', ssr: true },
    { src: '~plugins/external-components.js', ssr: false },
    { src: '~plugins/lazysizes.min.js', ssr: false },
    { src: '~plugins/intersection-polyfill.min.js', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: _modules,

  purgeCSS: {
    enabled: process.env.NODE_ENV == 'production',
    paths: [
      'components/**/*.vue',
      'partials/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    whitelistPatterns: [/flickity\-/, /dot/, /modal\-/, /is\-n\-/, /has\-text\-/, /has\-background\-/]
  },
  
  env: {
    site: site
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV == 'production',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options:{
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        })
      }
    }
    
  }
}
