<template>
   <StoryblokComponent :blok="page.content" />
</template>

<script setup lang="ts">
import type { Page } from '~/interfaces/Page'

const route = useRoute()
const page = useState<Page | any>()

// ===== PAGE =====
try {
   const { path, language } = useParseRoute(route)
   useLog('=== FETCHING', path, 'in', language, 'as', useSBVersion())

   const response: any = await useAsyncData(
      path,
      async () =>
         await useStoryblokApi().get(`cdn/stories/${path}`, {
            version: useSBVersion(),
            language,
            resolve_links: 'url',
         }),
   )
   page.value = response.data.value.data.story
   useStoryblokHelper().setPage(page.value)
} catch (err) {
   throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden' })
}

onMounted(() => {
   useStoryblokBridge(page.value!.id, (evStory) => {
      page.value = evStory
   })
})
</script>
