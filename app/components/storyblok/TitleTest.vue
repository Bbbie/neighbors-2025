<template>
   <section :class="blok.component" class="" v-editable="blok" :id="useID(blok)" :data-uid="blok._uid">
      <pre v-gsap.once.fromInvisible.from="{ x: -32 }">{{ blok?.title }}</pre>
   </section>
</template>

<script setup lang="ts">
const props = defineProps<{
   blok: {
      _uid: string
      title: string
      [key: string]: any
   }
}>()
</script>

<style lang="scss" scoped></style>
