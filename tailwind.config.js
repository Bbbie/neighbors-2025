const animate = require('tailwindcss-animate')
const containerQueries = require('@tailwindcss/container-queries')

/** @type {import('tailwindcss').Config} */
module.exports = {
   // SHADCN :: START
   darkMode: ['class'],
   safelist: ['dark'],
   // SHADCN :: END
   prefix: '',
   mode: 'jit',
   content: [
      'components/helpers/**/*.{html,js,vue}',
      'components/storyblok/**/*.{html,js,vue}',
      'components/local/**/*.{html,js,vue}',
      'pages/**/*.vue',
      './assets/**/*.scss',
   ],
   theme: {
      // SHADCN :: START
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      // SHADCN :: END
      extend: {
         fontFamily: {
            primary: 'var(--font-primary)',
            secondary: 'var(--font-secondary)',
         },
         fontSize: {
            base: '16px',
         },
         colors: {
            // DO NOT EDIT => go to /assets/scss/base/variables.scss
            primary: {
               100: 'rgb(var(--primary-100))',
               200: 'rgb(var(--primary-200))',
               300: 'rgb(var(--primary-300))',
               400: 'rgb(var(--primary-400))',
               DEFAULT: 'rgb(var(--primary-400))',
               foreground: 'hsl(var(--primary-foreground))', // SHADCN :: ONELINE
            },
            secondary: {
               DEFAULT: 'rgb(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))', // SHADCN :: ONELINE
            },
            neutral: {
               100: 'rgb(var(--neutral-100))',
               200: 'rgb(var(--neutral-200))',
               300: 'rgb(var(--neutral-300))',
               400: 'rgb(var(--neutral-400))',
               500: 'rgb(var(--neutral-500))',
               600: 'rgb(var(--neutral-600))',
               700: 'rgb(var(--neutral-700))',
               DEFAULT: 'rgb(var(--neutral-400))',
            },
            general: {
               black: 'rgb(var(--general-black))',
            },

            // SHADCN :: START
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            // SHADCN :: END
         },

         // SHADCN :: START
         borderRadius: {
            xl: 'calc(var(--radius) + 4px)',
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
            'collapsible-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-collapsible-content-height)' },
            },
            'collapsible-up': {
               from: { height: 'var(--radix-collapsible-content-height)' },
               to: { height: 0 },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'collapsible-down': 'collapsible-down 0.2s ease-in-out',
            'collapsible-up': 'collapsible-up 0.2s ease-in-out',
         },
         // SHADCN :: END
      },
      screens: {
         xxl: { max: '1200px' },
         xl: { max: '1100px' },
         lg: { max: '1024px' },
         md: { max: '768px' },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [animate, containerQueries], // SHADCN :: ONELINE
}
