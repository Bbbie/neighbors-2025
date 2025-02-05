<template>
   <NuxtLink
      v-if="type == 'a'"
      class="Button flex items-center gap-2"
      :to="href"
      :target="target"
      :aria-label="`Gehe zu ${ariaLabel}`"
      :tabindex="tabIndex"
      :data-appearance="appearance">
      {{ label }}
   </NuxtLink>
   <button
      v-else-if="type == 'button'"
      class="Button flex items-center gap-2"
      :href="href"
      :target="target"
      :aria-label="`Gehe zu ${ariaLabel}`"
      :tabindex="tabIndex"
      :data-appearance="appearance">
      {{ label }}
   </button>
</template>

<script setup lang="ts">
const props = withDefaults(
   defineProps<{
      label: string
      href?: string
      target?: string
      type?: string // HTML Type like 'a' or 'button'
      ariaLabel?: string
      tabIndex?: number
      appearance?: 'primary' | 'secondary' | string
   }>(),
   {
      target: '_self',
      type: 'a',
      tabIndex: 0,
   },
)
</script>

<style lang="scss" scoped>
a,
button {
   @apply inline-flex;
   @apply uppercase text-[1.8rem];
   @apply rounded-[8px];
   @apply px-6 pt-4 pb-2;
   @apply border border-transparent;
   @apply cursor-pointer;
   @apply transition-all duration-200;

   &:hover {
      @apply scale-105;
   }
}

[data-appearance='primary'] {
   @apply bg-primary text-white;
}
[data-appearance='outline'] {
   @apply border-primary text-primary;
}
[data-appearance='secondary'] {
   @apply bg-secondary text-white;
}
</style>
