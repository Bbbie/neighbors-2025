<template>
   <section :class="blok.component" class="" v-editable="blok" :id="useID(blok)" :data-uid="blok._uid">
      <!-- Hydrate the first two sections immediately -->
      <StoryblokComponent :blok="section" v-for="section in blok.body.slice(0, 2)" :key="section._uid" />

      <!-- Hydrate sections after second only when-idle -->
      <NuxtLazyHydrate when-visible v-for="section in blok.body.slice(2)" :key="section._uid">
         <StoryblokComponent :blok="section" />
      </NuxtLazyHydrate>
   </section>
</template>

<script setup lang="ts">
import type { GlobalSettings } from '~/interfaces/GlobalSettings'
import type { Page } from '~/interfaces/Page'

const props = defineProps<{
   blok: Page
}>()

const globalSettings = useState<GlobalSettings>('global-settings')

useHead({
   htmlAttrs: {
      lang: 'de',
   },
   title: `${props.blok.title} ${globalSettings.value.divider} ${globalSettings.value.page_title}`,
   meta: [
      {
         name: 'description',
         content: props.blok.description || globalSettings.value.description || '',
      },
      ...useOpenGraph(props.blok, globalSettings.value),
   ],
})
</script>

<style lang="scss" scoped></style>
