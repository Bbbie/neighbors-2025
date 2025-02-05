<template>
   <div class="min-h-screen flex flex-col items-stretch">
      <DevOnly>
         <StoryblokHelper />
      </DevOnly>
      <Header />
      <main class="flex-1">
         <Lenis root>
            <slot />
         </Lenis>
      </main>
      <NuxtLazyHydrate when-idle>
         <Footer />
      </NuxtLazyHydrate>
   </div>
</template>

<script setup lang="ts">
import type { GlobalSettings } from '~/interfaces/GlobalSettings'

const {
   data: {
      story: { content },
   },
} = await useStoryblokApi().get(`cdn/stories/settings/global`, {
   version: useSBVersion(),
   resolve_links: 'url',
})
const globalSettings = useState<GlobalSettings>('global-settings', () => content)
</script>

<style lang="scss">
@import '~/assets/scss/style.scss';
</style>
