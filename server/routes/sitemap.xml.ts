import { getSitemapURLs } from './sitemap_fetch'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
   const BASE_URL = getRequestURL(event)?.origin
   if (!BASE_URL) {
      throw createError({
         statusCode: 500,
         statusMessage: 'BASE_URL could not be retrieved',
      })
   }

   const sitemap = new SitemapStream({ hostname: BASE_URL })

   ;(await getSitemapURLs()).forEach((path: any) => {
      sitemap.write({
         url: path.real_path,
         changefreq: 'monthly',
         lastmod: new Date().toISOString(),
      })
   })

   sitemap.end()
   return streamToPromise(sitemap)
})
