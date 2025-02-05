import type { GlobalSettings } from '~/interfaces/GlobalSettings'
import type { Page } from '~/interfaces/Page'

export const useOpenGraph = (page: Page, globalSettings: GlobalSettings): any[] => {
   return [
      {
         property: 'og:title',
         content: `${page.title} ${globalSettings?.divider || '|'} ${globalSettings?.page_title}`,
      },
      {
         property: 'og:description',
         content: page.description || globalSettings?.description,
      },
      {
         property: 'og:image',
         content: (page?.og_image?.filename || globalSettings?.og_image?.filename) + '/m/1200x630',
      },
      {
         property: 'og:image:alt',
         content: page?.og_image?.alt,
      },
      {
         property: 'og:locale',
         content: 'de',
      },
   ]
}
