<template>
   <div class="Stories" :id>
      <slot v-if="status === 'loading'" name="loading"> Loading... </slot>

      <slot v-if="status === 'success' && !stories?.length" name="empty"> No Stories found </slot>

      <slot v-if="status == 'success'" name="default" :stories :rels />
   </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['fetched'])

const props = withDefaults(
   defineProps<{
      version?: 'draft' | 'published'
      language?: string
      starts_with?: string
      sort_by?: string // e.g. 'published_at:desc' or 'content.<some-field>:desc'
      component?: string
      by_uuids?: string[]
      search_term?: string
      resolve_relations?: string[]
      resolve_links?: 'link' | 'url' | 'story'
      limit?: number // max 100 // equals to "per_page"
      page?: number
      filter_query?: Object
      content_only?: boolean
      fetchOn?: 'client' | 'server'
      filterFn?: any
      delay?: number // milliseconds
      logs?: boolean
   }>(),
   {
      fetchOn: 'client',
      sort_by: 'published_at:desc',
      content_only: true,
      limit: 25,
      page: 1,
      logs: false,
      resolve_links: 'url',
   },
)
const id = useId()

const stories = ref<any[]>([])
const rels = ref({})
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

async function fetchStories() {
   status.value = 'loading'

   if (!!props.delay) await useSleep(props.delay)

   const SBOptions: any = {
      version: props.version || useSBVersion(),
      language: props.language || useGetLanguage(),
      sort_by: props.sort_by,
      per_page: props.limit,
      page: props.page,
      filter_query: props.filter_query || {},
   }
   if (props.component) SBOptions.filter_query.component = { like: props.component }
   if (props.starts_with) SBOptions.starts_with = props.starts_with
   if (props.by_uuids) SBOptions.by_uuids_ordered = props.by_uuids.join(',')
   if (props.search_term) SBOptions.search_term = props.search_term
   if (props.resolve_relations) SBOptions.resolve_relations = props.resolve_relations.join(',')

   const response = await useStoryblokApi()
      .getStories(SBOptions)
      .catch((err) => {
         status.value = 'error'
         console.error(err)
      })

   rels.value =
      response?.data?.rels?.reduce((accumulator, story, i) => {
         accumulator[story.uuid] = props.content_only
            ? { ...story.content, id: story.id, uuid: story.uuid, full_slug: story.full_slug }
            : story
         return accumulator
      }, {}) || {}

   let _stories =
      response?.data?.stories?.map((story) =>
         props.content_only ? { ...story.content, id: story.id, uuid: story.uuid, full_slug: story.full_slug } : story,
      ) || []

   if (props.filterFn) _stories = _stories.filter((s) => props.filterFn(s))
   stories.value = _stories
   status.value = 'success'

   emit('fetched', { stories: stories.value, rels: rels.value })

   if (props.logs)
      useLog(`[StoriesQuery id="${id}"]`, {
         SBOptions,
         response,
         stories: stories.value,
      })
}

if (props.fetchOn == 'client') onBeforeMount(() => fetchStories())
else await fetchStories()

// Refetch when props change
watch(props, async (newVal) => fetchStories(), { deep: true })

if (props.logs) {
   watch(status, async (newStatus, oldStatus) =>
      useLog(`[StoriesQuery id="${id}"]`, 'Status:', oldStatus, '->', newStatus),
   )
}
</script>

<!-- 
USE LIKE THIS:

# Shorthand syntax
<StoriesQuery #default="{ stories }">
	You can access "stories" here
</StoriesQuery> 

# Named slots syntax, including overrides for loading and empty states
<StoriesQuery component="Header" >
	<template #default="{ stories }">
			<pre>stories: {{ stories }}</pre>
	</template>

	<template #empty>
			<div>Empty Content here</div>
	</template>

	<template #loading>
			<div>Loading Content here</div>
	</template>
</StoriesQuery>

-->
