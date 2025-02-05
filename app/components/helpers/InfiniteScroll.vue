<template>
   <div ref="InfiniteScrollRef">
      <slot />
   </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'

const emit = defineEmits(['scrollEnd'])

const InfiniteScrollRef = ref<HTMLElement | null>(null)

let timeline
function setScrollEnd() {
   if (!!timeline) timeline.kill()

   timeline = useNuxtApp().$gsap.timeline({
      scrollTrigger: {
         trigger: InfiniteScrollRef.value!,
         start: 'bottom 100%',
         onEnter: () => {
            emit('scrollEnd')
            timeline.kill()
         },
      },
   })
}

useResizeObserver(InfiniteScrollRef, () => {
   setScrollEnd()
})
</script>
