<template>
   <Welcome />
</template>

<script lang="ts" setup>
useHead({
   htmlAttrs: {
      lang: 'en',
   },
   title: `Welcome to 5AM + Nuxt`,
   meta: [
      {
         name: 'description',
         content: 'Welcome to 5AM + Nuxt',
      },
   ],
})
</script>
