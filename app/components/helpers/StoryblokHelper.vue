<template>
   <ClientOnly>
      <a
         v-gsap.draggable
         :href="storyblokLink"
         target="_blank"
         class="fixed bottom-8 right-8 z-[9999]"
         title="In Storyblok öffnen"
         ref="StoryblokHelperRef">
         <img src="/icons/storyblok_icon.webp" alt="Edit page in Storyblok" width="24" class="translate-y-[2px]" />
      </a>
   </ClientOnly>
</template>

<script setup lang="ts">
import { onLongPress } from '@vueuse/core'
const StoryblokHelperRef = ref<HTMLElement>()

onLongPress(
   StoryblokHelperRef,
   () => {
      StoryblokHelperRef.value!.remove()
   },
   {
      modifiers: {
         prevent: true,
      },
   },
)

const { id } = (await useStoryblokApi().get(`cdn/spaces/me`))?.data?.space

const storyblokLink = computed(() => {
   if (!useStoryblokHelper()) return ''

   const storyID = (useStoryblokHelper().currentPage?.value as any).id
   return `https://app.storyblok.com/#/me/spaces/${id}/stories/0/0/${storyID}`
})
</script>

<style lang="scss"></style>
