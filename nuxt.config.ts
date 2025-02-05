// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: {
      enabled: true,
      timeline: {
         enabled: true,
      },
   },

   ssr: true,

   experimental: {
      viewTransition: true,
   },

   future: {
      compatibilityVersion: 4,
   },

   devServer: {
      https: {
         key: './localhost-key.pem',
         cert: './localhost.pem',
      },
   },

   nitro: {
      preset: 'vercel-edge',
      vercel: {
         config: {
            bypassToken: process.env.VERCEL_BYPASS_TOKEN,
         },
      },
   },

   image: {
      storyblok: {
         baseURL: 'https://a.storyblok.com',
      },
   },

   css: ['~/assets/shadcn.css'],

   modules: [
      '@nuxtjs/tailwindcss',
      [
         '@storyblok/nuxt',
         {
            accessToken: process.env.SB_CLIENT_ACCESS_TOKEN,
            bridge: true,
            devtools: true,
            apiOptions: {},
            useApiClient: true,
            componentsDir: false,
         },
      ],
      'nuxt-feather-icons',
      'dayjs-nuxt',
      '@nuxt/image',
      'nuxt-security',
      '@hypernym/nuxt-gsap',
      'nuxt-lazy-hydrate',
      'nuxt3-lenis',
      'shadcn-nuxt',
      'v-gsap-nuxt',
   ],

   shadcn: {
      prefix: '',
      componentDir: './app/components/ui',
   },

   gsap: {
      composables: true,
      extraPlugins: {
         scrollTrigger: true,
         scrollTo: true,
      },
   },

   security: {
      enabled: process.env.NODE_ENV != 'development',
      headers: {
         contentSecurityPolicy: {
            'frame-ancestors': ['https://app.storyblok.com'],
         },
      },
   },

   app: {
      head: {
         link: [
            {
               rel: 'icon',
               type: 'image/png',
               href: '/favicon/favicon-48x48.png',
               sizes: '48x48',
            },
            {
               rel: 'icon',
               type: 'image/svg+xml',
               href: '/favicon/favicon.svg',
            },
            {
               rel: 'shortcut icon',
               href: '/favicon/favicon.ico',
            },
            {
               rel: 'apple-touch-icon',
               href: '/favicon/apple-touch-icon.png',
               sizes: '180x180',
            },
            {
               rel: 'manifest',
               href: '/favicon/site.webmanifest',
            },
         ],
         meta: [
            {
               name: 'apple-mobile-web-app-title',
               content: 'Lang Consult',
            },
         ],
      },
   },

   srcDir: 'app/',

   runtimeConfig: {
      public: {
         ENVIRONMENT: process.env.NODE_ENV,
         SB_CLIENT_ACCESS_TOKEN: process.env.SB_CLIENT_ACCESS_TOKEN,
      },
   },

   components: {
      dirs: [
         {
            path: '~/components/storyblok',
            global: true,
            pathPrefix: true,
         },
         {
            path: '~/components/local',
            global: true,
            pathPrefix: true,
         },
         {
            path: '~/components/helpers',
            global: true,
            pathPrefix: true,
         },
      ],
   },

   compatibilityDate: '2024-07-04',

   routeRules: {
      '/**':
         process.env.NODE_ENV == 'development'
            ? {
                 ssr: true,
              }
            : {
                 isr: 60,
                 cache: { maxAge: 60 },
              },
      '/api/**': { isr: false },
      // Redirects from old website to new (permanent redirect with Status 301/308)
      '/old-path/*': { redirect: { to: '/', statusCode: 308 } },
   },

   plugins: ['~/plugins/autoAnimate', '~/plugins/MagicTransition'],
})
