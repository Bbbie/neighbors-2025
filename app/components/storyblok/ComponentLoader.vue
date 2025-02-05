<template>
   <StoryblokComponent :blok="section" v-if="!!section" />
</template>

<script setup lang="ts">
const props = defineProps<{
   blok: {
      _uid: string
      load: any // Blok
      [key: string]: any
   }
}>()

const section = ref()

const blokResponse = await useStoryblokApi().getStories({
   version: useSBVersion(),
   by_uuids: `${props.blok.load},`,
})

section.value = blokResponse?.data?.stories?.[0]?.content
</script>

<style lang="scss" scoped></style>
