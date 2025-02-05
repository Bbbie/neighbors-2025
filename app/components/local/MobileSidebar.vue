<template>
   <div class="MobileSidebar bg-white fixed inset-0 z-50 overflow-auto px-12 pt-40" :data-hidden="!visible">
      <pre class="w-full">
				MOBILE SIDEBAR
			</pre
      >
   </div>
</template>

<script setup lang="ts">
const props = withDefaults(
   defineProps<{
      header: any
      visible: boolean
   }>(),
   {
      visible: false,
   },
)
</script>

<style lang="scss" scoped>
div.MobileSidebar {
   @apply transition-all duration-300;
}

[data-hidden='true'] {
   @apply translate-x-[-100%] pointer-events-none;
}
</style>
