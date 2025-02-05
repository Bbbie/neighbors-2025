<template>
   <BaseButton :href="useParseLink(blok?.link)" :label="blok?.label" :appearance="blok.appearance" />
</template>

<script setup lang="ts">
import type { Button } from '~/interfaces/Button'

const props = defineProps<{
   blok: Button
}>()
</script>

<style lang="scss" scoped></style>
