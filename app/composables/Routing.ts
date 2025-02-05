import Languages from '~/enums/Languages'
import type { Link } from '~/interfaces/Link'

export const useParseRoute = (route): { language: string; path: string } => {
   const { path } = route.params
   let _path = path

   const result = {
      language: Languages.DEFAULT as string,
      path: 'home',
   }

   //// LANGUAGE
   // Check if Path includes a supported language (from Langauges-Enum)
   if ((Object as any).values(Languages).includes(path[0])) {
      result.language = path[0]
      _path = [...path].filter((entry) => entry !== path[0]) // Remove found language from storyblok-path
   }
   // Enable hidden language selector from Storybridge
   if (route.query._storyblok_lang) {
      result.language = route.query._storyblok_lang as string
   }

   //// STORYBLOK PATH
   // Format remaining path for fetching story
   if (_path.length) {
      result.path = [..._path].join('/')
   }

   return result
}

export const useParseLink = (link?: Link) => {
   if (!link || !link.cached_url) return ''
   let url = ''

   switch (link.linktype) {
      case 'story':
         if (link.cached_url == 'home') {
            url = '/'
            break
         } else {
            url = `/${link.cached_url}`.replace('/c/', '')
            break
         }
      case 'email':
         url = `mailto:${link.cached_url}`
         break
      case 'url': {
         url = link.cached_url
         break
      }
   }
   if (!url) url = link.cached_url
   if (url.slice(0, 2) == '//') url = url.slice(1, url.length)
   if (link?.anchor) url += `#${encodeURI(link.anchor)}`

   return url
}
