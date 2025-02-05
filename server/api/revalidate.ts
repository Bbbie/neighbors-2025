export default defineEventHandler(async (event) => {
   let { full_slug } = await readBody(event)

   if (full_slug == 'home') full_slug = ''

   const revalidateURL = `https://nuxt3-template-git-feat-isr-deployment-fiveam.vercel.app/${full_slug}`

   const responses = []
   for (let url of [revalidateURL]) {
      //, `${revalidateURL}?url=/${full_slug}`
      const response = await fetch(revalidateURL, {
         method: 'HEAD',
         headers: {
            'x-prerender-revalidate': process.env.VERCEL_BYPASS_TOKEN,
         } as any,
      })
      responses.push(`[X-Vercel-Cache:${response.headers.get('X-Vercel-Cache')}]: ${url}`)
   }

   return responses
})
