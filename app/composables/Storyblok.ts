export const useSBVersion = (): 'draft' | 'published' => {
   if (!!useRoute().query?._storyblok) return 'draft'
   if (useRuntimeConfig().public?.ENVIRONMENT == 'development') return 'draft'
   return 'published'
}

export const isStoryblokPreview = (): boolean => {
   if (!!useRoute().query?._storyblok) return true
   return false
}

// ATTENTION: THIS RUNS CLIENT SIDE!
export const useStoriesByUUID = async (fetchName: string, uuids: string[], contentOnly: boolean = true) => {
   if (!uuids?.length) return []

   const { path, language } = useParseRoute(useRoute())

   let { data } = await useStoryblokApi().get(`cdn/stories`, {
      version: useSBVersion(),
      language,
      resolve_links: 'url',
      by_uuids: uuids.join(','),
   })

   if (!data?.stories?.length) return []

   if (contentOnly) {
      data = data?.stories?.map((story) => {
         return {
            ...story.content,
            url: story.full_slug,
            uuid: story.uuid,
         }
      })
   }

   return data || []
}

import { ref } from 'vue'
import type { Page } from '~/interfaces/Page'

const currentPage = ref({})

export const useStoryblokHelper = () => {
   const setPage = (page: Page) => {
      currentPage.value = page
   }

   return {
      currentPage,
      setPage,
   }
}
