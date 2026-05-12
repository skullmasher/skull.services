import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'nuxt-security',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-svgo',
  ],

  components: [{
    path: '~/components',
    pathPrefix: false,
  }],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: []
    }
  },

  css: ['~/assets/app.css'],

  svgo: {
    autoImportPath: './assets/svg/',
    componentPrefix: 'svg',
    global: false,
    dts: true,
  },

  app: {
    head: {
      title: 'Florian Ledru - Réduire et simplifier les coûts informatiques des PME', // default fallback title
      htmlAttrs: { lang: 'fr', class: 'scroll-smooth' },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  security: {
    requestSizeLimiter: {
      maxRequestSizeInBytes: 100000, // 100Ko
    },
  },

  runtimeConfig: {
    smtpUser: '',
    smtpPass: '',
  },

  content: {
    experimental: { sqliteConnector: 'native' },
  },
})
