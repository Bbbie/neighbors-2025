<template>
   <div class="MenuEntry flex flex-col lg:mt-12">
      <div class="flex items-center justify-between">
         <div class="Label uppercase lg:!text-[2.2rem]" v-if="!!menu.label">{{ menu.label }}</div>
      </div>

      <div class="flex flex-col">
         <div class="Spacer h-[16px]" v-if="!!menu.label"></div>
         <NuxtLink v-for="entry in menu.links" :key="entry._uid" :to="useParseLink(entry.link)" class="lg:py-1">{{
            entry.label
         }}</NuxtLink>
      </div>
   </div>
</template>

<script setup lang="ts">
import type { MenuEntry } from '~/interfaces/MenuEntry'

const props = withDefaults(
   defineProps<{
      menu: MenuEntry
   }>(),
   {},
)
</script>

<style lang="scss"></style>
