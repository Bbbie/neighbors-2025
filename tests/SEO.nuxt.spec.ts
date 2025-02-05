import { setup, createPage } from '@nuxt/test-utils/e2e'
import { describe, it, expect } from 'vitest'
import { parse } from 'node-html-parser'

describe('SEO', async () => {
   await setup({
      host: 'https://localhost:3000',
   })

   it('Should have at least one <h1>', async () => {
      const page = await createPage('/')
      expect(await page.innerHTML('body')).toContain('<h1')
   })

   it('Should have an og:image', async () => {
      const page = await createPage('/')
      const dom = parse(await page.innerHTML('html'))
      const ogImagePath = dom.querySelector(`[property="og:image"]`)?.getAttribute('content')

      expect(ogImagePath?.length).toBeGreaterThan(12)
   })

   it('Should not use default title suffix (Nuxt-3-Template)', async () => {
      const page = await createPage('/')
      const dom = parse(await page.innerHTML('html'))
      const title = dom.querySelector(`title`)?.innerHTML

      expect(title!.includes('Nuxt-3-Template')).toBe(false)
   })
})
