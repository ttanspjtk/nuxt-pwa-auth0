import 'dotenv/config'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js + Auth0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/main.css'
  ],
  /*
  ** Modules
  */
  modules: [
    // axios is required by @nuxtjs/auth
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  pwa: {
    meta: {
      title: "Nuxt-PWA-Auth0",
      author: "me"
    },
    manifest: {
      name: "Nuxt-PWA-Auth0",
      lang: "en"
    }
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  },
  server: {
    port: 4040
  }
}
